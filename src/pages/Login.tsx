import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, googleProvider } from '@/services/firebase.ts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Button } from '@/components/atoms/button/Button'
import Input from '@/components/atoms/Input'
import AuthTemplate from '@/components/templates/AuthTemplate'

function Login() {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider)
        } catch (error) {
            console.error('Error during sign in:', error)
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/')
            console.log('Current user:', user)
        }
    }, [user, navigate])

    return (
        <AuthTemplate>
            <form action="" className="mb-8 flex flex-col gap-4">
                <h1 className="mb-4 text-center text-2xl font-bold">
                    Login Page
                </h1>
                <Input
                    label="Email:"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <Input
                    label="Password:"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                />
                <Button type="submit" variant="default">
                    Login
                </Button>
            </form>

            <Button variant="outline" onClick={signInWithGoogle}>
                Sign In with Google
            </Button>
        </AuthTemplate>
    )
}

export default Login
