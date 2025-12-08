import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Css imports
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './index.css'

import App from './App.tsx'
import { store } from '@/stores/store.ts'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()
// This code is only for TypeScript
declare global {
    interface Window {
        __TANSTACK_QUERY_CLIENT__: import('@tanstack/query-core').QueryClient
    }
}

// This code is for all users
window.__TANSTACK_QUERY_CLIENT__ = queryClient

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <App />
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </StrictMode>
)
