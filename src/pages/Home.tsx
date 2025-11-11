import AboutIntro from '@/components/organisms/home/AboutIntro'
import FeaturedWork from '@/components/organisms/home/FeaturedWork'
import Hero from '@/components/organisms/home/Hero'
import ServicesSection from '@/components/organisms/home/ServiceSection'
import MainTemplate from '@/components/templates/MainTemplate'

function Home() {
    return (
        <MainTemplate>
            <Hero />
            <AboutIntro />
            <ServicesSection />
            <FeaturedWork />
        </MainTemplate>
    )
}

export default Home
