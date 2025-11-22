// --- Color Scales (Fallback / Reference) ---
const colors = {
    slate: { 50: '#f8fafc', 200: '#e2e8f0', 500: '#64748b', 700: '#334155', 900: '#0f172a', 950: '#020617' },
    stone: { 50: '#fafaf9', 200: '#e7e5e4', 500: '#78716c', 700: '#44403c', 900: '#1c1917', 950: '#0c0a09' },
    gray: { 50: '#f9fafb', 200: '#e5e7eb', 500: '#6b7280', 700: '#374151', 900: '#111827', 950: '#030712' },
    zinc: { 50: '#fafafa', 200: '#e4e4e7', 500: '#71717a', 700: '#3f3f46', 900: '#18181b', 950: '#09090b' },
    neutral: { 50: '#fafafa', 200: '#e5e5e5', 500: '#737373', 700: '#404040', 900: '#171717', 950: '#0a0a0a' },
    sand: { 50: '#fdfcfb', 200: '#e7e5e4', 500: '#78716c', 700: '#44403c', 900: '#1c1917', 950: '#0c0a09' },
    sage: { 50: '#f4f7f4', 200: '#c5d9c5', 500: '#5e8e5e', 700: '#365336', 900: '#1a2e1a', 950: '#051a05' },
    olive: { 50: '#f9faf0', 200: '#e2e8b6', 500: '#94b338', 700: '#556a1b', 900: '#2e331a', 950: '#121a05' },
    sky: { 50: '#f0f9ff', 200: '#bae6fd', 500: '#0ea5e9', 700: '#0369a1', 900: '#0c4a6e', 950: '#041824' }
};

