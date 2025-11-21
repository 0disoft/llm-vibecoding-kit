# 프로젝트 청사진 (BLUEPRINT)

> System Instruction: 이 파일은 프로젝트의 불변하는 설계도입니다. 기능 구현 시 이 파일에 정의된 스펙, 디자인 시스템, 디렉토리 구조를 엄격히 준수하십시오. 진행 상황은 이 파일이 아닌 TODOS.md에 기록합니다.

## 1. 프로젝트 개요

- 프로젝트명: {{PROJECT_NAME}}
- 도메인: {{DOMAIN_URL}}
- 한 줄 요약: {{ONE_LINE_DESCRIPTION}}
- 타겟 유저: {{TARGET_USER}}

## 2. 기술 스택 선정

> [지침]
> .vibecoding/stack_options.toml 파일을 참고하여, 프로젝트 목표 달성에 필수적인 기술만 선별하여 기입하십시오.
>
> - 프로젝트 성격에 맞지 않는 카테고리는 과감히 생략합니다.
> - 선정 이유는 "왜 이 기술이 이 프로젝트에 적합한가?"를 한 줄로 요약합니다.

| 구분 | 선택된 기술 | 선정 이유 (Context) |
| :--- | :--- | :--- |
| (예시) 런타임 | Bun | 빠른 프로토타이핑 속도 필요 |
| (예시) DB | SQLite | 로컬 중심의 가벼운 데이터 관리 |
| (이곳을 채우세요) | ... | ... |

## 3. 전역 기능 범위 (Global Features)

> [지침]
> .vibecoding/feature_options.toml 파일을 참고하여, 구현해야 할 기능을 체크리스트로 구성하십시오.

### 3.1. UI/UX 표준

- [ ] (ui_ux_standards 섹션 참고...)

### 3.2. 앱 기능 및 성능

- [ ] (app_capabilities 섹션 참고...)

### 3.3. SEO 및 메타 전략

- [ ] (seo_and_meta 섹션 참고...)

### 3.4. 보안 및 규정

- [ ] (security_policies 및 compliance 섹션 참고...)

## 4. 디자인 시스템 및 테마

> [지침]
>
> 1. .vibecoding/theme_options.toml 파일에서 테마 하나를 선택하십시오.
> 2. 브랜드 컬러(Primary, Secondary, Accent, Status)는 선택한 테마의 값을 그대로 사용하십시오.
> 3. 뉴트럴 컬러(Background, Surface, Text, Border)는 테마의 base_scale (예: Slate, Stone)을 기준으로 아래 규칙에 따라 자동 생성하십시오.
>    - Light Mode: Bg(White), Surface(50), Border(200), Text(700), Muted(500)
>    - Dark Mode: Bg(900 또는 950), Surface(800), Border(700), Text(200), Muted(400)
> 4. 모든 색상의 Hex 값과 OKLCH 값을 계산하여 기입하십시오.

### 컬러 팔레트 및 토큰 정의

[선택된 테마]: (예: corporate_navy) / [Base Scale]: (예: Slate)

| 용도 (Token) | 라이트 HEX | 라이트 OKLCH | 다크 HEX | 다크 OKLCH | 비고 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 기본 (Primary) | (TOML값) | ... | (TOML값) | ... | 브랜드 메인 |
| 보조 (Secondary) | (TOML값) | ... | (TOML값) | ... | 서브 강조 |
| 포인트 (Accent) | (TOML값) | ... | (TOML값) | ... | 링크, 포커스 |
| 배경 (Background) | #FFFFFF | ... | (Scale-900) | ... | 전체 배경 |
| 표면 (Surface) | (Scale-50) | ... | (Scale-800) | ... | 카드 배경 |
| 테두리 (Border) | (Scale-200) | ... | (Scale-700) | ... | 구분선 |
| 텍스트 (Main) | (Scale-700) | ... | (Scale-200) | ... | 기본 본문 |
| 텍스트 (Muted) | (Scale-500) | ... | (Scale-400) | ... | 보조 텍스트 |
| 성공 (Success) | (Status.succ) | ... | (Status.succ) | ... | 성공 상태 |
| 경고 (Warning) | (Status.warn) | ... | (Status.warn) | ... | 경고 상태 |
| 오류 (Error) | (Status.err) | ... | (Status.err) | ... | 에러 상태 |

### 타이포그래피 및 레이아웃

- 폰트: {{FONT_FAMILY}}
- 둥글기 (Radius): 0.5rem (버튼), 1rem (카드)

## 5. 페이지 구조 및 기능 명세

> [지침]
> 프로젝트의 핵심 페이지 구조와 각 페이지별 필수 기능을 정의하십시오.

### 1단계: MVP (핵심 기능)

#### / (라우트 경로)

- 접근 권한: (전체 공개 / 로그인 필수 / 게스트 전용)
- 핵심 기능:
  - (기능 1)
  - (기능 2)

#### (페이지 추가...)
