import { loginWithGoogle } from '@/stores/authThunk'
import { useAppDispatch, useAppSelector } from '@/stores/useReduxHook'
import { Image } from '@imagekit/react'

import { useNavigate } from 'react-router'
import { Button } from '@/components/atoms/button/Button'
import Input from '@/components/atoms/Input'
import AuthTemplate from '@/components/templates/AuthTemplate'

import GoogleIcon from '@/assets/google.png'
import Spinner from '@/components/atoms/Spinner'

const url = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log(e.target)
    }
    console.log('URL Endpoint:', url)

    return (
        <AuthTemplate>
            <Image
                urlEndpoint={url}
                src="default-image.jpg"
                width={150}
                height={150}
                alt="Picture of the author"
            />
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
                <Button type="submit" onClick={handleSubmit} variant="default">
                    Login
                </Button>
            </form>

            <Button
                disabled={loading}
                variant="outline"
                onClick={signInWithGoogle}
                className="flex items-center justify-center gap-2"
            >
                {loading ? (
                    <>
                        <Spinner className="size-5" /> Loading...
                    </>
                ) : (
                    <>
                        <img
                            src={GoogleIcon}
                            alt="Google Icon"
                            className="mr-2 h-5 w-5"
                        />
                        Sign In with Google
                    </>
                )}
            </Button>
        </AuthTemplate>
    )
}

export default Login
