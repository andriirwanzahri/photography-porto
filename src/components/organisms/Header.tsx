import { Link, useLocation } from 'react-router'
import Navigation from '../molecules/Navigation'
import { Logo } from '../atoms/Logo'
import ThemeToggle from '../atoms/ThemeToggle'
import { Menu } from 'lucide-react'
import { Activity, useState } from 'react'
import useThemeToggle from '@/hook/useThemeToggle'
import { cn } from '@/utils/cn'
import { Button } from '@/components/atoms/button/Button'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
]

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    useThemeToggle()
    const location = useLocation()

    return (
        <header className="bg-secondary/70 border-/10 border-sm sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 dark:border-gray-700/10 dark:bg-gray-900/60 dark:text-white">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/">
                    <Logo />
                </Link>

                <Navigation />

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </div>
            <Activity mode={mobileMenuOpen ? 'visible' : 'hidden'}>
                <div className="border-border bg-background/90 absolute w-full border-t p-4 md:hidden">
                    <nav className="flex flex-col items-center gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-amber-400',
                                    location.pathname === item.path &&
                                        'text-amber-400'
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </Activity>
        </header>
    )
}

export default Header
