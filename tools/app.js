// --- 색상 스케일 기본값 ---
const colors = {
    slate: { 50: 'oklch(0.987 0.027 27.7deg)', 200: 'oklch(0.932 0.018 20.0deg)', 500: 'oklch(0.557 0.021 234.9deg)', 700: 'oklch(0.373 0.025 228.8deg)', 900: 'oklch(0.209 0.031 228.9deg)', 950: 'oklch(0.129 0.038 222.1deg)' },
    stone: { 50: 'oklch(0.988 0.031 29.9deg)', 200: 'oklch(0.926 0.031 28.9deg)', 500: 'oklch(0.555 0.028 30.7deg)', 700: 'oklch(0.375 0.019 32.9deg)', 900: 'oklch(0.217 0.012 30.5deg)', 950: 'oklch(0.147 0.008 28.9deg)' },
    gray: { 50: 'oklch(0.988 0.029 28.3deg)', 200: 'oklch(0.931 0.024 24.9deg)', 500: 'oklch(0.553 0.007 283.8deg)', 700: 'oklch(0.374 0.017 235.1deg)', 900: 'oklch(0.211 0.023 230.8deg)', 950: 'oklch(0.130 0.023 225.0deg)' },
    zinc: { 50: 'oklch(0.988 0.030 28.9deg)', 200: 'oklch(0.923 0.026 25.2deg)', 500: 'oklch(0.554 0.011 358.8deg)', 700: 'oklch(0.372 0.007 345.6deg)', 900: 'oklch(0.211 0.004 353.7deg)', 950: 'oklch(0.141 0.003 347.4deg)' },
    neutral: { 50: 'oklch(0.988 0.030 28.9deg)', 200: 'oklch(0.925 0.028 28.9deg)', 500: 'oklch(0.557 0.017 28.9deg)', 700: 'oklch(0.373 0.011 28.9deg)', 900: 'oklch(0.205 0.006 28.9deg)', 950: 'oklch(0.145 0.004 28.9deg)' },
    sand: { 50: 'oklch(0.995 0.032 29.4deg)', 200: 'oklch(0.926 0.031 28.9deg)', 500: 'oklch(0.555 0.028 30.7deg)', 700: 'oklch(0.375 0.019 32.9deg)', 900: 'oklch(0.217 0.012 30.5deg)', 950: 'oklch(0.147 0.008 28.9deg)' },
    sage: { 50: 'oklch(0.976 0.029 33.7deg)', 200: 'oklch(0.868 0.027 66.8deg)', 500: 'oklch(0.601 0.043 110.1deg)', 700: 'oklch(0.412 0.029 109.5deg)', 900: 'oklch(0.279 0.022 111.9deg)', 950: 'oklch(0.194 0.024 119.8deg)' },
    olive: { 50: 'oklch(0.985 0.036 38.0deg)', 200: 'oklch(0.917 0.059 57.9deg)', 500: 'oklch(0.722 0.085 82.9deg)', 700: 'oklch(0.492 0.059 84.4deg)', 900: 'oklch(0.310 0.028 71.1deg)', 950: 'oklch(0.204 0.022 87.4deg)' },
    sky: { 50: 'oklch(0.980 0.018 26.3deg)', 200: 'oklch(0.905 0.027 210.3deg)', 500: 'oklch(0.688 0.137 211.6deg)', 700: 'oklch(0.502 0.114 213.7deg)', 900: 'oklch(0.393 0.078 213.3deg)', 950: 'oklch(0.200 0.032 212.1deg)' }
};

