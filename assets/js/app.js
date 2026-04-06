/* ===================================================
   APP.JS — 앱 초기화, 카드 렌더러, 네비게이션
   =================================================== */
'use strict';

/* ---- 카드 렌더러 ---- */

function renderCard(item, opts) {
  opts = opts || {};
  const card = document.createElement('article');
  card.className = 'card';
  if (opts.aos !== false) {
    card.setAttribute('data-aos', 'fade-up');
    if (opts.delay) card.setAttribute('data-aos-delay', String(opts.delay));
  }

  // 아이콘
  const header = document.createElement('div');
  header.className = 'card__header';

  const icon = document.createElement('div');
  icon.className = 'card__icon card__icon--' + (item.color || 'gold');
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = item.icon || '⚡';
  header.appendChild(icon);

  // 배지
  const badgeWrap = document.createElement('div');
  const badge = document.createElement('span');
  badge.className = 'badge badge--' + (item.color === 'emerald' ? 'emerald' : 'gold');
  badge.textContent = getCategoryLabel(item.category);
  badgeWrap.appendChild(badge);
  header.appendChild(badgeWrap);

  card.appendChild(header);

  // 이름
  const name = document.createElement('h3');
  name.className = 'card__name';
  name.textContent = item.name;
  card.appendChild(name);

  // 설명
  const desc = document.createElement('p');
  desc.className = 'card__desc';
  desc.textContent = item.desc;
  card.appendChild(desc);

  // 태그
  if (item.tags && item.tags.length) {
    const tagsEl = document.createElement('div');
    tagsEl.className = 'card__tags';
    item.tags.slice(0, 3).forEach(function(tag) {
      const t = document.createElement('span');
      t.className = 'tag';
      t.textContent = tag;
      tagsEl.appendChild(t);
    });
    card.appendChild(tagsEl);
  }

  // 푸터
  const footer = document.createElement('div');
  footer.className = 'card__footer';

  const stars = document.createElement('div');
  stars.className = 'card__stars';
  stars.setAttribute('aria-label', '별점 ' + item.stars + '점');
  stars.textContent = '★ ' + (item.stars || 0).toFixed(1);
  footer.appendChild(stars);

  const installs = document.createElement('div');
  installs.className = 'card__installs';
  installs.textContent = '↓ ' + formatInstalls(item.installs || 0);
  footer.appendChild(installs);

  const copyBtn = document.createElement('button');
  copyBtn.className = 'card__copy-btn';
  copyBtn.textContent = '복사';
  copyBtn.setAttribute('aria-label', item.name + ' 설치 명령어 복사');
  copyBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    copyToClipboard(getInstallCmd(item), item.name);
  });
  footer.appendChild(copyBtn);

  card.appendChild(footer);

  // 카드 클릭 → 상세 모달
  card.style.cursor = 'pointer';
  card.addEventListener('click', function() { openDetailModal(item); });

  return card;
}

function getCategoryLabel(catId) {
  const cat = (SITE_DATA.categories || []).find(function(c) { return c.id === catId; });
  return cat ? cat.label : catId;
}

/* ---- 카테고리 카드 렌더러 ---- */

function renderCatCard(cat) {
  const a = document.createElement('a');
  a.href = cat.id + '.html';
  a.className = 'cat-card';
  a.setAttribute('data-aos', 'zoom-in');
  a.setAttribute('role', 'listitem');

  const icon = document.createElement('span');
  icon.className = 'cat-card__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = cat.icon;
  a.appendChild(icon);

  const name = document.createElement('div');
  name.className = 'cat-card__name';
  name.textContent = cat.label;
  a.appendChild(name);

  const count = document.createElement('div');
  count.className = 'cat-card__count';
  count.textContent = cat.count.toLocaleString('ko-KR') + '개+';
  a.appendChild(count);

  const desc = document.createElement('div');
  desc.style.cssText = 'font-size:var(--text-xs);color:var(--text-muted);margin-top:0.3rem;';
  desc.textContent = cat.desc || '';
  a.appendChild(desc);

  return a;
}

/* ---- 인라인 광고 삽입 (카드 그리드) ---- */

function insertInlineAds(grid, adIds) {
  adIds = adIds || ['ad-inline-1', 'ad-inline-2', 'ad-inline-3'];
  const insertAfter = [6, 12, 18];
  const cards = Array.from(grid.children);

  // 역순으로 삽입해야 인덱스가 밀리지 않음
  insertAfter.slice().reverse().forEach(function(pos, i) {
    const adId = adIds[adIds.length - 1 - i];
    if (cards[pos - 1]) {
      const adDiv = document.createElement('div');
      adDiv.id = adId;
      adDiv.className = 'ad-slot ad-slot--inline';
      adDiv.setAttribute('aria-label', '광고');
      cards[pos - 1].after(adDiv);
    }
  });
}