// --- 21 Themes Data (Full Spec with UI Overrides) ---
const themes = [
    {
        name: "Earth & Forest", base: "stone",
        c: { p: "#283618", s: "#606C38", a: "#BC6C25", suc: "#283618", war: "#DDA15E", err: "#BC6C25" },
        ui: {
            light: { bg: "#FEFAE0", surf: "#FFFFFF", txt: "#283618", mut: "#606C38", bord: "#E2E8C0" },
            dark: { bg: "#0D1208", surf: "#1A2115", txt: "#FEFAE0", mut: "#A3B18A", bord: "#2F3E22" }
        }
    },
    {
        name: "Deep Ocean Sunset", base: "slate",
        c: { p: "#023047", s: "#219EBC", a: "#FB8500", suc: "#219EBC", war: "#FFB703", err: "#FB8500" },
        ui: {
            light: { bg: "#F0F9FF", surf: "#FFFFFF", txt: "#023047", mut: "#467388", bord: "#BDE0FE" },
            dark: { bg: "#011826", surf: "#023047", txt: "#E0F7FA", mut: "#8ECAE6", bord: "#124E66" }
        }
    },
    {
        name: "Retro Americana", base: "sand",
        c: { p: "#C1121F", s: "#003049", a: "#669BBC", suc: "#003049", war: "#D97706", err: "#780000" },
        ui: {
            light: { bg: "#FDF0D5", surf: "#FFFBF0", txt: "#003049", mut: "#6F7E8C", bord: "#E6D5B8" },
            dark: { bg: "#001829", surf: "#003049", txt: "#FDF0D5", mut: "#669BBC", bord: "#334B5C" }
        }
    },
    {
        name: "Vintage Botanical", base: "sage",
        c: { p: "#386641", s: "#6A994E", a: "#BC4749", suc: "#386641", war: "#A7C957", err: "#BC4749" },
        ui: {
            light: { bg: "#F2F5F0", surf: "#FFFFFF", txt: "#1F2E1F", mut: "#5F7A5F", bord: "#D8E0D8" },
            dark: { bg: "#111A11", surf: "#1D2B1D", txt: "#E9EDC9", mut: "#8DA38D", bord: "#2C3E2C" }
        }
    },
    {
        name: "Pastel Dream", base: "gray",
        c: { p: "#FFAFCC", s: "#BDE0FE", a: "#CDB4DB", suc: "#A2D2FF", war: "#FFC8DD", err: "#FFAFCC" },
        ui: {
            light: { bg: "#FFF9FB", surf: "#FFFFFF", txt: "#4A404F", mut: "#9C8FA3", bord: "#F3E6F5" },
            dark: { bg: "#1A1625", surf: "#252033", txt: "#FFF0F5", mut: "#B5A8C0", bord: "#3E3550" }
        }
    },
    {
        name: "Corporate Navy", base: "slate",
        c: { p: "#0D1B2A", s: "#1B263B", a: "#415A77", suc: "#415A77", war: "#778DA9", err: "#1B263B" },
        ui: {
            light: { bg: "#F8FAFC", surf: "#FFFFFF", txt: "#0F172A", mut: "#64748B", bord: "#E2E8F0" },
            dark: { bg: "#020617", surf: "#0F172A", txt: "#F1F5F9", mut: "#94A3B8", bord: "#1E293B" }
        }
    },
    {
        name: "Organic Beige", base: "stone",
        c: { p: "#D5BDAF", s: "#D6CCC2", a: "#E3D5CA", suc: "#577555", war: "#D4A373", err: "#BC4749" },
        ui: {
            light: { bg: "#FDFCF8", surf: "#FFFFFF", txt: "#4A403A", mut: "#9CA3AF", bord: "#E5E5E5" },
            dark: { bg: "#1C1917", surf: "#292524", txt: "#E7E5E4", mut: "#A8A29E", bord: "#44403C" }
        }
    },
    {
        name: "Matcha & Wood", base: "olive",
        c: { p: "#CCD5AE", s: "#E9EDC9", a: "#D4A373", suc: "#606C38", war: "#D4A373", err: "#BC4749" },
        ui: {
            light: { bg: "#FAEDCD", surf: "#FEFAE0", txt: "#4A4238", mut: "#8E8D8A", bord: "#D4A373" },
            dark: { bg: "#181A15", surf: "#242920", txt: "#E9EDC9", mut: "#CCD5AE", bord: "#3E4238" }
        }
    },
    {
        name: "Red & Steel", base: "zinc",
        c: { p: "#1D3557", s: "#457B9D", a: "#E63946", suc: "#2A9D8F", war: "#F4A261", err: "#E63946" },
        ui: {
            light: { bg: "#F1FAEE", surf: "#FFFFFF", txt: "#1D3557", mut: "#457B9D", bord: "#A8DADC" },
            dark: { bg: "#0B131F", surf: "#162438", txt: "#F1FAEE", mut: "#A8DADC", bord: "#2A466B" }
        }
    },
    {
        name: "Midnight Yellow", base: "neutral",
        c: { p: "#FFC300", s: "#003566", a: "#FFD60A", suc: "#FFD60A", war: "#F59E0B", err: "#FF3333" },
        ui: {
            light: { bg: "#FFFFFF", surf: "#F8F9FA", txt: "#000814", mut: "#003566", bord: "#001D3D" },
            dark: { bg: "#000000", surf: "#001D3D", txt: "#FFC300", mut: "#94A3B8", bord: "#334155" }
        }
    },
    {
        name: "Deep Green Forest", base: "sage",
        c: { p: "#344E41", s: "#588157", a: "#DAD7CD", suc: "#3A5A40", war: "#E9C46A", err: "#BC4749" },
        ui: {
            light: { bg: "#F3F5F1", surf: "#FFFFFF", txt: "#344E41", mut: "#588157", bord: "#DAD7CD" },
            dark: { bg: "#1A211D", surf: "#252E28", txt: "#DAD7CD", mut: "#A3B18A", bord: "#3A5A40" }
        }
    },
    {
        name: "Fresh Lime", base: "gray",
        c: { p: "#132A13", s: "#4F772D", a: "#ECF39E", suc: "#4F772D", war: "#ECF39E", err: "#D00000" },
        ui: {
            light: { bg: "#FFFFFF", surf: "#F7F9F5", txt: "#132A13", mut: "#4F772D", bord: "#90A955" },
            dark: { bg: "#050D05", surf: "#132A13", txt: "#FFFFFF", mut: "#90A955", bord: "#31572C" }
        }
    },
    {
        name: "Classic Leather", base: "stone",
        c: { p: "#432818", s: "#99582A", a: "#FFE6A7", suc: "#556B2F", war: "#D4A373", err: "#9E2A2B" },
        ui: {
            light: { bg: "#FAF7F2", surf: "#FFFFFF", txt: "#432818", mut: "#99582A", bord: "#E3D5CA" },
            dark: { bg: "#1F1510", surf: "#2E1F18", txt: "#FFE6A7", mut: "#D5BDAF", bord: "#5C3A21" }
        }
    },
    {
        name: "Retro Floral", base: "sand",
        c: { p: "#723D46", s: "#C9CBA3", a: "#E26D5C", suc: "#556B2F", war: "#D4A373", err: "#9E2A2B" },
        ui: {
            light: { bg: "#FFFDF7", surf: "#FFFFFF", txt: "#4A3333", mut: "#9D8189", bord: "#E6DCD3" },
            dark: { bg: "#1F1515", surf: "#2C1E1E", txt: "#F2E8DC", mut: "#C9CBA3", bord: "#4F3535" }
        }
    },
    {
        name: "Ocean Depths", base: "sky",
        c: { p: "#03045E", s: "#0077B6", a: "#CAF0F8", suc: "#00B4D8", war: "#FFD166", err: "#FF6B6B" },
        ui: {
            light: { bg: "#F0F9FF", surf: "#FFFFFF", txt: "#03045E", mut: "#486581", bord: "#BDE0FE" },
            dark: { bg: "#010114", surf: "#020224", txt: "#CAF0F8", mut: "#90E0EF", bord: "#1E3A8A" }
        }
    },
    {
        name: "Soft Boho", base: "stone",
        c: { p: "#F28482", s: "#84A59D", a: "#F6BD60", suc: "#6B8F71", war: "#E09F3E", err: "#D16666" },
        ui: {
            light: { bg: "#FDFBF7", surf: "#FFFFFF", txt: "#5D4A4A", mut: "#998B8B", bord: "#EBE0D6" },
            dark: { bg: "#262020", surf: "#332B2B", txt: "#F7EDE2", mut: "#B5A39E", bord: "#4D4040" }
        }
    },
    {
        name: "Unicorn Candy", base: "neutral",
        c: { p: "#FF99C8", s: "#A9DEF9", a: "#FCF6BD", suc: "#70D6FF", war: "#FFD670", err: "#FF9770" },
        ui: {
            light: { bg: "#FFFAFC", surf: "#FFFFFF", txt: "#5D4E6D", mut: "#9E94A8", bord: "#E4C1F9" },
            dark: { bg: "#19102E", surf: "#251A40", txt: "#FF99C8", mut: "#A9DEF9", bord: "#5E4B8B" }
        }
    },
    {
        name: "Jewel Sunset", base: "zinc",
        c: { p: "#5F0F40", s: "#9A031E", a: "#FB8B24", suc: "#00897B", war: "#FBBF24", err: "#E11D48" },
        ui: {
            light: { bg: "#FFFCFE", surf: "#FFFFFF", txt: "#420A2C", mut: "#9A031E", bord: "#EAD4D8" },
            dark: { bg: "#1A0510", surf: "#2D0A1E", txt: "#FFD9E8", mut: "#FB8B24", bord: "#5F0F40" }
        }
    },
    {
        name: "Modern Retro", base: "slate",
        c: { p: "#264653", s: "#2A9D8F", a: "#E76F51", suc: "#2A9D8F", war: "#E9C46A", err: "#E76F51" },
        ui: {
            light: { bg: "#F4F1DE", surf: "#FFFFFF", txt: "#264653", mut: "#5F7D8B", bord: "#D1D5DB" },
            dark: { bg: "#101F25", surf: "#1D333C", txt: "#F4F1DE", mut: "#81B29A", bord: "#2F5766" }
        }
    },
    {
        name: "Primary Pop", base: "gray",
        c: { p: "#003049", s: "#D62828", a: "#FCBF49", suc: "#003049", war: "#FCBF49", err: "#D62828" },
        ui: {
            light: { bg: "#FFFFFF", surf: "#F2F4F6", txt: "#003049", mut: "#5B7C8C", bord: "#EAE2B7" },
            dark: { bg: "#02121C", surf: "#003049", txt: "#FCBF49", mut: "#EAE2B7", bord: "#D62828" }
        }
    },
    {
        name: "Terra Calm", base: "sand",
        c: { p: "#3D405B", s: "#E07A5F", a: "#81B29A", suc: "#81B29A", war: "#F2CC8F", err: "#E07A5F" },
        ui: {
            light: { bg: "#FDFCF8", surf: "#FFFFFF", txt: "#3D405B", mut: "#9FA2B2", bord: "#F2CC8F" },
            dark: { bg: "#15161F", surf: "#1E202E", txt: "#F4F1DE", mut: "#81B29A", bord: "#3D405B" }
        }
    }
];