// --- 21개 테마 전체 정의 (UI 오버라이드 포함) ---
const themes = [
    {
        name: "Earth & Forest", base: "stone",
        c: { p: "oklch(0.482 0.035 99.0deg)", s: "oklch(0.510 0.048 74.5deg)", a: "oklch(0.610 0.133 31.9deg)", suc: "oklch(0.482 0.035 99.0deg)", war: "oklch(0.753 0.117 37.0deg)", err: "oklch(0.610 0.133 31.9deg)" },
        ui: {
            light: { bg: "oklch(0.984 0.051 43.5deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.313 0.029 89.1deg)", mut: "oklch(0.510 0.048 74.5deg)", bord: "oklch(0.919 0.052 55.6deg)" },
            dark: { bg: "oklch(0.174 0.013 83.1deg)", surf: "oklch(0.237 0.015 82.7deg)", txt: "oklch(0.984 0.051 43.5deg)", mut: "oklch(0.741 0.043 66.8deg)", bord: "oklch(0.343 0.028 89.1deg)" }
        }
    },
    {
        name: "Deep Ocean Sunset", base: "slate",
        c: { p: "oklch(0.295 0.057 211.5deg)", s: "oklch(0.652 0.091 202.4deg)", a: "oklch(0.734 0.179 31.1deg)", suc: "oklch(0.652 0.091 202.4deg)", war: "oklch(0.826 0.152 43.8deg)", err: "oklch(0.734 0.179 31.1deg)" },
        ui: {
            light: { bg: "oklch(0.980 0.018 26.3deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.295 0.057 211.5deg)", mut: "oklch(0.534 0.044 208.6deg)", bord: "oklch(0.895 0.027 223.8deg)" },
            dark: { bg: "oklch(0.199 0.038 211.7deg)", surf: "oklch(0.295 0.057 211.5deg)", txt: "oklch(0.964 0.009 61.7deg)", mut: "oklch(0.811 0.048 208.2deg)", bord: "oklch(0.401 0.062 208.3deg)" }
        }
    },
    {
        name: "Retro Americana", base: "sand",
        c: { p: "oklch(0.516 0.196 16.3deg)", s: "oklch(0.295 0.061 212.0deg)", a: "oklch(0.668 0.055 213.3deg)", suc: "oklch(0.295 0.061 212.0deg)", war: "oklch(0.666 0.156 32.2deg)", err: "oklch(0.360 0.143 17.6deg)" },
        ui: {
            light: { bg: "oklch(0.961 0.058 39.7deg)", surf: "oklch(0.991 0.041 35.7deg)", txt: "oklch(0.295 0.061 212.0deg)", mut: "oklch(0.521 0.015 225.2deg)", bord: "oklch(0.882 0.061 39.3deg)" },
            dark: { bg: "oklch(0.201 0.044 213.0deg)", surf: "oklch(0.295 0.061 212.0deg)", txt: "oklch(0.961 0.058 39.7deg)", mut: "oklch(0.668 0.055 213.3deg)", bord: "oklch(0.402 0.029 215.8deg)" }
        }
    },
    {
        name: "Vintage Botanical", base: "sage",
        c: { p: "oklch(0.468 0.037 121.5deg)", s: "oklch(0.633 0.059 99.0deg)", a: "oklch(0.558 0.151 15.6deg)", suc: "oklch(0.468 0.037 121.5deg)", war: "oklch(0.790 0.084 82.5deg)", err: "oklch(0.558 0.151 15.6deg)" },
        ui: {
            light: { bg: "oklch(0.970 0.030 35.6deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.284 0.017 104.7deg)", mut: "oklch(0.552 0.027 97.6deg)", bord: "oklch(0.901 0.026 43.6deg)" },
            dark: { bg: "oklch(0.206 0.011 101.6deg)", surf: "oklch(0.272 0.016 104.2deg)", txt: "oklch(0.937 0.051 52.8deg)", mut: "oklch(0.694 0.025 80.2deg)", bord: "oklch(0.344 0.019 103.2deg)" }
        }
    },
    {
        name: "Pastel Dream", base: "gray",
        c: { p: "oklch(0.841 0.095 4.5deg)", s: "oklch(0.895 0.027 223.8deg)", a: "oklch(0.806 0.035 332.7deg)", suc: "oklch(0.824 0.060 208.6deg)", war: "oklch(0.975 0.096 61.5deg)", err: "oklch(0.847 0.102 18.6deg)" },
        ui: {
            light: { bg: "oklch(0.990 0.034 24.3deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.389 0.017 335.3deg)", mut: "oklch(0.559 0.024 349.4deg)", bord: "oklch(0.943 0.033 7.6deg)" },
            dark: { bg: "oklch(0.213 0.014 275.9deg)", surf: "oklch(0.259 0.017 275.8deg)", txt: "oklch(0.971 0.041 19.1deg)", mut: "oklch(0.753 0.025 343.9deg)", bord: "oklch(0.352 0.022 283.6deg)" }
        }
    },
    {
        name: "Corporate Navy", base: "slate",
        c: { p: "oklch(0.219 0.029 220.5deg)", s: "oklch(0.270 0.031 228.7deg)", a: "oklch(0.462 0.041 223.6deg)", suc: "oklch(0.699 0.076 149.5deg)", war: "oklch(0.769 0.157 38.2deg)", err: "oklch(0.637 0.205 16.6deg)" },
        ui: {
            light: { bg: "oklch(0.987 0.027 27.7deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.209 0.031 228.9deg)", mut: "oklch(0.557 0.021 234.9deg)", bord: "oklch(0.932 0.018 20.0deg)" },
            dark: { bg: "oklch(0.129 0.038 222.1deg)", surf: "oklch(0.209 0.031 228.9deg)", txt: "oklch(0.971 0.023 26.2deg)", mut: "oklch(0.713 0.012 250.6deg)", bord: "oklch(0.281 0.026 228.5deg)" }
        }
    },
    {
        name: "Organic Beige", base: "stone",
        c: { p: "oklch(0.817 0.057 29.8deg)", s: "oklch(0.853 0.042 32.6deg)", a: "oklch(0.884 0.047 31.5deg)", suc: "oklch(0.532 0.031 100.8deg)", war: "oklch(0.751 0.098 35.5deg)", err: "oklch(0.558 0.151 15.6deg)" },
        ui: {
            light: { bg: "oklch(0.994 0.034 32.1deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.381 0.028 30.0deg)", mut: "oklch(0.532 0.031 32.7deg)", bord: "oklch(0.925 0.028 28.9deg)" },
            dark: { bg: "oklch(0.217 0.012 30.5deg)", surf: "oklch(0.269 0.014 25.7deg)", txt: "oklch(0.926 0.031 28.9deg)", mut: "oklch(0.718 0.030 29.9deg)", bord: "oklch(0.375 0.019 32.9deg)" }
        }
    },
    {
        name: "Matcha & Wood", base: "olive",
        c: { p: "oklch(0.858 0.048 58.9deg)", s: "oklch(0.937 0.051 52.8deg)", a: "oklch(0.751 0.098 35.5deg)", suc: "oklch(0.510 0.048 74.5deg)", war: "oklch(0.751 0.098 35.5deg)", err: "oklch(0.558 0.151 15.6deg)" },
        ui: {
            light: { bg: "oklch(0.951 0.061 41.7deg)", surf: "oklch(0.984 0.051 43.5deg)", txt: "oklch(0.385 0.029 36.8deg)", mut: "oklch(0.525 0.030 37.3deg)", bord: "oklch(0.751 0.098 35.5deg)" },
            dark: { bg: "oklch(0.214 0.010 58.3deg)", surf: "oklch(0.274 0.013 69.8deg)", txt: "oklch(0.937 0.051 52.8deg)", mut: "oklch(0.858 0.048 58.9deg)", bord: "oklch(0.373 0.017 58.3deg)" }
        }
    },
    {
        name: "Red & Steel", base: "zinc",
        c: { p: "oklch(0.329 0.058 222.4deg)", s: "oklch(0.563 0.063 213.4deg)", a: "oklch(0.612 0.203 15.0deg)", suc: "oklch(0.634 0.061 173.8deg)", war: "oklch(0.781 0.137 32.4deg)", err: "oklch(0.612 0.203 15.0deg)" },
        ui: {
            light: { bg: "oklch(0.978 0.031 45.8deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.329 0.058 222.4deg)", mut: "oklch(0.523 0.057 213.8deg)", bord: "oklch(0.858 0.022 174.4deg)" },
            dark: { bg: "oklch(0.186 0.021 226.0deg)", surf: "oklch(0.259 0.034 224.4deg)", txt: "oklch(0.978 0.031 45.8deg)", mut: "oklch(0.858 0.022 174.4deg)", bord: "oklch(0.392 0.059 222.5deg)" }
        }
    },
    {
        name: "Midnight Yellow", base: "neutral",
        c: { p: "oklch(0.849 0.147 47.6deg)", s: "oklch(0.330 0.101 216.3deg)", a: "oklch(0.886 0.141 53.9deg)", suc: "oklch(0.886 0.141 53.9deg)", war: "oklch(0.769 0.157 38.2deg)", err: "oklch(0.649 0.232 17.0deg)" },
        ui: {
            light: { bg: "oklch(1.000 0.031 28.9deg)", surf: "oklch(0.985 0.028 28.3deg)", txt: "oklch(0.131 0.033 214.9deg)", mut: "oklch(0.330 0.101 216.3deg)", bord: "oklch(0.232 0.072 216.3deg)" },
            dark: { bg: "oklch(0.000 0.000 0.0deg)", surf: "oklch(0.232 0.072 216.3deg)", txt: "oklch(0.849 0.147 47.6deg)", mut: "oklch(0.713 0.012 250.6deg)", bord: "oklch(0.373 0.025 228.8deg)" }
        }
    },
    {
        name: "Deep Green Forest", base: "sage",
        c: { p: "oklch(0.400 0.018 130.3deg)", s: "oklch(0.563 0.038 107.8deg)", a: "oklch(0.881 0.036 36.3deg)", suc: "oklch(0.436 0.027 116.1deg)", war: "oklch(0.836 0.109 47.3deg)", err: "oklch(0.558 0.151 15.6deg)" },
        ui: {
            light: { bg: "oklch(0.971 0.030 34.0deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.400 0.018 130.3deg)", mut: "oklch(0.509 0.028 128.6deg)", bord: "oklch(0.881 0.036 36.3deg)" },
            dark: { bg: "oklch(0.240 0.006 95.2deg)", surf: "oklch(0.291 0.009 93.0deg)", txt: "oklch(0.881 0.036 36.3deg)", mut: "oklch(0.741 0.043 66.8deg)", bord: "oklch(0.436 0.027 116.1deg)" }
        }
    },
    {
        name: "Fresh Lime", base: "gray",
        c: { p: "oklch(0.260 0.024 115.9deg)", s: "oklch(0.524 0.057 98.8deg)", a: "oklch(0.942 0.082 63.3deg)", suc: "oklch(0.524 0.057 98.8deg)", war: "oklch(0.942 0.082 63.3deg)", err: "oklch(0.538 0.214 17.6deg)" },
        ui: {
            light: { bg: "oklch(1.000 0.031 28.9deg)", surf: "oklch(0.983 0.031 33.9deg)", txt: "oklch(0.260 0.024 115.9deg)", mut: "oklch(0.524 0.057 98.8deg)", bord: "oklch(0.699 0.068 79.7deg)" },
            dark: { bg: "oklch(0.147 0.011 112.0deg)", surf: "oklch(0.260 0.024 115.9deg)", txt: "oklch(1.000 0.031 28.9deg)", mut: "oklch(0.699 0.068 79.7deg)", bord: "oklch(0.418 0.039 111.4deg)" }
        }
    },
    {
        name: "Classic Leather", base: "stone",
        c: { p: "oklch(0.307 0.054 29.2deg)", s: "oklch(0.527 0.110 30.2deg)", a: "oklch(0.933 0.089 45.9deg)", suc: "oklch(0.497 0.050 85.5deg)", war: "oklch(0.751 0.098 35.5deg)", err: "oklch(0.468 0.150 16.4deg)" },
        ui: {
            light: { bg: "oklch(0.980 0.036 31.9deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.307 0.054 29.2deg)", mut: "oklch(0.527 0.110 30.2deg)", bord: "oklch(0.884 0.047 31.5deg)" },
            dark: { bg: "oklch(0.207 0.024 28.3deg)", surf: "oklch(0.256 0.033 27.5deg)", txt: "oklch(0.933 0.089 45.9deg)", mut: "oklch(0.817 0.057 29.8deg)", bord: "oklch(0.383 0.067 31.5deg)" }
        }
    },
    {
        name: "Retro Floral", base: "sand",
        c: { p: "oklch(0.429 0.075 10.5deg)", s: "oklch(0.833 0.053 54.4deg)", a: "oklch(0.671 0.156 19.6deg)", suc: "oklch(0.497 0.050 85.5deg)", war: "oklch(0.751 0.098 35.5deg)", err: "oklch(0.468 0.150 16.4deg)" },
        ui: {
            light: { bg: "oklch(0.997 0.036 33.2deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.348 0.040 16.8deg)", mut: "oklch(0.520 0.042 9.5deg)", bord: "oklch(0.903 0.043 31.8deg)" },
            dark: { bg: "oklch(0.209 0.021 17.4deg)", surf: "oklch(0.253 0.027 17.1deg)", txt: "oklch(0.938 0.045 33.6deg)", mut: "oklch(0.833 0.053 54.4deg)", bord: "oklch(0.360 0.044 16.6deg)" }
        }
    },
    {
        name: "Ocean Depths", base: "sky",
        c: { p: "oklch(0.216 0.248 203.8deg)", s: "oklch(0.549 0.125 213.6deg)", a: "oklch(0.934 0.012 178.0deg)", suc: "oklch(0.715 0.109 202.5deg)", war: "oklch(0.882 0.124 46.8deg)", err: "oklch(0.712 0.183 16.0deg)" },
        ui: {
            light: { bg: "oklch(0.980 0.018 26.3deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.216 0.248 203.8deg)", mut: "oklch(0.498 0.041 220.9deg)", bord: "oklch(0.895 0.027 223.8deg)" },
            dark: { bg: "oklch(0.097 0.063 214.1deg)", surf: "oklch(0.128 0.094 212.0deg)", txt: "oklch(0.934 0.012 178.0deg)", mut: "oklch(0.864 0.052 194.8deg)", bord: "oklch(0.380 0.136 220.3deg)" }
        }
    },
    {
        name: "Soft Boho", base: "stone",
        c: { p: "oklch(0.735 0.142 16.4deg)", s: "oklch(0.697 0.015 131.1deg)", a: "oklch(0.833 0.126 42.0deg)", suc: "oklch(0.617 0.029 106.7deg)", war: "oklch(0.749 0.131 40.0deg)", err: "oklch(0.639 0.140 15.8deg)" },
        ui: {
            light: { bg: "oklch(0.992 0.035 31.6deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.430 0.036 18.3deg)", mut: "oklch(0.540 0.031 25.2deg)", bord: "oklch(0.915 0.044 32.0deg)" },
            dark: { bg: "oklch(0.251 0.016 20.2deg)", surf: "oklch(0.299 0.019 19.9deg)", txt: "oklch(0.954 0.045 33.0deg)", mut: "oklch(0.732 0.043 25.6deg)", bord: "oklch(0.386 0.027 19.2deg)" }
        }
    },
    {
        name: "Unicorn Candy", base: "neutral",
        c: { p: "oklch(0.803 0.113 359.2deg)", s: "oklch(0.877 0.039 209.7deg)", a: "oklch(0.967 0.073 52.0deg)", suc: "oklch(0.834 0.088 206.8deg)", war: "oklch(0.893 0.119 47.6deg)", err: "oklch(0.778 0.149 25.0deg)" },
        ui: {
            light: { bg: "oklch(0.993 0.033 24.7deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.453 0.025 304.4deg)", mut: "oklch(0.516 0.026 342.2deg)", bord: "oklch(0.862 0.045 322.4deg)" },
            dark: { bg: "oklch(0.204 0.034 254.9deg)", surf: "oklch(0.254 0.040 255.2deg)", txt: "oklch(0.803 0.113 359.2deg)", mut: "oklch(0.877 0.039 209.7deg)", bord: "oklch(0.464 0.055 262.9deg)" }
        }
    },
    {
        name: "Jewel Sunset", base: "zinc",
        c: { p: "oklch(0.333 0.092 353.0deg)", s: "oklch(0.434 0.167 14.8deg)", a: "oklch(0.745 0.172 31.3deg)", suc: "oklch(0.569 0.062 174.2deg)", war: "oklch(0.838 0.143 46.5deg)", err: "oklch(0.586 0.211 12.4deg)" },
        ui: {
            light: { bg: "oklch(0.997 0.032 25.4deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.263 0.069 352.8deg)", mut: "oklch(0.434 0.167 14.8deg)", bord: "oklch(0.892 0.046 18.2deg)" },
            dark: { bg: "oklch(0.160 0.033 354.8deg)", surf: "oklch(0.214 0.048 353.7deg)", txt: "oklch(0.924 0.057 9.5deg)", mut: "oklch(0.745 0.172 31.3deg)", bord: "oklch(0.333 0.092 353.0deg)" }
        }
    },
    {
        name: "Modern Retro", base: "slate",
        c: { p: "oklch(0.377 0.033 206.5deg)", s: "oklch(0.634 0.061 173.8deg)", a: "oklch(0.679 0.163 21.9deg)", suc: "oklch(0.634 0.061 173.8deg)", war: "oklch(0.836 0.109 47.3deg)", err: "oklch(0.679 0.163 21.9deg)" },
        ui: {
            light: { bg: "oklch(0.958 0.045 41.1deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.377 0.033 206.5deg)", mut: "oklch(0.504 0.026 212.1deg)", bord: "oklch(0.875 0.019 22.1deg)" },
            dark: { bg: "oklch(0.230 0.017 205.9deg)", surf: "oklch(0.308 0.023 206.3deg)", txt: "oklch(0.958 0.045 41.1deg)", mut: "oklch(0.725 0.028 127.5deg)", bord: "oklch(0.436 0.039 205.4deg)" }
        }
    },
    {
        name: "Primary Pop", base: "gray",
        c: { p: "oklch(0.295 0.061 212.0deg)", s: "oklch(0.568 0.204 17.0deg)", a: "oklch(0.841 0.137 43.8deg)", suc: "oklch(0.295 0.061 212.0deg)", war: "oklch(0.841 0.137 43.8deg)", err: "oklch(0.568 0.204 17.0deg)" },
        ui: {
            light: { bg: "oklch(1.000 0.031 28.9deg)", surf: "oklch(0.969 0.026 27.7deg)", txt: "oklch(0.295 0.061 212.0deg)", mut: "oklch(0.570 0.027 208.7deg)", bord: "oklch(0.911 0.064 48.2deg)" },
            dark: { bg: "oklch(0.174 0.028 211.2deg)", surf: "oklch(0.295 0.061 212.0deg)", txt: "oklch(0.841 0.137 43.8deg)", mut: "oklch(0.911 0.064 48.2deg)", bord: "oklch(0.568 0.204 17.0deg)" }
        }
    },
    {
        name: "Terra Calm", base: "sand",
        c: { p: "oklch(0.382 0.026 250.1deg)", s: "oklch(0.688 0.143 22.5deg)", a: "oklch(0.725 0.028 127.5deg)", suc: "oklch(0.725 0.028 127.5deg)", war: "oklch(0.866 0.097 41.5deg)", err: "oklch(0.688 0.143 22.5deg)" },
        ui: {
            light: { bg: "oklch(0.994 0.034 32.1deg)", surf: "oklch(1.000 0.031 28.9deg)", txt: "oklch(0.382 0.026 250.1deg)", mut: "oklch(0.512 0.007 295.1deg)", bord: "oklch(0.866 0.097 41.5deg)" },
            dark: { bg: "oklch(0.204 0.009 260.8deg)", surf: "oklch(0.249 0.014 251.6deg)", txt: "oklch(0.958 0.045 41.1deg)", mut: "oklch(0.725 0.028 127.5deg)", bord: "oklch(0.382 0.026 250.1deg)" }
        }
    }
];

