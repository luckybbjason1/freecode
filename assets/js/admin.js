/* ===================================================
   ADMIN.JS — 관리자 인증 + 광고 관리 UI
   =================================================== */
'use strict';

const ADMIN_SESSION_KEY = 'ccko_adm_sess';
const SESSION_MS = 4 * 60 * 60 * 1000; // 4시간

// SHA-256 해시 — 사전 계산됨
const CREDS = {
  username: 'luckybbjason',
  pwdHash:  'e8aced1b8606debd1ecf71cb338da914899ec0a60ef6ad763629c8aa26d836cf'
};

/* ---- 인증 ---- */

async function sha256Hex(str) {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(str)
  );
  return Array.from(new Uint8Array(buf))
    .map(function(b) { return b.toString(16).padStart(2, '0'); })
    .join('');
}

async function adminLogin(user, pwd) {
  try {
    const hash = await sha256Hex(pwd);
    if (user === CREDS.username && hash === CREDS.pwdHash) {
      sessionStorage.setItem(ADMIN_SESSION_KEY,
        JSON.stringify({ ok: true, ts: Date.now() }));
      return true;
    }
    return false;
  } catch (_) {
    return false;
  }
}

function isAdminLoggedIn() {
  try {
    const data = JSON.parse(sessionStorage.getItem(ADMIN_SESSION_KEY) || '{}');
    return data.ok === true && (Date.now() - data.ts < SESSION_MS);
  } catch (_) { return false; }
}

function adminLogout() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  showLoginScreen();
}

/* ---- UI 전환 ---- */

function showLoginScreen() {
  const login = document.getElementById('login-screen');
  const dash  = document.getElementById('dashboard-screen');
  if (login) login.style.display = 'flex';
  if (dash)  dash.style.display  = 'none';
}

function showDashboard() {
  const login = document.getElementById('login-screen');
  const dash  = document.getElementById('dashboard-screen');
  if (login) login.style.display = 'none';
  if (dash)  { dash.style.display = 'flex'; showSection('dashboard'); }
}

/* ---- 섹션 전환 ---- */

var SECTION_META = {
  dashboard:      { title: '대시보드',         sub: '사이트 현황을 한눈에 파악하세요' },
  ads:            { title: '광고 관리',         sub: '광고 슬롯을 추가, 편집, 활성화/비활성화하세요' },
  partners:       { title: '파트너 링크 관리',  sub: '파트너 링크를 추가하고 신청을 승인/거절하세요' },
  analytics:      { title: '트래픽 분석',       sub: '이벤트 및 세션 집계 데이터' },
  'content-stats':{ title: '인기 콘텐츠',       sub: '카드 클릭 기반 인기도' },
  'geo-stats':    { title: '방문자 지역',        sub: '국가 및 도시 분포' },
  'tech-stats':   { title: '기기·브라우저',      sub: '기기, OS, 브라우저 분포' },
  'ad-stats':     { title: '광고 클릭 통계',     sub: '슬롯별 클릭 집계' },
  'partner-stats':{ title: '파트너 클릭 통계',   sub: '파트너별 클릭 집계' },
  'search-stats': { title: '검색어 통계',        sub: '사용자 검색어 Top 30' }
};

function showSection(name) {
  // 네비 활성화
  document.querySelectorAll('.admin-nav-item[data-section]').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-section') === name);
  });
  // 섹션 표시: .section-block / .section-block.active 방식
  document.querySelectorAll('.section-block').forEach(function(sec) {
    sec.classList.remove('active');
  });
  var target = document.getElementById('section-' + name);
  if (target) target.classList.add('active');
  // 헤더 업데이트
  var meta = SECTION_META[name] || { title: name, sub: '' };
  var titleEl = document.getElementById('main-title');
  var subEl   = document.getElementById('main-sub');
  if (titleEl) titleEl.textContent = meta.title;
  if (subEl)   subEl.textContent   = meta.sub;
  // 섹션별 렌더
  if (name === 'dashboard')      renderDashboard();
  if (name === 'ads')            renderAdSlotsList();
  if (name === 'partners')       { renderPartnersList(); updateAppBadge(); }
  if (name === 'analytics')      renderAnalyticsSection();
  if (name === 'content-stats')  renderContentStatsSection();
  if (name === 'geo-stats')      renderGeoSection();
  if (name === 'tech-stats')     renderTechSection();
  if (name === 'ad-stats')       renderAdStatsSection();
  if (name === 'partner-stats')  renderPartnerStatsSection();
  if (name === 'search-stats')   renderSearchStatsSection();
}

/* ---- 대시보드 렌더 ---- */

function renderDashboard() {
  renderContentStats();
  renderCategoryBarChart();
  renderOpsStats();
  renderPartnerSummary();
  renderAdsSummary();
  updateAppBadge();
}

function renderContentStats() {
  var grid = document.getElementById('content-stat-cards');
  if (!grid) return;
  grid.textContent = '';
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.categories) return;
  SITE_DATA.categories.forEach(function(cat) {
    var card = document.createElement('div');
    card.className = 'dash-card';
    var accent = document.createElement('div');
    accent.className = 'dash-card__accent';
    accent.style.background = cat.id === 'skills' ? 'var(--gold)' :
      cat.id === 'agents' ? 'var(--emerald)' : 'var(--accent-purple)';
    card.appendChild(accent);
    var label = document.createElement('div');
    label.className = 'dash-card__label';
    label.textContent = cat.icon + ' ' + cat.label;
    card.appendChild(label);
    var value = document.createElement('div');
    value.className = 'dash-card__value';
    value.textContent = (cat.count || 0).toLocaleString('ko-KR');
    card.appendChild(value);
    var sub = document.createElement('div');
    sub.className = 'dash-card__sub';
    var dataArr = SITE_DATA[cat.id];
    sub.textContent = '샘플 ' + (Array.isArray(dataArr) ? dataArr.length : 0) + '개 등록';
    card.appendChild(sub);
    grid.appendChild(card);
  });
}

function renderCategoryBarChart() {
  var chart = document.getElementById('category-bar-chart');
  if (!chart) return;
  chart.textContent = '';
  if (typeof SITE_DATA === 'undefined' || !SITE_DATA.categories) return;
  var total = SITE_DATA.categories.reduce(function(s, c) { return s + (c.count || 0); }, 0);
  var colors = ['var(--gold)', 'var(--emerald)', 'var(--accent-purple)', 'var(--accent-blue)', '#f97316', '#ec4899'];
  SITE_DATA.categories.forEach(function(cat, i) {
    var pct = total > 0 ? Math.round((cat.count || 0) / total * 100) : 0;
    var item = document.createElement('div');
    item.className = 'bar-item';
    var lbl = document.createElement('div');
    lbl.className = 'bar-label';
    lbl.textContent = cat.label;
    item.appendChild(lbl);
    var track = document.createElement('div');
    track.className = 'bar-track';
    var fill = document.createElement('div');
    fill.className = 'bar-fill';
    fill.style.width = '0%';
    fill.style.background = colors[i % colors.length];
    track.appendChild(fill);
    item.appendChild(track);
    var cnt = document.createElement('div');
    cnt.className = 'bar-count';
    cnt.textContent = pct + '%';
    item.appendChild(cnt);
    chart.appendChild(item);
    // 애니메이션
    requestAnimationFrame(function() {
      setTimeout(function() { fill.style.width = pct + '%'; }, 50);
    });
  });
}