let currentMode = 'light';
let currentTheme = themes[0];
const root = document.documentElement.style;

function init() {
    // 1. Theme Init
    const themeSel = document.getElementById('themeSelect');
    themes.forEach((t, i) => {
        const opt = document.createElement('option');
        opt.value = i; opt.textContent = `${i + 1}. ${t.name}`;
        themeSel.appendChild(opt);
    });
    themeSel.addEventListener('change', (e) => updateTheme(themes[e.target.value]));

    // 2. UI Init (EventListeners)
    bindVar('fontSelect', '--font-main');
    bindVar('lhSelect', '--line-height');
    bindVar('radiusSelect', '--radius');
    bindVar('shadowSelect', '--base-shadow');
    bindVar('borderSelect', '--border-width');
    bindVar('widthSelect', '--container-width');
    bindVar('spacingSelect', '--spacing');
    bindVar('speedSelect', '--motion-speed');
    bindVar('themeSpeedSelect', '--theme-speed');
    bindVar('curveSelect', '--motion-curve');
    bindVar('clickSelect', '--active-scale');

    // Font Weight Split Logic
    document.getElementById('fwSelect').addEventListener('change', (e) => {
        const [base, bold] = e.target.value.split(',');
        root.setProperty('--fw-base', base);
        root.setProperty('--fw-bold', bold);
    });

    // Interaction Logic
    document.getElementById('hoverStyleSelect').addEventListener('change', updateHoverStyle);
    document.getElementById('hoverMoveSelect').addEventListener('change', updateHoverMove);

    // Init View
    updateTheme(themes[0]);
}

