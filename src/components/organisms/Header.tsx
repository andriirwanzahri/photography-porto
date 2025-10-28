import { Link } from 'react-router'
import Navigation from '../molecules/Navigation'
import { Logo } from '../atoms/Logo'
import ThemeToggle from '../atoms/ThemeToggle'
import { Menu } from 'lucide-react'
import { useState } from 'react'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-gray-200/10 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-gray-700/10 dark:bg-gray-900/60 dark:text-white">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <Link to="/">
                        <Logo />
                    </Link>

                    <Navigation />

                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            // variant="ghost"
                            // size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