function renderOpsStats() {
  var el = document.getElementById('ops-stats');
  if (!el) return;
  el.textContent = '';
  var ads      = loadAds();
  var slots    = getAdSlots();
  var partners = loadPartners();
  var apps     = loadApplications();
  var activeAds = slots.filter(function(s) { var a = ads[s.id]; return a && a.enabled; }).length;
  var rows = [
    { label: '전체 광고 슬롯',    value: String(slots.length),         color: '' },
    { label: '활성화된 광고',      value: String(activeAds),            color: 'var(--emerald)' },
    { label: '등록된 파트너',      value: String(partners.length),      color: 'var(--gold)' },
    { label: '승인 대기 신청',     value: String(apps.length),          color: apps.length > 0 ? 'var(--gold)' : '' }
  ];
  rows.forEach(function(r) {
    var row = document.createElement('div');
    row.style.cssText = 'display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;border-bottom:1px solid rgba(255,255,255,0.06);';
    var lbl = document.createElement('span');
    lbl.style.cssText = 'font-size:var(--text-sm);color:var(--text-secondary);';
    lbl.textContent = r.label;
    var val = document.createElement('span');
    val.style.cssText = 'font-family:var(--font-numeric);font-weight:700;font-size:var(--text-base);' + (r.color ? 'color:' + r.color + ';' : 'color:var(--text-primary);');
    val.textContent = r.value;
    row.appendChild(lbl);
    row.appendChild(val);
    el.appendChild(row);
  });
}

function renderPartnerSummary() {
  var card = document.getElementById('partner-summary-card');
  if (!card) return;
  card.textContent = '';
  var partners = loadPartners();
  var apps     = loadApplications();
  var enabled  = partners.filter(function(p) { return p.enabled; }).length;
  var lbl = document.createElement('div');
  lbl.className = 'dash-card__label';
  lbl.style.marginBottom = '1rem';
  lbl.textContent = '파트너 링크 현황';
  card.appendChild(lbl);
  var val = document.createElement('div');
  val.className = 'dash-card__value dash-card__value--em';
  val.textContent = String(partners.length);
  card.appendChild(val);
  var sub = document.createElement('div');
  sub.className = 'dash-card__sub';
  sub.style.marginTop = '.5rem';
  var t1 = document.createTextNode('표시중 ');
  sub.appendChild(t1);
  var s1 = document.createElement('strong');
  s1.style.color = 'var(--emerald)';
  s1.textContent = String(enabled) + '개';
  sub.appendChild(s1);
  sub.appendChild(document.createTextNode(' \u00a0|\u00a0 대기 신청 '));
  var s2 = document.createElement('strong');
  s2.style.color = 'var(--gold)';
  s2.textContent = String(apps.length) + '건';
  sub.appendChild(s2);
  card.appendChild(sub);
}

function renderAdsSummary() {
  var card = document.getElementById('ads-summary-card');
  if (!card) return;
  card.textContent = '';
  var ads   = loadAds();
  var slots = getAdSlots();
  var active = slots.filter(function(s) { var a = ads[s.id]; return a && a.enabled; }).length;
  var lbl = document.createElement('div');
  lbl.className = 'dash-card__label';
  lbl.style.marginBottom = '1rem';
  lbl.textContent = '광고 현황';
  card.appendChild(lbl);
  var val = document.createElement('div');
  val.className = 'dash-card__value dash-card__value--blue';
  val.textContent = String(active);
  card.appendChild(val);
  var sub = document.createElement('div');
  sub.className = 'dash-card__sub';
  sub.style.marginTop = '.5rem';
  sub.appendChild(document.createTextNode('전체 '));
  var s1 = document.createElement('strong');
  s1.style.color = 'var(--accent-blue,#5ab5ff)';
  s1.textContent = String(slots.length) + '개';
  sub.appendChild(s1);
  sub.appendChild(document.createTextNode(' 슬롯 중 활성화'));
  card.appendChild(sub);
}

function updateAppBadge() {
  var badge = document.getElementById('sidebar-app-badge');
  if (!badge) return;
  var apps = loadApplications();
  if (apps.length > 0) {
    badge.textContent = String(apps.length);
    badge.style.display = '';
  } else {
    badge.style.display = 'none';
  }
}

function refreshCurrentSection() {
  var active = document.querySelector('.admin-nav-item.active[data-section]');
  if (active) showSection(active.getAttribute('data-section'));
}

/* ---- 파트너 링크 관리 ---- */

function renderPartnersList() {
  const listEl = document.getElementById('partners-list');
  const appsEl = document.getElementById('applications-list');
  if (!listEl || !appsEl) return;

  // 통계
  const partners = loadPartners();
  const apps     = loadApplications();
  const statP = document.getElementById('stat-partners');
  const statA = document.getElementById('stat-apps');
  if (statP) statP.textContent = String(partners.length);
  if (statA) statA.textContent = String(apps.length);

  // ── 승인된 파트너 ──
  listEl.textContent = '';
  if (partners.length === 0) {
    const empty = document.createElement('div');
    empty.style.cssText = 'padding:2rem;text-align:center;color:var(--text-muted);font-size:var(--text-sm);';
    empty.textContent = '등록된 파트너 링크가 없습니다.';
    listEl.appendChild(empty);
  } else {
    partners.forEach(function(p) {
      listEl.appendChild(makePartnerRow(p));
    });
  }

  // ── 신청 대기 ──
  appsEl.textContent = '';
  if (apps.length === 0) {
    const empty = document.createElement('div');
    empty.style.cssText = 'padding:1.5rem;text-align:center;color:var(--text-muted);font-size:var(--text-sm);';
    empty.textContent = '대기 중인 신청이 없습니다.';
    appsEl.appendChild(empty);
  } else {
    apps.forEach(function(app) {
      appsEl.appendChild(makeAppRow(app));
    });
  }
}