function bindVar(id, cssVar) {
    document.getElementById(id).addEventListener('change', (e) => root.setProperty(cssVar, e.target.value));
}

function updateHoverStyle(e) {
    const val = e.target.value;
    root.setProperty('--hover-opacity', val === 'dim' ? '0.8' : '1');
    root.setProperty('--hover-shadow', val === 'shadow' ? '0 10px 15px -3px rgba(0,0,0,0.15)' : 'var(--base-shadow)');
}

function updateHoverMove(e) {
    const val = e.target.value;
    root.setProperty('--hover-ty', val === 'lift' ? '-4px' : '0px');
    root.setProperty('--hover-scale', val === 'scale' ? '1.05' : '1');
}

function setMode(mode) {
    currentMode = mode;
    document.documentElement.setAttribute('data-theme', mode);
    document.getElementById('btnLight').classList.toggle('active', mode === 'light');
    document.getElementById('btnDark').classList.toggle('active', mode === 'dark');
    updateTheme(currentTheme);
}

function updateTheme(theme) {
    currentTheme = theme;

    // Brand Colors
    root.setProperty('--primary', theme.c.p);
    root.setProperty('--secondary', theme.c.s);
    root.setProperty('--accent', theme.c.a);
    root.setProperty('--success', theme.c.suc);
    root.setProperty('--warning', theme.c.war);
    root.setProperty('--error', theme.c.err);

    // UI Colors (Based on Custom Data)
    // If ui data missing (fallback), use colors array (not implemented here for brevity but assumed all have ui)
    const ui = currentMode === 'light' ? theme.ui.light : theme.ui.dark;

    root.setProperty('--bg-main', ui.bg);
    root.setProperty('--bg-surface', ui.surf);
    root.setProperty('--text-main', ui.txt);
    root.setProperty('--text-muted', ui.mut);
    root.setProperty('--border-color', ui.bord);

    // Update Swatches
    const sw = document.querySelector('.swatches-container');
    sw.innerHTML = '';
    Object.values(theme.c).forEach(c => {
        const d = document.createElement('div');
        d.style.cssText = `flex:1; border-radius:4px; background:${c}`;
        sw.appendChild(d);
    });
}

