/* ===================================================
   SITE_DATA — 한국어 컨텐츠 데이터
   =================================================== */
'use strict';

const SITE_DATA = {
  meta: {
    siteName: 'FREE-CODE',
    tagline: 'FREE-CODE — 1000개+ 에이전트, 명령어, 스킬 & MCP 통합',
    description: 'Claude Code 컴포넌트 마켓플레이스 — 에이전트, 명령어, 스킬, 설정, 훅, MCP를 한국어로'
  },

  categories: [
    { id: 'skills',   label: '스킬',     icon: '⚡', count: 1000, color: 'gold',    desc: '워크플로우 자동화 템플릿' },
    { id: 'agents',   label: '에이전트', icon: '🤖', count: 600,  color: 'emerald', desc: 'AI 전문 에이전트' },
    { id: 'commands', label: '명령어',   icon: '⌘',  count: 450,  color: 'purple',  desc: '슬래시 커맨드' },
    { id: 'mcps',     label: 'MCP',      icon: '🔌', count: 120,  color: 'blue',    desc: 'Model Context Protocol' },
    { id: 'plugins',  label: '플러그인', icon: '🧩', count: 85,   color: 'pink',    desc: '확장 플러그인' },
    { id: 'hooks',    label: '훅',       icon: '🪝',  count: 200,  color: 'orange',  desc: '자동화 훅' },
  ],

  skills: [
    {
      id: 'tdd-workflow', name: 'TDD 워크플로우', category: 'skills',
      desc: '테스트 주도 개발 방법론으로 고품질 코드 작성을 자동화합니다. RED→GREEN→REFACTOR 사이클을 강제하고 80%+ 커버리지를 보장합니다.',
      tags: ['테스트', '품질', '자동화', 'TDD'], stars: 4.9, installs: 12400, icon: '🧪', color: 'emerald'
    },
    {
      id: 'frontend-design', name: '프론트엔드 디자인', category: 'skills',
      desc: '최신 UI/UX 패턴과 디자인 시스템 구현을 위한 완벽한 가이드입니다. Tailwind, shadcn/ui, 애니메이션 패턴을 포함합니다.',
      tags: ['UI', 'UX', '디자인', 'Tailwind'], stars: 4.8, installs: 9800, icon: '🎨', color: 'pink'
    },
    {
      id: 'api-design', name: 'API 설계 원칙', category: 'skills',
      desc: 'RESTful 및 GraphQL API를 설계하는 모범 사례를 제공합니다. 버전 관리, 에러 처리, 인증 패턴이 포함됩니다.',
      tags: ['API', 'REST', 'GraphQL', '설계'], stars: 4.7, installs: 8200, icon: '🔗', color: 'blue'
    },
    {
      id: 'security-best', name: '보안 모범 사례', category: 'skills',
      desc: 'OWASP Top 10 및 보안 취약점 방어 전략을 자동으로 검토합니다. SQL 인젝션, XSS, CSRF 방어 체크리스트가 포함됩니다.',
      tags: ['보안', 'OWASP', '취약점', '방어'], stars: 4.9, installs: 11000, icon: '🛡️', color: 'gold'
    },
    {
      id: 'database-schema', name: '데이터베이스 스키마 설계', category: 'skills',
      desc: '효율적인 데이터베이스 스키마와 인덱싱 전략을 설계합니다. 정규화, 성능 최적화, 마이그레이션 전략을 다룹니다.',
      tags: ['데이터베이스', 'SQL', '최적화', 'ORM'], stars: 4.6, installs: 7500, icon: '🗄️', color: 'purple'
    },
    {
      id: 'python-patterns', name: '파이썬 디자인 패턴', category: 'skills',
      desc: 'Pythonic 코드 작성과 고급 디자인 패턴 구현 방법을 안내합니다. 데코레이터, 컨텍스트 매니저, 비동기 패턴을 포함합니다.',
      tags: ['Python', '패턴', '모범사례', '비동기'], stars: 4.8, installs: 10200, icon: '🐍', color: 'emerald'
    },
    {
      id: 'react-best', name: 'React 모범 사례', category: 'skills',
      desc: 'React 컴포넌트 최적화, 상태 관리, 성능 개선 전략입니다. useMemo, useCallback, 코드 스플리팅 기법을 다룹니다.',
      tags: ['React', '최적화', '성능', 'Hooks'], stars: 4.7, installs: 13500, icon: '⚛️', color: 'blue'
    },
    {
      id: 'nextjs-patterns', name: 'Next.js 패턴', category: 'skills',
      desc: 'App Router, Server Components, 캐싱 전략 등 최신 Next.js 기법입니다. ISR, SSR, SSG 패턴과 최적화를 다룹니다.',
      tags: ['Next.js', 'React', 'SSR', 'App Router'], stars: 4.9, installs: 15200, icon: '▲', color: 'gold'
    },
    {
      id: 'typescript-adv', name: 'TypeScript 고급 타입', category: 'skills',
      desc: '제네릭, 조건부 타입, 유틸리티 타입 등 고급 TypeScript 기법입니다. 타입 안전성을 극대화하는 패턴을 제공합니다.',
      tags: ['TypeScript', '타입', 'JavaScript', '제네릭'], stars: 4.8, installs: 11800, icon: '📘', color: 'blue'
    },
    {
      id: 'mcp-builder', name: 'MCP 서버 빌더', category: 'skills',
      desc: 'Model Context Protocol 서버를 처음부터 구축하는 완전한 가이드입니다. 도구 정의, 리소스 관리, 프롬프트 시스템을 다룹니다.',
      tags: ['MCP', '서버', '프로토콜', 'SDK'], stars: 4.9, installs: 9600, icon: '🔌', color: 'purple'
    },
    {
      id: 'docker-dev', name: 'Docker 개발 환경', category: 'skills',
      desc: '컨테이너 기반 개발 환경 구축과 Docker Compose 설정을 자동화합니다. 멀티스테이지 빌드와 최적화된 이미지를 생성합니다.',
      tags: ['Docker', '컨테이너', 'DevOps', 'Compose'], stars: 4.6, installs: 6800, icon: '🐳', color: 'blue'
    },
    {
      id: 'git-workflow', name: 'Git 워크플로우', category: 'skills',
      desc: '브랜치 전략, 커밋 메시지 규칙, PR 검토 프로세스를 최적화합니다. Conventional Commits와 GitFlow를 지원합니다.',
      tags: ['Git', '버전관리', '협업', 'GitHub'], stars: 4.5, installs: 8900, icon: '🌿', color: 'emerald'
    },
    {
      id: 'rust-patterns', name: 'Rust 언어 패턴', category: 'skills',
      desc: '소유권, 수명, 에러 처리 등 Rust의 핵심 패턴을 마스터합니다. Result/Option 모나드, 트레이트, 비동기 Rust를 다룹니다.',
      tags: ['Rust', '시스템', '메모리', '안전성'], stars: 4.8, installs: 5400, icon: '🦀', color: 'orange'
    },
    {
      id: 'golang-patterns', name: 'Go 언어 패턴', category: 'skills',
      desc: '동시성, 인터페이스, 에러 처리 등 Go 관용적 패턴을 제공합니다. goroutine, channel, context 활용법을 포함합니다.',
      tags: ['Go', '동시성', '백엔드', 'goroutine'], stars: 4.7, installs: 7100, icon: '🐹', color: 'blue'
    },
    {
      id: 'agent-browser', name: '에이전트 브라우저', category: 'skills',
      desc: 'Playwright를 활용한 브라우저 자동화와 웹 스크래핑 에이전트입니다. 동적 페이지 처리, 인증, 스크린샷 캡처를 지원합니다.',
      tags: ['브라우저', '자동화', 'Playwright', '스크래핑'], stars: 4.6, installs: 8300, icon: '🌐', color: 'purple'
    },
    {
      id: 'deployment-auto', name: '배포 자동화', category: 'skills',
      desc: 'CI/CD 파이프라인 설정과 무중단 배포 전략을 자동화합니다. GitHub Actions, Docker, Kubernetes 배포를 지원합니다.',
      tags: ['CI/CD', '배포', 'DevOps', 'Kubernetes'], stars: 4.7, installs: 7800, icon: '🚀', color: 'emerald'
    },
    {
      id: 'code-review-skill', name: '코드 리뷰 스킬', category: 'skills',
      desc: '버그, 보안 취약점, 코드 품질 문제를 자동으로 감지하고 리뷰합니다. PR 리뷰 체크리스트와 개선 제안을 제공합니다.',
      tags: ['리뷰', '품질', '보안', '체크리스트'], stars: 4.8, installs: 10500, icon: '🔍', color: 'gold'
    },
    {
      id: 'brainstorming', name: '브레인스토밍', category: 'skills',
      desc: '기능 기획, 아키텍처 설계, 문제 해결을 위한 체계적인 브레인스토밍입니다. 다양한 관점에서 분석하고 최적 방안을 도출합니다.',
      tags: ['기획', '설계', '창의성', '분석'], stars: 4.5, installs: 6200, icon: '💡', color: 'gold'
    },
    {
      id: 'django-patterns', name: 'Django 패턴', category: 'skills',
      desc: 'Django ORM 최적화, 미들웨어, 시리얼라이저 등 고급 패턴입니다. DRF, Celery, Redis 연동 베스트 프랙티스를 포함합니다.',
      tags: ['Django', 'Python', '웹', 'DRF'], stars: 4.6, installs: 5900, icon: '🎸', color: 'emerald'
    },
    {
      id: 'nestjs-patterns', name: 'NestJS 패턴', category: 'skills',
      desc: 'NestJS 모듈, 서비스, 가드, 인터셉터 패턴을 마스터합니다. TypeORM, JWT 인증, Swagger 문서화를 포함합니다.',
      tags: ['NestJS', 'Node.js', '백엔드', 'TypeScript'], stars: 4.7, installs: 6700, icon: '🏗️', color: 'pink'
    }
  ],

  agents: [
    {
      id: 'code-reviewer', name: '코드 리뷰어', category: 'agents',
      desc: '버그, 로직 오류, 보안 취약점을 감지하는 전문 코드 리뷰 에이전트입니다. 신뢰도 기반 필터링으로 중요한 이슈만 보고합니다.',
      tags: ['리뷰', '품질', '보안', '자동화'], stars: 4.9, installs: 18500, icon: '🔬', color: 'gold'
    },
    {
      id: 'tdd-guide-agent', name: 'TDD 가이드', category: 'agents',
      desc: '테스트 주도 개발 방법론을 강제하며 80%+ 커버리지를 보장합니다. 테스트 먼저 작성하는 습관을 자동으로 강제합니다.',
      tags: ['TDD', '테스트', '품질', '커버리지'], stars: 4.8, installs: 14200, icon: '🧪', color: 'emerald'
    },
    {
      id: 'security-reviewer-agent', name: '보안 리뷰어', category: 'agents',
      desc: 'OWASP Top 10, 시크릿 누출, 인젝션 공격을 자동으로 탐지합니다. 인증/인가 코드를 집중 검토합니다.',
      tags: ['보안', 'OWASP', '취약점', '스캐닝'], stars: 4.9, installs: 16800, icon: '🛡️', color: 'purple'
    },
    {
      id: 'architect-agent', name: '소프트웨어 아키텍트', category: 'agents',
      desc: '시스템 설계, 확장성, 기술 의사결정을 위한 아키텍처 전문가입니다. 마이크로서비스, 이벤트 드리븐 설계를 지원합니다.',
      tags: ['아키텍처', '설계', '확장성', '패턴'], stars: 4.8, installs: 12900, icon: '🏛️', color: 'blue'
    },
    {
      id: 'database-reviewer-agent', name: '데이터베이스 리뷰어', category: 'agents',
      desc: 'SQL 최적화, 스키마 설계, 보안 및 성능 분석 전문 에이전트입니다. N+1 쿼리, 인덱스 누락을 자동 감지합니다.',
      tags: ['데이터베이스', 'SQL', '최적화', '성능'], stars: 4.7, installs: 9400, icon: '🗄️', color: 'emerald'
    },
    {
      id: 'planner-agent', name: '기획 전문가', category: 'agents',
      desc: '복잡한 기능 구현 계획, 의존성 분석, 리스크 평가를 수행합니다. PRD, 아키텍처 문서, 태스크 분해를 자동 생성합니다.',
      tags: ['기획', '분석', '전략', '문서화'], stars: 4.6, installs: 8700, icon: '📋', color: 'gold'
    },
    {
      id: 'doc-updater-agent', name: '문서 업데이터', category: 'agents',
      desc: 'README, API 문서, 코드맵을 자동으로 업데이트하는 에이전트입니다. 코드 변경 사항을 추적하여 문서를 동기화합니다.',
      tags: ['문서', '자동화', 'README', 'API'], stars: 4.5, installs: 7200, icon: '📝', color: 'blue'
    },
    {
      id: 'e2e-runner-agent', name: 'E2E 테스트 러너', category: 'agents',
      desc: 'Playwright 기반으로 E2E 테스트를 생성하고 실행하는 전문 에이전트입니다. 플레이키 테스트 격리와 비주얼 회귀 테스트를 지원합니다.',
      tags: ['E2E', '테스트', 'Playwright', '자동화'], stars: 4.7, installs: 10300, icon: '🎭', color: 'purple'
    },
    {
      id: 'build-resolver-agent', name: '빌드 오류 해결사', category: 'agents',
      desc: '빌드 실패, TypeScript 오류, 의존성 충돌을 최소 변경으로 해결합니다. 근본 원인 분석 후 외과적 수정을 수행합니다.',
      tags: ['빌드', '오류', '해결', 'TypeScript'], stars: 4.8, installs: 13600, icon: '🔧', color: 'orange'
    },
    {
      id: 'performance-optimizer-agent', name: '성능 최적화기', category: 'agents',
      desc: '번들 사이즈, 렌더링 성능, 메모리 누출을 분석하고 최적화합니다. Core Web Vitals 개선과 Lighthouse 점수 향상을 지원합니다.',
      tags: ['성능', '최적화', '분석', 'Lighthouse'], stars: 4.7, installs: 11200, icon: '⚡', color: 'gold'
    }
  ],

  mcps: [
    {
      id: 'mcp-github', name: 'GitHub MCP', category: 'mcps',
      desc: 'GitHub API와 연동하여 이슈, PR, 코드 검색을 AI로 제어합니다. 저장소 관리, 코드 검색, PR 리뷰를 자동화합니다.',
      tags: ['GitHub', 'API', '버전관리', '이슈'], stars: 4.9, installs: 22000, icon: '🐙', color: 'purple'
    },
    {
      id: 'mcp-postgres', name: 'PostgreSQL MCP', category: 'mcps',
      desc: 'PostgreSQL 데이터베이스를 자연어로 쿼리하고 스키마를 관리합니다. 복잡한 SQL 쿼리 생성과 마이그레이션을 지원합니다.',
      tags: ['PostgreSQL', 'SQL', '데이터베이스', '쿼리'], stars: 4.8, installs: 18400, icon: '🐘', color: 'blue'
    },
    {
      id: 'mcp-slack', name: 'Slack MCP', category: 'mcps',
      desc: 'Slack 채널 메시지, 파일, 사용자를 AI 에이전트로 관리합니다. 팀 협업 자동화와 알림 시스템을 구축합니다.',
      tags: ['Slack', '협업', '메시지', '자동화'], stars: 4.7, installs: 15600, icon: '💬', color: 'purple'
    },
    {
      id: 'mcp-figma', name: 'Figma MCP', category: 'mcps',
      desc: 'Figma 디자인 파일을 읽고 코드를 생성하는 공식 MCP 서버입니다. 컴포넌트 구조 분석과 CSS 추출을 지원합니다.',
      tags: ['Figma', '디자인', '코드생성', 'UI'], stars: 4.9, installs: 19800, icon: '🎨', color: 'pink'
    },
    {
      id: 'mcp-notion', name: 'Notion MCP', category: 'mcps',
      desc: 'Notion 데이터베이스, 페이지, 블록을 AI로 생성하고 편집합니다. 문서 자동화와 지식 베이스 관리를 지원합니다.',
      tags: ['Notion', '문서', '협업', '데이터베이스'], stars: 4.7, installs: 14200, icon: '📚', color: 'emerald'
    }
  ],

  commands: [
    {
      id: 'cmd-commit', name: '/commit', category: 'commands',
      desc: '스테이지된 변경 사항을 분석하고 컨벤셔널 커밋 메시지를 자동 생성합니다. git diff를 읽고 의미있는 커밋 메시지를 작성합니다.',
      tags: ['Git', '커밋', '자동화'], stars: 4.9, installs: 31000, icon: '💾', color: 'emerald'
    },
    {
      id: 'cmd-review', name: '/review', category: 'commands',
      desc: '현재 변경 사항에 대한 종합적인 코드 리뷰를 수행합니다. 버그, 성능, 보안, 코드 품질을 동시에 분석합니다.',
      tags: ['리뷰', '품질', '분석'], stars: 4.8, installs: 24500, icon: '🔍', color: 'gold'
    },
    {
      id: 'cmd-debug', name: '/debug', category: 'commands',
      desc: '과학적 디버깅 방법론으로 버그를 체계적으로 추적합니다. 가설 설정, 검증, 수정 사이클을 자동으로 진행합니다.',
      tags: ['디버깅', '오류', '분석'], stars: 4.7, installs: 19200, icon: '🐛', color: 'orange'
    },
    {
      id: 'cmd-plan', name: '/plan', category: 'commands',
      desc: '복잡한 기능 구현 전 체계적인 계획서를 작성합니다. 파일 구조, 구현 순서, 테스트 전략을 포함합니다.',
      tags: ['기획', '계획', '설계'], stars: 4.8, installs: 16700, icon: '📋', color: 'blue'
    },
    {
      id: 'cmd-test', name: '/test', category: 'commands',
      desc: '현재 컨텍스트에 맞는 테스트를 자동으로 생성하고 실행합니다. 단위, 통합, E2E 테스트를 상황에 맞게 선택합니다.',
      tags: ['테스트', '자동화', 'TDD'], stars: 4.7, installs: 21300, icon: '🧪', color: 'emerald'
    },
    {
      id: 'cmd-docs', name: '/docs', category: 'commands',
      desc: '코드 변경 사항에 맞춰 문서를 자동 업데이트합니다. README, CHANGELOG, API 문서를 동기화합니다.',
      tags: ['문서', '자동화', 'README'], stars: 4.5, installs: 12800, icon: '📖', color: 'purple'
    },
    {
      id: 'cmd-refactor', name: '/refactor', category: 'commands',
      desc: '선택한 코드를 분석하고 리팩토링 전략을 제안합니다. 중복 제거, 추상화, 가독성 개선을 자동으로 수행합니다.',
      tags: ['리팩토링', '최적화', '품질'], stars: 4.6, installs: 15400, icon: '🔄', color: 'gold'
    },
    {
      id: 'cmd-deploy', name: '/deploy', category: 'commands',
      desc: 'GitHub Pages, Vercel, AWS 등 다양한 플랫폼으로 배포 워크플로우를 자동화합니다.',
      tags: ['배포', 'CI/CD', 'DevOps'], stars: 4.7, installs: 14100, icon: '🚀', color: 'blue'
    }
  ],

  plugins: [
    {
      id: 'plugin-vercel', name: 'Vercel 플러그인', category: 'plugins',
      desc: 'Vercel 배포, 환경 변수, 도메인 설정을 Claude Code에서 직접 관리합니다. vercel deploy, env pull 등을 지원합니다.',
      tags: ['Vercel', '배포', '호스팅'], stars: 4.9, installs: 28000, icon: '▲', color: 'gold'
    },
    {
      id: 'plugin-sentry', name: 'Sentry 플러그인', category: 'plugins',
      desc: 'Sentry 에러 추적과 성능 모니터링을 AI로 분석합니다. 에러 패턴 인식과 자동 수정 제안을 제공합니다.',
      tags: ['Sentry', '모니터링', '에러'], stars: 4.7, installs: 17500, icon: '🚨', color: 'purple'
    },
    {
      id: 'plugin-stripe', name: 'Stripe 플러그인', category: 'plugins',
      desc: 'Stripe 결제 시스템 통합과 웹훅 처리를 가이드합니다. 구독, 일회성 결제, 환불 플로우를 자동화합니다.',
      tags: ['Stripe', '결제', '웹훅'], stars: 4.8, installs: 22300, icon: '💳', color: 'blue'
    },
    {
      id: 'plugin-supabase', name: 'Supabase 플러그인', category: 'plugins',
      desc: 'Supabase 데이터베이스, 인증, 실시간 구독을 Claude Code로 관리합니다. RLS 정책과 Edge Functions를 지원합니다.',
      tags: ['Supabase', 'PostgreSQL', '인증'], stars: 4.8, installs: 19600, icon: '⚡', color: 'emerald'
    },
    {
      id: 'plugin-linear', name: 'Linear 플러그인', category: 'plugins',
      desc: 'Linear 이슈, 프로젝트, 사이클을 Claude Code에서 직접 관리합니다. 이슈 생성, 할당, 상태 업데이트를 자동화합니다.',
      tags: ['Linear', '이슈', '프로젝트관리'], stars: 4.6, installs: 11200, icon: '📊', color: 'purple'
    }
  ],

  hooks: [
    {
      id: 'hook-format', name: '파일 저장 포맷터', category: 'hooks',
      desc: '파일 편집 후 Prettier로 자동 포맷팅합니다. PostToolUse 훅으로 코드 스타일을 일관되게 유지합니다.',
      tags: ['포맷', 'Prettier', '자동화'], stars: 4.8, installs: 25600, icon: '✨', color: 'gold'
    },
    {
      id: 'hook-lint', name: 'ESLint 훅', category: 'hooks',
      desc: '코드 편집 후 ESLint를 자동 실행하고 오류를 수정합니다. 코드 품질을 편집 시점에 즉시 유지합니다.',
      tags: ['ESLint', 'Lint', '품질'], stars: 4.7, installs: 22100, icon: '🔍', color: 'blue'
    },
    {
      id: 'hook-typecheck', name: 'TypeScript 타입 체크 훅', category: 'hooks',
      desc: '파일 편집 후 TypeScript 컴파일러를 실행하여 타입 오류를 즉시 감지합니다.',
      tags: ['TypeScript', '타입', '검증'], stars: 4.8, installs: 19800, icon: '📘', color: 'blue'
    },
    {
      id: 'hook-security-reminder', name: '보안 알림 훅', category: 'hooks',
      desc: '보안 민감한 파일 편집 시 자동으로 보안 체크리스트를 표시합니다. 시크릿, 인증, API 키를 감지합니다.',
      tags: ['보안', '알림', '체크리스트'], stars: 4.6, installs: 14300, icon: '🔐', color: 'orange'
    },
    {
      id: 'hook-build-verify', name: '빌드 검증 훅', category: 'hooks',
      desc: '세션 종료 시 프로덕션 빌드를 자동 실행하여 빌드 성공을 검증합니다.',
      tags: ['빌드', '검증', '배포'], stars: 4.5, installs: 11700, icon: '🏗️', color: 'emerald'
    },
    {
      id: 'hook-file-size', name: '파일 크기 제한 훅', category: 'hooks',
      desc: '800줄 이상의 파일 작성을 차단하고 모듈 분리를 강제합니다. 코드베이스 유지보수성을 자동으로 관리합니다.',
      tags: ['파일크기', '모듈화', '제한'], stars: 4.4, installs: 9200, icon: '📏', color: 'purple'
    }
  ]
};