function makePartnerRow(p) {
  const row = document.createElement('div');
  row.className = 'ad-slot-row' + (p.enabled ? ' ad-slot-row--active' : '');
  row.id = 'prow-' + p.id;

  const info = document.createElement('div');
  info.className = 'ad-slot-row__info';

  const name = document.createElement('div');
  name.className = 'ad-slot-row__name';
  name.textContent = (p.icon || '🔗') + ' ' + p.name;
  info.appendChild(name);

  const url = document.createElement('div');
  url.className = 'ad-slot-row__id';
  url.textContent = p.url;
  info.appendChild(url);

  row.appendChild(info);

  const status = document.createElement('span');
  status.className = 'ad-slot-row__status ad-slot-row__status--' + (p.enabled ? 'on' : 'off');
  status.id = 'pstatus-' + p.id;
  status.textContent = p.enabled ? '표시중' : '숨김';
  row.appendChild(status);

  const actions = document.createElement('div');
  actions.className = 'ad-slot-row__actions';

  // 토글
  const toggleLabel = document.createElement('label');
  toggleLabel.className = 'toggle-switch';
  const toggleInput = document.createElement('input');
  toggleInput.type = 'checkbox';
  toggleInput.checked = !!p.enabled;
  toggleInput.addEventListener('change', function() {
    updatePartner(p.id, { enabled: this.checked });
    const s = document.getElementById('pstatus-' + p.id);
    const r = document.getElementById('prow-' + p.id);
    if (s) { s.textContent = this.checked ? '표시중' : '숨김'; s.className = 'ad-slot-row__status ad-slot-row__status--' + (this.checked ? 'on' : 'off'); }
    if (r) { r.classList.toggle('ad-slot-row--active', this.checked); }
    renderPartnersList();
  });
  const track = document.createElement('span'); track.className = 'toggle-switch__track';
  const thumb = document.createElement('span'); thumb.className = 'toggle-switch__thumb';
  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(track);
  toggleLabel.appendChild(thumb);
  actions.appendChild(toggleLabel);

  // 편집
  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn--ghost btn--sm';
  editBtn.textContent = '편집';
  editBtn.addEventListener('click', function() { openPartnerModal(p); });
  actions.appendChild(editBtn);

  // 삭제
  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn--sm';
  delBtn.style.cssText = 'background:rgba(248,113,113,0.1);border:1px solid rgba(248,113,113,0.2);color:#f87171;';
  delBtn.textContent = '삭제';
  delBtn.addEventListener('click', function() {
    if (confirm('"' + p.name + '" 파트너 링크를 삭제하시겠습니까?')) {
      deletePartner(p.id);
      renderPartnersList();
      showAdminToast('삭제되었습니다.');
    }
  });
  actions.appendChild(delBtn);

  row.appendChild(actions);
  return row;
}

function makeAppRow(app) {
  const row = document.createElement('div');
  row.className = 'ad-slot-row';

  const info = document.createElement('div');
  info.className = 'ad-slot-row__info';

  const name = document.createElement('div');
  name.className = 'ad-slot-row__name';
  name.textContent = app.name;
  info.appendChild(name);

  const url = document.createElement('div');
  url.className = 'ad-slot-row__id';
  url.textContent = app.url + (app.desc ? ' — ' + app.desc : '');
  info.appendChild(url);

  const date = document.createElement('div');
  date.className = 'ad-slot-row__id';
  date.textContent = new Date(app.submittedAt).toLocaleString('ko-KR');
  info.appendChild(date);

  row.appendChild(info);

  const actions = document.createElement('div');
  actions.className = 'ad-slot-row__actions';

  const approveBtn = document.createElement('button');
  approveBtn.className = 'btn btn--gold btn--sm';
  approveBtn.textContent = '승인';
  approveBtn.addEventListener('click', function() {
    approveApplication(app.id);
    renderPartnersList();
    showAdminToast('"' + app.name + '" 승인되어 파트너 링크에 추가되었습니다.');
  });
  actions.appendChild(approveBtn);

  const rejectBtn = document.createElement('button');
  rejectBtn.className = 'btn btn--sm';
  rejectBtn.style.cssText = 'background:rgba(248,113,113,0.1);border:1px solid rgba(248,113,113,0.2);color:#f87171;';
  rejectBtn.textContent = '거절';
  rejectBtn.addEventListener('click', function() {
    rejectApplication(app.id);
    renderPartnersList();
    showAdminToast('거절 처리되었습니다.');
  });
  actions.appendChild(rejectBtn);

  row.appendChild(actions);
  return row;
}

function openPartnerModal(existing) {
  var isEdit = !!existing;
  var p = existing || { id: null, name: '', url: '', icon: '🔗', desc: '' };

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal(overlay);
  });

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-label', isEdit ? '파트너 편집' : '파트너 추가');

  const title = document.createElement('div');
  title.className = 'modal__title';
  title.textContent = isEdit ? '파트너 링크 편집' : '파트너 링크 추가';
  modal.appendChild(title);

  function makeField(labelText, inputEl) {
    const field = document.createElement('div');
    field.className = 'modal__field';
    const lbl = document.createElement('label');
    lbl.className = 'modal__label';
    lbl.textContent = labelText;
    field.appendChild(lbl);
    field.appendChild(inputEl);
    return field;
  }

  const nameInput = document.createElement('input');
  nameInput.className = 'modal__input'; nameInput.type = 'text';
  nameInput.placeholder = '사이트명'; nameInput.value = p.name;
  modal.appendChild(makeField('사이트명 *', nameInput));

  const urlInput = document.createElement('input');
  urlInput.className = 'modal__input'; urlInput.type = 'url';
  urlInput.placeholder = 'https://...'; urlInput.value = p.url;
  modal.appendChild(makeField('URL *', urlInput));

  const iconInput = document.createElement('input');
  iconInput.className = 'modal__input'; iconInput.type = 'text';
  iconInput.placeholder = '🔗'; iconInput.value = p.icon || '🔗';
  iconInput.style.maxWidth = '80px';
  modal.appendChild(makeField('아이콘 (이모지)', iconInput));

  const descInput = document.createElement('input');
  descInput.className = 'modal__input'; descInput.type = 'text';
  descInput.placeholder = '한 줄 설명 (선택)'; descInput.value = p.desc || '';
  modal.appendChild(makeField('설명', descInput));

  const actions = document.createElement('div');
  actions.className = 'modal__actions';

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'btn btn--ghost';
  cancelBtn.textContent = '취소';
  cancelBtn.addEventListener('click', function() { closeModal(overlay); });
  actions.appendChild(cancelBtn);

  const saveBtn = document.createElement('button');
  saveBtn.className = 'btn btn--gold';
  saveBtn.textContent = isEdit ? '저장' : '추가';
  saveBtn.addEventListener('click', function() {
    var name = nameInput.value.trim();
    var url  = urlInput.value.trim();
    if (!name || !url) { alert('사이트명과 URL을 입력하세요.'); return; }
    try { new URL(url); } catch (_) { alert('올바른 URL을 입력하세요.'); return; }
    var data = { name: name, url: url, icon: iconInput.value.trim() || '🔗', desc: descInput.value.trim() };
    if (isEdit) {
      updatePartner(p.id, data);
      showAdminToast('파트너 링크가 수정되었습니다.');
    } else {
      addPartner(data);
      showAdminToast('파트너 링크가 추가되었습니다.');
    }
    closeModal(overlay);
    renderPartnersList();
  });
  actions.appendChild(saveBtn);
  modal.appendChild(actions);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  nameInput.focus();
}

