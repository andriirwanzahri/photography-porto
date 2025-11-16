import AboutIntro from '@/components/organisms/home/AboutIntro'
import FaqSection from '@/components/organisms/home/Faq'
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
            <FaqSection />
        </MainTemplate>
    )
}

export default Home
