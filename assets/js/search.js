/* ===================================================
   SEARCH — 클라이언트 사이드 전체 텍스트 검색
   =================================================== */
'use strict';

let _debounceTimer = null;

/**
 * 모든 카테고리에서 컴포넌트 검색 (또는 특정 카테고리)
 */
function searchComponents(query, category) {
  const q = (query || '').toLowerCase().trim();
  const cat = category || 'all';

  let pool = [];
  if (cat === 'all') {
    pool = [
      ...(SITE_DATA.skills   || []),
      ...(SITE_DATA.agents   || []),
      ...(SITE_DATA.mcps     || []),
      ...(SITE_DATA.commands || []),
      ...(SITE_DATA.plugins  || []),
      ...(SITE_DATA.hooks    || []),
    ];
  } else {
    pool = SITE_DATA[cat] || [];
  }

  if (!q) {
    return pool.slice().sort(function(a, b) { return b.installs - a.installs; });
  }

  return pool
    .filter(function(item) {
      const nameHit  = item.name.toLowerCase().includes(q);
      const descHit  = item.desc.toLowerCase().includes(q);
      const tagHit   = (item.tags || []).some(function(t) { return t.toLowerCase().includes(q); });
      return nameHit || descHit || tagHit;
    })
    .map(function(item) {
      // 점수 계산 (이름 매치 > 태그 매치 > 설명 매치)
      let score = item.installs;
      if (item.name.toLowerCase().includes(q)) score += 100000;
      if ((item.tags || []).some(function(t) { return t.toLowerCase().includes(q); })) score += 50000;
      return { item: item, score: score };
    })
    .sort(function(a, b) { return b.score - a.score; })
    .map(function(s) { return s.item; });
}

/**
 * 카테고리별 컴포넌트 반환 (설치수 내림차순)
 */
function getComponentsByCategory(category) {
  if (category === 'all') {
    return searchComponents('', 'all');
  }
  return (SITE_DATA[category] || []).slice().sort(function(a, b) {
    return b.installs - a.installs;
  });
}

/**
 * 인기 태그 추출 (상위 N개)
 */
function getTopTags(category, limit) {
  const lim = limit || 12;
  const items = getComponentsByCategory(category || 'all');
  const tagCount = {};

  items.forEach(function(item) {
    (item.tags || []).forEach(function(tag) {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .sort(function(a, b) { return b[1] - a[1]; })
    .slice(0, lim)
    .map(function(e) { return e[0]; });
}

/**
 * 디바운스 검색 (300ms)
 */
function debouncedSearch(query, category, callback) {
  clearTimeout(_debounceTimer);
  _debounceTimer = setTimeout(function() {
    callback(searchComponents(query, category));
  }, 300);
}

/**
 * 별점 표시 문자열 생성
 */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/**
 * 설치수 포맷
 */
function formatInstalls(n) {
  if (n >= 10000) return Math.round(n / 1000) + 'k';
  if (n >= 1000)  return (n / 1000).toFixed(1) + 'k';
  return String(n);
}
