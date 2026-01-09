import { Link, useLocation } from 'react-router'
import Navigation from '../molecules/Navigation'
import { Logo } from '../atoms/Logo'
import ThemeToggle from '../atoms/ThemeToggle'
import { Menu, LogOutIcon } from 'lucide-react'
import { Activity, useState } from 'react'
import useThemeToggle from '@/hook/useThemeToggle'
import { cn } from '@/utils/cn'
import { Button } from '@/components/atoms/button/Button'
import { CircleUser } from 'lucide-react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/services/firebase'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

// import { seeder } from '@/services/seeder'

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
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const photoURL = user?.photoURL || 'https://via.placeholder.com/150'

    console.log(user)

    const handleLogout = () => {
        toast(
            (t) => (
                <div className="space-y-3 p-4">
                    <LogOutIcon className="mx-auto h-4 w-4 text-red-500" />
                    <h3 className="font-normal">
                        Apakah kamu yakin ingin logout?
                    </h3>
                    <div className="grid grid-cols-2 justify-center gap-2">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="rounded border px-3 py-1 text-sm"
                        >
                            Tidak
                        </button>

                        <button
                            onClick={async () => {
                                try {
                                    await auth.signOut()
                                    toast.success('Logout berhasil 👋')
                                    navigate('/login')
                                } catch {
                                    toast.error('Logout gagal')
                                }
                                toast.dismiss(t.id)
                            }}
                            className="rounded bg-red-500 px-3 py-1 text-sm text-white"
                        >
                            Ya
                        </button>
                    </div>
                </div>
            ),
            { duration: 5000 }
        )
    }

    return (
        <header className="bg-secondary/70 border-/10 border-sm sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 dark:border-gray-700/10 dark:bg-gray-900/60 dark:text-white">
            <div className="container flex h-16 items-center justify-between">
                <Link to="/">
                    <Logo />
                </Link>

                <Navigation />

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    {user ? (
                        <>
                            <Button variant="link" onClick={handleLogout}>
                                Logout
                            </Button>

                            <p>{user?.displayName}</p>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                            >
                                <img
                                    src={photoURL}
                                    alt=""
                                    className="h-8 w-8 rounded-full border-2 border-amber-400 object-cover"
                                />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="link" asChild>
                                <Link to="/login">Login</Link>
                            </Button>
                            <Button variant="ghost" size="icon">
                                <CircleUser className="h-5 w-5" />
                            </Button>
                        </>
                    )}

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                    {/* <button
                        onClick={seeder}
                        className="rounded bg-black px-4 py-2 text-white"
                    >
                        Upload Data ke Firestore
                    </button> */}
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
