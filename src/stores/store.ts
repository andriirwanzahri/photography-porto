// import redux toolkit yang di perlukan
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import authReducer from './authSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        // reducer lain
        auth: authReducer,
    },
})

// definisikan rootState dan appDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