/* ---- 숫자 카운터 애니메이션 ---- */

function animateCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'), 10);
      let current = 0;
      const duration = 1200;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        current = Math.floor(eased * target);
        el.textContent = current.toLocaleString('ko-KR') + (progress < 1 ? '' : '+');
        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      }

      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  els.forEach(function(el) { obs.observe(el); });
}

/* ---- 설치 명령어 생성 ---- */

function getInstallCmd(item) {
  var cat = item.category;
  if (cat === 'mcps') {
    return JSON.stringify({ mcpServers: { [item.id]: { command: 'npx', args: ['-y', '@' + item.id + '/mcp'] } } }, null, 2);
  }
  if (cat === 'hooks') {
    return '# .claude/settings.json > hooks 에 추가\n{ "matcher": "' + (item.matcher || 'Write|Edit') + '", "command": "' + item.id + '" }';
  }
  if (cat === 'commands') {
    return '/' + item.id;
  }
  if (cat === 'plugins') {
    return 'claude plugins install ' + item.id;
  }
  // skills, agents
  return 'claude skills install ' + item.id;
}

/* ---- 클립보드 복사 (HTTP 폴백 포함) ---- */

function copyToClipboard(text, label) {
  var msg = (label || text) + ' 복사되었습니다';
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(function() {
      showToast(msg);
    }).catch(function() { fallbackCopy(text, msg); });
  } else {
    fallbackCopy(text, msg);
  }
}

function fallbackCopy(text, msg) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast(msg);
  } catch (_) {
    showToast('복사 실패 — 직접 선택해 복사하세요');
  }
  document.body.removeChild(ta);
}

/* ---- 토스트 알림 ---- */

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('toast--show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(function() {
    toast.classList.remove('toast--show');
  }, 2500);
}

/* ---- 네비게이션 스크롤 효과 ---- */

function initNav() {
  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const mobile = document.getElementById('nav-mobile');
  if (!nav) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  if (hamburger && mobile) {
    hamburger.addEventListener('click', function() {
      const isOpen = mobile.classList.contains('open');
      mobile.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // 현재 페이지 링크 활성화
  const links = nav.querySelectorAll('.nav__links a, .nav__mobile a');
  links.forEach(function(link) {
    if (link.getAttribute('href') === location.pathname.split('/').pop() ||
        (location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ---- 히어로 검색 ---- */

function handleHeroSearch() {
  const input = document.getElementById('hero-search');
  const q = input ? input.value.trim() : '';
  if (q) {
    window.location.href = 'skills.html?q=' + encodeURIComponent(q);
  } else {
    window.location.href = 'skills.html';
  }
}

function focusHeroSearch() {
  const input = document.getElementById('hero-search');
  if (input) {
    input.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ---- 홈 페이지 그리드 렌더링 ---- */

function renderHomeGrids() {
  // 카테고리
  const catsGrid = document.getElementById('cats-grid');
  if (catsGrid && catsGrid.children.length === 0) {
    SITE_DATA.categories.forEach(function(cat) {
      catsGrid.appendChild(renderCatCard(cat));
    });
  }

  // 스킬 (상위 6개)
  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) {
    const top = getComponentsByCategory('skills').slice(0, 6);
    top.forEach(function(item, i) {
      skillsGrid.appendChild(renderCard(item, { delay: i * 60 }));
    });
  }

  // 에이전트 (상위 4개)
  const agentsGrid = document.getElementById('agents-grid');
  if (agentsGrid) {
    const top = getComponentsByCategory('agents').slice(0, 4);
    top.forEach(function(item, i) {
      agentsGrid.appendChild(renderCard(item, { delay: i * 60 }));
    });
  }

  // MCP (상위 4개)
  const mcpsGrid = document.getElementById('mcps-grid');
  if (mcpsGrid) {
    const top = getComponentsByCategory('mcps').slice(0, 4);
    top.forEach(function(item, i) {
      mcpsGrid.appendChild(renderCard(item, { delay: i * 60 }));
    });
  }
}

/* ---- 목록 페이지 렌더링 ---- */

function renderListingPage(category) {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;

  const urlParams = new URLSearchParams(window.location.search);
  const q = urlParams.get('q') || '';

  // 검색 input에 쿼리 반영
  const searchInput = document.getElementById('search-input');
  if (searchInput && q) searchInput.value = q;

  function doRender(items) {
    grid.textContent = '';
    const countEl = document.querySelector('.listing-toolbar__count');
    if (countEl) countEl.textContent = items.length + '개 결과';

    if (items.length === 0) {
      const empty = document.createElement('div');
      empty.style.cssText = 'grid-column:1/-1;text-align:center;padding:4rem 1rem;color:var(--text-muted);';
      empty.textContent = '검색 결과가 없습니다.';
      grid.appendChild(empty);
      return;
    }

    items.forEach(function(item, i) {
      grid.appendChild(renderCard(item, { delay: Math.min(i, 6) * 40 }));
    });

    // 인라인 광고 삽입
    insertInlineAds(grid);
    renderAds();
  }

  doRender(searchComponents(q, category));

  // 검색 이벤트
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      debouncedSearch(this.value, category, doRender);
    });
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') doRender(searchComponents(this.value, category));
    });
  }

  // 정렬 이벤트
  const sortSelect = document.querySelector('.listing-toolbar__sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      const items = searchComponents(searchInput ? searchInput.value : '', category);
      if (this.value === 'stars') {
        items.sort(function(a,b){ return b.stars - a.stars; });
      } else if (this.value === 'name') {
        items.sort(function(a,b){ return a.name.localeCompare(b.name, 'ko'); });
      }
      doRender(items);
    });
  }

  // 필터 태그
  renderFilterTags(category);
}

function renderFilterTags(category) {
  const container = document.querySelector('.filter-panel__tags');
  if (!container) return;

  const tags = getTopTags(category, 15);
  container.textContent = '';
  tags.forEach(function(tag) {
    const t = document.createElement('button');
    t.className = 'tag';
    t.textContent = tag;
    t.addEventListener('click', function() {
      t.classList.toggle('active');
      const activeTags = Array.from(container.querySelectorAll('.tag.active'))
        .map(function(el) { return el.textContent; });

      const searchInput = document.getElementById('search-input');
      const q = searchInput ? searchInput.value : '';
      let results = searchComponents(q, category);

      if (activeTags.length) {
        results = results.filter(function(item) {
          return activeTags.some(function(tag) { return (item.tags||[]).includes(tag); });
        });
      }

      const grid = document.getElementById('cards-grid');
      if (grid) {
        grid.textContent = '';
        results.forEach(function(item, i) {
          grid.appendChild(renderCard(item, { delay: Math.min(i, 4) * 40 }));
        });
        insertInlineAds(grid);
        renderAds();
      }
    });
    container.appendChild(t);
  });
}

/* ---- 초기화 ---- */

document.addEventListener('DOMContentLoaded', function() {
  initNav();
  animateCounters();
  renderAds();
  if (typeof initParticles === 'function') initParticles('particles-canvas');

  // 히어로 검색 엔터
  const heroSearch = document.getElementById('hero-search');
  if (heroSearch) {
    heroSearch.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') handleHeroSearch();
    });
  }

  // 홈 페이지 렌더링
  if (document.getElementById('cats-grid')) {
    renderHomeGrids();
  }
});

