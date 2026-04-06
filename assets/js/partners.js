/* ===================================================
   PARTNERS.JS — 파트너 링크 관리 + 신청 처리
   =================================================== */
'use strict';

var PARTNERS_KEY     = 'ccko_partners_v1';
var PARTNER_APPS_KEY = 'ccko_partner_apps_v1';

// 기본 파트너 (최초 실행 시 시드)
var DEFAULT_PARTNERS = [
  {
    id: 'telegram-bots',
    name: 'Telegram Bots',
    url: 'https://luckybbjason1.github.io/telegram-bots/',
    icon: '🤖',
    desc: 'Telegram 봇 개발 가이드',
    enabled: true,
    createdAt: 0
  }
];

/* ---- 파트너 CRUD ---- */

function loadPartners() {
  try {
    var raw = localStorage.getItem(PARTNERS_KEY);
    if (raw === null) {
      savePartners(DEFAULT_PARTNERS);
      return DEFAULT_PARTNERS.slice();
    }
    var data = JSON.parse(raw);
    return Array.isArray(data) ? data : DEFAULT_PARTNERS.slice();
  } catch (_) { return DEFAULT_PARTNERS.slice(); }
}

function savePartners(arr) {
  localStorage.setItem(PARTNERS_KEY, JSON.stringify(arr));
}

function addPartner(data) {
  var partners = loadPartners();
  var partner = {
    id: 'p_' + Date.now(),
    name:    (data.name    || '').trim(),
    url:     (data.url     || '').trim(),
    icon:    (data.icon    || '🔗').trim() || '🔗',
    desc:    (data.desc    || '').trim(),
    enabled: true,
    createdAt: Date.now()
  };
  partners.push(partner);
  savePartners(partners);
  return partner;
}

function updatePartner(id, data) {
  var partners = loadPartners();
  var idx = -1;
  for (var i = 0; i < partners.length; i++) {
    if (partners[i].id === id) { idx = i; break; }
  }
  if (idx === -1) return false;
  partners[idx] = Object.assign({}, partners[idx], data);
  savePartners(partners);
  return true;
}

function deletePartner(id) {
  savePartners(loadPartners().filter(function(p) { return p.id !== id; }));
}

/* ---- 신청 CRUD ---- */

function loadApplications() {
  try {
    var data = JSON.parse(localStorage.getItem(PARTNER_APPS_KEY) || '[]');
    return Array.isArray(data) ? data : [];
  } catch (_) { return []; }
}

function saveApplications(arr) {
  localStorage.setItem(PARTNER_APPS_KEY, JSON.stringify(arr));
}

function submitPartnerApplication(data) {
  var apps = loadApplications();
  apps.push({
    id:          'app_' + Date.now(),
    name:        (data.name    || '').trim(),
    url:         (data.url     || '').trim(),
    desc:        (data.desc    || '').trim(),
    submittedAt: Date.now(),
    status:      'pending'
  });
  saveApplications(apps);
}

function approveApplication(id) {
  var apps = loadApplications();
  var app = null;
  for (var i = 0; i < apps.length; i++) {
    if (apps[i].id === id) { app = apps[i]; break; }
  }
  if (!app) return;
  addPartner({ name: app.name, url: app.url, desc: app.desc });
  saveApplications(apps.filter(function(a) { return a.id !== id; }));
}

function rejectApplication(id) {
  saveApplications(loadApplications().filter(function(a) { return a.id !== id; }));
}

/* ---- 프론트엔드 렌더 ---- */

function renderPartnerLinks() {
  var grid = document.getElementById('partner-links-grid');
  if (!grid) return;

  var partners = loadPartners().filter(function(p) { return p.enabled; });
  grid.textContent = '';

  var section = document.querySelector('.partner-links');
  if (partners.length === 0) {
    if (section) section.style.display = 'none';
    return;
  }
  if (section) section.style.removeProperty('display');

  partners.forEach(function(p) {
    var a = document.createElement('a');
    a.href = p.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'partner-link-card';
    a.setAttribute('title', p.desc || p.name);
    (function(partner) {
      a.addEventListener('click', function() {
        try { CCTracker.rec('partner', { id: partner.id, name: partner.name }); } catch (_) {}
      });
    })(p);

    var icon = document.createElement('span');
    icon.className = 'partner-link-card__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = p.icon || '🔗';
    a.appendChild(icon);

    a.appendChild(document.createTextNode(p.name));
    grid.appendChild(a);
  });
}

/* ---- 신청 폼 핸들러 ---- */

function handlePartnerApply(e) {
  if (e) e.preventDefault();

  var nameEl = document.getElementById('apply-site-name');
  var urlEl  = document.getElementById('apply-url');
  var descEl = document.getElementById('apply-desc');
  var msgEl  = document.getElementById('partner-apply-msg');

  if (!nameEl || !urlEl) return false;

  var name = nameEl.value.trim();
  var url  = urlEl.value.trim();
  var desc = descEl ? descEl.value.trim() : '';

  function setMsg(text, type) {
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.className = 'partner-apply__msg partner-apply__msg--' + type;
  }

  if (!name) { setMsg('사이트명을 입력해주세요.', 'error'); return false; }
  if (!url)  { setMsg('URL을 입력해주세요.', 'error'); return false; }

  try { new URL(url); } catch (_) {
    setMsg('올바른 URL을 입력해주세요. (예: https://example.com)', 'error');
    return false;
  }

  // 중복 신청 방지
  var apps = loadApplications();
  for (var i = 0; i < apps.length; i++) {
    if (apps[i].url === url) {
      setMsg('이미 신청된 URL입니다.', 'error');
      return false;
    }
  }

  submitPartnerApplication({ name: name, url: url, desc: desc });

  nameEl.value = '';
  urlEl.value  = '';
  if (descEl) descEl.value = '';

  setMsg('✅ 신청이 완료되었습니다! 검토 후 추가됩니다.', 'success');
  setTimeout(function() { if (msgEl) msgEl.textContent = ''; }, 5000);
  return false;
}