// Helper: Get text from select
const getText = (id) => document.getElementById(id).options[document.getElementById(id).selectedIndex].text;
const getVal = (id) => document.getElementById(id).value;

function copyFullBlueprint() {
    const t = currentTheme;

    // UI Colors Extraction
    const L = t.ui.light;
    const D = t.ui.dark;

    const colorTable = `### 4.1. 컬러 팔레트 (Color Tokens)

[선택된 테마]: ${t.name} / [Base Scale]: ${t.base}

| 용도 (Token) | 라이트 HEX | 라이트 설명 | 다크 HEX | 다크 설명 | 비고 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 기본 (Primary) | ${t.c.p} | Brand | ${t.c.p} | Brand | 브랜드 메인 |
| 보조 (Secondary) | ${t.c.s} | Secondary | ${t.c.s} | Secondary | 서브 강조 |
| 포인트 (Accent) | ${t.c.a} | Accent | ${t.c.a} | Accent | 링크, 포커스 |
| 배경 (Background) | ${L.bg} | Light Bg | ${D.bg} | Dark Bg | 전체 배경 |
| 표면 (Surface) | ${L.surf} | Light Surf | ${D.surf} | Dark Surf | 카드 배경 |
| 테두리 (Border) | ${L.bord} | Light Bord | ${D.bord} | Dark Bord | 구분선 |
| 텍스트 (Main) | ${L.txt} | Light Txt | ${D.txt} | Dark Txt | 기본 본문 |
| 텍스트 (Muted) | ${L.mut} | Light Mut | ${D.mut} | Dark Mut | 보조 텍스트 |
| 성공 (Success) | ${t.c.suc} | Success | ${t.c.suc} | Success | 성공 상태 |
| 경고 (Warning) | ${t.c.war} | Warning | ${t.c.war} | Warning | 경고 상태 |
| 오류 (Error) | ${t.c.err} | Error | ${t.c.err} | Error | 에러 상태 |`;

    const uiTable = `### 4.2. UI 스타일 및 구조 (Shape & Typography)

| 구분 | 선택된 스타일 (Vibe) | 적용 값 (Class / Value) |
| :--- | :--- | :--- |
| 폰트 패밀리 | ${getText('fontSelect')} | ${getVal('fontSelect')} |
| 줄 간격 | ${getText('lhSelect')} | ${getVal('lhSelect')} |
| 글자 굵기 | ${getText('fwSelect')} | ${getVal('fwSelect')} |
| 둥글기 (Radius) | ${getText('radiusSelect')} | ${getVal('radiusSelect')} |
| 그림자 (Shadow) | ${getText('shadowSelect')} | ${getVal('shadowSelect')} |
| 테두리 두께 | ${getText('borderSelect')} | ${getVal('borderSelect')} |
| 컨테이너 폭 | ${getText('widthSelect')} | ${getVal('widthSelect')} |
| 여백 밀도 | ${getText('spacingSelect')} | ${getVal('spacingSelect')} |
| 인터랙션 속도 | ${getText('speedSelect')} | ${getVal('speedSelect')} |
| 테마 전환 속도 | ${getText('themeSpeedSelect')} | ${getVal('themeSpeedSelect')} |
| 움직임 곡선 | ${getText('curveSelect')} | ${getVal('curveSelect')} |
| 호버 스타일 | ${getText('hoverStyleSelect')} | ${getVal('hoverStyleSelect')} |
| 호버 움직임 | ${getText('hoverMoveSelect')} | ${getVal('hoverMoveSelect')} |
| 클릭 효과 | ${getText('clickSelect')} | ${getVal('clickSelect')} |
| 사운드 | ${getText('soundSelect')} | ${getVal('soundSelect')} |`;

    const fullText = colorTable + "\n\n" + uiTable;
    navigator.clipboard.writeText(fullText).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = "✅ 설계도 복사 완료!";
        setTimeout(() => btn.textContent = originalText, 2000);
    });
}

// Initialize app
init();