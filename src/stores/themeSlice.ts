import { createSlice } from '@reduxjs/toolkit'

type ThemeMode = 'light' | 'dark'
// 1. definisikan tipe untuk store theme
interface ThemeState {
    currentTheme: ThemeMode
}

// 2. State awal
// Fungsi helper untuk mendapatkan tema awal dari localStorage/OS
const getInitialTheme = (): ThemeMode => {
    if (typeof window === 'undefined') return 'light' // Default di server/SSR

    if (localStorage.theme === 'dark') return 'dark'
    if (localStorage.theme === 'light') return 'light'
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'

    return 'light'
}
const initialState: ThemeState = {
    currentTheme: getInitialTheme(),
}

// 3. Buat Reducer
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        // Reducer ini manangani logic toggele
        toggleTheme: (state) => {
            state.currentTheme =
                state.currentTheme === 'light' ? 'dark' : 'light'
        },

        // reducer lain
    },
})

// export action creator
export const { toggleTheme } = themeSlice.actions

// export reducer untuk store utama
export default themeSlice.reducer
