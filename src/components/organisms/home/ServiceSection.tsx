import { fadeIn, fadeUp, staggerContainer } from '@/utils/variantsMotion'

// import HeroImage from '@/assets/01.jpg'
import MotionInView from '@/components/motion/MotionInView'
import { MotionH1 } from '@/components/motion/MotionH1'
import { MotionP } from '@/components/motion/MotionP'
import { Camera, FileText, Image, MapPin } from 'lucide-react'
import MotionSection from '@/components/motion/MotionSection'
import Card from '@/components/molecules/Card'

const features = [
    {
        id: 1,
        icon: <Camera className="text-primary h-10 w-10" />,
        title: 'Unlimited Shoot',
        description: 'Ambil foto sebanyak mungkin tanpa batasan.',
    },
    {
        id: 2,
        icon: <FileText className="text-primary h-10 w-10" />,
        title: 'File Digital Lengkap',
        description:
            'Semua hasil foto diberikan dalam Flashdisk atau Google Drive.',
    },
    {
        id: 3,
        icon: <Image className="text-primary h-10 w-10" />,
        title: 'Album Eksklusif',
        description:
            'Pilihan cetak dengan mini album, fullpress album, dan frame premium.',
    },
    {
        id: 4,
        icon: <MapPin className="text-primary h-10 w-10" />,
        title: 'Lokasi Fleksibel',
        description: 'Bisa memilih 1 atau lebih lokasi untuk pemotretan.',
    },
]

function ServicesSection() {
    return (
        <MotionSection className="bg-secondary relative mx-auto overflow-hidden py-20 md:py-28">
            <MotionInView className="container">
                <MotionInView
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
                </MotionInView>

                <MotionInView className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, i) => (
                        <Card key={i} {...feature} />
                    ))}
                </MotionInView>
            </MotionInView>
        </MotionSection>
    )
}

export default ServicesSection
