import { motion } from 'motion/react'
import AnimatedCounter from '@/components/atoms/AnimatedCounter'
import {
    cardSlideInUp,
    fadeIn,
    fadeUp,
    slideInLeft,
    slideInRight,
    staggerContainer,
} from '@/utils/variantsMotion'

import HeroImage from '@/assets/01.jpg'
import MotionInView from '@/components/motion/MotionInView'
import { MotionH1 } from '@/components/motion/MotionH1'
import { MotionP } from '@/components/motion/MotionP'
import { Camera, FileText, Image, MapPin } from 'lucide-react'
import { Link } from 'react-router'
import { Button } from '@/components/atoms/button/Button'
import MotionSection from '@/components/motion/MotionSection'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const stats = [
    { number: 500, label: 'Projects' },
    { number: 10, label: 'Years' },
    { number: 300, label: 'Clients' },
    { number: 300, label: 'Clients' },
]

const features = [
    {
        icon: <Camera className="text-primary h-10 w-10" />,
        title: 'Unlimited Shoot',
        description: 'Ambil foto sebanyak mungkin tanpa batasan.',
    },
    {
        icon: <FileText className="text-primary h-10 w-10" />,
        title: 'File Digital Lengkap',
        description:
            'Semua hasil foto diberikan dalam Flashdisk atau Google Drive.',
    },
    {
        icon: <Image className="text-primary h-10 w-10" />,
        title: 'Album Eksklusif',
        description:
            'Pilihan cetak dengan mini album, fullpress album, dan frame premium.',
    },
    {
        icon: <MapPin className="text-primary h-10 w-10" />,
        title: 'Lokasi Fleksibel',
        description: 'Bisa memilih 1 atau lebih lokasi untuk pemotretan.',
    },
]

function AboutIntro() {
    return (
        <MotionSection>
            <MotionInView
                variants={staggerContainer}
                className="text-primary mb-16 flex flex-col items-center"
            >
                <MotionH1
                    variants={fadeUp}
                    className="mb-6 text-center text-4xl font-bold md:text-5xl"
                >
                    Tentang Kami
                </MotionH1>
                <MotionP
                    variants={fadeIn}
                    className="text-primary/80 mx-auto max-w-3xl pb-5 text-center text-lg"
                >
                    Ajay Photography adalah studio fotografi profesional yang
                    berdedikasi untuk mengabadikan momen berharga dalam hidup
                    Anda dengan sentuhan seni dan keindahan.
                </MotionP>
            </MotionInView>

            {/* Stat element */}
            <motion.div
                variants={staggerContainer}
                className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 md:mt-16"
            >
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="flex flex-col items-center justify-center text-center"
                    >
                        <AnimatedCounter to={stat.number} label={stat.label} />
                    </motion.div>
                ))}
            </motion.div>

            {/* about intro section */}
            <motion.div
                variants={staggerContainer}
                className="relative mt-20 grid items-center gap-12 md:grid-cols-2"
            >
                {/* // video document tasi */}
                <MotionInView
                    variants={slideInLeft}
                    className="aspect-4/5 max-h-[350px] w-full max-w-[650px] overflow-hidden rounded-lg"
                >
                    {/* <img
                        src={HeroImage}
                        alt="Wedding Photography Background"
                        className="h-full w-full object-cover"
                    /> */}
                    <LazyLoadImage
                        src={HeroImage}
                        alt="Wedding Photography Background"
                        className="h-full w-full object-cover"
                        effect="blur"
                    />
                </MotionInView>
                {/* // Pengalaman */}
                <motion.div variants={staggerContainer}>
                    <MotionH1
                        variants={slideInRight}
                        className="mb-6 text-2xl font-bold"
                    >
                        Pengalaman & Keahlian
                    </MotionH1>
                    <MotionP
                        variants={slideInRight}
                        className="text-primary/80 mb-8"
                    >
                        Dengan pengalaman lebih dari 5 tahun dalam industri
                        fotografi pernikahan dan acara spesial, kami memahami
                        betapa pentingnya mengabadikan momen berharga dalam
                        hidup Anda. Tim fotografer profesional kami tidak hanya
                        fokus pada teknik fotografi yang sempurna, tetapi juga
                        menciptakan suasana yang nyaman sehingga momen alami
                        dapat tertangkap dengan indah.
                    </MotionP>
                    <MotionP
                        variants={slideInRight}
                        className="text-primary/80 mb-8"
                    >
                        Kami percaya bahwa setiap pasangan memiliki cerita unik,
                        dan misi kami adalah mengabadikan cerita tersebut
                        melalui lensa kami dengan pendekatan yang artistik namun
                        tetap autentik.
                    </MotionP>
                    <MotionInView variants={slideInRight}>
                        <Link to="/booking">
                            <Button
                                size="lg"
                                // variant="outline"
                                className="shadow-elegant w-full sm:w-auto"
                            >
                                Pesan Sekarang
                            </Button>
                        </Link>
                    </MotionInView>
                </motion.div>
            </motion.div>

            {/* casd */}
            <MotionInView
                variants={staggerContainer}
                className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
                {features.map((feature, i) => (
                    <MotionInView
                        key={i}
                        variants={cardSlideInUp(i)}
                        className="group hover:shadow-primary/10 border/10 from-card to-card relative flex flex-col items-center rounded-lg border bg-linear-to-b p-8 text-center shadow-md backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                    >
                        <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="group-hover:text-secondary-foreground text-primary mb-2 text-lg font-semibold transition-colors duration-300">
                            {feature.title}
                        </h3>
                        <p className="text-secondary-foreground/80 text-sm">
                            {feature.description}
                        </p>
                    </MotionInView>
                ))}
            </MotionInView>
        </MotionSection>
    )
}

export default AboutIntro
