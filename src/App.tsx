import { Route, Routes } from 'react-router'

// component imports
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

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
        <div className="flex min-h-screen flex-col dark:bg-gray-950">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route
                        path="/client/:clientName"
                        element={<ClientDetail />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App
