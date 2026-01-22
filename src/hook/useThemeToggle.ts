// src/hooks/useThemeToggle.ts (atau useTheme.ts jika Anda menamainya demikian)
import { useEffect } from 'react'
import { useAppSelector } from '@/stores/useReduxHook'

/**
 * Custom hook yang mengembalikan fungsi untuk mengubah tema.
 */
const useThemeToggle = () => {
    // Ambil tema dari store Redux
    const theme = useAppSelector((state) => state.theme.currentTheme)

    // Gunakan useEffect untuk melakukan manipulasi DOM dan localStorage
    useEffect(() => {
        if (typeof window === 'undefined') return

        const root = window.document.documentElement

        if (theme === 'dark') {
            root.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            root.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [theme])
}

export default useThemeToggle
