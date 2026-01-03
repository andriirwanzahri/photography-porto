import { Link, useLocation } from 'react-router'
import { cn } from '../../utils/cn'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/services/firebase'
import { Button } from '../atoms/button/Button'

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Booking', path: '/booking' },
]
function Navigation() {
    const location = useLocation()
    const [user] = useAuthState(auth)
    console.log(user?.displayName)

    return (
        <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                        'relative text-sm font-medium transition-colors hover:text-amber-400',
                        'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-amber-400 after:transition-transform',
                        'hover:after:scale-x-100',
                        location.pathname === item.path &&
                            'text-amber-400 after:scale-x-100'
                    )}
                >
                    {item.name}
                </Link>
            ))}
            {user ? (
                <>
                    <Button
                        variant="link"
                        onClick={async () => {
                            await auth.signOut()
                        }}
                    >
                        Logout
                    </Button>

                    <h1>{user?.displayName}</h1>
                </>
            ) : (
                <Link
                    to="/login"
                    className={cn(
                        'relative text-sm font-medium transition-colors hover:text-amber-400',
                        'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-amber-400 after:transition-transform',
                        'hover:after:scale-x-100'
                    )}
                >
                    Login
                </Link>
            )}
        </nav>
    )
}

export default Navigation
