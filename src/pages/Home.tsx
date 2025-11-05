import AboutIntro from '@/components/organisms/home/AboutIntro'
import Hero from '@/components/organisms/home/Hero'
import MainTemplate from '@/components/templates/MainTemplate'

function Home() {
    return (
        <MainTemplate>
            <Hero />
            <AboutIntro />
        </MainTemplate>
    )
}

export default Home