/* ---- 로그인 속도 제한 ---- */

const LOGIN_ATTEMPTS_KEY = 'ccko_login_attempts';
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS   = 30 * 1000; // 30초

function getLoginState() {
  try { return JSON.parse(sessionStorage.getItem(LOGIN_ATTEMPTS_KEY) || '{}'); }
  catch (_) { return {}; }
}

function isLockedOut() {
  const s = getLoginState();
  if (!s.lockedUntil) return false;
  if (Date.now() < s.lockedUntil) return true;
  sessionStorage.removeItem(LOGIN_ATTEMPTS_KEY);
  return false;
}

function recordFailedAttempt() {
  const s = getLoginState();
  const attempts = (s.attempts || 0) + 1;
  const lockedUntil = attempts >= MAX_ATTEMPTS ? Date.now() + LOCKOUT_MS : null;
  sessionStorage.setItem(LOGIN_ATTEMPTS_KEY,
    JSON.stringify({ attempts, lockedUntil }));
  return { attempts, lockedUntil };
}

function clearLoginAttempts() {
  sessionStorage.removeItem(LOGIN_ATTEMPTS_KEY);
}

/* ---- 로그인 핸들러 ---- */

async function handleLogin() {
  const userInput = document.getElementById('admin-username');
  const pwdInput  = document.getElementById('admin-password');
  const errEl     = document.getElementById('login-error');
  const loginCard = document.getElementById('login-card');
  const btn       = document.getElementById('login-btn');

  if (!userInput || !pwdInput) return;

  // 잠금 확인
  if (isLockedOut()) {
    const s = getLoginState();
    const remaining = Math.ceil((s.lockedUntil - Date.now()) / 1000);
    if (errEl) errEl.textContent = '너무 많은 시도. ' + remaining + '초 후 다시 시도하세요.';
    return;
  }

  const user = userInput.value.trim();
  const pwd  = pwdInput.value;

  if (!user || !pwd) {
    if (errEl) errEl.textContent = '사용자명과 비밀번호를 입력하세요.';
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = '로그인 중...'; }

  const ok = await adminLogin(user, pwd);

  if (ok) {
    clearLoginAttempts();
    if (errEl) errEl.textContent = '';
    showDashboard();
  } else {
    const { attempts, lockedUntil } = recordFailedAttempt();
    if (lockedUntil) {
      if (errEl) errEl.textContent = '5회 실패. 30초 동안 잠금됩니다.';
    } else {
      if (errEl) errEl.textContent = '사용자명 또는 비밀번호가 올바르지 않습니다. (' + attempts + '/5)';
    }
    if (loginCard) {
      loginCard.classList.remove('login-card--shake');
      void loginCard.offsetWidth;
      loginCard.classList.add('login-card--shake');
    }
    if (pwdInput) { pwdInput.value = ''; pwdInput.focus(); }
    if (btn) { btn.disabled = false; btn.textContent = '로그인'; }
    return;
  }

  if (btn) { btn.disabled = false; btn.textContent = '로그인'; }
}

/* ---- 광고 슬롯 목록 렌더링 ---- */

function renderAdSlotsList() {
  const container = document.getElementById('ad-slots-list');
  if (!container) return;

  const ads = loadAds();
  const slots = getAdSlots();

  // 통계 업데이트
  const activeCount = slots.filter(function(s) {
    const ad = ads[s.id];
    return ad && ad.enabled;
  }).length;
  const totalCount = document.getElementById('stat-total');
  const activeEl   = document.getElementById('stat-active');
  if (totalCount) totalCount.textContent = String(slots.length);
  if (activeEl)   activeEl.textContent   = String(activeCount);

  container.textContent = '';

  slots.forEach(function(slot) {
    const ad = ads[slot.id];
    const isActive = !!(ad && ad.enabled);

    const row = document.createElement('div');
    row.className = 'ad-slot-row' + (isActive ? ' ad-slot-row--active' : '');
    row.id = 'row-' + slot.id;

    // 정보
    const info = document.createElement('div');
    info.className = 'ad-slot-row__info';

    const nameEl = document.createElement('div');
    nameEl.className = 'ad-slot-row__name';
    nameEl.textContent = slot.label;
    info.appendChild(nameEl);

    const idEl = document.createElement('div');
    idEl.className = 'ad-slot-row__id';
    idEl.textContent = '#' + slot.id;
    info.appendChild(idEl);

    row.appendChild(info);

    // 상태 배지
    const status = document.createElement('span');
    status.className = 'ad-slot-row__status ad-slot-row__status--' + (isActive ? 'on' : 'off');
    status.id = 'status-' + slot.id;
    status.textContent = isActive ? '활성화' : '비활성화';
    row.appendChild(status);

    // 액션
    const actions = document.createElement('div');
    actions.className = 'ad-slot-row__actions';

    // 토글
    const toggleLabel = document.createElement('label');
    toggleLabel.className = 'toggle-switch';
    toggleLabel.setAttribute('aria-label', slot.label + ' 활성화');
    const toggleInput = document.createElement('input');
    toggleInput.type = 'checkbox';
    toggleInput.checked = isActive;
    toggleInput.addEventListener('change', function() {
      const enabled = this.checked;
      if (ad) {
        toggleAd(slot.id, enabled);
      } else if (enabled) {
        saveAd(slot.id, { html: '', enabled: true });
      }
      const statusEl = document.getElementById('status-' + slot.id);
      const rowEl = document.getElementById('row-' + slot.id);
      if (statusEl) {
        statusEl.textContent = enabled ? '활성화' : '비활성화';
        statusEl.className = 'ad-slot-row__status ad-slot-row__status--' + (enabled ? 'on' : 'off');
      }
      if (rowEl) {
        if (enabled) rowEl.classList.add('ad-slot-row--active');
        else rowEl.classList.remove('ad-slot-row--active');
      }
      renderAdSlotsList(); // 통계 갱신
    });
    const track = document.createElement('span');
    track.className = 'toggle-switch__track';
    const thumb = document.createElement('span');
    thumb.className = 'toggle-switch__thumb';
    toggleLabel.appendChild(toggleInput);
    toggleLabel.appendChild(track);
    toggleLabel.appendChild(thumb);
    actions.appendChild(toggleLabel);

    // 편집
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn--ghost btn--sm';
    editBtn.textContent = '편집';
    editBtn.addEventListener('click', function() { openEditModal(slot.id, slot.label); });
    actions.appendChild(editBtn);

    // 삭제
    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn--sm';
    delBtn.style.cssText = 'background:rgba(248,113,113,0.1);border:1px solid rgba(248,113,113,0.2);color:#f87171;';
    delBtn.textContent = '삭제';
    delBtn.addEventListener('click', function() {
      if (confirm(slot.label + ' 광고를 삭제하시겠습니까?')) {
        deleteAd(slot.id);
        renderAdSlotsList();
      }
    });
    actions.appendChild(delBtn);

    row.appendChild(actions);
    container.appendChild(row);
  });
}

