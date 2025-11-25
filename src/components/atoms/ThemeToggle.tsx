import { Moon, Sun } from 'lucide-react'
import { useAppSelector, useAppDispatch } from '@/stores/useReduxHook' // Import hooks Redux
import { toggleTheme } from '@/stores/themeSlice' // Import action kita
import { Button } from './button/Button'

function ThemeToggle() {
    // 1. Ambil tema saat ini dari Redux store
    const theme = useAppSelector((state) => state.theme.currentTheme)
    // 2. Dapatkan dispatch function
    const dispatch = useAppDispatch()
    // 3. Fungsi toggle sekarang hanya mendispatch action
    const handleToggle = () => {
        dispatch(toggleTheme())
    }

    return (
        <Button
            variant="ghost"
            onClick={handleToggle}
            className="h-9 w-9 rounded-full"
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </Button>
    )
}

export default ThemeToggle
