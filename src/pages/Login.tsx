import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, googleProvider } from '@/services/firebase.ts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

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
        <div className="flex min-h-screen flex-col items-center justify-center">
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}

export default Login
