import { Route, Routes } from 'react-router'
import { lazy, Suspense } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'

// Skeletons
import HeroSkeleton from './components/skeletons/HeroSkeleton'

// pages imports
const Home = lazy(() => import('./pages/Home'))
const Gallery = lazy(() => import('./pages/Gallery'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Booking = lazy(() => import('./pages/Booking'))
const ClientDetail = lazy(() => import('./pages/ClientDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
    return (
        <div className="[&::-webkit-scrollbar-thumb]:bg-secondary-foreground max-h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700">
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<HeroSkeleton />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <Suspense fallback={<HeroSkeleton />}>
                            <Gallery />
                        </Suspense>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Suspense fallback={<HeroSkeleton />}>
                            <About />
                        </Suspense>
                    }
                />
                <Route
                    path="/services"
                    element={
                        <Suspense fallback={<HeroSkeleton />}>
                            <Services />
                        </Suspense>
                    }
                />
                <Route
                    path="/booking"
                    element={
                        <Suspense fallback={<HeroSkeleton />}>
                            <Booking />
                        </Suspense>
                    }
                />
                <Route
                    path="/client/:clientName"
                    element={
                        <Suspense fallback={<HeroSkeleton />}>
                            <ClientDetail />
                        </Suspense>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
