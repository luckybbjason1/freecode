/* ===================================================
   ADMIN.JS — 관리자 인증 + 광고 관리 UI
   =================================================== */
'use strict';

const ADMIN_SESSION_KEY = 'ccko_adm_sess';
const SESSION_MS = 4 * 60 * 60 * 1000; // 4시간

// SHA-256('yingjiE168') — Node.js로 사전 계산됨
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
  if (dash)  { dash.style.display = 'flex'; showSection('ads'); }
}

/* ---- 섹션 전환 ---- */

function showSection(name) {
  // 네비 활성화
  document.querySelectorAll('.admin-nav-item[data-section]').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-section') === name);
  });
  // 섹션 표시
  document.querySelectorAll('.admin-section').forEach(function(sec) {
    sec.style.display = sec.getAttribute('data-section') === name ? 'block' : 'none';
  });
  // 헤더 업데이트
  const headerTitle = document.querySelector('.admin-header__title');
  const headerSub   = document.querySelector('.admin-header__sub');
  if (name === 'ads') {
    if (headerTitle) headerTitle.textContent = '광고 관리';
    if (headerSub)   headerSub.textContent   = '광고 슬롯을 추가, 편집, 활성화/비활성화하세요';
    renderAdSlotsList();
  }
  if (name === 'partners') {
    if (headerTitle) headerTitle.textContent = '파트너 링크 관리';
    if (headerSub)   headerSub.textContent   = '파트너 링크를 추가하고 신청을 승인/거절하세요';
    renderPartnersList();
  }
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