/* ---- 카드 상세 모달 ---- */

function openDetailModal(item) {
  var overlay = document.createElement('div');
  overlay.className = 'detail-overlay';
  function closeModal() {
    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    document.removeEventListener('keydown', onKey);
  }
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeModal();
  });
  function onKey(e) {
    if (e.key === 'Escape') closeModal();
  }
  document.addEventListener('keydown', onKey);

  var modal = document.createElement('div');
  modal.className = 'detail-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  /* 닫기 버튼 */
  var closeBtn = document.createElement('button');
  closeBtn.className = 'detail-modal__close';
  closeBtn.textContent = '✕';
  closeBtn.addEventListener('click', closeModal);
  modal.appendChild(closeBtn);

  /* 헤더: 아이콘 + 이름 */
  var mhead = document.createElement('div');
  mhead.className = 'detail-modal__head';

  var iconEl = document.createElement('div');
  iconEl.className = 'detail-modal__icon card__icon--' + (item.color || 'gold');
  iconEl.setAttribute('aria-hidden', 'true');
  iconEl.textContent = item.icon || '⚡';
  mhead.appendChild(iconEl);

  var titleWrap = document.createElement('div');
  titleWrap.style.flex = '1';

  var titleEl = document.createElement('h2');
  titleEl.className = 'detail-modal__title';
  titleEl.textContent = item.name;
  titleWrap.appendChild(titleEl);

  var metaEl = document.createElement('div');
  metaEl.className = 'detail-modal__meta';

  var catBadge = document.createElement('span');
  catBadge.className = 'badge badge--' + (item.color === 'emerald' ? 'emerald' : item.color === 'purple' ? 'purple' : 'gold');
  catBadge.textContent = getCategoryLabel(item.category);

  var starSpan = document.createElement('span');
  starSpan.className = 'detail-modal__stat';
  starSpan.textContent = '★ ' + (item.stars || 0).toFixed(1);

  var instSpan = document.createElement('span');
  instSpan.className = 'detail-modal__stat';
  instSpan.textContent = '↓ ' + formatInstalls(item.installs || 0) + '회 설치';

  metaEl.appendChild(catBadge);
  metaEl.appendChild(starSpan);
  metaEl.appendChild(instSpan);
  titleWrap.appendChild(metaEl);
  mhead.appendChild(titleWrap);
  modal.appendChild(mhead);

  /* 설명 */
  var descEl = document.createElement('p');
  descEl.className = 'detail-modal__desc';
  descEl.textContent = item.desc;
  modal.appendChild(descEl);

  /* 태그 */
  if (item.tags && item.tags.length) {
    var tagsEl = document.createElement('div');
    tagsEl.className = 'detail-modal__tags';
    item.tags.forEach(function(t) {
      var sp = document.createElement('span');
      sp.className = 'tag';
      sp.textContent = t;
      tagsEl.appendChild(sp);
    });
    modal.appendChild(tagsEl);
  }

  /* 프롬프트 섹션 — 설치 명령어보다 먼저 표시 */
  if (item.prompt) {
    var promptSection = document.createElement('div');
    promptSection.style.cssText = 'background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.25);border-radius:var(--radius-md);overflow:hidden;margin-bottom:1.25rem;';

    var promptLabelRow = document.createElement('div');
    promptLabelRow.style.cssText = 'display:flex;align-items:center;justify-content:space-between;background:rgba(212,175,55,0.08);padding:0.5rem 1rem;border-bottom:1px solid rgba(212,175,55,0.2);';

    var promptLabelText = document.createElement('span');
    promptLabelText.style.cssText = 'font-size:var(--text-xs);color:var(--gold);text-transform:uppercase;letter-spacing:0.05em;font-weight:600;';
    promptLabelText.textContent = '📝 사용 방법 & 프롬프트';
    promptLabelRow.appendChild(promptLabelText);

    var copyPromptBtn = document.createElement('button');
    copyPromptBtn.style.cssText = 'background:rgba(212,175,55,0.18);border:1px solid rgba(212,175,55,0.4);border-radius:6px;color:var(--gold);font-size:0.75rem;padding:0.25rem 0.65rem;cursor:pointer;';
    copyPromptBtn.textContent = '복사';
    copyPromptBtn.addEventListener('click', function() {
      copyToClipboard(item.prompt, item.name + ' 프롬프트');
      copyPromptBtn.textContent = '✓ 복사됨';
      setTimeout(function() { copyPromptBtn.textContent = '복사'; }, 2000);
    });
    promptLabelRow.appendChild(copyPromptBtn);
    promptSection.appendChild(promptLabelRow);

    var promptPre = document.createElement('pre');
    promptPre.style.cssText = 'padding:1rem;margin:0;font-family:"Courier New",monospace;font-size:0.82rem;color:var(--text-secondary);white-space:pre-wrap;word-break:break-word;line-height:1.6;max-height:360px;overflow-y:auto;';
    var promptCode = document.createElement('code');
    promptCode.textContent = item.prompt;
    promptPre.appendChild(promptCode);
    promptSection.appendChild(promptPre);

    modal.appendChild(promptSection);
  }

  /* 명령어 박스 */
  var cmd = getInstallCmd(item);
  var codeSection = document.createElement('div');
  codeSection.className = 'detail-modal__code-section';

  var codeLabel = document.createElement('div');
  codeLabel.className = 'detail-modal__code-label';
  codeLabel.textContent = '설치 / 사용 명령어';
  codeSection.appendChild(codeLabel);

  var codePre = document.createElement('pre');
  codePre.className = 'detail-modal__code';
  var codeEl = document.createElement('code');
  codeEl.textContent = cmd;
  codePre.appendChild(codeEl);
  codeSection.appendChild(codePre);
  modal.appendChild(codeSection);

  /* 액션 버튼 */
  var actionsEl = document.createElement('div');
  actionsEl.className = 'detail-modal__actions';

  var copyBtn = document.createElement('button');
  copyBtn.className = 'btn btn--gold';
  copyBtn.textContent = '📋  명령어 복사';
  copyBtn.addEventListener('click', function() {
    copyToClipboard(cmd, item.name);
    copyBtn.textContent = '✓  복사됨!';
    setTimeout(function() { copyBtn.textContent = '📋  명령어 복사'; }, 2000);
  });
  actionsEl.appendChild(copyBtn);

  var closeBtn2 = document.createElement('button');
  closeBtn2.className = 'btn btn--ghost';
  closeBtn2.textContent = '닫기';
  closeBtn2.addEventListener('click', closeModal);
  actionsEl.appendChild(closeBtn2);

  modal.appendChild(actionsEl);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
  closeBtn.focus();
}
