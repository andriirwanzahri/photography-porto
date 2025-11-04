import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import HeroImage from '@/assets/03.jpg'
import AnimatedCounter from '@/components/atoms/AnimatedCounter'

const stats = [
    { number: 500, label: 'Projects' },
    { number: 10, label: 'Years' },
    { number: 300, label: 'Clients' },
]

function AboutIntro() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, {
        once: true,
        margin: '-100px',
        amount: 0.3, // Trigger when 30% of the section is visible
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    }
    const itemsCounter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    }

    return (
        <motion.section className="relative h-[50vh] w-full overflow-hidden">
            <motion.div
                className="relative h-full w-full"
                // style={{
                //     backgroundImage: `url(${HeroImage})`,
                //     backgroundSize: 'cover',
                //     backgroundPosition: 'bottom',
                // }}
            >
                <motion.div className="absolute inset-0 bg-linear-to-t from-gray-900/10 to-gray-900" />
            </motion.div>
            <motion.div
                ref={sectionRef}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="absolute inset-0 z-10 flex items-center justify-center"
            >
                <div className="container px-4 text-center text-white">
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl font-bold md:text-5xl"
                    >
                        About Us
                    </motion.h1>
                    <motion.div
                        variants={itemVariants}
                        className="grid w-full grid-cols-7 grid-rows-1 items-center gap-6 pt-4 sm:gap-8"
                    >
                        <div className="col-span-2"></div>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={itemsCounter}
                                className="text-center"
                            >
                                <AnimatedCounter
                                    to={stat.number}
                                    label={stat.label}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default AboutIntro
