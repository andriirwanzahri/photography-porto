import AboutIntro from '@/components/organisms/home/AboutIntro'
import Contact from '@/components/organisms/home/Contact'
import FaqSection from '@/components/organisms/home/Faq'
import FeaturedWork from '@/components/organisms/home/FeaturedWork'
import Hero from '@/components/organisms/home/Hero'
import ServicesSection from '@/components/organisms/home/ServiceSection'
import Testimoni from '@/components/organisms/home/Testimoni'
import MainTemplate from '@/components/templates/MainTemplate'

function Home() {
    return (
        <MainTemplate>
            <Hero />
            <AboutIntro />
            <ServicesSection />
            <FeaturedWork />
            <FaqSection />
            <Testimoni />
            <Contact />
        </MainTemplate>
    )
}

export default Home