let currentMode = 'light';
let currentTheme = themes[0];
const root = document.documentElement.style;

function init() {
    setupThemeSelect();
    bindUiControls();
    bindFontWeight();
    bindInteractionControls();
    updateTheme(themes[0]);
}

function bindVar(id, cssVar) {
    document.getElementById(id).addEventListener('change', (e) => root.setProperty(cssVar, e.target.value));
}

function setupThemeSelect() {
    const themeSel = document.getElementById('themeSelect');
    themes.forEach((t, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `${i + 1}. ${t.name}`;
        themeSel.appendChild(opt);
    });
    themeSel.addEventListener('change', (e) => updateTheme(themes[e.target.value]));
}

function bindUiControls() {
    const bindings = [
        ['fontSelect', '--font-main'],
        ['lhSelect', '--line-height'],
        ['radiusSelect', '--radius'],
        ['shadowSelect', '--base-shadow'],
        ['borderSelect', '--border-width'],
        ['widthSelect', '--container-width'],
        ['spacingSelect', '--spacing'],
        ['speedSelect', '--motion-speed'],
        ['themeSpeedSelect', '--theme-speed'],
        ['curveSelect', '--motion-curve'],
        ['clickSelect', '--active-scale'],
    ];
    bindings.forEach(([id, variable]) => bindVar(id, variable));
}

