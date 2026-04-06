/* ===================================================
   TRACKER.JS — 클라이언트 분석 엔진 (localStorage 기반)
   =================================================== */
'use strict';

var TRACK_EVENTS_KEY  = 'ccko_ev_v2';
var TRACK_SESSION_KEY = 'ccko_sess_v2';
var TRACK_GEO_KEY     = 'ccko_geo_v2';
var MAX_EVENTS        = 2000;

var CCTracker = {

  /* ---- 이벤트 기록 ---- */
  rec: function(type, data) {
    try {
      var events = this._loadEvents();
      var ev = { t: type, ts: Date.now() };
      if (data && typeof data === 'object') {
        var keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
          ev[keys[i]] = data[keys[i]];
        }
      }
      events.push(ev);
      // 원형 버퍼: MAX_EVENTS 초과 시 오래된 것부터 제거
      if (events.length > MAX_EVENTS) {
        events = events.slice(events.length - MAX_EVENTS);
      }
      localStorage.setItem(TRACK_EVENTS_KEY, JSON.stringify(events));
    } catch (_) {}
  },

  /* ---- 이벤트 로드 ---- */
  _loadEvents: function() {
    try {
      var raw = localStorage.getItem(TRACK_EVENTS_KEY);
      if (!raw) return [];
      var data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch (_) { return []; }
  },

  /* ---- 필터링된 이벤트 조회 ---- */
  getEvents: function(type) {
    try {
      var events = this._loadEvents();
      if (!type) return events;
      return events.filter(function(e) { return e.t === type; });
    } catch (_) { return []; }
  },

  /* ---- 카테고리별 상위 클릭 항목 ---- */
  topClicks: function(category, n) {
    try {
      n = n || 10;
      var events = this.getEvents('card');
      if (category) {
        events = events.filter(function(e) { return e.cat === category; });
      }
      var counts = {};
      var names  = {};
      for (var i = 0; i < events.length; i++) {
        var e = events[i];
        var key = e.id || 'unknown';
        counts[key] = (counts[key] || 0) + 1;
        if (e.name) names[key] = e.name;
      }
      var result = [];
      var ks = Object.keys(counts);
      for (var j = 0; j < ks.length; j++) {
        result.push({ id: ks[j], name: names[ks[j]] || ks[j], count: counts[ks[j]] });
      }
      result.sort(function(a, b) { return b.count - a.count; });
      return result.slice(0, n);
    } catch (_) { return []; }
  },

  /* ---- 광고 슬롯별 클릭 ---- */
  adClicks: function() {
    try {
      var events = this.getEvents('ad');
      var counts = {};
      for (var i = 0; i < events.length; i++) {
        var slot = events[i].slot || 'unknown';
        counts[slot] = (counts[slot] || 0) + 1;
      }
      return counts;
    } catch (_) { return {}; }
  },

  /* ---- 파트너 클릭 ---- */
  partnerClicks: function() {
    try {
      var events = this.getEvents('partner');
      var counts = {};
      for (var i = 0; i < events.length; i++) {
        var id = events[i].id || 'unknown';
        counts[id] = (counts[id] || 0) + 1;
      }
      return counts;
    } catch (_) { return {}; }
  },

  /* ---- 오늘 시간대별 이벤트 수 (0-23) ---- */
  hourlyToday: function() {
    try {
      var result = [];
      for (var h = 0; h < 24; h++) result.push(0);
      var now   = new Date();
      var y     = now.getFullYear();
      var mo    = now.getMonth();
      var d     = now.getDate();
      var events = this._loadEvents();
      for (var i = 0; i < events.length; i++) {
        var dt = new Date(events[i].ts);
        if (dt.getFullYear() === y && dt.getMonth() === mo && dt.getDate() === d) {
          result[dt.getHours()]++;
        }
      }
      return result;
    } catch (_) { return new Array(24).fill(0); }
  },

  /* ---- 최근 30일 일별 이벤트 수 ---- */
  daily30: function() {
    try {
      var result = [];
      var now    = Date.now();
      var DAY_MS = 86400000;
      // 30일치 날짜 배열 (오래된 순)
      var dateMap = {};
      for (var i = 29; i >= 0; i--) {
        var dt = new Date(now - i * DAY_MS);
        var key = dt.getFullYear() + '-' +
          String(dt.getMonth() + 1).padStart(2, '0') + '-' +
          String(dt.getDate()).padStart(2, '0');
        dateMap[key] = 0;
      }
      var events = this._loadEvents();
      for (var j = 0; j < events.length; j++) {
        var evDt = new Date(events[j].ts);
        var evKey = evDt.getFullYear() + '-' +
          String(evDt.getMonth() + 1).padStart(2, '0') + '-' +
          String(evDt.getDate()).padStart(2, '0');
        if (evKey in dateMap) {
          dateMap[evKey]++;
        }
      }
      var keys = Object.keys(dateMap);
      for (var k = 0; k < keys.length; k++) {
        result.push({ date: keys[k], count: dateMap[keys[k]] });
      }
      return result;
    } catch (_) { return []; }
  },

  /* ---- 브라우저 통계 ---- */
  browserStats: function() {
    try {
      return this._aggSessions('browser');
    } catch (_) { return []; }
  },

  /* ---- OS 통계 ---- */
  osStats: function() {
    try {
      return this._aggSessions('os');
    } catch (_) { return []; }
  },

  /* ---- 기기 통계 ---- */
  deviceStats: function() {
    try {
      return this._aggSessions('device');
    } catch (_) { return []; }
  },

  /* ---- 세션 필드별 집계 헬퍼 ---- */
  _aggSessions: function(field) {
    try {
      var sessions = this._loadSessions();
      var counts = {};
      for (var i = 0; i < sessions.length; i++) {
        var val = sessions[i][field] || 'Other';
        counts[val] = (counts[val] || 0) + 1;
      }
      var result = [];
      var ks = Object.keys(counts);
      for (var j = 0; j < ks.length; j++) {
        result.push({ name: ks[j], count: counts[ks[j]] });
      }
      result.sort(function(a, b) { return b.count - a.count; });
      return result;
    } catch (_) { return []; }
  },

  /* ---- 국가 통계 ---- */
  countryStats: function() {
    try {
      var sessions = this._loadSessions();
      var counts  = {};
      var flags   = {};
      for (var i = 0; i < sessions.length; i++) {
        var s = sessions[i];
        var country = s.country || 'Unknown';
        counts[country] = (counts[country] || 0) + 1;
        if (s.countryCode) flags[country] = this._countryFlag(s.countryCode);
      }
      var result = [];
      var ks = Object.keys(counts);
      for (var j = 0; j < ks.length; j++) {
        result.push({ country: ks[j], flag: flags[ks[j]] || '🌐', count: counts[ks[j]] });
      }
      result.sort(function(a, b) { return b.count - a.count; });
      return result;
    } catch (_) { return []; }
  },

  /* ---- 국가 코드 → 국기 이모지 ---- */
  _countryFlag: function(code) {
    try {
      if (!code || code.length !== 2) return '🌐';
      var chars = code.toUpperCase().split('');
      return String.fromCodePoint(0x1F1E6 + chars[0].charCodeAt(0) - 65) +
             String.fromCodePoint(0x1F1E6 + chars[1].charCodeAt(0) - 65);
    } catch (_) { return '🌐'; }
  },

  /* ---- 검색어 통계 ---- */
  searchStats: function(n) {
    try {
      n = n || 30;
      var events = this.getEvents('search');
      var counts = {};
      for (var i = 0; i < events.length; i++) {
        var q = (events[i].q || '').trim().toLowerCase();
        if (!q) continue;
        counts[q] = (counts[q] || 0) + 1;
      }
      var result = [];
      var ks = Object.keys(counts);
      for (var j = 0; j < ks.length; j++) {
        result.push({ query: ks[j], count: counts[ks[j]] });
      }
      result.sort(function(a, b) { return b.count - a.count; });
      return result.slice(0, n);
    } catch (_) { return []; }
  },

  /* ---- 요약 통계 ---- */
  summary: function() {
    try {
      var events   = this._loadEvents();
      var sessions = this._loadSessions();
      var now = new Date();
      var y   = now.getFullYear();
      var mo  = now.getMonth();
      var d   = now.getDate();
      var todayEvents = 0;
      var todayDates  = {};
      for (var i = 0; i < events.length; i++) {
        var dt = new Date(events[i].ts);
        if (dt.getFullYear() === y && dt.getMonth() === mo && dt.getDate() === d) {
          todayEvents++;
        }
        var dk = dt.getFullYear() + '-' + dt.getMonth() + '-' + dt.getDate();
        todayDates[dk] = true;
      }
      var todaySessions = 0;
      for (var j = 0; j < sessions.length; j++) {
        var sdt = new Date(sessions[j].ts);
        if (sdt.getFullYear() === y && sdt.getMonth() === mo && sdt.getDate() === d) {
          todaySessions++;
        }
      }
      return {
        totalEvents:   events.length,
        todayEvents:   todayEvents,
        totalSessions: sessions.length,
        todaySessions: todaySessions,
        uniqueDays:    Object.keys(todayDates).length
      };
    } catch (_) {
      return { totalEvents: 0, todayEvents: 0, totalSessions: 0, todaySessions: 0, uniqueDays: 0 };
    }
  },

  /* ---- 세션 로드 ---- */
  _loadSessions: function() {
    try {
      var raw = localStorage.getItem(TRACK_SESSION_KEY);
      if (!raw) return [];
      var data = JSON.parse(raw);
      return Array.isArray(data) ? data : [];
    } catch (_) { return []; }
  },

  /* ---- 세션 기록 (페이지 로드 시 1회 호출) ---- */
  recordSession: function() {
    try {
      var ua      = navigator.userAgent || '';
      var parsed  = this._parseUA(ua);
      var sessions = this._loadSessions();
      var sess = {
        ts:          Date.now(),
        browser:     parsed.browser,
        os:          parsed.os,
        device:      parsed.device,
        referrer:    document.referrer || 'direct',
        page:        location.pathname,
        country:     '',
        countryCode: '',
        city:        ''
      };
      sessions.push(sess);
      // 최대 2000개 유지
      if (sessions.length > MAX_EVENTS) {
        sessions = sessions.slice(sessions.length - MAX_EVENTS);
      }
      localStorage.setItem(TRACK_SESSION_KEY, JSON.stringify(sessions));

      // geo 데이터 비동기 패치 (마지막 세션에 보강)
      this._fetchGeo();
    } catch (_) {}
  },

  /* ---- UA 파싱 ---- */
  _parseUA: function(ua) {
    try {
      var browser = 'Other';
      var os      = 'Other';
      var device  = 'desktop';

      // 브라우저 감지 (순서 중요)
      if (/SamsungBrowser/i.test(ua))        browser = 'Samsung Browser';
      else if (/OPR|Opera/i.test(ua))        browser = 'Opera';
      else if (/Edg\//i.test(ua))            browser = 'Edge';
      else if (/Chrome/i.test(ua))           browser = 'Chrome';
      else if (/Firefox/i.test(ua))          browser = 'Firefox';
      else if (/Safari/i.test(ua))           browser = 'Safari';

      // OS 감지
      if (/Windows NT/i.test(ua))            os = 'Windows';
      else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
      else if (/Android/i.test(ua))          os = 'Android';
      else if (/Mac OS X/i.test(ua))         os = 'macOS';
      else if (/Linux/i.test(ua))            os = 'Linux';

      // 기기 감지
      if (/Mobi|Android.*Mobile|iPhone/i.test(ua)) {
        device = 'mobile';
      } else if (/iPad|Android(?!.*Mobile)|Tablet/i.test(ua)) {
        device = 'tablet';
      }

      return { browser: browser, os: os, device: device };
    } catch (_) {
      return { browser: 'Other', os: 'Other', device: 'desktop' };
    }
  },

  /* ---- Geo 데이터 패치 (6시간 캐시) ---- */
  _fetchGeo: function() {
    try {
      var cached = null;
      try {
        var raw = localStorage.getItem(TRACK_GEO_KEY);
        if (raw) cached = JSON.parse(raw);
      } catch (_) {}

      var SIX_HOURS = 6 * 60 * 60 * 1000;
      if (cached && cached.ts && (Date.now() - cached.ts < SIX_HOURS)) {
        // 캐시 유효 — 마지막 세션에 geo 보강
        this._applyGeoToLastSession(cached);
        return;
      }

      var self = this;
      fetch('https://ipapi.co/json/')
        .then(function(res) { return res.json(); })
        .then(function(data) {
          try {
            var geo = {
              ts:           Date.now(),
              country_name: data.country_name || '',
              country_code: data.country_code || '',
              city:         data.city || '',
              region:       data.region || ''
            };
            localStorage.setItem(TRACK_GEO_KEY, JSON.stringify(geo));
            self._applyGeoToLastSession(geo);
          } catch (_) {}
        })
        .catch(function() {});
    } catch (_) {}
  },

  /* ---- geo 데이터를 country 미설정 세션 전체에 소급 적용 ---- */
  _applyGeoToLastSession: function(geo) {
    try {
      var sessions = this._loadSessions();
      if (sessions.length === 0) return;
      var changed = false;
      for (var i = 0; i < sessions.length; i++) {
        if (!sessions[i].country) {
          sessions[i].country     = geo.country_name || '';
          sessions[i].countryCode = geo.country_code || '';
          sessions[i].city        = geo.city || '';
          changed = true;
        }
      }
      if (changed) localStorage.setItem(TRACK_SESSION_KEY, JSON.stringify(sessions));
    } catch (_) {}
  },

  /* ---- 도시 통계 ---- */
  cityStats: function(n) {
    try {
      n = n || 20;
      var sessions = this._loadSessions();
      var counts = {};
      for (var i = 0; i < sessions.length; i++) {
        var city = sessions[i].city || '';
        if (!city) continue;
        counts[city] = (counts[city] || 0) + 1;
      }
      var result = [];
      var ks = Object.keys(counts);
      for (var j = 0; j < ks.length; j++) {
        result.push({ city: ks[j], count: counts[ks[j]] });
      }
      result.sort(function(a, b) { return b.count - a.count; });
      return result.slice(0, n);
    } catch (_) { return []; }
  }

};
