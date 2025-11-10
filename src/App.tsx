import { Route, Routes } from 'react-router'

// pages imports
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Services from './pages/Services'
import Booking from './pages/Booking'
import ClientDetail from './pages/ClientDetail'
import NotFound from './pages/NotFound'

function App() {
    return (
        <div className="[&::-webkit-scrollbar-thumb]:bg-secondary-foreground max-h-screen overflow-y-auto [&::-webkit-scrollbar]:w-2 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/client/:clientName" element={<ClientDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
