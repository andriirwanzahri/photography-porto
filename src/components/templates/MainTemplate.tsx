import type { ReactNode } from 'react'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

interface MainTemplateProps {
    children: ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => {
    return (
        <div className="dark:bg-background flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}

export default MainTemplate
