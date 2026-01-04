import { loginWithGoogle } from '@/stores/authThunk'
import { useAppDispatch, useAppSelector } from '@/stores/useReduxHook'

import { useNavigate } from 'react-router'
import { Button } from '@/components/atoms/button/Button'
import Input from '@/components/atoms/Input'
import AuthTemplate from '@/components/templates/AuthTemplate'

function Login() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { loading } = useAppSelector((state) => state.auth)

    const signInWithGoogle = async () => {
        try {
            const result = await dispatch(loginWithGoogle()).unwrap()

            if (!result.isProfileComplete) {
                navigate('/')
            } else {
                navigate(-1)
            }
        } catch (err) {
            console.error('Failed to login with Google:', err)
        }
    }

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

            <Button
                disabled={loading}
                variant="outline"
                onClick={signInWithGoogle}
            >
                {loading ? 'Signing in...' : 'Sign In with Google'}
            </Button>
        </AuthTemplate>
    )
}

export default Login
