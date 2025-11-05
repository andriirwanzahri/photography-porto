import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import AnimatedCounter from '@/components/atoms/AnimatedCounter'
import { visibleVariansH1 } from '@/utils/variantsMotion'

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
        amount: 0.5,
    })

    return (
        <motion.section className="relative h-screen w-full overflow-hidden">
            <motion.div className="relative h-full w-full">
                <motion.div className="absolute inset-0 bg-linear-to-t from-gray-100/10 to-gray-100 dark:from-gray-900/10 dark:to-gray-900" />
            </motion.div>
            <motion.div
                ref={sectionRef}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="absolute inset-0 z-10 flex"
            >
                <div className="text-primary container pt-20 text-center">
                    <motion.h1
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        variants={visibleVariansH1}
                        className="text-4xl font-bold md:text-5xl"
                    >
                        About Us
                    </motion.h1>
                    <motion.div className="grid w-full grid-cols-7 grid-rows-1 items-center gap-6 pt-4 sm:gap-8">
                        <div className="col-span-2"></div>
                        {stats.map((stat, i) => (
                            <motion.div key={i} className="text-center">
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
