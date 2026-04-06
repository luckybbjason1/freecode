/* ===================================================
   SITE_DATA — 한국어 컨텐츠 데이터
   =================================================== */
'use strict';

const SITE_DATA = {
  meta: {
    siteName: 'oppa19',
    tagline: 'oppa19 — 1000개+ 에이전트, 명령어, 스킬 & MCP 통합',
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
      tags: ['테스트', '품질', '자동화', 'TDD'], stars: 4.9, installs: 12400, icon: '🧪', color: 'emerald',
      prompt: `# TDD 워크플로우 스킬

이 스킬을 활성화하여 테스트 주도 개발 방법론으로 코드를 작성하세요.

## 사용 방법
새 기능을 구현할 때 다음 순서를 반드시 지키세요:

1. **RED**: 실패하는 테스트를 먼저 작성하세요
   - 구현하려는 기능을 테스트 코드로 명확히 정의하세요
   - 테스트를 실행하여 실패하는지 확인하세요

2. **GREEN**: 테스트를 통과시키는 최소한의 코드를 작성하세요
   - 불필요한 코드는 절대 작성하지 마세요
   - 테스트를 통과시키는 가장 단순한 구현을 선택하세요

3. **REFACTOR**: 코드를 개선하세요
   - 중복을 제거하고 가독성을 높이세요
   - 테스트가 여전히 통과하는지 확인하세요

## 프롬프트 예시
"[기능명] 기능을 TDD로 구현해주세요. 먼저 테스트를 작성하고, 테스트가 실패하는 것을 확인한 후, 구현 코드를 작성해주세요. 최종적으로 테스트 커버리지가 80% 이상이 되도록 해주세요."

## 커버리지 목표
- 단위 테스트: 90% 이상
- 통합 테스트: 80% 이상
- E2E 테스트: 핵심 사용자 플로우 100%`
    },
    {
      id: 'frontend-design', name: '프론트엔드 디자인', category: 'skills',
      desc: '최신 UI/UX 패턴과 디자인 시스템 구현을 위한 완벽한 가이드입니다. Tailwind, shadcn/ui, 애니메이션 패턴을 포함합니다.',
      tags: ['UI', 'UX', '디자인', 'Tailwind'], stars: 4.8, installs: 9800, icon: '🎨', color: 'pink',
      prompt: `# 프론트엔드 디자인 스킬

최신 UI/UX 패턴으로 아름답고 사용하기 쉬운 인터페이스를 구현하세요.

## 디자인 원칙

### 시각적 계층
- 크기, 색상, 간격으로 정보 계층을 표현하세요
- 한 페이지에 하나의 주요 행동(CTA)만 배치하세요

### 컴포넌트 설계
- 재사용 가능한 원자적 컴포넌트를 만드세요
- Props로 변형을 처리하고 상태를 외부로 노출하세요

### 반응형 디자인
- 모바일 우선(Mobile First) 접근법을 사용하세요
- Tailwind 브레이크포인트: sm(640px), md(768px), lg(1024px), xl(1280px)

## 프롬프트 예시
"[페이지/컴포넌트명]을 디자인해주세요. 다크 모드를 지원하고, Tailwind CSS를 사용하며, 접근성(WCAG 2.1 AA) 기준을 충족해야 합니다. 모바일 우선으로 설계하고, 호버/포커스/액티브 상태를 모두 구현해주세요."

## 기술 스택
- CSS 프레임워크: Tailwind CSS
- 컴포넌트 라이브러리: shadcn/ui
- 애니메이션: Framer Motion / CSS transitions
- 아이콘: Lucide React`
    },
    {
      id: 'api-design', name: 'API 설계 원칙', category: 'skills',
      desc: 'RESTful 및 GraphQL API를 설계하는 모범 사례를 제공합니다. 버전 관리, 에러 처리, 인증 패턴이 포함됩니다.',
      tags: ['API', 'REST', 'GraphQL', '설계'], stars: 4.7, installs: 8200, icon: '🔗', color: 'blue',
      prompt: `# API 설계 원칙 스킬

일관성 있고 사용하기 쉬운 API를 설계하세요.

## RESTful API 규칙

### URL 설계
- 명사 복수형 사용: /users, /products, /orders
- 중첩 리소스: /users/{id}/orders
- 버전 관리: /api/v1/users

### HTTP 메서드
- GET: 데이터 조회 (멱등성 보장)
- POST: 리소스 생성
- PUT: 전체 업데이트 (멱등성 보장)
- PATCH: 부분 업데이트
- DELETE: 삭제 (멱등성 보장)

### 응답 형식
\`\`\`json
{
  "success": true,
  "data": { ... },
  "error": null,
  "meta": { "total": 100, "page": 1, "limit": 20 }
}
\`\`\`

### 에러 처리
- 400 Bad Request: 잘못된 요청
- 401 Unauthorized: 인증 필요
- 403 Forbidden: 권한 없음
- 404 Not Found: 리소스 없음
- 429 Too Many Requests: 속도 제한
- 500 Internal Server Error: 서버 오류

## 프롬프트 예시
"[서비스명]의 REST API를 설계해주세요. OpenAPI 3.0 스펙으로 문서화하고, 인증은 JWT Bearer 토큰을 사용하며, 모든 엔드포인트에 속도 제한을 적용해주세요."`
    },
    {
      id: 'security-best', name: '보안 모범 사례', category: 'skills',
      desc: 'OWASP Top 10 및 보안 취약점 방어 전략을 자동으로 검토합니다. SQL 인젝션, XSS, CSRF 방어 체크리스트가 포함됩니다.',
      tags: ['보안', 'OWASP', '취약점', '방어'], stars: 4.9, installs: 11000, icon: '🛡️', color: 'gold',
      prompt: `# 보안 모범 사례 스킬

OWASP Top 10을 기반으로 코드의 보안 취약점을 검토하세요.

## 필수 보안 체크리스트

### 입력 검증
- 모든 사용자 입력을 서버에서 검증하세요
- 화이트리스트 방식으로 허용된 값만 허용하세요
- 파라미터화된 쿼리로 SQL 인젝션을 방지하세요

### 인증/인가
- 비밀번호는 bcrypt(cost factor 12+)로 해시하세요
- JWT 만료 시간을 짧게 설정하고 리프레시 토큰을 사용하세요
- 모든 민감한 엔드포인트에 권한 검증을 추가하세요

### XSS 방어
- 사용자 입력을 HTML에 삽입할 때 반드시 이스케이프 처리하세요
- Content Security Policy(CSP) 헤더를 설정하세요
- innerHTML 대신 textContent를 사용하세요

### CSRF 방어
- 상태 변경 요청에 CSRF 토큰을 검증하세요
- SameSite=Strict 쿠키 속성을 사용하세요

### 시크릿 관리
- 소스 코드에 API 키, 비밀번호를 절대 하드코딩하지 마세요
- 환경 변수 또는 시크릿 관리자를 사용하세요

## 프롬프트 예시
"이 코드의 보안 취약점을 OWASP Top 10 기준으로 검토해주세요. 발견된 각 취약점에 대해 심각도(Critical/High/Medium/Low)와 수정 방법을 제시해주세요."`
    },
    {
      id: 'database-schema', name: '데이터베이스 스키마 설계', category: 'skills',
      desc: '효율적인 데이터베이스 스키마와 인덱싱 전략을 설계합니다. 정규화, 성능 최적화, 마이그레이션 전략을 다룹니다.',
      tags: ['데이터베이스', 'SQL', '최적화', 'ORM'], stars: 4.6, installs: 7500, icon: '🗄️', color: 'purple',
      prompt: `# 데이터베이스 스키마 설계 스킬

효율적이고 확장 가능한 데이터베이스 스키마를 설계하세요.

## 설계 원칙

### 정규화
- 1NF: 원자적 값, 중복 제거
- 2NF: 부분 함수 종속 제거
- 3NF: 이행 함수 종속 제거
- 필요 시 성능을 위해 비정규화 허용

### 인덱스 전략
- 자주 조회하는 컬럼에 인덱스를 생성하세요
- 복합 인덱스는 선택도(Cardinality)가 높은 컬럼을 앞에 배치하세요
- 과도한 인덱스는 쓰기 성능을 저하시킵니다

### 네이밍 컨벤션
- 테이블명: snake_case 복수형 (users, order_items)
- 컬럼명: snake_case (created_at, user_id)
- 기본키: id (BIGSERIAL 또는 UUID)
- 외래키: {테이블명}_id (user_id, product_id)

### 필수 컬럼
- id: PRIMARY KEY
- created_at: TIMESTAMP WITH TIME ZONE DEFAULT NOW()
- updated_at: TIMESTAMP WITH TIME ZONE DEFAULT NOW()

## 프롬프트 예시
"[서비스명]의 데이터베이스 스키마를 설계해주세요. PostgreSQL을 사용하며, 사용자 인증, [핵심 기능들]을 지원해야 합니다. ERD와 함께 각 테이블의 인덱스 전략을 설명해주세요."`
    },
    {
      id: 'python-patterns', name: '파이썬 디자인 패턴', category: 'skills',
      desc: 'Pythonic 코드 작성과 고급 디자인 패턴 구현 방법을 안내합니다. 데코레이터, 컨텍스트 매니저, 비동기 패턴을 포함합니다.',
      tags: ['Python', '패턴', '모범사례', '비동기'], stars: 4.8, installs: 10200, icon: '🐍', color: 'emerald',
      prompt: `# 파이썬 디자인 패턴 스킬

Pythonic하고 유지보수하기 쉬운 코드를 작성하세요.

## 핵심 패턴

### 데코레이터
\`\`\`python
import functools
from typing import Callable

def retry(max_attempts: int = 3):
    def decorator(func: Callable):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
            return None
        return wrapper
    return decorator
\`\`\`

### 컨텍스트 매니저
\`\`\`python
from contextlib import contextmanager

@contextmanager
def managed_resource():
    resource = acquire_resource()
    try:
        yield resource
    finally:
        release_resource(resource)
\`\`\`

### 타입 힌트
- 모든 함수에 타입 힌트를 추가하세요
- dataclasses 또는 Pydantic으로 데이터 모델을 정의하세요

### 비동기
- asyncio, aiohttp로 I/O 바운드 작업을 처리하세요
- async/await 패턴을 일관되게 사용하세요

## 프롬프트 예시
"다음 Python 코드를 Pythonic하게 리팩토링해주세요. 타입 힌트를 추가하고, 적절한 디자인 패턴을 적용하며, PEP 8 스타일 가이드를 따르도록 해주세요."`
    },
    {
      id: 'react-best', name: 'React 모범 사례', category: 'skills',
      desc: 'React 컴포넌트 최적화, 상태 관리, 성능 개선 전략입니다. useMemo, useCallback, 코드 스플리팅 기법을 다룹니다.',
      tags: ['React', '최적화', '성능', 'Hooks'], stars: 4.7, installs: 13500, icon: '⚛️', color: 'blue',
      prompt: `# React 모범 사례 스킬

성능이 최적화된 React 애플리케이션을 구축하세요.

## 컴포넌트 설계

### 단일 책임 원칙
- 각 컴포넌트는 하나의 역할만 수행해야 합니다
- 200줄 이상이면 분리를 고려하세요

### Custom Hooks
- 로직을 재사용 가능한 훅으로 추출하세요
- 이름은 "use"로 시작하세요 (useUserData, useFetch)

## 성능 최적화

### 불필요한 리렌더링 방지
\`\`\`typescript
// 무거운 계산 메모이제이션
const expensiveValue = useMemo(() =>
  calculateExpensive(data), [data]);

// 콜백 함수 메모이제이션
const handleClick = useCallback(() => {
  onAction(id);
}, [id, onAction]);

// 컴포넌트 메모이제이션
const MemoComponent = React.memo(Component);
\`\`\`

### 코드 스플리팅
\`\`\`typescript
const LazyComponent = React.lazy(() =>
  import('./HeavyComponent'));
\`\`\`

### 상태 관리
- 전역 상태: Zustand 또는 Jotai
- 서버 상태: TanStack Query (React Query)
- 폼 상태: React Hook Form

## 프롬프트 예시
"이 React 컴포넌트의 성능을 최적화해주세요. 불필요한 리렌더링을 제거하고, 적절한 메모이제이션을 적용하며, TypeScript 타입을 강화해주세요."`
    },
    {
      id: 'nextjs-patterns', name: 'Next.js 패턴', category: 'skills',
      desc: 'App Router, Server Components, 캐싱 전략 등 최신 Next.js 기법입니다. ISR, SSR, SSG 패턴과 최적화를 다룹니다.',
      tags: ['Next.js', 'React', 'SSR', 'App Router'], stars: 4.9, installs: 15200, icon: '▲', color: 'gold',
      prompt: `# Next.js 패턴 스킬

App Router 기반의 최신 Next.js 애플리케이션을 구축하세요.

## App Router 핵심 패턴

### 렌더링 전략 선택
- **Server Component (기본)**: 데이터 패칭, SEO 중요 페이지
- **'use client'**: 인터랙티브, 브라우저 API 사용
- **Server Actions**: 폼 처리, 데이터 변경

### 데이터 패칭
\`\`\`typescript
// 서버 컴포넌트에서 직접 패치
async function Page() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // ISR: 1시간마다 재검증
  });
  return <Component data={await data.json()} />;
}
\`\`\`

### 캐싱 전략
- **Static**: 빌드 시 생성, CDN 캐시
- **ISR**: 특정 시간마다 재생성
- **SSR**: 요청마다 새로 생성
- **on-demand revalidation**: 특정 이벤트 시 재생성

### 라우트 핸들러
\`\`\`typescript
// app/api/route.ts
export async function GET(request: Request) {
  return Response.json({ message: 'Hello' });
}
\`\`\`

## 프롬프트 예시
"Next.js App Router로 [기능]을 구현해주세요. Server Components를 최대한 활용하고, 적절한 캐싱 전략을 적용해주세요. 메타데이터 API로 SEO도 최적화해주세요."`
    },
    {
      id: 'typescript-adv', name: 'TypeScript 고급 타입', category: 'skills',
      desc: '제네릭, 조건부 타입, 유틸리티 타입 등 고급 TypeScript 기법입니다. 타입 안전성을 극대화하는 패턴을 제공합니다.',
      tags: ['TypeScript', '타입', 'JavaScript', '제네릭'], stars: 4.8, installs: 11800, icon: '📘', color: 'blue',
      prompt: `# TypeScript 고급 타입 스킬

강력한 타입 시스템으로 런타임 오류를 컴파일 타임에 잡으세요.

## 핵심 고급 타입

### 조건부 타입
\`\`\`typescript
type IsArray<T> = T extends Array<any> ? true : false;
type Flatten<T> = T extends Array<infer Item> ? Item : T;
\`\`\`

### 제네릭 제약
\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
\`\`\`

### 유틸리티 타입 활용
\`\`\`typescript
type UserUpdate = Partial<Pick<User, 'name' | 'email'>>;
type RequiredUser = Required<User>;
type ReadonlyConfig = Readonly<Config>;
\`\`\`

### 템플릿 리터럴 타입
\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;
type CSSProperty = \`--\${string}\`;
\`\`\`

### Discriminated Union
\`\`\`typescript
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };
\`\`\`

### 타입 가드
\`\`\`typescript
function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null && 'id' in value;
}
\`\`\`

## 프롬프트 예시
"이 JavaScript 코드를 TypeScript로 마이그레이션해주세요. any 타입 사용을 최소화하고, 제네릭과 유틸리티 타입을 활용하여 타입 안전성을 극대화해주세요."`
    },
    {
      id: 'mcp-builder', name: 'MCP 서버 빌더', category: 'skills',
      desc: 'Model Context Protocol 서버를 처음부터 구축하는 완전한 가이드입니다. 도구 정의, 리소스 관리, 프롬프트 시스템을 다룹니다.',
      tags: ['MCP', '서버', '프로토콜', 'SDK'], stars: 4.9, installs: 9600, icon: '🔌', color: 'purple',
      prompt: `# MCP 서버 빌더 스킬

Claude Code와 통합되는 Model Context Protocol 서버를 구축하세요.

## MCP 서버 기본 구조

### 설치
\`\`\`bash
npm create mcp-server@latest my-mcp-server
cd my-mcp-server && npm install
\`\`\`

### 도구(Tool) 정의
\`\`\`typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";

const server = new Server({
  name: "my-server",
  version: "1.0.0",
}, {
  capabilities: { tools: {} }
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "my_tool",
    description: "도구 설명",
    inputSchema: {
      type: "object",
      properties: {
        input: { type: "string", description: "입력값" }
      },
      required: ["input"]
    }
  }]
}));
\`\`\`

### 리소스 정의
\`\`\`typescript
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [{
    uri: "myapp://data",
    name: "데이터",
    mimeType: "application/json"
  }]
}));
\`\`\`

## Claude Code 설정
\`\`\`json
{
  "mcpServers": {
    "my-server": {
      "command": "node",
      "args": ["path/to/server/index.js"]
    }
  }
}
\`\`\`

## 프롬프트 예시
"[서비스/API명]을 위한 MCP 서버를 만들어주세요. [기능들]을 도구로 노출하고, TypeScript로 구현해주세요."`
    },
    {
      id: 'docker-dev', name: 'Docker 개발 환경', category: 'skills',
      desc: '컨테이너 기반 개발 환경 구축과 Docker Compose 설정을 자동화합니다. 멀티스테이지 빌드와 최적화된 이미지를 생성합니다.',
      tags: ['Docker', '컨테이너', 'DevOps', 'Compose'], stars: 4.6, installs: 6800, icon: '🐳', color: 'blue',
      prompt: `# Docker 개발 환경 스킬

컨테이너 기반 일관된 개발 환경을 구축하세요.

## 최적화된 Dockerfile

### 멀티스테이지 빌드 (Node.js)
\`\`\`dockerfile
# 빌드 스테이지
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# 프로덕션 스테이지
FROM node:20-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN npm run build

EXPOSE 3000
USER node
CMD ["node", "dist/index.js"]
\`\`\`

## Docker Compose 설정
\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports: ["3000:3000"]
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db
      - redis

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_PASSWORD: \${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine

volumes:
  postgres_data:
\`\`\`

## .dockerignore
\`\`\`
node_modules
.git
.env
dist
\`\`\`

## 프롬프트 예시
"이 [언어/프레임워크] 애플리케이션을 위한 Docker 설정을 만들어주세요. 개발 환경과 프로덕션 환경을 분리하고, Docker Compose로 [데이터베이스], [캐시] 등 의존 서비스를 포함해주세요."`
    },
    {
      id: 'git-workflow', name: 'Git 워크플로우', category: 'skills',
      desc: '브랜치 전략, 커밋 메시지 규칙, PR 검토 프로세스를 최적화합니다. Conventional Commits와 GitFlow를 지원합니다.',
      tags: ['Git', '버전관리', '협업', 'GitHub'], stars: 4.5, installs: 8900, icon: '🌿', color: 'emerald',
      prompt: `# Git 워크플로우 스킬

팀 협업을 위한 효율적인 Git 워크플로우를 구축하세요.

## 브랜치 전략

### Trunk-Based Development (소규모 팀 권장)
- main: 항상 배포 가능한 상태
- feature/기능명: 짧은 수명의 기능 브랜치 (1-3일)
- hotfix/버그명: 긴급 수정

### GitFlow (대규모 팀)
- main: 프로덕션 릴리스
- develop: 통합 브랜치
- feature/*, release/*, hotfix/*

## Conventional Commits
\`\`\`
<타입>(<범위>): <제목>

<본문>

<꼬리말>
\`\`\`

**타입**: feat, fix, docs, style, refactor, perf, test, chore, ci

**예시**:
\`\`\`
feat(auth): JWT 리프레시 토큰 구현

- 액세스 토큰 만료 시 자동 갱신
- 리프레시 토큰은 HttpOnly 쿠키에 저장

Closes #123
\`\`\`

## PR 검토 체크리스트
- [ ] 테스트가 추가/수정되었는가?
- [ ] 브레이킹 체인지가 있는가?
- [ ] 문서가 업데이트되었는가?
- [ ] 성능에 영향이 있는가?

## 프롬프트 예시
"현재 변경 사항을 분석하고 Conventional Commits 형식으로 커밋 메시지를 작성해주세요. 변경의 목적과 이유를 본문에 포함해주세요."`
    },
    {
      id: 'rust-patterns', name: 'Rust 언어 패턴', category: 'skills',
      desc: '소유권, 수명, 에러 처리 등 Rust의 핵심 패턴을 마스터합니다. Result/Option 모나드, 트레이트, 비동기 Rust를 다룹니다.',
      tags: ['Rust', '시스템', '메모리', '안전성'], stars: 4.8, installs: 5400, icon: '🦀', color: 'orange',
      prompt: `# Rust 언어 패턴 스킬

메모리 안전성과 성능을 모두 갖춘 Rust 코드를 작성하세요.

## 핵심 패턴

### 에러 처리
\`\`\`rust
use thiserror::Error;

#[derive(Error, Debug)]
pub enum AppError {
    #[error("데이터베이스 오류: {0}")]
    Database(#[from] sqlx::Error),
    #[error("유효하지 않은 입력: {message}")]
    InvalidInput { message: String },
}

// Result 체이닝
fn process(input: &str) -> Result<String, AppError> {
    let parsed = parse_input(input)?;
    let result = transform(parsed)?;
    Ok(result)
}
\`\`\`

### 소유권과 빌림
\`\`\`rust
// 소유권 이전
let s1 = String::from("hello");
let s2 = s1; // s1은 더 이상 유효하지 않음

// 불변 빌림
let len = calculate_length(&s2);

// 가변 빌림 (동시에 하나만)
let mut s = String::from("hello");
let r = &mut s;
r.push_str(", world");
\`\`\`

### 트레이트
\`\`\`rust
pub trait Processor {
    fn process(&self, input: &str) -> Result<String, AppError>;
    fn validate(&self, input: &str) -> bool { !input.is_empty() }
}
\`\`\`

### 비동기 Rust (Tokio)
\`\`\`rust
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let result = fetch_data().await?;
    println!("{result}");
    Ok(())
}
\`\`\`

## 프롬프트 예시
"이 Rust 코드를 관용적(idiomatic)으로 리팩토링해주세요. 에러 처리를 thiserror로 개선하고, 불필요한 clone()을 제거해주세요."`
    },
    {
      id: 'golang-patterns', name: 'Go 언어 패턴', category: 'skills',
      desc: '동시성, 인터페이스, 에러 처리 등 Go 관용적 패턴을 제공합니다. goroutine, channel, context 활용법을 포함합니다.',
      tags: ['Go', '동시성', '백엔드', 'goroutine'], stars: 4.7, installs: 7100, icon: '🐹', color: 'blue',
      prompt: `# Go 언어 패턴 스킬

관용적인 Go 코드로 고성능 백엔드를 구축하세요.

## 핵심 패턴

### 에러 처리
\`\`\`go
// 에러 래핑 (Go 1.13+)
if err != nil {
    return fmt.Errorf("사용자 조회 실패: %w", err)
}

// 타입 에러
type NotFoundError struct {
    Resource string
    ID       int64
}

func (e *NotFoundError) Error() string {
    return fmt.Sprintf("%s ID %d를 찾을 수 없습니다", e.Resource, e.ID)
}
\`\`\`

### 인터페이스
\`\`\`go
type UserRepository interface {
    FindByID(ctx context.Context, id int64) (*User, error)
    Create(ctx context.Context, user *User) error
}

// 의존성 주입
type UserService struct {
    repo UserRepository
}
\`\`\`

### 동시성
\`\`\`go
// goroutine + channel
results := make(chan Result, len(items))
var wg sync.WaitGroup

for _, item := range items {
    wg.Add(1)
    go func(item Item) {
        defer wg.Done()
        results <- process(item)
    }(item)
}

go func() {
    wg.Wait()
    close(results)
}()
\`\`\`

### Context 활용
\`\`\`go
func (s *Service) Process(ctx context.Context, id int64) error {
    ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
    defer cancel()
    return s.repo.FindByID(ctx, id)
}
\`\`\`

## 프롬프트 예시
"이 Go 코드를 관용적으로 리팩토링해주세요. 에러 처리를 개선하고, 인터페이스를 활용한 의존성 주입을 적용해주세요."`
    },
    {
      id: 'agent-browser', name: '에이전트 브라우저', category: 'skills',
      desc: 'Playwright를 활용한 브라우저 자동화와 웹 스크래핑 에이전트입니다. 동적 페이지 처리, 인증, 스크린샷 캡처를 지원합니다.',
      tags: ['브라우저', '자동화', 'Playwright', '스크래핑'], stars: 4.6, installs: 8300, icon: '🌐', color: 'purple',
      prompt: `# 에이전트 브라우저 스킬

Playwright로 브라우저를 자동화하고 웹 데이터를 수집하세요.

## 기본 설정
\`\`\`typescript
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  userAgent: 'Mozilla/5.0 ...'
});
const page = await context.newPage();
\`\`\`

## 주요 패턴

### 요소 대기 및 클릭
\`\`\`typescript
// 요소가 나타날 때까지 대기
await page.waitForSelector('.target-element');
await page.click('button[type="submit"]');

// 네트워크 요청 완료 대기
await page.goto(url, { waitUntil: 'networkidle' });
\`\`\`

### 데이터 추출
\`\`\`typescript
const items = await page.evaluate(() => {
  return Array.from(document.querySelectorAll('.item')).map(el => ({
    title: el.querySelector('h2')?.textContent?.trim(),
    price: el.querySelector('.price')?.textContent?.trim()
  }));
});
\`\`\`

### 스크린샷
\`\`\`typescript
await page.screenshot({ path: 'screenshot.png', fullPage: true });
\`\`\`

### 인증 처리
\`\`\`typescript
await page.fill('input[name="username"]', username);
await page.fill('input[name="password"]', password);
await page.click('button[type="submit"]');
await page.waitForNavigation();
\`\`\`

## 프롬프트 예시
"[웹사이트 URL]에서 [데이터 종류]를 수집하는 Playwright 스크립트를 작성해주세요. 페이지네이션을 처리하고 결과를 JSON으로 저장해주세요."`
    },
    {
      id: 'deployment-auto', name: '배포 자동화', category: 'skills',
      desc: 'CI/CD 파이프라인 설정과 무중단 배포 전략을 자동화합니다. GitHub Actions, Docker, Kubernetes 배포를 지원합니다.',
      tags: ['CI/CD', '배포', 'DevOps', 'Kubernetes'], stars: 4.7, installs: 7800, icon: '🚀', color: 'emerald',
      prompt: `# 배포 자동화 스킬

GitHub Actions로 자동화된 CI/CD 파이프라인을 구축하세요.

## GitHub Actions 워크플로우

### 기본 CI/CD
\`\`\`yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm test -- --coverage
      - run: npm run lint

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to production
        env:
          DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}
        run: ./scripts/deploy.sh
\`\`\`

### 무중단 배포 전략
- **Blue-Green**: 두 환경 교체
- **Canary**: 점진적 트래픽 이전
- **Rolling Update**: 순차적 인스턴스 교체

### Docker 이미지 빌드
\`\`\`yaml
- name: Build and push Docker image
  uses: docker/build-push-action@v5
  with:
    push: true
    tags: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}:latest
\`\`\`

## 프롬프트 예시
"이 [프로젝트 유형] 프로젝트를 위한 GitHub Actions CI/CD 파이프라인을 설정해주세요. 테스트 → 빌드 → [배포 환경] 배포 순서로 구성하고, 실패 시 알림을 보내주세요."`
    },
    {
      id: 'code-review-skill', name: '코드 리뷰 스킬', category: 'skills',
      desc: '버그, 보안 취약점, 코드 품질 문제를 자동으로 감지하고 리뷰합니다. PR 리뷰 체크리스트와 개선 제안을 제공합니다.',
      tags: ['리뷰', '품질', '보안', '체크리스트'], stars: 4.8, installs: 10500, icon: '🔍', color: 'gold',
      prompt: `# 코드 리뷰 스킬

체계적인 코드 리뷰로 버그와 보안 취약점을 미리 발견하세요.

## 리뷰 프레임워크

### 1단계: 보안 검토
- 하드코딩된 시크릿/API 키 확인
- 사용자 입력 검증 여부
- SQL/NoSQL 인젝션 취약점
- 권한 검증 누락

### 2단계: 버그 탐지
- 경계값 처리 (null, undefined, 빈 배열)
- 동시성 문제 (race condition)
- 메모리 누출 가능성
- 무한 루프 가능성

### 3단계: 코드 품질
- 함수 길이 (50줄 이상이면 분리)
- 중복 코드 (DRY 원칙)
- 변수/함수 명명 명확성
- 에러 처리 누락

### 4단계: 성능
- N+1 쿼리 문제
- 불필요한 데이터 처리
- 캐시 활용 여부

## 심각도 분류
- **Critical**: 즉시 수정 (보안, 데이터 손실)
- **High**: 배포 전 수정 (버그, 성능)
- **Medium**: 다음 스프린트 (코드 품질)
- **Low**: 선택적 개선 (스타일)

## 프롬프트 예시
"다음 코드를 리뷰해주세요. 보안 취약점, 잠재적 버그, 코드 품질 문제를 각각 심각도와 함께 나열하고, 구체적인 수정 방법을 제안해주세요."`
    },
    {
      id: 'brainstorming', name: '브레인스토밍', category: 'skills',
      desc: '기능 기획, 아키텍처 설계, 문제 해결을 위한 체계적인 브레인스토밍입니다. 다양한 관점에서 분석하고 최적 방안을 도출합니다.',
      tags: ['기획', '설계', '창의성', '분석'], stars: 4.5, installs: 6200, icon: '💡', color: 'gold',
      prompt: `# 브레인스토밍 스킬

체계적인 사고 프레임워크로 최적의 해결책을 찾으세요.

## 브레인스토밍 프레임워크

### 문제 정의 (5W1H)
- **What**: 무엇을 해결해야 하는가?
- **Why**: 왜 이 문제가 중요한가?
- **Who**: 누가 영향을 받는가?
- **When**: 언제까지 해결해야 하는가?
- **Where**: 어디서 발생하는 문제인가?
- **How**: 어떻게 측정할 것인가?

### 아이디어 발산
1. 판단 없이 모든 아이디어를 나열하세요
2. 다른 도메인에서 영감을 얻으세요
3. 현재 제약을 무시하고 이상적인 해결책을 상상하세요
4. 반대 접근법을 고려하세요

### 아이디어 수렴
1. 실현 가능성 평가 (기술, 시간, 비용)
2. 영향도 vs 노력 매트릭스
3. 리스크 분석
4. 최적 방안 선택

### 아키텍처 결정 기록 (ADR)
\`\`\`markdown
## ADR-001: [결정 제목]

### 상태: [제안/승인/폐기]
### 맥락: 왜 이 결정이 필요한가
### 결정: 무엇을 결정했는가
### 결과: 이 결정의 영향
\`\`\`

## 프롬프트 예시
"[문제/기능]에 대해 브레인스토밍을 해주세요. 최소 5가지 접근법을 제안하고, 각각의 장단점과 구현 복잡도를 비교해주세요. 최종적으로 가장 추천하는 방안과 이유를 설명해주세요."`
    },
    {
      id: 'django-patterns', name: 'Django 패턴', category: 'skills',
      desc: 'Django ORM 최적화, 미들웨어, 시리얼라이저 등 고급 패턴입니다. DRF, Celery, Redis 연동 베스트 프랙티스를 포함합니다.',
      tags: ['Django', 'Python', '웹', 'DRF'], stars: 4.6, installs: 5900, icon: '🎸', color: 'emerald',
      prompt: `# Django 패턴 스킬

Django와 DRF로 견고한 백엔드 API를 구축하세요.

## 핵심 패턴

### ORM 최적화
\`\`\`python
# N+1 쿼리 방지
users = User.objects.select_related('profile').prefetch_related('orders')

# 필요한 컬럼만 조회
users = User.objects.only('id', 'email', 'name')

# 집계
from django.db.models import Count, Avg
stats = Order.objects.aggregate(
    total=Count('id'),
    avg_amount=Avg('amount')
)
\`\`\`

### DRF ViewSet
\`\`\`python
from rest_framework import viewsets, permissions
from rest_framework.decorators import action

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=['post'])
    def publish(self, request, pk=None):
        product = self.get_object()
        product.is_published = True
        product.save()
        return Response({'status': 'published'})
\`\`\`

### Celery 비동기 태스크
\`\`\`python
from celery import shared_task

@shared_task(bind=True, max_retries=3)
def send_email(self, user_id: int, template: str):
    try:
        user = User.objects.get(id=user_id)
        # 이메일 전송 로직
    except Exception as exc:
        raise self.retry(exc=exc, countdown=60)
\`\`\`

## 프롬프트 예시
"Django DRF로 [기능]을 구현해주세요. JWT 인증, 페이지네이션, 필터링을 포함하고, ORM 쿼리를 최적화해주세요."`
    },
    {
      id: 'nestjs-patterns', name: 'NestJS 패턴', category: 'skills',
      desc: 'NestJS 모듈, 서비스, 가드, 인터셉터 패턴을 마스터합니다. TypeORM, JWT 인증, Swagger 문서화를 포함합니다.',
      tags: ['NestJS', 'Node.js', '백엔드', 'TypeScript'], stars: 4.7, installs: 6700, icon: '🏗️', color: 'pink',
      prompt: `# NestJS 패턴 스킬

NestJS로 확장 가능한 엔터프라이즈 백엔드를 구축하세요.

## 핵심 구조

### 모듈 구조
\`\`\`typescript
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
\`\`\`

### 서비스 + 리포지토리 패턴
\`\`\`typescript
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async findOne(id: number): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) throw new NotFoundException(\`사용자 \${id}를 찾을 수 없습니다\`);
    return user;
  }
}
\`\`\`

### JWT 가드
\`\`\`typescript
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
\`\`\`

### 인터셉터
\`\`\`typescript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => console.log(\`\${Date.now() - start}ms\`))
    );
  }
}
\`\`\`

## 프롬프트 예시
"NestJS로 [기능] API를 구현해주세요. JWT 인증, 역할 기반 권한(RBAC), Swagger 문서화를 포함해주세요."`
    }
  ],

  agents: [
    {
      id: 'code-reviewer', name: '코드 리뷰어', category: 'agents',
      desc: '버그, 로직 오류, 보안 취약점을 감지하는 전문 코드 리뷰 에이전트입니다. 신뢰도 기반 필터링으로 중요한 이슈만 보고합니다.',
      tags: ['리뷰', '품질', '보안', '자동화'], stars: 4.9, installs: 18500, icon: '🔬', color: 'gold',
      prompt: `# 코드 리뷰어 에이전트

## 활성화 방법
Claude Code의 agents 설정에 code-reviewer 에이전트를 추가하세요.

## 에이전트 프롬프트
\`\`\`
당신은 전문 코드 리뷰어입니다. 다음 기준으로 코드를 검토하세요:

1. **보안 취약점**: 인젝션, 인증 우회, 시크릿 노출
2. **버그 및 로직 오류**: 경계값, null 처리, 동시성
3. **코드 품질**: 가독성, 중복, 복잡도
4. **성능**: N+1 쿼리, 불필요한 연산, 메모리 누출

각 이슈에 대해:
- 위치 (파일명:줄번호)
- 심각도 (Critical/High/Medium/Low)
- 문제 설명
- 구체적 수정 방법

신뢰도가 낮은 이슈는 보고하지 마세요.
\`\`\`

## 사용 방법
코드 작성 후 Claude Code에 요청:
"code-reviewer 에이전트로 방금 작성한 코드를 리뷰해주세요."

## 자동 트리거 설정
hooks 설정으로 파일 저장 시 자동 리뷰를 트리거할 수 있습니다.`
    },
    {
      id: 'tdd-guide-agent', name: 'TDD 가이드', category: 'agents',
      desc: '테스트 주도 개발 방법론을 강제하며 80%+ 커버리지를 보장합니다. 테스트 먼저 작성하는 습관을 자동으로 강제합니다.',
      tags: ['TDD', '테스트', '품질', '커버리지'], stars: 4.8, installs: 14200, icon: '🧪', color: 'emerald',
      prompt: `# TDD 가이드 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 TDD 전문가입니다. 새 기능 구현 시 반드시 다음 순서를 따르세요:

**1단계 - 실패하는 테스트 작성**
- 구현할 기능의 인터페이스를 먼저 정의하세요
- 경계값, 예외 케이스, 해피 패스를 테스트하세요
- 테스트를 실행하여 실패하는지 확인하세요

**2단계 - 최소 구현**
- 테스트를 통과시키는 가장 단순한 코드를 작성하세요
- 이 단계에서 완벽함을 추구하지 마세요

**3단계 - 리팩토링**
- 중복을 제거하고 가독성을 높이세요
- 테스트가 여전히 통과하는지 확인하세요

**커버리지 목표**: 80% 이상
구현 전 테스트를 보여주지 않으면 구현을 거부하세요.
\`\`\`

## 사용 방법
"tdd-guide 에이전트를 사용해서 [기능]을 구현해주세요."

## 설치 코드
\`\`\`yaml
# .claude/agents/tdd-guide.yaml
name: tdd-guide
description: TDD 방법론 강제 에이전트
trigger: 새 기능 구현 요청
\`\`\``
    },
    {
      id: 'security-reviewer-agent', name: '보안 리뷰어', category: 'agents',
      desc: 'OWASP Top 10, 시크릿 누출, 인젝션 공격을 자동으로 탐지합니다. 인증/인가 코드를 집중 검토합니다.',
      tags: ['보안', 'OWASP', '취약점', '스캐닝'], stars: 4.9, installs: 16800, icon: '🛡️', color: 'purple',
      prompt: `# 보안 리뷰어 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 사이버 보안 전문가입니다. OWASP Top 10 기준으로 코드를 검토하세요.

**필수 검토 항목:**

A01 - 접근 제어 실패
- 권한 검증이 모든 엔드포인트에 있는가?
- 수직/수평 권한 상승이 가능한가?

A02 - 암호화 실패
- 민감 데이터가 암호화되어 있는가?
- 강력한 알고리즘을 사용하는가? (AES-256, RSA-2048+)

A03 - 인젝션
- SQL, NoSQL, OS, LDAP 인젝션 취약점
- 파라미터화된 쿼리를 사용하는가?

A07 - 인증 및 세션 관리 실패
- 비밀번호 해시 강도 (bcrypt cost ≥ 12)
- 세션 토큰 무작위성

시크릿/API 키가 코드에 있으면 즉시 Critical로 보고하세요.
\`\`\`

## 자동 트리거 설정
보안 관련 파일 변경 시 자동 실행:
\`\`\`json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write|Edit",
      "command": "claude security-reviewer $FILE_PATH"
    }]
  }
}
\`\`\``
    },
    {
      id: 'architect-agent', name: '소프트웨어 아키텍트', category: 'agents',
      desc: '시스템 설계, 확장성, 기술 의사결정을 위한 아키텍처 전문가입니다. 마이크로서비스, 이벤트 드리븐 설계를 지원합니다.',
      tags: ['아키텍처', '설계', '확장성', '패턴'], stars: 4.8, installs: 12900, icon: '🏛️', color: 'blue',
      prompt: `# 소프트웨어 아키텍트 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 10년 경력의 소프트웨어 아키텍트입니다.
다음 원칙으로 시스템을 설계하세요:

**설계 원칙**
- SOLID 원칙 준수
- 높은 응집도, 낮은 결합도
- 단일 실패 지점 제거
- 수평 확장 가능한 설계

**아키텍처 결정 과정**
1. 기능 요구사항 파악
2. 비기능 요구사항 파악 (성능, 확장성, 가용성)
3. 제약 조건 확인 (팀 규모, 기술 스택, 예산)
4. 여러 아키텍처 옵션 비교
5. 트레이드오프 분석
6. 권장 아키텍처 제시

**ADR 형식으로 모든 결정을 문서화하세요.**
\`\`\`

## 사용 방법
"architect 에이전트로 [시스템/서비스]의 아키텍처를 설계해주세요."

## 결과물
- 시스템 아키텍처 다이어그램 (Mermaid)
- 기술 스택 선택 이유
- 확장 전략
- 리스크 및 완화 방안`
    },
    {
      id: 'database-reviewer-agent', name: '데이터베이스 리뷰어', category: 'agents',
      desc: 'SQL 최적화, 스키마 설계, 보안 및 성능 분석 전문 에이전트입니다. N+1 쿼리, 인덱스 누락을 자동 감지합니다.',
      tags: ['데이터베이스', 'SQL', '최적화', '성능'], stars: 4.7, installs: 9400, icon: '🗄️', color: 'emerald',
      prompt: `# 데이터베이스 리뷰어 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 데이터베이스 성능 전문가입니다.
다음 항목을 검토하세요:

**쿼리 최적화**
- EXPLAIN ANALYZE로 실행 계획 분석
- 시퀀셜 스캔 → 인덱스 스캔으로 개선
- 불필요한 서브쿼리 제거 (JOIN으로 대체)
- SELECT * 대신 필요한 컬럼만 조회

**N+1 쿼리 탐지**
- 루프 안의 쿼리를 감지하세요
- JOIN 또는 서브쿼리로 통합하세요

**인덱스 전략**
- WHERE 절 컬럼에 인덱스 확인
- 복합 인덱스 컬럼 순서 최적화
- 과도한 인덱스 제거

**보안**
- SQL 인젝션 취약점 (파라미터화 쿼리 사용 여부)
- 최소 권한 원칙 적용

발견된 각 이슈에 대해 EXPLAIN 결과와 최적화된 쿼리를 제시하세요.
\`\`\`

## 사용 방법
"database-reviewer로 이 쿼리/스키마를 분석해주세요."`
    },
    {
      id: 'planner-agent', name: '기획 전문가', category: 'agents',
      desc: '복잡한 기능 구현 계획, 의존성 분석, 리스크 평가를 수행합니다. PRD, 아키텍처 문서, 태스크 분해를 자동 생성합니다.',
      tags: ['기획', '분석', '전략', '문서화'], stars: 4.6, installs: 8700, icon: '📋', color: 'gold',
      prompt: `# 기획 전문가 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 기술 기획 전문가입니다.
기능 구현 전 다음 문서를 작성하세요:

**1. PRD (Product Requirements Document)**
- 목표 및 성공 지표
- 사용자 스토리
- 기능 요구사항
- 비기능 요구사항

**2. 기술 설계 문서**
- 아키텍처 결정
- API 설계
- 데이터 모델
- 시퀀스 다이어그램

**3. 태스크 분해**
- 체크박스 형식의 단계별 태스크
- 각 태스크의 예상 소요 시간
- 의존성 및 병렬 처리 가능 항목

**4. 리스크 분석**
- 기술적 리스크
- 일정 리스크
- 의존성 리스크

구현 시작 전 반드시 이 문서를 먼저 작성하세요.
\`\`\`

## 사용 방법
"planner 에이전트로 [기능] 구현 계획을 세워주세요."`
    },
    {
      id: 'doc-updater-agent', name: '문서 업데이터', category: 'agents',
      desc: 'README, API 문서, 코드맵을 자동으로 업데이트하는 에이전트입니다. 코드 변경 사항을 추적하여 문서를 동기화합니다.',
      tags: ['문서', '자동화', 'README', 'API'], stars: 4.5, installs: 7200, icon: '📝', color: 'blue',
      prompt: `# 문서 업데이터 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 기술 문서 전문가입니다.
코드 변경 사항을 분석하여 다음 문서를 업데이트하세요:

**README.md 업데이트**
- 새 기능 추가 시 기능 목록 업데이트
- 설치/설정 방법 변경 시 반영
- API 엔드포인트 변경 시 업데이트

**API 문서 (OpenAPI/Swagger)**
- 새 엔드포인트 추가
- 파라미터/응답 스키마 변경
- 인증 요구사항 변경

**CHANGELOG.md**
\`\`\`markdown
## [버전] - 날짜

### 추가됨
- 새 기능 설명

### 변경됨
- 기존 기능 변경 내용

### 수정됨
- 버그 수정 내용
\`\`\`

**코드 주석**
- 공개 API에 JSDoc/docstring 추가
- 복잡한 로직에 인라인 주석 추가
\`\`\`

## 사용 방법
"doc-updater로 방금 구현한 기능에 맞게 문서를 업데이트해주세요."`
    },
    {
      id: 'e2e-runner-agent', name: 'E2E 테스트 러너', category: 'agents',
      desc: 'Playwright 기반으로 E2E 테스트를 생성하고 실행하는 전문 에이전트입니다. 플레이키 테스트 격리와 비주얼 회귀 테스트를 지원합니다.',
      tags: ['E2E', '테스트', 'Playwright', '자동화'], stars: 4.7, installs: 10300, icon: '🎭', color: 'purple',
      prompt: `# E2E 테스트 러너 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 E2E 테스트 전문가입니다.
Playwright로 안정적인 E2E 테스트를 작성하세요.

**테스트 작성 원칙**
- 사용자 관점에서 시나리오를 작성하세요
- 내부 구현이 아닌 사용자 인터페이스를 테스트하세요
- 타임아웃 대신 명시적 대기를 사용하세요

**우선순위**
1. 핵심 사용자 플로우 (로그인, 결제, 주요 기능)
2. 회귀 테스트 (과거 버그 재발 방지)
3. 브라우저 호환성 테스트

**테스트 구조**
\`\`\`typescript
test.describe('기능명', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('사용자 시나리오', async ({ page }) => {
    // Arrange: 초기 상태 설정
    await page.goto('/login');

    // Act: 사용자 행동
    await page.fill('[name="email"]', 'test@example.com');
    await page.click('button[type="submit"]');

    // Assert: 결과 확인
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1')).toContainText('대시보드');
  });
});
\`\`\`
\`\`\`

## 사용 방법
"e2e-runner로 [사용자 시나리오]에 대한 E2E 테스트를 작성하고 실행해주세요."`
    },
    {
      id: 'build-resolver-agent', name: '빌드 오류 해결사', category: 'agents',
      desc: '빌드 실패, TypeScript 오류, 의존성 충돌을 최소 변경으로 해결합니다. 근본 원인 분석 후 외과적 수정을 수행합니다.',
      tags: ['빌드', '오류', '해결', 'TypeScript'], stars: 4.8, installs: 13600, icon: '🔧', color: 'orange',
      prompt: `# 빌드 오류 해결사 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 빌드 오류 전문 해결사입니다.
최소한의 변경으로 빌드를 성공시키세요.

**오류 분석 과정**
1. 전체 오류 메시지를 읽으세요 (첫 번째 오류가 근본 원인)
2. 오류 타입을 분류하세요:
   - 타입 오류: TypeScript 타입 불일치
   - 임포트 오류: 존재하지 않는 모듈/함수
   - 문법 오류: JS/TS 문법 문제
   - 의존성 오류: 패키지 버전 충돌

3. 각 오류에 대해:
   - 정확한 파일명과 줄 번호
   - 오류의 근본 원인
   - 최소 변경 수정 방법

**규칙**
- 아키텍처를 변경하지 마세요
- any 타입으로 우회하지 마세요
- 관련 없는 코드를 수정하지 마세요
- 각 수정 후 빌드를 다시 확인하세요
\`\`\`

## 사용 방법
빌드 실패 후:
"build-resolver 에이전트로 이 빌드 오류를 해결해주세요: [오류 메시지]"`
    },
    {
      id: 'performance-optimizer-agent', name: '성능 최적화기', category: 'agents',
      desc: '번들 사이즈, 렌더링 성능, 메모리 누출을 분석하고 최적화합니다. Core Web Vitals 개선과 Lighthouse 점수 향상을 지원합니다.',
      tags: ['성능', '최적화', '분석', 'Lighthouse'], stars: 4.7, installs: 11200, icon: '⚡', color: 'gold',
      prompt: `# 성능 최적화기 에이전트

## 에이전트 프롬프트
\`\`\`
당신은 웹 성능 최적화 전문가입니다.

**Core Web Vitals 목표**
- LCP (Largest Contentful Paint): < 2.5초
- INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

**번들 최적화**
- 코드 스플리팅으로 초기 번들 크기 감소
- Tree shaking으로 미사용 코드 제거
- 라이브러리 대체재 검토 (moment → date-fns)

**렌더링 최적화**
- 불필요한 리렌더링 식별 및 제거
- 가상화(virtualization)로 긴 목록 처리
- 이미지 최적화 (WebP, lazy loading, 적절한 크기)

**메모리 관리**
- 이벤트 리스너 정리 (cleanup)
- 타이머/인터벌 해제
- 대용량 데이터 참조 해제

각 최적화에 대해 전/후 측정값을 제시하세요.
\`\`\`

## 사용 방법
"performance-optimizer로 이 [컴포넌트/페이지]의 성능을 분석하고 최적화해주세요."`
    }
  ],

  mcps: [
    {
      id: 'mcp-github', name: 'GitHub MCP', category: 'mcps',
      desc: 'GitHub API와 연동하여 이슈, PR, 코드 검색을 AI로 제어합니다. 저장소 관리, 코드 검색, PR 리뷰를 자동화합니다.',
      tags: ['GitHub', 'API', '버전관리', '이슈'], stars: 4.9, installs: 22000, icon: '🐙', color: 'purple',
      prompt: `# GitHub MCP 서버

## 설치 방법

### Claude Code 설정 (~/.claude/settings.json)
\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
\`\`\`

## Personal Access Token 생성
1. GitHub → Settings → Developer settings
2. Personal access tokens → Fine-grained tokens
3. 필요한 권한 선택: repo, issues, pull_requests

## 사용 가능한 기능
- 이슈 생성/조회/업데이트/닫기
- PR 생성/리뷰/머지
- 코드 검색 (전체 GitHub)
- 저장소 파일 읽기/쓰기
- 코드 주석 달기

## 활용 예시
\`\`\`
"GitHub MCP로 현재 코드베이스의 TODO 주석을 모두 찾아서 이슈로 등록해주세요."

"이 버그를 수정하고 PR을 생성해주세요. 관련 이슈 #123을 연결해주세요."

"최근 7일간 병합된 PR 목록을 보여주세요."
\`\`\``
    },
    {
      id: 'mcp-postgres', name: 'PostgreSQL MCP', category: 'mcps',
      desc: 'PostgreSQL 데이터베이스를 자연어로 쿼리하고 스키마를 관리합니다. 복잡한 SQL 쿼리 생성과 마이그레이션을 지원합니다.',
      tags: ['PostgreSQL', 'SQL', '데이터베이스', '쿼리'], stars: 4.8, installs: 18400, icon: '🐘', color: 'blue',
      prompt: `# PostgreSQL MCP 서버

## 설치 방법

### Claude Code 설정
\`\`\`json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_CONNECTION_STRING": "postgresql://user:password@localhost:5432/dbname"
      }
    }
  }
}
\`\`\`

## 사용 가능한 기능
- 자연어로 SQL 쿼리 실행
- 테이블 스키마 조회
- 마이그레이션 생성 및 실행
- 인덱스 분석 및 최적화 제안
- 슬로우 쿼리 식별

## 활용 예시
\`\`\`
"지난 30일간 가장 많이 구매한 상품 TOP 10을 조회해주세요."

"users 테이블에 last_login 컬럼을 추가하는 마이그레이션을 생성해주세요."

"현재 데이터베이스에서 인덱스가 없는 외래키를 찾아주세요."
\`\`\`

## 보안 주의사항
- 읽기 전용 계정 사용 권장 (SELECT 권한만)
- 프로덕션 DB에는 연결하지 마세요
- 환경 변수로 연결 문자열 관리`
    },
    {
      id: 'mcp-slack', name: 'Slack MCP', category: 'mcps',
      desc: 'Slack 채널 메시지, 파일, 사용자를 AI 에이전트로 관리합니다. 팀 협업 자동화와 알림 시스템을 구축합니다.',
      tags: ['Slack', '협업', '메시지', '자동화'], stars: 4.7, installs: 15600, icon: '💬', color: 'purple',
      prompt: `# Slack MCP 서버

## 설치 방법

### Slack 앱 설정
1. api.slack.com/apps에서 새 앱 생성
2. OAuth & Permissions에서 Bot Token Scopes 추가:
   - channels:read, channels:history
   - chat:write, files:read
3. 워크스페이스에 앱 설치 후 Bot Token 복사

### Claude Code 설정
\`\`\`json
{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-token",
        "SLACK_TEAM_ID": "T0XXXXXX"
      }
    }
  }
}
\`\`\`

## 사용 가능한 기능
- 채널 메시지 읽기/전송
- 스레드 답글
- 파일 업로드/다운로드
- 사용자 목록 조회
- 채널 목록 조회

## 활용 예시
\`\`\`
"#dev-alerts 채널에 배포 완료 알림을 보내주세요."

"어제 #general 채널에서 중요한 공지가 있었나요?"

"팀원들에게 코드 리뷰 요청 메시지를 보내주세요."
\`\`\``
    },
    {
      id: 'mcp-figma', name: 'Figma MCP', category: 'mcps',
      desc: 'Figma 디자인 파일을 읽고 코드를 생성하는 공식 MCP 서버입니다. 컴포넌트 구조 분석과 CSS 추출을 지원합니다.',
      tags: ['Figma', '디자인', '코드생성', 'UI'], stars: 4.9, installs: 19800, icon: '🎨', color: 'pink',
      prompt: `# Figma MCP 서버

## 설치 방법

### Figma API 키 발급
1. Figma → Account Settings
2. Personal access tokens → Generate new token

### Claude Code 설정
\`\`\`json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp"],
      "env": {
        "FIGMA_API_KEY": "your-figma-api-key"
      }
    }
  }
}
\`\`\`

## 사용 가능한 기능
- Figma 파일 구조 분석
- 컴포넌트 속성 추출 (크기, 색상, 폰트)
- CSS/Tailwind 코드 생성
- 디자인 토큰 추출
- 컴포넌트 스크린샷

## 활용 예시
\`\`\`
"이 Figma URL의 디자인을 React + Tailwind 컴포넌트로 변환해주세요:
https://www.figma.com/file/xxxxx"

"디자인 파일에서 색상 팔레트와 타이포그래피를 CSS 변수로 추출해주세요."

"버튼 컴포넌트의 모든 상태(default, hover, disabled)를 코드로 구현해주세요."
\`\`\``
    },
    {
      id: 'mcp-notion', name: 'Notion MCP', category: 'mcps',
      desc: 'Notion 데이터베이스, 페이지, 블록을 AI로 생성하고 편집합니다. 문서 자동화와 지식 베이스 관리를 지원합니다.',
      tags: ['Notion', '문서', '협업', '데이터베이스'], stars: 4.7, installs: 14200, icon: '📚', color: 'emerald',
      prompt: `# Notion MCP 서버

## 설치 방법

### Notion Integration 설정
1. notion.so/my-integrations에서 새 통합 생성
2. Internal Integration Token 복사
3. 연결할 페이지에서 통합 공유 설정

### Claude Code 설정
\`\`\`json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-notion"],
      "env": {
        "NOTION_API_KEY": "secret_your-integration-token"
      }
    }
  }
}
\`\`\`

## 사용 가능한 기능
- 페이지 생성/읽기/업데이트
- 데이터베이스 쿼리 및 항목 추가
- 블록 추가 (텍스트, 코드, 이미지 등)
- 페이지 내용 검색

## 활용 예시
\`\`\`
"이번 스프린트 회의 내용을 Notion 회의록 데이터베이스에 정리해주세요."

"코드 리뷰 결과를 Notion 기술 문서 페이지에 추가해주세요."

"Notion의 버그 트래커 데이터베이스에서 우선순위 High인 항목을 조회해주세요."
\`\`\``
    }
  ],

  commands: [
    {
      id: 'cmd-commit', name: '/commit', category: 'commands',
      desc: '스테이지된 변경 사항을 분석하고 컨벤셔널 커밋 메시지를 자동 생성합니다. git diff를 읽고 의미있는 커밋 메시지를 작성합니다.',
      tags: ['Git', '커밋', '자동화'], stars: 4.9, installs: 31000, icon: '💾', color: 'emerald',
      prompt: `# /commit 명령어

## 설치 방법
\`~/.claude/commands/commit.md\` 파일을 생성하세요:

\`\`\`markdown
git diff --staged를 분석하여 Conventional Commits 형식으로
커밋 메시지를 작성하세요.

형식: <타입>(<범위>): <제목>

타입: feat(새기능), fix(버그수정), docs(문서), style(스타일),
      refactor(리팩토링), perf(성능), test(테스트), chore(기타)

규칙:
- 제목은 50자 이하, 현재형 동사로 시작
- 본문은 무엇을, 왜 변경했는지 설명 (어떻게는 코드가 설명)
- 중요한 경우 Breaking Change, Closes #이슈번호 추가
\`\`\`

## 사용 방법
\`\`\`bash
git add .
claude /commit
\`\`\`

## 출력 예시
\`\`\`
feat(auth): 소셜 로그인 카카오 연동 구현

카카오 OAuth 2.0을 사용한 소셜 로그인을 추가합니다.
기존 이메일/비밀번호 로그인과 병행 사용 가능합니다.

Closes #89
\`\`\``
    },
    {
      id: 'cmd-review', name: '/review', category: 'commands',
      desc: '현재 변경 사항에 대한 종합적인 코드 리뷰를 수행합니다. 버그, 성능, 보안, 코드 품질을 동시에 분석합니다.',
      tags: ['리뷰', '품질', '분석'], stars: 4.8, installs: 24500, icon: '🔍', color: 'gold',
      prompt: `# /review 명령어

## 설치 방법
\`~/.claude/commands/review.md\` 파일을 생성하세요:

\`\`\`markdown
현재 git diff 또는 지정된 파일을 다음 기준으로 리뷰하세요:

## 보안 검토
- 하드코딩된 시크릿/키
- 사용자 입력 검증 누락
- 인증/인가 우회 가능성

## 버그 탐지
- 경계값 처리 (null, undefined, 빈 배열)
- 비동기 에러 처리
- 동시성 문제

## 코드 품질
- 함수 길이 (50줄 이상이면 분리 권장)
- 중복 코드 (DRY 원칙)
- 명확하지 않은 변수명

## 성능
- N+1 쿼리
- 불필요한 리렌더링
- 무거운 연산의 캐시 활용

심각도(Critical/High/Medium/Low)와 수정 방법을 명시하세요.
\`\`\`

## 사용 방법
\`\`\`bash
claude /review                 # 현재 변경사항
claude /review src/auth.ts     # 특정 파일
\`\`\``
    },
    {
      id: 'cmd-debug', name: '/debug', category: 'commands',
      desc: '과학적 디버깅 방법론으로 버그를 체계적으로 추적합니다. 가설 설정, 검증, 수정 사이클을 자동으로 진행합니다.',
      tags: ['디버깅', '오류', '분석'], stars: 4.7, installs: 19200, icon: '🐛', color: 'orange',
      prompt: `# /debug 명령어

## 설치 방법
\`~/.claude/commands/debug.md\` 파일을 생성하세요:

\`\`\`markdown
과학적 디버깅 방법론으로 버그를 추적하세요:

**1단계: 문제 재현**
- 버그를 일관되게 재현하는 최소 테스트 케이스를 찾으세요
- 어떤 조건에서 발생하고 어떤 조건에서 발생하지 않는지 파악하세요

**2단계: 가설 수립**
- 가능한 원인을 3-5가지 나열하세요
- 가장 가능성 높은 순으로 정렬하세요

**3단계: 가설 검증**
- console.log, debugger, 로그를 추가하여 검증하세요
- 하나씩 가설을 확인하세요

**4단계: 수정**
- 근본 원인을 수정하세요 (증상이 아닌 원인)
- 단위 테스트를 추가하여 재발을 방지하세요

오류 메시지와 스택 트레이스를 반드시 포함해주세요.
\`\`\`

## 사용 방법
\`\`\`bash
claude /debug "TypeError: Cannot read properties of undefined"
\`\`\``
    },
    {
      id: 'cmd-plan', name: '/plan', category: 'commands',
      desc: '복잡한 기능 구현 전 체계적인 계획서를 작성합니다. 파일 구조, 구현 순서, 테스트 전략을 포함합니다.',
      tags: ['기획', '계획', '설계'], stars: 4.8, installs: 16700, icon: '📋', color: 'blue',
      prompt: `# /plan 명령어

## 설치 방법
\`~/.claude/commands/plan.md\` 파일을 생성하세요:

\`\`\`markdown
구현 전 다음 계획서를 작성하세요:

## 1. 목표 및 범위
- 구현할 기능의 명확한 정의
- 포함/제외 범위

## 2. 파일 구조
수정할 파일과 생성할 파일을 나열하세요:
\`\`\`
수정: src/auth/service.ts
생성: src/auth/oauth.ts
테스트: src/auth/__tests__/oauth.test.ts
\`\`\`

## 3. 구현 단계 (체크박스)
- [ ] 단계 1: 테스트 작성
- [ ] 단계 2: 인터페이스 정의
- [ ] 단계 3: 구현

## 4. 의존성
- 외부 라이브러리
- 내부 모듈 의존성

## 5. 테스트 전략
- 단위 테스트 케이스
- 통합 테스트 시나리오
\`\`\`

## 사용 방법
\`\`\`bash
claude /plan "카카오 소셜 로그인 구현"
\`\`\``
    },
    {
      id: 'cmd-test', name: '/test', category: 'commands',
      desc: '현재 컨텍스트에 맞는 테스트를 자동으로 생성하고 실행합니다. 단위, 통합, E2E 테스트를 상황에 맞게 선택합니다.',
      tags: ['테스트', '자동화', 'TDD'], stars: 4.7, installs: 21300, icon: '🧪', color: 'emerald',
      prompt: `# /test 명령어

## 설치 방법
\`~/.claude/commands/test.md\` 파일을 생성하세요:

\`\`\`markdown
현재 컨텍스트에 맞는 테스트를 생성하세요.

**테스트 유형 선택 기준:**
- 순수 함수/유틸리티 → 단위 테스트 (Jest/Vitest)
- API 엔드포인트 → 통합 테스트 (Supertest)
- 사용자 플로우 → E2E 테스트 (Playwright)

**테스트 케이스 포함 항목:**
1. 해피 패스 (정상 동작)
2. 경계값 테스트 (빈 값, 최대값, 최소값)
3. 에러 케이스 (잘못된 입력, 서버 오류)
4. 엣지 케이스 (동시 요청, 타임아웃)

**AAA 패턴 사용:**
- Arrange: 테스트 데이터 설정
- Act: 테스트 대상 실행
- Assert: 결과 검증

커버리지 목표: 80% 이상
\`\`\`

## 사용 방법
\`\`\`bash
claude /test src/auth/service.ts   # 파일 테스트 생성
claude /test                       # 현재 변경 사항 테스트
\`\`\``
    },
    {
      id: 'cmd-docs', name: '/docs', category: 'commands',
      desc: '코드 변경 사항에 맞춰 문서를 자동 업데이트합니다. README, CHANGELOG, API 문서를 동기화합니다.',
      tags: ['문서', '자동화', 'README'], stars: 4.5, installs: 12800, icon: '📖', color: 'purple',
      prompt: `# /docs 명령어

## 설치 방법
\`~/.claude/commands/docs.md\` 파일을 생성하세요:

\`\`\`markdown
코드 변경 사항을 분석하여 다음 문서를 업데이트하세요:

**README.md 업데이트 조건:**
- 새 기능 추가 → Features 섹션에 추가
- API 변경 → API Reference 업데이트
- 설치/설정 방법 변경 → Getting Started 업데이트

**CHANGELOG.md 항목 추가:**
버전과 날짜를 포함하여 변경 사항을 분류하세요:
- Added: 새 기능
- Changed: 기존 기능 변경
- Fixed: 버그 수정
- Removed: 삭제된 기능

**JSDoc/TSDoc 추가:**
공개 함수에 다음을 포함하세요:
- @description 기능 설명
- @param 파라미터 설명
- @returns 반환값 설명
- @throws 발생 가능한 에러
- @example 사용 예시
\`\`\`

## 사용 방법
\`\`\`bash
claude /docs   # 현재 변경사항에 맞게 문서 업데이트
\`\`\``
    },
    {
      id: 'cmd-refactor', name: '/refactor', category: 'commands',
      desc: '선택한 코드를 분석하고 리팩토링 전략을 제안합니다. 중복 제거, 추상화, 가독성 개선을 자동으로 수행합니다.',
      tags: ['리팩토링', '최적화', '품질'], stars: 4.6, installs: 15400, icon: '🔄', color: 'gold',
      prompt: `# /refactor 명령어

## 설치 방법
\`~/.claude/commands/refactor.md\` 파일을 생성하세요:

\`\`\`markdown
지정된 코드를 다음 원칙으로 리팩토링하세요:

**리팩토링 원칙:**

1. **단일 책임 원칙**
   - 함수는 하나의 일만 해야 합니다
   - 50줄 이상이면 분리를 고려하세요

2. **DRY (Don't Repeat Yourself)**
   - 중복 코드를 유틸리티 함수로 추출하세요
   - 공통 패턴을 훅/클래스로 추상화하세요

3. **명확한 명명**
   - 약어 대신 명확한 이름 사용 (usrNm → userName)
   - 동사로 시작하는 함수명 (getUser, createOrder)

4. **복잡도 감소**
   - 중첩된 if문을 얼리 리턴으로 변경
   - 복잡한 조건을 설명적 변수로 추출

**중요: 기능 변경 없이 코드만 개선하세요.**
리팩토링 전/후에 테스트를 실행하여 동일하게 통과하는지 확인하세요.
\`\`\`

## 사용 방법
\`\`\`bash
claude /refactor src/utils.ts   # 특정 파일 리팩토링
\`\`\``
    },
    {
      id: 'cmd-deploy', name: '/deploy', category: 'commands',
      desc: 'GitHub Pages, Vercel, AWS 등 다양한 플랫폼으로 배포 워크플로우를 자동화합니다.',
      tags: ['배포', 'CI/CD', 'DevOps'], stars: 4.7, installs: 14100, icon: '🚀', color: 'blue',
      prompt: `# /deploy 명령어

## 설치 방법
\`~/.claude/commands/deploy.md\` 파일을 생성하세요:

\`\`\`markdown
배포 전 다음 체크리스트를 확인하고 배포를 진행하세요:

**배포 전 검사:**
- [ ] 모든 테스트 통과 확인 (npm test)
- [ ] 빌드 성공 확인 (npm run build)
- [ ] 환경 변수 설정 확인
- [ ] CHANGELOG.md 업데이트
- [ ] 버전 태그 생성 (git tag v1.x.x)

**배포 플랫폼별 명령어:**

GitHub Pages:
git push origin main  # GitHub Actions 자동 배포

Vercel:
vercel --prod

AWS S3:
aws s3 sync dist/ s3://bucket-name --delete

**배포 후 검증:**
- [ ] 프로덕션 URL 접속 확인
- [ ] 핵심 기능 동작 확인
- [ ] 에러 모니터링 확인 (Sentry)
\`\`\`

## 사용 방법
\`\`\`bash
claude /deploy vercel    # Vercel 배포
claude /deploy gh-pages  # GitHub Pages 배포
\`\`\``
    }
  ],

  plugins: [
    {
      id: 'plugin-vercel', name: 'Vercel 플러그인', category: 'plugins',
      desc: 'Vercel 배포, 환경 변수, 도메인 설정을 Claude Code에서 직접 관리합니다. vercel deploy, env pull 등을 지원합니다.',
      tags: ['Vercel', '배포', '호스팅'], stars: 4.9, installs: 28000, icon: '▲', color: 'gold',
      prompt: `# Vercel 플러그인

## 설치 방법
\`\`\`bash
# Vercel CLI 설치
npm i -g vercel

# Claude Code Vercel 플러그인 설치
claude plugin install vercel
\`\`\`

## 주요 기능 및 사용 방법

### 배포
\`\`\`bash
# 프리뷰 배포
vercel

# 프로덕션 배포
vercel --prod
\`\`\`

### 환경 변수 관리
\`\`\`bash
# 환경 변수 가져오기
vercel env pull .env.local

# 환경 변수 추가
vercel env add NEXT_PUBLIC_API_URL
\`\`\`

### Claude Code 통합 활용
\`\`\`
"Vercel 플러그인으로 현재 브랜치를 프리뷰 배포하고
배포 URL을 알려주세요."

"프로덕션 환경 변수 목록을 보여주세요."

"최근 배포 로그에서 오류를 찾아주세요."
\`\`\`

## Vercel 프로젝트 설정 (vercel.ts)
\`\`\`typescript
import { type VercelConfig } from '@vercel/config';

export const config: VercelConfig = {
  framework: 'nextjs',
  buildCommand: 'npm run build',
  outputDirectory: '.next',
};
\`\`\``
    },
    {
      id: 'plugin-sentry', name: 'Sentry 플러그인', category: 'plugins',
      desc: 'Sentry 에러 추적과 성능 모니터링을 AI로 분석합니다. 에러 패턴 인식과 자동 수정 제안을 제공합니다.',
      tags: ['Sentry', '모니터링', '에러'], stars: 4.7, installs: 17500, icon: '🚨', color: 'purple',
      prompt: `# Sentry 플러그인

## 설치 방법
\`\`\`bash
npm install @sentry/nextjs  # Next.js
npm install @sentry/node    # Node.js
npm install @sentry/react   # React
\`\`\`

## 기본 설정
\`\`\`typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,  // 프로덕션에서는 0.1로 낮추세요

  // 성능 모니터링
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
});
\`\`\`

## 에러 캡처
\`\`\`typescript
try {
  await processOrder(orderId);
} catch (error) {
  Sentry.withScope((scope) => {
    scope.setTag('feature', 'checkout');
    scope.setUser({ id: userId });
    scope.setExtra('orderId', orderId);
    Sentry.captureException(error);
  });
  throw error;
}
\`\`\`

## Claude Code 통합 활용
\`\`\`
"Sentry 플러그인으로 최근 24시간 에러를 분석하고
가장 많이 발생한 에러 TOP 5와 수정 방법을 제안해주세요."
\`\`\``
    },
    {
      id: 'plugin-stripe', name: 'Stripe 플러그인', category: 'plugins',
      desc: 'Stripe 결제 시스템 통합과 웹훅 처리를 가이드합니다. 구독, 일회성 결제, 환불 플로우를 자동화합니다.',
      tags: ['Stripe', '결제', '웹훅'], stars: 4.8, installs: 22300, icon: '💳', color: 'blue',
      prompt: `# Stripe 플러그인

## 설치
\`\`\`bash
npm install stripe @stripe/stripe-js
\`\`\`

## 서버 사이드 설정
\`\`\`typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18',
  typescript: true,
});

// 결제 세션 생성
export async function createCheckoutSession(priceId: string, userId: string) {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: \`\${process.env.APP_URL}/success?session={CHECKOUT_SESSION_ID}\`,
    cancel_url: \`\${process.env.APP_URL}/pricing\`,
    metadata: { userId },
  });
  return session;
}
\`\`\`

## 웹훅 처리
\`\`\`typescript
export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature')!;

  const event = stripe.webhooks.constructEvent(
    body, sig, process.env.STRIPE_WEBHOOK_SECRET!
  );

  switch (event.type) {
    case 'checkout.session.completed':
      await handlePaymentSuccess(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await handleSubscriptionCanceled(event.data.object);
      break;
  }
  return Response.json({ received: true });
}
\`\`\`

## 활용 예시
\`\`\`
"Stripe 플러그인으로 월간/연간 구독 플랜을 구현해주세요."
\`\`\``
    },
    {
      id: 'plugin-supabase', name: 'Supabase 플러그인', category: 'plugins',
      desc: 'Supabase 데이터베이스, 인증, 실시간 구독을 Claude Code로 관리합니다. RLS 정책과 Edge Functions를 지원합니다.',
      tags: ['Supabase', 'PostgreSQL', '인증'], stars: 4.8, installs: 19600, icon: '⚡', color: 'emerald',
      prompt: `# Supabase 플러그인

## 설치
\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

## 클라이언트 설정
\`\`\`typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
\`\`\`

## 인증
\`\`\`typescript
// 소셜 로그인
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github',
  options: { redirectTo: window.location.origin + '/auth/callback' }
});

// 현재 사용자
const { data: { user } } = await supabase.auth.getUser();
\`\`\`

## 데이터베이스 쿼리
\`\`\`typescript
// 조회 (RLS 자동 적용)
const { data } = await supabase
  .from('posts')
  .select('id, title, user:users(name)')
  .eq('published', true)
  .order('created_at', { ascending: false })
  .limit(10);

// 실시간 구독
const channel = supabase
  .channel('posts')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'posts' },
    (payload) => console.log('새 게시글:', payload.new))
  .subscribe();
\`\`\`

## RLS 정책 예시
\`\`\`sql
-- 본인의 데이터만 수정 가능
CREATE POLICY "Users can update own posts" ON posts
  FOR UPDATE USING (auth.uid() = user_id);
\`\`\`

## 활용 예시
\`\`\`
"Supabase 플러그인으로 [기능]을 구현해주세요."
\`\`\``
    },
    {
      id: 'plugin-linear', name: 'Linear 플러그인', category: 'plugins',
      desc: 'Linear 이슈, 프로젝트, 사이클을 Claude Code에서 직접 관리합니다. 이슈 생성, 할당, 상태 업데이트를 자동화합니다.',
      tags: ['Linear', '이슈', '프로젝트관리'], stars: 4.6, installs: 11200, icon: '📊', color: 'purple',
      prompt: `# Linear 플러그인

## 설치 방법
\`\`\`bash
# Linear MCP 서버 설치
claude plugin install linear
\`\`\`

## API 키 설정
1. Linear → Settings → API → Personal API keys
2. API 키 생성 후 환경 변수 설정:
\`\`\`bash
export LINEAR_API_KEY="lin_api_..."
\`\`\`

## 사용 가능한 기능
- 이슈 생성/조회/업데이트
- 이슈 상태 변경 (Todo → In Progress → Done)
- 이슈 할당
- 코멘트 추가
- 프로젝트/사이클 조회

## Claude Code 통합 활용

### 개발 작업 추적
\`\`\`
"현재 구현한 기능에 대해 Linear 이슈를 생성하고
Done 상태로 변경해주세요."

"이번 스프린트에서 내가 담당한 이슈 목록을 보여주세요."
\`\`\`

### 자동화 워크플로우
\`\`\`
"git commit 메시지에서 이슈 번호(ENG-123)를 감지하여
해당 Linear 이슈 상태를 자동으로 업데이트해주세요."
\`\`\`

### 버그 리포팅
\`\`\`
"이 에러를 분석하고 Linear에 버그 이슈를 생성해주세요.
우선순위: High, 팀: Engineering"
\`\`\``
    }
  ],

  hooks: [
    {
      id: 'hook-format', name: '파일 저장 포맷터', category: 'hooks',
      desc: '파일 편집 후 Prettier로 자동 포맷팅합니다. PostToolUse 훅으로 코드 스타일을 일관되게 유지합니다.',
      tags: ['포맷', 'Prettier', '자동화'], stars: 4.8, installs: 25600, icon: '✨', color: 'gold',
      prompt: `# 파일 저장 포맷터 훅

## 설치 방법

### ~/.claude/settings.json에 추가
\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "npx prettier --write \\"$CLAUDE_FILE_PATH\\"",
        "description": "편집된 파일 자동 포맷팅"
      }
    ]
  }
}
\`\`\`

## Prettier 설정 (.prettierrc)
\`\`\`json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
\`\`\`

## .prettierignore
\`\`\`
node_modules
dist
build
.next
coverage
\`\`\`

## 효과
- 팀 전체 코드 스타일 자동 통일
- 코드 리뷰에서 스타일 이슈 제거
- PR 변경 사항에 포맷팅 잡음 제거

## 주의사항
Prettier 설치 필요: \`npm install -D prettier\``
    },
    {
      id: 'hook-lint', name: 'ESLint 훅', category: 'hooks',
      desc: '코드 편집 후 ESLint를 자동 실행하고 오류를 수정합니다. 코드 품질을 편집 시점에 즉시 유지합니다.',
      tags: ['ESLint', 'Lint', '품질'], stars: 4.7, installs: 22100, icon: '🔍', color: 'blue',
      prompt: `# ESLint 훅

## 설치 방법

### ~/.claude/settings.json에 추가
\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "npx eslint --fix \\"$CLAUDE_FILE_PATH\\" --max-warnings 0",
        "description": "ESLint 자동 수정 실행"
      }
    ]
  }
}
\`\`\`

## ESLint 설정 (eslint.config.js)
\`\`\`javascript
import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { '@typescript-eslint': typescript },
    parser: tsParser,
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
    }
  }
];
\`\`\`

## 효과
- 코드 작성 즉시 린트 오류 수정
- 일관된 코드 품질 유지
- console.log 실수 방지`
    },
    {
      id: 'hook-typecheck', name: 'TypeScript 타입 체크 훅', category: 'hooks',
      desc: '파일 편집 후 TypeScript 컴파일러를 실행하여 타입 오류를 즉시 감지합니다.',
      tags: ['TypeScript', '타입', '검증'], stars: 4.8, installs: 19800, icon: '📘', color: 'blue',
      prompt: `# TypeScript 타입 체크 훅

## 설치 방법

### ~/.claude/settings.json에 추가
\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "npx tsc --noEmit --pretty false 2>&1 | head -50",
        "description": "TypeScript 타입 검사 실행"
      }
    ]
  }
}
\`\`\`

## tsconfig.json 권장 설정
\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
\`\`\`

## 세션 종료 시 전체 타입 체크
\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "command": "npx tsc --noEmit",
        "description": "세션 종료 전 전체 타입 검사"
      }
    ]
  }
}
\`\`\`

## 효과
- 런타임 에러 방지
- 리팩토링 안전성 보장
- IDE 없이도 타입 오류 즉시 감지`
    },
    {
      id: 'hook-security-reminder', name: '보안 알림 훅', category: 'hooks',
      desc: '보안 민감한 파일 편집 시 자동으로 보안 체크리스트를 표시합니다. 시크릿, 인증, API 키를 감지합니다.',
      tags: ['보안', '알림', '체크리스트'], stars: 4.6, installs: 14300, icon: '🔐', color: 'orange',
      prompt: `# 보안 알림 훅

## 설치 방법

### ~/.claude/settings.json에 추가
\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "node -e \\"const fs=require('fs');const f=process.env.CLAUDE_FILE_PATH;if(!f)process.exit(0);const c=fs.readFileSync(f,'utf8');const patterns=[/password\\s*=/i,/api_key\\s*=/i,/secret\\s*=/i,/token\\s*=/i];const found=patterns.some(p=>p.test(c));if(found)console.warn('⚠️ 보안 경고: 민감한 값이 하드코딩되어 있을 수 있습니다. 환경 변수를 사용하세요.')\\"",
        "description": "하드코딩된 시크릿 감지"
      }
    ]
  }
}
\`\`\`

## 추가 보안 검사 스크립트
\`\`\`bash
#!/bin/bash
# scripts/security-check.sh

FILE=$1
if grep -qE '(password|api_key|secret|token)\\s*=\\s*["\\''][^"\\'']+["\\'']' "$FILE"; then
  echo "⚠️  보안 경고: 하드코딩된 민감한 값 발견"
  echo "📋 체크리스트:"
  echo "  [ ] 환경 변수로 이동"
  echo "  [ ] .env.example 업데이트"
  echo "  [ ] .gitignore에 .env 추가 확인"
  exit 1
fi
\`\`\`

## 효과
- 실수로 API 키 커밋 방지
- 보안 의식 향상
- 보안 체크리스트 자동 표시`
    },
    {
      id: 'hook-build-verify', name: '빌드 검증 훅', category: 'hooks',
      desc: '세션 종료 시 프로덕션 빌드를 자동 실행하여 빌드 성공을 검증합니다.',
      tags: ['빌드', '검증', '배포'], stars: 4.5, installs: 11700, icon: '🏗️', color: 'emerald',
      prompt: `# 빌드 검증 훅

## 설치 방법

### ~/.claude/settings.json에 추가
\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "command": "npm run build",
        "description": "세션 종료 시 빌드 검증"
      }
    ]
  }
}
\`\`\`

## 프레임워크별 빌드 명령어
\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "command": "npm run build 2>&1 | tail -20",
        "description": "프로덕션 빌드 검증 (마지막 20줄 출력)"
      }
    ]
  }
}
\`\`\`

## 테스트 + 빌드 조합
\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "command": "npm run test:ci && npm run build",
        "description": "테스트 통과 후 빌드 검증"
      }
    ]
  }
}
\`\`\`

## 효과
- "내 컴퓨터에서는 됨" 문제 방지
- 배포 전 빌드 실패 조기 발견
- CI/CD 파이프라인 실패 감소

## 주의사항
빌드 시간이 긴 경우 세션 종료가 느려질 수 있습니다.
\`timeout 60 npm run build\`로 타임아웃 설정을 추천합니다.`
    },
    {
      id: 'hook-file-size', name: '파일 크기 제한 훅', category: 'hooks',
      desc: '800줄 이상의 파일 작성을 차단하고 모듈 분리를 강제합니다. 코드베이스 유지보수성을 자동으로 관리합니다.',
      tags: ['파일크기', '모듈화', '제한'], stars: 4.4, installs: 9200, icon: '📏', color: 'purple',
      prompt: `# 파일 크기 제한 훅

## 설치 방법

### ~/.claude/settings.json에 추가
\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "command": "node -e \\"let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>{const i=JSON.parse(d);const c=i.tool_input?.content||'';const lines=c.split('\\\\n').length;if(lines>800){console.error('[훅] 차단: 파일이 800줄을 초과합니다 ('+lines+'줄)');console.error('[훅] 더 작은 모듈로 분리하세요');process.exit(2)}process.stdout.write(d)})\\"",
        "description": "800줄 초과 파일 작성 차단"
      }
    ]
  }
}
\`\`\`

## 파일 크기 가이드라인
| 파일 크기 | 상태 | 권장 조치 |
|-----------|------|-----------|
| < 200줄 | 적절함 | 유지 |
| 200-400줄 | 보통 | 모니터링 |
| 400-800줄 | 큰 편 | 분리 고려 |
| 800줄 이상 | 너무 큼 | 즉시 분리 |

## 모듈 분리 전략
\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── auth.service.ts     # 핵심 로직
│   │   ├── auth.controller.ts  # HTTP 처리
│   │   ├── auth.types.ts       # 타입 정의
│   │   └── auth.utils.ts       # 유틸리티
\`\`\`

## 효과
- 단일 책임 원칙 강제
- 코드 리뷰 용이성 향상
- 테스트 작성 단순화
- Git blame 정확도 향상`
    }
  ]
};
