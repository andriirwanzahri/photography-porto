import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import AnimatedCounter from '@/components/atoms/AnimatedCounter'
import { visibleVariansH1 } from '@/utils/variantsMotion'

import HeroImage from '@/assets/01.jpg'

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
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative container mx-auto overflow-hidden py-20 md:py-28"
        >
            <motion.div className="flex">
                <div className="text-primary fade-in-section is-visible container mb-16">
                    <motion.h1
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        variants={visibleVariansH1}
                        className="mb-6 text-center text-4xl font-bold md:text-5xl"
                    >
                        Tentang Kami
                    </motion.h1>
                    <motion.p
                        variants={visibleVariansH1}
                        className="mx-auto max-w-3xl pb-5 text-center text-[20px]"
                    >
                        Ajay Photography adalah studio fotografi profesional
                        yang berdedikasi untuk mengabadikan momen berharga dalam
                        hidup Anda dengan sentuhan seni dan keindahan.
                    </motion.p>
                    <motion.div className="grid w-full grid-cols-7 grid-rows-1 items-center gap-6 pt-4 sm:gap-8">
                        <div className="col-span-2"></div>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={visibleVariansH1}
                                className="text-center"
                            >
                                <AnimatedCounter
                                    to={stat.number}
                                    label={stat.label}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="relative mt-20 flex justify-center">
                        <div className="mx-auto">
                            <div className="fade-in-section is-visible grid items-center gap-12 md:grid-cols-2">
                                {/* // video document tasi */}
                                <div className="aspect-4/5 max-h-[350px] w-full max-w-[650px] overflow-hidden rounded-lg">
                                    <img
                                        src={HeroImage}
                                        alt="Wedding Photography Background"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                {/* // Pengalaman */}
                                <motion.div className="">
                                    <motion.h2 className="mb-6 text-3xl font-bold">
                                        Pengalaman & Keahlian
                                    </motion.h2>
                                    <motion.p className="text-primary/80 mb-8">
                                        Dengan pengalaman lebih dari 5 tahun
                                        dalam industri fotografi pernikahan dan
                                        acara spesial, kami memahami betapa
                                        pentingnya mengabadikan momen berharga
                                        dalam hidup Anda. Tim fotografer
                                        profesional kami tidak hanya fokus pada
                                        teknik fotografi yang sempurna, tetapi
                                        juga menciptakan suasana yang nyaman
                                        sehingga momen alami dapat tertangkap
                                        dengan indah.
                                    </motion.p>
                                    <motion.p className="text-primary/80 mb-8">
                                        Kami percaya bahwa setiap pasangan
                                        memiliki cerita unik, dan misi kami
                                        adalah mengabadikan cerita tersebut
                                        melalui lensa kami dengan pendekatan
                                        yang artistik namun tetap autentik.
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* casd */}
            <div className="fade-in-section is-visible mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card hover:shadow-gold p-6 transition-shadow duration-300">
                    dana
                </div>
            </div>
        </motion.section>
    )
}

export default AboutIntro
