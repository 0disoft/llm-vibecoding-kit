# PROJECT BLUEPRINT

> System Instruction: 이 파일은 프로젝트의 불변하는 설계도입니다. 기능 구현 시 이 파일에 정의된 스펙, 디자인 시스템, 디렉토리 구조를 엄격히 준수하십시오. 진행 상황은 이 파일이 아닌 TODOS.md에 기록합니다.

## 1. Project Identity

- Name: {{PROJECT_NAME}}
- Domain: {{DOMAIN_URL}}
- Concept: {{ONE_LINE_DESCRIPTION}}
- Target Audience: {{TARGET_USER}}

## 2. Tech Stack & Global Scope

프로젝트에 적용할 핵심 기술과 전역 기능을 정의합니다.

### Tech Stack

- Framework: {{FRAMEWORK}} (예: SvelteKit, Next.js)
- Language: TypeScript
- Styling: TailwindCSS
- Database: {{DATABASE}} (예: Supabase)
- Deployment: {{DEPLOY_TARGET}} (예: Vercel)

### Global Features

- [ ] **Responsive UI**: Mobile First 전략 (모바일 -> 데스크탑)
- [ ] **Dark Mode**: 시스템 설정 감지 및 토글 버튼 지원
- [ ] **PWA**: 설치형 앱 지원 (Manifest, Service Worker)
- [ ] **I18n**: 다국어 지원 (한국어 기본 + 영어)
- [ ] **SEO**: 동적 메타 태그 및 OG Image 생성

## 3. Design System & Theme

UI 구현 시 아래의 컬러 토큰과 스타일 가이드를 변수로 등록하여 사용하십시오.

### Color Palette (Brand)

브랜드 정체성을 나타내는 핵심 컬러입니다.

| Token | Hex | OKLCH | Usage |
| :--- | :--- | :--- | :--- |
| **Primary** | `{{PRIMARY_HEX}}` | `{{PRIMARY_OKLCH}}` | 메인 버튼, 활성 상태, 브랜드 로고 |
| **Secondary** | `{{SECONDARY_HEX}}` | `{{SECONDARY_OKLCH}}` | 강조, 알림 뱃지, 보조 버튼 |
| **Accent** | `{{ACCENT_HEX}}` | `{{ACCENT_OKLCH}}` | 링크 텍스트, 포커스 링 |

### Semantic Colors (Mode Adaptive)

다크 모드 전환 시 반전되는 의미론적 컬러입니다.

| Role | Light Mode | Dark Mode |
| :--- | :--- | :--- |
| **Background** | `#FFFFFF` | `#0F172A` |
| **Surface** | `#F8FAFC` (Slate-50) | `#1E293B` (Slate-800) |
| **Border** | `#E2E8F0` (Slate-200) | `#334155` (Slate-700) |
| **Text (Body)** | `#334155` (Slate-700) | `#E2E8F0` (Slate-200) |
| **Text (Muted)** | `#64748B` (Slate-500) | `#94A3B8` (Slate-400) |

### Typography & Layout

- **Font Family**: {{FONT_FAMILY}} (예: Pretendard Variable)
- **Base Size**: 16px (1rem)
- **Border Radius**:
  - Button: `0.5rem` (Rounded-lg)
  - Card: `1rem` (Rounded-2xl)

## 4. Pages & Features Map

페이지별 핵심 기능과 제약 사항입니다.

### Phase 1: MVP (Core)

#### / (Landing)

- **Auth**: Public (비로그인 접근 가능)
- **Key Features**:
  - 히어로 섹션 (캐치프레이즈 + CTA)
  - 주요 기능 소개 (Grid Layout)
  - 푸터 (이용약관 링크)

#### /login (Auth)

- **Auth**: Guest Only (로그인 시 리다이렉트)
- **Key Features**:
  - 소셜 로그인 (Google, Kakao)
  - 이메일 매직 링크 로그인
  - 에러 토스트 메시지 처리

#### /app (Main Dashboard)

- **Auth**: Protected (로그인 필수)
- **Key Features**:
  - {{CORE_FEATURE_1}}
  - {{CORE_FEATURE_2}}
  - 무한 스크롤 리스트

### Phase 2: Advanced

#### /settings

- **Auth**: Protected
- **Key Features**:
  - 프로필 이미지 수정
  - 테마 변경 (Light/Dark/System)
  - 회원 탈퇴 (Soft Delete)
  