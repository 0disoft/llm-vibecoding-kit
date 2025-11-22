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
> 1. **색상**: .vibecoding/theme_options.toml 참고하여 테마 선택 및 팔레트 작성.
> 2. **UI 스타일**: .vibecoding/ui_options.toml 참고.
> 3. [중요] 스타일 옵션을 기입할 때는 메뉴판의 이름뿐만 아니라, 괄호 안에 있는 '참조용 표준값(Reference Value)'을 반드시 별도 컬럼에 명시하십시오.
>    - 예: 선택 옵션이 "Tight (leading-tight)"라면 -> 적용 값에 "leading-tight" 기입.

### 4.1. 컬러 팔레트 및 토큰 정의

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

### 4.2. UI 스타일 및 구조 (Shape & Typography)

> [지침]
> .vibecoding/ui_options.toml의 항목들을 빠짐없이 결정하여 기입하십시오.
> **적용 값**에는 괄호 안의 내용(Tailwind Class 또는 CSS 값)을 정확히 옮겨 적으십시오.

| 구분 | 선택된 스타일 (Vibe) | 적용 값 (Class / Value) |
| :--- | :--- | :--- |
| **폰트 패밀리** | (예: Modern Gothic) | font-['Pretendard'] |
| **줄 간격** | (예: Normal) | leading-normal |
| **글자 굵기** | (예: Standard) | 400 / 700 |
| **둥글기 (Radius)** | (예: Standard) | rounded-lg |
| **그림자 (Shadow)** | (예: Subtle) | shadow-sm |
| **테두리 두께** | (예: Hairline) | 1px |
| **컨테이너 폭** | (예: Dashboard) | max-w-7xl |
| **여백 밀도** | (예: Comfortable) | Base 1rem |
| **반응 속도** | (예: Snappy) | duration-150 |
| **클릭 효과** | (예: Subtle Press) | active:scale-95 |

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
