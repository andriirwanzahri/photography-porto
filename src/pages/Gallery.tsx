import MainTemplate from '@/components/templates/MainTemplate'
import { motion } from 'motion/react'
import HeroImage from '@/assets/01.jpg'
import { Calendar, MapPin } from 'lucide-react'

function Gallery() {
    return (
        <MainTemplate>
            {/* <section className="relative overflow-hidden px-4 py-20 text-center">
                <div className="from-primary/5 via-secondary/10 to-primary/5 absolute inset-0 bg-linear-to-br" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 container mx-auto"
                >
                    <img
                        src={HeroImage}
                        alt="Wedding Photography Background"
                        className="absolute inset-0 h-[50vh] w-full object-cover"
                    />

                    <h1 className="from-foreground to-foreground/70 mb-4 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                        Our Gallery
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
                        Explore our collection of stunning photographs
                    </p>
                </motion.div>
            </section> */}
            <div className="relative h-[50vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={HeroImage}
                        alt="COVER"
                        className="h-full w-full object-cover"
                    />
                    <div className="to-background absolute inset-0 bg-linear-to-b from-black/60 via-black/40"></div>
                </div>
                <div className="relative flex h-full items-end">
                    <div className="container pb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-6xl">
                                Gallery Photo
                            </h1>
                            <div className="flex flex-wrap gap-4 text-white/90">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-5 w-5" />
                                    <span className="text-lg">12</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5" />
                                    <span className="text-lg">Lhoksukon</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* <Hero /> */}
        </MainTemplate>
    )
}

export default Gallery
