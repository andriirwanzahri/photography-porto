import { Link } from 'react-router'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'

import HeroImage from '@/assets/01.jpg'
import Profile from '@/assets/02.jpg'
import { Button } from '@/components/atoms/button/Button'
import MotionInView from '@/components/motion/MotionInView'
import { MotionH1 } from '@/components/motion/MotionH1'
import {
    scaleIn,
    visibleVariansFadeIn,
    visibleVariansFadeInX,
} from '@/utils/variantsMotion'
import { MotionP } from '@/components/motion/MotionP'

const Hero = () => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 300], [0, 120])
    return (
        <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden">
            <MotionInView
                style={{ y }}
                className="absolute inset-0 z-0 will-change-transform"
            >
                <img
                    src={HeroImage}
                    alt="Wedding Photography Background"
                    className="h-full w-full object-cover"
                />
                <div className="from-background via-background to-background/10 dark:from-background dark:via-background dark:to-background/10 absolute inset-0 bg-linear-to-t from-10% via-30% to-90%" />
            </MotionInView>

            <div className="relative z-10 container flex h-screen items-center">
                <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
                    <MotionInView
                        variants={visibleVariansFadeInX(-50, 0.8, 0.5)}
                        className="order-2 flex flex-col items-center space-y-6 text-center lg:order-1 lg:items-start lg:text-left"
                    >
                        <MotionH1
                            variants={visibleVariansFadeIn(-20, 0.6, 0.7)}
                            className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                        >
                            Capturing Life&apos;s
                            <br />
                            <span className="text-accent">
                                Beautiful Moments
                            </span>
                        </MotionH1>

                        <MotionP
                            variants={visibleVariansFadeIn(-20, 0.6, 0.9)}
                            className="text-muted-foreground max-w-md text-base sm:text-lg md:text-xl"
                        >
                            Professional photography services for weddings,
                            portraits, and special events. Creating timeless
                            memories with artistic vision and passion.
                        </MotionP>

                        <MotionInView
                            variants={visibleVariansFadeIn(-20, 0.6, 1.1)}
                            className="flex flex-col justify-center gap-4 pt-6 sm:flex-row lg:justify-start"
                        >
                            <Link to="/gallery">
                                <Button
                                    size="lg"
                                    className="shadow-elegant w-full gap-2 sm:w-auto"
                                >
                                    Lihat Portofolio
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link to="/booking">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="shadow-elegant w-full sm:w-auto"
                                >
                                    Pesan Sekarang
                                </Button>
                            </Link>
                        </MotionInView>
                    </MotionInView>

                    <MotionInView
                        variants={visibleVariansFadeInX(50, 0.8)}
                        className="order-1 flex items-center justify-center lg:order-2"
                    >
                        <MotionInView variants={scaleIn} className="relative">
                            <motion.div
                                whileHover={{
                                    scale: [1, 1.05, 1],
                                    transition: {
                                        duration: 0.5,
                                        times: [0, 0.5, 1],
                                    },
                                }}
                                className="shadow-elegant-lg h-72 w-52 overflow-hidden rounded-2xl sm:h-80 sm:w-64 md:h-96 md:w-80 lg:h-112 lg:w-88"
                            >
                                <img
                                    src={Profile}
                                    alt="Professional Photographer Wedding"
                                    className="h-full w-full object-cover"
                                />
                            </motion.div>
                        </MotionInView>
                    </MotionInView>
                </div>
            </div>
        </section>
    )
}

export default Hero
