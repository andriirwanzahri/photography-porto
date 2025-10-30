import { ArrowRight } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import HeroImage from '@/assets/HeroPrewed.jpg'

function Home() {
    return (
        <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
            <img
                src={HeroImage}
                alt="Covered Bridge"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="from-background/70 via-background/80 to-background/70 bg-gradient dark: absolute inset-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 space-y-6 px-4 text-center"
            >
                <h1 className="font-serif text-5xl font-bold md:text-7xl">
                    Capturing Life's
                    <br />
                    <span className="text-accent">Beautiful Moments</span>
                </h1>
                <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
                    Professional photography services for weddings, portraits,
                    and special events. Creating timeless memories with artistic
                    vision.
                </p>
                <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                    <Link to="/gallery">
                        <Button size="lg" className="gap-2">
                            Lihat Portofolio <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Link to="/booking">
                        <Button size="lg" variant="outline">
                            Pesan Sekarang
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}

export default Home