/* ---- 편집 모달 ---- */

function openEditModal(slotId, slotLabel) {
  const ads  = loadAds();
  const ad   = ads[slotId] || {};

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal(overlay);
  });

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-label', slotLabel + ' 광고 편집');

  const title = document.createElement('div');
  title.className = 'modal__title';
  title.textContent = slotLabel + ' 광고 편집';
  modal.appendChild(title);

  // HTML 코드 필드
  const htmlField = document.createElement('div');
  htmlField.className = 'modal__field';

  const htmlLabel = document.createElement('label');
  htmlLabel.className = 'modal__label';
  htmlLabel.textContent = '광고 HTML 코드';
  htmlField.appendChild(htmlLabel);

  const htmlTextarea = document.createElement('textarea');
  htmlTextarea.className = 'modal__textarea';
  htmlTextarea.placeholder = '<a href="https://example.com" target="_blank">\n  <img src="banner.jpg" alt="광고">\n</a>\n\n<!-- 또는 Google AdSense 코드 붙여넣기 -->';
  htmlTextarea.value = ad.html || '';
  htmlField.appendChild(htmlTextarea);

  const hint = document.createElement('div');
  hint.className = 'modal__hint';
  hint.textContent = '이미지 배너, AdSense 코드, 또는 직접 작성한 HTML을 입력하세요. DOMPurify로 보안 검사를 통과한 코드만 표시됩니다.';
  htmlField.appendChild(hint);
  modal.appendChild(htmlField);

  // 활성화 체크박스
  const enableField = document.createElement('div');
  enableField.className = 'modal__field';
  enableField.style.display = 'flex';
  enableField.style.alignItems = 'center';
  enableField.style.gap = '0.75rem';

  const enableLabel = document.createElement('label');
  enableLabel.className = 'toggle-switch';
  enableLabel.setAttribute('aria-label', '광고 활성화');
  const enableInput = document.createElement('input');
  enableInput.type = 'checkbox';
  enableInput.checked = ad.enabled !== false;
  const enableTrack = document.createElement('span');
  enableTrack.className = 'toggle-switch__track';
  const enableThumb = document.createElement('span');
  enableThumb.className = 'toggle-switch__thumb';
  enableLabel.appendChild(enableInput);
  enableLabel.appendChild(enableTrack);
  enableLabel.appendChild(enableThumb);
  enableField.appendChild(enableLabel);

  const enableText = document.createElement('span');
  enableText.style.fontSize = 'var(--text-sm)';
  enableText.textContent = '광고 활성화';
  enableField.appendChild(enableText);
  modal.appendChild(enableField);

  // 액션
  const actions = document.createElement('div');
  actions.className = 'modal__actions';

  const cancelBtn = document.createElement('button');
  cancelBtn.className = 'btn btn--ghost';
  cancelBtn.textContent = '취소';
  cancelBtn.addEventListener('click', function() { closeModal(overlay); });
  actions.appendChild(cancelBtn);

  const saveBtn = document.createElement('button');
  saveBtn.className = 'btn btn--gold';
  saveBtn.textContent = '저장';
  saveBtn.addEventListener('click', function() {
    saveAd(slotId, {
      html:    htmlTextarea.value,
      enabled: enableInput.checked
    });
    closeModal(overlay);
    renderAdSlotsList();
    showAdminToast('광고가 저장되었습니다.');
  });
  actions.appendChild(saveBtn);
  modal.appendChild(actions);

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  htmlTextarea.focus();
}

function closeModal(overlay) {
  if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
}

/* ---- 관리자 토스트 ---- */

