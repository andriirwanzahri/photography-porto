import HeroImage from '@/assets/01.jpg'
import { MotionH1 } from '@/components/motion/MotionH1'
import MotionInView from '@/components/motion/MotionInView'
import { MotionP } from '@/components/motion/MotionP'
import { fadeIn, fadeUp, staggerContainer } from '@/utils/variantsMotion'
const Hero = () => {
    return (
        <div className="relative h-[50vh] overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={HeroImage}
                    alt="COVER"
                    className="h-full w-full object-cover"
                />
                <div className="from-background/60 via-background/80 to-background absolute inset-0 bg-linear-to-b"></div>
            </div>

            <div className="relative flex h-full items-center">
                <div className="container pb-12">
                    <MotionInView
                        variants={staggerContainer}
                        className="text-center"
                    >
                        <MotionH1
                            variants={fadeUp}
                            className="text-primary mb-4 font-serif text-5xl font-bold md:text-6xl"
                        >
                            Sari & Dedi
                        </MotionH1>
                        <div className="text-primary/50 flex flex-wrap justify-center gap-4">
                            <MotionP variants={fadeIn} className="text-2xl">
                                Explore our collection of stunning photographs
                            </MotionP>
                        </div>
                    </MotionInView>
                </div>
            </div>
        </div>
    )
}

export default Hero