function bindFontWeight() {
    const fw = document.getElementById('fwSelect');
    fw.addEventListener('change', (e) => {
        const [base, bold] = e.target.value.split(',');
        root.setProperty('--fw-base', base);
        root.setProperty('--fw-bold', bold);
    });
}

function bindInteractionControls() {
    document.getElementById('hoverStyleSelect').addEventListener('change', updateHoverStyle);
    document.getElementById('hoverMoveSelect').addEventListener('change', updateHoverMove);
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

    // 브랜드 색상 토큰 적용
    root.setProperty('--primary', theme.c.p);
    root.setProperty('--secondary', theme.c.s);
    root.setProperty('--accent', theme.c.a);
    root.setProperty('--success', theme.c.suc);
    root.setProperty('--warning', theme.c.war);
    root.setProperty('--error', theme.c.err);

    // UI 색상 (테마별 라이트/다크 정의 사용)
    const ui = currentMode === 'light' ? theme.ui.light : theme.ui.dark;

    root.setProperty('--bg-main', ui.bg);
    root.setProperty('--bg-surface', ui.surf);
    root.setProperty('--text-main', ui.txt);
    root.setProperty('--text-muted', ui.mut);
    root.setProperty('--border-color', ui.bord);

    // 스와치 미리보기 업데이트
    const sw = document.querySelector('.swatches-container');
    sw.innerHTML = '';
    Object.values(theme.c).forEach(c => {
        const d = document.createElement('div');
        d.style.cssText = `flex:1; border-radius:4px; background:${c}`;
        sw.appendChild(d);
    });
}

