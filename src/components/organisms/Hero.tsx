import { Link } from 'react-router'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'

import HeroImage from '@/assets/01.jpg'
import Profile from '@/assets/02.jpg'
import { Button } from '@/components/atoms/button/Button'
import AnimatedCounter from '@/components/atoms/AnimatedCounter'

const stats = [
    { number: 500, label: 'Projects' },
    { number: 10, label: 'Years' },
    { number: 300, label: 'Clients' },
]

const Hero = () => {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 300], [0, 120])
    return (
        <section className="bg-background relative flex min-h-screen items-center justify-center overflow-hidden">
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 will-change-transform"
            >
                <img
                    src={HeroImage}
                    alt="Wedding Photography Background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-bl from-cyan-500/10 to-gray-100 dark:from-amber-500/10 dark:to-gray-900" />
            </motion.div>

            <div className="relative z-10 flex h-screen items-center">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="order-2 flex flex-col items-center space-y-6 text-center lg:order-1 lg:items-start lg:text-left"
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                            >
                                Capturing Life&apos;s
                                <br />
                                <span className="text-accent">
                                    Beautiful Moments
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="text-muted-foreground max-w-md text-base sm:text-lg md:text-xl"
                            >
                                Professional photography services for weddings,
                                portraits, and special events. Creating timeless
                                memories with artistic vision and passion.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="grid w-full max-w-md grid-cols-3 gap-6 pt-4 sm:gap-8"
                            >
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        className="text-center lg:text-left"
                                    >
                                        <AnimatedCounter
                                            target={stat.number}
                                            label={stat.label}
                                        />
                                    </div>
                                ))}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.1 }}
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
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 flex items-center justify-center lg:order-2"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
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
                                        alt="Professional Photographer"
                                        className="h-full w-full object-cover"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
