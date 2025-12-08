import { ArrowLeft } from 'lucide-react'
import { Button } from '../atoms/button/Button'
import { useNavigate } from 'react-router'
import Footer from '../organisms/Footer'

function ClientDetailTemplate({
    children,
    title = 'Client Detail',
}: {
    children: React.ReactNode
    title?: string
}) {
    const Navigate = useNavigate()

    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-background/40 absolute top-6 right-0 left-0 z-10 mx-4 flex items-center gap-4 rounded-full px-4 py-2 shadow-md backdrop-blur-md md:mx-8 lg:mx-16">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => Navigate(-1)}
                    className="rounded-full"
                >
                    <ArrowLeft className="h-5 w-5" />
                </Button>

                <h1 className="text-lg font-semibold">{title}</h1>
            </header>
            {children}
            <Footer />
        </div>
    )
}

export default ClientDetailTemplate
