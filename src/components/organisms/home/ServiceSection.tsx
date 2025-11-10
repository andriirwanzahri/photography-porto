import { motion } from 'motion/react'
import {
    cardSlideInUp,
    fadeIn,
    fadeUp,
    staggerContainer,
} from '@/utils/variantsMotion'

// import HeroImage from '@/assets/01.jpg'
import MotionInView from '@/components/motion/MotionInView'
import { MotionH1 } from '@/components/motion/MotionH1'
import { MotionP } from '@/components/motion/MotionP'
import { Camera, FileText, Image, MapPin } from 'lucide-react'
import MotionSection from '@/components/motion/MotionSection'

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

function ServicesSection() {
    return (
        <MotionSection className="bg-secondary relative container mx-auto overflow-hidden py-20 md:py-28">
            <motion.div
                variants={staggerContainer}
                className="mb-16 flex flex-col items-center"
            >
                <MotionH1
                    variants={fadeUp}
                    className="mb-6 text-center text-4xl font-bold md:text-5xl"
                >
                    Paket Layanan Fotografi
                </MotionH1>
                <MotionP
                    variants={fadeIn}
                    className="mx-auto max-w-3xl pb-5 text-center text-lg"
                >
                    Kami menawarkan berbagai paket untuk memenuhi kebutuhan
                    dokumentasi momen spesial Anda. Pilih paket yang sesuai
                    dengan keinginan dan anggaran Anda.
                </MotionP>
            </motion.div>

            {/* casd */}
            <MotionInView className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, i) => (
                    <MotionInView
                        key={i}
                        variants={cardSlideInUp(i)}
                        className="group hover:shadow-primary/10 border/10 from-card to-card rounded-SM relative flex flex-col items-center border bg-linear-to-b p-8 text-center shadow-md backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
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

export default ServicesSection