// 셀렉트 박스에서 현재 표시 문자열/값을 추출
const getText = (id) => document.getElementById(id).options[document.getElementById(id).selectedIndex].text;
const getVal = (id) => document.getElementById(id).value;

function copyFullBlueprint() {
    const fullText = buildBlueprintText(currentTheme);
    navigator.clipboard.writeText(fullText).then(showCopyToast);
}

function buildBlueprintText(theme) {
    return `${buildColorTable(theme)}\n\n${buildUiTable()}`;
}

function buildColorTable(theme) {
    const { light: L, dark: D } = theme.ui;
    const rows = [
        ['기본 (Primary)', theme.c.p, 'Brand', theme.c.p, 'Brand', '브랜드 메인'],
        ['보조 (Secondary)', theme.c.s, 'Secondary', theme.c.s, 'Secondary', '서브 강조'],
        ['포인트 (Accent)', theme.c.a, 'Accent', theme.c.a, 'Accent', '링크, 포커스'],
        ['배경 (Background)', L.bg, 'Light Bg', D.bg, 'Dark Bg', '전체 배경'],
        ['표면 (Surface)', L.surf, 'Light Surf', D.surf, 'Dark Surf', '카드 배경'],
        ['테두리 (Border)', L.bord, 'Light Bord', D.bord, 'Dark Bord', '구분선'],
        ['텍스트 (Main)', L.txt, 'Light Txt', D.txt, 'Dark Txt', '기본 본문'],
        ['텍스트 (Muted)', L.mut, 'Light Mut', D.mut, 'Dark Mut', '보조 텍스트'],
        ['성공 (Success)', theme.c.suc, 'Success', theme.c.suc, 'Success', '성공 상태'],
        ['경고 (Warning)', theme.c.war, 'Warning', theme.c.war, 'Warning', '경고 상태'],
        ['오류 (Error)', theme.c.err, 'Error', theme.c.err, 'Error', '에러 상태']
    ];

    const lines = rows.map(([label, lx, lDesc, dx, dDesc, note]) =>
        `| ${label} | ${lx} | ${formatOklch(lx)} | ${lDesc} | ${dx} | ${formatOklch(dx)} | ${dDesc} | ${note} |`
    ).join('\n');

    return `### 4.1. 컬러 팔레트 (Color Tokens)

[선택된 테마]: ${theme.name} / [Base Scale]: ${theme.base}

| 용도 (Token) | 라이트 색상 | 라이트 OKLCH | 라이트 설명 | 다크 색상 | 다크 OKLCH | 다크 설명 | 비고 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
${lines}`;
}

