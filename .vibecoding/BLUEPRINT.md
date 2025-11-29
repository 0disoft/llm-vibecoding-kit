# 프로젝트 청사진 (BLUEPRINT)

> System Instruction: 이 파일은 프로젝트의 불변하는 설계도입니다. 기능 구현 시 이 파일에 정의된 스펙, 디자인 시스템, 디렉토리 구조를 엄격히 준수하십시오. 진행 상황은 이 파일이 아닌 TODOS.md에 기록합니다.

## 1. 프로젝트 및 리소스 개요

> [지침]
> 프로젝트의 정체성, 물리적 저장소 위치, 그리고 비즈니스 전략을 명확히 정의하십시오.
> 이 정보는 LLM이 배포 스크립트를 짜거나 비즈니스 로직을 제안할 때 기준이 됩니다.

### 1.1. 정체성 (Identity)

- **프로젝트명**: {{PROJECT_NAME}}
- **한 줄 요약**: {{ONE_LINE_DESCRIPTION}}
- **핵심 가치**: (예: 가장 빠른, 가장 안전한, 미니멀한...)

### 1.2. 개발 리소스 (Resources)

- **저장소 (Repo)**: {{GIT_REPO_URL}} (예: <https://github.com/user/repo>)
- **배포 도메인**: {{DOMAIN_URL}} (예: <https://myapp.vercel.app>)
- **디자인/기획**: {{DESIGN_DOC_URL}} (예: Figma 링크 또는 Notion 기획서)

### 1.3. 타겟 및 전략 (Strategy)

- **타겟 유저**: {{TARGET_USER}} (예: 30대 재테크 관심 직장인)
- **비즈니스 모델**: (예: 무료 / 구독형 / 광고 / 부분 유료화)
- **주요 경쟁사**: (예: 토스, 뱅크샐러드 - 벤치마킹 대상)

## 2. 전역 기능 범위 (Global Features)

> [지침]
> `.vibecoding/feature_options.toml` 파일을 메뉴판처럼 참고하십시오.
> 각 카테고리별로 이 프로젝트에 적용할 기능을 구체적으로 선택하여 아래 리스트에 기입하십시오.
> (선택하지 않은 항목은 적지 않아도 됩니다.)
>
> **[참고: 작성 예시]**
>
> ### 2.1. UI/UX 표준
>
> - [x] Mobile First (모바일 우선)
> - [x] System Preference Sync (시스템 테마 동기화)
> - [x] Pretendard (Variable)
>
> ### 2.7. 비즈니스 및 성장
>
> - [x] Pricing Table (가격 정책표)
> - [x] Newsletter Signup (뉴스레터 구독)

**[실제 기능 명세]**

### 2.1. UI/UX 표준 (UI/UX)

- [ ] (feature_options.toml의 [ui_ux_standards] 참고하여 기입)

### 2.2. 앱 기능 및 성능 (App Capabilities)

- [ ] (feature_options.toml의 [app_capabilities] 참고하여 기입)

### 2.3. SEO 및 메타 전략 (SEO & Meta)

- [ ] (feature_options.toml의 [seo_and_meta] 참고하여 기입)

### 2.4. 보안 및 API 정책 (Security)

- [ ] (feature_options.toml의 [security_policies] 참고하여 기입)

### 2.5. 성능 최적화 전략 (Performance)

- [ ] (feature_options.toml의 [performance_optimization] 참고하여 기입)

### 2.6. 규정 준수 및 법적 고지 (Compliance)

- [ ] (feature_options.toml의 [compliance_and_legal] 참고하여 기입)

### 2.7. 비즈니스 및 성장 (Business & Growth)

- [ ] (feature_options.toml의 [business_growth] 참고하여 기입)

## 3. 기술 스택 선정

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

## 4. 디자인 시스템 및 테마

> [지침]
>
> 1. 색상: .vibecoding/theme_options.toml 파일에서 테마 하나를 선택하십시오.
> 2. 값 적용: 선택한 테마의 brand, status, ui_light, ui_dark 섹션에 정의된 HEX 값을 아래 표에 그대로 옮겨 적으십시오.
>    - 주의: 임의로 색상을 계산하거나 변경하지 마십시오. (테마별로 조정된 가독성 세팅을 유지해야 합니다.)
> 3. UI 스타일: .vibecoding/ui_options.toml 참고.

### 4.1. 컬러 팔레트 및 토큰 정의

[선택된 테마]: (예: Earth & Forest)

| 용도 (Token) | 라이트 HEX | 라이트 OKLCH | 라이트 설명 | 다크 HEX | 다크 OKLCH | 다크 설명 | 비고 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 기본 (Primary) | | | ... | | | ... | 브랜드 메인 |
| 보조 (Secondary) | | | ... | | | ... | 서브 강조 |
| 포인트 (Accent) | | | ... | | | ... | 링크, 포커스 |
| 배경 (Background) | | | ... | | | ... | 전체 배경 |
| 표면 (Surface) | | | ... | | | ... | 카드 배경 |
| 테두리 (Border) | | | ... | | | ... | 구분선 |
| 텍스트 (Main) | | | ... | | | ... | 기본 본문 |
| 텍스트 (Muted) | | | ... | | | ... | 보조 텍스트 |
| 성공 (Success) | | | ... | | | ... | 성공 상태 |
| 경고 (Warning) | | | ... | | | ... | 경고 상태 |
| 오류 (Error) | | | ... | | | ... | 에러 상태 |

### 4.2. UI 스타일 및 구조 (Shape & Typography)

> [지침]
> .vibecoding/ui_options.toml의 항목들을 빠짐없이 결정하여 기입하십시오.
> 적용 값에는 괄호 안의 내용(Tailwind Class 또는 CSS 값)을 정확히 옮겨 적으십시오.

| 구분 | 선택된 스타일 (Vibe) | 적용 값 (Class / Value) |
| :--- | :--- | :--- |
| 폰트 패밀리 | (예: Modern Gothic) | font-['Pretendard'] |
| 줄 간격 | (예: Normal) | leading-normal |
| 글자 굵기 | (예: Standard) | 400 / 700 |
| 둥글기 (Radius) | (예: Standard) | rounded-lg |
| 그림자 (Shadow) | (예: Subtle) | shadow-sm |
| 테두리 두께 | (예: Hairline) | 1px |
| 컨테이너 폭 | (예: Dashboard) | max-w-7xl |
| 여백 밀도 | (예: Comfortable) | Base 1rem |
| 반응 속도 | (예: Snappy) | duration-150 |
| 움직임 곡선 | (예: Standard) | ease-in-out |
| 호버 스타일 | (예: Dimming) | hover:opacity-80 |
| 호버 움직임 | (예: None) | None |
| 클릭 효과 | (예: Subtle Press) | active:scale-95 |
| 사운드 | (예: Soft Click) | use-sound (Tick) |

## 5. 페이지 구조 및 기능 명세

> [지침]
> 아래의 **[참고: 작성 예시]**를 보고, 프로젝트의 실제 구조를 **[실제 명세]** 란에 작성하십시오.
> 예시 내용은 참고용일 뿐이며, 실제 구현에는 포함되지 않습니다.

### 5.1. 라우트 맵 (Route Map)

> **[참고: 작성 예시]**
>
> - `/` : 랜딩 페이지 (Public)
> - `/auth` (인증)
>   - `/login` : 이메일 로그인
>   - `/join` : 회원가입
> - `/dashboard` (사용자)
>   - `/` : 대시보드 메인 (요약 통계)
>   - `/projects` : 내 프로젝트 목록
>   - `/settings` : 계정 설정

#### [실제 라우트]

- `/` : (여기에 라우트 구조를 작성하세요)
- ...

### 5.2. 페이지별 상세 명세

> **[참고: 작성 예시]**
>
> **A. 대시보드 메인 (/dashboard)**
>
> - **권한**: 로그인 유저 전용
> - **UI 구성**:
>   - 좌측 사이드바 (네비게이션)
>   - 상단 웰컴 메시지 ("안녕하세요, OO님")
>   - 중앙 통계 카드 그리드 (방문자 수, 매출 등)
> - **주요 로직**:
>   - 페이지 로드 시 `user_stats` 테이블에서 이번 달 데이터 집계
>   - '새로고침' 버튼 클릭 시 비동기(fetch)로 데이터 재조회

#### [실제 명세]

##### 1. (페이지 이름)

- **권한**:
- **UI 구성**
  - ...
- **주요 로직**
  - ...

##### 2. (페이지 이름)

- ...

## 6. 프로젝트 파일 구조 (Project Structure)

> [지침]
> 프로젝트의 "물리적 폴더 및 핵심 파일"의 위치와 역할을 트리 구조로 유지하십시오.
> 새로운 기능 구현으로 파일이 생성되면, 반드시 이곳에 추가하여 다음 세션의 에이전트가 위치를 찾을 수 있게 하십시오.
>
> **[참고: 작성 예시]**
>
> ```bash
> / (Root)
> ├── src/
> │   ├── components/          # 재사용 가능한 UI 컴포넌트
> │   │   └── Button.tsx
> │   ├── lib/                 # 유틸리티 및 비즈니스 로직
> │   │   └── api.ts
> │   └── main.ts              # 엔트리 포인트
> └── package.json
> ```

**[실제 파일 구조]**

```bash
/ (Root)
└── (여기에 새로운 파일과 폴더가 추가됩니다)
