/* ===================================================
   HOME.JS — 홈 페이지 전용 초기화
   =================================================== */
'use strict';

/* ---- 히어로 검색 폼 ---- */
window.doHeroSearch = function(e) {
  if (e) e.preventDefault();
  var input = document.getElementById('hero-search');
  var q = input ? input.value.trim() : '';
  window.location.href = q ? 'skills.html?q=' + encodeURIComponent(q) : 'skills.html';
  return false;
};

/* ---- 검색 모달 ---- */
function initSearchModal() {
  var overlay = document.getElementById('search-modal-overlay');
  var toggleBtn = document.getElementById('nav-search-toggle');
  if (!overlay || !toggleBtn) return;

  function openModal() {
    overlay.style.display = 'flex';
    var input = document.getElementById('modal-search-input');
    if (input) input.focus();
  }

  function closeModal() {
    overlay.style.display = 'none';
  }

  toggleBtn.addEventListener('click', openModal);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openModal();
    }
  });

  var searchInput = document.getElementById('modal-search-input');
  var resultsEl = document.getElementById('modal-search-results');
  if (searchInput && resultsEl) {
    searchInput.addEventListener('input', function() {
      renderModalResults(this.value.trim(), resultsEl);
    });
  }

  window.closeSearchModal = closeModal;
}

function renderModalResults(q, container) {
  if (typeof searchComponents !== 'function') return;
  container.textContent = '';

  if (!q) return;

  var items = searchComponents(q, 'all').slice(0, 8);
  if (!items.length) {
    var empty = document.createElement('p');
    empty.style.cssText = 'text-align:center;color:var(--text-muted);padding:2rem;font-size:var(--text-sm);';
    empty.textContent = '검색 결과가 없습니다';
    container.appendChild(empty);
    return;
  }

  items.forEach(function(item) {
    var a = document.createElement('a');
    a.href = (item.category || 'skills') + '.html?q=' + encodeURIComponent(item.name);
    a.style.cssText = 'display:flex;align-items:center;gap:0.75rem;padding:0.7rem;border-radius:var(--radius-sm);transition:background var(--duration-fast);text-decoration:none;color:inherit;';

    var icon = document.createElement('span');
    icon.style.cssText = 'font-size:1.5rem;flex-shrink:0;';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = item.icon || '⚡';

    var info = document.createElement('div');
    info.style.minWidth = '0';

    var nameEl = document.createElement('div');
    nameEl.style.cssText = 'font-size:var(--text-sm);font-weight:600;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;';
    nameEl.textContent = item.name;

    var catEl = document.createElement('div');
    catEl.style.cssText = 'font-size:var(--text-xs);color:var(--text-muted);';
    catEl.textContent = item.category || '';

    info.appendChild(nameEl);
    info.appendChild(catEl);
    a.appendChild(icon);
    a.appendChild(info);

    a.addEventListener('mouseenter', function() { a.style.background = 'rgba(255,255,255,0.06)'; });
    a.addEventListener('mouseleave', function() { a.style.background = ''; });

    container.appendChild(a);
  });
}

/* ---- 팝업 광고 타이머 ---- */
function initPopupAd() {
  setTimeout(function() {
    var popup = document.getElementById('ad-popup');
    if (!popup) return;
    var ads = typeof loadAds === 'function' ? loadAds() : {};
    var adData = ads['ad-popup'];
    if (adData && adData.enabled) {
      popup.hidden = false;
      popup.classList.add('open');
    }
  }, 4000);
}

/* ---- AOS 초기화 ---- */
function initAOS() {
  if (typeof AOS !== 'undefined') {
    try {
      AOS.init({ duration: 600, easing: 'ease-out-expo', once: true, offset: 60 });
    } catch (e) { /* silent */ }
  }
}

/* ---- 초기화 ---- */
document.addEventListener('DOMContentLoaded', function() {
  initSearchModal();
  initPopupAd();
  initAOS();
});
