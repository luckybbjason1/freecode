/* ===================================================
   SITE_DATA — 한국어 컨텐츠 데이터
   =================================================== */
'use strict';

const SITE_DATA = {
  meta: {
    siteName: 'Claude Korea',
    tagline: 'Claude Korea — 1000개+ 에이전트, 명령어, 스킬 & MCP 통합',
    description: 'Claude Code 컴포넌트 마켓플레이스 — 에이전트, 명령어, 스킬, 설정, 훅, MCP를 한국어로'
  },

  categories: [
    { id: 'skills',   label: '스킬',     icon: '⚡', count: 814, color: 'gold',    desc: '워크플로우 자동화 템플릿' },
    { id: 'agents',   label: '에이전트', icon: '🤖', count: 417, color: 'emerald', desc: 'AI 전문 에이전트' },
    { id: 'commands', label: '명령어',   icon: '⌘',  count: 280, color: 'purple',  desc: '슬래시 커맨드' },
    { id: 'mcps',     label: 'MCP',      icon: '🔌', count: 69,  color: 'blue',    desc: 'Model Context Protocol' },
    { id: 'plugins',  label: '플러그인', icon: '🧩', count: 10,  color: 'pink',    desc: '확장 플러그인' },
    { id: 'hooks',    label: '훅',       icon: '🪝',  count: 54,  color: 'orange',  desc: '자동화 훅' },
  ],


  skills: [
    { id: 'frontend-design', name: '프론트엔드 디자인', nameEn: 'frontend-design', category: 'skills', desc: '독창적이고 프로덕션 수준의 프론트엔드 인터페이스를 높은 디자인 품질로 제작합니다.', tags: ['creative-design', '프론트엔드'], stars: 4.9, installs: 17102, prompt: '이 스킬은 프로덕션 수준의 뛰어난 프론트엔드 UI를 설계할 때 사용합니다. 웹 컴포넌트, 페이지, 애플리케이션을 독창적인 디자인으로 구현합니다. 사용법: "이 컴포넌트를 재디자인해줘", "랜딩 페이지 UI를 개선해줘" 등의 요청에 자동으로 활성화됩니다.' },
    { id: 'code-reviewer', name: '코드 리뷰어', nameEn: 'code-reviewer', category: 'skills', desc: 'TypeScript, JavaScript, Python, Swift, Kotlin, Go를 위한 종합 코드 리뷰 스킬. 자동화된 코드 분석, 모범 사례 확인, 보안 점검을 포함합니다.', tags: ['개발'], stars: 4.9, installs: 12688, prompt: '이 스킬은 코드 품질을 검토하고 개선점을 제안할 때 사용합니다. 보안 취약점, 성능 문제, 코딩 표준 위반을 자동으로 탐지합니다. 사용법: "이 코드를 리뷰해줘", "보안 취약점을 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'senior-frontend', name: '시니어 프론트엔드', nameEn: 'senior-frontend', category: 'skills', desc: 'ReactJS, NextJS, TypeScript, Tailwind CSS를 활용한 현대적이고 고성능 웹 애플리케이션 개발을 위한 종합 프론트엔드 스킬입니다.', tags: ['개발', '프론트엔드'], stars: 4.9, installs: 11899, prompt: '이 스킬은 React, Next.js 기반의 고급 프론트엔드 개발이 필요할 때 사용합니다. 컴포넌트 설계, 성능 최적화, 접근성 구현을 전문적으로 지원합니다. "React 컴포넌트 만들어줘", "Next.js 페이지 최적화해줘" 요청에 활성화됩니다.' },
    { id: 'skill-creator', name: '스킬 제작기', nameEn: 'skill-creator', category: 'skills', desc: 'Claude Code용 새로운 스킬, 에이전트, 명령어를 생성합니다. 커스텀 워크플로우와 자동화 도구를 제작할 때 사용합니다.', tags: ['개발'], stars: 4.9, installs: 11500, prompt: '이 스킬은 새로운 Claude Code 스킬이나 에이전트를 제작할 때 사용합니다. 스킬 구조 설계, 프롬프트 작성, 테스트를 지원합니다. "새 스킬 만들어줘", "에이전트 템플릿 만들어줘" 요청에 활성화됩니다.' },
    { id: 'senior-backend', name: '시니어 백엔드', nameEn: 'senior-backend', category: 'skills', desc: 'Node.js, Python, Go, Rust 등을 활용한 고성능 백엔드 시스템, API, 마이크로서비스 개발을 위한 종합 백엔드 스킬입니다.', tags: ['개발', '백엔드'], stars: 4.9, installs: 10800, prompt: '이 스킬은 백엔드 API 및 서버 로직 구현이 필요할 때 사용합니다. 데이터베이스 설계, 인증 시스템, 성능 최적화를 전문으로 지원합니다. "API 엔드포인트 만들어줘", "데이터베이스 스키마 설계해줘" 요청에 활성화됩니다.' },
    { id: 'senior-architect', name: '시니어 아키텍트', nameEn: 'senior-architect', category: 'skills', desc: '대규모 시스템 설계, 마이크로서비스 아키텍처, 클라우드 인프라 계획을 위한 종합 소프트웨어 아키텍처 스킬입니다.', tags: ['아키텍처'], stars: 4.9, installs: 10200, prompt: '이 스킬은 시스템 아키텍처 설계와 기술적 의사결정이 필요할 때 사용합니다. 확장성, 가용성, 보안을 고려한 설계 방안을 제시합니다. "시스템 아키텍처 설계해줘", "마이크로서비스 구조 만들어줘" 요청에 활성화됩니다.' },
    { id: 'react-best-practices', name: 'React 모범 사례', nameEn: 'react-best-practices', category: 'skills', desc: 'React 애플리케이션을 위한 최신 패턴, 훅 사용법, 성능 최적화, TypeScript 통합 모범 사례를 제공합니다.', tags: ['React', '개발'], stars: 4.9, installs: 9800, prompt: '이 스킬은 React 코드 품질과 패턴 개선이 필요할 때 사용합니다. 컴포넌트 구조, 훅 활용, 성능 최적화 방법을 안내합니다. "React 코드 개선해줘", "React 패턴 적용해줘" 요청에 활성화됩니다.' },
    { id: 'ui-design-system', name: 'UI 디자인 시스템', nameEn: 'ui-design-system', category: 'skills', desc: '일관된 UI 컴포넌트 라이브러리, 디자인 토큰, 스타일 가이드를 구축하고 관리하는 디자인 시스템 스킬입니다.', tags: ['UI', '디자인'], stars: 4.9, installs: 9200, prompt: '이 스킬은 체계적인 UI 디자인 시스템 구축이 필요할 때 사용합니다. 컬러 팔레트, 타이포그래피, 컴포넌트 규격을 표준화합니다. "디자인 시스템 만들어줘", "UI 컴포넌트 라이브러리 만들어줘" 요청에 활성화됩니다.' },
    { id: 'ui-ux-pro-max', name: 'UI/UX 프로 맥스', nameEn: 'ui-ux-pro-max', category: 'skills', desc: 'UI/UX 디자인 인텔리전스. 사용자 경험 최적화, 인터랙션 디자인, 접근성을 포함한 종합 UI/UX 스킬입니다.', tags: ['UI', 'UX'], stars: 4.9, installs: 8900, prompt: '이 스킬은 최고 수준의 UI/UX 설계가 필요할 때 사용합니다. 사용자 여정 분석, 와이어프레임, 프로토타입 설계를 지원합니다. "UX 개선해줘", "사용자 인터페이스 최적화해줘" 요청에 활성화됩니다.' },
    { id: 'webapp-testing', name: '웹앱 테스팅', nameEn: 'webapp-testing', category: 'skills', desc: '웹 애플리케이션을 위한 통합 테스트 도구 모음. E2E, 단위 테스트, 통합 테스트를 자동화합니다.', tags: ['테스트'], stars: 4.9, installs: 8600, prompt: '이 스킬은 웹 애플리케이션 테스트 구현이 필요할 때 사용합니다. Playwright, Jest, Vitest 등 도구를 활용한 자동화 테스트를 제공합니다. "테스트 코드 만들어줘", "E2E 테스트 작성해줘" 요청에 활성화됩니다.' },
    { id: 'canvas-design', name: '캔버스 디자인', nameEn: 'canvas-design', category: 'skills', desc: 'Canvas API를 활용한 아름다운 시각적 경험, 인터랙티브 그래픽, 애니메이션을 생성하는 스킬입니다.', tags: ['디자인', '그래픽'], stars: 4.9, installs: 8300, prompt: '이 스킬은 Canvas API를 이용한 그래픽 및 애니메이션 구현이 필요할 때 사용합니다. 차트, 게임 그래픽, 인터랙티브 시각화를 제작합니다. "Canvas로 그래픽 만들어줘", "인터랙티브 애니메이션 만들어줘" 요청에 활성화됩니다.' },
    { id: 'senior-fullstack', name: '시니어 풀스택', nameEn: 'senior-fullstack', category: 'skills', desc: '프론트엔드와 백엔드를 모두 아우르는 종합 풀스택 개발 스킬. 현대적인 웹 개발 스택을 완전히 지원합니다.', tags: ['개발', '풀스택'], stars: 4.9, installs: 8100, prompt: '이 스킬은 프론트엔드부터 백엔드까지 전체 스택 개발이 필요할 때 사용합니다. React, Node.js, 데이터베이스 설계를 통합적으로 지원합니다. "풀스택 기능 구현해줘", "전체 앱 만들어줘" 요청에 활성화됩니다.' },
    { id: 'git-commit-helper', name: 'Git 커밋 도우미', nameEn: 'git-commit-helper', category: 'skills', desc: '컨벤셔널 커밋 형식으로 의미 있는 Git 커밋 메시지를 자동 생성합니다. 변경 내용을 분석하여 최적의 메시지를 제안합니다.', tags: ['git'], stars: 4.9, installs: 7900, prompt: '이 스킬은 Git 커밋 메시지 작성이 필요할 때 사용합니다. 변경 내용을 분석해 컨벤셔널 커밋 형식의 메시지를 생성합니다. "커밋 메시지 만들어줘", "git commit 도와줘" 요청에 활성화됩니다.' },
    { id: 'brainstorming', name: '브레인스토밍', nameEn: 'brainstorming', category: 'skills', desc: '창의적인 아이디어 생성, 문제 해결, 기능 기획을 위한 구조화된 브레인스토밍 세션을 진행합니다.', tags: ['기획'], stars: 4.9, installs: 7700, prompt: '이 스킬은 창의적 아이디어 발굴이나 문제 해결이 필요할 때 사용합니다. 다양한 관점에서 아이디어를 체계적으로 생성하고 평가합니다. "아이디어 브레인스토밍해줘", "기능 아이디어 제안해줘" 요청에 활성화됩니다.' },
    { id: 'senior-prompt-engineer', name: '시니어 프롬프트 엔지니어', nameEn: 'senior-prompt-engineer', category: 'skills', desc: 'LLM 성능을 극대화하는 고급 프롬프트 엔지니어링 기법. 체인-오브-쏘트, 퓨샷 학습 등을 활용합니다.', tags: ['AI', '프롬프트'], stars: 4.9, installs: 7500, prompt: '이 스킬은 AI 모델용 고품질 프롬프트 작성이 필요할 때 사용합니다. 체계적인 프롬프트 구조로 모델 성능을 극대화합니다. "프롬프트 개선해줘", "AI 지시문 최적화해줘" 요청에 활성화됩니다.' },
    { id: 'seo-optimizer', name: 'SEO 최적화기', nameEn: 'seo-optimizer', category: 'skills', desc: '검색 엔진 최적화 스킬. 기술적 SEO, 콘텐츠 최적화, 메타데이터 개선으로 검색 순위를 높입니다.', tags: ['SEO', '마케팅'], stars: 4.9, installs: 7300, prompt: '이 스킬은 웹사이트 검색 엔진 최적화가 필요할 때 사용합니다. 메타 태그, 구조화 데이터, 콘텐츠 최적화를 종합적으로 개선합니다. "SEO 최적화해줘", "검색 순위 높여줘" 요청에 활성화됩니다.' },
    { id: 'docx', name: 'DOCX 처리', nameEn: 'docx', category: 'skills', desc: 'Word 문서(.docx) 생성, 편집, 분석 스킬. 사용자가 Word 파일 작업을 요청할 때마다 사용합니다.', tags: ['문서', '오피스'], stars: 4.9, installs: 7100, prompt: '이 스킬은 Word 문서 생성 및 편집이 필요할 때 사용합니다. .docx 파일 형식으로 보고서, 계약서, 제안서를 작성합니다. "Word 문서 만들어줘", "docx 파일 생성해줘" 요청에 활성화됩니다.' },
    { id: 'pdf-processing-pro', name: 'PDF 처리 프로', nameEn: 'pdf-processing-pro', category: 'skills', desc: 'PDF 파일 처리, 분석, 변환을 위한 전문 스킬. 텍스트 추출, 양식 처리, 문서 변환을 지원합니다.', tags: ['PDF', '문서'], stars: 4.9, installs: 6900, prompt: '이 스킬은 PDF 파일 처리 및 분석이 필요할 때 사용합니다. PDF에서 텍스트 추출, 데이터 분석, 형식 변환을 수행합니다. "PDF 분석해줘", "PDF에서 데이터 추출해줘" 요청에 활성화됩니다.' },
    { id: 'mcp-builder', name: 'MCP 빌더', nameEn: 'mcp-builder', category: 'skills', desc: '고품질 MCP(Model Context Protocol) 서버 구축 가이드. 도구 개발, 서버 설정, 통합 테스트를 지원합니다.', tags: ['MCP', '개발'], stars: 4.9, installs: 6700, prompt: '이 스킬은 MCP 서버 개발이 필요할 때 사용합니다. MCP 프로토콜 구현, 도구 정의, 서버 배포를 단계별로 안내합니다. "MCP 서버 만들어줘", "MCP 도구 개발해줘" 요청에 활성화됩니다.' },
    { id: 'senior-security', name: '시니어 보안', nameEn: 'senior-security', category: 'skills', desc: '보안 감사, 취약점 분석, 보안 아키텍처 설계를 위한 종합 보안 스킬. OWASP Top 10 대응을 포함합니다.', tags: ['보안'], stars: 4.9, installs: 6500, prompt: '이 스킬은 보안 취약점 분석 및 보안 강화가 필요할 때 사용합니다. 코드 보안 감사, 침투 테스트, 보안 아키텍처를 전문으로 지원합니다. "보안 감사해줘", "취약점 찾아줘" 요청에 활성화됩니다.' },
    { id: 'xlsx', name: 'XLSX 처리', nameEn: 'xlsx', category: 'skills', desc: '스프레드시트(.xlsx) 파일 생성, 분석, 편집 스킬. 엑셀 파일 관련 모든 작업 시 사용합니다.', tags: ['엑셀', '문서'], stars: 4.9, installs: 6300, prompt: '이 스킬은 Excel 스프레드시트 처리가 필요할 때 사용합니다. .xlsx 파일 생성, 데이터 분석, 차트 생성을 지원합니다. "엑셀 파일 만들어줘", "스프레드시트 분석해줘" 요청에 활성화됩니다.' },
    { id: 'pptx', name: 'PPTX 처리', nameEn: 'pptx', category: 'skills', desc: 'PowerPoint(.pptx) 파일 생성, 편집, 분석 스킬. 프레젠테이션 관련 작업 시 자동 활성화됩니다.', tags: ['프레젠테이션', '문서'], stars: 4.9, installs: 6100, prompt: '이 스킬은 PowerPoint 프레젠테이션 제작이 필요할 때 사용합니다. 슬라이드 구성, 디자인, 콘텐츠 작성을 자동화합니다. "PPT 만들어줘", "프레젠테이션 만들어줘" 요청에 활성화됩니다.' },
    { id: 'file-organizer', name: '파일 정리기', nameEn: 'file-organizer', category: 'skills', desc: '파일 시스템을 지능적으로 정리하고 구조화합니다. 파일명 변환, 분류, 중복 제거를 자동화합니다.', tags: ['유틸리티'], stars: 4.9, installs: 5900, prompt: '이 스킬은 파일 및 폴더 구조 정리가 필요할 때 사용합니다. 파일 분류, 이름 변환 규칙 적용, 중복 파일 제거를 지원합니다. "파일 정리해줘", "폴더 구조 만들어줘" 요청에 활성화됩니다.' },
    { id: 'mobile-design', name: '모바일 디자인', nameEn: 'mobile-design', category: 'skills', desc: '모바일 우선 디자인 원칙으로 iOS, Android 앱 UI를 구현합니다. 터치 인터페이스, 반응형 레이아웃을 포함합니다.', tags: ['모바일', '디자인'], stars: 4.9, installs: 5700, prompt: '이 스킬은 모바일 앱 UI 설계가 필요할 때 사용합니다. iOS, Android 가이드라인에 맞는 모바일 인터페이스를 디자인합니다. "모바일 UI 만들어줘", "앱 화면 디자인해줘" 요청에 활성화됩니다.' },
    { id: 'theme-factory', name: '테마 팩토리', nameEn: 'theme-factory', category: 'skills', desc: '애플리케이션 스타일링 및 테마 시스템 구축 도구 모음. 다크/라이트 모드, 커스텀 테마를 생성합니다.', tags: ['UI', '테마'], stars: 4.9, installs: 5500, prompt: '이 스킬은 애플리케이션 테마 및 스타일 시스템 구축이 필요할 때 사용합니다. CSS 변수, 다크모드, 커스텀 색상 팔레트를 설정합니다. "테마 만들어줘", "다크모드 추가해줘" 요청에 활성화됩니다.' },
    { id: 'excel-analysis', name: '엑셀 분석', nameEn: 'excel-analysis', category: 'skills', desc: 'Excel 스프레드시트를 분석하고 인사이트를 추출합니다. 데이터 시각화, 통계 분석, 보고서 생성을 지원합니다.', tags: ['데이터', '분석'], stars: 4.9, installs: 5300, prompt: '이 스킬은 Excel 데이터 분석 및 인사이트 도출이 필요할 때 사용합니다. 피벗 테이블, 차트 생성, 통계 분석을 자동화합니다. "엑셀 데이터 분석해줘", "스프레드시트 인사이트 찾아줘" 요청에 활성화됩니다.' },
    { id: 'react-best-practices', name: 'React 모범 사례 고급', nameEn: 'react-best-practices', category: 'skills', desc: 'React 개발의 최신 모범 사례, 코드 패턴, 성능 최적화 기법을 제공하는 심화 스킬입니다.', tags: ['React'], stars: 4.9, installs: 5100, prompt: '이 스킬은 React 심화 패턴 적용이 필요할 때 사용합니다. 고급 훅 패턴, 상태 관리, 렌더링 최적화를 지원합니다. "React 코드 최적화해줘", "React 패턴 개선해줘" 요청에 활성화됩니다.' },
    { id: 'ux-researcher-designer', name: 'UX 리서처 & 디자이너', nameEn: 'ux-researcher-designer', category: 'skills', desc: '사용자 리서치, 페르소나 개발, 사용성 테스트를 통한 사용자 중심 디자인 프로세스를 지원합니다.', tags: ['UX', '리서치'], stars: 4.9, installs: 4900, prompt: '이 스킬은 사용자 경험 조사 및 UX 설계가 필요할 때 사용합니다. 사용자 인터뷰, 페르소나 작성, 사용성 평가를 지원합니다. "UX 리서치해줘", "사용자 페르소나 만들어줘" 요청에 활성화됩니다.' },
    { id: 'senior-devops', name: '시니어 DevOps', nameEn: 'senior-devops', category: 'skills', desc: 'CI/CD 파이프라인, 컨테이너 오케스트레이션, 클라우드 인프라 관리를 위한 종합 DevOps 스킬입니다.', tags: ['DevOps', '인프라'], stars: 4.9, installs: 4700, prompt: '이 스킬은 DevOps 인프라 구축 및 자동화가 필요할 때 사용합니다. Docker, Kubernetes, CI/CD 파이프라인 설정을 지원합니다. "CI/CD 구축해줘", "Docker 설정해줘" 요청에 활성화됩니다.' },
    { id: 'content-creator', name: '콘텐츠 제작자', nameEn: 'content-creator', category: 'skills', desc: 'SEO 최적화된 블로그, 소셜 미디어, 마케팅 콘텐츠를 생성합니다. 다양한 형식과 톤으로 콘텐츠를 제작합니다.', tags: ['콘텐츠', '마케팅'], stars: 4.9, installs: 4500, prompt: '이 스킬은 마케팅 및 블로그 콘텐츠 작성이 필요할 때 사용합니다. SEO를 고려한 글쓰기, 소셜 미디어 포스트, 뉴스레터를 제작합니다. "블로그 글 써줘", "마케팅 콘텐츠 만들어줘" 요청에 활성화됩니다.' },
    { id: 'clean-code', name: '클린 코드', nameEn: 'clean-code', category: 'skills', desc: '실용적인 코딩 표준과 클린 코드 원칙을 적용합니다. 가독성, 유지보수성, 확장성을 향상시킵니다.', tags: ['개발', '품질'], stars: 4.9, installs: 4300, prompt: '이 스킬은 코드 품질 개선 및 리팩토링이 필요할 때 사용합니다. SOLID 원칙, 디자인 패턴, 코드 스멜 제거를 지원합니다. "코드 정리해줘", "리팩토링해줘" 요청에 활성화됩니다.' },
    { id: 'artifacts-builder', name: '아티팩트 빌더', nameEn: 'artifacts-builder', category: 'skills', desc: '인터랙티브 웹 컴포넌트, 시각화, 프로토타입을 생성하는 아티팩트 빌더 스킬 모음입니다.', tags: ['개발', '시각화'], stars: 4.9, installs: 4100, prompt: '이 스킬은 인터랙티브 데모나 시각화 아티팩트 제작이 필요할 때 사용합니다. React, D3, Chart.js를 활용한 인터랙티브 콘텐츠를 빠르게 생성합니다. "인터랙티브 데모 만들어줘", "시각화 아티팩트 만들어줘" 요청에 활성화됩니다.' },
    { id: 'content-research-writer', name: '콘텐츠 리서치 작성자', nameEn: 'content-research-writer', category: 'skills', desc: '심층 리서치 기반의 고품질 콘텐츠를 작성합니다. 학술 논문부터 비즈니스 보고서까지 다양한 형식을 지원합니다.', tags: ['콘텐츠', '리서치'], stars: 4.8, installs: 3900, prompt: '이 스킬은 철저한 조사를 바탕으로 한 전문 콘텐츠 작성이 필요할 때 사용합니다. 주제 리서치, 자료 정리, 구조화된 글쓰기를 지원합니다. "리서치 보고서 써줘", "조사 기반 글 작성해줘" 요청에 활성화됩니다.' },
    { id: 'pdf-anthropic', name: 'PDF Anthropic', nameEn: 'pdf-anthropic', category: 'skills', desc: 'Anthropic 스타일의 PDF 문서 처리 및 분석 스킬. PDF 내용을 이해하고 요약, 번역, 분석합니다.', tags: ['PDF'], stars: 4.8, installs: 3700, prompt: '이 스킬은 PDF 문서를 Anthropic 방식으로 처리할 때 사용합니다. 긴 PDF 문서 요약, 핵심 정보 추출, 번역을 지원합니다. "PDF 요약해줘", "PDF 내용 분석해줘" 요청에 활성화됩니다.' },
    { id: 'api-integration-specialist', name: 'API 통합 전문가', nameEn: 'api-integration-specialist', category: 'skills', desc: '외부 API 통합, RESTful API 설계, GraphQL 구현을 위한 전문 API 통합 스킬입니다.', tags: ['API', '개발'], stars: 4.8, installs: 3500, prompt: '이 스킬은 외부 API 통합 및 API 개발이 필요할 때 사용합니다. REST, GraphQL, WebSocket API 설계 및 구현을 지원합니다. "API 연동해줘", "REST API 만들어줘" 요청에 활성화됩니다.' },
    { id: 'senior-qa', name: '시니어 QA', nameEn: 'senior-qa', category: 'skills', desc: '종합 QA 및 테스팅 스킬. 테스트 전략 수립, 자동화 테스트, 성능 테스트를 포함합니다.', tags: ['테스트', 'QA'], stars: 4.8, installs: 3300, prompt: '이 스킬은 소프트웨어 품질 보증 및 테스트 전략이 필요할 때 사용합니다. 테스트 계획, 자동화 테스트 구현, 버그 리포트 작성을 지원합니다. "QA 테스트 계획 만들어줘", "테스트 자동화 구현해줘" 요청에 활성화됩니다.' },
    { id: 'senior-data-engineer', name: '시니어 데이터 엔지니어', nameEn: 'senior-data-engineer', category: 'skills', desc: '데이터 파이프라인, ETL 프로세스, 데이터 웨어하우스 설계를 위한 종합 데이터 엔지니어링 스킬입니다.', tags: ['데이터', '엔지니어링'], stars: 4.8, installs: 3100, prompt: '이 스킬은 데이터 파이프라인 구축 및 데이터 인프라 설계가 필요할 때 사용합니다. ETL/ELT 구현, 데이터 모델링, 스트리밍 처리를 지원합니다. "데이터 파이프라인 만들어줘", "ETL 프로세스 설계해줘" 요청에 활성화됩니다.' },
    { id: 'copywriting', name: '카피라이팅', nameEn: 'copywriting', category: 'skills', desc: '설득력 있는 마케팅 카피, 광고 문구, 세일즈 페이지를 작성합니다. 전환율을 높이는 카피라이팅 기법을 활용합니다.', tags: ['마케팅', '카피'], stars: 4.8, installs: 2900, prompt: '이 스킬은 마케팅 카피 및 광고 문구 작성이 필요할 때 사용합니다. 고객 심리를 자극하는 설득력 있는 카피를 생성합니다. "광고 카피 써줘", "판매 페이지 문구 만들어줘" 요청에 활성화됩니다.' },
    { id: 'senior-data-scientist', name: '시니어 데이터 과학자', nameEn: 'senior-data-scientist', category: 'skills', desc: '머신러닝 모델 개발, 통계 분석, 데이터 시각화를 위한 종합 데이터 과학 스킬입니다.', tags: ['데이터', 'ML'], stars: 4.8, installs: 2700, prompt: '이 스킬은 데이터 분석 및 머신러닝 모델 개발이 필요할 때 사용합니다. Python, scikit-learn, TensorFlow를 활용한 모델링을 지원합니다. "ML 모델 만들어줘", "데이터 분석해줘" 요청에 활성화됩니다.' },
    { id: 'agent-development', name: '에이전트 개발', nameEn: 'agent-development', category: 'skills', desc: 'Claude Code 에이전트 개발 스킬. 에이전트 설계, 도구 통합, 워크플로우 자동화를 지원합니다.', tags: ['에이전트', 'AI'], stars: 4.8, installs: 2500, prompt: '이 스킬은 AI 에이전트 개발 및 구현이 필요할 때 사용합니다. 에이전트 프롬프트 설계, 도구 연동, 자동화 워크플로우를 구축합니다. "에이전트 만들어줘", "AI 에이전트 개발해줘" 요청에 활성화됩니다.' },
    { id: '3d-web-experience', name: '3D 웹 경험', nameEn: '3d-web-experience', category: 'skills', desc: 'Three.js, WebGL을 활용한 몰입감 있는 3D 웹 경험을 구현합니다. 인터랙티브 3D 시각화를 제작합니다.', tags: ['3D', '웹'], stars: 4.8, installs: 2300, prompt: '이 스킬은 Three.js, WebGL 기반의 3D 웹 콘텐츠 제작이 필요할 때 사용합니다. 3D 모델 렌더링, 애니메이션, 인터랙티브 씬을 구현합니다. "3D 웹 경험 만들어줘", "Three.js 씬 만들어줘" 요청에 활성화됩니다.' },
    { id: 'email-composer', name: '이메일 작성기', nameEn: 'email-composer', category: 'skills', desc: '전문적인 비즈니스 이메일을 초안 작성합니다. 다양한 상황에 맞는 이메일 템플릿과 문구를 제공합니다.', tags: ['이메일', '커뮤니케이션'], stars: 4.8, installs: 2100, prompt: '이 스킬은 비즈니스 이메일 작성이 필요할 때 사용합니다. 제안서, 문의, 팔로업 등 다양한 상황의 이메일을 전문적으로 작성합니다. "이메일 써줘", "비즈니스 메일 작성해줘" 요청에 활성화됩니다.' },
    { id: 'using-superpowers', name: '슈퍼파워 사용법', nameEn: 'using-superpowers', category: 'skills', desc: 'Claude Code 스킬 및 에이전트 활용 가이드. 효과적인 슈퍼파워 사용법과 워크플로우를 안내합니다.', tags: ['가이드'], stars: 4.8, installs: 1900, prompt: '이 스킬은 Claude Code의 스킬 시스템 사용법을 배울 때 사용합니다. 다양한 스킬과 에이전트를 효과적으로 활용하는 방법을 안내합니다. "스킬 사용법 알려줘", "슈퍼파워 어떻게 써?" 요청에 활성화됩니다.' },
    { id: 'systematic-debugging', name: '체계적 디버깅', nameEn: 'systematic-debugging', category: 'skills', desc: '체계적인 방법론으로 복잡한 버그를 추적하고 해결합니다. 로그 분석, 스택 트레이스 해석, 근본 원인 분석을 지원합니다.', tags: ['디버깅', '개발'], stars: 4.8, installs: 1700, prompt: '이 스킬은 복잡한 버그를 체계적으로 진단할 때 사용합니다. 에러 로그 분석, 재현 단계 파악, 해결책 제시를 순서대로 지원합니다. "버그 찾아줘", "에러 디버깅해줘" 요청에 활성화됩니다.' },
    { id: 'writing-plans', name: '계획 수립', nameEn: 'writing-plans', category: 'skills', desc: '프로젝트 계획, 기술 명세서, 구현 로드맵을 작성합니다. 명확한 계획 문서로 개발 방향을 정립합니다.', tags: ['기획', '문서'], stars: 4.8, installs: 1500, prompt: '이 스킬은 프로젝트 계획서 및 기술 문서 작성이 필요할 때 사용합니다. 단계별 구현 계획, 기술 명세, 마일스톤을 체계적으로 정리합니다. "구현 계획 만들어줘", "프로젝트 로드맵 작성해줘" 요청에 활성화됩니다.' },
    { id: 'tailwind-patterns', name: 'Tailwind 패턴', nameEn: 'tailwind-patterns', category: 'skills', desc: 'Tailwind CSS 모범 사례, 고급 패턴, 커스텀 컴포넌트 설계를 위한 스킬입니다.', tags: ['CSS', 'Tailwind'], stars: 4.8, installs: 1400, prompt: '이 스킬은 Tailwind CSS를 활용한 스타일링이 필요할 때 사용합니다. 유틸리티 클래스 조합, 반응형 디자인, 커스텀 테마를 설정합니다. "Tailwind로 스타일해줘", "Tailwind 패턴 적용해줘" 요청에 활성화됩니다.' },
    { id: 'web-performance-optimization', name: '웹 성능 최적화', nameEn: 'web-performance-optimization', category: 'skills', desc: '웹 성능 최적화 스킬. Core Web Vitals 개선, 번들 크기 축소, 로딩 속도 향상을 지원합니다.', tags: ['성능', '웹'], stars: 4.8, installs: 1300, prompt: '이 스킬은 웹사이트 성능 개선이 필요할 때 사용합니다. Lighthouse 감사, 이미지 최적화, 코드 스플리팅, 캐싱 전략을 지원합니다. "웹 성능 최적화해줘", "로딩 속도 개선해줘" 요청에 활성화됩니다.' },
    { id: 'lead-research-assistant', name: '리드 리서치 어시스턴트', nameEn: 'lead-research-assistant', category: 'skills', desc: '잠재 고객 발굴, 리드 정보 조사, 영업 인텔리전스 수집을 위한 리서치 스킬입니다.', tags: ['영업', '리서치'], stars: 4.8, installs: 1200, prompt: '이 스킬은 비즈니스 리드 및 잠재 고객 조사가 필요할 때 사용합니다. 회사 정보, 연락처, 시장 정보를 체계적으로 수집합니다. "리드 조사해줘", "잠재 고객 정보 찾아줘" 요청에 활성화됩니다.' },
    { id: 'pdf-processing', name: 'PDF 처리', nameEn: 'pdf-processing', category: 'skills', desc: 'PDF 파일 처리 및 분석 스킬. 텍스트 추출, 내용 요약, 데이터 파싱을 지원합니다.', tags: ['PDF'], stars: 4.8, installs: 1100, prompt: '이 스킬은 PDF 파일에서 정보를 추출하거나 처리할 때 사용합니다. 대용량 PDF 문서 분석, 핵심 정보 추출, 번역을 지원합니다. "PDF 처리해줘", "PDF에서 정보 뽑아줘" 요청에 활성화됩니다.' },
    { id: 'algorithmic-art', name: '알고리즘 아트', nameEn: 'algorithmic-art', category: 'skills', desc: '알고리즘과 수학을 활용한 생성 예술 작품을 제작합니다. 프랙탈, 파티클 시스템, 제너러티브 디자인을 구현합니다.', tags: ['아트', '알고리즘'], stars: 4.8, installs: 1000, prompt: '이 스킬은 알고리즘 기반의 예술적 시각화 제작이 필요할 때 사용합니다. 프랙탈 패턴, 파티클 효과, 생성적 디자인을 코드로 구현합니다. "생성 예술 만들어줘", "알고리즘 아트 만들어줘" 요청에 활성화됩니다.' },
    { id: 'supabase-postgres-best-practices', name: 'Supabase Postgres 모범 사례', nameEn: 'supabase-postgres-best-practices', category: 'skills', desc: 'Supabase와 PostgreSQL 데이터베이스 최적화, Row Level Security, 스키마 설계 모범 사례를 제공합니다.', tags: ['Supabase', '데이터베이스'], stars: 4.8, installs: 950, prompt: '이 스킬은 Supabase 및 PostgreSQL 데이터베이스 최적화가 필요할 때 사용합니다. RLS 정책, 인덱스 최적화, 스키마 설계를 지원합니다. "Supabase 설정해줘", "PostgreSQL 최적화해줘" 요청에 활성화됩니다.' },
    { id: 'docker-expert', name: 'Docker 전문가', nameEn: 'docker-expert', category: 'skills', desc: 'Docker 컨테이너화, Docker Compose, 멀티 스테이지 빌드, 이미지 최적화를 위한 전문 스킬입니다.', tags: ['Docker', 'DevOps'], stars: 4.8, installs: 900, prompt: '이 스킬은 Docker 컨테이너 환경 구성이 필요할 때 사용합니다. Dockerfile 작성, docker-compose 설정, 이미지 최적화를 지원합니다. "Docker 설정해줘", "컨테이너화해줘" 요청에 활성화됩니다.' },
    { id: 'product-manager-toolkit', name: '제품 관리자 도구 모음', nameEn: 'product-manager-toolkit', category: 'skills', desc: '제품 로드맵, 사용자 스토리, PRD 작성, 우선순위 프레임워크를 위한 제품 관리 도구 모음입니다.', tags: ['제품관리'], stars: 4.8, installs: 850, prompt: '이 스킬은 제품 기획 및 관리 문서 작성이 필요할 때 사용합니다. PRD, 사용자 스토리, 로드맵, 우선순위 결정을 지원합니다. "PRD 만들어줘", "제품 로드맵 만들어줘" 요청에 활성화됩니다.' },
    { id: 'marketing-strategy-pmm', name: '마케팅 전략 PMM', nameEn: 'marketing-strategy-pmm', category: 'skills', desc: '제품 마케팅 전략, 포지셔닝, 경쟁 분석, GTM 전략 수립을 위한 PMM 스킬입니다.', tags: ['마케팅', '전략'], stars: 4.8, installs: 800, prompt: '이 스킬은 제품 마케팅 전략 수립이 필요할 때 사용합니다. 시장 분석, 고객 세그먼트, GTM 전략을 체계적으로 개발합니다. "마케팅 전략 만들어줘", "GTM 계획 수립해줘" 요청에 활성화됩니다.' },
    { id: 'ceo-advisor', name: 'CEO 어드바이저', nameEn: 'ceo-advisor', category: 'skills', desc: 'CEO 관점의 경영 전략, 의사결정, 리더십 조언을 제공하는 임원급 어드바이저 스킬입니다.', tags: ['경영', '리더십'], stars: 4.8, installs: 750, prompt: '이 스킬은 경영 전략 및 의사결정 자문이 필요할 때 사용합니다. 비즈니스 모델, 성장 전략, 리더십 이슈를 CEO 관점에서 분석합니다. "경영 전략 조언해줘", "비즈니스 결정 도와줘" 요청에 활성화됩니다.' },
    { id: 'nextjs-best-practices', name: 'Next.js 모범 사례', nameEn: 'nextjs-best-practices', category: 'skills', desc: 'Next.js App Router, 서버 컴포넌트, 성능 최적화를 위한 최신 모범 사례와 패턴을 제공합니다.', tags: ['Next.js', '개발'], stars: 4.8, installs: 700, prompt: '이 스킬은 Next.js 프로젝트 개발 및 최적화가 필요할 때 사용합니다. App Router 패턴, 서버 액션, 이미지 최적화를 지원합니다. "Next.js 최적화해줘", "App Router 패턴 적용해줘" 요청에 활성화됩니다.' },
    { id: 'workflow-automation', name: '워크플로우 자동화', nameEn: 'workflow-automation', category: 'skills', desc: '반복적인 개발 워크플로우를 자동화합니다. 스크립트, 빌드 도구, CI/CD를 통한 생산성 향상을 지원합니다.', tags: ['자동화', '생산성'], stars: 4.8, installs: 650, prompt: '이 스킬은 반복 작업 자동화 및 워크플로우 개선이 필요할 때 사용합니다. 스크립트 작성, 빌드 자동화, 작업 스케줄링을 지원합니다. "자동화 스크립트 만들어줘", "워크플로우 자동화해줘" 요청에 활성화됩니다.' },
    { id: 'vulnerability-scanner', name: '취약점 스캐너', nameEn: 'vulnerability-scanner', category: 'skills', desc: '코드 및 시스템의 보안 취약점을 자동으로 스캔합니다. OWASP 취약점, 의존성 보안 문제를 탐지합니다.', tags: ['보안', '스캔'], stars: 4.8, installs: 600, prompt: '이 스킬은 보안 취약점 자동 검사가 필요할 때 사용합니다. 코드 취약점, 의존성 CVE, 설정 오류를 스캔하고 보고합니다. "취약점 스캔해줘", "보안 검사해줘" 요청에 활성화됩니다.' },
    { id: 'product-strategist', name: '제품 전략가', nameEn: 'product-strategist', category: 'skills', desc: '제품 비전, 전략 프레임워크, 시장 기회 분석을 위한 전략적 제품 사고 스킬입니다.', tags: ['전략', '제품'], stars: 4.8, installs: 570, prompt: '이 스킬은 제품 전략 수립 및 시장 분석이 필요할 때 사용합니다. 경쟁 분석, 제품 포지셔닝, 성장 기회를 전략적으로 평가합니다. "제품 전략 수립해줘", "시장 기회 분석해줘" 요청에 활성화됩니다.' },
    { id: 'brand-guidelines', name: '브랜드 가이드라인', nameEn: 'brand-guidelines', category: 'skills', desc: '브랜드 아이덴티티, 비주얼 가이드라인, 로고 사용 규정, 톤 앤 보이스를 정의하는 브랜딩 스킬입니다.', tags: ['브랜딩', '디자인'], stars: 4.8, installs: 540, prompt: '이 스킬은 브랜드 가이드라인 제작 및 브랜드 아이덴티티 구축이 필요할 때 사용합니다. 색상, 폰트, 로고 사용 규칙을 정의합니다. "브랜드 가이드라인 만들어줘", "브랜드 아이덴티티 구축해줘" 요청에 활성화됩니다.' },
    { id: 'api-security-best-practices', name: 'API 보안 모범 사례', nameEn: 'api-security-best-practices', category: 'skills', desc: 'API 보안 강화를 위한 인증, 인가, 입력 검증, 속도 제한 등의 모범 사례를 제공합니다.', tags: ['API', '보안'], stars: 4.8, installs: 510, prompt: '이 스킬은 API 보안 강화가 필요할 때 사용합니다. OAuth, JWT, API 키 관리, 속도 제한 구현을 지원합니다. "API 보안 강화해줘", "API 인증 구현해줘" 요청에 활성화됩니다.' },
    { id: 'software-architecture', name: '소프트웨어 아키텍처', nameEn: 'software-architecture', category: 'skills', desc: '소프트웨어 설계 원칙, 아키텍처 패턴, 시스템 설계 문서 작성을 위한 아키텍처 스킬입니다.', tags: ['아키텍처'], stars: 4.8, installs: 480, prompt: '이 스킬은 소프트웨어 아키텍처 설계 및 문서화가 필요할 때 사용합니다. 계층 구조, 디자인 패턴, 모듈 의존성을 체계적으로 설계합니다. "소프트웨어 아키텍처 설계해줘", "시스템 설계 문서 만들어줘" 요청에 활성화됩니다.' },
    { id: 'social-content', name: '소셜 콘텐츠', nameEn: 'social-content', category: 'skills', desc: 'SNS 플랫폼별 최적화된 소셜 미디어 콘텐츠를 생성합니다. Instagram, Twitter, LinkedIn 등을 지원합니다.', tags: ['소셜미디어', '콘텐츠'], stars: 4.8, installs: 450, prompt: '이 스킬은 소셜 미디어 포스트 제작이 필요할 때 사용합니다. 각 플랫폼 특성에 맞는 콘텐츠 형식과 해시태그를 제안합니다. "인스타그램 포스트 만들어줘", "트위터 글 써줘" 요청에 활성화됩니다.' },
    { id: 'agents-langchain', name: 'LangChain 에이전트', nameEn: 'agents-langchain', category: 'skills', desc: 'LangChain 프레임워크를 활용한 AI 에이전트 개발. 도구 통합, 체인 구성, 메모리 관리를 지원합니다.', tags: ['LangChain', 'AI'], stars: 4.8, installs: 420, prompt: '이 스킬은 LangChain 기반 AI 에이전트 개발이 필요할 때 사용합니다. 체인, 에이전트, 도구 구성을 지원합니다. "LangChain 에이전트 만들어줘", "AI 체인 구성해줘" 요청에 활성화됩니다.' },
    { id: 'seo-audit', name: 'SEO 감사', nameEn: 'seo-audit', category: 'skills', desc: '웹사이트 SEO 감사를 수행합니다. 기술적 SEO, 온페이지 최적화, 백링크 분석을 포함한 종합 SEO 리포트를 생성합니다.', tags: ['SEO'], stars: 4.8, installs: 390, prompt: '이 스킬은 웹사이트 SEO 현황 감사가 필요할 때 사용합니다. 기술적 오류, 콘텐츠 갭, 링크 구조를 분석하고 개선안을 제시합니다. "SEO 감사해줘", "검색 최적화 현황 분석해줘" 요청에 활성화됩니다.' },
    { id: 'video-downloader', name: '비디오 다운로더', nameEn: 'video-downloader', category: 'skills', desc: '웹에서 비디오 다운로드 및 변환을 위한 스킬. yt-dlp 등 도구를 활용한 비디오 처리를 지원합니다.', tags: ['비디오', '유틸리티'], stars: 4.8, installs: 360, prompt: '이 스킬은 온라인 비디오 다운로드 및 변환이 필요할 때 사용합니다. YouTube, Vimeo 등 플랫폼에서 비디오를 다운로드하는 방법을 안내합니다. "비디오 다운로드해줘", "동영상 변환해줘" 요청에 활성화됩니다.' },
    { id: 'mermaid-diagrams', name: 'Mermaid 다이어그램', nameEn: 'mermaid-diagrams', category: 'skills', desc: 'Mermaid.js를 활용한 플로우차트, 시퀀스 다이어그램, ER 다이어그램, 간트 차트를 생성합니다.', tags: ['다이어그램', '문서'], stars: 4.8, installs: 330, prompt: '이 스킬은 코드로 다이어그램 생성이 필요할 때 사용합니다. Mermaid 문법으로 플로우차트, 시퀀스도, ERD를 자동 생성합니다. "플로우차트 만들어줘", "Mermaid 다이어그램 그려줘" 요청에 활성화됩니다.' },
    { id: 'web-design-guidelines', name: '웹 디자인 가이드라인', nameEn: 'web-design-guidelines', category: 'skills', desc: '현대적인 웹 디자인 원칙, 타이포그래피, 색상 이론, 레이아웃 가이드라인을 제공합니다.', tags: ['디자인', '웹'], stars: 4.8, installs: 310, prompt: '이 스킬은 웹 디자인 표준 및 가이드라인 적용이 필요할 때 사용합니다. 접근성, 반응형 디자인, 시각적 계층 구조를 설계합니다. "웹 디자인 가이드라인 만들어줘", "디자인 표준 적용해줘" 요청에 활성화됩니다.' },
    { id: 'python-patterns', name: 'Python 패턴', nameEn: 'python-patterns', category: 'skills', desc: 'Python 개발 모범 사례, 디자인 패턴, 코드 구조화, 비동기 프로그래밍을 위한 스킬입니다.', tags: ['Python', '개발'], stars: 4.8, installs: 290, prompt: '이 스킬은 Python 코드 품질 향상 및 패턴 적용이 필요할 때 사용합니다. Pythonic 코드 작성, 타입 힌트, 데코레이터 패턴을 지원합니다. "Python 코드 개선해줘", "Python 패턴 적용해줘" 요청에 활성화됩니다.' },
    { id: 'marketing-psychology', name: '마케팅 심리학', nameEn: 'marketing-psychology', category: 'skills', desc: '소비자 심리와 행동 경제학을 활용한 마케팅 전략을 제공합니다. 전환율 최적화에 심리적 원칙을 적용합니다.', tags: ['마케팅', '심리'], stars: 4.8, installs: 270, prompt: '이 스킬은 심리학 기반 마케팅 전략 수립이 필요할 때 사용합니다. 희소성, 사회적 증거, 손실 회피 원칙을 마케팅에 적용합니다. "마케팅 심리 전략 써줘", "전환율 올리는 방법 알려줘" 요청에 활성화됩니다.' },
    { id: 'changelog-generator', name: '변경 로그 생성기', nameEn: 'changelog-generator', category: 'skills', desc: 'Keep a Changelog 형식으로 프로젝트 변경 로그를 자동 생성합니다. Git 커밋 기반으로 릴리즈 노트를 작성합니다.', tags: ['문서', 'git'], stars: 4.8, installs: 250, prompt: '이 스킬은 프로젝트 변경 이력 문서화가 필요할 때 사용합니다. Git 커밋을 분석해 버전별 변경 로그를 자동으로 생성합니다. "변경 로그 만들어줘", "릴리즈 노트 작성해줘" 요청에 활성화됩니다.' },
    { id: 'cto-advisor', name: 'CTO 어드바이저', nameEn: 'cto-advisor', category: 'skills', desc: 'CTO 관점의 기술 전략, 팀 구성, 기술 부채 관리, 아키텍처 결정을 위한 기술 리더십 어드바이저 스킬입니다.', tags: ['CTO', '기술리더십'], stars: 4.8, installs: 230, prompt: '이 스킬은 기술 리더십 및 CTO급 전략적 결정이 필요할 때 사용합니다. 기술 스택 선택, 팀 확장, 기술 부채 해소 전략을 제시합니다. "기술 전략 조언해줘", "CTO 관점 분석해줘" 요청에 활성화됩니다.' },
    { id: 'marketing-ideas', name: '마케팅 아이디어', nameEn: 'marketing-ideas', category: 'skills', desc: '창의적인 마케팅 캠페인 아이디어, 성장 전략, 채널별 마케팅 전술을 생성합니다.', tags: ['마케팅', '창의'], stars: 4.8, installs: 210, prompt: '이 스킬은 마케팅 아이디어 발굴이 필요할 때 사용합니다. 캠페인 콘셉트, 그로스 해킹 전략, 채널 전술을 창의적으로 제안합니다. "마케팅 아이디어 줘", "캠페인 기획 도와줘" 요청에 활성화됩니다.' },
    { id: 'executing-marketing-campaigns', name: '마케팅 캠페인 실행', nameEn: 'executing-marketing-campaigns', category: 'skills', desc: '마케팅 캠페인 기획부터 실행까지 전 과정을 지원합니다. 콘텐츠 제작, 채널 운영, 성과 측정을 포함합니다.', tags: ['마케팅', '실행'], stars: 4.8, installs: 190, prompt: '이 스킬은 마케팅 캠페인 실행 계획 수립이 필요할 때 사용합니다. 채널 선택, 일정 관리, KPI 설정, 성과 추적 방법을 안내합니다. "마케팅 캠페인 실행 계획 만들어줘", "캠페인 운영 방법 알려줘" 요청에 활성화됩니다.' },
    { id: 'image-enhancer', name: '이미지 인핸서', nameEn: 'image-enhancer', category: 'skills', desc: '이미지 품질 향상, 최적화, 형식 변환을 수행합니다. 웹용 이미지 최적화와 메타데이터 처리를 지원합니다.', tags: ['이미지', '최적화'], stars: 4.7, installs: 170, prompt: '이 스킬은 이미지 처리 및 최적화가 필요할 때 사용합니다. 이미지 압축, 형식 변환, 크기 조정, 메타데이터 편집을 지원합니다. "이미지 최적화해줘", "사진 변환해줘" 요청에 활성화됩니다.' },
    { id: 'nestjs-expert', name: 'NestJS 전문가', nameEn: 'nestjs-expert', category: 'skills', desc: 'NestJS 프레임워크를 활용한 엔터프라이즈급 Node.js 백엔드 개발을 위한 전문 스킬입니다.', tags: ['NestJS', '백엔드'], stars: 4.7, installs: 155, prompt: '이 스킬은 NestJS 기반 서버 애플리케이션 개발이 필요할 때 사용합니다. 모듈 구조, 의존성 주입, 데코레이터 패턴을 활용한 개발을 지원합니다. "NestJS 모듈 만들어줘", "NestJS API 구현해줘" 요청에 활성화됩니다.' },
    { id: 'pdf', name: 'PDF 스킬', nameEn: 'pdf', category: 'skills', desc: 'PDF 관련 모든 작업을 처리합니다. 생성, 편집, 분석, 변환, 병합, 분할을 지원합니다.', tags: ['PDF'], stars: 4.7, installs: 140, prompt: '이 스킬은 PDF 파일 관련 모든 작업에 사용합니다. PDF 생성, 편집, 페이지 조작, 텍스트 추출을 지원합니다. "PDF 만들어줘", "PDF 편집해줘" 요청에 활성화됩니다.' },
    { id: 'scroll-experience', name: '스크롤 경험', nameEn: 'scroll-experience', category: 'skills', desc: '스크롤 기반 인터랙티브 웹 경험을 제작합니다. Parallax, 스크롤 트리거 애니메이션, 스토리텔링을 구현합니다.', tags: ['애니메이션', '웹'], stars: 4.7, installs: 130, prompt: '이 스킬은 스크롤 기반 인터랙티브 웹 경험 제작이 필요할 때 사용합니다. 패럴랙스 효과, 스크롤 애니메이션, 진행 인디케이터를 구현합니다. "스크롤 애니메이션 만들어줘", "인터랙티브 스크롤 효과 구현해줘" 요청에 활성화됩니다.' },
    { id: 'competitive-ads-extractor', name: '경쟁사 광고 분석기', nameEn: 'competitive-ads-extractor', category: 'skills', desc: '경쟁사 광고 전략을 분석하고 인사이트를 추출합니다. 광고 카피, 타겟팅, 크리에이티브 전략을 파악합니다.', tags: ['경쟁분석', '광고'], stars: 4.7, installs: 120, prompt: '이 스킬은 경쟁사 광고 전략 분석이 필요할 때 사용합니다. 광고 메시지, 타겟 오디언스, 크리에이티브 패턴을 체계적으로 분석합니다. "경쟁사 광고 분석해줘", "광고 전략 파악해줘" 요청에 활성화됩니다.' },
    { id: 'error-resolver', name: '오류 해결사', nameEn: 'error-resolver', category: 'skills', desc: '에러 메시지를 분석하고 체계적으로 해결책을 제시합니다. 스택 트레이스 분석, 원인 파악, 수정 방법을 안내합니다.', tags: ['디버깅', '오류'], stars: 4.7, installs: 110, prompt: '이 스킬은 에러 해결이 필요할 때 사용합니다. 에러 메시지 분석, 근본 원인 파악, 단계별 해결 방법을 제시합니다. "에러 해결해줘", "이 오류 고쳐줘" 요청에 활성화됩니다.' },
    { id: 'google-analytics', name: 'Google 애널리틱스', nameEn: 'google-analytics', category: 'skills', desc: 'Google Analytics 설정, 이벤트 트래킹, 전환 추적, 데이터 분석을 위한 GA 전문 스킬입니다.', tags: ['애널리틱스', '데이터'], stars: 4.7, installs: 100, prompt: '이 스킬은 Google Analytics 설정 및 데이터 분석이 필요할 때 사용합니다. GA4 설정, 커스텀 이벤트, 목표 설정, 보고서 분석을 지원합니다. "GA 설정해줘", "구글 애널리틱스 분석해줘" 요청에 활성화됩니다.' },
    { id: 'agent-memory-systems', name: '에이전트 메모리 시스템', nameEn: 'agent-memory-systems', category: 'skills', desc: 'AI 에이전트를 위한 장기 메모리, 컨텍스트 관리, 지식 저장 시스템 구축 스킬입니다.', tags: ['AI', '메모리'], stars: 4.7, installs: 90, prompt: '이 스킬은 AI 에이전트 메모리 시스템 구현이 필요할 때 사용합니다. 벡터 DB, 그래프 메모리, 컨텍스트 윈도우 관리를 설계합니다. "에이전트 메모리 구현해줘", "AI 컨텍스트 관리 설계해줘" 요청에 활성화됩니다.' },
    { id: 'claude-code-guide', name: 'Claude Code 가이드', nameEn: 'claude-code-guide', category: 'skills', desc: 'Claude Code 사용법 마스터 가이드. 기능 활용, 워크플로우 최적화, 팁과 트릭을 포함합니다.', tags: ['가이드', 'Claude'], stars: 4.7, installs: 80, prompt: '이 스킬은 Claude Code 기능을 효과적으로 활용하는 방법을 안내합니다. 슬래시 커맨드, 에이전트 활용, 프로젝트 설정을 단계별로 설명합니다. "Claude Code 사용법 알려줘", "Claude 기능 설명해줘" 요청에 활성화됩니다.' },
    { id: 'devops-iac-engineer', name: 'DevOps IaC 엔지니어', nameEn: 'devops-iac-engineer', category: 'skills', desc: 'Terraform, Pulumi, CloudFormation을 활용한 Infrastructure as Code 구현 및 클라우드 인프라 자동화 스킬입니다.', tags: ['IaC', 'DevOps'], stars: 4.7, installs: 70, prompt: '이 스킬은 Infrastructure as Code 구현이 필요할 때 사용합니다. Terraform, Pulumi를 활용한 클라우드 리소스 자동화를 지원합니다. "Terraform 코드 만들어줘", "IaC 구현해줘" 요청에 활성화됩니다.' },
    { id: 'context7-auto-research', name: 'Context7 자동 리서치', nameEn: 'context7-auto-research', category: 'skills', desc: 'Context7 MCP를 활용한 자동 기술 문서 조회 및 리서치. 라이브러리 최신 문서를 자동으로 가져옵니다.', tags: ['리서치', 'Context7'], stars: 4.7, installs: 60, prompt: '이 스킬은 라이브러리 및 프레임워크 최신 문서 조회가 필요할 때 사용합니다. Context7을 통해 정확한 API 문서와 예제 코드를 자동으로 가져옵니다. "최신 문서 찾아줘", "라이브러리 사용법 조회해줘" 요청에 활성화됩니다.' },
    { id: 'create-plan', name: '계획 생성', nameEn: 'create-plan', category: 'skills', desc: '간결하고 실행 가능한 계획을 생성합니다. 복잡한 작업을 명확한 단계와 우선순위로 분해합니다.', tags: ['기획', '계획'], stars: 4.7, installs: 50, prompt: '이 스킬은 작업 계획 수립이 필요할 때 사용합니다. 큰 목표를 실행 가능한 단계로 분해하고 우선순위를 설정합니다. "계획 만들어줘", "작업 단계 분해해줘" 요청에 활성화됩니다.' },
    { id: 'test-driven-development', name: '테스트 주도 개발', nameEn: 'test-driven-development', category: 'skills', desc: 'TDD 방법론을 적용한 개발 가이드. Red-Green-Refactor 사이클로 품질 높은 코드를 작성합니다.', tags: ['TDD', '테스트'], stars: 4.7, installs: 45, prompt: '이 스킬은 테스트 주도 개발 방식으로 코드를 작성할 때 사용합니다. 테스트 먼저 작성 후 구현하는 TDD 사이클을 단계별로 안내합니다. "TDD로 개발해줘", "테스트 먼저 만들어줘" 요청에 활성화됩니다.' },
    { id: 'security-compliance', name: '보안 컴플라이언스', nameEn: 'security-compliance', category: 'skills', desc: 'SOC 2, GDPR, ISO 27001 등 보안 컴플라이언스 요건 충족을 위한 가이드라인과 체크리스트를 제공합니다.', tags: ['보안', '컴플라이언스'], stars: 4.7, installs: 40, prompt: '이 스킬은 보안 규정 준수 및 컴플라이언스 확인이 필요할 때 사용합니다. GDPR, SOC 2, ISO 27001 요건을 체크하고 개선안을 제시합니다. "보안 컴플라이언스 확인해줘", "GDPR 준수 여부 검토해줘" 요청에 활성화됩니다.' },
    { id: 'marketing-demand-acquisition', name: '마케팅 수요 확보', nameEn: 'marketing-demand-acquisition', category: 'skills', desc: '수요 창출 마케팅 전략, 리드 생성, 고객 획득 채널 최적화를 위한 스킬입니다.', tags: ['마케팅', '수요창출'], stars: 4.7, installs: 35, prompt: '이 스킬은 신규 고객 획득 및 수요 창출 전략이 필요할 때 사용합니다. 인바운드 마케팅, 콘텐츠 퍼널, 광고 채널 최적화를 지원합니다. "고객 획득 전략 만들어줘", "수요 창출 마케팅 기획해줘" 요청에 활성화됩니다.' },
    { id: 'generate-image', name: '이미지 생성', nameEn: 'generate-image', category: 'skills', desc: 'AI 이미지 생성 및 편집 스킬. 프롬프트 최적화, 스타일 설정, 이미지 후처리를 지원합니다.', tags: ['이미지', 'AI'], stars: 4.7, installs: 30, prompt: '이 스킬은 AI를 활용한 이미지 생성 및 편집이 필요할 때 사용합니다. 효과적인 이미지 생성 프롬프트 작성, 스타일 지정, 결과물 개선을 지원합니다. "이미지 생성해줘", "AI로 그림 만들어줘" 요청에 활성화됩니다.' },
    { id: 'ai-agents-architect', name: 'AI 에이전트 아키텍트', nameEn: 'ai-agents-architect', category: 'skills', desc: '복잡한 AI 에이전트 시스템 설계 및 구현. 멀티 에이전트 오케스트레이션, 도구 통합을 전문으로 합니다.', tags: ['AI', '에이전트'], stars: 4.7, installs: 25, prompt: '이 스킬은 AI 에이전트 시스템 아키텍처 설계가 필요할 때 사용합니다. 에이전트 역할 분담, 메시지 흐름, 도구 통합 구조를 설계합니다. "AI 에이전트 시스템 설계해줘", "멀티 에이전트 아키텍처 만들어줘" 요청에 활성화됩니다.' },
    { id: 'find-bugs', name: '버그 탐지기', nameEn: 'find-bugs', category: 'skills', desc: '코드에서 버그, 보안 취약점, 성능 문제를 체계적으로 찾아냅니다. 정적 분석과 동적 검사를 지원합니다.', tags: ['디버깅', '버그'], stars: 4.7, installs: 20, prompt: '이 스킬은 코드 버그 발견 및 분석이 필요할 때 사용합니다. 논리 오류, 메모리 누수, 보안 취약점을 체계적으로 탐지합니다. "버그 찾아줘", "코드 문제 파악해줘" 요청에 활성화됩니다.' },
    { id: 'senior-ml-engineer', name: '시니어 ML 엔지니어', nameEn: 'senior-ml-engineer', category: 'skills', desc: '프로덕션 머신러닝 시스템 개발, 모델 훈련 파이프라인, MLOps를 위한 종합 ML 엔지니어링 스킬입니다.', tags: ['ML', '엔지니어링'], stars: 4.7, installs: 15, prompt: '이 스킬은 프로덕션 ML 시스템 구축이 필요할 때 사용합니다. 모델 학습, 서빙, 모니터링, MLOps 파이프라인을 지원합니다. "ML 파이프라인 만들어줘", "모델 배포 구현해줘" 요청에 활성화됩니다.' },
    { id: 'top-web-vulnerabilities', name: '주요 웹 취약점', nameEn: 'top-web-vulnerabilities', category: 'skills', desc: 'OWASP Top 10 웹 취약점을 이해하고 방어하는 스킬. SQL 인젝션, XSS, CSRF 등을 다룹니다.', tags: ['보안', 'OWASP'], stars: 4.7, installs: 12, prompt: '이 스킬은 OWASP Top 10 웹 취약점 방어가 필요할 때 사용합니다. SQL 인젝션, XSS, CSRF 취약점을 탐지하고 수정합니다. "웹 취약점 확인해줘", "OWASP 취약점 검사해줘" 요청에 활성화됩니다.' },
    { id: 'game-development', name: '게임 개발', nameEn: 'game-development', category: 'skills', desc: 'JavaScript, WebGL, Unity를 활용한 게임 개발 스킬. 게임 로직, 물리 엔진, 그래픽 렌더링을 지원합니다.', tags: ['게임', '개발'], stars: 4.7, installs: 10, prompt: '이 스킬은 웹 또는 유니티 기반 게임 개발이 필요할 때 사용합니다. 게임 루프, 충돌 감지, 씬 관리, AI를 구현합니다. "게임 만들어줘", "게임 로직 구현해줘" 요청에 활성화됩니다.' },
    { id: 'markitdown', name: 'MarkItDown', nameEn: 'markitdown', category: 'skills', desc: 'PDF, Word, Excel, 이미지, 오디오 등 다양한 파일 형식을 Markdown으로 변환하는 스킬입니다.', tags: ['변환', '문서'], stars: 4.7, installs: 8, prompt: '이 스킬은 다양한 파일 형식을 Markdown으로 변환할 때 사용합니다. PDF, DOCX, XLSX, 이미지 파일을 Markdown 텍스트로 변환합니다. "파일 Markdown으로 변환해줘", "문서를 마크다운으로 바꿔줘" 요청에 활성화됩니다.' },
    { id: 'remotion', name: 'Remotion', nameEn: 'remotion', category: 'skills', desc: 'Remotion을 활용한 프로그래밍 방식의 비디오 제작 스킬. React로 동적 비디오 콘텐츠를 생성합니다.', tags: ['비디오', 'React'], stars: 4.7, installs: 7, prompt: '이 스킬은 Remotion 프레임워크로 프로그래밍 방식 비디오 제작이 필요할 때 사용합니다. React 컴포넌트로 애니메이션 비디오를 생성합니다. "Remotion 비디오 만들어줘", "프로그래밍으로 동영상 제작해줘" 요청에 활성화됩니다.' },
    { id: 'paid-ads', name: '유료 광고', nameEn: 'paid-ads', category: 'skills', desc: 'Google Ads, Meta Ads 등 유료 광고 캠페인 기획, 최적화, 성과 분석을 지원하는 스킬입니다.', tags: ['광고', '마케팅'], stars: 4.7, installs: 6, prompt: '이 스킬은 유료 광고 캠페인 기획 및 최적화가 필요할 때 사용합니다. 타겟 오디언스, 입찰 전략, 광고 소재, ROAS 개선을 지원합니다. "유료 광고 기획해줘", "Google Ads 설정해줘" 요청에 활성화됩니다.' },
    { id: 'scientific-critical-thinking', name: '과학적 비판적 사고', nameEn: 'scientific-critical-thinking', category: 'skills', desc: '과학적 방법론과 비판적 사고를 적용하여 문제를 분석하고 가설을 검증합니다.', tags: ['분석', '사고'], stars: 4.7, installs: 5, prompt: '이 스킬은 복잡한 문제를 과학적으로 분석할 때 사용합니다. 가설 설정, 데이터 수집, 검증, 결론 도출을 체계적으로 지원합니다. "과학적으로 분석해줘", "비판적으로 평가해줘" 요청에 활성화됩니다.' },
    { id: 'subagent-driven-development', name: '서브에이전트 주도 개발', nameEn: 'subagent-driven-development', category: 'skills', desc: '여러 서브에이전트를 병렬로 실행하여 복잡한 개발 작업을 효율적으로 분산 처리합니다.', tags: ['에이전트', '개발'], stars: 4.7, installs: 4, prompt: '이 스킬은 대규모 개발 작업을 서브에이전트로 분산 처리할 때 사용합니다. 작업을 독립적인 단위로 분해하고 병렬 실행합니다. "서브에이전트로 개발해줘", "병렬 처리로 작업해줘" 요청에 활성화됩니다.' },
    { id: 'draw-io', name: 'Draw.io 다이어그램', nameEn: 'draw-io', category: 'skills', desc: 'draw.io를 활용한 다이어그램 생성, 편집, 내보내기를 지원합니다. 플로우차트, 아키텍처 다이어그램을 제작합니다.', tags: ['다이어그램'], stars: 4.7, installs: 3, prompt: '이 스킬은 Draw.io 다이어그램 작성이 필요할 때 사용합니다. XML 형식의 다이어그램 파일을 생성하고 편집합니다. "Draw.io 다이어그램 만들어줘", "아키텍처 다이어그램 그려줘" 요청에 활성화됩니다.' },
    { id: 'postgres-best-practices', name: 'PostgreSQL 모범 사례', nameEn: 'postgres-best-practices', category: 'skills', desc: 'PostgreSQL 데이터베이스 최적화, 인덱싱 전략, 쿼리 성능 개선을 위한 모범 사례를 제공합니다.', tags: ['PostgreSQL', '데이터베이스'], stars: 4.7, installs: 2, prompt: '이 스킬은 PostgreSQL 성능 최적화 및 설계가 필요할 때 사용합니다. 인덱스 설계, 쿼리 최적화, 파티셔닝 전략을 지원합니다. "PostgreSQL 최적화해줘", "DB 쿼리 개선해줘" 요청에 활성화됩니다.' },
    { id: 'mcp-integration', name: 'MCP 통합', nameEn: 'mcp-integration', category: 'skills', desc: 'MCP 서버를 Claude Code 워크플로우에 통합하는 스킬. MCP 도구 활용, 서버 연결, 프로토콜 구현을 지원합니다.', tags: ['MCP', '통합'], stars: 4.7, installs: 1, prompt: '이 스킬은 MCP 서버를 프로젝트에 통합할 때 사용합니다. MCP 클라이언트 설정, 도구 호출, 결과 처리를 지원합니다. "MCP 통합해줘", "MCP 서버 연결해줘" 요청에 활성화됩니다.' },
    { id: 'seo-fundamentals', name: 'SEO 기초', nameEn: 'seo-fundamentals', category: 'skills', desc: 'SEO 기본 개념, 온페이지 최적화, 기술적 SEO, 콘텐츠 전략의 기초를 다루는 스킬입니다.', tags: ['SEO'], stars: 4.7, installs: 1, prompt: '이 스킬은 SEO 기본 원칙 학습 및 적용이 필요할 때 사용합니다. 키워드 조사, 메타 태그 최적화, 사이트 구조 개선을 안내합니다. "SEO 기초 알려줘", "검색 최적화 방법 알려줘" 요청에 활성화됩니다.' },
    { id: 'typescript-expert', name: 'TypeScript 전문가', nameEn: 'typescript-expert', category: 'skills', desc: 'TypeScript 고급 기능, 제네릭, 타입 가드, 유틸리티 타입을 활용한 전문 TypeScript 개발 스킬입니다.', tags: ['TypeScript', '개발'], stars: 4.7, installs: 1, prompt: '이 스킬은 TypeScript 심화 기능 활용이 필요할 때 사용합니다. 복잡한 제네릭 타입, 조건부 타입, 타입 유틸리티를 구현합니다. "TypeScript 타입 만들어줘", "TypeScript 고급 기능 써줘" 요청에 활성화됩니다.' },
    { id: 'accessibility-auditor', name: '접근성 감사기', nameEn: 'accessibility-auditor', category: 'skills', desc: 'WCAG 기준에 따른 웹 접근성 감사 및 개선을 지원합니다. 스크린 리더 호환성, 색상 대비, 키보드 탐색을 검사합니다.', tags: ['접근성', '품질'], stars: 4.7, installs: 1, prompt: '이 스킬은 웹 접근성 검사 및 개선이 필요할 때 사용합니다. WCAG 2.1 기준으로 접근성 문제를 탐지하고 수정 방법을 제시합니다. "접근성 검사해줘", "WCAG 기준 확인해줘" 요청에 활성화됩니다.' },
    { id: 'agents-crewai', name: 'CrewAI 에이전트', nameEn: 'agents-crewai', category: 'skills', desc: 'CrewAI 프레임워크를 활용한 멀티 에이전트 팀 구성 및 협업 시스템 개발 스킬입니다.', tags: ['CrewAI', 'AI'], stars: 4.7, installs: 1, prompt: '이 스킬은 CrewAI를 활용한 팀 기반 AI 에이전트 시스템이 필요할 때 사용합니다. 에이전트 역할 정의, 작업 위임, 협업 워크플로우를 구성합니다. "CrewAI 팀 만들어줘", "멀티 에이전트 협업 구현해줘" 요청에 활성화됩니다.' },
    { id: 'agile-product-owner', name: '애자일 프로덕트 오너', nameEn: 'agile-product-owner', category: 'skills', desc: '애자일 방법론으로 제품 백로그 관리, 스프린트 계획, 사용자 스토리 작성을 지원하는 PO 스킬입니다.', tags: ['애자일', '제품'], stars: 4.7, installs: 1, prompt: '이 스킬은 애자일 제품 개발 관리가 필요할 때 사용합니다. 백로그 작성, 스프린트 계획, 스토리 포인트 추정을 지원합니다. "백로그 만들어줘", "사용자 스토리 작성해줘" 요청에 활성화됩니다.' },
    { id: 'programmatic-seo', name: '프로그래매틱 SEO', nameEn: 'programmatic-seo', category: 'skills', desc: '데이터 기반의 대규모 SEO 페이지 자동 생성 전략을 개발합니다. 템플릿, 키워드 클러스터링, 콘텐츠 자동화를 지원합니다.', tags: ['SEO', '자동화'], stars: 4.7, installs: 1, prompt: '이 스킬은 대규모 SEO 최적화 페이지 자동 생성이 필요할 때 사용합니다. 키워드 리서치, 페이지 템플릿, 내부 링크 구조를 자동화합니다. "프로그래매틱 SEO 구현해줘", "SEO 페이지 자동화해줘" 요청에 활성화됩니다.' },
    { id: 'database-design', name: '데이터베이스 설계', nameEn: 'database-design', category: 'skills', desc: '관계형 및 비관계형 데이터베이스 스키마 설계, 정규화, 인덱싱 전략을 위한 데이터베이스 설계 스킬입니다.', tags: ['데이터베이스', '설계'], stars: 4.7, installs: 1, prompt: '이 스킬은 데이터베이스 스키마 설계가 필요할 때 사용합니다. ERD 작성, 정규화, 관계 설정, 인덱스 전략을 지원합니다. "데이터베이스 설계해줘", "ERD 만들어줘" 요청에 활성화됩니다.' },
    { id: 'internal-comms', name: '내부 커뮤니케이션', nameEn: 'internal-comms', category: 'skills', desc: '조직 내부 커뮤니케이션 자료 작성을 지원합니다. 공지, 발표, 팀 업데이트, 내부 문서를 작성합니다.', tags: ['커뮤니케이션', '비즈니스'], stars: 4.7, installs: 1, prompt: '이 스킬은 조직 내부 커뮤니케이션 문서 작성이 필요할 때 사용합니다. 팀 공지, 회의록, 프로젝트 업데이트를 전문적으로 작성합니다. "내부 공지 써줘", "팀 업데이트 작성해줘" 요청에 활성화됩니다.' },
    { id: 'scientific-slides', name: '과학 슬라이드', nameEn: 'scientific-slides', category: 'skills', desc: '학술 발표, 연구 논문 설명, 과학적 데이터 시각화를 위한 프레젠테이션 슬라이드를 제작합니다.', tags: ['발표', '과학'], stars: 4.7, installs: 1, prompt: '이 스킬은 학술 및 연구 발표 자료 제작이 필요할 때 사용합니다. 데이터 시각화, 연구 방법론 설명, 결과 발표 슬라이드를 만듭니다. "과학 발표 자료 만들어줘", "연구 슬라이드 작성해줘" 요청에 활성화됩니다.' },
    { id: 'cf-crawl', name: 'Cloudflare 크롤러', nameEn: 'cf-crawl', category: 'skills', desc: 'Cloudflare Workers를 활용한 전체 웹사이트 크롤링 스킬. 대규모 웹 스크래핑과 데이터 수집을 지원합니다.', tags: ['크롤링', '웹'], stars: 4.7, installs: 1, prompt: '이 스킬은 Cloudflare Workers 기반 웹 크롤링이 필요할 때 사용합니다. 전체 사이트 맵 생성, 콘텐츠 수집, 링크 분석을 자동화합니다. "웹사이트 크롤링해줘", "Cloudflare 크롤러 만들어줘" 요청에 활성화됩니다.' },
    { id: 'database', name: '데이터베이스', nameEn: 'database', category: 'skills', desc: 'Railway 데이터베이스 서비스 추가 및 관리. PostgreSQL, MySQL, MongoDB 설정을 지원합니다.', tags: ['데이터베이스', 'Railway'], stars: 4.7, installs: 1, prompt: '이 스킬은 Railway 플랫폼에서 데이터베이스 설정이 필요할 때 사용합니다. 데이터베이스 서비스 추가, 연결 설정, 마이그레이션을 지원합니다. "Railway DB 설정해줘", "데이터베이스 추가해줘" 요청에 활성화됩니다.' },
    { id: 'prompt-engineering', name: '프롬프트 엔지니어링', nameEn: 'prompt-engineering', category: 'skills', desc: 'AI 모델 성능을 극대화하는 프롬프트 설계 기법. 구조화, 예시 제공, 제약 조건 설정을 다룹니다.', tags: ['AI', '프롬프트'], stars: 4.7, installs: 1, prompt: '이 스킬은 AI 프롬프트 설계 및 최적화가 필요할 때 사용합니다. 효과적인 프롬프트 구조, 예시 제공 방법, 출력 형식 제어를 안내합니다. "프롬프트 개선해줘", "AI 지시문 최적화해줘" 요청에 활성화됩니다.' },
    { id: 'pricing-strategy', name: '가격 전략', nameEn: 'pricing-strategy', category: 'skills', desc: 'SaaS, 제품, 서비스를 위한 최적의 가격 전략 수립. 경쟁 분석, 가치 기반 가격 책정을 지원합니다.', tags: ['전략', '가격'], stars: 4.7, installs: 1, prompt: '이 스킬은 제품 및 서비스 가격 전략 수립이 필요할 때 사용합니다. 프리미엄, 구독, 사용량 기반 가격 모델을 분석하고 최적 전략을 제시합니다. "가격 전략 만들어줘", "SaaS 가격 설정해줘" 요청에 활성화됩니다.' },
    { id: 'figma', name: 'Figma', nameEn: 'figma', category: 'skills', desc: 'Figma MCP 서버를 활용하여 디자인 컨텍스트를 가져오고 코드로 구현합니다. 디자인-코드 연동 워크플로우를 지원합니다.', tags: ['Figma', '디자인'], stars: 4.7, installs: 1, prompt: '이 스킬은 Figma 디자인을 코드로 구현할 때 사용합니다. Figma MCP로 디자인 명세를 가져와 React, CSS 코드로 변환합니다. "Figma 디자인 구현해줘", "Figma에서 코드 만들어줘" 요청에 활성화됩니다.' },
    { id: 'backend-dev-guidelines', name: '백엔드 개발 가이드라인', nameEn: 'backend-dev-guidelines', category: 'skills', desc: '백엔드 개발을 위한 아키텍처 원칙, API 설계 가이드라인, 코딩 표준을 제공합니다.', tags: ['백엔드', '가이드'], stars: 4.7, installs: 1, prompt: '이 스킬은 백엔드 개발 표준 및 가이드라인 수립이 필요할 때 사용합니다. API 설계 원칙, 에러 처리 표준, 코딩 컨벤션을 정의합니다. "백엔드 가이드라인 만들어줘", "API 설계 원칙 알려줘" 요청에 활성화됩니다.' },
    { id: 'launch-strategy', name: '런치 전략', nameEn: 'launch-strategy', category: 'skills', desc: '제품 및 기능 런치 전략 수립. 마케팅 채널 선택, 런치 타임라인, 성과 지표 설정을 지원합니다.', tags: ['런치', '전략'], stars: 4.7, installs: 1, prompt: '이 스킬은 제품 런치 전략 수립이 필요할 때 사용합니다. 런치 체크리스트, 채널 전략, 사전 마케팅, 피드백 수집 방법을 제공합니다. "런치 전략 만들어줘", "제품 출시 계획 세워줘" 요청에 활성화됩니다.' },
    { id: 'humanizer', name: '휴머나이저', nameEn: 'humanizer', category: 'skills', desc: 'AI 생성 텍스트를 더 자연스럽고 인간적인 글로 변환합니다. 문체 다듬기, 자연스러운 표현으로 개선합니다.', tags: ['글쓰기', 'AI'], stars: 4.7, installs: 1, prompt: '이 스킬은 AI 생성 텍스트를 자연스러운 문체로 개선할 때 사용합니다. 딱딱한 표현을 부드럽게, AI 패턴을 인간적인 글쓰기로 변환합니다. "텍스트 자연스럽게 만들어줘", "AI 글을 사람이 쓴 것처럼 바꿔줘" 요청에 활성화됩니다.' },
    { id: 'security-best-practices', name: '보안 모범 사례', nameEn: 'security-best-practices', category: 'skills', desc: '소프트웨어 개발에서 지켜야 할 보안 모범 사례. 입력 검증, 암호화, 인증 보안을 포함합니다.', tags: ['보안'], stars: 4.7, installs: 1, prompt: '이 스킬은 코드 보안 강화 및 보안 표준 적용이 필요할 때 사용합니다. 인증, 데이터 암호화, 입력 검증, 세션 관리 보안을 지원합니다. "보안 모범 사례 적용해줘", "코드 보안 강화해줘" 요청에 활성화됩니다.' },
    { id: 'email-sequence', name: '이메일 시퀀스', nameEn: 'email-sequence', category: 'skills', desc: '드립 캠페인, 온보딩 시퀀스, 영업 이메일 시리즈를 설계합니다. 단계별 이메일 자동화 흐름을 구성합니다.', tags: ['이메일', '자동화'], stars: 4.7, installs: 1, prompt: '이 스킬은 이메일 자동화 시퀀스 설계가 필요할 때 사용합니다. 온보딩, 드립 캠페인, 리타겟팅 이메일 흐름을 구성합니다. "이메일 시퀀스 만들어줘", "드립 캠페인 설계해줘" 요청에 활성화됩니다.' },
    { id: 'developer-growth-analysis', name: '개발자 성장 분석', nameEn: 'developer-growth-analysis', category: 'skills', desc: '개발자 생태계 성장 데이터 분석, 커뮤니티 지표, 채택률 추적을 위한 분석 스킬입니다.', tags: ['분석', '개발자'], stars: 4.7, installs: 1, prompt: '이 스킬은 개발자 커뮤니티 성장 및 생태계 분석이 필요할 때 사용합니다. GitHub 지표, npm 다운로드, 개발자 채택 트렌드를 분석합니다. "개발자 성장 데이터 분석해줘", "커뮤니티 지표 파악해줘" 요청에 활성화됩니다.' },
    { id: 'roier-seo', name: 'ROI 중심 SEO', nameEn: 'roier-seo', category: 'skills', desc: 'ROI를 최우선으로 하는 기술적 SEO 감사 및 수정 스킬. 실제 비즈니스 성과로 연결되는 SEO 전략을 제공합니다.', tags: ['SEO', 'ROI'], stars: 4.7, installs: 1, prompt: '이 스킬은 ROI 중심의 SEO 전략 수립이 필요할 때 사용합니다. 수익에 직결되는 SEO 개선점을 우선순위화하고 실행 계획을 제시합니다. "ROI SEO 전략 만들어줘", "수익 중심 SEO 최적화해줘" 요청에 활성화됩니다.' },
    { id: 'api-patterns', name: 'API 패턴', nameEn: 'api-patterns', category: 'skills', desc: 'REST API 설계 원칙, 버전 관리, 오류 처리, 인증 패턴을 위한 API 모범 사례 스킬입니다.', tags: ['API', '설계'], stars: 4.7, installs: 1, prompt: '이 스킬은 API 설계 패턴 적용이 필요할 때 사용합니다. RESTful 원칙, OpenAPI 명세, 버전 관리, 에러 응답 형식을 표준화합니다. "API 패턴 적용해줘", "RESTful API 설계해줘" 요청에 활성화됩니다.' },
    { id: 'web-artifacts-builder', name: '웹 아티팩트 빌더', nameEn: 'web-artifacts-builder', category: 'skills', desc: '인터랙티브 웹 기반 아티팩트를 빠르게 생성합니다. 데모, 프로토타입, 단독 실행 웹 앱을 만듭니다.', tags: ['웹', '프로토타입'], stars: 4.7, installs: 1, prompt: '이 스킬은 웹 기반 인터랙티브 데모 제작이 필요할 때 사용합니다. HTML, CSS, JS로 즉시 실행 가능한 웹 아티팩트를 만듭니다. "웹 데모 만들어줘", "인터랙티브 웹 앱 만들어줘" 요청에 활성화됩니다.' },
    { id: 'agents-autogpt', name: 'AutoGPT 에이전트', nameEn: 'agents-autogpt', category: 'skills', desc: 'AutoGPT 스타일의 자율 AI 에이전트 시스템 개발. 목표 분해, 자가 반성, 자율 실행을 구현합니다.', tags: ['AutoGPT', 'AI'], stars: 4.7, installs: 1, prompt: '이 스킬은 자율 실행 AI 에이전트 개발이 필요할 때 사용합니다. 목표를 하위 작업으로 분해하고 자율적으로 실행하는 에이전트를 구현합니다. "AutoGPT 에이전트 만들어줘", "자율 AI 에이전트 구현해줘" 요청에 활성화됩니다.' },
    { id: 'sql-injection-testing', name: 'SQL 인젝션 테스팅', nameEn: 'sql-injection-testing', category: 'skills', desc: 'SQL 인젝션 취약점을 탐지하고 방어 코드를 구현합니다. 파라미터화된 쿼리, ORM 사용법을 안내합니다.', tags: ['보안', 'SQL'], stars: 4.7, installs: 1, prompt: '이 스킬은 SQL 인젝션 취약점 테스트 및 방어가 필요할 때 사용합니다. 취약점 패턴 탐지, 파라미터화 쿼리 구현, 입력 검증 방법을 안내합니다. "SQL 인젝션 테스트해줘", "SQL 보안 강화해줘" 요청에 활성화됩니다.' },
    { id: 'market-research-reports', name: '시장 조사 보고서', nameEn: 'market-research-reports', category: 'skills', desc: '시장 분석, 경쟁 환경 조사, 고객 분석을 포함한 종합 시장 조사 보고서를 작성합니다.', tags: ['리서치', '보고서'], stars: 4.7, installs: 1, prompt: '이 스킬은 시장 조사 보고서 작성이 필요할 때 사용합니다. 산업 분석, 경쟁사 비교, 고객 세그먼트, 시장 기회를 체계적으로 정리합니다. "시장 조사 보고서 만들어줘", "업계 분석해줘" 요청에 활성화됩니다.' },
    { id: 'plotly', name: 'Plotly 시각화', nameEn: 'plotly', category: 'skills', desc: 'Plotly를 활용한 인터랙티브 과학적, 통계적 데이터 시각화를 생성합니다.', tags: ['시각화', '데이터'], stars: 4.7, installs: 1, prompt: '이 스킬은 Plotly 기반 인터랙티브 차트 및 그래프 생성이 필요할 때 사용합니다. 산점도, 히스토그램, 3D 플롯, 지도 시각화를 지원합니다. "Plotly 차트 만들어줘", "데이터 시각화해줘" 요청에 활성화됩니다.' },
    { id: 'nodejs-best-practices', name: 'Node.js 모범 사례', nameEn: 'nodejs-best-practices', category: 'skills', desc: 'Node.js 개발을 위한 최신 모범 사례, 이벤트 루프 이해, 성능 최적화, 에러 처리 패턴을 제공합니다.', tags: ['Node.js', '개발'], stars: 4.7, installs: 1, prompt: '이 스킬은 Node.js 코드 품질 및 성능 향상이 필요할 때 사용합니다. 비동기 패턴, 스트림, 클러스터링, 메모리 관리 모범 사례를 안내합니다. "Node.js 최적화해줘", "Node 코드 개선해줘" 요청에 활성화됩니다.' },
    { id: 'statistical-analysis', name: '통계 분석', nameEn: 'statistical-analysis', category: 'skills', desc: '기술 통계, 가설 검정, 회귀 분석, 데이터 분포 분석을 수행하는 통계 분석 스킬입니다.', tags: ['통계', '분석'], stars: 4.7, installs: 1, prompt: '이 스킬은 데이터 통계 분석 및 해석이 필요할 때 사용합니다. 평균, 분산, 상관관계, 회귀 분석을 수행하고 결과를 해석합니다. "통계 분석해줘", "데이터 분포 분석해줘" 요청에 활성화됩니다.' },
    { id: 'dispatching-parallel-agents', name: '병렬 에이전트 파견', nameEn: 'dispatching-parallel-agents', category: 'skills', desc: '독립적인 작업을 병렬로 실행하는 여러 에이전트를 효율적으로 파견하고 조율합니다.', tags: ['에이전트', '병렬'], stars: 4.7, installs: 1, prompt: '이 스킬은 여러 작업을 병렬 에이전트로 동시 처리할 때 사용합니다. 작업 분해, 에이전트 할당, 결과 통합 전략을 제공합니다. "병렬로 처리해줘", "에이전트 병렬 실행해줘" 요청에 활성화됩니다.' },
    { id: 'obsidian-markdown', name: 'Obsidian 마크다운', nameEn: 'obsidian-markdown', category: 'skills', desc: 'Obsidian 노트 앱을 위한 마크다운 문서 작성 및 지식 그래프 구성 스킬입니다.', tags: ['Obsidian', '문서'], stars: 4.7, installs: 1, prompt: '이 스킬은 Obsidian 노트 작성 및 지식 관리가 필요할 때 사용합니다. 내부 링크, 태그, 프론트매터를 활용한 노트 구조를 만듭니다. "Obsidian 노트 만들어줘", "마크다운 문서 구성해줘" 요청에 활성화됩니다.' },
    { id: 'literature-review', name: '문헌 검토', nameEn: 'literature-review', category: 'skills', desc: '학술 논문 및 연구 문헌을 체계적으로 검토하고 요약합니다. 연구 트렌드와 갭을 분석합니다.', tags: ['학술', '리서치'], stars: 4.7, installs: 1, prompt: '이 스킬은 학술 문헌 조사 및 리뷰가 필요할 때 사용합니다. 논문 요약, 연구 방법론 비교, 연구 갭 파악을 지원합니다. "문헌 검토해줘", "논문 리뷰 작성해줘" 요청에 활성화됩니다.' },
    { id: 'invoice-organizer', name: '청구서 정리기', nameEn: 'invoice-organizer', category: 'skills', desc: '청구서 및 영수증을 자동으로 처리하고 분류합니다. 데이터 추출, 회계 통합, 보고서 생성을 지원합니다.', tags: ['회계', '자동화'], stars: 4.7, installs: 1, prompt: '이 스킬은 청구서 및 영수증 처리 자동화가 필요할 때 사용합니다. 이미지나 PDF에서 금액, 날짜, 공급업체 정보를 추출합니다. "청구서 정리해줘", "영수증 처리해줘" 요청에 활성화됩니다.' },
    { id: 'scientific-writing', name: '과학 논문 작성', nameEn: 'scientific-writing', category: 'skills', desc: '학술 논문, 연구 보고서, 기술 문서를 과학적 표준에 맞게 작성하는 스킬입니다.', tags: ['학술', '글쓰기'], stars: 4.7, installs: 1, prompt: '이 스킬은 과학 논문 및 기술 보고서 작성이 필요할 때 사용합니다. IMRaD 구조, 학술 문체, 인용 형식, 통계 결과 보고를 지원합니다. "논문 써줘", "과학 보고서 작성해줘" 요청에 활성화됩니다.' },
    { id: 'prompt-engineer', name: '프롬프트 엔지니어', nameEn: 'prompt-engineer', category: 'skills', desc: 'AI 모델 최적화를 위한 전문 프롬프트 엔지니어링. 프롬프트 설계, 테스트, 반복 개선을 지원합니다.', tags: ['AI', '프롬프트'], stars: 4.7, installs: 1, prompt: '이 스킬은 전문 수준의 프롬프트 엔지니어링이 필요할 때 사용합니다. 시스템 프롬프트, 퓨샷 예시, 체인-오브-쏘트 기법을 설계합니다. "프롬프트 엔지니어링해줘", "AI 프롬프트 최적화해줘" 요청에 활성화됩니다.' },
    { id: 'frontend-dev-guidelines', name: '프론트엔드 개발 가이드라인', nameEn: 'frontend-dev-guidelines', category: 'skills', desc: '프론트엔드 개발 표준, 코드 구조화, 컴포넌트 설계 원칙을 위한 가이드라인 스킬입니다.', tags: ['프론트엔드', '가이드'], stars: 4.7, installs: 1, prompt: '이 스킬은 프론트엔드 개발 표준 수립이 필요할 때 사용합니다. 폴더 구조, 컴포넌트 패턴, 스타일 가이드를 정의합니다. "프론트엔드 가이드라인 만들어줘", "코딩 표준 설정해줘" 요청에 활성화됩니다.' },
    { id: 'figma-implement-design', name: 'Figma 디자인 구현', nameEn: 'figma-implement-design', category: 'skills', desc: 'Figma 디자인을 정확한 코드로 구현합니다. 디자인 명세 분석, 컴포넌트 추출, 픽셀 퍼펙트 구현을 지원합니다.', tags: ['Figma', '구현'], stars: 4.7, installs: 1, prompt: '이 스킬은 Figma 디자인을 코드로 변환할 때 사용합니다. 디자인 파일에서 컴포넌트를 추출하고 정확한 HTML/CSS/React 코드를 생성합니다. "Figma 디자인 코드로 변환해줘", "디자인 구현해줘" 요청에 활성화됩니다.' },
    { id: 'senior-computer-vision', name: '시니어 컴퓨터 비전', nameEn: 'senior-computer-vision', category: 'skills', desc: '컴퓨터 비전 모델 개발, 이미지 분석, 객체 감지를 위한 전문 CV 엔지니어링 스킬입니다.', tags: ['컴퓨터비전', 'AI'], stars: 4.7, installs: 1, prompt: '이 스킬은 컴퓨터 비전 시스템 개발이 필요할 때 사용합니다. 이미지 분류, 객체 감지, 세그멘테이션 모델을 구현합니다. "컴퓨터 비전 모델 만들어줘", "이미지 분석 시스템 만들어줘" 요청에 활성화됩니다.' },
    { id: 'domain-name-brainstormer', name: '도메인 이름 브레인스토머', nameEn: 'domain-name-brainstormer', category: 'skills', desc: '브랜드에 맞는 창의적인 도메인 이름 아이디어를 생성합니다. SEO와 브랜딩을 모두 고려합니다.', tags: ['도메인', '브랜딩'], stars: 4.7, installs: 1, prompt: '이 스킬은 새로운 도메인 이름 발굴이 필요할 때 사용합니다. 브랜드 가치와 SEO를 고려한 기억하기 쉬운 도메인 후보를 생성합니다. "도메인 이름 추천해줘", "도메인 아이디어 줘" 요청에 활성화됩니다.' },
    { id: 'slack-gif-creator', name: 'Slack GIF 제작기', nameEn: 'slack-gif-creator', category: 'skills', desc: 'Slack 채널용 커스텀 GIF 애니메이션을 제작합니다. 팀 커뮤니케이션을 위한 재미있는 GIF를 만듭니다.', tags: ['Slack', 'GIF'], stars: 4.7, installs: 1, prompt: '이 스킬은 Slack용 커스텀 GIF 제작이 필요할 때 사용합니다. 텍스트 애니메이션, 이모티콘 GIF, 팀 맞춤 애니메이션을 만듭니다. "Slack GIF 만들어줘", "커스텀 GIF 만들어줘" 요청에 활성화됩니다.' },
    { id: 'fastapi-endpoint', name: 'FastAPI 엔드포인트', nameEn: 'fastapi-endpoint', category: 'skills', desc: 'FastAPI를 활용한 고성능 Python REST API 엔드포인트 설계 및 구현 스킬입니다.', tags: ['FastAPI', 'Python'], stars: 4.7, installs: 1, prompt: '이 스킬은 FastAPI 기반 API 엔드포인트 개발이 필요할 때 사용합니다. 경로 파라미터, 요청 모델, 응답 스키마, 인증을 구현합니다. "FastAPI 엔드포인트 만들어줘", "Python API 구현해줘" 요청에 활성화됩니다.' },
    { id: 'database-schema-designer', name: '데이터베이스 스키마 설계자', nameEn: 'database-schema-designer', category: 'skills', desc: '관계형 데이터베이스 스키마를 최적화하여 설계합니다. 정규화, 관계 설정, 마이그레이션을 지원합니다.', tags: ['데이터베이스', '설계'], stars: 4.7, installs: 1, prompt: '이 스킬은 데이터베이스 스키마 설계 및 최적화가 필요할 때 사용합니다. 테이블 구조, 외래 키, 제약 조건, 인덱스 전략을 설계합니다. "DB 스키마 설계해줘", "테이블 구조 만들어줘" 요청에 활성화됩니다.' },
    { id: 'executing-plans', name: '계획 실행', nameEn: 'executing-plans', category: 'skills', desc: '수립된 계획을 단계별로 실행합니다. 작업 추적, 체크포인트 확인, 진행 상황 보고를 지원합니다.', tags: ['실행', '계획'], stars: 4.7, installs: 1, prompt: '이 스킬은 계획 문서를 실제 코드 및 작업으로 실행할 때 사용합니다. 단계별 실행 확인, 중간 검토, 완료 보고를 지원합니다. "계획 실행해줘", "이 계획대로 구현해줘" 요청에 활성화됩니다.' },
    { id: 'architecture', name: '아키텍처', nameEn: 'architecture', category: 'skills', desc: '소프트웨어 아키텍처 결정 및 문서화 스킬. ADR(Architecture Decision Records) 작성을 지원합니다.', tags: ['아키텍처', '문서'], stars: 4.7, installs: 1, prompt: '이 스킬은 아키텍처 결정 사항 문서화가 필요할 때 사용합니다. ADR 형식으로 기술 결정 배경, 대안, 결과를 기록합니다. "아키텍처 결정 문서화해줘", "ADR 만들어줘" 요청에 활성화됩니다.' },
    { id: 'browser-automation', name: '브라우저 자동화', nameEn: 'browser-automation', category: 'skills', desc: 'Playwright, Puppeteer를 활용한 브라우저 자동화 스크립트를 작성합니다. 웹 스크래핑, E2E 테스트를 지원합니다.', tags: ['자동화', '브라우저'], stars: 4.7, installs: 1, prompt: '이 스킬은 브라우저 자동화 스크립트 작성이 필요할 때 사용합니다. 웹 스크래핑, 자동 테스트, 폼 자동화를 Playwright로 구현합니다. "브라우저 자동화해줘", "웹 스크래핑 스크립트 만들어줘" 요청에 활성화됩니다.' },
    { id: 'skill-development', name: '스킬 개발', nameEn: 'skill-development', category: 'skills', desc: 'Claude Code 스킬 개발 가이드. 효과적인 스킬 구조, 트리거 조건, 지시문 작성법을 안내합니다.', tags: ['스킬', '개발'], stars: 4.7, installs: 1, prompt: '이 스킬은 Claude Code 스킬 개발이 필요할 때 사용합니다. 스킬 파일 형식, 메타데이터, 사용 지침 작성 방법을 안내합니다. "스킬 개발해줘", "새 스킬 만드는 방법 알려줘" 요청에 활성화됩니다.' },
    { id: 'agent-tool-builder', name: '에이전트 도구 빌더', nameEn: 'agent-tool-builder', category: 'skills', desc: 'AI 에이전트용 커스텀 도구를 설계하고 구현합니다. 도구 정의, 파라미터 검증, 결과 처리를 지원합니다.', tags: ['에이전트', '도구'], stars: 4.7, installs: 1, prompt: '이 스킬은 AI 에이전트 도구 개발이 필요할 때 사용합니다. 도구 스키마 정의, 구현 코드, 에러 처리를 지원합니다. "에이전트 도구 만들어줘", "커스텀 도구 구현해줘" 요청에 활성화됩니다.' },
    { id: 'testing-patterns', name: '테스팅 패턴', nameEn: 'testing-patterns', category: 'skills', desc: 'Jest 테스트 패턴, 목킹 전략, 테스트 구성을 위한 모범 사례를 제공합니다.', tags: ['테스트', 'Jest'], stars: 4.7, installs: 1, prompt: '이 스킬은 Jest 기반 테스트 코드 작성이 필요할 때 사용합니다. 단위 테스트, 목킹, 비동기 테스트, 스냅샷 테스트 패턴을 안내합니다. "Jest 테스트 만들어줘", "테스팅 패턴 적용해줘" 요청에 활성화됩니다.' },
    { id: 'hook-development', name: '훅 개발', nameEn: 'hook-development', category: 'skills', desc: 'Claude Code 훅 개발 스킬. PreToolUse, PostToolUse, Stop 훅 유형별 구현 방법을 안내합니다.', tags: ['훅', '개발'], stars: 4.7, installs: 1, prompt: '이 스킬은 Claude Code 훅 제작이 필요할 때 사용합니다. 파일 변경 감지, 자동 포맷팅, 알림 훅을 구현합니다. "훅 만들어줘", "Claude Code 훅 개발해줘" 요청에 활성화됩니다.' },
    { id: 'firecrawl-scraper', name: 'Firecrawl 스크래퍼', nameEn: 'firecrawl-scraper', category: 'skills', desc: 'Firecrawl API를 활용한 심층 웹 스크래핑 및 콘텐츠 추출 스킬입니다.', tags: ['스크래핑', '웹'], stars: 4.7, installs: 1, prompt: '이 스킬은 Firecrawl을 활용한 웹 콘텐츠 수집이 필요할 때 사용합니다. 동적 웹페이지 크롤링, 구조화된 데이터 추출, 마크다운 변환을 지원합니다. "Firecrawl로 스크래핑해줘", "웹 데이터 수집해줘" 요청에 활성화됩니다.' },
    { id: 'code-review', name: '코드 리뷰', nameEn: 'code-review', category: 'skills', desc: '정해진 표준에 따른 체계적인 코드 리뷰를 수행합니다. 품질, 보안, 성능을 종합적으로 검토합니다.', tags: ['리뷰', '품질'], stars: 4.7, installs: 1, prompt: '이 스킬은 코드 리뷰 프로세스 진행이 필요할 때 사용합니다. 코드 품질, 보안 취약점, 성능 문제를 체계적으로 검토합니다. "코드 리뷰해줘", "PR 리뷰 진행해줘" 요청에 활성화됩니다.' },
    { id: 'seo', name: 'SEO', nameEn: 'seo', category: 'skills', desc: '검색 엔진 가시성과 랭킹을 최적화합니다. 기술적 SEO, 콘텐츠 최적화, 링크 빌딩을 지원합니다.', tags: ['SEO'], stars: 4.7, installs: 1, prompt: '이 스킬은 전반적인 SEO 최적화가 필요할 때 사용합니다. 온페이지, 오프페이지, 기술적 SEO를 통합적으로 개선합니다. "SEO 해줘", "검색 최적화해줘" 요청에 활성화됩니다.' },
    { id: 'claude-d3js-skill', name: 'D3.js 시각화', nameEn: 'claude-d3js-skill', category: 'skills', desc: 'D3.js를 활용한 데이터 시각화 스킬. 차트, 그래프, 인터랙티브 데이터 비주얼을 생성합니다.', tags: ['D3.js', '시각화'], stars: 4.7, installs: 1, prompt: '이 스킬은 D3.js 기반 데이터 시각화 개발이 필요할 때 사용합니다. 바 차트, 네트워크 그래프, 지도 시각화, 커스텀 차트를 구현합니다. "D3.js 차트 만들어줘", "데이터 비주얼 만들어줘" 요청에 활성화됩니다.' },
    { id: 'scientific-visualization', name: '과학 데이터 시각화', nameEn: 'scientific-visualization', category: 'skills', desc: '과학적 데이터를 시각화합니다. 플롯, 그래프, 실험 데이터 분석 결과를 명확하게 표현합니다.', tags: ['시각화', '과학'], stars: 4.7, installs: 1, prompt: '이 스킬은 과학 연구 데이터의 시각적 표현이 필요할 때 사용합니다. 실험 결과, 시뮬레이션 데이터, 측정값을 명확한 그래프로 나타냅니다. "과학 데이터 시각화해줘", "실험 결과 그래프 만들어줘" 요청에 활성화됩니다.' },
    { id: 'planning', name: '기획', nameEn: 'planning', category: 'skills', desc: '마크다운 파일로 지속적인 프로젝트 계획을 생성하고 관리합니다. 진행 상황 추적과 계획 업데이트를 지원합니다.', tags: ['기획', '계획'], stars: 4.7, installs: 1, prompt: '이 스킬은 프로젝트 기획 문서 작성 및 관리가 필요할 때 사용합니다. 마크다운 형식의 계획서를 생성하고 진행 상황을 추적합니다. "프로젝트 계획 만들어줘", "기획 문서 작성해줘" 요청에 활성화됩니다.' },
    { id: 'playwright-skill', name: 'Playwright 스킬', nameEn: 'playwright-skill', category: 'skills', desc: 'Playwright를 활용한 완전한 브라우저 테스트 자동화 스킬. 크로스 브라우저 E2E 테스트를 구현합니다.', tags: ['Playwright', '테스트'], stars: 4.7, installs: 1, prompt: '이 스킬은 Playwright 테스트 자동화가 필요할 때 사용합니다. E2E 테스트, 시각적 리그레션, 성능 테스트를 작성합니다. "Playwright 테스트 만들어줘", "E2E 테스트 자동화해줘" 요청에 활성화됩니다.' },
    { id: 'app-builder', name: '앱 빌더', nameEn: 'app-builder', category: 'skills', desc: '메인 애플리케이션 빌딩 스킬. 전체 앱 구조 설계부터 핵심 기능 구현까지 빠르게 앱을 만듭니다.', tags: ['개발', '앱'], stars: 4.7, installs: 1, prompt: '이 스킬은 새로운 애플리케이션 빠른 개발이 필요할 때 사용합니다. 프로젝트 구조 설정, 핵심 기능 구현, 배포 준비를 지원합니다. "앱 만들어줘", "애플리케이션 빠르게 구현해줘" 요청에 활성화됩니다.' },
    { id: 'app-store-optimization', name: '앱스토어 최적화', nameEn: 'app-store-optimization', category: 'skills', desc: 'App Store, Google Play 앱 노출 최적화. 키워드, 스크린샷, 설명, 리뷰 전략을 지원합니다.', tags: ['ASO', '모바일'], stars: 4.7, installs: 1, prompt: '이 스킬은 모바일 앱 스토어 최적화가 필요할 때 사용합니다. 앱 제목, 설명, 키워드, 스크린샷 최적화를 통해 다운로드를 늘립니다. "앱스토어 최적화해줘", "ASO 전략 만들어줘" 요청에 활성화됩니다.' },
    { id: 'planning-with-files', name: '파일 기반 기획', nameEn: 'planning-with-files', category: 'skills', desc: '파일 시스템을 활용한 프로젝트 계획 관리. 계획 파일 생성, 업데이트, 연동을 지원합니다.', tags: ['기획', '파일'], stars: 4.7, installs: 1, prompt: '이 스킬은 파일 기반 프로젝트 계획 관리가 필요할 때 사용합니다. 계획 문서를 파일로 저장하고 코드와 연동하여 진행 상황을 추적합니다. "파일로 계획 관리해줘", "계획 파일 만들어줘" 요청에 활성화됩니다.' },
    { id: 'agent-manager-skill', name: '에이전트 관리 스킬', nameEn: 'agent-manager-skill', category: 'skills', desc: '여러 에이전트를 조율하고 관리합니다. 에이전트 할당, 모니터링, 결과 통합을 지원합니다.', tags: ['에이전트', '관리'], stars: 4.7, installs: 1, prompt: '이 스킬은 멀티 에이전트 시스템 관리가 필요할 때 사용합니다. 에이전트 역할 할당, 상태 모니터링, 협업 조율을 지원합니다. "에이전트 관리해줘", "멀티 에이전트 조율해줘" 요청에 활성화됩니다.' },
    { id: 'stripe-integration', name: 'Stripe 통합', nameEn: 'stripe-integration', category: 'skills', desc: 'Stripe 결제 시스템 통합 스킬. 결제 처리, 구독 관리, 웹훅 처리를 구현합니다.', tags: ['결제', 'Stripe'], stars: 4.7, installs: 1, prompt: '이 스킬은 Stripe 결제 시스템 통합이 필요할 때 사용합니다. 결제 폼, 구독 관리, 환불 처리, 웹훅을 구현합니다. "Stripe 결제 구현해줘", "결제 시스템 통합해줘" 요청에 활성화됩니다.' },
    { id: 'code-review-checklist', name: '코드 리뷰 체크리스트', nameEn: 'code-review-checklist', category: 'skills', desc: '코드 리뷰를 위한 종합 체크리스트를 제공합니다. 보안, 성능, 가독성, 테스트 항목을 포함합니다.', tags: ['리뷰', '체크리스트'], stars: 4.7, installs: 1, prompt: '이 스킬은 코드 리뷰 체크리스트가 필요할 때 사용합니다. 리뷰 항목을 카테고리별로 정리하고 각 항목의 중요도를 표시합니다. "코드 리뷰 체크리스트 만들어줘", "리뷰 기준 정해줘" 요청에 활성화됩니다.' },
    { id: 'brainstorming', name: '브레인스토밍 플러스', nameEn: 'brainstorming', category: 'skills', desc: '창의적 문제 해결을 위한 구조화된 브레인스토밍 방법론. 다양한 아이디어 도출 기법을 활용합니다.', tags: ['창의', '기획'], stars: 4.7, installs: 1, prompt: '이 스킬은 창의적 아이디어 발굴 세션이 필요할 때 사용합니다. 마인드맵, SCAMPER, 역발상 기법으로 아이디어를 확장합니다. "아이디어 발산해줘", "창의적으로 생각해줘" 요청에 활성화됩니다.' },
    { id: 'agent-management', name: '에이전트 관리', nameEn: 'agent-management', category: 'skills', desc: 'Claude Code 에이전트 생성, 구성, 배포를 관리합니다. 에이전트 파일 구조와 메타데이터를 설정합니다.', tags: ['에이전트', '관리'], stars: 4.7, installs: 1, prompt: '이 스킬은 Claude Code 에이전트 파일 관리가 필요할 때 사용합니다. 에이전트 YAML 파일 생성, 수정, 버전 관리를 지원합니다. "에이전트 파일 만들어줘", "에이전트 설정해줘" 요청에 활성화됩니다.' },
    { id: 'game-changing-features', name: '판도를 바꾸는 기능', nameEn: 'game-changing-features', category: 'skills', desc: '제품 차별화를 만드는 혁신적인 기능을 기획합니다. 사용자 가치를 극대화하는 킬러 기능을 설계합니다.', tags: ['기획', '혁신'], stars: 4.7, installs: 1, prompt: '이 스킬은 제품 경쟁력을 높이는 혁신 기능 기획이 필요할 때 사용합니다. 사용자 니즈, 기술 트렌드, 경쟁사 갭을 분석해 킬러 피처를 제안합니다. "혁신 기능 기획해줘", "차별화 전략 만들어줘" 요청에 활성화됩니다.' },
    { id: 'pptx-posters', name: 'PPTX 포스터', nameEn: 'pptx-posters', category: 'skills', desc: 'PowerPoint를 활용한 전문 포스터, 인포그래픽, 시각적 자료를 제작합니다.', tags: ['PPTX', '디자인'], stars: 4.7, installs: 1, prompt: '이 스킬은 PowerPoint 기반 포스터 및 인포그래픽 제작이 필요할 때 사용합니다. 학술 포스터, 이벤트 홍보물, 인포그래픽을 디자인합니다. "포스터 만들어줘", "인포그래픽 만들어줘" 요청에 활성화됩니다.' },
    { id: 'nextjs-supabase-auth', name: 'Next.js Supabase 인증', nameEn: 'nextjs-supabase-auth', category: 'skills', desc: 'Next.js와 Supabase를 활용한 인증 시스템 구현. 소셜 로그인, JWT, 세션 관리를 포함합니다.', tags: ['Next.js', 'Supabase', '인증'], stars: 4.7, installs: 1, prompt: '이 스킬은 Next.js와 Supabase 기반 인증 시스템 구현이 필요할 때 사용합니다. 이메일/소셜 로그인, 보호된 라우트, 세션 관리를 구현합니다. "Supabase 인증 구현해줘", "Next.js 로그인 만들어줘" 요청에 활성화됩니다.' },
    { id: 'remotion-best-practices', name: 'Remotion 모범 사례', nameEn: 'remotion-best-practices', category: 'skills', desc: 'Remotion 비디오 제작의 모범 사례, 성능 최적화, 렌더링 효율화 방법을 제공합니다.', tags: ['Remotion', '비디오'], stars: 4.7, installs: 1, prompt: '이 스킬은 Remotion 기반 비디오 최적화가 필요할 때 사용합니다. 렌더링 성능, 애니메이션 효율성, 파일 크기 최적화 방법을 안내합니다. "Remotion 최적화해줘", "비디오 렌더링 개선해줘" 요청에 활성화됩니다.' },
    { id: 'writing-skills', name: '글쓰기 스킬', nameEn: 'writing-skills', category: 'skills', desc: '다양한 문체와 목적에 맞는 글을 작성합니다. 블로그, 에세이, 기술 문서, 창작 글쓰기를 지원합니다.', tags: ['글쓰기', '콘텐츠'], stars: 4.7, installs: 1, prompt: '이 스킬은 다양한 형태의 글쓰기가 필요할 때 사용합니다. 독자 수준과 목적에 맞는 명확하고 설득력 있는 글을 작성합니다. "글 써줘", "문서 작성해줘" 요청에 활성화됩니다.' },
    { id: 'browser-extension-builder', name: '브라우저 확장 프로그램 빌더', nameEn: 'browser-extension-builder', category: 'skills', desc: 'Chrome, Firefox 브라우저 확장 프로그램을 개발합니다. Manifest V3, 콘텐츠 스크립트, 백그라운드 서비스를 구현합니다.', tags: ['브라우저', '확장'], stars: 4.7, installs: 1, prompt: '이 스킬은 브라우저 확장 프로그램 개발이 필요할 때 사용합니다. Chrome Extension, Firefox Add-on 개발을 지원합니다. "브라우저 확장 만들어줘", "Chrome Extension 개발해줘" 요청에 활성화됩니다.' },
    { id: 'competitor-alternatives', name: '경쟁사 대안 분석', nameEn: 'competitor-alternatives', category: 'skills', desc: '경쟁 제품 분석과 차별화 전략을 개발합니다. 기능 비교, 가격 분석, 포지셔닝 전략을 제공합니다.', tags: ['경쟁분석', '전략'], stars: 4.7, installs: 1, prompt: '이 스킬은 경쟁사 분석 및 차별화 전략 수립이 필요할 때 사용합니다. 경쟁 제품과의 기능 비교, 가격 포지셔닝, 차별점을 분석합니다. "경쟁사 분석해줘", "경쟁 전략 만들어줘" 요청에 활성화됩니다.' },
    { id: 'deslop', name: '디슬롭', nameEn: 'deslop', category: 'skills', desc: 'AI 생성 코드의 불필요한 요소를 제거합니다. 과도한 주석, 불필요한 추상화, 패턴 남용을 정리합니다.', tags: ['리팩토링', '품질'], stars: 4.7, installs: 1, prompt: '이 스킬은 AI 생성 코드 품질 개선이 필요할 때 사용합니다. 불필요한 복잡성, 과도한 추상화, AI 코드 특유의 패턴을 제거합니다. "AI 코드 정리해줘", "코드 단순화해줘" 요청에 활성화됩니다.' },
    { id: 'agent-memory-mcp', name: '에이전트 메모리 MCP', nameEn: 'agent-memory-mcp', category: 'skills', desc: 'MCP 기반의 하이브리드 에이전트 메모리 시스템. 세션 간 지식을 유지하고 검색합니다.', tags: ['메모리', 'MCP'], stars: 4.7, installs: 1, prompt: '이 스킬은 MCP를 활용한 에이전트 영구 메모리 구현이 필요할 때 사용합니다. 세션 간 컨텍스트 유지, 지식 저장, 검색을 지원합니다. "에이전트 메모리 MCP 구현해줘", "영구 메모리 시스템 만들어줘" 요청에 활성화됩니다.' },
    { id: 'playwright', name: 'Playwright', nameEn: 'playwright', category: 'skills', desc: 'Playwright 브라우저 자동화 및 테스트 스킬. 다중 브라우저 테스트, 스크래핑, UI 테스트를 지원합니다.', tags: ['Playwright', '자동화'], stars: 4.7, installs: 1, prompt: '이 스킬은 Playwright 기반 자동화가 필요한 모든 상황에 사용합니다. 크로스 브라우저 테스트, 스크린샷 캡처, 폼 자동화를 구현합니다. "Playwright로 자동화해줘", "브라우저 테스트 만들어줘" 요청에 활성화됩니다.' },
    { id: 'matplotlib', name: 'Matplotlib', nameEn: 'matplotlib', category: 'skills', desc: 'Matplotlib를 활용한 Python 데이터 시각화. 플롯, 그래프, 히스토그램, 히트맵을 생성합니다.', tags: ['시각화', 'Python'], stars: 4.7, installs: 1, prompt: '이 스킬은 Python Matplotlib 기반 데이터 시각화가 필요할 때 사용합니다. 라인 차트, 바 차트, 산점도, 복합 플롯을 생성합니다. "Matplotlib 그래프 만들어줘", "Python 시각화 만들어줘" 요청에 활성화됩니다.' },
    { id: 'agent-evaluation', name: '에이전트 평가', nameEn: 'agent-evaluation', category: 'skills', desc: 'AI 에이전트 성능을 평가하고 개선합니다. 테스트 케이스, 벤치마크, 성능 지표를 설계합니다.', tags: ['평가', '에이전트'], stars: 4.7, installs: 1, prompt: '이 스킬은 AI 에이전트 성능 평가가 필요할 때 사용합니다. 평가 프레임워크, 테스트 케이스, 성능 지표 설계를 지원합니다. "에이전트 평가해줘", "AI 성능 측정해줘" 요청에 활성화됩니다.' },
    { id: 'scientific-brainstorming', name: '과학적 브레인스토밍', nameEn: 'scientific-brainstorming', category: 'skills', desc: '과학적 연구 아이디어와 가설을 체계적으로 도출합니다. 연구 갭 분석, 가설 생성, 연구 설계를 지원합니다.', tags: ['리서치', '과학'], stars: 4.7, installs: 1, prompt: '이 스킬은 과학 연구 아이디어 발굴이 필요할 때 사용합니다. 연구 질문 설정, 가설 도출, 실험 설계를 체계적으로 지원합니다. "연구 아이디어 브레인스토밍해줘", "과학적 가설 만들어줘" 요청에 활성화됩니다.' },
    { id: 'interactive-portfolio', name: '인터랙티브 포트폴리오', nameEn: 'interactive-portfolio', category: 'skills', desc: '인터랙티브한 개발자 포트폴리오 웹사이트를 구축합니다. 프로젝트 쇼케이스, 애니메이션, 반응형 디자인을 포함합니다.', tags: ['포트폴리오', '웹'], stars: 4.7, installs: 1, prompt: '이 스킬은 인터랙티브 포트폴리오 웹사이트 제작이 필요할 때 사용합니다. 프로젝트 갤러리, 스킬 시각화, 애니메이션 효과를 구현합니다. "포트폴리오 만들어줘", "개발자 웹사이트 만들어줘" 요청에 활성화됩니다.' },
    { id: 'conversation-memory', name: '대화 메모리', nameEn: 'conversation-memory', category: 'skills', desc: '대화 컨텍스트와 세션 정보를 저장하고 관리합니다. 이전 대화 내용을 기억하고 연속성을 유지합니다.', tags: ['메모리', '컨텍스트'], stars: 4.7, installs: 1, prompt: '이 스킬은 대화 기록 관리 및 컨텍스트 유지가 필요할 때 사용합니다. 중요한 정보를 저장하고 다음 세션에서 불러오는 방법을 구현합니다. "대화 내용 기억해줘", "컨텍스트 유지해줘" 요청에 활성화됩니다.' },
    { id: 'best-practices', name: '최신 모범 사례', nameEn: 'best-practices', category: 'skills', desc: '현대 웹 개발의 최신 모범 사례를 적용합니다. 성능, 접근성, SEO, 보안을 통합적으로 개선합니다.', tags: ['모범사례', '웹'], stars: 4.7, installs: 1, prompt: '이 스킬은 최신 웹 개발 표준 및 모범 사례 적용이 필요할 때 사용합니다. Core Web Vitals, 접근성, 보안 헤더, SEO 최적화를 종합적으로 지원합니다. "모범 사례 적용해줘", "웹 표준 개선해줘" 요청에 활성화됩니다.' },
    { id: 'notebooklm', name: 'NotebookLM', nameEn: 'notebooklm', category: 'skills', desc: 'NotebookLM 지식베이스를 조회하고 활용합니다. 문서 분석, 요약, 인사이트 도출을 지원합니다.', tags: ['AI', '지식관리'], stars: 4.7, installs: 1, prompt: '이 스킬은 NotebookLM을 활용한 문서 분석 및 지식 관리가 필요할 때 사용합니다. 업로드된 문서에서 인사이트를 추출하고 요약합니다. "NotebookLM에서 조회해줘", "문서 인사이트 찾아줘" 요청에 활성화됩니다.' },
    { id: 'langgraph', name: 'LangGraph', nameEn: 'langgraph', category: 'skills', desc: 'LangGraph를 활용한 상태 기반 멀티 에이전트 워크플로우를 개발합니다. 조건부 분기, 상태 관리를 구현합니다.', tags: ['LangGraph', 'AI'], stars: 4.7, installs: 1, prompt: '이 스킬은 LangGraph 기반 복잡한 에이전트 워크플로우 개발이 필요할 때 사용합니다. 그래프 기반 상태 머신, 체크포인트, 병렬 실행을 구현합니다. "LangGraph 워크플로우 만들어줘", "상태 기반 에이전트 구현해줘" 요청에 활성화됩니다.' },
    { id: 'frontend-to-backend-requirements', name: '프론트엔드-백엔드 요구사항', nameEn: 'frontend-to-backend-requirements', category: 'skills', desc: '프론트엔드 요구사항을 백엔드 API 명세로 변환합니다. 인터페이스 계약, 데이터 모델을 정의합니다.', tags: ['API', '설계'], stars: 4.7, installs: 1, prompt: '이 스킬은 프론트엔드 요구사항을 백엔드 사양으로 변환할 때 사용합니다. UI 요구사항에서 API 엔드포인트, 데이터 모델을 도출합니다. "API 사양 만들어줘", "프론트엔드 요구사항을 API로 변환해줘" 요청에 활성화됩니다.' },
    { id: 'feature-design-assistant', name: '기능 설계 보조', nameEn: 'feature-design-assistant', category: 'skills', desc: '새로운 기능 설계를 지원합니다. 요구사항 분석, 기술 설계, 구현 계획을 수립합니다.', tags: ['설계', '기능'], stars: 4.7, installs: 1, prompt: '이 스킬은 새 기능 설계 및 구현 계획이 필요할 때 사용합니다. 기능 요구사항 분석, 기술 스펙 작성, 작업 분해를 지원합니다. "기능 설계해줘", "새 기능 구현 계획 만들어줘" 요청에 활성화됩니다.' },
    { id: 'autonomous-agents', name: '자율 에이전트', nameEn: 'autonomous-agents', category: 'skills', desc: '자율적으로 목표를 달성하는 AI 에이전트를 개발합니다. 자기 반성, 계획 수정, 도구 활용을 구현합니다.', tags: ['AI', '자율'], stars: 4.7, installs: 1, prompt: '이 스킬은 자율 목표 달성 AI 에이전트 개발이 필요할 때 사용합니다. 목표 분해, 계획 실행, 반성 및 재계획 사이클을 구현합니다. "자율 에이전트 만들어줘", "자율 실행 AI 구현해줘" 요청에 활성화됩니다.' },
    { id: 'analytics-tracking', name: '애널리틱스 추적', nameEn: 'analytics-tracking', category: 'skills', desc: '웹 분석 추적 코드를 구현합니다. GA4, Mixpanel, Amplitude 이벤트 트래킹을 설정합니다.', tags: ['애널리틱스', '추적'], stars: 4.7, installs: 1, prompt: '이 스킬은 사용자 행동 분석 추적 구현이 필요할 때 사용합니다. 클릭, 페이지뷰, 전환 이벤트 추적 코드를 설정합니다. "애널리틱스 추적 구현해줘", "이벤트 트래킹 설정해줘" 요청에 활성화됩니다.' },
    { id: 'excalidraw', name: 'Excalidraw', nameEn: 'excalidraw', category: 'skills', desc: 'Excalidraw 다이어그램 파일 작업 스킬. 손그림 스타일 다이어그램과 기술 도식을 생성합니다.', tags: ['다이어그램', '시각화'], stars: 4.7, installs: 1, prompt: '이 스킬은 Excalidraw 다이어그램 작성이 필요할 때 사용합니다. 플로우차트, 아키텍처 도식, 개념도를 손그림 스타일로 만듭니다. "Excalidraw 다이어그램 만들어줘", "손그림 도식 그려줘" 요청에 활성화됩니다.' },
    { id: 'telegram-bot-builder', name: '텔레그램 봇 빌더', nameEn: 'telegram-bot-builder', category: 'skills', desc: 'Telegram Bot API를 활용한 봇을 개발합니다. 명령어 처리, 인라인 키보드, 미디어 전송을 구현합니다.', tags: ['텔레그램', '봇'], stars: 4.7, installs: 1, prompt: '이 스킬은 Telegram 봇 개발이 필요할 때 사용합니다. 메시지 처리, 인라인 쿼리, 웹훅 설정, 사용자 관리를 구현합니다. "텔레그램 봇 만들어줘", "Telegram Bot 개발해줘" 요청에 활성화됩니다.' },
    { id: 'agents-llamaindex', name: 'LlamaIndex 에이전트', nameEn: 'agents-llamaindex', category: 'skills', desc: 'LlamaIndex를 활용한 데이터 프레임워크 기반 RAG 시스템 및 AI 에이전트를 개발합니다.', tags: ['LlamaIndex', 'RAG'], stars: 4.7, installs: 1, prompt: '이 스킬은 LlamaIndex 기반 RAG 및 에이전트 개발이 필요할 때 사용합니다. 문서 인덱싱, 쿼리 엔진, 에이전트 도구를 구성합니다. "LlamaIndex RAG 만들어줘", "문서 기반 AI 만들어줘" 요청에 활성화됩니다.' },
    { id: 'github-actions-creator', name: 'GitHub Actions 제작기', nameEn: 'github-actions-creator', category: 'skills', desc: 'GitHub Actions 워크플로우를 생성합니다. CI/CD, 자동 테스트, 배포 파이프라인을 구성합니다.', tags: ['GitHub', 'CI/CD'], stars: 4.7, installs: 1, prompt: '이 스킬은 GitHub Actions 워크플로우 작성이 필요할 때 사용합니다. 테스트 자동화, 배포 파이프라인, 코드 품질 검사를 구성합니다. "GitHub Actions 만들어줘", "CI/CD 워크플로우 구성해줘" 요청에 활성화됩니다.' },
    { id: 'meeting-insights-analyzer', name: '미팅 인사이트 분석기', nameEn: 'meeting-insights-analyzer', category: 'skills', desc: '회의록 및 미팅 노트를 분석합니다. 핵심 결정사항, 액션 아이템, 주요 인사이트를 추출합니다.', tags: ['미팅', '분석'], stars: 4.7, installs: 1, prompt: '이 스킬은 회의 내용 분석 및 정리가 필요할 때 사용합니다. 결정 사항, 해야 할 일, 다음 단계를 자동으로 추출합니다. "회의록 분석해줘", "미팅 내용 정리해줘" 요청에 활성화됩니다.' },
    { id: 'page-cro', name: '페이지 CRO', nameEn: 'page-cro', category: 'skills', desc: '웹 페이지 전환율을 최적화합니다. A/B 테스트 설계, CTA 개선, 사용자 흐름 최적화를 지원합니다.', tags: ['CRO', '마케팅'], stars: 4.7, installs: 1, prompt: '이 스킬은 페이지 전환율 최적화가 필요할 때 사용합니다. 랜딩 페이지 분석, CTA 버튼 최적화, 폼 디자인 개선을 지원합니다. "전환율 최적화해줘", "CRO 분석해줘" 요청에 활성화됩니다.' },
    { id: 'citation-management', name: '인용 관리', nameEn: 'citation-management', category: 'skills', desc: '학술 인용 및 참고문헌을 관리합니다. APA, MLA, Chicago 형식의 참고문헌을 자동 생성합니다.', tags: ['학술', '인용'], stars: 4.7, installs: 1, prompt: '이 스킬은 학술 인용 및 참고문헌 관리가 필요할 때 사용합니다. 다양한 인용 형식으로 참고문헌 목록을 생성합니다. "인용 형식 만들어줘", "참고문헌 정리해줘" 요청에 활성화됩니다.' },
    { id: 'wordpress-penetration-testing', name: 'WordPress 침투 테스팅', nameEn: 'wordpress-penetration-testing', category: 'skills', desc: 'WordPress 사이트 보안 취약점을 테스트합니다. 플러그인 취약점, 관리자 페이지 보안을 검사합니다.', tags: ['WordPress', '보안'], stars: 4.7, installs: 1, prompt: '이 스킬은 WordPress 사이트 보안 감사가 필요할 때 사용합니다. 취약한 플러그인, 기본 설정 문제, 파일 업로드 취약점을 검사합니다. "WordPress 보안 테스트해줘", "WP 취약점 찾아줘" 요청에 활성화됩니다.' },
    { id: 'quality-documentation-manager', name: '품질 문서 관리자', nameEn: 'quality-documentation-manager', category: 'skills', desc: '프로젝트 문서의 품질을 관리합니다. 문서 일관성, 정확성, 최신성을 유지하는 프로세스를 구축합니다.', tags: ['문서', '품질'], stars: 4.7, installs: 1, prompt: '이 스킬은 프로젝트 문서 품질 관리가 필요할 때 사용합니다. 문서 검토 프로세스, 업데이트 추적, 일관성 검사를 지원합니다. "문서 품질 관리해줘", "문서 표준 수립해줘" 요청에 활성화됩니다.' },
    { id: 'micro-saas-launcher', name: '마이크로 SaaS 런처', nameEn: 'micro-saas-launcher', category: 'skills', desc: '마이크로 SaaS 제품을 빠르게 기획하고 출시합니다. MVP 정의, 기술 스택 선택, 런치 전략을 지원합니다.', tags: ['SaaS', '스타트업'], stars: 4.7, installs: 1, prompt: '이 스킬은 마이크로 SaaS 제품 출시가 필요할 때 사용합니다. MVP 기능 정의, 기술 스택, 수익 모델, 초기 마케팅 전략을 수립합니다. "마이크로 SaaS 만들어줘", "빠른 제품 출시 계획 세워줘" 요청에 활성화됩니다.' },
    { id: 'command-development', name: '명령어 개발', nameEn: 'command-development', category: 'skills', desc: 'Claude Code 슬래시 커맨드를 개발합니다. 명령어 구조, 파라미터, 실행 로직을 설계합니다.', tags: ['명령어', '개발'], stars: 4.7, installs: 1, prompt: '이 스킬은 Claude Code 슬래시 커맨드 제작이 필요할 때 사용합니다. 명령어 마크다운 파일 구조, 활성화 조건, 실행 지침을 작성합니다. "슬래시 커맨드 만들어줘", "Claude 명령어 개발해줘" 요청에 활성화됩니다.' },
    { id: 'code-review-excellence', name: '코드 리뷰 엑설런스', nameEn: 'code-review-excellence', category: 'skills', desc: '게이트키핑이 아닌 지식 공유로 코드 리뷰를 전환. 건설적 피드백, 체계적 분석, 협업적 개선을 지원합니다.', tags: ['productivity', '코드리뷰'], stars: 4.9, installs: 4200, prompt: `# Code Review Excellence — 코드 리뷰 엑설런스

게이트키핑이 아닌 "지식 공유"로서의 코드 리뷰를 수행합니다. 건설적 피드백, 체계적 분석, 협업적 개선을 통해 팀 전체의 코드 품질과 학습 속도를 동시에 높입니다.

## 이 스킬을 사용해야 할 때
- 풀 리퀘스트와 코드 변경을 리뷰할 때
- 팀의 코드 리뷰 표준을 수립할 때
- 리뷰 피드백을 통해 동료를 멘토링할 때
- 정확성, 보안, 성능을 감사해야 할 때

## 사용하지 말아야 할 때
- 리뷰할 코드 변경이 없는 경우
- 코드가 없는 설계 논의
- 리뷰가 아니라 직접 수정이 필요한 경우

## 수행 지침
1. 먼저 배경, 요구사항, 테스트 신호를 읽는다.
2. 정확성 → 보안 → 성능 → 유지보수성 순서로 리뷰.
3. 심각도와 근거가 포함된 실행 가능한 피드백을 남긴다.
4. 의도가 불분명하면 명확화 질문을 먼저 던진다.
5. 세부 체크리스트가 필요하면 playbook을 펼친다.

## 출력 형식
- 발견 사항 요약
- 심각도별 이슈 그룹(차단, 중요, 사소)
- 개선 제안과 질문
- 테스트 및 커버리지 노트

## 피드백 작성 원칙
- 사람이 아닌 코드를 평가한다.
- 명령형 대신 "~하면 어떨까요?" 화법 사용.
- 문제만 지적하지 말고 대안을 함께 제시.
- 긍정적 발견도 반드시 언급(강화).
- 이유(Why)를 함께 적어 학습 기회로 만든다.

## 활성화 예시
"PR #123 리뷰해줘", "이 변경사항 검토해줘", "코드 리뷰 체크리스트 만들어줘" 등의 요청에 자동 활성화됩니다.` },
    { id: 'debugging-strategies', name: '디버깅 전략', nameEn: 'debugging-strategies', category: 'skills', desc: '당혹스러운 추측이 아닌 체계적 문제 해결로 디버깅을 전환합니다. 입증된 전략과 도구, 방법론을 활용합니다.', tags: ['productivity', '디버깅'], stars: 4.9, installs: 4050, prompt: `# Debugging Strategies — 디버깅 전략

혼란스러운 추측이 아닌 체계적 문제 해결 방식으로 디버깅을 수행합니다. 검증된 전략, 강력한 도구, 방법론적 접근을 결합합니다.

## 이 스킬을 사용해야 할 때
- 재현이 어려운 버그를 추적할 때
- 성능 이슈를 조사할 때
- 프로덕션 장애를 분석할 때
- 크래시 덤프나 스택 트레이스를 해석할 때
- 분산 시스템 디버깅

## 사용하지 말아야 할 때
- 재현 가능한 이슈나 관찰 가능한 증상이 없을 때
- 순수한 기능 개발 작업
- 로그, 트레이스, 런타임 신호에 접근할 수 없을 때

## 수행 지침
1. 문제를 재현하고 로그·트레이스·환경 세부정보를 수집.
2. 가설을 세우고 통제된 실험을 설계.
3. 이분 탐색과 타깃 계측으로 범위를 좁힌다.
4. 발견을 문서화하고 수정을 검증.
5. 세부 플레이북이 필요하면 playbook 열기.

## 단계별 체크리스트
### 1) 재현 단계
- 최소 재현 케이스 확보
- 환경 변수, OS, 런타임 버전 기록
- 간헐성이면 발생 조건(시간대, 트래픽 양)을 메모

### 2) 관찰 단계
- 로그 레벨 상향, 대상 함수에 계측 삽입
- 네트워크 탭, 브레이크포인트, strace/dtrace 활용
- 정상 경로와 실패 경로의 차이를 대조

### 3) 가설 단계
- "이게 원인이라면 어떤 증거가 있어야 하는가" 질문
- 서로 배타적인 2~3개 가설 병렬 수립
- 가장 검증이 빠른 가설부터 우선순위

### 4) 검증 단계
- 한 번에 한 변수만 변경
- git bisect로 도입 커밋 특정
- 수정 후 회귀 테스트 추가

### 5) 마무리
- 근본 원인 분석(RCA) 문서 작성
- 팀 위키에 교훈 공유
- 모니터링/경보로 재발 방지

## 활성화 예시
"이 버그 원인 찾아줘", "500 에러 디버깅 도와줘", "스택 트레이스 해석해줘" 요청에 활성화됩니다.` },
    { id: 'crafting-effective-readmes', name: '효과적인 README 작성', nameEn: 'crafting-effective-readmes', category: 'skills', desc: '독자에 맞춘 README를 작성하고 개선합니다. 프로젝트 유형별 템플릿과 체크리스트를 제공합니다.', tags: ['productivity', '문서화'], stars: 4.8, installs: 3820, prompt: `# Crafting Effective READMEs — 효과적인 README 작성

README는 독자의 질문에 답하는 문서입니다. 오픈소스 기여자가 보는 README와, 3개월 뒤의 본인이 보는 README는 달라야 합니다. **항상 먼저 묻기**: "누가 읽을 것이며, 그들이 무엇을 알아야 하는가?"

## 프로세스

### 1단계: 작업 유형 식별
| 작업 | 사용 시점 |
|------|----------|
| **생성** | 새 프로젝트, README가 아직 없음 |
| **추가** | 새로 문서화할 내용 있음 |
| **갱신** | 기능이 바뀌어 내용이 낡음 |
| **검토** | 여전히 정확한지 점검 |

### 2단계: 작업별 질문
**신규 README 생성 시**
1. 어떤 종류의 프로젝트인가?
2. 한 문장으로 해결하는 문제는?
3. "동작한다"까지의 최단 경로는?
4. 강조할 특이사항은?

**섹션 추가 시**
1. 무엇을 문서화하는가?
2. 기존 구조에서 어느 위치?
3. 누구에게 가장 필요한가?

**기존 내용 갱신 시**
1. 무엇이 바뀌었는가?
2. 현재 README 읽고 낡은 섹션 식별
3. 구체적 편집 제안

**검토/리프레시 시**
1. 현재 README를 읽는다
2. 실제 프로젝트 상태(package.json, 메인 파일 등)와 대조
3. 낡은 섹션 표시
4. "최근 검토일" 갱신

### 3단계: 항상 묻기
초안 작성 후: **"더 강조할 내용이나 빠진 건 없을까요?"**

## 프로젝트 유형별 템플릿

| 유형 | 독자 | 핵심 섹션 |
|------|------|-----------|
| **오픈소스** | 기여자, 전 세계 사용자 | 설치, 사용법, 기여, 라이선스 |
| **개인** | 미래의 나, 포트폴리오 방문자 | 무엇인가, 스택, 배운 점 |
| **사내** | 동료, 신규 입사자 | 셋업, 아키텍처, 런북 |
| **설정** | 헷갈리는 미래의 나 | 뭐가 있는지, 왜, 확장 방법, 함정 |

모호하면 사용자에게 물어본다. 모든 것을 오픈소스 기준으로 가정하지 말 것.

## 모든 유형의 필수 섹션
1. **이름** — 자명한 제목
2. **설명** — 무엇/왜를 1~2문장으로
3. **사용법** — 예제와 함께 어떻게 쓰는지

## 자주 하는 실수
- 설치 방법은 있지만 "왜 쓰는지"가 빠짐
- 스크린샷이나 데모 GIF 부재
- 기여 방법이 불명확
- 라이선스 누락
- 배지만 있고 실제 상태 설명이 없음

## 활성화 예시
"README 만들어줘", "README 개선해줘", "프로젝트 문서 템플릿 만들어줘" 요청에 활성화됩니다.` },
    { id: 'commit-work', name: '커밋 작업', nameEn: 'commit-work', category: 'skills', desc: '고품질 git 커밋 생성. 의도한 변경만 스테이징하고, 논리적 단위로 분할하며, 명확한 메시지를 작성합니다.', tags: ['git', 'productivity'], stars: 4.9, installs: 4500, prompt: `# Commit Work — 커밋 작업

리뷰하기 쉽고 배포하기 안전한 커밋을 만듭니다:
- 의도한 변경만 포함
- 논리적 단위로 쪼개진 커밋
- 무엇이/왜 바뀌었는지 설명하는 메시지

## 빠진 경우 물어봐야 할 입력
- 단일 커밋 vs 여러 커밋? (불분명하면 관련 없는 변경이 있을 때 여러 개로 기본값)
- 커밋 스타일: Conventional Commits 필수.
- 규칙: 제목 최대 길이, 요구 스코프.

## 워크플로 체크리스트

### 1) 스테이징 전에 작업 트리 점검
\`\`\`
git status
git diff
git diff --stat  # 변경이 많을 때
\`\`\`

### 2) 커밋 경계 결정 (필요 시 분할)
- 기능 vs 리팩토링
- 백엔드 vs 프론트엔드
- 포매팅 vs 로직
- 테스트 vs 프로덕션 코드
- 의존성 업그레이드 vs 동작 변경

한 파일에 혼재하면 \`git add -p\`로 패치 스테이징 계획.

### 3) 다음 커밋에 속하는 것만 스테이징
\`\`\`
git add -p                 # 혼재 변경은 패치 모드
git restore --staged -p    # 헝크 언스테이징
git restore --staged <path>
\`\`\`

### 4) 실제로 커밋될 내용 검토
\`\`\`
git diff --cached
\`\`\`
체크 항목:
- 비밀/토큰 없음
- 디버그 로그 남아있지 않음
- 관련 없는 포매팅 변경 없음

### 5) 스테이징된 변경을 1~2문장으로 설명
- "무엇이 바뀌었나?" + "왜?"
- 깔끔하게 설명이 안 되면 커밋이 너무 크거나 혼합 → 2단계로 복귀.

### 6) 커밋 메시지 작성 (Conventional Commits)
\`\`\`
type(scope): short summary
<blank>
body (what/why, implementation diary 아님)
<blank>
BREAKING CHANGE: ... (필요 시)
\`\`\`
멀티라인은 \`git commit -v\` 사용.

### 7) 가장 빠른 유의미한 검증 실행
유닛 테스트, 린트, 빌드 중 가장 빠른 것.

### 8) 작업 트리가 깨끗해질 때까지 반복

## 최종 산출물
- 최종 커밋 메시지
- 커밋별 요약(무엇/왜)
- 사용한 스테이징/검토 명령

## 활성화 예시
"커밋해줘", "커밋 메시지 만들어줘", "변경사항을 여러 커밋으로 쪼개줘" 요청에 활성화됩니다.` },
    { id: 'api-design-principles', name: 'API 설계 원칙', nameEn: 'api-design-principles', category: 'skills', desc: 'REST/GraphQL API 설계 원칙. 직관적이고 확장 가능하며 유지보수 가능한 API를 설계합니다.', tags: ['api', '개발'], stars: 4.9, installs: 3700, prompt: `# API Design Principles — API 설계 원칙

REST와 GraphQL API 설계 원칙을 적용해, 개발자에게 기쁨을 주고 오래가는 직관적·확장 가능·유지보수 가능한 API를 만듭니다.

## 이 스킬을 사용해야 할 때
- 새 REST/GraphQL API 설계
- 기존 API를 사용성 기준으로 리팩토링
- 팀 내 API 설계 표준 수립
- 구현 전에 API 스펙 리뷰
- API 패러다임 전환(REST → GraphQL 등)
- 개발자 친화적 API 문서 작성
- 특정 용도(모바일, 3자 통합) 최적화

## 사용하지 말아야 할 때
- 특정 프레임워크 구현 가이드만 필요한 경우
- API 계약과 무관한 인프라 전용 작업
- 공개 인터페이스를 바꾸거나 버저닝할 수 없는 경우

## 수행 지침
1. 소비자, 사용 사례, 제약을 정의.
2. API 스타일 선택 및 리소스/타입 모델링.
3. 에러, 버저닝, 페이지네이션, 인증 전략 명세.
4. 예제로 검증하고 일관성 리뷰.

## 핵심 원칙

### 리소스 네이밍
- 명사 사용, 복수형, 케밥 혹은 스네이크 케이스 일관되게
- 동사 대신 HTTP 메서드로 의도 표현
- 중첩은 2단계까지 (\`/users/{id}/orders\` OK, 더 깊어지면 쿼리 파라미터)

### HTTP 메서드 의미론
- GET: 안전·멱등, 본문 없음
- POST: 생성·비멱등 액션
- PUT: 전체 교체·멱등
- PATCH: 부분 수정
- DELETE: 삭제·멱등

### 상태 코드
- 2xx 성공: 200, 201, 204
- 4xx 클라이언트 오류: 400(검증), 401(미인증), 403(권한), 404(없음), 409(충돌), 422(의미 오류)
- 5xx 서버 오류: 500, 502, 503, 504

### 에러 응답 포맷 (RFC 7807 Problem Details)
\`\`\`json
{
  "type": "https://errors.example/validation",
  "title": "Validation failed",
  "status": 422,
  "detail": "email must be a valid address",
  "instance": "/users/123"
}
\`\`\`

### 페이지네이션
- 커서 기반 권장(무한 스크롤, 일관성)
- \`?cursor=xxx&limit=20\`, 응답에 \`next_cursor\`

### 버저닝
- URL 경로(\`/v1/users\`) 또는 \`Accept\` 헤더
- 단순함·발견 가능성 기준: URL 경로 선호

### 멱등성
- 멱등 키(\`Idempotency-Key\` 헤더) 지원
- POST에서도 중복 실행 방지 가능

## GraphQL 원칙
- 스키마 우선 설계, 네이밍 컨벤션 일관
- N+1 문제 → DataLoader
- 변이(Mutation) 입력은 single input object
- 페이지네이션은 Relay Cursor Connection 스펙

## 활성화 예시
"API 설계 리뷰해줘", "REST 엔드포인트 만들어줘", "GraphQL 스키마 검토해줘" 요청에 활성화됩니다.` },
    { id: 'async-python-patterns', name: '비동기 파이썬 패턴', nameEn: 'async-python-patterns', category: 'skills', desc: 'asyncio 기반 비동기 파이썬 애플리케이션 패턴. 동시성, async/await, 고성능 논블로킹 시스템 구축.', tags: ['python', 'async'], stars: 4.8, installs: 3100, prompt: `# Async Python Patterns — 비동기 파이썬 패턴

asyncio, 동시성 프로그래밍 패턴, async/await를 사용해 고성능·논블로킹 시스템을 구축하기 위한 종합 가이드.

## 이 스킬을 사용해야 할 때
- 비동기 웹 API (FastAPI, aiohttp, Sanic) 구축
- 동시 I/O 작업 (DB, 파일, 네트워크)
- 동시 요청 웹 스크레이퍼
- 실시간 앱 (WebSocket 서버, 채팅)
- 독립 작업 병렬 처리
- 비동기 통신 마이크로서비스
- I/O 바운드 워크로드 최적화
- 비동기 백그라운드 작업·큐

## 사용하지 말아야 할 때
- CPU 바운드가 지배적이고 I/O가 미미할 때
- 단순 동기 스크립트로 충분할 때
- 런타임 환경이 asyncio를 지원하지 않을 때

## 수행 지침
- 워크로드 특성(I/O vs CPU), 타깃, 런타임 제약을 명확히.
- 동시성 패턴 선택(task, gather, queue, pool)과 취소 규칙.
- 타임아웃, 백프레셔, 구조화된 에러 처리 추가.
- 비동기 코드 경로 테스트·디버깅 가이드 포함.

## 핵심 패턴

### 1) gather로 병렬 처리
\`\`\`python
import asyncio
async def fetch_all(urls):
    results = await asyncio.gather(
        *(fetch(u) for u in urls),
        return_exceptions=True
    )
    return results
\`\`\`

### 2) TaskGroup (Python 3.11+) — 구조화된 동시성
\`\`\`python
async def main():
    async with asyncio.TaskGroup() as tg:
        t1 = tg.create_task(worker(1))
        t2 = tg.create_task(worker(2))
    # 그룹 종료 시 모든 task 완료, 예외는 ExceptionGroup
\`\`\`

### 3) Semaphore로 동시성 제한
\`\`\`python
sem = asyncio.Semaphore(10)
async def bounded_fetch(url):
    async with sem:
        return await fetch(url)
\`\`\`

### 4) Queue 기반 생산자-소비자
\`\`\`python
queue = asyncio.Queue(maxsize=100)
async def producer():
    for item in items:
        await queue.put(item)
async def consumer():
    while True:
        item = await queue.get()
        try: await process(item)
        finally: queue.task_done()
\`\`\`

### 5) 타임아웃
\`\`\`python
# Python 3.11+
async with asyncio.timeout(5):
    data = await slow_call()

# 이전 버전
try:
    data = await asyncio.wait_for(slow_call(), timeout=5)
except asyncio.TimeoutError:
    ...
\`\`\`

### 6) CPU 바운드는 별도 풀
\`\`\`python
loop = asyncio.get_running_loop()
result = await loop.run_in_executor(None, cpu_heavy, x)
# ProcessPoolExecutor 권장 — GIL 우회
\`\`\`

### 7) 블로킹 I/O 래핑
\`\`\`python
data = await asyncio.to_thread(blocking_call, arg)
\`\`\`

## 자주 빠지는 함정
- async 함수 안에서 time.sleep() 사용 → asyncio.sleep()
- 블로킹 라이브러리(requests)를 async에서 직접 호출
- gather(return_exceptions=False)로 첫 예외에서 멈춤
- 취소(CancelledError)를 삼키는 try/except
- 전역 이벤트 루프 공유로 테스트가 엉킴

## 활성화 예시
"async 패턴 적용해줘", "asyncio gather로 병렬 처리해줘", "FastAPI에서 동시 호출 만들어줘" 요청에 활성화됩니다.` },
    { id: 'architecture-decision-records', name: '아키텍처 의사결정 기록 (ADR)', nameEn: 'architecture-decision-records', category: 'skills', desc: '중요한 기술적 의사결정의 맥락과 근거를 캡처하는 ADR 작성·유지 패턴.', tags: ['아키텍처', '문서화'], stars: 4.8, installs: 3300, prompt: `# Architecture Decision Records (ADR) — 아키텍처 의사결정 기록

중요한 기술적 의사결정의 맥락과 근거를 기록하는 ADR의 작성·유지·관리 종합 패턴.

## 이 스킬을 사용해야 할 때
- 중요 아키텍처 결정을 내릴 때
- 기술 선택을 문서화할 때
- 설계 트레이드오프를 기록할 때
- 신규 팀원을 온보딩할 때
- 과거 결정을 검토할 때
- 의사결정 프로세스를 수립할 때

## 사용하지 말아야 할 때
- 작은 구현 세부사항만 기록하는 경우
- 미세 패치나 루틴 유지보수
- 아키텍처 결정 자체가 없는 경우

## ADR이란?
- **맥락(Context)**: 왜 결정이 필요했나
- **결정(Decision)**: 무엇을 결정했나
- **결과(Consequences)**: 결과로 무엇이 생기나

## ADR을 작성할 때 vs 생략할 때
| ADR 작성 | 생략 |
|---------|------|
| 새 프레임워크 도입 | 마이너 버전 업그레이드 |
| DB 기술 선택 | 버그 수정 |
| API 설계 패턴 | 구현 디테일 |
| 보안 아키텍처 | 루틴 유지보수 |
| 통합 패턴 | 설정 변경 |

## 라이프사이클
\`\`\`
제안됨(Proposed) → 수락됨(Accepted) → 폐지됨(Deprecated) → 대체됨(Superseded)
                       ↓
                    거절됨(Rejected)
\`\`\`

## 표준 템플릿 (MADR 스타일)
\`\`\`markdown
# ADR-0001: PostgreSQL을 주 데이터베이스로 채택

## 상태
Accepted

## 맥락
신규 이커머스 플랫폼의 주 DB 선택이 필요함. 시스템은
- 동시 사용자 1만 명
- 계층형 카테고리의 복잡한 상품 카탈로그
- 주문·결제 트랜잭션
- 상품 전문 검색
을 다뤄야 함.

## 고려한 대안
1. PostgreSQL — 오픈소스, JSONB, 전문 검색, 강한 일관성
2. MySQL — 성숙, 널리 쓰임, 복잡 쿼리에 상대적으로 약함
3. MongoDB — 유연, 트랜잭션 보장 제한

## 결정
PostgreSQL 채택.

## 근거
- JSONB로 반정형 카탈로그 유연 처리
- pg_trgm / full_text search 내장
- 강한 트랜잭션 일관성 필요
- 운영 도구(PgBouncer, Patroni) 성숙

## 결과
**긍정적**: 확장성, 도구 생태계, 하나의 DB로 대부분 기능 커버.
**부정적**: 기본 HA 구성 복잡, 운영 전문성 필요.

## 관련 ADR
- ADR-0003: 연결 풀링 전략
- ADR-0008: 읽기 전용 복제본 전략
\`\`\`

## 저장소 구조
\`\`\`
docs/adr/
  0001-use-postgresql.md
  0002-api-versioning-strategy.md
  0003-event-driven-architecture.md
  README.md  (인덱스)
\`\`\`

## 작성 팁
- 파일명: \`NNNN-짧은-제목.md\`
- 번호는 되돌리지 않는다. 거절된 것도 번호 유지.
- 결정을 뒤집으면 새 ADR을 만들어 "Supersedes ADR-0005" 표기.
- "제안됨" 단계에서 PR로 토론 → 머지 시 "수락됨"으로 상태 변경.

## 활성화 예시
"이 결정에 대한 ADR 작성해줘", "아키텍처 선택 문서화해줘", "기술 스택 결정 기록 만들어줘" 요청에 활성화됩니다.` },
    { id: 'postgresql-optimization', name: 'PostgreSQL 최적화', nameEn: 'postgresql-optimization', category: 'skills', desc: 'PostgreSQL 쿼리 튜닝, 인덱싱 전략, 성능 분석, 운영 DB 관리 워크플로우.', tags: ['database', 'PostgreSQL'], stars: 4.9, installs: 3950, prompt: `# PostgreSQL Optimization — PostgreSQL 최적화 워크플로우

쿼리 튜닝, 인덱싱 전략, 성능 분석, 바큠 관리, 운영 DB 관리 등 PostgreSQL 최적화를 위한 전용 워크플로우.

## 사용 시점
- 느린 PostgreSQL 쿼리 최적화
- 인덱싱 전략 설계
- DB 성능 분석
- PostgreSQL 설정 튜닝
- 운영 DB 관리

## Phase 1: 성능 평가

**수행 액션**
1. DB 버전 확인 (\`SELECT version();\`)
2. 현재 설정 리뷰 (\`SHOW ALL;\`)
3. 느린 쿼리 분석 (\`pg_stat_statements\`)
4. 자원 사용량 확인
5. 병목 식별

\`\`\`sql
-- pg_stat_statements 상위 느린 쿼리
SELECT query, calls, total_exec_time, mean_exec_time
FROM pg_stat_statements
ORDER BY mean_exec_time DESC
LIMIT 20;
\`\`\`

## Phase 2: 쿼리 분석

**수행 액션**
1. EXPLAIN ANALYZE 실행
2. 스캔 타입 식별(Seq/Index/Bitmap)
3. 조인 전략 점검
4. 실행 시간 분석
5. 최적화 기회 탐색

\`\`\`sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT) SELECT ...;
\`\`\`

### 주의할 신호
- Seq Scan on large table → 인덱스 누락
- Nested Loop with large rows → 조인 순서 문제
- Bitmap Heap Scan with Recheck → 인덱스 선택성 낮음
- Sort spilled to disk → \`work_mem\` 증가 검토
- Rows 추정치와 실제값의 큰 차이 → 통계 갱신(\`ANALYZE\`)

## Phase 3: 인덱싱 전략

**수행 액션**
1. 누락 인덱스 식별
2. B-tree 인덱스 생성
3. 복합 인덱스 추가(왼쪽 접두사 규칙)
4. 부분 인덱스(WHERE절 포함)
5. 인덱스 사용률 검토

\`\`\`sql
-- 사용되지 않는 인덱스
SELECT s.relname AS table_name, i.indexrelid::regclass AS index_name
FROM pg_stat_user_indexes i
JOIN pg_stat_user_tables s ON s.relid = i.relid
WHERE i.idx_scan = 0 AND NOT s.relname LIKE 'pg_%';

-- 복합 인덱스 예
CREATE INDEX idx_orders_user_created
  ON orders (user_id, created_at DESC)
  WHERE status = 'active';
\`\`\`

## Phase 4: 쿼리 최적화

**수행 액션**
1. 비효율 쿼리 재작성
2. 조인 최적화
3. 필요 시 CTE 도입(Postgres 12+에서는 인라인화 가능)
4. 커서 기반 페이지네이션
5. 개선 측정

## Phase 5: 설정 튜닝
- \`shared_buffers\`: 메모리의 ~25%
- \`effective_cache_size\`: 메모리의 ~75%
- \`work_mem\`: 접속 수 × 예상 정렬 메모리 기준
- \`maintenance_work_mem\`: VACUUM/CREATE INDEX용
- \`max_wal_size\`: 쓰기 많은 시스템에서 증가
- \`random_page_cost\`: SSD면 1.1 권장

## Phase 6: VACUUM·ANALYZE·Bloat 관리
- \`autovacuum\` 튜닝: scale factor, threshold
- \`VACUUM FULL\`은 락이 강함 → 운영 중에는 \`pg_repack\` 검토
- \`ANALYZE\`로 통계 갱신 → 플래너 정확도 향상
- Bloat 검사: \`pgstattuple\`, \`pg_repack --dry-run\`

## Phase 7: 운영 모니터링
- Lock 경합: \`pg_locks\`, \`pg_stat_activity\`
- Replication lag: \`pg_stat_replication\`
- 연결 수: PgBouncer(트랜잭션 풀링) 고려
- 장기 실행 쿼리 감시 및 알림

## 활성화 예시
"느린 쿼리 최적화해줘", "인덱스 설계해줘", "PostgreSQL 성능 진단해줘" 요청에 활성화됩니다.` },
    { id: 'github-workflow-automation', name: 'GitHub 워크플로우 자동화', nameEn: 'github-workflow-automation', category: 'skills', desc: 'GitHub Actions를 활용한 CI/CD 및 저장소 자동화. 빌드, 테스트, 배포, 릴리스, PR 검사 자동화.', tags: ['github', 'CI/CD'], stars: 4.9, installs: 4300, prompt: `# GitHub Workflow Automation — GitHub 워크플로우 자동화

GitHub Actions를 활용해 CI/CD, 자동 리뷰, 릴리스, 보안 스캔 등 저장소 운영을 자동화합니다.

## 이 스킬을 사용해야 할 때
- CI/CD 파이프라인 구축
- PR 자동 검사(린트, 테스트, 커버리지)
- 자동 릴리스와 체인지로그
- 시크릿 스캔/의존성 감사 자동화
- 배포 자동화(Preview, Staging, Prod)
- Issue/PR 자동 라벨링, 분류

## 핵심 파일 구조
\`\`\`
.github/
  workflows/
    ci.yml
    release.yml
    deploy.yml
    security.yml
  dependabot.yml
  CODEOWNERS
  pull_request_template.md
  ISSUE_TEMPLATE/
    bug_report.md
    feature_request.md
\`\`\`

## 베이스 CI 템플릿 (Node/TypeScript)
\`\`\`yaml
name: CI
on:
  pull_request:
  push:
    branches: [main]
concurrency:
  group: ci-\\\${{ github.ref }}
  cancel-in-progress: true
jobs:
  lint-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - uses: pnpm/action-setup@v3
        with: { version: 9 }
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test --coverage
      - uses: codecov/codecov-action@v4
\`\`\`

## 릴리스 자동화 (semantic-release 대체: Changesets)
\`\`\`yaml
name: Release
on:
  push:
    branches: [main]
jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - uses: changesets/action@v1
        with:
          publish: pnpm release
          title: "chore(release): version packages"
          commit: "chore(release): version packages"
        env:
          GITHUB_TOKEN: \\\${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: \\\${{ secrets.NPM_TOKEN }}
\`\`\`

## Preview Deploy (Vercel)
\`\`\`yaml
name: Preview
on:
  pull_request:
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \\\${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \\\${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \\\${{ secrets.VERCEL_PROJECT_ID }}
\`\`\`

## 보안 스캔
\`\`\`yaml
name: Security
on:
  push:
  schedule: [{ cron: '0 3 * * *' }]
jobs:
  codeql:
    runs-on: ubuntu-latest
    permissions:
      security-events: write
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/init@v3
        with: { languages: javascript }
      - uses: github/codeql-action/analyze@v3
  secrets:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: gitleaks/gitleaks-action@v2
\`\`\`

## Dependabot 설정
\`\`\`yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule: { interval: "weekly" }
    groups:
      prod:  { dependency-type: "production" }
      dev:   { dependency-type: "development" }
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule: { interval: "weekly" }
\`\`\`

## 품질 향상 팁
- \`concurrency\`로 동일 브랜치의 중복 실행 취소
- \`matrix\`로 Node/OS 조합 병렬 실행
- \`cache: 'pnpm'\` 또는 \`actions/cache@v4\`로 빌드 시간 절약
- \`workflow_dispatch\`로 수동 트리거 허용(긴급 배포)
- 큰 워크플로는 \`reusable workflows\`로 분해
- 시크릿은 Environment 단위로 분리(prod/staging)
- \`permissions:\` 명시해 최소 권한 원칙

## 디버깅
- \`ACTIONS_STEP_DEBUG=true\` 시크릿으로 디버그 로그
- \`tmate\` 액션으로 일시 SSH 접속
- 실패 시 자동 아티팩트 업로드(로그, 스크린샷)

## 활성화 예시
"GitHub Actions 워크플로 만들어줘", "CI 파이프라인 개선해줘", "자동 릴리스 설정해줘" 요청에 활성화됩니다.` },
    { id: 'n8n-workflow-patterns', name: 'n8n 워크플로 패턴', nameEn: 'n8n-workflow-patterns', category: 'skills', desc: 'n8n 자동화 워크플로 설계 패턴. 트리거, 조건 분기, 에러 처리, 재시도, 시크릿 관리.', tags: ['automation', 'n8n'], stars: 4.8, installs: 2900, prompt: `# n8n Workflow Patterns — n8n 워크플로 패턴

n8n으로 견고한 자동화를 만들기 위한 패턴 모음. 트리거 설계, 조건 분기, 에러 처리, 데이터 매핑, 시크릿 관리, 재시도, 테스트까지 다룹니다.

## 이 스킬을 사용해야 할 때
- SaaS 간 데이터 동기화
- Webhook 처리 및 변환
- 예약 작업(Cron) 자동화
- 외부 API 호출 체인
- 승인 플로우(Slack/Email 알림)
- 내부 툴/대시보드용 데이터 수집

## 핵심 노드 카테고리
- **Trigger**: Webhook, Cron, Manual, IMAP, RabbitMQ
- **Action**: HTTP Request, Code(JS/Python), Database
- **Flow Control**: IF, Switch, Merge, SplitInBatches, Wait
- **Integration**: Slack, Notion, Airtable, Google Sheets, GitHub 등

## 기본 패턴

### 1) Idempotent Webhook
- Webhook 입력에서 외부 ID를 추출
- \`Key Value Store\` 또는 DB로 "이미 처리됨" 여부 확인
- 중복 실행 방지

### 2) Split → Process → Merge
\`\`\`
Webhook → SplitInBatches(10) → HTTP Request → Merge → Next
\`\`\`
대량 처리 시 API rate limit에 맞춰 배치 크기 조정.

### 3) IF / Switch 분기
- IF: 2분기
- Switch: N분기, 규칙 기반
- 매칭되지 않는 입력도 반드시 기본 경로 정의

### 4) 에러 처리
- 워크플로 설정: "Error Workflow" 지정
- 실패 시 별도 워크플로가 Slack/이메일로 알림
- 민감 정보는 로그에 남기지 않도록 주의

### 5) 재시도 전략
- HTTP Request 노드의 "Retry On Fail" 활성화
- 점진적 백오프는 Wait 노드로 직접 구성 가능
- 영구 실패는 Dead Letter Queue 역할의 테이블/DB에 저장

### 6) 시크릿 관리
- Credentials에 저장, 노드에서 참조만
- 절대 Code 노드 안에 하드코딩하지 않기
- 환경별로 credential 분리(dev/stage/prod)

## Code 노드 Best Practice
\`\`\`javascript
// JavaScript Code 노드
const items = $input.all();
return items.map(i => ({
  json: {
    id: i.json.id,
    email: i.json.email?.toLowerCase()?.trim(),
    normalized: true
  }
}));
\`\`\`
- $input.all() / $input.item / $json 의 차이를 숙지
- 에러 throw로 워크플로 일시 정지 가능

## 테스트·운영 팁
- "Pin Data" 기능으로 특정 노드 출력 고정 → 하류 노드 개발·테스트
- Webhook은 "Test URL"과 "Production URL" 두 가지 — 배포 전 반드시 Production URL로 전환
- 버전 관리: n8n 워크플로 JSON 내보내기 → Git에 커밋
- 모니터링: 실행 히스토리 보관 기간 설정, 장애 시 조회
- 타임아웃: HTTP Request 노드의 타임아웃 명시

## 복잡 패턴

### Saga / 보상 트랜잭션
여러 외부 API 호출이 있을 때 실패 시 이전 단계의 보상 호출(취소, 환불 등)을 체인으로 구성.

### Pub/Sub 확장
n8n + Redis Streams / RabbitMQ 조합. Webhook → 큐 → 다수 워커 워크플로.

### 휴먼 인 더 루프
Slack Interactive Message로 승인 요청 → 사용자 클릭 후 별도 Webhook로 이어지는 플로우.

## 활성화 예시
"n8n 워크플로 설계해줘", "Slack → Notion 자동화 만들어줘", "Webhook → DB 파이프라인 짜줘" 요청에 활성화됩니다.` }
  ],

  agents: [
    { id: 'frontend-developer', name: '프론트엔드 개발자', nameEn: 'frontend-developer', category: 'agents', desc: 'React, Vue, Angular 등 다양한 프레임워크를 활용한 완전한 프론트엔드 애플리케이션을 구축합니다.', tags: ['development-team', '프론트엔드'], stars: 4.9, installs: 26590, prompt: '이 에이전트는 완전한 프론트엔드 애플리케이션 개발이 필요할 때 사용합니다. 컴포넌트 설계부터 상태 관리, 성능 최적화까지 전문적으로 지원합니다. 사용법: "React 앱 만들어줘", "Vue 컴포넌트 개발해줘" 요청 시 자동 활성화됩니다.' },
    { id: 'code-reviewer', name: '코드 리뷰어', nameEn: 'code-reviewer', category: 'agents', desc: '코드 품질, 보안 취약점, 모범 사례를 중심으로 종합적인 코드 리뷰를 수행합니다.', tags: ['development-tools'], stars: 4.9, installs: 20547, prompt: '이 에이전트는 코드 품질 검토와 개선점 도출이 필요할 때 사용합니다. 보안 취약점, 성능 문제, 코딩 표준 위반을 체계적으로 분석합니다. 사용법: "이 코드 리뷰해줘", "PR 검토해줘" 요청 시 자동 활성화됩니다.' },
    { id: 'ui-ux-designer', name: 'UI/UX 디자이너', nameEn: 'ui-ux-designer', category: 'agents', desc: '사용자 인터페이스와 경험을 설계하는 전문 에이전트입니다. 디자인 시스템과 사용성을 개선합니다.', tags: ['development-team'], stars: 4.9, installs: 17361, prompt: '이 에이전트는 UI/UX 디자인 작업이 필요할 때 사용합니다. 와이어프레임, 프로토타입, 디자인 시스템 구축을 전문으로 지원합니다. "UI 디자인해줘", "UX 개선해줘" 요청 시 활성화됩니다.' },
    { id: 'backend-architect', name: '백엔드 아키텍트', nameEn: 'backend-architect', category: 'agents', desc: '고성능 백엔드 시스템과 API 아키텍처를 설계하는 전문 에이전트입니다.', tags: ['development-team', '백엔드'], stars: 4.9, installs: 16516, prompt: '이 에이전트는 백엔드 시스템 아키텍처 설계가 필요할 때 사용합니다. 마이크로서비스, API 설계, 데이터베이스 구조를 전문으로 지원합니다. "백엔드 구조 설계해줘", "API 아키텍처 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'fullstack-developer', name: '풀스택 개발자', nameEn: 'fullstack-developer', category: 'agents', desc: '데이터베이스, API, 프론트엔드 레이어를 아우르는 완전한 기능을 구축합니다.', tags: ['development-team'], stars: 4.9, installs: 11681, prompt: '이 에이전트는 풀스택 기능 구현이 필요할 때 사용합니다. 백엔드 API부터 프론트엔드 UI까지 하나의 응집된 단위로 개발합니다. "전체 기능 만들어줘", "풀스택 앱 개발해줘" 요청 시 활성화됩니다.' },
    { id: 'prompt-engineer', name: '프롬프트 엔지니어', nameEn: 'prompt-engineer', category: 'agents', desc: '프로덕션 LLM 시스템을 위한 프롬프트를 설계, 최적화, 테스트합니다.', tags: ['ai-specialists'], stars: 4.9, installs: 11527, prompt: '이 에이전트는 AI 프롬프트 설계와 최적화가 필요할 때 사용합니다. 프롬프트 템플릿 작성, A/B 테스트, 성능 평가를 전문으로 지원합니다. "프롬프트 최적화해줘", "AI 지시문 개선해줘" 요청 시 활성화됩니다.' },
    { id: 'debugger', name: '디버거', nameEn: 'debugger', category: 'agents', desc: '버그를 진단하고 수정하며, 오류 로그와 스택 트레이스를 분석하여 근본 원인을 파악합니다.', tags: ['development-tools'], stars: 4.9, installs: 8777, prompt: '이 에이전트는 버그 수정과 오류 분석이 필요할 때 사용합니다. 스택 트레이스 분석, 근본 원인 파악, 수정 방안 제시를 전문으로 합니다. "버그 찾아줘", "오류 원인 파악해줘" 요청 시 활성화됩니다.' },
    { id: 'python-pro', name: '파이썬 전문가', nameEn: 'python-pro', category: 'agents', desc: '타입 안전하고 프로덕션 준비된 Python 코드를 웹 API, 시스템 유틸리티, 복잡한 애플리케이션에 구축합니다.', tags: ['programming-languages', 'Python'], stars: 4.9, installs: 8247, prompt: '이 에이전트는 고급 Python 개발이 필요할 때 사용합니다. 타입 힌팅, 비동기 프로그래밍, 테스트, 패키징을 전문으로 지원합니다. "Python 코드 작성해줘", "FastAPI 서버 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'database-architect', name: '데이터베이스 아키텍트', nameEn: 'database-architect', category: 'agents', desc: '데이터베이스 스키마, 인덱스, 쿼리 최적화를 설계하는 전문 에이전트입니다.', tags: ['데이터베이스'], stars: 4.9, installs: 7703, prompt: '이 에이전트는 데이터베이스 설계와 최적화가 필요할 때 사용합니다. 스키마 설계, 인덱스 전략, 정규화, 성능 튜닝을 전문으로 지원합니다. "DB 스키마 설계해줘", "데이터베이스 최적화해줘" 요청 시 활성화됩니다.' },
    { id: 'context-manager', name: '컨텍스트 관리자', nameEn: 'context-manager', category: 'agents', desc: '개발 세션의 컨텍스트와 메모리를 효율적으로 관리하는 전문 에이전트입니다.', tags: ['development-tools'], stars: 4.9, installs: 7609, prompt: '이 에이전트는 긴 개발 세션에서 컨텍스트 관리가 필요할 때 사용합니다. 프로젝트 상태 추적, 이전 결정 참조, 일관성 유지를 지원합니다. "컨텍스트 정리해줘", "세션 요약해줘" 요청 시 활성화됩니다.' },
    { id: 'typescript-pro', name: '타입스크립트 전문가', nameEn: 'typescript-pro', category: 'agents', desc: '고급 타입 시스템 패턴, 복잡한 제네릭, 엔드투엔드 타입 안전성이 필요한 TypeScript 코드를 구현합니다.', tags: ['programming-languages', 'TypeScript'], stars: 4.9, installs: 6729, prompt: '이 에이전트는 고급 TypeScript 개발이 필요할 때 사용합니다. 복잡한 타입 정의, 제네릭, 타입 가드, 데코레이터를 전문으로 지원합니다. "TypeScript 타입 만들어줘", "타입 안전성 개선해줘" 요청 시 활성화됩니다.' },
    { id: 'test-engineer', name: '테스트 엔지니어', nameEn: 'test-engineer', category: 'agents', desc: '종합적인 테스트 전략을 수립하고 단위, 통합, E2E 테스트를 작성하는 전문 에이전트입니다.', tags: ['development-tools'], stars: 4.9, installs: 6415, prompt: '이 에이전트는 테스트 코드 작성과 테스트 전략 수립이 필요할 때 사용합니다. Jest, Cypress, Playwright 등 다양한 테스트 프레임워크를 지원합니다. "테스트 작성해줘", "테스트 커버리지 높여줘" 요청 시 활성화됩니다.' },
    { id: 'architect-review', name: '아키텍처 리뷰어', nameEn: 'architect-review', category: 'agents', desc: '아키텍처 일관성과 패턴을 검토하는 에이전트입니다. SOLID 원칙과 레이어링을 전문으로 합니다.', tags: ['expert-advisors'], stars: 4.9, installs: 6179, prompt: '이 에이전트는 코드 아키텍처 검토가 필요할 때 사용합니다. 설계 패턴, 의존성 관리, 레이어 분리를 분석하고 개선점을 제안합니다. "아키텍처 검토해줘", "설계 패턴 검토해줘" 요청 시 활성화됩니다.' },
    { id: 'security-auditor', name: '보안 감사관', nameEn: 'security-auditor', category: 'agents', desc: '시스템, 인프라, 프로세스에 대한 종합적인 보안 감사와 컴플라이언스 평가를 수행합니다.', tags: ['보안'], stars: 4.9, installs: 6098, prompt: '이 에이전트는 보안 감사와 취약점 평가가 필요할 때 사용합니다. OWASP, NIST 기준에 따른 체계적인 보안 검토를 제공합니다. "보안 감사해줘", "취약점 평가해줘" 요청 시 활성화됩니다.' },
    { id: 'ai-engineer', name: 'AI 엔지니어', nameEn: 'ai-engineer', category: 'agents', desc: '모델 선택부터 프로덕션 배포까지 엔드투엔드 AI 시스템을 설계하고 구현합니다.', tags: ['data-ai', 'AI'], stars: 4.9, installs: 5173, prompt: '이 에이전트는 AI 시스템 구축과 최적화가 필요할 때 사용합니다. LLM 통합, 벡터 데이터베이스, 파이프라인 설계를 전문으로 지원합니다. "AI 시스템 만들어줘", "LLM 통합해줘" 요청 시 활성화됩니다.' },
    { id: 'error-detective', name: '오류 탐정', nameEn: 'error-detective', category: 'agents', desc: '시스템에서 발생하는 오류를 진단하고, 서비스 간 오류를 상관관계로 분석하여 근본 원인을 파악합니다.', tags: ['development-tools'], stars: 4.9, installs: 5165, prompt: '이 에이전트는 복잡한 오류 패턴 분석이 필요할 때 사용합니다. 분산 시스템 오류, 로그 분석, 오류 재현 전략을 전문으로 지원합니다. "오류 원인 찾아줘", "버그 패턴 분석해줘" 요청 시 활성화됩니다.' },
    { id: 'task-decomposition-expert', name: '작업 분해 전문가', nameEn: 'task-decomposition-expert', category: 'agents', desc: '복잡한 작업을 관리 가능한 하위 작업으로 분해하는 전문 에이전트입니다.', tags: ['ai-specialists'], stars: 4.9, installs: 5040, prompt: '이 에이전트는 복잡한 프로젝트나 작업의 구조화가 필요할 때 사용합니다. 작업 의존성 분석, 우선순위 설정, 실행 계획 수립을 지원합니다. "작업 분해해줘", "프로젝트 계획 세워줘" 요청 시 활성화됩니다.' },
    { id: 'devops-engineer', name: 'DevOps 엔지니어', nameEn: 'devops-engineer', category: 'agents', desc: 'CI/CD 파이프라인, 인프라 자동화, 컨테이너화를 전문으로 하는 DevOps 에이전트입니다.', tags: ['development-team', 'DevOps'], stars: 4.9, installs: 4862, prompt: '이 에이전트는 DevOps 파이프라인 구축과 인프라 자동화가 필요할 때 사용합니다. Docker, Kubernetes, GitHub Actions 설정을 전문으로 지원합니다. "CI/CD 설정해줘", "배포 파이프라인 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'mobile-developer', name: '모바일 개발자', nameEn: 'mobile-developer', category: 'agents', desc: '네이티브 성능 최적화와 플랫폼별 기능이 필요한 크로스 플랫폼 모바일 애플리케이션을 구축합니다.', tags: ['development-team'], stars: 4.9, installs: 4752, prompt: '이 에이전트는 모바일 앱 개발이 필요할 때 사용합니다. React Native, Flutter를 활용한 iOS/Android 앱 개발을 전문으로 지원합니다. "모바일 앱 만들어줘", "크로스 플랫폼 앱 개발해줘" 요청 시 활성화됩니다.' },
    { id: 'search-specialist', name: '검색 전문가', nameEn: 'search-specialist', category: 'agents', desc: '고급 검색 기술과 다중 소스 검증을 활용한 전문 웹 리서처입니다.', tags: ['ai-specialists'], stars: 4.9, installs: 4573, prompt: '이 에이전트는 심층 웹 조사와 정보 수집이 필요할 때 사용합니다. 검색 연산자, 결과 필터링, 다중 소스 검증을 전문으로 합니다. "정보 찾아줘", "웹 검색해줘" 요청 시 활성화됩니다.' },
    { id: 'api-documenter', name: 'API 문서 작성자', nameEn: 'api-documenter', category: 'agents', desc: 'API 문서 작성, OpenAPI 명세 작성, 인터랙티브 문서 포털 구축을 전문으로 합니다.', tags: ['문서화', 'API'], stars: 4.9, installs: 4474, prompt: '이 에이전트는 API 문서 생성과 관리가 필요할 때 사용합니다. OpenAPI/Swagger 명세, 인터랙티브 예제, SDK 문서를 자동으로 생성합니다. "API 문서 만들어줘", "OpenAPI 스펙 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'mcp-expert', name: 'MCP 전문가', nameEn: 'mcp-expert', category: 'agents', desc: 'Model Context Protocol 서버 설계, 구현, 통합을 전문으로 하는 에이전트입니다.', tags: ['development-tools', 'MCP'], stars: 4.9, installs: 4359, prompt: '이 에이전트는 MCP 서버 개발과 통합이 필요할 때 사용합니다. MCP 프로토콜 구현, 도구 정의, 클라이언트 통합을 전문으로 지원합니다. "MCP 서버 만들어줘", "MCP 통합해줘" 요청 시 활성화됩니다.' },
    { id: 'documentation-expert', name: '문서화 전문가', nameEn: 'documentation-expert', category: 'agents', desc: '프로젝트 문서를 생성, 개선, 유지 관리하는 전문 에이전트입니다.', tags: ['expert-advisors', '문서화'], stars: 4.9, installs: 4201, prompt: '이 에이전트는 기술 문서 작성과 관리가 필요할 때 사용합니다. README, API 문서, 아키텍처 문서, 가이드 작성을 전문으로 지원합니다. "문서 작성해줘", "README 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'deployment-engineer', name: '배포 엔지니어', nameEn: 'deployment-engineer', category: 'agents', desc: 'CI/CD 파이프라인과 배포 자동화 전략을 설계, 구축, 최적화합니다.', tags: ['devops-infrastructure'], stars: 4.9, installs: 4125, prompt: '이 에이전트는 배포 파이프라인 구축과 자동화가 필요할 때 사용합니다. GitHub Actions, ArgoCD, 블루/그린 배포 전략을 전문으로 지원합니다. "배포 자동화해줘", "CD 파이프라인 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'javascript-pro', name: '자바스크립트 전문가', nameEn: 'javascript-pro', category: 'agents', desc: '브라우저, Node.js, 풀스택 애플리케이션을 위한 현대적인 JavaScript 코드를 구축합니다.', tags: ['programming-languages', 'JavaScript'], stars: 4.9, installs: 3709, prompt: '이 에이전트는 고급 JavaScript 개발이 필요할 때 사용합니다. ES2023+ 기능, 비동기 패턴, 모듈 시스템, 성능 최적화를 전문으로 지원합니다. "JS 코드 작성해줘", "Node.js 서버 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'nextjs-architecture-expert', name: 'Next.js 아키텍처 전문가', nameEn: 'nextjs-architecture-expert', category: 'agents', desc: 'Next.js 애플리케이션 아키텍처 설계와 최적화를 전문으로 하는 에이전트입니다.', tags: ['web-tools', 'Next.js'], stars: 4.9, installs: 3460, prompt: '이 에이전트는 Next.js 프로젝트 구조 설계가 필요할 때 사용합니다. App Router, Server Components, 캐싱 전략, 성능 최적화를 전문으로 지원합니다. "Next.js 아키텍처 설계해줘", "앱 구조 잡아줘" 요청 시 활성화됩니다.' },
    { id: 'technical-writer', name: '기술 문서 작성자', nameEn: 'technical-writer', category: 'agents', desc: 'API 레퍼런스, 사용자 가이드, SDK 문서 등 기술 문서를 생성하고 개선합니다.', tags: ['문서화'], stars: 4.9, installs: 3070, prompt: '이 에이전트는 전문적인 기술 문서 작성이 필요할 때 사용합니다. 개발자 가이드, 튜토리얼, 릴리즈 노트, 기술 사양서를 전문으로 작성합니다. "기술 문서 써줘", "개발자 가이드 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'database-optimization', name: '데이터베이스 최적화', nameEn: 'database-optimization', category: 'agents', desc: '데이터베이스 성능을 최적화하고 쿼리 효율성을 향상시키는 전문 에이전트입니다.', tags: ['데이터베이스'], stars: 4.9, installs: 2878, prompt: '이 에이전트는 데이터베이스 성능 문제 해결이 필요할 때 사용합니다. 슬로우 쿼리 분석, 인덱스 최적화, 실행 계획 분석을 전문으로 지원합니다. "DB 성능 개선해줘", "쿼리 최적화해줘" 요청 시 활성화됩니다.' },
    { id: 'supabase-schema-architect', name: 'Supabase 스키마 아키텍트', nameEn: 'supabase-schema-architect', category: 'agents', desc: 'Supabase 데이터베이스 스키마를 설계하고 최적화하는 전문 에이전트입니다.', tags: ['데이터베이스'], stars: 4.9, installs: 2844, prompt: '이 에이전트는 Supabase 프로젝트 스키마 설계가 필요할 때 사용합니다. RLS 정책, 관계 설계, 인덱스 전략을 Supabase에 최적화하여 지원합니다. "Supabase 스키마 설계해줘", "RLS 정책 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'performance-engineer', name: '성능 엔지니어', nameEn: 'performance-engineer', category: 'agents', desc: '애플리케이션 성능을 프로파일링하고 병목 현상을 찾아 최적화하는 전문 에이전트입니다.', tags: ['performance-testing', '성능'], stars: 4.9, installs: 2773, prompt: '이 에이전트는 애플리케이션 성능 문제 해결이 필요할 때 사용합니다. 프로파일링, 메모리 누수 탐지, 렌더링 성능 개선을 전문으로 지원합니다. "성능 개선해줘", "병목 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'react-performance-optimization', name: 'React 성능 최적화', nameEn: 'react-performance-optimization', category: 'agents', desc: 'React 애플리케이션의 렌더링 성능과 번들 크기를 최적화하는 전문 에이전트입니다.', tags: ['performance-testing', 'React', '성능'], stars: 4.9, installs: 2765, prompt: '이 에이전트는 React 앱 성능 최적화가 필요할 때 사용합니다. 불필요한 리렌더링 제거, 코드 스플리팅, 메모이제이션 전략을 전문으로 지원합니다. "React 최적화해줘", "렌더링 성능 개선해줘" 요청 시 활성화됩니다.' },
    { id: 'sql-pro', name: 'SQL 전문가', nameEn: 'sql-pro', category: 'agents', desc: 'PostgreSQL, MySQL 등에서 복잡한 SQL 쿼리 최적화와 효율적인 데이터베이스 스키마를 설계합니다.', tags: ['programming-languages'], stars: 4.9, installs: 2513, prompt: '이 에이전트는 복잡한 SQL 작업이 필요할 때 사용합니다. 고급 조인, 윈도우 함수, 쿼리 최적화, 저장 프로시저를 전문으로 지원합니다. "SQL 쿼리 작성해줘", "복잡한 쿼리 최적화해줘" 요청 시 활성화됩니다.' },
    { id: 'seo-analyzer', name: 'SEO 분석가', nameEn: 'seo-analyzer', category: 'agents', desc: 'SEO 기술 감사, 키워드 전략, 검색 순위 개선을 전문으로 하는 에이전트입니다.', tags: ['web-tools'], stars: 4.9, installs: 2473, prompt: '이 에이전트는 SEO 분석과 최적화가 필요할 때 사용합니다. 기술적 SEO 감사, 메타 태그 최적화, 사이트맵 생성을 전문으로 지원합니다. "SEO 분석해줘", "검색 최적화해줘" 요청 시 활성화됩니다.' },
    { id: 'content-marketer', name: '콘텐츠 마케터', nameEn: 'content-marketer', category: 'agents', desc: 'SEO 최적화된 마케팅 콘텐츠를 개발하고 멀티채널 콘텐츠 캠페인을 실행합니다.', tags: ['business-marketing'], stars: 4.9, installs: 2438, prompt: '이 에이전트는 마케팅 콘텐츠 전략 수립이 필요할 때 사용합니다. 블로그 포스트, 소셜 미디어 콘텐츠, 이메일 캠페인을 전문으로 지원합니다. "콘텐츠 전략 세워줘", "마케팅 글 써줘" 요청 시 활성화됩니다.' },
    { id: 'product-strategist', name: '제품 전략가', nameEn: 'product-strategist', category: 'agents', desc: '제품 전략을 수립하고 기능 우선순위를 결정하며 로드맵을 정의하는 전문 에이전트입니다.', tags: ['business-marketing'], stars: 4.9, installs: 2416, prompt: '이 에이전트는 제품 전략과 로드맵 수립이 필요할 때 사용합니다. 시장 분석, 경쟁사 비교, 기능 우선순위 결정을 전문으로 지원합니다. "제품 전략 세워줘", "로드맵 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'git-flow-manager', name: 'Git Flow 관리자', nameEn: 'git-flow-manager', category: 'agents', desc: 'Git Flow 워크플로우를 관리하고 브랜치 전략을 자동화하는 전문 에이전트입니다.', tags: ['git', 'Git'], stars: 4.9, installs: 2390, prompt: '이 에이전트는 Git 브랜치 관리와 워크플로우 자동화가 필요할 때 사용합니다. 피처, 릴리즈, 핫픽스 브랜치 관리를 전문으로 지원합니다. "Git 브랜치 관리해줘", "릴리즈 준비해줘" 요청 시 활성화됩니다.' },
    { id: 'technical-researcher', name: '기술 연구원', nameEn: 'technical-researcher', category: 'agents', desc: '코드 저장소, 기술 문서, 구현 세부 사항을 분석하고 기술 솔루션을 평가합니다.', tags: ['deep-research-team'], stars: 4.9, installs: 2389, prompt: '이 에이전트는 기술적 조사와 분석이 필요할 때 사용합니다. 라이브러리 비교, 기술 트레이드오프 분석, 구현 가능성 검토를 전문으로 지원합니다. "기술 조사해줘", "라이브러리 비교해줘" 요청 시 활성화됩니다.' },
    { id: 'business-analyst', name: '비즈니스 분석가', nameEn: 'business-analyst', category: 'agents', desc: '비즈니스 프로세스를 분석하고 요구사항을 수집하며 프로세스 개선 기회를 식별합니다.', tags: ['business-marketing'], stars: 4.9, installs: 2294, prompt: '이 에이전트는 비즈니스 요구사항 분석이 필요할 때 사용합니다. 프로세스 매핑, 요구사항 정의, 개선 방안 도출을 전문으로 지원합니다. "요구사항 분석해줘", "비즈니스 프로세스 개선해줘" 요청 시 활성화됩니다.' },
    { id: 'database-optimizer', name: '데이터베이스 최적화 전문가', nameEn: 'database-optimizer', category: 'agents', desc: '슬로우 쿼리를 분석하고 여러 시스템에서 데이터베이스 성능을 최적화합니다.', tags: ['데이터베이스'], stars: 4.9, installs: 2245, prompt: '이 에이전트는 데이터베이스 성능 튜닝이 필요할 때 사용합니다. EXPLAIN 분석, 인덱스 전략, 파티셔닝, 연결 풀링을 전문으로 지원합니다. "DB 최적화해줘", "슬로우 쿼리 개선해줘" 요청 시 활성화됩니다.' },
    { id: 'data-scientist', name: '데이터 과학자', nameEn: 'data-scientist', category: 'agents', desc: '데이터 패턴을 분석하고 예측 모델을 구축하며 데이터셋에서 통계적 인사이트를 도출합니다.', tags: ['data-ai'], stars: 4.9, installs: 2227, prompt: '이 에이전트는 데이터 분석과 머신러닝 모델링이 필요할 때 사용합니다. 탐색적 데이터 분석, 특성 공학, 모델 선택을 전문으로 지원합니다. "데이터 분석해줘", "예측 모델 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'cloud-architect', name: '클라우드 아키텍트', nameEn: 'cloud-architect', category: 'agents', desc: '대규모 클라우드 인프라 아키텍처를 설계, 평가, 최적화합니다.', tags: ['devops-infrastructure'], stars: 4.9, installs: 2160, prompt: '이 에이전트는 클라우드 인프라 설계가 필요할 때 사용합니다. AWS, GCP, Azure 멀티 클라우드 전략, 비용 최적화, 보안 설계를 전문으로 지원합니다. "클라우드 아키텍처 설계해줘", "인프라 최적화해줘" 요청 시 활성화됩니다.' },
    { id: 'test-automator', name: '테스트 자동화 전문가', nameEn: 'test-automator', category: 'agents', desc: '테스트 자동화 파이프라인을 구축하고 지능적인 테스트 실행을 최적화합니다.', tags: ['performance-testing'], stars: 4.9, installs: 2148, prompt: '이 에이전트는 테스트 자동화 구축이 필요할 때 사용합니다. E2E, 단위, 통합 테스트 자동화 파이프라인을 전문으로 지원합니다. "테스트 자동화해줘", "자동화 파이프라인 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'data-engineer', name: '데이터 엔지니어', nameEn: 'data-engineer', category: 'agents', desc: '데이터 파이프라인, ETL/ELT 프로세스, 데이터 인프라를 설계하고 구축합니다.', tags: ['data-ai'], stars: 4.9, installs: 2124, prompt: '이 에이전트는 데이터 파이프라인 구축이 필요할 때 사용합니다. Apache Spark, Airflow, dbt를 활용한 데이터 처리 파이프라인을 전문으로 지원합니다. "데이터 파이프라인 만들어줘", "ETL 구축해줘" 요청 시 활성화됩니다.' },
    { id: 'security-engineer', name: '보안 엔지니어', nameEn: 'security-engineer', category: 'agents', desc: '인프라 보안 설계와 보안 자동화를 전문으로 하는 에이전트입니다.', tags: ['devops-infrastructure', '보안'], stars: 4.9, installs: 2123, prompt: '이 에이전트는 보안 아키텍처 설계와 구현이 필요할 때 사용합니다. 제로 트러스트 보안, WAF 설정, 시크릿 관리를 전문으로 지원합니다. "보안 설계해줘", "인프라 보안 강화해줘" 요청 시 활성화됩니다.' },
    { id: 'data-analyst', name: '데이터 분석가', nameEn: 'data-analyst', category: 'agents', desc: '정량적 분석, 통계적 인사이트, 데이터 기반 연구를 수행하는 전문 에이전트입니다.', tags: ['deep-research-team'], stars: 4.9, installs: 2037, prompt: '이 에이전트는 데이터 분석과 시각화가 필요할 때 사용합니다. 통계 분석, 데이터 시각화, 인사이트 도출을 전문으로 지원합니다. "데이터 분석해줘", "통계 분석해줘" 요청 시 활성화됩니다.' },
    { id: 'api-security-audit', name: 'API 보안 감사', nameEn: 'api-security-audit', category: 'agents', desc: 'API 보안 취약점을 감사하고 인증, 권한 부여, 입력 유효성 검사를 검토합니다.', tags: ['API', '보안'], stars: 4.9, installs: 1914, prompt: '이 에이전트는 API 보안 감사가 필요할 때 사용합니다. API 키 노출, SQL 인젝션, 인증 우회 등 API 취약점을 전문으로 검사합니다. "API 보안 감사해줘", "API 취약점 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'ios-developer', name: 'iOS 개발자', nameEn: 'ios-developer', category: 'agents', desc: 'Swift와 SwiftUI를 활용한 iOS 앱 개발을 전문으로 하는 에이전트입니다.', tags: ['development-team'], stars: 4.9, installs: 1904, prompt: '이 에이전트는 iOS 앱 개발이 필요할 때 사용합니다. Swift, SwiftUI, UIKit, Core Data를 활용한 네이티브 iOS 개발을 전문으로 지원합니다. "iOS 앱 만들어줘", "Swift 코드 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'devops-troubleshooter', name: 'DevOps 문제 해결사', nameEn: 'devops-troubleshooter', category: 'agents', desc: 'DevOps 파이프라인과 인프라 문제를 진단하고 해결하는 전문 에이전트입니다.', tags: ['devops-infrastructure', 'DevOps'], stars: 4.9, installs: 1729, prompt: '이 에이전트는 DevOps 환경의 문제 해결이 필요할 때 사용합니다. 빌드 실패, 배포 오류, 컨테이너 문제를 전문으로 진단하고 해결합니다. "빌드 오류 해결해줘", "배포 문제 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'research-orchestrator', name: '연구 조율자', nameEn: 'research-orchestrator', category: 'agents', desc: '여러 전문 에이전트가 순서대로 작업하는 종합적인 연구 프로젝트를 조율합니다.', tags: ['deep-research-team'], stars: 4.9, installs: 1642, prompt: '이 에이전트는 복잡한 다단계 연구가 필요할 때 사용합니다. 연구 계획 수립, 전문 에이전트 조율, 결과 통합을 전문으로 지원합니다. "심층 연구해줘", "종합 분석해줘" 요청 시 활성화됩니다.' },
    { id: 'database-admin', name: '데이터베이스 관리자', nameEn: 'database-admin', category: 'agents', desc: '데이터베이스 운영, 백업, 복구, 모니터링을 전문으로 하는 에이전트입니다.', tags: ['데이터베이스'], stars: 4.9, installs: 1610, prompt: '이 에이전트는 데이터베이스 관리 작업이 필요할 때 사용합니다. 백업 전략, 복구 절차, 사용자 권한 관리, 모니터링 설정을 전문으로 지원합니다. "DB 관리해줘", "백업 설정해줘" 요청 시 활성화됩니다.' },
    { id: 'penetration-tester', name: '침투 테스터', nameEn: 'penetration-tester', category: 'agents', desc: '인가된 보안 침투 테스트를 수행하여 실제 취약점을 식별하고 검증합니다.', tags: ['보안'], stars: 4.9, installs: 1545, prompt: '이 에이전트는 보안 침투 테스트가 필요할 때 사용합니다. 네트워크 스캔, 취약점 익스플로잇, 보안 보고서 작성을 전문으로 지원합니다. "침투 테스트해줘", "보안 취약점 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'command-expert', name: '명령어 전문가', nameEn: 'command-expert', category: 'agents', desc: 'Claude Code 슬래시 커맨드를 설계하고 최적화하는 전문 에이전트입니다.', tags: ['development-tools'], stars: 4.9, installs: 1459, prompt: '이 에이전트는 Claude Code 명령어 제작과 최적화가 필요할 때 사용합니다. 명령어 구조 설계, 파라미터 정의, 실행 로직 작성을 전문으로 지원합니다. "명령어 만들어줘", "커맨드 최적화해줘" 요청 시 활성화됩니다.' },
    { id: 'report-generator', name: '보고서 생성기', nameEn: 'report-generator', category: 'agents', desc: '연구 결과를 종합하여 구조화된 최종 보고서로 변환하는 전문 에이전트입니다.', tags: ['deep-research-team'], stars: 4.9, installs: 1390, prompt: '이 에이전트는 연구 결과를 체계적인 보고서로 정리할 때 사용합니다. 경영진 요약, 기술 문서, 분석 보고서를 전문으로 작성합니다. "보고서 작성해줘", "연구 결과 정리해줘" 요청 시 활성화됩니다.' },
    { id: 'golang-pro', name: 'Go 전문가', nameEn: 'golang-pro', category: 'agents', desc: '동시성 프로그래밍, 고성능 시스템, 마이크로서비스, 클라우드 네이티브 아키텍처를 위한 Go 애플리케이션을 구축합니다.', tags: ['programming-languages'], stars: 4.9, installs: 1374, prompt: '이 에이전트는 Go 언어 개발이 필요할 때 사용합니다. 고루틴, 채널, 인터페이스, 에러 처리 등 Go 관용적 패턴을 전문으로 지원합니다. "Go 코드 작성해줘", "Golang API 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'payment-integration', name: '결제 통합', nameEn: 'payment-integration', category: 'agents', desc: 'Stripe, PayPal 등 결제 게이트웨이를 안전하게 통합하는 전문 에이전트입니다.', tags: ['business-marketing'], stars: 4.9, installs: 1370, prompt: '이 에이전트는 결제 시스템 통합이 필요할 때 사용합니다. 결제 처리, 구독 관리, 환불 처리, PCI 규정 준수를 전문으로 지원합니다. "결제 통합해줘", "Stripe 설정해줘" 요청 시 활성화됩니다.' },
    { id: 'ml-engineer', name: '머신러닝 엔지니어', nameEn: 'ml-engineer', category: 'agents', desc: '모델 학습 파이프라인, 모델 서빙 인프라, 성능 최적화가 필요한 프로덕션 ML 시스템을 구축합니다.', tags: ['data-ai', '머신러닝'], stars: 4.9, installs: 1369, prompt: '이 에이전트는 머신러닝 시스템 구축이 필요할 때 사용합니다. 모델 학습, 서빙, 모니터링, MLOps 파이프라인을 전문으로 지원합니다. "ML 모델 만들어줘", "모델 배포해줘" 요청 시 활성화됩니다.' },
    { id: 'react-performance-optimizer', name: 'React 성능 최적화 전문가', nameEn: 'react-performance-optimizer', category: 'agents', desc: 'React 애플리케이션 성능을 심층 분석하고 최적화하는 전문 에이전트입니다.', tags: ['web-tools', 'React', '성능'], stars: 4.9, installs: 1364, prompt: '이 에이전트는 React 앱 성능 문제 해결이 필요할 때 사용합니다. React DevTools 프로파일링, 컴포넌트 최적화, 번들 분석을 전문으로 지원합니다. "React 성능 최적화해줘", "리렌더링 줄여줘" 요청 시 활성화됩니다.' },
    { id: 'unused-code-cleaner', name: '미사용 코드 정리기', nameEn: 'unused-code-cleaner', category: 'agents', desc: '코드베이스에서 미사용 코드, 죽은 코드, 불필요한 의존성을 자동으로 탐지하고 제거합니다.', tags: ['development-tools'], stars: 4.9, installs: 1359, prompt: '이 에이전트는 코드 정리와 리팩토링이 필요할 때 사용합니다. 미사용 변수, 함수, 임포트, 파일을 체계적으로 찾아 제거합니다. "미사용 코드 정리해줘", "코드 정리해줘" 요청 시 활성화됩니다.' },
    { id: 'performance-profiler', name: '성능 프로파일러', nameEn: 'performance-profiler', category: 'agents', desc: '애플리케이션 성능을 프로파일링하고 병목 지점을 상세히 분석하는 전문 에이전트입니다.', tags: ['development-tools', '성능'], stars: 4.9, installs: 1330, prompt: '이 에이전트는 성능 프로파일링이 필요할 때 사용합니다. CPU, 메모리, 네트워크 프로파일링을 통해 성능 병목을 정확히 파악합니다. "성능 프로파일링해줘", "병목 지점 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'php-pro', name: 'PHP 전문가', nameEn: 'php-pro', category: 'agents', desc: 'PHP 8.3+, 엄격한 타이핑, 현대적인 언어 기능, Laravel/Symfony 프레임워크를 활용한 개발을 전문으로 합니다.', tags: ['programming-languages'], stars: 4.9, installs: 1326, prompt: '이 에이전트는 고급 PHP 개발이 필요할 때 사용합니다. Laravel, Symfony, PHP 8.x 최신 기능, 타입 힌팅을 전문으로 지원합니다. "PHP 코드 작성해줘", "Laravel 개발해줘" 요청 시 활성화됩니다.' },
    { id: 'changelog-generator', name: '변경 로그 생성기', nameEn: 'changelog-generator', category: 'agents', desc: 'Git 커밋 히스토리를 분석하여 구조화된 변경 로그를 자동 생성하는 에이전트입니다.', tags: ['문서화'], stars: 4.9, installs: 1313, prompt: '이 에이전트는 변경 로그 작성이 필요할 때 사용합니다. Keep a Changelog 형식, Conventional Commits 기반 자동 변경 로그 생성을 지원합니다. "변경 로그 만들어줘", "CHANGELOG 업데이트해줘" 요청 시 활성화됩니다.' },
    { id: 'academic-researcher', name: '학술 연구원', nameEn: 'academic-researcher', category: 'agents', desc: '학술 논문, 연구 자료, 학문적 분석을 전문으로 하는 연구 에이전트입니다.', tags: ['deep-research-team'], stars: 4.9, installs: 1229, prompt: '이 에이전트는 학술적 연구와 분석이 필요할 때 사용합니다. 논문 검색, 인용 관리, 체계적 문헌 고찰을 전문으로 지원합니다. "논문 분석해줘", "학술 자료 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'network-engineer', name: '네트워크 엔지니어', nameEn: 'network-engineer', category: 'agents', desc: '클라우드 및 하이브리드 네트워크 인프라를 설계, 최적화, 문제 해결하는 전문 에이전트입니다.', tags: ['devops-infrastructure'], stars: 4.9, installs: 1229, prompt: '이 에이전트는 네트워크 설계와 문제 해결이 필요할 때 사용합니다. VPC 설계, 로드 밸런싱, DNS, CDN 설정을 전문으로 지원합니다. "네트워크 설계해줘", "네트워크 문제 해결해줘" 요청 시 활성화됩니다.' },
    { id: 'cli-ui-designer', name: 'CLI UI 디자이너', nameEn: 'cli-ui-designer', category: 'agents', desc: '사용하기 쉽고 직관적인 CLI 도구 인터페이스를 설계하는 전문 에이전트입니다.', tags: ['development-team'], stars: 4.9, installs: 1209, prompt: '이 에이전트는 CLI 도구 인터페이스 설계가 필요할 때 사용합니다. 명령어 구조, 도움말 시스템, 색상 출력, 프로그레스 바를 전문으로 지원합니다. "CLI 도구 만들어줘", "커맨드라인 인터페이스 설계해줘" 요청 시 활성화됩니다.' },
    { id: 'architecture-modernizer', name: '아키텍처 현대화 전문가', nameEn: 'architecture-modernizer', category: 'agents', desc: '레거시 시스템을 현대적인 아키텍처로 단계적으로 마이그레이션하는 전문 에이전트입니다.', tags: ['modernization'], stars: 4.9, installs: 1197, prompt: '이 에이전트는 레거시 시스템 현대화가 필요할 때 사용합니다. 단계적 마이그레이션 계획, 기술 부채 감소, 위험 완화 전략을 전문으로 지원합니다. "레거시 코드 현대화해줘", "아키텍처 업그레이드해줘" 요청 시 활성화됩니다.' },
    { id: 'project-supervisor-orchestrator', name: '프로젝트 수퍼바이저', nameEn: 'project-supervisor-orchestrator', category: 'agents', desc: '복잡한 프로젝트를 조율하고 여러 에이전트 팀을 관리하는 수퍼바이저 에이전트입니다.', tags: ['podcast-creator-team'], stars: 4.9, installs: 1139, prompt: '이 에이전트는 대규모 프로젝트 조율과 멀티 에이전트 관리가 필요할 때 사용합니다. 작업 분배, 진행 모니터링, 결과 통합을 전문으로 지원합니다. "프로젝트 관리해줘", "팀 조율해줘" 요청 시 활성화됩니다.' },
    { id: 'mcp-server-architect', name: 'MCP 서버 아키텍트', nameEn: 'mcp-server-architect', category: 'agents', desc: 'MCP 서버 아키텍처를 설계하고 구현하는 전문 에이전트입니다.', tags: ['mcp-dev-team', 'MCP'], stars: 4.9, installs: 1132, prompt: '이 에이전트는 MCP 서버 설계와 구현이 필요할 때 사용합니다. 도구 정의, 리소스 관리, 프롬프트 설계, 서버 구조를 전문으로 지원합니다. "MCP 서버 설계해줘", "MCP 아키텍처 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'research-coordinator', name: '연구 코디네이터', nameEn: 'research-coordinator', category: 'agents', desc: '복잡한 연구 작업을 전략적으로 계획하고 여러 전문 연구자를 조율합니다.', tags: ['deep-research-team'], stars: 4.9, installs: 1131, prompt: '이 에이전트는 복잡한 연구 프로젝트 조율이 필요할 때 사용합니다. 연구 범위 정의, 전문가 배정, 일정 관리를 전문으로 지원합니다. "연구 계획 세워줘", "리서치 조율해줘" 요청 시 활성화됩니다.' },
    { id: 'monitoring-specialist', name: '모니터링 전문가', nameEn: 'monitoring-specialist', category: 'agents', desc: '시스템 모니터링, 알림 설정, 관찰 가능성 인프라를 구축하는 전문 에이전트입니다.', tags: ['devops-infrastructure'], stars: 4.9, installs: 1075, prompt: '이 에이전트는 시스템 모니터링 설정이 필요할 때 사용합니다. Prometheus, Grafana, ELK 스택 구성과 알림 규칙을 전문으로 지원합니다. "모니터링 설정해줘", "알림 구성해줘" 요청 시 활성화됩니다.' },
    { id: 'shell-scripting-pro', name: '쉘 스크립팅 전문가', nameEn: 'shell-scripting-pro', category: 'agents', desc: '복잡한 쉘 스크립트와 시스템 자동화 도구를 작성하는 전문 에이전트입니다.', tags: ['programming-languages'], stars: 4.9, installs: 1066, prompt: '이 에이전트는 쉘 스크립트 작성이 필요할 때 사용합니다. Bash, Zsh 스크립트, 시스템 자동화, 크론 작업 설정을 전문으로 지원합니다. "쉘 스크립트 만들어줘", "자동화 스크립트 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'legal-advisor', name: '법률 자문', nameEn: 'legal-advisor', category: 'agents', desc: '소프트웨어 라이선스, 개인정보 보호법, 서비스 약관 등 기술 관련 법률 자문을 제공합니다.', tags: ['business-marketing'], stars: 4.9, installs: 1057, prompt: '이 에이전트는 기술 관련 법률 자문이 필요할 때 사용합니다. 오픈소스 라이선스, GDPR 준수, 이용 약관 작성을 전문으로 지원합니다. "라이선스 확인해줘", "개인정보 정책 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'terraform-specialist', name: 'Terraform 전문가', nameEn: 'terraform-specialist', category: 'agents', desc: 'Terraform을 활용한 인프라 코드 작성과 클라우드 리소스 관리를 전문으로 합니다.', tags: ['devops-infrastructure'], stars: 4.9, installs: 1025, prompt: '이 에이전트는 Terraform 인프라 코드 작성이 필요할 때 사용합니다. 모듈 설계, 상태 관리, 멀티 환경 배포를 전문으로 지원합니다. "Terraform 코드 만들어줘", "인프라 코드 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'game-designer', name: '게임 디자이너', nameEn: 'game-designer', category: 'agents', desc: '게임 메커닉, 레벨 설계, 플레이어 경험을 설계하는 전문 에이전트입니다.', tags: ['game-development'], stars: 4.8, installs: 997, prompt: '이 에이전트는 게임 디자인과 기획이 필요할 때 사용합니다. 게임 메커닉 설계, 밸런싱, 레벨 디자인, GDD 작성을 전문으로 지원합니다. "게임 설계해줘", "게임 메커닉 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'quant-analyst', name: '퀀트 분석가', nameEn: 'quant-analyst', category: 'agents', desc: '금융 데이터를 분석하고 알고리즘 거래 전략을 개발하는 전문 에이전트입니다.', tags: ['data-ai'], stars: 4.8, installs: 992, prompt: '이 에이전트는 금융 데이터 분석과 퀀트 전략 개발이 필요할 때 사용합니다. 통계 모델, 백테스팅, 리스크 관리를 전문으로 지원합니다. "퀀트 전략 만들어줘", "금융 데이터 분석해줘" 요청 시 활성화됩니다.' },
    { id: 'competitive-intelligence-analyst', name: '경쟁 정보 분석가', nameEn: 'competitive-intelligence-analyst', category: 'agents', desc: '경쟁사 분석과 시장 인텔리전스를 수집하는 전문 에이전트입니다.', tags: ['deep-research-team'], stars: 4.8, installs: 992, prompt: '이 에이전트는 경쟁사 조사와 시장 분석이 필요할 때 사용합니다. 경쟁사 전략, 제품 비교, 시장 동향 분석을 전문으로 지원합니다. "경쟁사 분석해줘", "시장 조사해줘" 요청 시 활성화됩니다.' },
    { id: 'agent-expert', name: '에이전트 전문가', nameEn: 'agent-expert', category: 'agents', desc: 'Claude Code 에이전트를 설계하고 최적화하는 전문 에이전트입니다.', tags: ['expert-advisors', '에이전트'], stars: 4.8, installs: 989, prompt: '이 에이전트는 새로운 AI 에이전트 설계와 최적화가 필요할 때 사용합니다. 에이전트 프롬프트 작성, 도구 선택, 워크플로우 설계를 전문으로 지원합니다. "에이전트 만들어줘", "AI 에이전트 설계해줘" 요청 시 활성화됩니다.' },
    { id: 'fact-checker', name: '팩트 체커', nameEn: 'fact-checker', category: 'agents', desc: '주장과 정보의 사실 여부를 검증하고 신뢰할 수 있는 소스를 확인하는 에이전트입니다.', tags: ['deep-research-team'], stars: 4.8, installs: 975, prompt: '이 에이전트는 정보 검증과 사실 확인이 필요할 때 사용합니다. 다중 소스 교차 검증, 출처 확인, 신뢰도 평가를 전문으로 지원합니다. "사실 확인해줘", "정보 검증해줘" 요청 시 활성화됩니다.' },
    { id: 'supabase-realtime-optimizer', name: 'Supabase 실시간 최적화', nameEn: 'supabase-realtime-optimizer', category: 'agents', desc: 'Supabase 실시간 연결 성능을 최적화하고 구독을 효율적으로 관리합니다.', tags: ['realtime'], stars: 4.8, installs: 975, prompt: '이 에이전트는 Supabase 실시간 기능 최적화가 필요할 때 사용합니다. 실시간 구독, 채널 관리, 연결 최적화를 전문으로 지원합니다. "Supabase 실시간 최적화해줘", "실시간 기능 개선해줘" 요청 시 활성화됩니다.' },
    { id: 'research-synthesizer', name: '연구 통합자', nameEn: 'research-synthesizer', category: 'agents', desc: '여러 연구 소스에서 발견한 내용을 통합하여 종합적인 보고서를 작성합니다.', tags: ['deep-research-team'], stars: 4.8, installs: 968, prompt: '이 에이전트는 다양한 연구 자료를 통합하여 보고서로 만들 때 사용합니다. 연구 결과 종합, 핵심 인사이트 추출, 권장 사항 도출을 전문으로 지원합니다. "연구 통합해줘", "보고서 종합해줘" 요청 시 활성화됩니다.' },
    { id: 'backend-developer', name: '백엔드 개발자', nameEn: 'backend-developer', category: 'agents', desc: '서버 측 API, 마이크로서비스, 견고한 아키텍처와 확장성이 필요한 백엔드 시스템을 구축합니다.', tags: ['development-team', '백엔드'], stars: 4.8, installs: 967, prompt: '이 에이전트는 백엔드 서버 개발이 필요할 때 사용합니다. REST API, 인증 시스템, 데이터베이스 통합, 서버 최적화를 전문으로 지원합니다. "백엔드 API 만들어줘", "서버 개발해줘" 요청 시 활성화됩니다.' },
    { id: 'web-accessibility-checker', name: '웹 접근성 검사기', nameEn: 'web-accessibility-checker', category: 'agents', desc: 'WCAG 기준에 따른 웹 접근성을 검사하고 개선 방안을 제시하는 에이전트입니다.', tags: ['web-tools'], stars: 4.8, installs: 949, prompt: '이 에이전트는 웹 접근성 검사와 개선이 필요할 때 사용합니다. ARIA 레이블, 키보드 내비게이션, 색상 대비, 스크린 리더 호환성을 전문으로 지원합니다. "접근성 검사해줘", "WCAG 준수 확인해줘" 요청 시 활성화됩니다.' },
    { id: 'docusaurus-expert', name: 'Docusaurus 전문가', nameEn: 'docusaurus-expert', category: 'agents', desc: 'Docusaurus를 활용한 문서 사이트 구축과 유지 관리를 전문으로 하는 에이전트입니다.', tags: ['문서화'], stars: 4.8, installs: 852, prompt: '이 에이전트는 Docusaurus 문서 사이트 개발이 필요할 때 사용합니다. 사이트 설정, 플러그인 구성, MDX 콘텐츠, 검색 통합을 전문으로 지원합니다. "Docusaurus 사이트 만들어줘", "문서 사이트 개선해줘" 요청 시 활성화됩니다.' },
    { id: 'vercel-deployment-specialist', name: 'Vercel 배포 전문가', nameEn: 'vercel-deployment-specialist', category: 'agents', desc: 'Vercel 플랫폼을 활용한 배포 최적화와 성능 모니터링을 전문으로 합니다.', tags: ['devops-infrastructure'], stars: 4.8, installs: 850, prompt: '이 에이전트는 Vercel 배포 설정과 최적화가 필요할 때 사용합니다. 배포 설정, Edge Function, Analytics 통합을 전문으로 지원합니다. "Vercel 배포 설정해줘", "Vercel 최적화해줘" 요청 시 활성화됩니다.' },
    { id: 'sales-automator', name: '영업 자동화', nameEn: 'sales-automator', category: 'agents', desc: '영업 프로세스를 자동화하고 CRM 통합을 최적화하는 전문 에이전트입니다.', tags: ['business-marketing'], stars: 4.8, installs: 841, prompt: '이 에이전트는 영업 워크플로우 자동화가 필요할 때 사용합니다. 리드 관리, 이메일 자동화, CRM 통합, 영업 보고서를 전문으로 지원합니다. "영업 자동화해줘", "CRM 통합해줘" 요청 시 활성화됩니다.' },
    { id: 'computer-vision-engineer', name: '컴퓨터 비전 엔지니어', nameEn: 'computer-vision-engineer', category: 'agents', desc: '이미지 인식, 객체 탐지, 비전 AI 모델을 개발하는 전문 에이전트입니다.', tags: ['data-ai'], stars: 4.8, installs: 831, prompt: '이 에이전트는 컴퓨터 비전 시스템 개발이 필요할 때 사용합니다. OpenCV, PyTorch, YOLO를 활용한 이미지 처리와 모델 학습을 전문으로 지원합니다. "이미지 인식 만들어줘", "비전 모델 개발해줘" 요청 시 활성화됩니다.' },
    { id: 'dependency-manager', name: '의존성 관리자', nameEn: 'dependency-manager', category: 'agents', desc: '프로젝트 의존성을 분석하고 취약점 스캔과 라이선스 컴플라이언스를 관리합니다.', tags: ['expert-advisors'], stars: 4.8, installs: 828, prompt: '이 에이전트는 패키지 의존성 관리가 필요할 때 사용합니다. 취약한 패키지 탐지, 업데이트 권장, 라이선스 충돌 확인을 전문으로 지원합니다. "의존성 감사해줘", "패키지 취약점 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'dx-optimizer', name: '개발자 경험 최적화', nameEn: 'dx-optimizer', category: 'agents', desc: '빌드 시간, 피드백 루프, 테스트 효율성 등 개발자 워크플로우를 최적화합니다.', tags: ['development-tools'], stars: 4.8, installs: 826, prompt: '이 에이전트는 개발자 경험 개선이 필요할 때 사용합니다. 빌드 속도 개선, 핫 리로드 최적화, 개발 도구 설정을 전문으로 지원합니다. "개발 환경 최적화해줘", "빌드 속도 높여줘" 요청 시 활성화됩니다.' },
    { id: 'review-agent', name: '리뷰 에이전트', nameEn: 'review-agent', category: 'agents', desc: '콘텐츠와 코드를 검토하고 피드백을 제공하는 범용 리뷰 에이전트입니다.', tags: ['obsidian-ops-team', '에이전트'], stars: 4.8, installs: 821, prompt: '이 에이전트는 다양한 콘텐츠 리뷰가 필요할 때 사용합니다. 코드, 문서, 설계를 검토하고 건설적인 피드백을 제공합니다. "리뷰해줘", "검토 피드백 줘" 요청 시 활성화됩니다.' },
    { id: 'mcp-integration-engineer', name: 'MCP 통합 엔지니어', nameEn: 'mcp-integration-engineer', category: 'agents', desc: 'MCP 서버를 기존 시스템에 통합하고 연결을 관리하는 전문 에이전트입니다.', tags: ['mcp-dev-team', 'MCP'], stars: 4.8, installs: 813, prompt: '이 에이전트는 MCP 서버 통합이 필요할 때 사용합니다. MCP 클라이언트 설정, 서버 연결, 도구 매핑을 전문으로 지원합니다. "MCP 통합해줘", "MCP 연결 설정해줘" 요청 시 활성화됩니다.' },
    { id: 'ui-designer', name: 'UI 디자이너', nameEn: 'ui-designer', category: 'agents', desc: '시각적 인터페이스를 설계하고 디자인 시스템과 컴포넌트 라이브러리를 구축합니다.', tags: ['development-team'], stars: 4.8, installs: 801, prompt: '이 에이전트는 UI 디자인과 컴포넌트 개발이 필요할 때 사용합니다. 디자인 시스템 구축, 컴포넌트 스타일링, 인터랙션 디자인을 전문으로 지원합니다. "UI 디자인해줘", "컴포넌트 스타일 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'document-structure-analyzer', name: '문서 구조 분석기', nameEn: 'document-structure-analyzer', category: 'agents', desc: '문서 구조를 분석하고 계층, 섹션, 콘텐츠 패턴을 파악하는 에이전트입니다.', tags: ['ocr-extraction-team'], stars: 4.8, installs: 799, prompt: '이 에이전트는 복잡한 문서 구조 분석이 필요할 때 사용합니다. PDF, Word, HTML 문서의 구조를 파악하고 정보를 추출합니다. "문서 구조 분석해줘", "문서 파싱해줘" 요청 시 활성화됩니다.' },
    { id: 'code-architect', name: '코드 아키텍트', nameEn: 'code-architect', category: 'agents', desc: '기존 코드베이스 패턴을 분석하여 기능 아키텍처를 설계하고 구현 청사진을 제공합니다.', tags: ['development-team'], stars: 4.8, installs: 791, prompt: '이 에이전트는 코드 구조 설계와 구현 계획이 필요할 때 사용합니다. 기존 패턴 분석, 새 기능 설계, 상세 구현 가이드를 전문으로 제공합니다. "코드 구조 설계해줘", "구현 계획 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'graphql-architect', name: 'GraphQL 아키텍트', nameEn: 'graphql-architect', category: 'agents', desc: '마이크로서비스에서 GraphQL 스키마를 설계하고 페더레이션 아키텍처를 구현합니다.', tags: ['api-graphql'], stars: 4.8, installs: 786, prompt: '이 에이전트는 GraphQL API 설계와 구현이 필요할 때 사용합니다. 스키마 설계, 리졸버 구현, N+1 문제 해결, Federation을 전문으로 지원합니다. "GraphQL API 만들어줘", "GraphQL 스키마 설계해줘" 요청 시 활성화됩니다.' },
    { id: 'markdown-syntax-formatter', name: '마크다운 포매터', nameEn: 'markdown-syntax-formatter', category: 'agents', desc: '마크다운 문서의 구문을 정리하고 표준화하는 전문 에이전트입니다.', tags: ['ocr-extraction-team'], stars: 4.8, installs: 767, prompt: '이 에이전트는 마크다운 문서 형식 정리가 필요할 때 사용합니다. 헤딩 구조, 코드 블록, 링크, 표 형식을 자동으로 정규화합니다. "마크다운 정리해줘", "문서 형식 통일해줘" 요청 시 활성화됩니다.' },
    { id: 'connection-agent', name: '연결 에이전트', nameEn: 'connection-agent', category: 'agents', desc: '노트와 아이디어 간의 연결고리를 찾고 지식 그래프를 구축하는 에이전트입니다.', tags: ['obsidian-ops-team', '에이전트'], stars: 4.8, installs: 760, prompt: '이 에이전트는 Obsidian 노트 연결과 지식 관리가 필요할 때 사용합니다. 관련 노트 찾기, 백링크 생성, 지식 맵 구축을 전문으로 지원합니다. "노트 연결해줘", "관련 아이디어 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'rust-pro', name: 'Rust 전문가', nameEn: 'rust-pro', category: 'agents', desc: 'Rust 언어를 활용한 고성능, 안전한 시스템 소프트웨어를 개발하는 전문 에이전트입니다.', tags: ['programming-languages', 'Rust'], stars: 4.8, installs: 752, prompt: '이 에이전트는 Rust 개발이 필요할 때 사용합니다. 소유권 시스템, 생명주기, 비동기 Rust, 웹 어셈블리를 전문으로 지원합니다. "Rust 코드 작성해줘", "Rust 시스템 개발해줘" 요청 시 활성화됩니다.' },
    { id: 'compliance-specialist', name: '컴플라이언스 전문가', nameEn: 'compliance-specialist', category: 'agents', desc: 'SOC2, ISO 27001, GDPR 등 보안 컴플라이언스 요구사항을 전문으로 하는 에이전트입니다.', tags: ['보안'], stars: 4.8, installs: 742, prompt: '이 에이전트는 보안 인증과 컴플라이언스 준수가 필요할 때 사용합니다. 컨트롤 맵핑, 감사 준비, 정책 문서 작성을 전문으로 지원합니다. "컴플라이언스 검토해줘", "보안 인증 준비해줘" 요청 시 활성화됩니다.' },
    { id: 'seo-specialist', name: 'SEO 전문가', nameEn: 'seo-specialist', category: 'agents', desc: '기술적 SEO 감사, 키워드 전략, 콘텐츠 최적화를 포함한 종합적인 SEO 최적화를 수행합니다.', tags: ['business-marketing'], stars: 4.8, installs: 739, prompt: '이 에이전트는 종합적인 SEO 전략 수립이 필요할 때 사용합니다. 기술적 SEO, 콘텐츠 최적화, 링크 빌딩, 검색 순위 분석을 전문으로 지원합니다. "SEO 최적화해줘", "검색 순위 높여줘" 요청 시 활성화됩니다.' },
    { id: 'mcp-deployment-orchestrator', name: 'MCP 배포 조율자', nameEn: 'mcp-deployment-orchestrator', category: 'agents', desc: 'MCP 서버 배포를 조율하고 여러 환경에서의 운영을 관리합니다.', tags: ['mcp-dev-team', 'MCP'], stars: 4.8, installs: 732, prompt: '이 에이전트는 MCP 서버 배포와 운영 관리가 필요할 때 사용합니다. 배포 파이프라인, 환경 설정, 서버 모니터링을 전문으로 지원합니다. "MCP 서버 배포해줘", "MCP 운영 관리해줘" 요청 시 활성화됩니다.' },
    { id: 'marketing-attribution-analyst', name: '마케팅 어트리뷰션 분석가', nameEn: 'marketing-attribution-analyst', category: 'agents', desc: '마케팅 채널 성과를 분석하고 어트리뷰션 모델을 구축하는 전문 에이전트입니다.', tags: ['business-marketing'], stars: 4.8, installs: 724, prompt: '이 에이전트는 마케팅 성과 분석이 필요할 때 사용합니다. 다중 터치 어트리뷰션, 채널 ROI 분석, 전환 경로 분석을 전문으로 지원합니다. "마케팅 성과 분석해줘", "어트리뷰션 모델 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'load-testing-specialist', name: '부하 테스트 전문가', nameEn: 'load-testing-specialist', category: 'agents', desc: '애플리케이션 부하 테스트를 설계하고 실행하여 성능 한계를 파악합니다.', tags: ['performance-testing', '테스트'], stars: 4.8, installs: 724, prompt: '이 에이전트는 부하 테스트와 성능 검증이 필요할 때 사용합니다. k6, JMeter를 활용한 부하 테스트 시나리오 설계와 결과 분석을 전문으로 지원합니다. "부하 테스트해줘", "성능 한계 테스트해줘" 요청 시 활성화됩니다.' },
    { id: 'web-vitals-optimizer', name: '웹 바이탈 최적화', nameEn: 'web-vitals-optimizer', category: 'agents', desc: 'Core Web Vitals를 분석하고 LCP, CLS, INP를 개선하는 전문 에이전트입니다.', tags: ['performance-testing'], stars: 4.8, installs: 721, prompt: '이 에이전트는 Core Web Vitals 개선이 필요할 때 사용합니다. LCP, CLS, INP 측정과 최적화 전략을 전문으로 지원합니다. "웹 바이탈 개선해줘", "페이지 속도 높여줘" 요청 시 활성화됩니다.' },
    { id: 'mlops-engineer', name: 'MLOps 엔지니어', nameEn: 'mlops-engineer', category: 'agents', desc: 'ML 인프라, 모델 CI/CD, 모델 버저닝, 실험 추적 시스템을 설계하고 구현합니다.', tags: ['data-ai'], stars: 4.8, installs: 720, prompt: '이 에이전트는 MLOps 파이프라인 구축이 필요할 때 사용합니다. MLflow, Kubeflow, 모델 레지스트리, A/B 테스트를 전문으로 지원합니다. "MLOps 파이프라인 만들어줘", "모델 배포 자동화해줘" 요청 시 활성화됩니다.' },
    { id: 'risk-manager', name: '리스크 관리자', nameEn: 'risk-manager', category: 'agents', desc: '프로젝트와 비즈니스 리스크를 식별하고 완화 전략을 수립하는 전문 에이전트입니다.', tags: ['business-marketing'], stars: 4.8, installs: 715, prompt: '이 에이전트는 리스크 분석과 관리 계획 수립이 필요할 때 사용합니다. 리스크 매트릭스 작성, 완화 방안, 비상 계획을 전문으로 지원합니다. "리스크 분석해줘", "위험 관리 계획 세워줘" 요청 시 활성화됩니다.' },
    { id: 'expert-react-frontend-engineer', name: 'React 프론트엔드 전문 엔지니어', nameEn: 'expert-react-frontend-engineer', category: 'agents', desc: 'React 19 최신 기능, Server Components, Actions, TypeScript, 성능 최적화를 전문으로 하는 React 엔지니어입니다.', tags: ['web-tools', 'React'], stars: 4.8, installs: 715, prompt: '이 에이전트는 최신 React 개발이 필요할 때 사용합니다. React 19 훅, Server Components, 서스펜스, 트랜지션을 전문으로 지원합니다. "최신 React로 개발해줘", "React 19 기능 사용해줘" 요청 시 활성화됩니다.' },
    { id: 'unity-game-developer', name: 'Unity 게임 개발자', nameEn: 'unity-game-developer', category: 'agents', desc: 'Unity C# 스크립팅, 3D 그래픽, 모바일 최적화를 전문으로 하는 게임 개발 에이전트입니다.', tags: ['game-development'], stars: 4.8, installs: 707, prompt: '이 에이전트는 Unity 게임 개발이 필요할 때 사용합니다. C# 스크립팅, 물리 엔진, 애니메이션, 모바일 최적화를 전문으로 지원합니다. "Unity 게임 만들어줘", "Unity 스크립트 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'c-sharp-pro', name: 'C# 전문가', nameEn: 'c-sharp-pro', category: 'agents', desc: 'C#, .NET, ASP.NET Core를 활용한 엔터프라이즈 애플리케이션을 개발하는 전문 에이전트입니다.', tags: ['programming-languages'], stars: 4.8, installs: 707, prompt: '이 에이전트는 C# 개발이 필요할 때 사용합니다. .NET 최신 기능, LINQ, async/await, Entity Framework를 전문으로 지원합니다. "C# 코드 작성해줘", ".NET API 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'agent-overview', name: '에이전트 개요', nameEn: 'agent-overview', category: 'agents', desc: 'Claude Code 에이전트 시스템을 개요하고 적합한 에이전트를 선택하는 가이드 에이전트입니다.', tags: ['deep-research-team', '에이전트'], stars: 4.8, installs: 699, prompt: '이 에이전트는 어떤 에이전트를 사용해야 할지 파악이 필요할 때 사용합니다. 사용 가능한 에이전트를 소개하고 작업에 적합한 에이전트를 추천합니다. "어떤 에이전트 써야 해?", "에이전트 목록 보여줘" 요청 시 활성화됩니다.' },
    { id: 'research-brief-generator', name: '연구 브리프 생성기', nameEn: 'research-brief-generator', category: 'agents', desc: '사용자의 연구 쿼리를 구조화된 실행 가능한 연구 브리프로 변환합니다.', tags: ['deep-research-team'], stars: 4.8, installs: 688, prompt: '이 에이전트는 연구 계획서 작성이 필요할 때 사용합니다. 연구 목표, 범위, 방법론, 예상 결과물을 체계적으로 정의합니다. "연구 브리프 만들어줘", "연구 계획서 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'model-evaluator', name: '모델 평가자', nameEn: 'model-evaluator', category: 'agents', desc: 'AI 모델 성능을 평가하고 벤치마킹하는 전문 에이전트입니다.', tags: ['ai-specialists'], stars: 4.8, installs: 679, prompt: '이 에이전트는 AI 모델 평가와 비교가 필요할 때 사용합니다. 평가 지표 설계, 벤치마크 실행, 모델 비교 분석을 전문으로 지원합니다. "모델 평가해줘", "AI 모델 벤치마크해줘" 요청 시 활성화됩니다.' },
    { id: 'test-generator', name: '테스트 생성기', nameEn: 'test-generator', category: 'agents', desc: '코드 변경사항을 분석하여 기존 테스트 패턴과 관례를 바탕으로 종합적인 테스트 케이스를 생성합니다.', tags: ['development-team'], stars: 4.8, installs: 675, prompt: '이 에이전트는 자동 테스트 코드 생성이 필요할 때 사용합니다. 단위 테스트, 통합 테스트, 엣지 케이스를 코드 분석 기반으로 생성합니다. "테스트 코드 생성해줘", "자동으로 테스트 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'customer-support', name: '고객 지원', nameEn: 'customer-support', category: 'agents', desc: '고객 지원 워크플로우를 자동화하고 응대 품질을 향상시키는 전문 에이전트입니다.', tags: ['business-marketing'], stars: 4.8, installs: 669, prompt: '이 에이전트는 고객 지원 시스템 구축이 필요할 때 사용합니다. FAQ 작성, 티켓 분류, 응대 템플릿, 에스컬레이션 규칙을 전문으로 지원합니다. "고객 지원 시스템 만들어줘", "FAQ 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'code-explorer', name: '코드 탐색기', nameEn: 'code-explorer', category: 'agents', desc: '코드베이스 기능을 심층 분석하고 실행 경로, 아키텍처 레이어, 패턴을 문서화합니다.', tags: ['development-team'], stars: 4.8, installs: 660, prompt: '이 에이전트는 낯선 코드베이스 탐색이 필요할 때 사용합니다. 코드 흐름 추적, 의존성 맵핑, 패턴 인식을 전문으로 지원합니다. "코드 구조 파악해줘", "코드 탐색해줘" 요청 시 활성화됩니다.' },
    { id: 'mobile-app-developer', name: '모바일 앱 개발자', nameEn: 'mobile-app-developer', category: 'agents', desc: 'iOS, Android 모바일 애플리케이션을 네이티브 또는 크로스 플랫폼으로 개발합니다.', tags: ['development-team'], stars: 4.8, installs: 659, prompt: '이 에이전트는 모바일 앱 개발이 필요할 때 사용합니다. Swift, Kotlin, React Native, Flutter를 활용한 앱 개발을 전문으로 지원합니다. "모바일 앱 만들어줘", "앱 개발 시작해줘" 요청 시 활성화됩니다.' },
    { id: 'hackathon-ai-strategist', name: '해커톤 AI 전략가', nameEn: 'hackathon-ai-strategist', category: 'agents', desc: '해커톤에서 AI 프로젝트 전략을 수립하고 빠르게 구현하는 전문 에이전트입니다.', tags: ['ai-specialists', 'AI'], stars: 4.8, installs: 655, prompt: '이 에이전트는 해커톤 참가와 빠른 프로토타입 개발이 필요할 때 사용합니다. AI 아이디어 발굴, 기술 스택 선택, MVP 구현을 전문으로 지원합니다. "해커톤 아이디어 내줘", "빠르게 AI 앱 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'nlp-engineer', name: 'NLP 엔지니어', nameEn: 'nlp-engineer', category: 'agents', desc: '텍스트 처리 파이프라인, 언어 모델, 도메인 특화 NLP 작업을 구현합니다.', tags: ['data-ai'], stars: 4.8, installs: 642, prompt: '이 에이전트는 자연어 처리 시스템 개발이 필요할 때 사용합니다. 텍스트 분류, 개체명 인식, 감성 분석, 챗봇 구현을 전문으로 지원합니다. "NLP 시스템 만들어줘", "텍스트 처리 파이프라인 구축해줘" 요청 시 활성화됩니다.' },
    { id: 'diagram-architect', name: '다이어그램 아키텍트', nameEn: 'diagram-architect', category: 'agents', desc: '시스템 아키텍처, 데이터 흐름, 시퀀스 다이어그램을 자동으로 생성하는 에이전트입니다.', tags: ['문서화'], stars: 4.8, installs: 642, prompt: '이 에이전트는 기술 다이어그램 생성이 필요할 때 사용합니다. Mermaid, PlantUML을 활용한 아키텍처, ERD, 시퀀스 다이어그램을 전문으로 지원합니다. "다이어그램 만들어줘", "아키텍처 그려줘" 요청 시 활성화됩니다.' },
    { id: 'llms-maintainer', name: 'LLM 유지 관리자', nameEn: 'llms-maintainer', category: 'agents', desc: 'LLM 시스템의 유지 관리와 업데이트를 전문으로 하는 에이전트입니다.', tags: ['ai-specialists'], stars: 4.8, installs: 641, prompt: '이 에이전트는 LLM 기반 시스템 유지 관리가 필요할 때 사용합니다. 모델 업데이트, 프롬프트 관리, 성능 모니터링을 전문으로 지원합니다. "LLM 시스템 유지 관리해줘", "AI 모델 업데이트해줘" 요청 시 활성화됩니다.' },
    { id: 'social-media-copywriter', name: '소셜 미디어 카피라이터', nameEn: 'social-media-copywriter', category: 'agents', desc: '소셜 미디어 플랫폼별 최적화된 마케팅 카피를 작성하는 전문 에이전트입니다.', tags: ['podcast-creator-team'], stars: 4.8, installs: 637, prompt: '이 에이전트는 소셜 미디어 콘텐츠 작성이 필요할 때 사용합니다. Twitter, LinkedIn, Instagram 등 각 플랫폼에 맞는 카피라이팅을 전문으로 지원합니다. "소셜 미디어 글 써줘", "마케팅 카피 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'metadata-agent', name: '메타데이터 에이전트', nameEn: 'metadata-agent', category: 'agents', desc: '문서와 파일의 메타데이터를 자동으로 생성하고 관리하는 에이전트입니다.', tags: ['obsidian-ops-team', '에이전트'], stars: 4.8, installs: 632, prompt: '이 에이전트는 문서 메타데이터 관리가 필요할 때 사용합니다. 태그 자동 생성, 작성일, 카테고리, 키워드 추출을 전문으로 지원합니다. "메타데이터 생성해줘", "문서 태그 달아줘" 요청 시 활성화됩니다.' },
    { id: 'video-editor', name: '비디오 편집자', nameEn: 'video-editor', category: 'agents', desc: 'FFmpeg를 활용한 비디오 편집, 변환, 최적화를 전문으로 하는 에이전트입니다.', tags: ['ffmpeg-clip-team'], stars: 4.8, installs: 623, prompt: '이 에이전트는 비디오 처리와 편집이 필요할 때 사용합니다. FFmpeg 명령어, 코덱 변환, 클립 추출, 비디오 최적화를 전문으로 지원합니다. "비디오 편집해줘", "동영상 변환해줘" 요청 시 활성화됩니다.' },
    { id: 'legacy-modernizer', name: '레거시 현대화 전문가', nameEn: 'legacy-modernizer', category: 'agents', desc: '레거시 시스템을 점진적인 마이그레이션 전략으로 현대화하는 전문 에이전트입니다.', tags: ['modernization'], stars: 4.8, installs: 612, prompt: '이 에이전트는 오래된 시스템 현대화가 필요할 때 사용합니다. 점진적 마이그레이션, 기술 부채 감소, 레거시 코드 리팩토링을 전문으로 지원합니다. "레거시 시스템 현대화해줘", "오래된 코드 업그레이드해줘" 요청 시 활성화됩니다.' },
    { id: 'mcp-security-auditor', name: 'MCP 보안 감사관', nameEn: 'mcp-security-auditor', category: 'agents', desc: 'MCP 서버 보안을 감사하고 취약점을 탐지하는 전문 에이전트입니다.', tags: ['mcp-dev-team', 'MCP', '보안'], stars: 4.8, installs: 604, prompt: '이 에이전트는 MCP 서버 보안 검토가 필요할 때 사용합니다. MCP 권한 관리, 입력 유효성 검사, 데이터 노출 위험을 전문으로 분석합니다. "MCP 보안 감사해줘", "MCP 취약점 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'market-research-analyst', name: '시장 조사 분석가', nameEn: 'market-research-analyst', category: 'agents', desc: '시장 동향, 소비자 행동, 경쟁 환경을 분석하는 전문 에이전트입니다.', tags: ['podcast-creator-team'], stars: 4.8, installs: 597, prompt: '이 에이전트는 시장 조사와 분석이 필요할 때 사용합니다. 시장 규모 추정, 경쟁사 분석, 소비자 인사이트를 전문으로 지원합니다. "시장 조사해줘", "시장 분석 보고서 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'web3-integration-specialist', name: 'Web3 통합 전문가', nameEn: 'web3-integration-specialist', category: 'agents', desc: 'Web3 프론트엔드 앱과 지갑 통합을 전문으로 하는 에이전트입니다.', tags: ['blockchain-web3'], stars: 4.8, installs: 584, prompt: '이 에이전트는 블록체인 DApp 개발이 필요할 때 사용합니다. Wagmi, RainbowKit, ethers.js를 활용한 Web3 통합을 전문으로 지원합니다. "Web3 앱 만들어줘", "지갑 연결 구현해줘" 요청 시 활성화됩니다.' },
    { id: 'nosql-specialist', name: 'NoSQL 전문가', nameEn: 'nosql-specialist', category: 'agents', desc: 'MongoDB, Redis, Cassandra 등 NoSQL 데이터베이스를 설계하고 최적화합니다.', tags: ['데이터베이스'], stars: 4.8, installs: 584, prompt: '이 에이전트는 NoSQL 데이터베이스 설계와 최적화가 필요할 때 사용합니다. 문서, 키-값, 그래프 데이터베이스 구조 설계를 전문으로 지원합니다. "NoSQL 설계해줘", "MongoDB 최적화해줘" 요청 시 활성화됩니다.' },
    { id: 'mcp-protocol-specialist', name: 'MCP 프로토콜 전문가', nameEn: 'mcp-protocol-specialist', category: 'agents', desc: 'MCP 프로토콜 명세와 구현을 깊이 이해하는 전문 에이전트입니다.', tags: ['mcp-dev-team', 'MCP'], stars: 4.8, installs: 582, prompt: '이 에이전트는 MCP 프로토콜 구현과 디버깅이 필요할 때 사용합니다. 메시지 형식, 핸들러 구현, 오류 처리, 프로토콜 확장을 전문으로 지원합니다. "MCP 프로토콜 구현해줘", "MCP 디버깅해줘" 요청 시 활성화됩니다.' },
    { id: 'mcp-testing-engineer', name: 'MCP 테스트 엔지니어', nameEn: 'mcp-testing-engineer', category: 'agents', desc: 'MCP 서버 테스트 전략을 수립하고 자동화된 테스트를 구현하는 에이전트입니다.', tags: ['mcp-dev-team', 'MCP', '테스트'], stars: 4.8, installs: 581, prompt: '이 에이전트는 MCP 서버 테스트가 필요할 때 사용합니다. 도구 테스트, 통합 테스트, 모의 클라이언트를 전문으로 지원합니다. "MCP 테스트 만들어줘", "MCP 서버 검증해줘" 요청 시 활성화됩니다.' },
    { id: 'query-clarifier', name: '쿼리 명확화 에이전트', nameEn: 'query-clarifier', category: 'agents', desc: '연구 쿼리를 분석하여 명확성을 확인하고 사용자에게 추가 정보가 필요한지 결정합니다.', tags: ['deep-research-team'], stars: 4.8, installs: 578, prompt: '이 에이전트는 모호한 연구 요청을 명확히 할 때 사용합니다. 요청 의도 파악, 범위 정의, 구체화 질문을 통해 정확한 연구를 지원합니다. "요청 명확히 해줘", "의도 파악해줘" 요청 시 활성화됩니다.' },
    { id: 'url-link-extractor', name: 'URL 링크 추출기', nameEn: 'url-link-extractor', category: 'agents', desc: '웹 페이지에서 URL과 링크를 추출하고 분석하는 전문 에이전트입니다.', tags: ['web-tools'], stars: 4.8, installs: 578, prompt: '이 에이전트는 웹 페이지 링크 수집이 필요할 때 사용합니다. 내부/외부 링크 분류, 깨진 링크 탐지, URL 패턴 분석을 전문으로 지원합니다. "링크 추출해줘", "URL 수집해줘" 요청 시 활성화됩니다.' },
    { id: 'content-curator', name: '콘텐츠 큐레이터', nameEn: 'content-curator', category: 'agents', desc: '관련 콘텐츠를 수집하고 분류하여 지식 베이스를 구축하는 에이전트입니다.', tags: ['obsidian-ops-team'], stars: 4.8, installs: 574, prompt: '이 에이전트는 정보 큐레이션과 지식 관리가 필요할 때 사용합니다. 콘텐츠 수집, 분류, 태깅, 정기 업데이트를 전문으로 지원합니다. "콘텐츠 큐레이션해줘", "정보 정리해줘" 요청 시 활성화됩니다.' },
    { id: 'technical-debt-manager', name: '기술 부채 관리자', nameEn: 'technical-debt-manager', category: 'agents', desc: '기술 부채를 식별하고 우선순위를 정하여 체계적으로 해소하는 에이전트입니다.', tags: ['development-tools'], stars: 4.8, installs: 565, prompt: '이 에이전트는 기술 부채 관리가 필요할 때 사용합니다. 부채 목록 작성, 영향도 평가, 해소 로드맵 수립을 전문으로 지원합니다. "기술 부채 분석해줘", "리팩토링 계획 세워줘" 요청 시 활성화됩니다.' },
    { id: 'expert-nextjs-developer', name: 'Next.js 전문 개발자', nameEn: 'expert-nextjs-developer', category: 'agents', desc: 'Next.js 16 App Router, Server Components, Turbopack, 최신 React 패턴을 전문으로 하는 개발자 에이전트입니다.', tags: ['web-tools', 'Next.js'], stars: 4.8, installs: 564, prompt: '이 에이전트는 최신 Next.js 개발이 필요할 때 사용합니다. App Router, 서버 컴포넌트, 스트리밍, Turbopack을 전문으로 지원합니다. "Next.js 앱 만들어줘", "최신 Next.js 기능 사용해줘" 요청 시 활성화됩니다.' },
    { id: 'comprehensive-researcher', name: '종합 연구원', nameEn: 'comprehensive-researcher', category: 'agents', desc: '광범위한 주제에 대해 종합적이고 심층적인 연구를 수행하는 에이전트입니다.', tags: ['podcast-creator-team'], stars: 4.8, installs: 555, prompt: '이 에이전트는 광범위한 주제의 심층 연구가 필요할 때 사용합니다. 다각도 분석, 관련 자료 수집, 종합 보고서 작성을 전문으로 지원합니다. "종합 연구해줘", "심층 분석해줘" 요청 시 활성화됩니다.' },
    { id: '3d-artist', name: '3D 아티스트', nameEn: '3d-artist', category: 'agents', desc: '3D 모델링, 텍스처링, 애니메이션을 전문으로 하는 3D 아트 에이전트입니다.', tags: ['game-development'], stars: 4.8, installs: 554, prompt: '이 에이전트는 3D 그래픽 작업이 필요할 때 사용합니다. Blender, Three.js를 활용한 3D 모델, 애니메이션, 씬 구성을 전문으로 지원합니다. "3D 모델 만들어줘", "3D 씬 구성해줘" 요청 시 활성화됩니다.' },
    { id: 'cpp-pro', name: 'C++ 전문가', nameEn: 'cpp-pro', category: 'agents', desc: 'C++20/23 최신 기능, 템플릿 메타프로그래밍, 제로 오버헤드 추상화가 필요한 고성능 시스템을 구축합니다.', tags: ['programming-languages'], stars: 4.8, installs: 540, prompt: '이 에이전트는 C++ 개발이 필요할 때 사용합니다. 현대적 C++ 패턴, 메모리 관리, 성능 최적화, CMake를 전문으로 지원합니다. "C++ 코드 작성해줘", "고성능 시스템 개발해줘" 요청 시 활성화됩니다.' },
    { id: 'tag-agent', name: '태그 에이전트', nameEn: 'tag-agent', category: 'agents', desc: '콘텐츠를 분석하여 관련 태그를 자동으로 생성하고 관리하는 에이전트입니다.', tags: ['obsidian-ops-team', '에이전트'], stars: 4.8, installs: 525, prompt: '이 에이전트는 태그 시스템 관리가 필요할 때 사용합니다. 콘텐츠 기반 태그 추천, 태그 정규화, 태그 계층 구조 관리를 전문으로 지원합니다. "태그 달아줘", "태그 시스템 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'incident-responder', name: '인시던트 대응자', nameEn: 'incident-responder', category: 'agents', desc: '프로덕션 인시던트를 신속하고 정확하게 처리하는 전문 에이전트입니다.', tags: ['보안'], stars: 4.8, installs: 523, prompt: '이 에이전트는 프로덕션 장애와 인시던트 대응이 필요할 때 즉시 사용합니다. 장애 진단, 수정 구현, 포스트모텀 작성을 전문으로 지원합니다. "장애 해결해줘", "인시던트 대응해줘" 요청 시 활성화됩니다.' },
    { id: 'product-manager', name: '프로덕트 매니저', nameEn: 'product-manager', category: 'agents', desc: '제품 전략 결정, 기능 우선순위, 로드맵 계획을 사용자 요구와 비즈니스 목표에 기반하여 수립합니다.', tags: ['business-marketing'], stars: 4.8, installs: 517, prompt: '이 에이전트는 제품 관리와 전략 수립이 필요할 때 사용합니다. PRD 작성, 스프린트 계획, 스테이크홀더 커뮤니케이션을 전문으로 지원합니다. "PRD 작성해줘", "제품 로드맵 만들어줘" 요청 시 활성화됩니다.' },
    { id: 'social-media-clip-creator', name: '소셜 미디어 클립 제작자', nameEn: 'social-media-clip-creator', category: 'agents', desc: 'FFmpeg를 활용하여 소셜 미디어용 비디오 클립을 제작하는 전문 에이전트입니다.', tags: ['ffmpeg-clip-team'], stars: 4.8, installs: 501, prompt: '이 에이전트는 소셜 미디어용 비디오 콘텐츠 제작이 필요할 때 사용합니다. 클립 추출, 자막 추가, 플랫폼별 형식 변환을 전문으로 지원합니다. "소셜 미디어 클립 만들어줘", "비디오 자르고 편집해줘" 요청 시 활성화됩니다.' },
    { id: 'visual-analysis-ocr', name: '시각 분석 OCR', nameEn: 'visual-analysis-ocr', category: 'agents', desc: '이미지에서 텍스트를 추출하고 시각적 콘텐츠를 분석하는 전문 에이전트입니다.', tags: ['ocr-extraction-team'], stars: 4.8, installs: 501, prompt: '이 에이전트는 이미지 텍스트 추출과 시각 분석이 필요할 때 사용합니다. 스캔 문서, 캡처 이미지, 차트에서 정보를 추출합니다. "이미지 텍스트 추출해줘", "OCR 처리해줘" 요청 시 활성화됩니다.' },
    { id: 'mcp-registry-navigator', name: 'MCP 레지스트리 탐색기', nameEn: 'mcp-registry-navigator', category: 'agents', desc: 'MCP 서버 레지스트리를 탐색하고 적합한 MCP를 찾는 에이전트입니다.', tags: ['mcp-dev-team', 'MCP'], stars: 4.7, installs: 492, prompt: '이 에이전트는 적합한 MCP 서버를 찾고 선택하는 데 사용합니다. MCP 레지스트리 검색, 서버 비교, 설치 가이드를 전문으로 지원합니다. "MCP 추천해줘", "적합한 MCP 찾아줘" 요청 시 활성화됩니다.' },
    { id: 'smart-contract-auditor', name: '스마트 컨트랙트 감사관', nameEn: 'smart-contract-auditor', category: 'agents', desc: '스마트 컨트랙트 보안 감사를 수행하고 취약점을 탐지하는 전문 에이전트입니다.', tags: ['blockchain-web3'], stars: 4.7, installs: 488, prompt: '이 에이전트는 스마트 컨트랙트 보안 감사가 필요할 때 사용합니다. 재진입 공격, 오버플로우, 접근 제어 취약점을 전문으로 분석합니다. "스마트 컨트랙트 감사해줘", "솔리디티 보안 검토해줘" 요청 시 활성화됩니다.' },
    { id: 'smart-contract-specialist', name: '스마트 컨트랙트 전문가', nameEn: 'smart-contract-specialist', category: 'agents', desc: 'Solidity로 프로덕션 수준의 스마트 컨트랙트를 개발하고 가스 최적화를 전문으로 합니다.', tags: ['blockchain-web3'], stars: 4.7, installs: 486, prompt: '이 에이전트는 스마트 컨트랙트 개발이 필요할 때 사용합니다. Solidity, Hardhat, Foundry를 활용한 DeFi, NFT, DAO 계약을 전문으로 지원합니다. "스마트 컨트랙트 만들어줘", "Solidity 코드 작성해줘" 요청 시 활성화됩니다.' },
    { id: 'code-simplifier', name: '코드 단순화기', nameEn: 'code-simplifier', category: 'agents', desc: '코드를 명확성, 일관성, 유지 관리성을 개선하면서 모든 기능을 보존하는 에이전트입니다.', tags: ['development-tools'], stars: 4.7, installs: 479, prompt: '이 에이전트는 복잡한 코드를 단순화하고 가독성을 높일 때 사용합니다. 중복 제거, 추상화 개선, 네이밍 개선을 전문으로 지원합니다. "코드 단순화해줘", "코드 가독성 높여줘" 요청 시 활성화됩니다.' },
    { id: 'screenshot-ui-analyzer', name: '스크린샷 UI 분석기', nameEn: 'screenshot-ui-analyzer', category: 'agents', desc: 'UI 스크린샷에서 시각적 컴포넌트, 레이아웃 구조, 디자인 패턴을 분석합니다.', tags: ['ui-analysis'], stars: 4.7, installs: 479, prompt: '이 에이전트는 UI 디자인 분석과 구현이 필요할 때 사용합니다. 스크린샷에서 컴포넌트 추출, 레이아웃 분석, 구현 코드 생성을 전문으로 지원합니다. "UI 스크린샷 분석해줘", "디자인 구현해줘" 요청 시 활성화됩니다.' },
    { id: 'c-pro', name: 'C 전문가', nameEn: 'c-pro', category: 'agents', desc: 'C 언어를 활용한 시스템 프로그래밍, 임베디드, 저수준 개발을 전문으로 합니다.', tags: ['programming-languages'], stars: 4.7, installs: 475, prompt: '이 에이전트는 C 언어 시스템 프로그래밍이 필요할 때 사용합니다. 메모리 관리, 포인터 조작, 시스템 콜, 하드웨어 인터페이스를 전문으로 지원합니다. "C 코드 작성해줘", "시스템 프로그래밍해줘" 요청 시 활성화됩니다.' },
    { id: 'url-context-validator', name: 'URL 컨텍스트 검증기', nameEn: 'url-context-validator', category: 'agents', desc: 'URL의 컨텍스트와 내용을 검증하고 유효성을 확인하는 에이전트입니다.', tags: ['web-tools'], stars: 4.7, installs: 475, prompt: '이 에이전트는 URL 유효성 검사와 컨텍스트 확인이 필요할 때 사용합니다. URL 접근성, 콘텐츠 유형, 리다이렉트, 보안 여부를 전문으로 검증합니다. "URL 검증해줘", "링크 유효성 확인해줘" 요청 시 활성화됩니다.' },
    { id: 'api-architect', name: 'API 아키텍트', nameEn: 'api-architect', category: 'agents', desc: 'API 아키텍처를 설계하고 엔지니어에게 가이드와 지원을 제공하는 에이전트입니다.', tags: ['api-graphql', 'API'], stars: 4.7, installs: 472, prompt: '이 에이전트는 API 아키텍처 설계와 멘토링이 필요할 때 사용합니다. REST, GraphQL, gRPC 설계 원칙과 구현 가이드를 전문으로 제공합니다. "API 아키텍처 설계해줘", "API 설계 가이드해줘" 요청 시 활성화됩니다.' },
    { id: 'vault-optimizer', name: '보관소 최적화', nameEn: 'vault-optimizer', category: 'agents', desc: 'Obsidian 보관소 구조를 최적화하고 정리하는 전문 에이전트입니다.', tags: ['obsidian-ops-team'], stars: 4.7, installs: 461, prompt: '이 에이전트는 Obsidian 노트 보관소 최적화가 필요할 때 사용합니다. 폴더 구조 개선, 플러그인 설정, 워크플로우 최적화를 전문으로 지원합니다. "Obsidian 보관소 정리해줘", "노트 구조 최적화해줘" 요청 시 활성화됩니다.' }
  ],

  commands: [
    { id: 'generate-tests', name: '테스트 생성', nameEn: 'generate-tests', category: 'commands', desc: '지정된 소스 파일이나 컴포넌트에 대한 완전한 테스트 파일을 생성합니다.', tags: ['테스트'], stars: 4.9, installs: 8450, prompt: '이 명령어는 소스 코드에 대한 테스트를 자동 생성할 때 사용합니다. 단위 테스트, 통합 테스트, 엣지 케이스를 자동으로 작성합니다. 사용법: "/generate-tests [파일경로]"로 테스트 파일을 자동 생성합니다.' },
    { id: 'ultra-think', name: '울트라 씽크', nameEn: 'ultra-think', category: 'commands', desc: '멀티 프레임워크 구조적 분석으로 숨겨진 가정을 찾고 경쟁 해결책을 생성하며 심층 분석을 제공합니다.', tags: ['utilities'], stars: 4.9, installs: 6820, prompt: '이 명령어는 복잡한 문제의 심층 분석이 필요할 때 사용합니다. 여러 관점에서 문제를 분석하고 최적의 해결책을 도출합니다. 사용법: "/ultra-think [문제]"로 다각도 분석을 시작합니다.' },
    { id: 'create-architecture-documentation', name: '아키텍처 문서 생성', nameEn: 'create-architecture-documentation', category: 'commands', desc: '다이어그램, ADR, 인터랙티브 시각화를 포함한 종합적인 아키텍처 문서를 생성합니다.', tags: ['문서화'], stars: 4.9, installs: 4689, prompt: '이 명령어는 시스템 아키텍처 문서 작성이 필요할 때 사용합니다. 아키텍처 다이어그램, 결정 기록, 컴포넌트 명세를 자동으로 생성합니다. 사용법: "/create-architecture-documentation"로 전체 문서를 생성합니다.' },
    { id: 'code-review', name: '코드 리뷰', nameEn: 'code-review', category: 'commands', desc: '보안, 성능, 아키텍처 분석을 포함한 종합적인 코드 품질 리뷰를 수행합니다.', tags: ['utilities'], stars: 4.9, installs: 4109, prompt: '이 명령어는 코드 품질 검토가 필요할 때 사용합니다. 보안 취약점, 성능 문제, 코드 스타일, 모범 사례를 종합적으로 검토합니다. 사용법: "/code-review [파일경로]"로 코드 리뷰를 시작합니다.' },
    { id: 'refactor-code', name: '코드 리팩토링', nameEn: 'refactor-code', category: 'commands', desc: '코드를 더 읽기 쉽고 유지 관리하기 쉽게 리팩토링합니다.', tags: ['utilities'], stars: 4.9, installs: 3881, prompt: '이 명령어는 코드 구조 개선과 리팩토링이 필요할 때 사용합니다. 함수 분리, 명명 개선, 중복 제거, 패턴 적용을 지원합니다. 사용법: "/refactor-code [파일경로]"로 리팩토링을 시작합니다.' },
    { id: 'commit', name: '커밋', nameEn: 'commit', category: 'commands', desc: 'Conventional Commit 형식과 이모지를 사용한 잘 구성된 커밋을 생성합니다.', tags: ['git-workflow'], stars: 4.9, installs: 3222, prompt: '이 명령어는 의미 있는 Git 커밋 메시지 작성이 필요할 때 사용합니다. 변경 사항을 분석하여 Conventional Commits 형식의 메시지를 자동 생성합니다. 사용법: "/commit"으로 자동 커밋 메시지를 생성합니다.' },
    { id: 'update-docs', name: '문서 업데이트', nameEn: 'update-docs', category: 'commands', desc: '구현 상태, API 변경사항, 동기화된 콘텐츠로 프로젝트 문서를 체계적으로 업데이트합니다.', tags: ['문서화'], stars: 4.9, installs: 3005, prompt: '이 명령어는 프로젝트 문서를 최신 코드와 동기화할 때 사용합니다. 코드 변경사항을 감지하여 관련 문서를 자동으로 업데이트합니다. 사용법: "/update-docs"로 문서 업데이트를 시작합니다.' },
    { id: 'architecture-review', name: '아키텍처 리뷰', nameEn: 'architecture-review', category: 'commands', desc: '설계 패턴 분석과 개선 권장 사항을 포함한 종합적인 아키텍처 리뷰를 수행합니다.', tags: ['team'], stars: 4.9, installs: 2463, prompt: '이 명령어는 시스템 아키텍처 검토가 필요할 때 사용합니다. SOLID 원칙, 레이어 분리, 확장성, 유지 관리성을 종합적으로 평가합니다. 사용법: "/architecture-review"로 아키텍처 검토를 시작합니다.' },
    { id: 'todo', name: '할 일 관리', nameEn: 'todo', category: 'commands', desc: 'todos.md 파일에서 프로젝트 할 일 목록을 관리합니다.', tags: ['project-management'], stars: 4.9, installs: 2007, prompt: '이 명령어는 프로젝트 할 일 목록 관리가 필요할 때 사용합니다. 할 일 추가, 완료 처리, 우선순위 관리를 todos.md 파일로 추적합니다. 사용법: "/todo [추가/완료/목록]"으로 할 일을 관리합니다.' },
    { id: 'create-prd', name: 'PRD 생성', nameEn: 'create-prd', category: 'commands', desc: '새 기능을 위한 제품 요구사항 문서(PRD)를 생성합니다.', tags: ['project-management'], stars: 4.9, installs: 1871, prompt: '이 명령어는 기능 요구사항 정의가 필요할 때 사용합니다. 사용자 스토리, 수용 기준, 기술 명세를 포함한 PRD를 자동 생성합니다. 사용법: "/create-prd [기능명]"으로 PRD를 작성합니다.' },
    { id: 'explain-code', name: '코드 설명', nameEn: 'explain-code', category: 'commands', desc: '복잡한 코드를 이해하기 쉽게 설명합니다.', tags: ['utilities'], stars: 4.9, installs: 1757, prompt: '이 명령어는 코드 이해가 필요할 때 사용합니다. 코드의 동작 방식, 사용된 패턴, 잠재적 문제를 명확하게 설명합니다. 사용법: "/explain-code [코드 또는 파일경로]"로 설명을 시작합니다.' },
    { id: 'workflow-orchestrator', name: '워크플로우 오케스트레이터', nameEn: 'workflow-orchestrator', category: 'commands', desc: '작업 의존성, 스케줄링, 크로스 플랫폼 실행을 포함한 복잡한 자동화 워크플로우를 조율합니다.', tags: ['자동화', '워크플로우'], stars: 4.9, installs: 1669, prompt: '이 명령어는 복잡한 자동화 워크플로우 구성이 필요할 때 사용합니다. 다단계 작업 흐름, 조건부 실행, 병렬 처리를 설계합니다. 사용법: "/workflow-orchestrator [워크플로우 설명]"으로 자동화를 구성합니다.' },
    { id: 'add-changelog', name: '변경 로그 추가', nameEn: 'add-changelog', category: 'commands', desc: 'Keep a Changelog 형식으로 프로젝트 변경 로그를 생성하고 유지 관리합니다.', tags: ['deployment'], stars: 4.9, installs: 1461, prompt: '이 명령어는 프로젝트 변경 로그 관리가 필요할 때 사용합니다. Git 커밋 히스토리를 분석하여 CHANGELOG.md를 자동으로 업데이트합니다. 사용법: "/add-changelog [버전]"으로 변경 로그를 추가합니다.' },
    { id: 'feature', name: '피처 브랜치', nameEn: 'feature', category: 'commands', desc: 'develop에서 적절한 명명과 추적이 포함된 새 Git Flow 피처 브랜치를 생성합니다.', tags: ['git'], stars: 4.9, installs: 1395, prompt: '이 명령어는 새 기능 개발 시작이 필요할 때 사용합니다. Git Flow 규칙에 따라 피처 브랜치를 자동으로 생성합니다. 사용법: "/feature [기능명]"으로 피처 브랜치를 만듭니다.' },
    { id: 'finish', name: '브랜치 완료', nameEn: 'finish', category: 'commands', desc: '현재 Git Flow 브랜치(피처/릴리즈/핫픽스)를 완료하고 병합하며 정리합니다.', tags: ['git'], stars: 4.9, installs: 1376, prompt: '이 명령어는 현재 작업 브랜치를 완료하고 병합할 때 사용합니다. Git Flow 절차에 따라 브랜치를 병합하고 삭제합니다. 사용법: "/finish"로 현재 브랜치 작업을 완료합니다.' },
    { id: 'generate-api-documentation', name: 'API 문서 자동 생성', nameEn: 'generate-api-documentation', category: 'commands', desc: '다양한 출력 형식과 자동화된 배포를 포함한 API 레퍼런스 문서를 자동 생성합니다.', tags: ['문서화', 'API'], stars: 4.9, installs: 1280, prompt: '이 명령어는 API 문서 자동 생성이 필요할 때 사용합니다. 코드에서 OpenAPI 명세, 인터랙티브 예제, SDK 레퍼런스를 자동으로 생성합니다. 사용법: "/generate-api-documentation"으로 API 문서를 생성합니다.' },
    { id: 'release', name: '릴리즈 브랜치', nameEn: 'release', category: 'commands', desc: 'develop에서 버전 증가와 변경 로그 생성을 포함한 새 Git Flow 릴리즈 브랜치를 생성합니다.', tags: ['git'], stars: 4.9, installs: 1251, prompt: '이 명령어는 새 릴리즈 준비가 필요할 때 사용합니다. 버전 번호 업데이트, 릴리즈 노트 생성, 릴리즈 브랜치 생성을 자동화합니다. 사용법: "/release [버전]"으로 릴리즈를 준비합니다.' },
    { id: 'flow-status', name: 'Git Flow 상태', nameEn: 'flow-status', category: 'commands', desc: '브랜치 유형, 동기화 상태, 변경 사항, 병합 대상을 포함한 종합적인 Git Flow 상태를 표시합니다.', tags: ['git'], stars: 4.9, installs: 1244, prompt: '이 명령어는 현재 Git Flow 상태 확인이 필요할 때 사용합니다. 현재 브랜치, 변경 사항, 병합 준비 상태를 한눈에 파악합니다. 사용법: "/flow-status"로 Git Flow 상태를 확인합니다.' },
    { id: 'hotfix', name: '핫픽스 브랜치', nameEn: 'hotfix', category: 'commands', desc: '긴급 프로덕션 수정을 위해 main에서 새 Git Flow 핫픽스 브랜치를 생성합니다.', tags: ['git'], stars: 4.9, installs: 1230, prompt: '이 명령어는 프로덕션 긴급 버그 수정이 필요할 때 사용합니다. main 브랜치에서 핫픽스 브랜치를 즉시 생성하고 수정 후 배포합니다. 사용법: "/hotfix [버그설명]"으로 핫픽스를 시작합니다.' },
    { id: 'all-tools', name: '전체 도구', nameEn: 'all-tools', category: 'commands', desc: '모든 사용 가능한 Claude Code 도구와 명령어를 조회하고 활용합니다.', tags: ['utilities'], stars: 4.9, installs: 1015, prompt: '이 명령어는 사용 가능한 모든 도구 목록이 필요할 때 사용합니다. Claude Code의 전체 기능과 사용법을 확인합니다. 사용법: "/all-tools"로 전체 도구 목록을 표시합니다.' },
    { id: 'init-project', name: '프로젝트 초기화', nameEn: 'init-project', category: 'commands', desc: '필수 구조, 설정, 개발 환경 설정으로 새 프로젝트를 초기화합니다.', tags: ['project-management'], stars: 4.8, installs: 998, prompt: '이 명령어는 새 프로젝트 시작이 필요할 때 사용합니다. 디렉토리 구조, 설정 파일, 기본 의존성, Git 설정을 자동으로 구성합니다. 사용법: "/init-project [프로젝트명]"으로 프로젝트를 초기화합니다.' },
    { id: 'supabase-schema-sync', name: 'Supabase 스키마 동기화', nameEn: 'supabase-schema-sync', category: 'commands', desc: 'MCP 통합을 사용하여 데이터베이스 스키마를 Supabase와 동기화합니다.', tags: ['데이터베이스'], stars: 4.8, installs: 985, prompt: '이 명령어는 Supabase 스키마 동기화가 필요할 때 사용합니다. 로컬 마이그레이션과 Supabase 프로덕션 스키마를 자동으로 동기화합니다. 사용법: "/supabase-schema-sync"로 스키마를 동기화합니다.' },
    { id: 'docs-maintenance', name: '문서 유지 관리', nameEn: 'docs-maintenance', category: 'commands', desc: '프로젝트 문서를 최신 상태로 유지하고 코드와 동기화합니다.', tags: ['문서화'], stars: 4.8, installs: 924, prompt: '이 명령어는 문서 유지 관리가 필요할 때 사용합니다. 오래된 문서 탐지, 코드 변경사항 반영, 문서 일관성 확인을 지원합니다. 사용법: "/docs-maintenance"로 문서를 점검합니다.' },
    { id: 'containerize-application', name: '애플리케이션 컨테이너화', nameEn: 'containerize-application', category: 'commands', desc: '최적화된 Docker 설정, 보안, 멀티 스테이지 빌드로 애플리케이션을 컨테이너화합니다.', tags: ['deployment'], stars: 4.8, installs: 856, prompt: '이 명령어는 Docker 컨테이너화가 필요할 때 사용합니다. 최적화된 Dockerfile, docker-compose, .dockerignore를 자동으로 생성합니다. 사용법: "/containerize-application"으로 Docker 설정을 생성합니다.' },
    { id: 'security-audit', name: '보안 감사', nameEn: 'security-audit', category: 'commands', desc: '종합적인 보안 평가와 취약점 분석을 수행합니다.', tags: ['보안'], stars: 4.8, installs: 816, prompt: '이 명령어는 애플리케이션 보안 감사가 필요할 때 사용합니다. OWASP Top 10, 의존성 취약점, 설정 오류를 종합적으로 검사합니다. 사용법: "/security-audit"으로 보안 감사를 시작합니다.' },
    { id: 'supabase-data-explorer', name: 'Supabase 데이터 탐색', nameEn: 'supabase-data-explorer', category: 'commands', desc: '지능적인 쿼리와 시각화로 Supabase 데이터베이스 데이터를 탐색하고 분석합니다.', tags: ['데이터베이스'], stars: 4.8, installs: 797, prompt: '이 명령어는 Supabase 데이터 탐색이 필요할 때 사용합니다. 테이블 조회, 관계 탐색, 데이터 시각화를 대화형으로 지원합니다. 사용법: "/supabase-data-explorer [테이블명]"으로 데이터를 탐색합니다.' },
    { id: 'design-database-schema', name: '데이터베이스 스키마 설계', nameEn: 'design-database-schema', category: 'commands', desc: '적절한 관계, 제약 조건, 성능 고려사항을 포함한 최적화된 데이터베이스 스키마를 설계합니다.', tags: ['setup', '데이터베이스'], stars: 4.8, installs: 770, prompt: '이 명령어는 데이터베이스 스키마 설계가 필요할 때 사용합니다. 요구사항 분석을 통해 정규화된 스키마, 인덱스, 제약 조건을 설계합니다. 사용법: "/design-database-schema [요구사항]"으로 스키마를 설계합니다.' },
    { id: 'supabase-performance-optimizer', name: 'Supabase 성능 최적화', nameEn: 'supabase-performance-optimizer', category: 'commands', desc: '지능적인 분석과 권장 사항으로 Supabase 데이터베이스 성능을 최적화합니다.', tags: ['데이터베이스', '성능'], stars: 4.8, installs: 768, prompt: '이 명령어는 Supabase 성능 최적화가 필요할 때 사용합니다. 슬로우 쿼리, 인덱스 부재, RLS 성능 문제를 분석하고 개선합니다. 사용법: "/supabase-performance-optimizer"로 성능을 분석합니다.' },
    { id: 'start', name: '시작', nameEn: 'start', category: 'commands', desc: '프로젝트나 작업 세션을 시작하고 컨텍스트를 로드합니다.', tags: ['orchestration'], stars: 4.8, installs: 759, prompt: '이 명령어는 새 작업 세션 시작이 필요할 때 사용합니다. 프로젝트 컨텍스트 로드, 이전 진행 상황 확인, 작업 계획 수립을 지원합니다. 사용법: "/start"로 세션을 시작합니다.' },
    { id: 'supabase-migration-assistant', name: 'Supabase 마이그레이션 도우미', nameEn: 'supabase-migration-assistant', category: 'commands', desc: '자동화된 테스트와 검증으로 Supabase 데이터베이스 마이그레이션을 생성하고 관리합니다.', tags: ['데이터베이스'], stars: 4.8, installs: 714, prompt: '이 명령어는 Supabase 마이그레이션 관리가 필요할 때 사용합니다. 스키마 변경 마이그레이션 파일 생성, 테스트, 롤백 전략을 자동화합니다. 사용법: "/supabase-migration-assistant"로 마이그레이션을 관리합니다.' },
    { id: 'nextjs-component-generator', name: 'Next.js 컴포넌트 생성기', nameEn: 'nextjs-component-generator', category: 'commands', desc: 'TypeScript와 모범 사례를 포함한 최적화된 Next.js React 컴포넌트를 생성합니다.', tags: ['nextjs-vercel', 'Next.js'], stars: 4.8, installs: 706, prompt: '이 명령어는 Next.js 컴포넌트 생성이 필요할 때 사용합니다. Server Component, Client Component, TypeScript 인터페이스를 포함한 컴포넌트를 자동 생성합니다. 사용법: "/nextjs-component-generator [컴포넌트명]"으로 컴포넌트를 생성합니다.' },
    { id: 'create-feature', name: '피처 생성', nameEn: 'create-feature', category: 'commands', desc: '보일러플레이트 코드, 테스트, 문서를 포함한 새 기능을 스캐폴딩합니다.', tags: ['project-management'], stars: 4.8, installs: 705, prompt: '이 명령어는 새 기능 구조 생성이 필요할 때 사용합니다. 파일 구조, 컴포넌트, 테스트, 문서를 한 번에 생성합니다. 사용법: "/create-feature [기능명]"으로 기능 구조를 생성합니다.' },
    { id: 'supabase-security-audit', name: 'Supabase 보안 감사', nameEn: 'supabase-security-audit', category: 'commands', desc: 'RLS 분석과 취약점 평가를 포함한 종합적인 Supabase 보안 감사를 수행합니다.', tags: ['데이터베이스', '보안'], stars: 4.8, installs: 704, prompt: '이 명령어는 Supabase 보안 검토가 필요할 때 사용합니다. RLS 정책, 함수 보안, 데이터 노출 위험을 종합적으로 감사합니다. 사용법: "/supabase-security-audit"으로 보안 감사를 시작합니다.' },
    { id: 'supabase-type-generator', name: 'Supabase 타입 생성기', nameEn: 'supabase-type-generator', category: 'commands', desc: '자동 동기화와 검증을 포함한 Supabase 스키마에서 TypeScript 타입을 생성합니다.', tags: ['데이터베이스'], stars: 4.8, installs: 694, prompt: '이 명령어는 Supabase 스키마 기반 TypeScript 타입 생성이 필요할 때 사용합니다. 테이블, 뷰, 함수에 대한 타입 정의를 자동 생성합니다. 사용법: "/supabase-type-generator"로 타입을 생성합니다.' },
    { id: 'create-pr', name: 'PR 생성', nameEn: 'create-pr', category: 'commands', desc: '변경 사항을 분석하여 Pull Request를 자동으로 생성합니다.', tags: ['git-workflow'], stars: 4.8, installs: 686, prompt: '이 명령어는 Pull Request 생성이 필요할 때 사용합니다. 변경 사항을 분석하여 제목, 설명, 리뷰어 제안을 자동으로 작성합니다. 사용법: "/create-pr"으로 PR을 생성합니다.' },
    { id: 'supabase-backup-manager', name: 'Supabase 백업 관리자', nameEn: 'supabase-backup-manager', category: 'commands', desc: '자동화된 스케줄링과 복구 절차로 Supabase 데이터베이스 백업을 관리합니다.', tags: ['데이터베이스'], stars: 4.8, installs: 649, prompt: '이 명령어는 Supabase 백업 관리가 필요할 때 사용합니다. 백업 일정 설정, 백업 검증, 재해 복구 계획을 자동화합니다. 사용법: "/supabase-backup-manager"로 백업을 관리합니다.' },
    { id: 'create-onboarding-guide', name: '온보딩 가이드 생성', nameEn: 'create-onboarding-guide', category: 'commands', desc: '환경 설정, 워크플로우, 인터랙티브 튜토리얼을 포함한 종합적인 개발자 온보딩 가이드를 생성합니다.', tags: ['문서화'], stars: 4.8, installs: 648, prompt: '이 명령어는 신규 개발자 온보딩 문서 생성이 필요할 때 사용합니다. 개발 환경 설정, 코딩 규칙, 배포 절차를 단계별로 안내합니다. 사용법: "/create-onboarding-guide"로 온보딩 가이드를 생성합니다.' },
    { id: 'supabase-realtime-monitor', name: 'Supabase 실시간 모니터', nameEn: 'supabase-realtime-monitor', category: 'commands', desc: '성능 분석과 디버깅으로 Supabase 실시간 연결을 모니터링하고 최적화합니다.', tags: ['데이터베이스'], stars: 4.8, installs: 582, prompt: '이 명령어는 Supabase 실시간 연결 모니터링이 필요할 때 사용합니다. 활성 구독, 연결 상태, 성능 메트릭을 실시간으로 추적합니다. 사용법: "/supabase-realtime-monitor"로 모니터링을 시작합니다.' },
    { id: 'doc-api', name: 'API 문서화', nameEn: 'doc-api', category: 'commands', desc: '인터랙티브 예제와 테스트 기능을 포함한 종합적인 API 문서를 코드에서 생성합니다.', tags: ['문서화', 'API'], stars: 4.8, installs: 538, prompt: '이 명령어는 API 문서 생성이 필요할 때 사용합니다. 코드 주석과 타입 정의에서 자동으로 API 문서를 생성합니다. 사용법: "/doc-api"로 API 문서를 생성합니다.' },
    { id: 'optimize-database-performance', name: '데이터베이스 성능 최적화', nameEn: 'optimize-database-performance', category: 'commands', desc: '데이터베이스 쿼리, 인덱싱, 성능을 최적화하여 응답 시간과 확장성을 향상시킵니다.', tags: ['performance', '데이터베이스'], stars: 4.8, installs: 533, prompt: '이 명령어는 데이터베이스 성능 개선이 필요할 때 사용합니다. 슬로우 쿼리 분석, 인덱스 최적화, 쿼리 재작성을 자동으로 지원합니다. 사용법: "/optimize-database-performance"로 성능을 최적화합니다.' },
    { id: 'setup-docker-containers', name: 'Docker 컨테이너 설정', nameEn: 'setup-docker-containers', category: 'commands', desc: '멀티 스테이지 빌드와 개발 워크플로우로 Docker 컨테이너화를 설정합니다.', tags: ['setup', 'Docker'], stars: 4.8, installs: 532, prompt: '이 명령어는 Docker 개발 환경 설정이 필요할 때 사용합니다. Dockerfile, docker-compose.yml, 개발/프로덕션 환경 설정을 자동 생성합니다. 사용법: "/setup-docker-containers"로 Docker를 설정합니다.' },
    { id: 'debug-error', name: '오류 디버그', nameEn: 'debug-error', category: 'commands', desc: '오류를 체계적으로 분석하고 근본 원인을 파악하여 수정 방안을 제시합니다.', tags: ['utilities'], stars: 4.7, installs: 495, prompt: '이 명령어는 오류 디버깅이 필요할 때 사용합니다. 스택 트레이스 분석, 오류 재현, 수정 방안 도출을 단계별로 지원합니다. 사용법: "/debug-error [오류 메시지]"로 디버깅을 시작합니다.' },
    { id: 'generate-test-cases', name: '테스트 케이스 생성', nameEn: 'generate-test-cases', category: 'commands', desc: '자동 분석과 커버리지 최적화로 종합적인 테스트 케이스를 생성합니다.', tags: ['테스트'], stars: 4.7, installs: 469, prompt: '이 명령어는 테스트 케이스 자동 생성이 필요할 때 사용합니다. 정상 경로, 엣지 케이스, 오류 시나리오를 포함한 테스트를 생성합니다. 사용법: "/generate-test-cases [함수/클래스]"로 테스트를 생성합니다.' },
    { id: 'nextjs-performance-audit', name: 'Next.js 성능 감사', nameEn: 'nextjs-performance-audit', category: 'commands', desc: '실행 가능한 최적화 권장 사항을 포함한 종합적인 Next.js 성능 감사를 수행합니다.', tags: ['nextjs-vercel', 'Next.js', '성능'], stars: 4.7, installs: 454, prompt: '이 명령어는 Next.js 앱 성능 감사가 필요할 때 사용합니다. 번들 크기, 렌더링 전략, Core Web Vitals를 분석하고 개선 방안을 제시합니다. 사용법: "/nextjs-performance-audit"으로 성능을 감사합니다.' },
    { id: 'setup-development-environment', name: '개발 환경 설정', nameEn: 'setup-development-environment', category: 'commands', desc: '도구, 설정, 워크플로우를 포함한 종합적인 개발 환경을 설정합니다.', tags: ['setup'], stars: 4.7, installs: 452, prompt: '이 명령어는 새 개발 환경 구성이 필요할 때 사용합니다. IDE 설정, 린터, 포매터, 환경 변수를 자동으로 구성합니다. 사용법: "/setup-development-environment"로 환경을 설정합니다.' },
    { id: 'resume', name: '재개', nameEn: 'resume', category: 'commands', desc: '이전 세션이나 작업에서 중단된 지점을 재개합니다.', tags: ['orchestration'], stars: 4.7, installs: 447, prompt: '이 명령어는 이전 작업을 재개할 때 사용합니다. 세션 컨텍스트를 복원하고 진행 중인 작업을 이어서 계속합니다. 사용법: "/resume"으로 이전 작업을 재개합니다.' },
    { id: 'prime', name: '프라임', nameEn: 'prime', category: 'commands', desc: 'Claude를 특정 컨텍스트나 전문 지식으로 초기화하고 준비합니다.', tags: ['utilities'], stars: 4.7, installs: 444, prompt: '이 명령어는 특정 도메인 작업 준비가 필요할 때 사용합니다. Claude에게 프로젝트 컨텍스트, 코딩 규칙, 특수 지식을 사전 제공합니다. 사용법: "/prime [컨텍스트]"로 Claude를 준비시킵니다.' },
    { id: 'directory-deep-dive', name: '디렉토리 심층 분석', nameEn: 'directory-deep-dive', category: 'commands', desc: '프로젝트 디렉토리 구조를 심층 분석하고 코드베이스를 이해합니다.', tags: ['utilities'], stars: 4.7, installs: 441, prompt: '이 명령어는 낯선 코드베이스 탐색이 필요할 때 사용합니다. 파일 구조, 모듈 관계, 핵심 파일을 분석하여 프로젝트를 이해합니다. 사용법: "/directory-deep-dive [경로]"로 분석을 시작합니다.' },
    { id: 'nextjs-bundle-analyzer', name: 'Next.js 번들 분석기', nameEn: 'nextjs-bundle-analyzer', category: 'commands', desc: '상세한 권장 사항으로 Next.js 번들 크기를 분석하고 최적화합니다.', tags: ['nextjs-vercel', 'Next.js'], stars: 4.7, installs: 392, prompt: '이 명령어는 Next.js 번들 크기 최적화가 필요할 때 사용합니다. 번들 구성 분석, 큰 패키지 탐지, 코드 스플리팅 기회를 파악합니다. 사용법: "/nextjs-bundle-analyzer"로 번들을 분석합니다.' },
    { id: 'performance-audit', name: '성능 감사', nameEn: 'performance-audit', category: 'commands', desc: '메트릭, 병목 지점 식별, 최적화 권장 사항을 포함한 종합적인 성능 감사를 수행합니다.', tags: ['performance', '성능'], stars: 4.7, installs: 380, prompt: '이 명령어는 애플리케이션 성능 종합 감사가 필요할 때 사용합니다. 렌더링, 네트워크, 메모리, CPU 성능을 측정하고 개선 방안을 제시합니다. 사용법: "/performance-audit"으로 성능 감사를 시작합니다.' },
    { id: 'design-rest-api', name: 'REST API 설계', nameEn: 'design-rest-api', category: 'commands', desc: '포괄적인 엔드포인트, 인증, 문서를 포함한 RESTful API 아키텍처를 설계합니다.', tags: ['setup'], stars: 4.7, installs: 378, prompt: '이 명령어는 REST API 설계가 필요할 때 사용합니다. 엔드포인트 구조, HTTP 메서드, 요청/응답 형식, 인증을 설계합니다. 사용법: "/design-rest-api [서비스 설명]"으로 API를 설계합니다.' },
    { id: 'implement-caching-strategy', name: '캐싱 전략 구현', nameEn: 'implement-caching-strategy', category: 'commands', desc: '성능과 확장성 향상을 위한 종합적인 캐싱 솔루션을 설계하고 구현합니다.', tags: ['performance'], stars: 4.7, installs: 366, prompt: '이 명령어는 캐싱 전략 구현이 필요할 때 사용합니다. Redis, 브라우저 캐시, CDN, 메모리 캐시 전략을 설계하고 구현합니다. 사용법: "/implement-caching-strategy"로 캐싱을 구현합니다.' },
    { id: 'test-coverage', name: '테스트 커버리지', nameEn: 'test-coverage', category: 'commands', desc: '종합적인 보고와 갭 식별로 테스트 커버리지를 분석하고 개선합니다.', tags: ['테스트'], stars: 4.7, installs: 358, prompt: '이 명령어는 테스트 커버리지 분석이 필요할 때 사용합니다. 커버리지 리포트 생성, 미테스트 코드 탐지, 커버리지 목표 달성 방안을 제시합니다. 사용법: "/test-coverage"로 커버리지를 분석합니다.' },
    { id: 'dependency-audit', name: '의존성 감사', nameEn: 'dependency-audit', category: 'commands', desc: '보안 취약점, 라이선스 컴플라이언스, 업데이트 권장 사항을 포함한 의존성을 감사합니다.', tags: ['보안'], stars: 4.7, installs: 343, prompt: '이 명령어는 프로젝트 의존성 보안 감사가 필요할 때 사용합니다. 취약한 패키지, 라이선스 충돌, 오래된 패키지를 체계적으로 검사합니다. 사용법: "/dependency-audit"으로 의존성을 감사합니다.' },
    { id: 'nextjs-api-tester', name: 'Next.js API 테스터', nameEn: 'nextjs-api-tester', category: 'commands', desc: '종합적인 테스트 시나리오로 Next.js API 라우트를 테스트하고 검증합니다.', tags: ['nextjs-vercel', 'Next.js', 'API'], stars: 4.7, installs: 336, prompt: '이 명령어는 Next.js API 라우트 테스트가 필요할 때 사용합니다. API 엔드포인트의 요청/응답, 인증, 오류 처리를 자동으로 테스트합니다. 사용법: "/nextjs-api-tester [라우트 경로]"로 테스트합니다.' },
    { id: 'commit', name: '커밋 (오케스트레이션)', nameEn: 'commit', category: 'commands', desc: '오케스트레이션 컨텍스트에서 작업을 커밋하고 진행 상황을 저장합니다.', tags: ['orchestration'], stars: 4.7, installs: 325, prompt: '이 명령어는 오케스트레이션 워크플로우에서 진행 상황 저장이 필요할 때 사용합니다. 현재 작업 상태를 기록하고 다음 단계를 준비합니다. 사용법: "/commit"으로 진행 상황을 저장합니다.' },
    { id: 'vercel-deploy-optimize', name: 'Vercel 배포 최적화', nameEn: 'vercel-deploy-optimize', category: 'commands', desc: '성능 모니터링으로 Next.js 애플리케이션을 Vercel에 최적화하여 배포합니다.', tags: ['nextjs-vercel'], stars: 4.7, installs: 320, prompt: '이 명령어는 Vercel 최적화 배포가 필요할 때 사용합니다. 빌드 최적화, Edge 설정, 환경 변수 관리를 통합하여 배포합니다. 사용법: "/vercel-deploy-optimize"로 최적화된 배포를 시작합니다.' },
    { id: 'pr-review', name: 'PR 리뷰', nameEn: 'pr-review', category: 'commands', desc: 'Pull Request를 종합적으로 리뷰하고 피드백을 제공합니다.', tags: ['git-workflow'], stars: 4.7, installs: 318, prompt: '이 명령어는 Pull Request 리뷰가 필요할 때 사용합니다. 코드 품질, 테스트, 문서, 설계를 종합적으로 검토하고 피드백을 제공합니다. 사용법: "/pr-review [PR 번호]"로 리뷰를 시작합니다.' },
    { id: 'create-pull-request', name: 'Pull Request 생성', nameEn: 'create-pull-request', category: 'commands', desc: '변경 사항을 분석하여 자세한 설명이 포함된 Pull Request를 생성합니다.', tags: ['git-workflow'], stars: 4.7, installs: 299, prompt: '이 명령어는 PR 생성이 필요할 때 사용합니다. 변경 사항 요약, 테스트 계획, 스크린샷 섹션이 포함된 PR을 자동으로 생성합니다. 사용법: "/create-pull-request"로 PR을 생성합니다.' },
    { id: 'optimize-memory-usage', name: '메모리 사용량 최적화', nameEn: 'optimize-memory-usage', category: 'commands', desc: '메모리 누수 탐지, 가비지 컬렉션 튜닝, 메모리 프로파일링으로 메모리 사용량을 최적화합니다.', tags: ['performance'], stars: 4.7, installs: 297, prompt: '이 명령어는 메모리 최적화가 필요할 때 사용합니다. 메모리 누수 탐지, 객체 풀링, 캐시 전략을 통해 메모리 효율을 개선합니다. 사용법: "/optimize-memory-usage"로 메모리를 최적화합니다.' },
    { id: 'project-health-check', name: '프로젝트 상태 점검', nameEn: 'project-health-check', category: 'commands', desc: '전체 프로젝트 상태를 분석하고 종합적인 메트릭 보고서를 생성합니다.', tags: ['project-management'], stars: 4.7, installs: 297, prompt: '이 명령어는 프로젝트 전반적인 상태 점검이 필요할 때 사용합니다. 코드 품질, 테스트 커버리지, 보안, 성능을 종합적으로 평가합니다. 사용법: "/project-health-check"으로 상태 점검을 시작합니다.' },
    { id: 'optimize-api-performance', name: 'API 성능 최적화', nameEn: 'optimize-api-performance', category: 'commands', desc: 'API 응답 시간 단축, 처리량 개선, 확장성 향상을 포함한 종합적인 API 성능 최적화를 수행합니다.', tags: ['performance', 'API'], stars: 4.7, installs: 296, prompt: '이 명령어는 API 성능 개선이 필요할 때 사용합니다. 캐싱, 페이지네이션, 쿼리 최적화, 연결 풀링을 통해 API 성능을 향상시킵니다. 사용법: "/optimize-api-performance"로 최적화를 시작합니다.' },
    { id: 'setup-linting', name: '린팅 설정', nameEn: 'setup-linting', category: 'commands', desc: '자동 실행이 포함된 종합적인 코드 린팅과 품질 분석 도구를 설정합니다.', tags: ['setup'], stars: 4.7, installs: 296, prompt: '이 명령어는 코드 린팅 환경 설정이 필요할 때 사용합니다. ESLint, Prettier, 커스텀 규칙을 프로젝트에 맞게 자동으로 구성합니다. 사용법: "/setup-linting"으로 린팅을 설정합니다.' },
    { id: 'write-tests', name: '테스트 작성', nameEn: 'write-tests', category: 'commands', desc: '적절한 목킹과 커버리지를 포함한 종합적인 단위 및 통합 테스트를 작성합니다.', tags: ['테스트'], stars: 4.7, installs: 296, prompt: '이 명령어는 테스트 코드 작성이 필요할 때 사용합니다. 단위 테스트, 통합 테스트, 목 설정을 포함한 완전한 테스트 파일을 작성합니다. 사용법: "/write-tests [파일경로]"로 테스트를 작성합니다.' },
    { id: 'session-learning-capture', name: '세션 학습 캡처', nameEn: 'session-learning-capture', category: 'commands', desc: '세션 학습을 캡처하고 자동 지식 통합과 메모리 업데이트로 문서화합니다.', tags: ['team'], stars: 4.7, installs: 292, prompt: '이 명령어는 개발 세션에서 배운 내용을 기록할 때 사용합니다. 의사 결정, 오류와 해결책, 인사이트를 자동으로 문서화합니다. 사용법: "/session-learning-capture"로 학습을 기록합니다.' },
    { id: 'web-design-reviewer', name: '웹 디자인 리뷰어', nameEn: 'web-design-reviewer', category: 'commands', desc: '로컬 또는 원격으로 실행 중인 웹사이트를 시각적으로 검사하여 디자인 문제를 식별하고 수정합니다.', tags: ['design'], stars: 4.7, installs: 291, prompt: '이 명령어는 웹사이트 디자인 검토가 필요할 때 사용합니다. UI/UX 문제, 반응형 레이아웃, 색상 대비, 접근성을 시각적으로 검사합니다. 사용법: "/web-design-reviewer [URL]"로 디자인을 검토합니다.' },
    { id: 'ci-pipeline', name: 'CI 파이프라인', nameEn: 'ci-pipeline', category: 'commands', desc: 'GitHub Actions, 멀티 환경 지원, 배포 전략으로 CI/CD 파이프라인을 관리하고 자동화합니다.', tags: ['자동화'], stars: 4.7, installs: 289, prompt: '이 명령어는 CI/CD 파이프라인 설정이 필요할 때 사용합니다. GitHub Actions 워크플로우, 테스트 자동화, 배포 스크립트를 자동으로 생성합니다. 사용법: "/ci-pipeline"으로 파이프라인을 설정합니다.' },
    { id: 'secrets-scanner', name: '시크릿 스캐너', nameEn: 'secrets-scanner', category: 'commands', desc: '코드베이스에서 노출된 시크릿, 자격증명, 민감한 정보를 스캔합니다.', tags: ['보안'], stars: 4.7, installs: 286, prompt: '이 명령어는 코드베이스 보안 스캔이 필요할 때 사용합니다. API 키, 비밀번호, 토큰 등 하드코딩된 민감 정보를 탐지합니다. 사용법: "/secrets-scanner"로 시크릿 스캔을 시작합니다.' },
    { id: 'optimize-build', name: '빌드 최적화', nameEn: 'optimize-build', category: 'commands', desc: '빌드 프로세스를 최적화하여 빌드 시간과 산출물 크기를 줄입니다.', tags: ['performance'], stars: 4.7, installs: 285, prompt: '이 명령어는 빌드 프로세스 최적화가 필요할 때 사용합니다. 번들 분석, 캐싱 전략, 병렬 빌드를 통해 빌드 성능을 개선합니다. 사용법: "/optimize-build"로 빌드를 최적화합니다.' },
    { id: 'architecture-scenario-explorer', name: '아키텍처 시나리오 탐색기', nameEn: 'architecture-scenario-explorer', category: 'commands', desc: '다양한 아키텍처 시나리오를 탐색하고 트레이드오프를 분석합니다.', tags: ['utilities'], stars: 4.7, installs: 279, prompt: '이 명령어는 아키텍처 의사결정이 필요할 때 사용합니다. 여러 아키텍처 옵션을 비교하고 각 접근 방식의 장단점을 분석합니다. 사용법: "/architecture-scenario-explorer [문제]"로 시나리오를 탐색합니다.' },
    { id: 'vercel-env-sync', name: 'Vercel 환경 변수 동기화', nameEn: 'vercel-env-sync', category: 'commands', desc: '로컬 개발과 Vercel 배포 간 환경 변수를 동기화합니다.', tags: ['nextjs-vercel'], stars: 4.7, installs: 267, prompt: '이 명령어는 Vercel 환경 변수 관리가 필요할 때 사용합니다. 로컬 .env 파일과 Vercel 환경을 일관되게 동기화합니다. 사용법: "/vercel-env-sync"로 환경 변수를 동기화합니다.' },
    { id: 'optimize', name: '최적화', nameEn: 'optimize', category: 'commands', desc: '코드, 성능, 리소스를 종합적으로 최적화합니다.', tags: ['orchestration'], stars: 4.7, installs: 266, prompt: '이 명령어는 전반적인 최적화가 필요할 때 사용합니다. 코드 품질, 성능, 메모리, 빌드를 종합적으로 분석하고 최적화합니다. 사용법: "/optimize [대상]"으로 최적화를 시작합니다.' },
    { id: 'penetration-test', name: '침투 테스트', nameEn: 'penetration-test', category: 'commands', desc: '애플리케이션에 대한 침투 테스트와 취약점 평가를 수행합니다.', tags: ['보안'], stars: 4.7, installs: 266, prompt: '이 명령어는 보안 취약점 테스트가 필요할 때 사용합니다. OWASP 방법론에 따라 인젝션, 인증, 설정 오류를 체계적으로 테스트합니다. 사용법: "/penetration-test"로 침투 테스트를 시작합니다.' },
    { id: 'nextjs-middleware-creator', name: 'Next.js 미들웨어 생성기', nameEn: 'nextjs-middleware-creator', category: 'commands', desc: '인증, 속도 제한, 라우팅 로직을 포함한 최적화된 Next.js 미들웨어를 생성합니다.', tags: ['nextjs-vercel', 'Next.js'], stars: 4.7, installs: 262, prompt: '이 명령어는 Next.js 미들웨어 개발이 필요할 때 사용합니다. 인증 검사, 속도 제한, A/B 테스팅, 지역화 미들웨어를 자동으로 생성합니다. 사용법: "/nextjs-middleware-creator [미들웨어 유형]"으로 생성합니다.' },
    { id: 'memory-spring-cleaning', name: '메모리 봄 청소', nameEn: 'memory-spring-cleaning', category: 'commands', desc: '구현 동기화와 패턴 업데이트로 프로젝트 메모리 파일을 정리하고 구성합니다.', tags: ['team'], stars: 4.7, installs: 262, prompt: '이 명령어는 Claude 메모리 파일 정리가 필요할 때 사용합니다. 오래된 컨텍스트 제거, 충돌하는 규칙 해소, 메모리 파일 최신화를 지원합니다. 사용법: "/memory-spring-cleaning"으로 메모리를 정리합니다.' },
    { id: 'vercel-edge-function', name: 'Vercel Edge 함수', nameEn: 'vercel-edge-function', category: 'commands', desc: '지역화, 인증, 데이터 변환을 포함한 최적화된 Vercel Edge Function을 생성합니다.', tags: ['nextjs-vercel'], stars: 4.7, installs: 261, prompt: '이 명령어는 Vercel Edge Function 개발이 필요할 때 사용합니다. 엣지 컴퓨팅을 활용한 인증, 캐싱, A/B 테스팅 함수를 생성합니다. 사용법: "/vercel-edge-function [기능 설명]"으로 Edge 함수를 생성합니다.' },
    { id: 'e2e-setup', name: 'E2E 테스트 설정', nameEn: 'e2e-setup', category: 'commands', desc: '프레임워크 선택과 CI 통합을 포함한 종합적인 E2E 테스트 환경을 구성합니다.', tags: ['테스트'], stars: 4.7, installs: 261, prompt: '이 명령어는 E2E 테스트 환경 구성이 필요할 때 사용합니다. Playwright, Cypress 설정, 테스트 시나리오 작성, CI/CD 통합을 자동화합니다. 사용법: "/e2e-setup"으로 E2E 테스트를 설정합니다.' },
    { id: 'security-hardening', name: '보안 강화', nameEn: 'security-hardening', category: 'commands', desc: '종합적인 보안 통제로 애플리케이션 보안 설정을 강화합니다.', tags: ['보안'], stars: 4.7, installs: 258, prompt: '이 명령어는 애플리케이션 보안 강화가 필요할 때 사용합니다. CSP 헤더, HTTPS 설정, 입력 유효성 검사, 보안 패턴을 적용합니다. 사용법: "/security-hardening"으로 보안을 강화합니다.' },
    { id: 'create-prp', name: 'PRP 생성', nameEn: 'create-prp', category: 'commands', desc: '연구와 검증을 포함한 종합적인 제품 요구사항 프롬프트(PRP)를 생성합니다.', tags: ['project-management'], stars: 4.7, installs: 256, prompt: '이 명령어는 AI 보조 개발을 위한 상세 PRP 작성이 필요할 때 사용합니다. 컨텍스트, 목표, 제약 조건, 기대 결과를 포함한 PRP를 생성합니다. 사용법: "/create-prp [기능 설명]"으로 PRP를 작성합니다.' },
    { id: 'optimize-bundle-size', name: '번들 크기 최적화', nameEn: 'optimize-bundle-size', category: 'commands', desc: '분석, 설정, 코드 분할 전략으로 번들 크기를 줄이고 최적화합니다.', tags: ['performance'], stars: 4.7, installs: 249, prompt: '이 명령어는 JavaScript 번들 크기 최적화가 필요할 때 사용합니다. 트리 셰이킹, 코드 스플리팅, 동적 임포트를 활용하여 번들을 최적화합니다. 사용법: "/optimize-bundle-size"로 번들을 최적화합니다.' },
    { id: 'troubleshooting-guide', name: '트러블슈팅 가이드', nameEn: 'troubleshooting-guide', category: 'commands', desc: '진단 절차, 일반적인 문제, 자동화된 해결책을 포함한 체계적인 트러블슈팅 문서를 생성합니다.', tags: ['문서화'], stars: 4.7, installs: 246, prompt: '이 명령어는 문제 해결 가이드 작성이 필요할 때 사용합니다. 자주 발생하는 오류, 디버깅 절차, 해결 방법을 체계적으로 문서화합니다. 사용법: "/troubleshooting-guide"로 가이드를 생성합니다.' },
    { id: 'update-dependencies', name: '의존성 업데이트', nameEn: 'update-dependencies', category: 'commands', desc: '종합적인 테스트와 호환성 확인으로 프로젝트 의존성을 업데이트하고 현대화합니다.', tags: ['setup'], stars: 4.7, installs: 243, prompt: '이 명령어는 프로젝트 패키지 업데이트가 필요할 때 사용합니다. 안전한 업데이트 계획, 호환성 확인, 중요 변경 사항 처리를 지원합니다. 사용법: "/update-dependencies"로 의존성을 업데이트합니다.' },
    { id: 'cleanup-cache', name: '캐시 정리', nameEn: 'cleanup-cache', category: 'commands', desc: 'npm, Homebrew, Yarn, 브라우저, Python/ML 캐시를 정리하여 디스크 공간을 확보합니다.', tags: ['utilities'], stars: 4.7, installs: 237, prompt: '이 명령어는 시스템 캐시 정리가 필요할 때 사용합니다. 다양한 패키지 매니저와 도구의 캐시를 안전하게 정리합니다. 사용법: "/cleanup-cache"로 캐시를 정리합니다.' },
    { id: 'create-worktrees', name: '워크트리 생성', nameEn: 'create-worktrees', category: 'commands', desc: 'Git 워크트리를 생성하여 동시에 여러 브랜치에서 작업합니다.', tags: ['git-workflow'], stars: 4.7, installs: 235, prompt: '이 명령어는 동시 멀티 브랜치 작업이 필요할 때 사용합니다. Git 워크트리를 생성하여 여러 기능을 병렬로 개발합니다. 사용법: "/create-worktrees [브랜치명]"으로 워크트리를 생성합니다.' },
    { id: 'add-authentication-system', name: '인증 시스템 추가', nameEn: 'add-authentication-system', category: 'commands', desc: '선택한 방법과 보안 모범 사례로 안전한 사용자 인증 시스템을 구현합니다.', tags: ['보안'], stars: 4.7, installs: 234, prompt: '이 명령어는 인증 시스템 구현이 필요할 때 사용합니다. JWT, OAuth, 세션 기반 인증을 보안 모범 사례에 따라 구현합니다. 사용법: "/add-authentication-system [인증 방식]"으로 구현합니다.' },
    { id: 'ci-setup', name: 'CI 설정', nameEn: 'ci-setup', category: 'commands', desc: '자동화된 테스트, 빌드, 배포로 종합적인 CI/CD 파이프라인을 설정합니다.', tags: ['deployment'], stars: 4.7, installs: 233, prompt: '이 명령어는 CI 환경 설정이 필요할 때 사용합니다. GitHub Actions, GitLab CI 등 CI 플랫폼에 맞는 파이프라인을 자동으로 구성합니다. 사용법: "/ci-setup"으로 CI를 설정합니다.' },
    { id: 'prepare-release', name: '릴리즈 준비', nameEn: 'prepare-release', category: 'commands', desc: '종합적인 테스트, 문서, 자동화로 릴리즈 패키지를 준비하고 검증합니다.', tags: ['deployment'], stars: 4.7, installs: 231, prompt: '이 명령어는 배포 준비가 필요할 때 사용합니다. 버전 업데이트, 변경 로그, 릴리즈 노트, 배포 체크리스트를 자동으로 준비합니다. 사용법: "/prepare-release [버전]"으로 릴리즈를 준비합니다.' },
    { id: 'report', name: '보고서', nameEn: 'report', category: 'commands', desc: '작업 진행 상황과 결과를 보고서로 생성합니다.', tags: ['orchestration'], stars: 4.7, installs: 227, prompt: '이 명령어는 작업 진행 보고서 생성이 필요할 때 사용합니다. 완료된 작업, 발견된 문제, 권장 사항을 요약한 보고서를 생성합니다. 사용법: "/report"로 보고서를 생성합니다.' },
    { id: 'setup-formatting', name: '포매팅 설정', nameEn: 'setup-formatting', category: 'commands', desc: '일관된 스타일 적용을 포함한 종합적인 코드 포매팅 도구를 설정합니다.', tags: ['setup'], stars: 4.7, installs: 226, prompt: '이 명령어는 코드 포매팅 환경 설정이 필요할 때 사용합니다. Prettier, EditorConfig, 언어별 포매터를 프로젝트에 맞게 구성합니다. 사용법: "/setup-formatting"으로 포매팅을 설정합니다.' },
    { id: 'fix-github-issue', name: 'GitHub 이슈 수정', nameEn: 'fix-github-issue', category: 'commands', desc: 'GitHub 이슈를 분석하고 수정 사항을 구현합니다.', tags: ['git-workflow'], stars: 4.7, installs: 220, prompt: '이 명령어는 GitHub 이슈 해결이 필요할 때 사용합니다. 이슈 내용을 분석하여 원인을 파악하고 코드 수정과 테스트를 자동으로 구현합니다. 사용법: "/fix-github-issue [이슈 번호]"로 이슈를 수정합니다.' },
    { id: 'test-automation-orchestrator', name: '테스트 자동화 오케스트레이터', nameEn: 'test-automation-orchestrator', category: 'commands', desc: '지능적인 실행과 최적화로 종합적인 테스트 자동화를 조율합니다.', tags: ['테스트', '자동화'], stars: 4.7, installs: 219, prompt: '이 명령어는 테스트 자동화 파이프라인 조율이 필요할 때 사용합니다. 단위, 통합, E2E, 성능 테스트를 효율적으로 오케스트레이션합니다. 사용법: "/test-automation-orchestrator"로 자동화를 시작합니다.' },
    { id: 'interactive-documentation', name: '인터랙티브 문서', nameEn: 'interactive-documentation', category: 'commands', desc: '인터랙티브 예제와 라이브 데모가 포함된 문서를 생성합니다.', tags: ['문서화'], stars: 4.7, installs: 215, prompt: '이 명령어는 인터랙티브 문서 생성이 필요할 때 사용합니다. 실행 가능한 코드 예제, 라이브 API 테스터, 인터랙티브 튜토리얼을 포함한 문서를 생성합니다. 사용법: "/interactive-documentation"으로 문서를 생성합니다.' },
    { id: 'add-performance-monitoring', name: '성능 모니터링 추가', nameEn: 'add-performance-monitoring', category: 'commands', desc: '메트릭, 알림, 관찰 가능성을 포함한 종합적인 애플리케이션 성능 모니터링을 설정합니다.', tags: ['performance', '성능'], stars: 4.7, installs: 215, prompt: '이 명령어는 성능 모니터링 설정이 필요할 때 사용합니다. Datadog, Sentry, 커스텀 메트릭 수집을 자동으로 구성합니다. 사용법: "/add-performance-monitoring"으로 모니터링을 추가합니다.' },
    { id: 'act', name: 'GitHub Actions 로컬 실행', nameEn: 'act', category: 'commands', desc: 'act를 사용하여 GitHub Actions를 로컬에서 실행합니다.', tags: ['자동화'], stars: 4.7, installs: 214, prompt: '이 명령어는 GitHub Actions 로컬 테스트가 필요할 때 사용합니다. act 도구를 활용하여 CI/CD 워크플로우를 원격 실행 없이 로컬에서 테스트합니다. 사용법: "/act [워크플로우 파일]"로 로컬 실행합니다.' },
    { id: 'log', name: '로그', nameEn: 'log', category: 'commands', desc: '작업 로그와 진행 상황을 기록하고 관리합니다.', tags: ['orchestration'], stars: 4.7, installs: 211, prompt: '이 명령어는 개발 로그 관리가 필요할 때 사용합니다. 의사 결정, 진행 상황, 오류와 해결책을 체계적으로 기록합니다. 사용법: "/log [내용]"으로 로그를 기록합니다.' },
    { id: 'milestone-tracker', name: '마일스톤 추적기', nameEn: 'milestone-tracker', category: 'commands', desc: '예측 분석으로 프로젝트 마일스톤 진행 상황을 추적하고 분석합니다.', tags: ['project-management'], stars: 4.7, installs: 211, prompt: '이 명령어는 프로젝트 마일스톤 추적이 필요할 때 사용합니다. 마일스톤 달성률, 일정 예측, 위험 요소를 분석하고 보고합니다. 사용법: "/milestone-tracker"로 마일스톤을 추적합니다.' },
    { id: 'setup-kubernetes-deployment', name: 'Kubernetes 배포 설정', nameEn: 'setup-kubernetes-deployment', category: 'commands', desc: '매니페스트, 보안, 스케일링, 프로덕션 모범 사례를 포함한 종합적인 Kubernetes 배포를 설정합니다.', tags: ['deployment'], stars: 4.7, installs: 210, prompt: '이 명령어는 Kubernetes 배포 설정이 필요할 때 사용합니다. Deployment, Service, Ingress, HPA 매니페스트를 자동으로 생성합니다. 사용법: "/setup-kubernetes-deployment"로 K8s를 설정합니다.' },
    { id: 'test-quality-analyzer', name: '테스트 품질 분석기', nameEn: 'test-quality-analyzer', category: 'commands', desc: '종합적인 메트릭과 개선 권장 사항으로 테스트 스위트 품질을 분석합니다.', tags: ['테스트'], stars: 4.7, installs: 207, prompt: '이 명령어는 테스트 품질 평가가 필요할 때 사용합니다. 테스트 커버리지, 품질 메트릭, 중복 테스트, 누락된 케이스를 분석합니다. 사용법: "/test-quality-analyzer"로 테스트를 분석합니다.' },
    { id: 'nextjs-scaffold', name: 'Next.js 스캐폴드', nameEn: 'nextjs-scaffold', category: 'commands', desc: '모범 사례와 최적 설정으로 새 Next.js 애플리케이션을 생성합니다.', tags: ['nextjs-vercel', 'Next.js'], stars: 4.7, installs: 205, prompt: '이 명령어는 새 Next.js 프로젝트 시작이 필요할 때 사용합니다. App Router, TypeScript, Tailwind CSS, ESLint가 설정된 프로젝트를 자동으로 생성합니다. 사용법: "/nextjs-scaffold [프로젝트명]"으로 생성합니다.' },
    { id: 'setup-ci-cd-pipeline', name: 'CI/CD 파이프라인 설정', nameEn: 'setup-ci-cd-pipeline', category: 'commands', desc: '자동화된 테스트, 배포, 모니터링으로 종합적인 CI/CD 파이프라인을 설정합니다.', tags: ['setup'], stars: 4.7, installs: 204, prompt: '이 명령어는 완전한 CI/CD 파이프라인 구축이 필요할 때 사용합니다. 빌드, 테스트, 배포, 알림을 포함한 전체 파이프라인을 자동으로 구성합니다. 사용법: "/setup-ci-cd-pipeline"으로 파이프라인을 설정합니다.' }
  ],

  hooks: [
    { id: 'simple-notifications', name: '간단한 알림', nameEn: 'simple-notifications', category: 'hooks', desc: 'Claude Code 작업 완료 시 간단한 데스크톱 알림을 보냅니다. macOS와 Linux에서 작동합니다.', tags: ['자동화'], stars: 4.9, installs: 6415, prompt: '이 훅은 Claude Code 작업이 완료될 때 데스크톱 알림을 받고 싶을 때 사용합니다. 긴 작업이 완료되면 자동으로 알림을 표시합니다. Stop 이벤트에서 자동으로 활성화됩니다.' },
    { id: 'smart-commit', name: '스마트 커밋', nameEn: 'smart-commit', category: 'hooks', desc: '자동 메시지 생성과 검증으로 지능적인 git 커밋을 생성합니다.', tags: ['git-workflow'], stars: 4.9, installs: 2662, prompt: '이 훅은 의미 있는 git 커밋 메시지를 자동으로 생성할 때 사용합니다. 파일 변경사항을 분석하여 Conventional Commits 형식의 메시지를 자동 생성합니다. PostToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'lint-on-save', name: '저장 시 린트', nameEn: 'lint-on-save', category: 'hooks', desc: '파일 수정 후 자동으로 린팅 도구를 실행합니다. JS/TS의 ESLint, Python의 Pylint를 지원합니다.', tags: ['development-tools'], stars: 4.9, installs: 2556, prompt: '이 훅은 코드 수정 시 자동으로 린트 검사를 실행하고 싶을 때 사용합니다. 파일 저장 시 자동으로 ESLint, Pylint가 실행됩니다. PostToolUse Write/Edit 이벤트에서 활성화됩니다.' },
    { id: 'smart-formatting', name: '스마트 포매팅', nameEn: 'smart-formatting', category: 'hooks', desc: '파일 유형에 따라 스마트하게 코드를 포매팅합니다. Prettier, Black, gofmt, rustfmt를 지원합니다.', tags: ['development-tools'], stars: 4.9, installs: 2273, prompt: '이 훅은 코드 저장 시 자동으로 포매팅을 적용하고 싶을 때 사용합니다. 파일 확장자에 따라 적합한 포매터를 자동 선택하여 실행합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'update-search-year', name: '검색 연도 업데이트', nameEn: 'update-search-year', category: 'hooks', desc: '연도가 지정되지 않은 WebSearch 쿼리에 자동으로 현재 연도를 추가합니다.', tags: ['pre-tool'], stars: 4.9, installs: 1827, prompt: '이 훅은 웹 검색 시 항상 최신 정보를 얻고 싶을 때 사용합니다. WebSearch 도구 사용 시 자동으로 현재 연도를 쿼리에 추가합니다. PreToolUse WebSearch 이벤트에서 활성화됩니다.' },
    { id: 'dependency-checker', name: '의존성 검사기', nameEn: 'dependency-checker', category: 'hooks', desc: '오래된 패키지, 보안 취약점, 라이선스 문제를 모니터링하는 고급 의존성 분석을 수행합니다.', tags: ['자동화'], stars: 4.9, installs: 1601, prompt: '이 훅은 프로젝트 의존성 변경 시 자동 보안 검사가 필요할 때 사용합니다. package.json 수정 시 취약점과 라이선스 문제를 즉시 검사합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'nextjs-code-quality-enforcer', name: 'Next.js 코드 품질 강제', nameEn: 'nextjs-code-quality-enforcer', category: 'hooks', desc: 'Next.js 모범 사례, 파일 구조, 컴포넌트 패턴, TypeScript 사용을 강제합니다.', tags: ['development-tools', 'Next.js'], stars: 4.9, installs: 1523, prompt: '이 훅은 Next.js 프로젝트에서 코딩 표준을 자동으로 적용하고 싶을 때 사용합니다. Server/Client 컴포넌트 패턴, 파일 명명, TypeScript 사용을 자동 검증합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'security-scanner', name: '보안 스캐너', nameEn: 'security-scanner', category: 'hooks', desc: '코드 수정 후 보안 취약점과 시크릿을 스캔합니다. 여러 보안 도구를 활용합니다.', tags: ['보안'], stars: 4.9, installs: 1328, prompt: '이 훅은 코드 수정 시 자동으로 보안 검사가 필요할 때 사용합니다. API 키, 비밀번호, 보안 취약점을 파일 저장 즉시 탐지합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'change-tracker', name: '변경 추적기', nameEn: 'change-tracker', category: 'hooks', desc: '단순 로그에서 파일 변경사항을 추적합니다. 수정된 파일과 시간을 기록합니다.', tags: ['development-tools'], stars: 4.9, installs: 1272, prompt: '이 훅은 Claude Code 활동 감사 로그가 필요할 때 사용합니다. 모든 파일 수정 사항을 타임스탬프와 함께 자동으로 기록합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'format-python-files', name: 'Python 파일 포매팅', nameEn: 'format-python-files', category: 'hooks', desc: 'Edit 작업 후 black 포매터로 Python 파일을 자동으로 포매팅합니다.', tags: ['post-tool', 'Python'], stars: 4.9, installs: 1130, prompt: '이 훅은 Python 코드 자동 포매팅이 필요할 때 사용합니다. .py 파일 수정 시 자동으로 black을 실행하여 코드 스타일을 통일합니다. PostToolUse Edit 이벤트에서 활성화됩니다.' },
    { id: 'run-tests-after-changes', name: '변경 후 테스트 실행', nameEn: 'run-tests-after-changes', category: 'hooks', desc: '코드 수정 후 자동으로 빠른 테스트를 실행하여 아무것도 깨지지 않았는지 확인합니다.', tags: ['post-tool'], stars: 4.9, installs: 1042, prompt: '이 훅은 코드 수정 시 자동으로 테스트 실행이 필요할 때 사용합니다. 파일 저장 후 즉시 관련 테스트를 실행하여 회귀를 방지합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'auto-git-add', name: '자동 Git 추가', nameEn: 'auto-git-add', category: 'hooks', desc: '편집 후 수정된 파일을 자동으로 git add로 스테이징합니다.', tags: ['git-workflow', 'Git'], stars: 4.8, installs: 893, prompt: '이 훅은 파일 수정 시 자동으로 git 스테이징이 필요할 때 사용합니다. 파일 저장 후 자동으로 git add를 실행하여 깔끔한 워크플로우를 유지합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'agents-md-loader', name: 'AGENTS.md 로더', nameEn: 'agents-md-loader', category: 'hooks', desc: '세션 시작 시 AGENTS.md 설정 파일 내용을 자동으로 로드합니다.', tags: ['자동화'], stars: 4.8, installs: 880, prompt: '이 훅은 프로젝트별 에이전트 규칙을 자동으로 적용하고 싶을 때 사용합니다. 세션 시작 시 AGENTS.md를 로드하여 에이전트가 프로젝트 규칙을 따르도록 합니다. SessionStart 이벤트에서 활성화됩니다.' },
    { id: 'file-backup', name: '파일 백업', nameEn: 'file-backup', category: 'hooks', desc: '편집 전에 파일을 자동으로 백업합니다. .backups 디렉토리에 타임스탬프 백업을 생성합니다.', tags: ['development-tools'], stars: 4.8, installs: 813, prompt: '이 훅은 파일 수정 전 자동 백업이 필요할 때 사용합니다. 중요한 파일을 수정하기 전 타임스탬프가 붙은 백업 파일을 자동으로 생성합니다. PreToolUse 이벤트에서 활성화됩니다.' },
    { id: 'dangerous-command-blocker', name: '위험 명령어 차단기', nameEn: 'dangerous-command-blocker', category: 'hooks', desc: '위험한 쉘 명령어에 대한 고급 보호를 제공합니다. rm -rf / 같은 치명적인 작업을 차단합니다.', tags: ['보안'], stars: 4.8, installs: 794, prompt: '이 훅은 실수로 인한 치명적인 명령어 실행을 방지할 때 사용합니다. 데이터 삭제, 시스템 파괴 명령어를 자동으로 차단합니다. PreToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'telegram-notifications', name: '텔레그램 알림', nameEn: 'telegram-notifications', category: 'hooks', desc: 'Claude Code 작업 완료 시 텔레그램 알림을 보냅니다. 환경 변수 설정이 필요합니다.', tags: ['자동화'], stars: 4.8, installs: 757, prompt: '이 훅은 Claude Code 작업 완료를 텔레그램으로 알림 받고 싶을 때 사용합니다. TELEGRAM_BOT_TOKEN과 TELEGRAM_CHAT_ID 설정 후 자동으로 알림이 전송됩니다. Stop 이벤트에서 활성화됩니다.' },
    { id: 'command-logger', name: '명령어 로거', nameEn: 'command-logger', category: 'hooks', desc: '모든 Claude Code 명령어를 감사와 디버깅 목적으로 파일에 기록합니다.', tags: ['development-tools'], stars: 4.8, installs: 710, prompt: '이 훅은 Claude Code 활동 감사가 필요할 때 사용합니다. 실행된 명령어, 사용된 도구, 타임스탬프를 로그 파일에 자동으로 기록합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'test-runner', name: '테스트 러너', nameEn: 'test-runner', category: 'hooks', desc: '코드 변경 후 관련 테스트를 자동으로 실행합니다. 파일 감지에 따라 적절한 테스트 명령어를 실행합니다.', tags: ['테스트'], stars: 4.8, installs: 677, prompt: '이 훅은 코드 변경 시 자동 테스트 실행이 필요할 때 사용합니다. 수정된 파일과 관련된 테스트를 자동으로 탐지하여 실행합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'performance-monitor', name: '성능 모니터', nameEn: 'performance-monitor', category: 'hooks', desc: 'Claude Code 작업 중 시스템 성능을 모니터링합니다. CPU, 메모리 사용량, 실행 시간을 추적합니다.', tags: ['performance', '성능'], stars: 4.8, installs: 655, prompt: '이 훅은 개발 작업 중 시스템 성능 추적이 필요할 때 사용합니다. 과도한 리소스 사용을 탐지하고 성능 저하를 방지합니다. 각 작업 이후 자동으로 메트릭을 수집합니다.' },
    { id: 'file-protection', name: '파일 보호', nameEn: 'file-protection', category: 'hooks', desc: '중요한 파일이 실수로 수정되지 않도록 보호합니다.', tags: ['보안'], stars: 4.8, installs: 573, prompt: '이 훅은 중요한 설정 파일이나 시스템 파일 보호가 필요할 때 사용합니다. 보호 목록에 등록된 파일에 대한 수정 시도를 차단합니다. PreToolUse 이벤트에서 활성화됩니다.' },
    { id: 'format-javascript-files', name: 'JavaScript 파일 포매팅', nameEn: 'format-javascript-files', category: 'hooks', desc: 'Edit 작업 후 prettier로 JavaScript/TypeScript 파일을 자동으로 포매팅합니다.', tags: ['post-tool', 'JavaScript'], stars: 4.8, installs: 522, prompt: '이 훅은 JS/TS 파일 자동 포매팅이 필요할 때 사용합니다. .js, .ts, .jsx, .tsx 파일 수정 시 자동으로 Prettier를 실행합니다. PostToolUse Edit 이벤트에서 활성화됩니다.' },
    { id: 'secret-scanner', name: '시크릿 스캐너', nameEn: 'secret-scanner', category: 'hooks', desc: 'git 커밋 전에 하드코딩된 시크릿을 자동으로 탐지합니다. 30개+ 제공업체 API 키를 스캔합니다.', tags: ['보안'], stars: 4.7, installs: 495, prompt: '이 훅은 실수로 API 키나 비밀번호가 커밋되는 것을 방지할 때 사용합니다. 커밋 전 자동으로 코드를 스캔하여 시크릿 노출을 차단합니다. PreToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'conventional-commits', name: '컨벤셔널 커밋', nameEn: 'conventional-commits', category: 'hooks', desc: '모든 git 커밋에 대한 Conventional Commit 메시지 형식을 강제합니다.', tags: ['git'], stars: 4.7, installs: 452, prompt: '이 훅은 팀의 커밋 메시지 형식 통일이 필요할 때 사용합니다. feat, fix, docs 등 표준 타입을 포함한 커밋 형식을 자동으로 검증합니다. PreToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'backup-before-edit', name: '편집 전 백업', nameEn: 'backup-before-edit', category: 'hooks', desc: '안전을 위해 Edit 작업 전에 파일 백업을 자동으로 생성합니다.', tags: ['pre-tool'], stars: 4.7, installs: 447, prompt: '이 훅은 파일 수정 전 안전 백업이 필요할 때 사용합니다. 각 편집 전에 타임스탬프가 붙은 백업 파일을 자동으로 생성합니다. PreToolUse Edit 이벤트에서 활성화됩니다.' },
    { id: 'git-add-changes', name: 'Git 변경사항 추가', nameEn: 'git-add-changes', category: 'hooks', desc: '파일 수정 후 git add를 자동으로 실행하여 변경사항을 스테이징합니다.', tags: ['post-tool', 'Git'], stars: 4.7, installs: 400, prompt: '이 훅은 파일 저장 시 자동 git 스테이징이 필요할 때 사용합니다. 수정된 파일을 즉시 git add하여 커밋 준비를 자동화합니다. PostToolUse Write/Edit 이벤트에서 활성화됩니다.' },
    { id: 'telegram-detailed-notifications', name: '텔레그램 상세 알림', nameEn: 'telegram-detailed-notifications', category: 'hooks', desc: 'Claude Code 완료 시 작업 디렉토리, 세션 정보가 포함된 상세 텔레그램 알림을 보냅니다.', tags: ['자동화'], stars: 4.7, installs: 394, prompt: '이 훅은 상세한 작업 완료 알림이 필요할 때 사용합니다. 작업 디렉토리, 소요 시간, 변경된 파일 수를 포함한 상세 알림을 전송합니다. Stop 이벤트에서 활성화됩니다.' },
    { id: 'vercel-auto-deploy', name: 'Vercel 자동 배포', nameEn: 'vercel-auto-deploy', category: 'hooks', desc: '코드 변경이 커밋되면 자동으로 Vercel 배포를 트리거합니다.', tags: ['자동화'], stars: 4.7, installs: 324, prompt: '이 훅은 코드 커밋 시 자동 Vercel 배포가 필요할 때 사용합니다. git push 감지 시 자동으로 Vercel 배포를 트리거하고 배포 URL을 알립니다. PostToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'prevent-direct-push', name: '직접 푸시 방지', nameEn: 'prevent-direct-push', category: 'hooks', desc: '보호된 브랜치(main, develop)로의 직접 푸시를 방지합니다.', tags: ['git'], stars: 4.7, installs: 319, prompt: '이 훅은 main, develop 브랜치 직접 푸시 방지가 필요할 때 사용합니다. 실수로 보호된 브랜치에 직접 푸시하는 것을 자동으로 차단합니다. PreToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'deployment-health-monitor', name: '배포 상태 모니터', nameEn: 'deployment-health-monitor', category: 'hooks', desc: '배포 상태, 오류율, 성능 메트릭을 모니터링하고 배포 실패 시 알림을 보냅니다.', tags: ['자동화'], stars: 4.7, installs: 305, prompt: '이 훅은 배포 후 상태 모니터링이 필요할 때 사용합니다. 배포 성공/실패, 성능 저하, 오류율 증가를 자동으로 모니터링합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'validate-branch-name', name: '브랜치 이름 검증', nameEn: 'validate-branch-name', category: 'hooks', desc: 'checkout 전에 Git Flow 브랜치 명명 규칙을 검증합니다.', tags: ['git'], stars: 4.7, installs: 295, prompt: '이 훅은 브랜치 명명 규칙 강제가 필요할 때 사용합니다. feature/*, release/v*, hotfix/* 형식의 브랜치 이름을 자동으로 검증합니다. PreToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'build-on-change', name: '변경 시 빌드', nameEn: 'build-on-change', category: 'hooks', desc: '소스 파일 변경 시 빌드 프로세스를 자동으로 트리거합니다.', tags: ['자동화'], stars: 4.7, installs: 279, prompt: '이 훅은 코드 변경 시 자동 빌드가 필요할 때 사용합니다. 소스 파일 수정을 감지하여 적합한 빌드 도구를 자동으로 실행합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'performance-budget-guard', name: '성능 예산 가드', nameEn: 'performance-budget-guard', category: 'hooks', desc: '개발 중 번들 크기와 Core Web Vitals 메트릭을 모니터링하고 성능 예산 초과 시 배포를 차단합니다.', tags: ['performance', '성능'], stars: 4.7, installs: 264, prompt: '이 훅은 성능 기준 초과 배포 방지가 필요할 때 사용합니다. 번들 크기와 성능 메트릭을 측정하여 기준을 초과하면 배포를 자동으로 차단합니다. PreToolUse 이벤트에서 활성화됩니다.' },
    { id: 'vercel-environment-sync', name: 'Vercel 환경 동기화', nameEn: 'vercel-environment-sync', category: 'hooks', desc: '로컬 개발과 Vercel 배포 간 환경 변수를 동기화하여 모든 환경에서 일관성을 보장합니다.', tags: ['자동화'], stars: 4.7, installs: 241, prompt: '이 훅은 Vercel 환경 변수 자동 동기화가 필요할 때 사용합니다. .env 파일 변경 시 Vercel 프로젝트의 환경 변수를 자동으로 업데이트합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'discord-detailed-notifications', name: 'Discord 상세 알림', nameEn: 'discord-detailed-notifications', category: 'hooks', desc: 'Claude Code 완료 시 작업 디렉토리, 세션 정보가 포함된 상세 Discord 알림을 보냅니다.', tags: ['자동화'], stars: 4.6, installs: 188, prompt: '이 훅은 Discord로 상세한 작업 완료 알림이 필요할 때 사용합니다. DISCORD_WEBHOOK_URL 설정 후 자동으로 상세 알림을 전송합니다. Stop 이벤트에서 활성화됩니다.' },
    { id: 'worktree-ghostty', name: '워크트리 Ghostty', nameEn: 'worktree-ghostty', category: 'hooks', desc: 'Ghostty 터미널에서 워크트리 생성 시 3패널 레이아웃을 자동으로 엽니다.', tags: ['development-tools'], stars: 4.6, installs: 187, prompt: '이 훅은 Ghostty 터미널에서 워크트리 작업 환경 자동 설정이 필요할 때 사용합니다. 워크트리 생성 시 Claude Code, lazygit, 파일 탐색기 패널을 자동으로 구성합니다. PostToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'telegram-error-notifications', name: '텔레그램 오류 알림', nameEn: 'telegram-error-notifications', category: 'hooks', desc: 'Claude Code가 장시간 작업을 수행하거나 도구에 긴 시간이 걸릴 때 텔레그램 알림을 보냅니다.', tags: ['자동화'], stars: 4.6, installs: 175, prompt: '이 훅은 장시간 실행되는 작업 모니터링이 필요할 때 사용합니다. 도구 실행이 지정된 시간을 초과하면 자동으로 텔레그램 알림을 전송합니다. 각 도구 실행 후 활성화됩니다.' },
    { id: 'slack-notifications', name: 'Slack 알림', nameEn: 'slack-notifications', category: 'hooks', desc: 'Claude Code 작업 완료 시 Slack 알림을 보냅니다. SLACK_WEBHOOK_URL 설정이 필요합니다.', tags: ['자동화'], stars: 4.6, installs: 157, prompt: '이 훅은 Claude Code 작업 완료를 Slack으로 알림 받고 싶을 때 사용합니다. Stop 이벤트에서 자동으로 Slack 웹훅을 통해 알림을 전송합니다.' },
    { id: 'notify-before-bash', name: 'Bash 실행 전 알림', nameEn: 'notify-before-bash', category: 'hooks', desc: '보안 인식을 위해 Bash 명령어 실행 전에 알림을 표시합니다.', tags: ['pre-tool'], stars: 4.6, installs: 135, prompt: '이 훅은 Bash 명령어 실행을 인식하고 싶을 때 사용합니다. 모든 Bash 명령어 실행 전에 알림 메시지를 표시하여 의도치 않은 명령어 실행을 방지합니다. PreToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'discord-notifications', name: 'Discord 알림', nameEn: 'discord-notifications', category: 'hooks', desc: 'Claude Code 작업 완료 시 Discord 알림을 보냅니다. DISCORD_WEBHOOK_URL 설정이 필요합니다.', tags: ['자동화'], stars: 4.6, installs: 131, prompt: '이 훅은 Claude Code 작업 완료를 Discord로 알림 받고 싶을 때 사용합니다. Stop 이벤트에서 자동으로 Discord 웹훅을 통해 알림을 전송합니다.' },
    { id: 'slack-detailed-notifications', name: 'Slack 상세 알림', nameEn: 'slack-detailed-notifications', category: 'hooks', desc: 'Claude Code 완료 시 작업 디렉토리, 세션 정보가 포함된 상세 Slack 알림을 보냅니다.', tags: ['자동화'], stars: 4.6, installs: 120, prompt: '이 훅은 Slack으로 상세한 작업 완료 알림이 필요할 때 사용합니다. 작업 요약, 변경 파일, 소요 시간을 포함한 상세 알림을 전송합니다. Stop 이벤트에서 활성화됩니다.' },
    { id: 'discord-error-notifications', name: 'Discord 오류 알림', nameEn: 'discord-error-notifications', category: 'hooks', desc: 'Claude Code가 장시간 작업을 수행하거나 도구에 긴 시간이 걸릴 때 Discord 알림을 보냅니다.', tags: ['자동화'], stars: 4.6, installs: 109, prompt: '이 훅은 장시간 실행되는 작업 Discord 모니터링이 필요할 때 사용합니다. 도구 실행 시간 초과 시 Discord 웹훅을 통해 자동으로 알림을 전송합니다.' },
    { id: 'langsmith-tracing', name: 'LangSmith 트레이싱', nameEn: 'langsmith-tracing', category: 'hooks', desc: 'Claude Code 대화 트레이스를 LangSmith로 자동 전송하여 모니터링하고 분석합니다.', tags: ['monitoring'], stars: 4.6, installs: 103, prompt: '이 훅은 Claude Code 대화 모니터링과 분석이 필요할 때 사용합니다. 모든 대화를 LangSmith에 자동으로 기록하여 성능을 분석합니다. Stop 이벤트에서 활성화됩니다.' },
    { id: 'slack-error-notifications', name: 'Slack 오류 알림', nameEn: 'slack-error-notifications', category: 'hooks', desc: 'Claude Code가 장시간 작업을 수행하거나 도구에 긴 시간이 걸릴 때 Slack 알림을 보냅니다.', tags: ['자동화'], stars: 4.5, installs: 95, prompt: '이 훅은 장시간 실행되는 작업 Slack 모니터링이 필요할 때 사용합니다. 지정된 시간을 초과하는 작업에 대해 자동으로 Slack 알림을 전송합니다.' },
    { id: 'desktop-notification-on-stop', name: '종료 시 데스크톱 알림', nameEn: 'desktop-notification-on-stop', category: 'hooks', desc: 'Claude Code가 응답을 완료하면 네이티브 데스크톱 알림을 보냅니다.', tags: ['monitoring'], stars: 4.5, installs: 80, prompt: '이 훅은 Claude Code 작업 완료를 네이티브 알림으로 받고 싶을 때 사용합니다. Stop 훅 이벤트를 사용하여 단 한 번의 알림만 전송합니다.' },
    { id: 'scope-guard', name: '범위 가드', nameEn: 'scope-guard', category: 'hooks', desc: '명세된 범위 밖의 파일 수정을 탐지하는 범위 가드입니다. .spec.md 파일의 선언된 범위를 확인합니다.', tags: ['quality-gates'], stars: 4.5, installs: 72, prompt: '이 훅은 명세 범위 내에서만 파일을 수정하도록 강제할 때 사용합니다. .spec.md에 정의된 파일 범위 밖의 수정 시도를 자동으로 경고합니다. PreToolUse 이벤트에서 활성화됩니다.' },
    { id: 'debug-window', name: '디버그 창', nameEn: 'debug-window', category: 'hooks', desc: '--debug 플래그로 Claude Code 시작 시 라이브 테일링 디버그 로그 창을 자동으로 엽니다.', tags: ['development-tools'], stars: 4.5, installs: 70, prompt: '이 훅은 Claude Code 디버그 모드에서 실시간 로그 모니터링이 필요할 때 사용합니다. --debug 플래그 사용 시 자동으로 로그 창을 열어 실시간 디버그 정보를 표시합니다.' },
    { id: 'plan-gate', name: '계획 게이트', nameEn: 'plan-gate', category: 'hooks', desc: '승인된 명세 없이 프로덕션 코드를 편집할 때 경고를 표시하는 계획 게이트입니다.', tags: ['quality-gates'], stars: 4.5, installs: 65, prompt: '이 훅은 계획 없는 프로덕션 코드 수정을 방지할 때 사용합니다. 최근 승인된 .spec.md 파일 없이 프로덕션 코드를 수정하면 경고를 표시합니다. PreToolUse Edit 이벤트에서 활성화됩니다.' },
    { id: 'console-log-cleaner', name: 'console.log 정리기', nameEn: 'console-log-cleaner', category: 'hooks', desc: '프로덕션 브랜치(main/master)에서 파일 편집 시 console.log 문을 경고합니다.', tags: ['pre-tool'], stars: 4.5, installs: 56, prompt: '이 훅은 프로덕션 브랜치에 디버그 코드가 커밋되는 것을 방지할 때 사용합니다. main/master 브랜치에서 console.log가 포함된 파일 저장 시 경고를 표시합니다. PreToolUse Edit 이벤트에서 활성화됩니다.' },
    { id: 'telegram-pr-webhook', name: '텔레그램 PR 웹훅', nameEn: 'telegram-pr-webhook', category: 'hooks', desc: 'gh pr create로 새 PR 생성 시 PR URL과 Vercel 미리보기 URL이 포함된 텔레그램 알림을 보냅니다.', tags: ['자동화'], stars: 4.5, installs: 51, prompt: '이 훅은 PR 생성 시 자동 텔레그램 알림이 필요할 때 사용합니다. PR이 생성되면 PR URL과 배포 미리보기 링크를 즉시 텔레그램으로 전송합니다. PostToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'tdd-gate', name: 'TDD 게이트', nameEn: 'tdd-gate', category: 'hooks', desc: '테스트 파일 없이 프로덕션 코드 파일 수정을 차단하는 TDD 강제 훅입니다.', tags: ['quality-gates'], stars: 4.4, installs: 49, prompt: '이 훅은 테스트 주도 개발 원칙을 강제할 때 사용합니다. 테스트 파일을 먼저 작성하지 않으면 프로덕션 코드 수정을 자동으로 차단합니다. PreToolUse Edit 이벤트에서 활성화됩니다.' },
    { id: 'change-logger', name: '변경 로거', nameEn: 'change-logger', category: 'hooks', desc: '데모 준비를 위해 모든 파일 변경을 CSV에 기록합니다. 타임스탬프, 도구, 파일 경로를 기록합니다.', tags: ['자동화'], stars: 4.4, installs: 45, prompt: '이 훅은 Claude Code 활동의 상세 감사 로그가 필요할 때 사용합니다. 모든 파일 수정, 생성, 삭제를 CSV 형식으로 자동 기록합니다. PostToolUse 이벤트에서 활성화됩니다.' },
    { id: 'env-file-protection', name: '.env 파일 보호', nameEn: 'env-file-protection', category: 'hooks', desc: 'if 조건을 사용하여 .env 파일 쓰기를 방지합니다. .env 파일을 대상으로 하는 Write 도구 호출을 차단합니다.', tags: ['보안'], stars: 4.4, installs: 8, prompt: '이 훅은 .env 파일에 실수로 민감한 정보를 덮어쓰는 것을 방지할 때 사용합니다. .env 파일에 대한 모든 Write 작업을 자동으로 차단합니다. PreToolUse Write 이벤트에서 활성화됩니다.' },
    { id: 'force-push-blocker', name: '강제 푸시 차단기', nameEn: 'force-push-blocker', category: 'hooks', desc: 'if 조건을 사용하여 git force push 명령어를 차단합니다.', tags: ['보안'], stars: 4.4, installs: 3, prompt: '이 훅은 실수로 인한 git force push를 방지할 때 사용합니다. --force 또는 -f 플래그가 포함된 git push 명령어를 자동으로 차단합니다. PreToolUse Bash 이벤트에서 활성화됩니다.' },
    { id: 'edit-audit-log', name: '편집 감사 로그', nameEn: 'edit-audit-log', category: 'hooks', desc: '타임스탬프와 함께 모든 파일 편집을 프로젝트 로컬 감사 파일에 기록합니다.', tags: ['development-tools'], stars: 4.4, installs: 0, prompt: '이 훅은 파일 편집 감사 추적이 필요할 때 사용합니다. 모든 Edit 도구 사용을 .claude/edit-log.txt에 자동으로 기록합니다. PostToolUse Edit 이벤트에서 활성화됩니다.' }
  ],

  mcps: [
    { id: 'context7', name: 'Context7', nameEn: 'context7', category: 'mcps', desc: 'Context7 MCP는 소스에서 직접 최신 버전별 문서와 코드 예제를 가져옵니다.', tags: ['devtools'], stars: 4.9, installs: 11528, prompt: '이 MCP는 라이브러리와 프레임워크의 최신 문서가 필요할 때 사용합니다. Claude Code에 실시간 버전별 공식 문서를 직접 제공하여 오래된 정보 사용을 방지합니다. MCP 설정에서 context7을 추가하면 자동으로 활성화됩니다.' },
    { id: 'memory-integration', name: '메모리 통합', nameEn: 'memory-integration', category: 'mcps', desc: 'Claude Code 세션 간 지속적인 메모리와 컨텍스트 관리를 제공합니다.', tags: ['integration'], stars: 4.9, installs: 5894, prompt: '이 MCP는 세션 간 정보 유지가 필요할 때 사용합니다. 이전 세션의 결정, 코딩 패턴, 프로젝트 규칙을 자동으로 기억하고 불러옵니다. MCP 설정에서 memory를 추가하면 자동으로 활성화됩니다.' },
    { id: 'playwright-mcp-server', name: 'Playwright MCP 서버', nameEn: 'playwright-mcp-server', category: 'mcps', desc: 'Playwright를 사용한 브라우저 자동화 기능을 제공하는 MCP 서버입니다.', tags: ['browser_automation', 'MCP'], stars: 4.9, installs: 4629, prompt: '이 MCP는 브라우저 자동화와 웹 스크래핑이 필요할 때 사용합니다. 페이지 탐색, 클릭, 폼 입력, 스크린샷 캡처를 자동으로 수행합니다. MCP 설정에서 playwright를 추가하면 자동으로 활성화됩니다.' },
    { id: 'web-fetch', name: '웹 페치', nameEn: 'web-fetch', category: 'mcps', desc: '웹 콘텐츠 가져오기와 데이터 추출 기능을 제공합니다. 외부 API에 접근하고 웹 콘텐츠를 스크래핑합니다.', tags: ['web'], stars: 4.9, installs: 3418, prompt: '이 MCP는 웹 URL에서 콘텐츠를 가져올 때 사용합니다. 웹 페이지 내용 추출, API 응답 조회, HTML 파싱을 지원합니다. MCP 설정에서 fetch를 추가하면 자동으로 활성화됩니다.' },
    { id: 'supabase', name: 'Supabase', nameEn: 'supabase', category: 'mcps', desc: 'MCP를 사용하여 Claude Code를 Supabase에 연결합니다.', tags: ['데이터베이스'], stars: 4.9, installs: 3254, prompt: '이 MCP는 Supabase 데이터베이스와 직접 상호작용이 필요할 때 사용합니다. SQL 쿼리 실행, 스키마 탐색, 실시간 데이터 조회를 지원합니다. Supabase 프로젝트 URL과 키로 설정하면 활성화됩니다.' },
    { id: 'postgresql-integration', name: 'PostgreSQL 통합', nameEn: 'postgresql-integration', category: 'mcps', desc: '고급 데이터 작업, 복잡한 쿼리, 엔터프라이즈 데이터베이스 관리를 위해 PostgreSQL에 연결합니다.', tags: ['데이터베이스'], stars: 4.9, installs: 3166, prompt: '이 MCP는 PostgreSQL 데이터베이스 직접 조작이 필요할 때 사용합니다. 복잡한 쿼리, 스키마 관리, 성능 분석을 지원합니다. DB 연결 문자열로 설정하면 활성화됩니다.' },
    { id: 'chrome-devtools', name: 'Chrome DevTools', nameEn: 'chrome-devtools', category: 'mcps', desc: 'Chrome DevTools와 상호작용하여 브라우저 자동화, 디버깅, 성능 분석을 지원하는 MCP 서버입니다.', tags: ['devtools'], stars: 4.9, installs: 2991, prompt: '이 MCP는 Chrome 브라우저 자동화와 디버깅이 필요할 때 사용합니다. 네트워크 요청 분석, JavaScript 실행, 성능 프로파일링을 지원합니다. Chrome DevTools Protocol을 통해 활성화됩니다.' },
    { id: 'github-integration', name: 'GitHub 통합', nameEn: 'github-integration', category: 'mcps', desc: '저장소 관리, 이슈 추적, PR, 협업을 위한 GitHub API를 직접 통합합니다.', tags: ['integration'], stars: 4.9, installs: 2808, prompt: '이 MCP는 GitHub 저장소와 직접 상호작용이 필요할 때 사용합니다. 이슈 생성, PR 관리, 커밋 조회, 브랜치 관리를 자동화합니다. GitHub 토큰으로 설정하면 활성화됩니다.' },
    { id: 'filesystem-access', name: '파일시스템 접근', nameEn: 'filesystem-access', category: 'mcps', desc: '설정 가능한 디렉토리 권한과 파일 작업으로 Claude Code에 안전한 파일시스템 접근을 제공합니다.', tags: ['filesystem'], stars: 4.9, installs: 2146, prompt: '이 MCP는 확장된 파일시스템 접근이 필요할 때 사용합니다. 허용된 디렉토리 범위 내에서 파일 읽기, 쓰기, 탐색을 안전하게 지원합니다. 허용 경로 설정으로 활성화됩니다.' },
    { id: 'browser-use-mcp-server', name: 'Browser Use MCP 서버', nameEn: 'browser-use-mcp-server', category: 'mcps', desc: 'AI 에이전트가 browser-use를 사용하여 웹 브라우저를 제어할 수 있는 MCP 서버입니다.', tags: ['browser_automation'], stars: 4.9, installs: 1707, prompt: '이 MCP는 AI가 웹 브라우저를 자율적으로 제어해야 할 때 사용합니다. 웹 탐색, 폼 작성, 데이터 추출을 AI가 자동으로 수행합니다. browser-use 라이브러리와 함께 설정하면 활성화됩니다.' },
    { id: 'playwright-mcp', name: 'Playwright MCP', nameEn: 'playwright-mcp', category: 'mcps', desc: 'Playwright를 사용한 브라우저 자동화 기능을 제공하는 Model Context Protocol 서버입니다.', tags: ['browser_automation', 'MCP'], stars: 4.9, installs: 1281, prompt: '이 MCP는 Playwright 브라우저 자동화가 필요할 때 사용합니다. 헤드리스 브라우저 제어, 웹 테스팅, 자동화된 웹 상호작용을 지원합니다. MCP 설정에서 추가하면 활성화됩니다.' },
    { id: 'mysql-integration', name: 'MySQL 통합', nameEn: 'mysql-integration', category: 'mcps', desc: 'Claude Code 내에서 직접 데이터 접근, 쿼리, 데이터베이스 관리를 위해 MySQL에 연결합니다.', tags: ['데이터베이스'], stars: 4.9, installs: 1112, prompt: '이 MCP는 MySQL 데이터베이스 직접 조작이 필요할 때 사용합니다. 쿼리 실행, 스키마 탐색, 데이터 관리를 지원합니다. MySQL 연결 설정으로 활성화됩니다.' },
    { id: 'deepgraph-nextjs', name: 'DeepGraph Next.js', nameEn: 'deepgraph-nextjs', category: 'mcps', desc: 'Next.js 프로젝트의 심층 코드 분석과 시각화를 제공합니다. 컴포넌트 관계와 의존성을 이해합니다.', tags: ['deepgraph', 'Next.js'], stars: 4.9, installs: 1102, prompt: '이 MCP는 Next.js 프로젝트 코드 구조 분석이 필요할 때 사용합니다. 컴포넌트 트리, 데이터 흐름, 의존성 맵을 자동으로 생성합니다. Next.js 프로젝트 경로 설정으로 활성화됩니다.' },
    { id: 'figma-dev-mode', name: 'Figma 개발 모드', nameEn: 'figma-dev-mode', category: 'mcps', desc: 'Dev Mode MCP 서버는 Figma를 개발 워크플로우에 직접 통합하여 중요한 디자인 정보를 제공합니다.', tags: ['devtools'], stars: 4.9, installs: 1046, prompt: '이 MCP는 Figma 디자인과 코드 동기화가 필요할 때 사용합니다. 디자인 토큰, 컴포넌트 스펙, 에셋을 직접 코드로 가져옵니다. Figma API 키 설정으로 활성화됩니다.' },
    { id: 'markitdown', name: 'Markitdown', nameEn: 'markitdown', category: 'mcps', desc: 'PDF, Word, Excel, 이미지, 오디오 등 다양한 파일 형식을 Markdown으로 변환합니다.', tags: ['devtools'], stars: 4.8, installs: 937, prompt: '이 MCP는 다양한 파일 형식을 마크다운으로 변환이 필요할 때 사용합니다. Office 문서, PDF, 이미지의 텍스트를 자동으로 추출하여 마크다운으로 변환합니다. MCP 설정에서 추가하면 활성화됩니다.' },
    { id: 'deepgraph-react', name: 'DeepGraph React', nameEn: 'deepgraph-react', category: 'mcps', desc: 'React 컴포넌트 계층, 상태 흐름, 의존성을 분석하고 React 애플리케이션을 시각화합니다.', tags: ['deepgraph', 'React'], stars: 4.8, installs: 862, prompt: '이 MCP는 React 앱 코드 구조 심층 분석이 필요할 때 사용합니다. 컴포넌트 트리, 프롭 흐름, 상태 관리를 분석하고 시각화합니다. React 프로젝트 경로 설정으로 활성화됩니다.' },
    { id: 'ios-simulator-mcp', name: 'iOS 시뮬레이터 MCP', nameEn: 'ios-simulator-mcp', category: 'mcps', desc: 'Claude Code에서 직접 iOS 시뮬레이터를 제어합니다. 앱 실행, 스크린샷 촬영, 디바이스 상태 관리를 지원합니다.', tags: ['devtools'], stars: 4.8, installs: 747, prompt: '이 MCP는 iOS 앱 테스트 자동화가 필요할 때 사용합니다. Xcode 시뮬레이터를 직접 제어하여 앱 설치, 실행, 스크린샷을 자동화합니다. Xcode 설치 환경에서 활성화됩니다.' },
    { id: 'serena', name: 'Serena', nameEn: 'serena', category: 'mcps', desc: '코딩 에이전트를 위한 시맨틱 코드 검색 및 편집 도구를 제공합니다.', tags: ['devtools'], stars: 4.8, installs: 737, prompt: '이 MCP는 대형 코드베이스 탐색과 시맨틱 코드 검색이 필요할 때 사용합니다. 함수, 클래스, 심볼을 의미론적으로 검색하고 컨텍스트를 이해합니다. MCP 설정에서 serena를 추가하면 활성화됩니다.' },
    { id: 'deepgraph-typescript', name: 'DeepGraph TypeScript', nameEn: 'deepgraph-typescript', category: 'mcps', desc: '타입 맵핑, 인터페이스 관계, 모듈 의존성을 포함한 종합적인 TypeScript 코드 분석을 제공합니다.', tags: ['deepgraph', 'TypeScript'], stars: 4.8, installs: 703, prompt: '이 MCP는 TypeScript 프로젝트 타입 시스템 분석이 필요할 때 사용합니다. 타입 관계, 인터페이스 계층, 제네릭 사용을 시각화합니다. TypeScript 프로젝트 경로 설정으로 활성화됩니다.' },
    { id: 'browsermcp', name: 'BrowserMCP', nameEn: 'browsermcp', category: 'mcps', desc: 'AI 앱이 MCP를 통해 브라우저를 자동화하여 탐색하고 상호작용할 수 있습니다.', tags: ['browser_automation'], stars: 4.8, installs: 644, prompt: '이 MCP는 AI 에이전트의 브라우저 자동화가 필요할 때 사용합니다. 웹 페이지 탐색, 클릭, 스크롤, 정보 추출을 자동화합니다. Browser MCP 확장 설치 후 활성화됩니다.' },
    { id: 'mcp-server-playwright', name: 'Playwright MCP 서버', nameEn: 'mcp-server-playwright', category: 'mcps', desc: 'Playwright를 사용한 브라우저 자동화 기능을 제공하는 Model Context Protocol 서버입니다.', tags: ['browser_automation', 'MCP'], stars: 4.8, installs: 609, prompt: '이 MCP는 Playwright 기반 브라우저 자동화가 필요할 때 사용합니다. 테스트 작성, 스크린샷, 폼 자동화를 지원합니다. MCP 설정에서 playwright-server를 추가하면 활성화됩니다.' },
    { id: 'notion', name: 'Notion', nameEn: 'notion', category: 'mcps', desc: 'Notion API를 위한 공식 MCP 서버입니다.', tags: ['생산성'], stars: 4.7, installs: 492, prompt: '이 MCP는 Notion 워크스페이스와 직접 상호작용이 필요할 때 사용합니다. 페이지 생성, 데이터베이스 쿼리, 블록 편집을 자동화합니다. Notion 통합 토큰으로 설정하면 활성화됩니다.' },
    { id: 'deepgraph-vue', name: 'DeepGraph Vue', nameEn: 'deepgraph-vue', category: 'mcps', desc: 'Vue.js 애플리케이션의 컴포넌트 구성, 반응성 데이터 흐름, 템플릿-스크립트 관계를 분석합니다.', tags: ['deepgraph'], stars: 4.7, installs: 417, prompt: '이 MCP는 Vue.js 프로젝트 코드 분석이 필요할 때 사용합니다. 컴포넌트 계층, Vuex 상태 흐름, 컴포지션 API 사용을 시각화합니다. Vue 프로젝트 경로 설정으로 활성화됩니다.' },
    { id: 'facebook-ads-mcp-server', name: 'Facebook Ads MCP 서버', nameEn: 'facebook-ads-mcp-server', category: 'mcps', desc: 'Meta Ads API에 대한 인터페이스를 제공하여 프로그래밍 방식으로 광고를 관리합니다.', tags: ['marketing'], stars: 4.7, installs: 412, prompt: '이 MCP는 Facebook/Instagram 광고 자동화가 필요할 때 사용합니다. 광고 캠페인 생성, 성과 조회, 예산 관리를 자동화합니다. Meta Ads 앱 자격증명으로 설정하면 활성화됩니다.' },
    { id: 'huggingface', name: 'Hugging Face', nameEn: 'huggingface', category: 'mcps', desc: 'MCP를 통해 Hugging Face 모델, 데이터셋, Spaces, 논문, 컬렉션에 접근합니다.', tags: ['devtools'], stars: 4.7, installs: 389, prompt: '이 MCP는 Hugging Face 플랫폼 직접 접근이 필요할 때 사용합니다. AI 모델 검색, 데이터셋 조회, Space 실행을 자동화합니다. Hugging Face 토큰으로 설정하면 활성화됩니다.' },
    { id: 'firecrawl', name: 'Firecrawl', nameEn: 'firecrawl', category: 'mcps', desc: '웹 스크래핑을 위한 Firecrawl과 통합된 MCP 서버 구현입니다.', tags: ['devtools'], stars: 4.7, installs: 347, prompt: '이 MCP는 고품질 웹 스크래핑이 필요할 때 사용합니다. 동적 웹 페이지 크롤링, 데이터 추출, 구조화된 데이터 변환을 지원합니다. Firecrawl API 키로 설정하면 활성화됩니다.' },
    { id: 'google-ads-mcp-server', name: 'Google Ads MCP 서버', nameEn: 'google-ads-mcp-server', category: 'mcps', desc: '자동 OAuth를 포함한 Google Ads API 통합을 위한 FastMCP 기반 MCP 서버입니다.', tags: ['marketing'], stars: 4.7, installs: 340, prompt: '이 MCP는 Google Ads 자동화가 필요할 때 사용합니다. 광고 캠페인 관리, 성과 리포팅, 입찰 최적화를 자동화합니다. Google Ads 자격증명으로 설정하면 활성화됩니다.' },
    { id: 'stripe', name: 'Stripe', nameEn: 'stripe', category: 'mcps', desc: 'AI 에이전트가 MCP 서버를 사용하여 Stripe API와 상호작용할 수 있습니다.', tags: ['devtools'], stars: 4.7, installs: 331, prompt: '이 MCP는 Stripe 결제 관리 자동화가 필요할 때 사용합니다. 결제 조회, 고객 관리, 구독 처리, 환불을 자동화합니다. Stripe API 키로 설정하면 활성화됩니다.' },
    { id: 'postgresql-documentation', name: 'PostgreSQL 문서', nameEn: 'postgresql-documentation', category: 'mcps', desc: '더 나은 Postgres 코드 작성을 위한 PostgreSQL 문서와 스킬을 제공합니다.', tags: ['데이터베이스', '문서화'], stars: 4.7, installs: 323, prompt: '이 MCP는 PostgreSQL 문서와 모범 사례가 필요할 때 사용합니다. 공식 PostgreSQL 문서, SQL 예제, 성능 가이드를 즉시 참조할 수 있습니다. MCP 설정에서 추가하면 활성화됩니다.' },
    { id: 'mcp-server-browserbase', name: 'Browserbase MCP 서버', nameEn: 'mcp-server-browserbase', category: 'mcps', desc: 'Browserbase와 Stagehand를 사용한 클라우드 브라우저 자동화 기능을 제공합니다.', tags: ['browser_automation', 'MCP'], stars: 4.7, installs: 312, prompt: '이 MCP는 클라우드 기반 브라우저 자동화가 필요할 때 사용합니다. 원격 클라우드 브라우저에서 웹 자동화, 스크래핑, 테스팅을 실행합니다. Browserbase API 키로 설정하면 활성화됩니다.' },
    { id: 'postman', name: 'Postman', nameEn: 'postman', category: 'mcps', desc: 'Postman MCP 서버는 AI 에이전트와 어시스턴트를 Postman의 API에 직접 연결합니다.', tags: ['devtools'], stars: 4.7, installs: 310, prompt: '이 MCP는 Postman API 컬렉션 관리가 필요할 때 사용합니다. API 테스트 실행, 컬렉션 관리, 환경 변수 조작을 자동화합니다. Postman API 키로 설정하면 활성화됩니다.' },
    { id: 'mongodb', name: 'MongoDB', nameEn: 'mongodb', category: 'mcps', desc: 'MongoDB 데이터베이스와 MongoDB Atlas 클러스터에 연결하는 MCP 서버입니다.', tags: ['devtools'], stars: 4.7, installs: 302, prompt: '이 MCP는 MongoDB 데이터베이스 직접 접근이 필요할 때 사용합니다. 컬렉션 쿼리, 문서 삽입, 인덱스 관리를 자동화합니다. MongoDB 연결 문자열로 설정하면 활성화됩니다.' },
    { id: 'terraform', name: 'Terraform', nameEn: 'terraform', category: 'mcps', desc: 'Terraform MCP 서버는 원활한 통합을 제공하는 Model Context Protocol 서버입니다.', tags: ['devtools'], stars: 4.7, installs: 295, prompt: '이 MCP는 Terraform 인프라 코드 관리가 필요할 때 사용합니다. Terraform 계획, 적용, 상태 조회를 자동화합니다. Terraform CLI 환경에서 설정하면 활성화됩니다.' },
    { id: 'grafana', name: 'Grafana', nameEn: 'grafana', category: 'mcps', desc: 'Grafana 대시보드와 모니터링과 상호작용하는 MCP 서버입니다.', tags: ['devtools'], stars: 4.7, installs: 274, prompt: '이 MCP는 Grafana 모니터링 데이터 조회가 필요할 때 사용합니다. 대시보드 쿼리, 알림 관리, 메트릭 분석을 자동화합니다. Grafana URL과 API 키로 설정하면 활성화됩니다.' },
    { id: 'neon', name: 'Neon', nameEn: 'neon', category: 'mcps', desc: 'Neon 관리 API와 데이터베이스와 상호작용하는 MCP 서버입니다.', tags: ['데이터베이스'], stars: 4.7, installs: 256, prompt: '이 MCP는 Neon 서버리스 PostgreSQL 관리가 필요할 때 사용합니다. 브랜치 생성, 데이터베이스 쿼리, 프로젝트 관리를 자동화합니다. Neon API 키로 설정하면 활성화됩니다.' },
    { id: 'sentry', name: 'Sentry', nameEn: 'sentry', category: 'mcps', desc: 'Sentry와 상호작용하는 Model Context Protocol 서비스입니다.', tags: ['devtools'], stars: 4.7, installs: 247, prompt: '이 MCP는 Sentry 오류 추적 데이터 조회가 필요할 때 사용합니다. 오류 이슈 조회, 스택 트레이스 분석, 성능 문제 탐색을 자동화합니다. Sentry 토큰으로 설정하면 활성화됩니다.' },
    { id: 'elevenlabs', name: 'ElevenLabs', nameEn: 'elevenlabs', category: 'mcps', desc: '텍스트 음성 변환, 음성 복제, 오디오 처리, 전사를 위한 공식 ElevenLabs MCP입니다.', tags: ['audio'], stars: 4.7, installs: 239, prompt: '이 MCP는 AI 음성 생성과 오디오 처리가 필요할 때 사용합니다. 텍스트를 자연스러운 음성으로 변환하고 커스텀 음성을 생성합니다. ElevenLabs API 키로 설정하면 활성화됩니다.' },
    { id: 'imagesorcery', name: 'ImageSorcery', nameEn: 'imagesorcery', category: 'mcps', desc: '이미지 처리 작업을 위한 도구를 제공하는 MCP 서버입니다.', tags: ['devtools'], stars: 4.7, installs: 211, prompt: '이 MCP는 이미지 처리와 변환이 필요할 때 사용합니다. 이미지 크기 조정, 형식 변환, 필터 적용, 최적화를 자동화합니다. MCP 설정에서 추가하면 활성화됩니다.' },
    { id: 'elasticsearch', name: 'Elasticsearch', nameEn: 'elasticsearch', category: 'mcps', desc: 'Elasticsearch 데이터와 인덱스에 연결하는 MCP 서버입니다. 검색 쿼리와 ES|QL을 지원합니다.', tags: ['devtools'], stars: 4.6, installs: 176, prompt: '이 MCP는 Elasticsearch 데이터 검색과 분석이 필요할 때 사용합니다. 인덱스 쿼리, 집계 분석, 로그 검색을 자동화합니다. Elasticsearch URL로 설정하면 활성화됩니다.' },
    { id: 'mcp-server-trello', name: 'Trello MCP 서버', nameEn: 'mcp-server-trello', category: 'mcps', desc: 'Trello 보드와 카드를 관리하는 MCP 서버입니다.', tags: ['devtools', 'MCP'], stars: 4.6, installs: 160, prompt: '이 MCP는 Trello 프로젝트 관리 자동화가 필요할 때 사용합니다. 카드 생성, 리스트 관리, 멤버 할당을 자동화합니다. Trello API 키로 설정하면 활성화됩니다.' },
    { id: 'mcp-server-atlassian-bitbucket', name: 'Atlassian Bitbucket MCP', nameEn: 'mcp-server-atlassian-bitbucket', category: 'mcps', desc: 'Atlassian Bitbucket Cloud를 위한 Node.js/TypeScript MCP 서버입니다. AI에게 Bitbucket 접근을 허용합니다.', tags: ['devtools', 'MCP'], stars: 4.6, installs: 158, prompt: '이 MCP는 Bitbucket 저장소 관리 자동화가 필요할 때 사용합니다. PR 관리, 브랜치 조회, 커밋 히스토리를 자동화합니다. Bitbucket 자격증명으로 설정하면 활성화됩니다.' },
    { id: 'web-search-prime', name: '웹 검색 Prime', nameEn: 'web-search-prime', category: 'mcps', desc: 'Model Context Protocol 기반의 Z.AI 웹 검색 기능을 구현한 MCP 서버입니다.', tags: ['web'], stars: 4.6, installs: 151, prompt: '이 MCP는 고품질 웹 검색이 필요할 때 사용합니다. Z.AI 검색 엔진을 통해 최신 웹 정보를 검색합니다. Z.AI API 키로 설정하면 활성화됩니다.' },
    { id: 'web-reader', name: '웹 리더', nameEn: 'web-reader', category: 'mcps', desc: 'Model Context Protocol 기반의 Z.AI 웹 리더 MCP 서버입니다.', tags: ['web'], stars: 4.6, installs: 146, prompt: '이 MCP는 웹 페이지 콘텐츠 추출이 필요할 때 사용합니다. URL에서 깔끔한 텍스트 콘텐츠를 추출하고 구조화합니다. Z.AI API 키로 설정하면 활성화됩니다.' },
    { id: 'mcp-server-nia', name: 'NIA MCP 서버', nameEn: 'mcp-server-nia', category: 'mcps', desc: '심층 연구 기능을 제공하는 MCP 서버입니다.', tags: ['deepresearch', 'MCP'], stars: 4.6, installs: 144, prompt: '이 MCP는 AI 기반 심층 연구가 필요할 때 사용합니다. 다양한 소스에서 정보를 수집하고 종합하는 연구 자동화를 지원합니다. MCP 설정에서 추가하면 활성화됩니다.' },
    { id: 'webflow', name: 'Webflow', nameEn: 'webflow', category: 'mcps', desc: 'AI 에이전트가 Webflow API와 상호작용할 수 있습니다.', tags: ['devtools'], stars: 4.6, installs: 137, prompt: '이 MCP는 Webflow 사이트 관리 자동화가 필요할 때 사용합니다. 사이트 콘텐츠 업데이트, 컬렉션 관리, 배포를 자동화합니다. Webflow API 토큰으로 설정하면 활성화됩니다.' },
    { id: 'just-mcp', name: 'Just MCP', nameEn: 'just-mcp', category: 'mcps', desc: 'Claude Code에서 Just 명령어와 작업 러너를 원활하게 실행합니다.', tags: ['devtools', 'MCP'], stars: 4.6, installs: 135, prompt: '이 MCP는 Justfile 기반 프로젝트 작업 실행이 필요할 때 사용합니다. Just 레시피 조회, 실행, 결과 확인을 자동화합니다. Just 설치 환경에서 설정하면 활성화됩니다.' },
    { id: 'leetcode', name: 'LeetCode', nameEn: 'leetcode', category: 'mcps', desc: 'AI 어시스턴트가 LeetCode 문제에 접근할 수 있는 LeetCode MCP 서버입니다.', tags: ['devtools'], stars: 4.6, installs: 135, prompt: '이 MCP는 코딩 문제 풀이와 학습이 필요할 때 사용합니다. LeetCode 문제 검색, 솔루션 분석, 유사 문제 추천을 자동화합니다. MCP 설정에서 추가하면 활성화됩니다.' },
    { id: 'railway', name: 'Railway', nameEn: 'railway', category: 'mcps', desc: 'Railway 배포 플랫폼과의 원활한 통합을 제공하는 Railway MCP 서버입니다.', tags: ['devtools'], stars: 4.6, installs: 134, prompt: '이 MCP는 Railway 배포 플랫폼 관리가 필요할 때 사용합니다. 서비스 배포, 환경 관리, 로그 조회를 자동화합니다. Railway API 토큰으로 설정하면 활성화됩니다.' },
    { id: 'microsoft-clarity', name: 'Microsoft Clarity', nameEn: 'microsoft-clarity', category: 'mcps', desc: 'Microsoft Clarity 분석 데이터에 접근하는 MCP 컴포넌트입니다.', tags: ['devtools'], stars: 4.6, installs: 125, prompt: '이 MCP는 Clarity 사용자 행동 분석이 필요할 때 사용합니다. 히트맵, 세션 녹화, 클릭 데이터를 자동으로 분석합니다. Clarity 프로젝트 ID로 설정하면 활성화됩니다.' },
    { id: 'circleci', name: 'CircleCI', nameEn: 'circleci', category: 'mcps', desc: 'Claude Code 워크플로우에 CircleCI 빌드 및 배포 파이프라인 관리를 통합합니다.', tags: ['devtools'], stars: 4.6, installs: 122, prompt: '이 MCP는 CircleCI CI/CD 파이프라인 관리가 필요할 때 사용합니다. 빌드 상태 조회, 파이프라인 트리거, 워크플로우 관리를 자동화합니다. CircleCI 토큰으로 설정하면 활성화됩니다.' },
    { id: 'microsoft-dev-box', name: 'Microsoft Dev Box', nameEn: 'microsoft-dev-box', category: 'mcps', desc: '개발 박스 관리와 같은 개발자 중심 작업을 위한 자연어 상호작용을 가능하게 합니다.', tags: ['devtools'], stars: 4.6, installs: 119, prompt: '이 MCP는 Microsoft Dev Box 환경 관리가 필요할 때 사용합니다. 개발 박스 생성, 시작, 중지, 스냅샷을 자동화합니다. Azure 자격증명으로 설정하면 활성화됩니다.' },
    { id: 'firefly-mcp', name: 'Firefly MCP', nameEn: 'firefly-mcp', category: 'mcps', desc: '고급 AI 기반 개발 지원, 코드 분석, 지능형 제안을 위한 Firefly AI 서비스에 연결합니다.', tags: ['devtools', 'MCP'], stars: 4.6, installs: 115, prompt: '이 MCP는 Firefly AI 개발 지원이 필요할 때 사용합니다. 코드 분석, 인프라 드리프트 탐지, 자동화 제안을 지원합니다. Firefly API 키로 설정하면 활성화됩니다.' },
    { id: 'azure-kubernetes-service', name: 'Azure Kubernetes Service', nameEn: 'azure-kubernetes-service', category: 'mcps', desc: 'AI 어시스턴트가 Azure Kubernetes Service와 상호작용할 수 있게 하는 MCP 서버입니다.', tags: ['devtools'], stars: 4.6, installs: 103, prompt: '이 MCP는 AKS 클러스터 관리가 필요할 때 사용합니다. 파드 조회, 배포 관리, 로그 수집을 자동화합니다. Azure 자격증명으로 설정하면 활성화됩니다.' },
    { id: 'monday', name: 'Monday.com', nameEn: 'monday', category: 'mcps', desc: 'AI 에이전트가 실제 워크플로우 내에서 안정적으로 작동하도록 monday.com의 오픈 프레임워크입니다.', tags: ['생산성'], stars: 4.6, installs: 103, prompt: '이 MCP는 Monday.com 프로젝트 관리 자동화가 필요할 때 사용합니다. 보드 조회, 아이템 생성, 상태 업데이트를 자동화합니다. Monday.com API 키로 설정하면 활성화됩니다.' },
    { id: 'box', name: 'Box', nameEn: 'box', category: 'mcps', desc: 'Box API와 통합하여 다양한 Box 파일 작업을 수행하는 Python 프로젝트입니다.', tags: ['devtools'], stars: 4.6, installs: 100, prompt: '이 MCP는 Box 클라우드 스토리지 관리가 필요할 때 사용합니다. 파일 업로드, 공유, 검색, 폴더 관리를 자동화합니다. Box OAuth 자격증명으로 설정하면 활성화됩니다.' },
    { id: 'pulumi', name: 'Pulumi', nameEn: 'pulumi', category: 'mcps', desc: 'Pulumi MCP 서버는 고급 인프라 코드 개발 기능을 제공합니다.', tags: ['devtools'], stars: 4.5, installs: 97, prompt: '이 MCP는 Pulumi 인프라 코드 관리가 필요할 때 사용합니다. 스택 배포, 리소스 조회, 업데이트를 자동화합니다. Pulumi CLI 환경에서 설정하면 활성화됩니다.' },
    { id: 'testsprite', name: 'TestSprite', nameEn: 'testsprite', category: 'mcps', desc: 'TestSprite MCP는 의도를 읽고 코드를 테스트하여 수정 사항을 알려줍니다.', tags: ['devtools'], stars: 4.5, installs: 94, prompt: '이 MCP는 AI 기반 테스트 생성이 필요할 때 사용합니다. 코드 의도를 분석하여 자동으로 테스트를 생성하고 실행합니다. TestSprite 설정으로 활성화됩니다.' },
    { id: 'codacy', name: 'Codacy', nameEn: 'codacy', category: 'mcps', desc: 'Codacy API MCP 서버로 저장소, 파일, 품질, 커버리지, 보안에 접근합니다.', tags: ['devtools'], stars: 4.5, installs: 91, prompt: '이 MCP는 Codacy 코드 품질 분석이 필요할 때 사용합니다. 코드 품질 메트릭, 커버리지 리포트, 보안 이슈를 조회합니다. Codacy API 토큰으로 설정하면 활성화됩니다.' },
    { id: 'launchdarkly', name: 'LaunchDarkly', nameEn: 'launchdarkly', category: 'mcps', desc: '피처 플래그 관리와 실험을 위한 공식 LaunchDarkly MCP 서버입니다.', tags: ['devtools'], stars: 4.5, installs: 86, prompt: '이 MCP는 피처 플래그 관리가 필요할 때 사용합니다. 플래그 생성, 토글, 타겟팅 규칙 설정을 자동화합니다. LaunchDarkly API 키로 설정하면 활성화됩니다.' },
    { id: 'logfire', name: 'Logfire', nameEn: 'logfire', category: 'mcps', desc: 'Logfire를 통해 OpenTelemetry 트레이스와 메트릭에 접근합니다.', tags: ['devtools'], stars: 4.5, installs: 84, prompt: '이 MCP는 OpenTelemetry 관찰 가능성 데이터 조회가 필요할 때 사용합니다. 분산 트레이스, 성능 메트릭, 로그를 자동으로 분석합니다. Logfire 토큰으로 설정하면 활성화됩니다.' },
    { id: 'jfrog', name: 'JFrog', nameEn: 'jfrog', category: 'mcps', desc: 'JFrog MCP 서버는 에이전트에게 JFrog 플랫폼 서비스에 직접 접근을 제공합니다.', tags: ['devtools'], stars: 4.5, installs: 71, prompt: '이 MCP는 JFrog Artifactory와 Xray 관리가 필요할 때 사용합니다. 아티팩트 조회, 보안 스캔, 저장소 관리를 자동화합니다. JFrog 자격증명으로 설정하면 활성화됩니다.' },
    { id: 'zai-mcp-server', name: 'Z.AI MCP 서버', nameEn: 'zai-mcp-server', category: 'mcps', desc: 'Model Context Protocol 기반의 Z.AI 비전 기능 구현 MCP 서버입니다.', tags: ['devtools', 'MCP'], stars: 4.5, installs: 68, prompt: '이 MCP는 Z.AI 비전 AI 기능이 필요할 때 사용합니다. 이미지 분석, 시각적 이해, 멀티모달 처리를 지원합니다. Z.AI API 키로 설정하면 활성화됩니다.' },
    { id: 'dynatrace', name: 'Dynatrace', nameEn: 'dynatrace', category: 'mcps', desc: 'Dynatrace 플랫폼을 관리하고 실시간 관찰 가능성과 모니터링에 상호작용합니다.', tags: ['devtools'], stars: 4.5, installs: 66, prompt: '이 MCP는 Dynatrace 모니터링 데이터 조회가 필요할 때 사용합니다. 애플리케이션 성능, 인프라 상태, 알림을 자동으로 분석합니다. Dynatrace 토큰으로 설정하면 활성화됩니다.' },
    { id: 'zread', name: 'Zread', nameEn: 'zread', category: 'mcps', desc: 'zread.ai를 활용한 Z.AI 구현 기반의 Zread MCP 서버입니다.', tags: ['web'], stars: 4.5, installs: 64, prompt: '이 MCP는 웹 콘텐츠 고품질 추출이 필요할 때 사용합니다. 웹 페이지를 깔끔한 읽기 형식으로 변환하여 분석합니다. Z.AI API 키로 설정하면 활성화됩니다.' },
    { id: 'brightdata', name: 'Bright Data', nameEn: 'brightdata', category: 'mcps', desc: 'Bright Data MCP 서버로 웹 검색, 스크래핑, 구조화된 데이터 추출을 위한 60개+ 도구를 제공합니다.', tags: ['web-data'], stars: 4.5, installs: 58, prompt: '이 MCP는 대규모 웹 데이터 수집이 필요할 때 사용합니다. 프록시 로테이션, CAPTCHA 해결, 대규모 크롤링을 자동화합니다. Bright Data 자격증명으로 설정하면 활성화됩니다.' },
    { id: 'footballbin-predictions', name: 'Footballbin 예측', nameEn: 'footballbin-predictions', category: 'mcps', desc: 'AI 기반 축구 경기 예측을 제공합니다. 프리미어리그와 챔피언스리그의 전후반 스코어를 예측합니다.', tags: ['integration'], stars: 4.4, installs: 25, prompt: '이 MCP는 축구 경기 예측이 필요할 때 사용합니다. AI 모델 기반의 경기 결과, 스코어 예측을 제공합니다. API 설정으로 활성화됩니다.' },
    { id: 'devplan-mcp', name: 'DevPlan MCP', nameEn: 'devplan-mcp', category: 'mcps', desc: '개발 계획 수립과 관리를 지원하는 MCP 컴포넌트입니다.', tags: ['devtools', 'MCP'], stars: 4.4, installs: 19, prompt: '이 MCP는 AI 기반 개발 계획 수립이 필요할 때 사용합니다. 기능 계획, 일정 추정, 작업 분해를 자동화합니다. MCP 설정에서 추가하면 활성화됩니다.' },
    { id: 'browseract', name: 'BrowserAct', nameEn: 'browseract', category: 'mcps', desc: 'Amazon, YouTube, Google Maps에서 구조화된 데이터 추출을 위한 BrowserAct 클라우드 브라우저 자동화입니다.', tags: ['web-data'], stars: 4.4, installs: 0, prompt: '이 MCP는 특정 플랫폼에서 구조화된 데이터 추출이 필요할 때 사용합니다. Amazon 제품, YouTube 영상, Google Maps 장소 데이터를 자동으로 추출합니다. BrowserAct 설정으로 활성화됩니다.' },
    { id: 'tinyfish', name: 'TinyFish', nameEn: 'tinyfish', category: 'mcps', desc: 'TinyFish 웹 에이전트 - 실시간 진행 스트리밍, 비동기 처리를 갖춘 MCP를 통한 웹 브라우징과 데이터 추출입니다.', tags: ['web'], stars: 4.4, installs: 0, prompt: '이 MCP는 비동기 웹 자동화가 필요할 때 사용합니다. 복잡한 웹 탐색, 데이터 추출, 폼 처리를 스트리밍 방식으로 자동화합니다. TinyFish 설정으로 활성화됩니다.' }
  ],

  plugins: [
    { id: 'ai-ml-toolkit', name: 'AI/ML 툴킷', nameEn: 'ai-ml-toolkit', category: 'plugins', desc: '데이터 엔지니어링과 모델 배포 도구를 갖춘 AI 및 머신러닝 개발 스위트입니다.', tags: ['플러그인', 'AI', '머신러닝'], stars: 4.4, installs: 0, prompt: '이 플러그인은 AI/ML 프로젝트 개발 환경 구성이 필요할 때 사용합니다. 데이터 파이프라인, 모델 학습, 배포 도구를 통합한 종합 AI 개발 환경을 제공합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'devops-automation', name: 'DevOps 자동화', nameEn: 'devops-automation', category: 'plugins', desc: 'CI/CD, 인프라 관리, 배포 오케스트레이션을 갖춘 DevOps 자동화 스위트입니다.', tags: ['플러그인', 'DevOps', 'CI/CD', '자동화'], stars: 4.4, installs: 0, prompt: '이 플러그인은 DevOps 파이프라인 자동화가 필요할 때 사용합니다. CI/CD, 인프라 프로비저닝, 모니터링, 알림을 통합한 DevOps 도구 모음을 제공합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'documentation-generator', name: '문서 생성기', nameEn: 'documentation-generator', category: 'plugins', desc: 'API 문서, 기술 문서 작성, 콘텐츠 관리를 갖춘 자동화된 문서 생성 스위트입니다.', tags: ['플러그인', '문서화'], stars: 4.4, installs: 0, prompt: '이 플러그인은 프로젝트 문서 자동화가 필요할 때 사용합니다. API 레퍼런스, 사용자 가이드, 아키텍처 문서를 자동으로 생성하는 도구 모음을 제공합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'git-workflow', name: 'Git 워크플로우', nameEn: 'git-workflow', category: 'plugins', desc: 'Git 워크플로우 자동화: 피처, 릴리즈, 핫픽스 명령어와 git 전문 에이전트를 제공합니다.', tags: ['플러그인', 'Git', '워크플로우', '자동화'], stars: 4.4, installs: 0, prompt: '이 플러그인은 Git Flow 워크플로우 자동화가 필요할 때 사용합니다. 브랜치 관리, 커밋 형식화, PR 생성, 릴리즈 프로세스를 통합 자동화합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'nextjs-vercel-pro', name: 'Next.js/Vercel Pro', nameEn: 'nextjs-vercel-pro', category: 'plugins', desc: '배포 자동화와 성능 최적화를 갖춘 완전한 Next.js 및 Vercel 개발 툴킷입니다.', tags: ['플러그인', 'Next.js', 'React', '성능'], stars: 4.4, installs: 0, prompt: '이 플러그인은 Next.js와 Vercel 개발 환경 구성이 필요할 때 사용합니다. 개발, 빌드, 배포, 최적화를 통합한 Next.js 전문 도구 모음을 제공합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'performance-optimizer', name: '성능 최적화기', nameEn: 'performance-optimizer', category: 'plugins', desc: '프로파일링, 번들 분석, 속도 개선 도구를 갖춘 성능 최적화 스위트입니다.', tags: ['플러그인', '성능'], stars: 4.4, installs: 0, prompt: '이 플러그인은 애플리케이션 성능 최적화가 필요할 때 사용합니다. 성능 프로파일링, 번들 분석, 코어 웹 바이탈 개선 도구를 통합 제공합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'project-management-suite', name: '프로젝트 관리 스위트', nameEn: 'project-management-suite', category: 'plugins', desc: '스프린트 계획, 작업 자동화, 팀 협업 도구를 갖춘 프로젝트 관리 툴킷입니다.', tags: ['플러그인'], stars: 4.4, installs: 0, prompt: '이 플러그인은 팀 프로젝트 관리 자동화가 필요할 때 사용합니다. 스프린트 관리, 작업 추적, 팀 소통, 진행 보고서를 통합 지원합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'security-pro', name: '보안 Pro', nameEn: 'security-pro', category: 'plugins', desc: '감사, 침투 테스팅, 컴플라이언스 자동화를 갖춘 엔터프라이즈 보안 툴킷입니다.', tags: ['플러그인', '보안'], stars: 4.4, installs: 0, prompt: '이 플러그인은 엔터프라이즈 보안 관리가 필요할 때 사용합니다. 취약점 스캔, 침투 테스트, 컴플라이언스 감사, 보안 보고서를 통합 자동화합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'supabase-toolkit', name: 'Supabase 툴킷', nameEn: 'supabase-toolkit', category: 'plugins', desc: '특화된 명령어, 데이터 엔지니어링 에이전트, MCP 통합을 갖춘 완전한 Supabase 워크플로우입니다.', tags: ['플러그인', '데이터베이스'], stars: 4.4, installs: 0, prompt: '이 플러그인은 Supabase 개발 환경 구성이 필요할 때 사용합니다. 스키마 관리, 실시간 기능, RLS 정책, 마이그레이션을 통합한 Supabase 전문 도구 모음을 제공합니다. 플러그인 설치 후 자동으로 활성화됩니다.' },
    { id: 'testing-suite', name: '테스팅 스위트', nameEn: 'testing-suite', category: 'plugins', desc: 'E2E, 단위, 통합, 시각적 테스팅 자동화를 갖춘 종합적인 테스팅 툴킷입니다.', tags: ['플러그인', '테스트', '자동화'], stars: 4.4, installs: 0, prompt: '이 플러그인은 종합적인 테스트 환경 구성이 필요할 때 사용합니다. 단위, 통합, E2E, 시각적 회귀 테스트를 통합한 테스트 자동화 도구 모음을 제공합니다. 플러그인 설치 후 자동으로 활성화됩니다.' }
  ]
};