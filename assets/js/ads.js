/* ===================================================
   ADS SYSTEM — 광고 관리 (DOMPurify XSS 방어)
   의존: DOMPurify (CDN 로드 필요)
   =================================================== */
'use strict';

const ADS_KEY = 'ccko_ads_v1';

const AD_SLOTS = [
  { id: 'ad-header-banner',  label: '헤더 배너',       pages: ['all'],     cssClass: 'ad-slot--header'      },
  { id: 'ad-hero-below',     label: '히어로 하단',     pages: ['home'],    cssClass: 'ad-slot--hero-below'  },
  { id: 'ad-sidebar-left',   label: '좌측 사이드바',   pages: ['listing'], cssClass: 'ad-slot--sidebar'     },
  { id: 'ad-sidebar-right',  label: '우측 사이드바',   pages: ['listing'], cssClass: 'ad-slot--sidebar'     },
  { id: 'ad-inline-1',       label: '인라인 광고 1',   pages: ['listing'], cssClass: 'ad-slot--inline'      },
  { id: 'ad-inline-2',       label: '인라인 광고 2',   pages: ['listing'], cssClass: 'ad-slot--inline'      },
  { id: 'ad-inline-3',       label: '인라인 광고 3',   pages: ['listing'], cssClass: 'ad-slot--inline'      },
  { id: 'ad-before-footer',  label: '푸터 상단',       pages: ['all'],     cssClass: 'ad-slot--before-footer'},
  { id: 'ad-footer-banner',  label: '푸터 배너',       pages: ['all'],     cssClass: 'ad-slot--footer'      },
  { id: 'ad-sticky-bottom',  label: '하단 고정바',     pages: ['all'],     cssClass: 'ad-slot--sticky'      },
  { id: 'ad-popup',          label: '팝업 광고',       pages: ['home'],    cssClass: 'ad-slot--popup'       },
];

function loadAds() {
  try {
    return JSON.parse(localStorage.getItem(ADS_KEY) || '{}');
  } catch (_) {
    return {};
  }
}

function saveAd(slotId, adData) {
  const ads = loadAds();
  ads[slotId] = { ...adData, updatedAt: Date.now() };
  try { localStorage.setItem(ADS_KEY, JSON.stringify(ads)); }
  catch (e) { console.warn('saveAd failed:', e); }
}

function toggleAd(slotId, enabled) {
  const ads = loadAds();
  if (ads[slotId]) {
    ads[slotId].enabled = enabled;
    ads[slotId].updatedAt = Date.now();
    try { localStorage.setItem(ADS_KEY, JSON.stringify(ads)); }
    catch (e) { console.warn('toggleAd failed:', e); }
  }
}

function deleteAd(slotId) {
  const ads = loadAds();
  delete ads[slotId];
  try { localStorage.setItem(ADS_KEY, JSON.stringify(ads)); }
  catch (e) { console.warn('deleteAd failed:', e); }
}

function getAdSlots() {
  return AD_SLOTS;
}

/**
 * 광고 렌더링 — DOMPurify로 XSS 방어 후 DOM에 삽입
 * createContextualFragment()로 스크립트 실행 없이 HTML 삽입
 */
function renderAds() {
  const ads = loadAds();

  AD_SLOTS.forEach(function(slot) {
    const el = document.getElementById(slot.id);
    if (!el) return;

    const ad = ads[slot.id];
    if (ad && ad.enabled === true && typeof ad.html === 'string' && ad.html.trim() !== '') {
      let safeHtml;

      if (typeof DOMPurify !== 'undefined') {
        safeHtml = DOMPurify.sanitize(ad.html, {
          ADD_TAGS: ['iframe'],
          ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'target', 'rel', 'sandbox']
        });
      } else {
        // DOMPurify 미로드시 광고 숨김 (안전 우선)
        el.style.display = 'none';
        return;
      }

      // 기존 내용 제거 후 새니타이즈된 HTML 삽입
      el.textContent = '';
      try {
        const range = document.createRange();
        range.selectNode(el);
        const frag = range.createContextualFragment(safeHtml);
        el.appendChild(frag);
      } catch (_) {
        el.textContent = '';
      }

      el.style.display = 'block';
      el.classList.add('ad-slot--active');

      // 광고 클릭 추적
      (function(slotId, elem) {
        elem.onclick = function() {
          try { CCTracker.rec('ad', { slot: slotId }); } catch (_) {}
        };
      })(slot.id, el);
    } else {
      el.style.display = 'none';
      el.classList.remove('ad-slot--active');
    }
  });

  // 팝업 광고 특수 처리
  renderPopupAd(ads);
}

function renderPopupAd(ads) {
  const popupSlot = document.getElementById('ad-popup');
  if (!popupSlot) return;

  const ad = ads['ad-popup'];
  if (!ad || !ad.enabled || !ad.html) return;

  // 이미 오늘 팝업을 본 경우 건너뜀
  const lastSeen = localStorage.getItem('ccko_popup_seen');
  const now = Date.now();
  if (lastSeen && now - parseInt(lastSeen) < 24 * 60 * 60 * 1000) return;

  setTimeout(function() {
    if (typeof DOMPurify !== 'undefined') {
      const safeHtml = DOMPurify.sanitize(ad.html, {
        ADD_TAGS: ['iframe'],
        ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'target', 'sandbox']
      });
      const inner = document.createElement('div');
      inner.className = 'ad-popup-inner';

      try {
        const range = document.createRange();
        range.selectNode(inner);
        inner.appendChild(range.createContextualFragment(safeHtml));
      } catch (_) { return; }

      // 닫기 버튼
      const closeBtn = document.createElement('button');
      closeBtn.className = 'ad-popup-close';
      closeBtn.setAttribute('aria-label', '닫기');
      closeBtn.textContent = '×';
      closeBtn.addEventListener('click', function() {
        popupSlot.style.display = 'none';
        localStorage.setItem('ccko_popup_seen', String(Date.now()));
      });
      inner.appendChild(closeBtn);

      popupSlot.textContent = '';
      popupSlot.appendChild(inner);
      popupSlot.style.display = 'flex';

      // 배경 클릭으로 닫기
      popupSlot.addEventListener('click', function(e) {
        if (e.target === popupSlot) {
          popupSlot.style.display = 'none';
          localStorage.setItem('ccko_popup_seen', String(Date.now()));
        }
      });
    }
  }, 3000);
}
