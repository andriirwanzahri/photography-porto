import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

function ThemeToggle() {
    const [theme, setTheme] = useState<string>(() => {
        // Ambil tema dari localStorage atau deteksi OS
        if (typeof window !== 'undefined') {
            if (localStorage.theme === 'dark') return 'dark'
            if (localStorage.theme === 'light') return 'light'
            if (window.matchMedia('(prefers-color-scheme: dark)').matches)
                return 'dark'
        }
        return 'light'
    })

    // Set kelas pada <html> saat theme berubah
    useEffect(() => {
        const root = window.document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            root.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [theme])

    // Fungsi toggle
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <button onClick={toggleTheme} className="h-9 w-9">
            {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </button>
    )
}

export default ThemeToggle
