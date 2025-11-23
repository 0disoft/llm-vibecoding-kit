# 프로젝트 작업 대시보드 (TODOS)

> **System Instruction (불변의 법칙)**
>
> 1. **Single Source of Truth**: 이 파일은 프로젝트의 진행 상황을 추적하는 유일한 기준입니다.
> 2. **Atomic Tasks (초미세 단위)**: 할 일은 반드시 **"파일 하나를 만들거나 함수 하나를 수정하는 수준"**으로 잘게 쪼개야 합니다. 뭉뚱그려진 작업("로그인 구현")은 금지합니다.
> 3. **Visual First (UI 우선)**:
>    - **순서**: 무조건 **[UI/퍼블리싱] -> [프론트 로직(Mock)] -> [백엔드/DB 연동]** 순서로 진행합니다.
>    - **검증**: 백엔드가 없어도 화면이 먼저 나와야 하며, 더미 데이터로 작동을 확인한 뒤에야 DB를 건드립니다.
> 4. **Check & Save**: 단위 작업(Task)이 끝날 때마다 즉시 `[x]` 체크하고 저장하십시오.

## 1. 프로젝트 개요 요약

- **프로젝트명**: (초기화 필요)
- **주요 목표**: (초기화 필요)
- **현재 단계**: 🚀 초기 세팅 (Phase 1) / 🚧 기능 구현 (Phase 2) / ✨ 폴리싱 (Phase 3)

## 2. 마일스톤 및 작업 목록 (Roadmap)

### Phase 1: 초기 세팅 및 인프라 (Setup)
>
> 기술 스택 설정을 기반으로 수행합니다.

- [ ] **프로젝트 스캐폴딩**: 프레임워크 설치 및 초기화
- [ ] **설정 파일 구성**: `tsconfig`, `eslint`, `tailwind.config` 등 환경 설정
- [ ] **라이브러리 설치**: 필수 의존성 패키지 설치 (UI, DB, Auth 등)
- [ ] **Git 초기화**: `.gitignore` 설정 및 첫 커밋

### Phase 2: 디자인 시스템 및 공통 레이아웃 (Foundation)
>
> `theme_options.toml`의 값을 적용합니다.

- [ ] **테마(Theme) 적용**: 색상 변수(CSS Variables) 및 폰트 설정
- [ ] **전역 스타일**: Reset CSS, 기본 타이포그래피 설정
- [ ] **공통 컴포넌트(Layout)**: Header, Footer, Sidebar 등 골격 구현
- [ ] **라우팅 구조**: 페이지별 경로 및 빈 파일 생성

### Phase 3: 핵심 기능 구현 (Feature Implementation)
>
> `BLUEPRINT.md`의 명세를 바탕으로 작업을 **최소 단위**로 쪼개십시오.
> **반드시 UI(껍데기)를 먼저 완성하고 승인받은 뒤 로직을 붙이십시오.**
>
> **[참고: 작성 예시 - 로그인 기능]**
>
> **Step 1. UI 퍼블리싱 (Visual)**
>
> - [ ] `login/page.tsx`: 레이아웃 컨테이너 및 타이틀 배치
> - [ ] `login/components/LoginForm.tsx`: 이메일/비밀번호 Input UI 구현 (Tailwind 적용)
> - [ ] `login/components/SubmitButton.tsx`: 로딩 상태 스타일 포함 버튼 구현
>
> **Step 2. 프론트엔드 로직 (Interaction)**
>
> - [ ] `LoginForm.tsx`: React Hook Form 설치 및 입력값 상태 관리 연결
> - [ ] `LoginForm.tsx`: Zod 스키마 작성 및 유효성 검사 에러 메시지 노출
> - [ ] `LoginForm.tsx`: `console.log`로 폼 제출 데이터 확인 (Mocking)
>
> **Step 3. 백엔드 및 데이터 (Integration)**
>
> - [ ] `lib/supabase.ts`: 클라이언트 생성 및 환경변수 연결
> - [ ] `auth.ts`: 로그인 API 함수 구현 (`signInWithPassword`)
> - [ ] `LoginForm.tsx`: 실제 API 연결 및 성공/실패 토스트 메시지 처리

**[실제 작업 목록]**

- [ ] (작업 대기 중...)

### Phase 4: 최적화 및 배포 준비 (Polish & Ship)

- [ ] **메타 데이터 설정**: SEO 태그, OG 이미지 적용
- [ ] **빌드 테스트**: 프로덕션 빌드 에러 점검
- [ ] **코드 클린업**: `console.log` 제거 및 주석 정리
- [ ] **배포**: 호스팅 서비스 연결 및 배포

## 3. 세션 기록 (Change Log)
>
> 작업을 완료하고 세션을 종료하기 전, 간략한 요약을 남기십시오.

- **YYYY-MM-DD**: ...