function buildUiTable() {
    return `### 4.2. UI 스타일 및 구조 (Shape & Typography)

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
}

function formatOklch(color) {
    if (typeof color === 'string' && color.trim().toLowerCase().startsWith('oklch')) {
        return color;
    }
    const oklch = hexToOklch(color);
    const l = oklch.l.toFixed(3);
    const c = oklch.c.toFixed(3);
    const h = oklch.h.toFixed(1);
    return `oklch(${l} ${c} ${h}deg)`;
}

// OKLCH 변환 파이프라인 (hex → sRGB → XYZ → OKLab → OKLCH)
function hexToOklch(hex) {
    if (typeof hex === 'string' && hex.trim().toLowerCase().startsWith('oklch')) {
        const m = hex.match(/oklch\\(([^)]+)\\)/i);
        if (m) {
            const [l, c, h] = m[1].replace(/deg/ig, '').split(/\\s+/).filter(Boolean).map(Number);
            return { l, c, h };
        }
    }
    const rgb = hexToRgb(hex);
    const xyz = rgbToXyz(rgb);
    const oklab = xyzToOklab(xyz);
    return oklabToOklch(oklab);
}

function hexToRgb(hex) {
    if (typeof hex !== 'string') return { r: 0, g: 0, b: 0 };
    const h = hex.trim().replace('#', '');
    if (!/^[0-9a-fA-F]{3,6}$/.test(h)) return { r: 0, g: 0, b: 0 };
    const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
    return {
        r: parseInt(full.slice(0, 2), 16) / 255,
        g: parseInt(full.slice(2, 4), 16) / 255,
        b: parseInt(full.slice(4, 6), 16) / 255
    };
}

function srgbToLinear(v) {
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function rgbToXyz({ r, g, b }) {
    const R = srgbToLinear(r);
    const G = srgbToLinear(g);
    const B = srgbToLinear(b);
    return {
        x: 0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B,
        y: 0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B,
        z: 0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B
    };
}

function xyzToOklab({ x, y, z }) {
    const l = Math.cbrt(0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z);
    const m = Math.cbrt(0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z);
    const s = Math.cbrt(0.0482003018 * x + 0.2643662691 * y + 0.6338517070 * z);
    return {
        L: 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
        a: 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
        b: 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
    };
}

function oklabToOklch({ L, a, b }) {
    const c = Math.sqrt(a * a + b * b);
    const h = (Math.atan2(b, a) * 180 / Math.PI + 360) % 360;
    return { l: L, c, h };
}

function showCopyToast() {
    const btn = document.querySelector('.copy-btn');
    const originalText = btn.textContent;
    btn.textContent = "✅ 설계도 복사 완료!";
    setTimeout(() => btn.textContent = originalText, 2000);
}

// 초기 진입점
init();