function showAdminToast(msg) {
  let toast = document.getElementById('admin-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'admin-toast';
    toast.style.cssText = 'position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%) translateY(80px);background:var(--bg-elevated);border:var(--border-glass);border-radius:var(--radius-sm);padding:0.75rem 1.25rem;font-size:var(--text-sm);color:var(--text-primary);box-shadow:var(--shadow-lg);z-index:999;transition:transform 0.3s ease;white-space:nowrap;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  requestAnimationFrame(function() {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  clearTimeout(showAdminToast._t);
  showAdminToast._t = setTimeout(function() {
    toast.style.transform = 'translateX(-50%) translateY(80px)';
  }, 2500);
}

/* ===================================================
   분석 섹션 렌더 함수들
   =================================================== */

/* ---- 공통: 빈 데이터 안내 ---- */
function _noData(el) {
  if (!el) return;
  el.textContent = '';
  var msg = document.createElement('div');
  msg.style.cssText = 'padding:2rem;text-align:center;color:var(--text-muted);font-size:var(--text-sm);';
  msg.textContent = '데이터 없음 — 사이트 방문 후 데이터가 쌓입니다.';
  el.appendChild(msg);
}

/* ---- 공통: 바 차트 항목 생성 ---- */
function _makeBarItem(label, count, maxCount, color) {
  color = color || 'var(--gold)';
  var pct = maxCount > 0 ? Math.round(count / maxCount * 100) : 0;
  var item = document.createElement('div');
  item.className = 'bar-item';
  var lbl = document.createElement('div');
  lbl.className = 'bar-label';
  lbl.style.cssText = 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px;';
  lbl.textContent = label;
  item.appendChild(lbl);
  var track = document.createElement('div');
  track.className = 'bar-track';
  var fill = document.createElement('div');
  fill.className = 'bar-fill';
  fill.style.width = '0%';
  fill.style.background = color;
  track.appendChild(fill);
  item.appendChild(track);
  var cnt = document.createElement('div');
  cnt.className = 'bar-count';
  cnt.textContent = count;
  item.appendChild(cnt);
  requestAnimationFrame(function() {
    setTimeout(function() { fill.style.width = pct + '%'; }, 30);
  });
  return item;
}

/* ---- 공통: 요약 카드 생성 ---- */
function _makeSummaryCard(label, value, color) {
  var card = document.createElement('div');
  card.className = 'dash-card';
  var accent = document.createElement('div');
  accent.className = 'dash-card__accent';
  accent.style.background = color || 'var(--gold)';
  card.appendChild(accent);
  var lbl = document.createElement('div');
  lbl.className = 'dash-card__label';
  lbl.textContent = label;
  card.appendChild(lbl);
  var val = document.createElement('div');
  val.className = 'dash-card__value';
  val.style.color = color || 'var(--gold)';
  val.textContent = typeof value === 'number' ? value.toLocaleString('ko-KR') : value;
  card.appendChild(val);
  return card;
}

/* ---- 트래픽 분석 ---- */
function renderAnalyticsSection() {
  if (typeof CCTracker === 'undefined') return;

  // 요약 카드
  var summaryEl = document.getElementById('analytics-summary');
  if (summaryEl) {
    summaryEl.textContent = '';
    var s = CCTracker.summary();
    var cards = [
      { label: '전체 이벤트수', value: s.totalEvents,   color: 'var(--gold)' },
      { label: '오늘 이벤트',   value: s.todayEvents,   color: 'var(--emerald)' },
      { label: '총 세션수',     value: s.totalSessions, color: 'var(--accent-blue,#5ab5ff)' },
      { label: '오늘 세션수',   value: s.todaySessions, color: 'var(--accent-purple)' }
    ];
    cards.forEach(function(c) {
      summaryEl.appendChild(_makeSummaryCard(c.label, c.value, c.color));
    });
  }

  // 30일 SVG 꺾은선+채움 차트
  var dailyEl = document.getElementById('analytics-daily-chart');
  if (dailyEl) {
    dailyEl.textContent = '';
    var daily = CCTracker.daily30();
    var totalEvCount = daily.reduce(function(s, d) { return s + d.count; }, 0);
    if (totalEvCount === 0) {
      _noData(dailyEl);
    } else {
      var W = 700, H = 160, PAD = 10;
      var maxCount = Math.max.apply(null, daily.map(function(d) { return d.count; })) || 1;
      var points = daily.map(function(d, i) {
        var x = PAD + i * (W - PAD * 2) / (daily.length - 1);
        var y = H - PAD - (d.count / maxCount) * (H - PAD * 2);
        return [x, y];
      });
      var polyPts  = points.map(function(p) { return p[0] + ',' + p[1]; }).join(' ');
      var fillPts  = (PAD + ',' + (H - PAD)) + ' ' + polyPts + ' ' + ((W - PAD) + ',' + (H - PAD));

      var svgNS = 'http://www.w3.org/2000/svg';
      var svg   = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.setAttribute('preserveAspectRatio', 'none');
      svg.style.cssText = 'width:100%;height:100%;display:block;';

      var defs = document.createElementNS(svgNS, 'defs');
      var grad = document.createElementNS(svgNS, 'linearGradient');
      grad.setAttribute('id', 'daily-grad');
      grad.setAttribute('x1', '0'); grad.setAttribute('y1', '0');
      grad.setAttribute('x2', '0'); grad.setAttribute('y2', '1');
      var stop1 = document.createElementNS(svgNS, 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('stop-color', '#d4af37');
      stop1.setAttribute('stop-opacity', '0.35');
      var stop2 = document.createElementNS(svgNS, 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('stop-color', '#d4af37');
      stop2.setAttribute('stop-opacity', '0.02');
      grad.appendChild(stop1); grad.appendChild(stop2);
      defs.appendChild(grad);
      svg.appendChild(defs);

      var fillPoly = document.createElementNS(svgNS, 'polygon');
      fillPoly.setAttribute('points', fillPts);
      fillPoly.setAttribute('fill', 'url(#daily-grad)');
      svg.appendChild(fillPoly);

      var line = document.createElementNS(svgNS, 'polyline');
      line.setAttribute('points', polyPts);
      line.setAttribute('fill', 'none');
      line.setAttribute('stroke', '#d4af37');
      line.setAttribute('stroke-width', '2');
      line.setAttribute('stroke-linejoin', 'round');
      svg.appendChild(line);

      points.forEach(function(p) {
        var circle = document.createElementNS(svgNS, 'circle');
        circle.setAttribute('cx', p[0]);
        circle.setAttribute('cy', p[1]);
        circle.setAttribute('r', '2.5');
        circle.setAttribute('fill', '#d4af37');
        svg.appendChild(circle);
      });

      dailyEl.appendChild(svg);

      var labels = document.createElement('div');
      labels.style.cssText = 'display:flex;justify-content:space-between;font-size:10px;color:var(--text-muted);margin-top:4px;';
      [0, Math.floor(daily.length / 2), daily.length - 1].forEach(function(idx) {
        var sp = document.createElement('span');
        sp.textContent = daily[idx] ? daily[idx].date.slice(5) : '';
        labels.appendChild(sp);
      });
      dailyEl.appendChild(labels);
    }
  }

  // 시간대별 CSS 바 차트
  var hourlyEl = document.getElementById('analytics-hourly-chart');
  if (hourlyEl) {
    hourlyEl.textContent = '';
    var hourly = CCTracker.hourlyToday();
    var maxH = Math.max.apply(null, hourly) || 1;
    hourly.forEach(function(count, h) {
      var wrap = document.createElement('div');
      wrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;flex:1;min-width:20px;';
      var bar = document.createElement('div');
      var pct = Math.round(count / maxH * 100);
      bar.style.cssText = 'width:100%;background:var(--gold);border-radius:3px 3px 0 0;opacity:0.85;min-height:2px;transition:height .4s ease;';
      bar.style.height = pct + '%';
      bar.title = h + '시: ' + count + '건';
      var lbl = document.createElement('div');
      lbl.style.cssText = 'font-size:9px;color:var(--text-muted);margin-top:2px;';
      lbl.textContent = h % 6 === 0 ? String(h) : '';
      wrap.appendChild(bar);
      wrap.appendChild(lbl);
      hourlyEl.appendChild(wrap);
    });
  }
}

/* ---- 인기 콘텐츠 ---- */
function renderContentStatsSection() {
  if (typeof CCTracker === 'undefined') return;

  var cats = ['skills', 'agents', 'commands', 'hooks', 'mcps', 'plugins'];
  var colors = ['var(--gold)', 'var(--emerald)', 'var(--accent-purple)', 'var(--accent-blue,#5ab5ff)', '#f97316', '#ec4899'];
  var catLabels = {
    skills: '스킬', agents: '에이전트', commands: '커맨드',
    hooks: '훅', mcps: 'MCP', plugins: '플러그인'
  };

  var catChartEl = document.getElementById('content-cat-chart');
  if (catChartEl) {
    catChartEl.textContent = '';
    var catCounts = cats.map(function(cat) {
      return { cat: cat, count: CCTracker.topClicks(cat, 9999).reduce(function(s, i) { return s + i.count; }, 0) };
    });
    var maxCat = Math.max.apply(null, catCounts.map(function(c) { return c.count; })) || 0;
    if (maxCat === 0) {
      _noData(catChartEl);
    } else {
      catCounts.forEach(function(c, i) {
        catChartEl.appendChild(_makeBarItem(catLabels[c.cat] || c.cat, c.count, maxCat, colors[i % colors.length]));
      });
    }
  }

  function renderTopList(elId, category, n) {
    var el = document.getElementById(elId);
    if (!el) return;
    el.textContent = '';
    var items = CCTracker.topClicks(category, n);
    if (items.length === 0) { _noData(el); return; }
    var max = items[0].count;
    items.forEach(function(item) {
      el.appendChild(_makeBarItem(item.name || item.id, item.count, max, 'var(--gold)'));
    });
  }

  renderTopList('top-skills-list',   'skills',   20);
  renderTopList('top-agents-list',   'agents',   10);
  renderTopList('top-commands-list', 'commands', 10);

  var searchListEl = document.getElementById('content-search-list');
  if (searchListEl) {
    searchListEl.textContent = '';
    var queries = CCTracker.searchStats(10);
    if (queries.length === 0) { _noData(searchListEl); }
    else {
      var maxQ = queries[0].count;
      queries.forEach(function(q) {
        searchListEl.appendChild(_makeBarItem(q.query, q.count, maxQ, 'var(--emerald)'));
      });
    }
  }
}

/* ---- 방문자 지역 ---- */
function renderGeoSection() {
  if (typeof CCTracker === 'undefined') return;

  var countryEl = document.getElementById('geo-country-table');
  if (countryEl) {
    countryEl.textContent = '';
    var countries = CCTracker.countryStats();
    if (countries.length === 0) {
      _noData(countryEl);
    } else {
      var total = countries.reduce(function(s, c) { return s + c.count; }, 0);
      var tableDiv = document.createElement('div');
      tableDiv.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;';
      countries.slice(0, 15).forEach(function(c) {
        var pct = total > 0 ? Math.round(c.count / total * 100) : 0;
        var row = document.createElement('div');
        row.style.cssText = 'display:grid;grid-template-columns:2rem 1fr 4rem 3rem;align-items:center;gap:.5rem;';
        var flag = document.createElement('span');
        flag.style.cssText = 'font-size:1.1rem;';
        flag.textContent = c.flag;
        var name = document.createElement('div');
        name.style.cssText = 'font-size:var(--text-sm);color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
        name.textContent = c.country;
        var barEl = document.createElement('div');
        barEl.style.cssText = 'height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden;';
        var fillEl = document.createElement('div');
        fillEl.style.cssText = 'height:100%;background:var(--gold);border-radius:3px;transition:width .6s ease;width:0%;';
        barEl.appendChild(fillEl);
        var cntEl = document.createElement('div');
        cntEl.style.cssText = 'font-size:var(--text-xs);color:var(--text-muted);text-align:right;font-family:var(--font-numeric);';
        cntEl.textContent = c.count + ' (' + pct + '%)';
        row.appendChild(flag); row.appendChild(name); row.appendChild(barEl); row.appendChild(cntEl);
        tableDiv.appendChild(row);
        requestAnimationFrame(function() { setTimeout(function() { fillEl.style.width = pct + '%'; }, 30); });
      });
      countryEl.appendChild(tableDiv);
    }
  }

  var cityEl = document.getElementById('geo-city-list');
  if (cityEl) {
    cityEl.textContent = '';
    var cities = CCTracker.cityStats(15);
    if (cities.length === 0) { _noData(cityEl); }
    else {
      var maxCity = cities[0].count;
      cities.forEach(function(c) {
        cityEl.appendChild(_makeBarItem(c.city, c.count, maxCity, 'var(--accent-blue,#5ab5ff)'));
      });
    }
  }
}

/* ---- 기기·브라우저 ---- */
function renderTechSection() {
  if (typeof CCTracker === 'undefined') return;

  var deviceCardsEl = document.getElementById('tech-device-cards');
  if (deviceCardsEl) {
    deviceCardsEl.textContent = '';
    var deviceData = CCTracker.deviceStats();
    var deviceMap  = {};
    deviceData.forEach(function(d) { deviceMap[d.name] = d.count; });
    [
      { key: 'desktop', label: '데스크톱', color: 'var(--gold)' },
      { key: 'mobile',  label: '모바일',   color: 'var(--emerald)' },
      { key: 'tablet',  label: '태블릿',   color: 'var(--accent-blue,#5ab5ff)' }
    ].forEach(function(d) {
      deviceCardsEl.appendChild(_makeSummaryCard(d.label, deviceMap[d.key] || 0, d.color));
    });
  }

  var browserEl = document.getElementById('tech-browser-chart');
  if (browserEl) {
    browserEl.textContent = '';
    var browsers = CCTracker.browserStats();
    if (browsers.length === 0) { _noData(browserEl); }
    else {
      var maxBr = browsers[0].count;
      var brColors = ['var(--gold)', 'var(--emerald)', 'var(--accent-blue,#5ab5ff)', 'var(--accent-purple)', '#f97316', '#ec4899'];
      browsers.forEach(function(b, i) {
        browserEl.appendChild(_makeBarItem(b.name, b.count, maxBr, brColors[i % brColors.length]));
      });
    }
  }

  var osEl = document.getElementById('tech-os-chart');
  if (osEl) {
    osEl.textContent = '';
    var osList = CCTracker.osStats();
    if (osList.length === 0) { _noData(osEl); }
    else {
      var maxOs = osList[0].count;
      var osColors = ['var(--emerald)', 'var(--gold)', 'var(--accent-purple)', 'var(--accent-blue,#5ab5ff)', '#f97316'];
      osList.forEach(function(o, i) {
        osEl.appendChild(_makeBarItem(o.name, o.count, maxOs, osColors[i % osColors.length]));
      });
    }
  }
}

/* ---- 광고 클릭 통계 ---- */
function renderAdStatsSection() {
  if (typeof CCTracker === 'undefined') return;
  var el = document.getElementById('ad-stats-table');
  if (!el) return;
  el.textContent = '';

  var clicks = CCTracker.adClicks();
  var slots  = (typeof getAdSlots === 'function') ? getAdSlots() : [];
  // 현재 슬롯 목록에 없지만 클릭 데이터가 있는 슬롯도 표시 (삭제된 슬롯 포함)
  var slotIds = slots.map(function(s) { return s.id; });
  Object.keys(clicks).forEach(function(id) {
    if (slotIds.indexOf(id) === -1) slots.push({ id: id, label: id + ' (삭제됨)' });
  });
  var maxClicks = 0;
  slots.forEach(function(s) { var c = clicks[s.id] || 0; if (c > maxClicks) maxClicks = c; });

  if (slots.length === 0) { _noData(el); return; }

  var tableDiv = document.createElement('div');
  tableDiv.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;';

  var header = document.createElement('div');
  header.style.cssText = 'display:grid;grid-template-columns:1fr 3fr 4rem;gap:.75rem;padding:.5rem 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;';
  ['슬롯 이름', '클릭 비율', '클릭수'].forEach(function(h) {
    var th = document.createElement('div'); th.textContent = h; header.appendChild(th);
  });
  tableDiv.appendChild(header);

  slots.forEach(function(slot) {
    var count = clicks[slot.id] || 0;
    var row = document.createElement('div');
    row.style.cssText = 'display:grid;grid-template-columns:1fr 3fr 4rem;gap:.75rem;align-items:center;padding:.4rem 0;border-bottom:1px solid rgba(255,255,255,0.04);';

    var nameEl = document.createElement('div');
    nameEl.style.cssText = 'font-size:var(--text-sm);color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
    nameEl.textContent = slot.label;
    nameEl.title = '#' + slot.id;
    row.appendChild(nameEl);

    var barWrap = document.createElement('div');
    barWrap.style.cssText = 'height:6px;background:rgba(255,255,255,0.07);border-radius:3px;overflow:hidden;';
    var barFill = document.createElement('div');
    var pct = maxClicks > 0 ? Math.round(count / maxClicks * 100) : 0;
    barFill.style.cssText = 'height:100%;background:var(--gold);border-radius:3px;transition:width .6s ease;width:0%;';
    barWrap.appendChild(barFill);
    row.appendChild(barWrap);
    requestAnimationFrame(function() { setTimeout(function() { barFill.style.width = pct + '%'; }, 30); });

    var cntEl = document.createElement('div');
    cntEl.style.cssText = 'font-size:var(--text-sm);color:var(--text-muted);text-align:right;font-family:var(--font-numeric);';
    cntEl.textContent = count;
    row.appendChild(cntEl);

    tableDiv.appendChild(row);
  });

  el.appendChild(tableDiv);
}

/* ---- 파트너 클릭 통계 ---- */
function renderPartnerStatsSection() {
  if (typeof CCTracker === 'undefined') return;
  var el = document.getElementById('partner-stats-table');
  if (!el) return;
  el.textContent = '';

  var clicks   = CCTracker.partnerClicks();
  var partners = (typeof loadPartners === 'function') ? loadPartners() : [];
  // 현재 파트너 목록에 없지만 클릭 데이터가 있는 항목도 표시 (삭제된 파트너 포함)
  var partnerIds = partners.map(function(p) { return p.id; });
  Object.keys(clicks).forEach(function(id) {
    if (partnerIds.indexOf(id) === -1) partners.push({ id: id, name: id + ' (삭제됨)', icon: '🔗' });
  });

  if (partners.length === 0) { _noData(el); return; }

  var maxClicks = 0;
  partners.forEach(function(p) { var c = clicks[p.id] || 0; if (c > maxClicks) maxClicks = c; });

  var tableDiv = document.createElement('div');
  tableDiv.style.cssText = 'display:flex;flex-direction:column;gap:.5rem;';

  var header = document.createElement('div');
  header.style.cssText = 'display:grid;grid-template-columns:1fr 3fr 4rem;gap:.75rem;padding:.5rem 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;';
  ['파트너명', '클릭 비율', '클릭수'].forEach(function(h) {
    var th = document.createElement('div'); th.textContent = h; header.appendChild(th);
  });
  tableDiv.appendChild(header);

  partners.forEach(function(p) {
    var count = clicks[p.id] || 0;
    var row = document.createElement('div');
    row.style.cssText = 'display:grid;grid-template-columns:1fr 3fr 4rem;gap:.75rem;align-items:center;padding:.4rem 0;border-bottom:1px solid rgba(255,255,255,0.04);';

    var nameEl = document.createElement('div');
    nameEl.style.cssText = 'font-size:var(--text-sm);color:var(--text-primary);';
    nameEl.textContent = (p.icon || '') + ' ' + p.name;
    row.appendChild(nameEl);

    var barWrap = document.createElement('div');
    barWrap.style.cssText = 'height:6px;background:rgba(255,255,255,0.07);border-radius:3px;overflow:hidden;';
    var barFill = document.createElement('div');
    var pct = maxClicks > 0 ? Math.round(count / maxClicks * 100) : 0;
    barFill.style.cssText = 'height:100%;background:var(--emerald);border-radius:3px;transition:width .6s ease;width:0%;';
    barWrap.appendChild(barFill);
    row.appendChild(barWrap);
    requestAnimationFrame(function() { setTimeout(function() { barFill.style.width = pct + '%'; }, 30); });

    var cntEl = document.createElement('div');
    cntEl.style.cssText = 'font-size:var(--text-sm);color:var(--text-muted);text-align:right;font-family:var(--font-numeric);';
    cntEl.textContent = count;
    row.appendChild(cntEl);

    tableDiv.appendChild(row);
  });

  el.appendChild(tableDiv);
}

/* ---- 검색어 통계 ---- */
function renderSearchStatsSection() {
  if (typeof CCTracker === 'undefined') return;
  var el = document.getElementById('search-stats-table');
  if (!el) return;
  el.textContent = '';

  var queries = CCTracker.searchStats(30);
  if (queries.length === 0) { _noData(el); return; }

  var tableDiv = document.createElement('div');
  tableDiv.style.cssText = 'display:flex;flex-direction:column;gap:.4rem;';

  var header = document.createElement('div');
  header.style.cssText = 'display:grid;grid-template-columns:2rem 1fr 3fr 4rem;gap:.75rem;padding:.5rem 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;';
  ['#', '검색어', '비율', '횟수'].forEach(function(h) {
    var th = document.createElement('div'); th.textContent = h; header.appendChild(th);
  });
  tableDiv.appendChild(header);

  var maxQ = queries[0].count;
  queries.forEach(function(q, idx) {
    var row = document.createElement('div');
    row.style.cssText = 'display:grid;grid-template-columns:2rem 1fr 3fr 4rem;gap:.75rem;align-items:center;padding:.35rem 0;border-bottom:1px solid rgba(255,255,255,0.04);';

    var rank = document.createElement('div');
    rank.style.cssText = 'font-size:var(--text-xs);color:var(--text-muted);font-family:var(--font-numeric);';
    rank.textContent = String(idx + 1);
    row.appendChild(rank);

    var qEl = document.createElement('div');
    qEl.style.cssText = 'font-size:var(--text-sm);color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
    qEl.textContent = q.query;
    row.appendChild(qEl);

    var barWrap = document.createElement('div');
    barWrap.style.cssText = 'height:5px;background:rgba(255,255,255,0.07);border-radius:3px;overflow:hidden;align-self:center;';
    var barFill = document.createElement('div');
    var pct = maxQ > 0 ? Math.round(q.count / maxQ * 100) : 0;
    barFill.style.cssText = 'height:100%;background:var(--accent-blue,#5ab5ff);border-radius:3px;transition:width .6s ease;width:0%;';
    barWrap.appendChild(barFill);
    row.appendChild(barWrap);
    requestAnimationFrame(function() { setTimeout(function() { barFill.style.width = pct + '%'; }, 30); });

    var cntEl = document.createElement('div');
    cntEl.style.cssText = 'font-size:var(--text-sm);color:var(--text-muted);text-align:right;font-family:var(--font-numeric);';
    cntEl.textContent = q.count;
    row.appendChild(cntEl);

    tableDiv.appendChild(row);
  });

  el.appendChild(tableDiv);
}

/* ---- 초기화 ---- */

document.addEventListener('DOMContentLoaded', function() {
  if (isAdminLoggedIn()) {
    showDashboard();
  } else {
    showLoginScreen();
    const pwdInput = document.getElementById('admin-password');
    if (pwdInput) {
      pwdInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') handleLogin();
      });
    }
    const userInput = document.getElementById('admin-username');
    if (userInput) {
      userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          const pwdEl = document.getElementById('admin-password');
          if (pwdEl) pwdEl.focus();
        }
      });
    }
  }
});
