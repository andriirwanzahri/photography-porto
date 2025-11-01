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
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/client/:clientName" element={<ClientDetail />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App
