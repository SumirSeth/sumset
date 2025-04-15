import { ref } from 'vue'

type Theme = 'light' | 'dark' | 'auto' | 'nord'

const THEME_KEY = 'theme-preference'

const theme = ref<Theme>('auto')

function getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(t: Theme) {
    const resolved = t === 'auto' ? getSystemTheme() : t
    document.documentElement.setAttribute('data-theme', resolved)
    theme.value = t
}

function setTheme(t: Theme) {
    localStorage.setItem(THEME_KEY, t)
    applyTheme(t)
}

function initTheme() {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null
    applyTheme(saved ?? 'auto')

  // Watch for OS changes if using "auto"
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (theme.value === 'auto') applyTheme('auto')
    })
}

if (import.meta.client) initTheme()


export function useTheme() {
    return {
        theme,
        setTheme,
    }
}