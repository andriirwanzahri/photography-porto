import { fadeIn, fadeUp, staggerContainer } from '@/utils/variantsMotion'

import MotionInView from '@/components/motion/MotionInView'
import { MotionH1 } from '@/components/motion/MotionH1'
import { MotionP } from '@/components/motion/MotionP'
import MotionSection from '@/components/motion/MotionSection'
import { PricingCard } from '@/components/molecules/PricingCard'
import type { IconKeys } from '@/index'

interface IFeaturesDummy {
    id: number
    title: string
    description: string
    features: { icon: IconKeys; label: string }[]
    popular: boolean
}

const features: IFeaturesDummy[] = [
    {
        id: 1,
        title: 'Engagement',
        description:
            'Abadikan momen spesial lamaran Anda dengan paket yang lengkap',
        features: [
            { icon: 'Calendar', label: 'Unlimited shoot' },
            { icon: 'Image', label: 'Mini Album (40 lembar foto jumbo)' },
            { icon: 'Folder', label: 'Semua file dalam flashdisk' },
        ],
        popular: false,
    },
    {
        id: 2,
        title: 'Prewedding',
        description:
            'Foto prewedding dengan konsep yang sesuai dengan karakter Anda',
        features: [
            { icon: 'Calendar', label: 'Unlimited shoot' },
            { icon: 'Image', label: 'Album eksklusif & cetak jumbo' },
            { icon: 'MapPin', label: '1-2 lokasi foto' },
        ],
        popular: true,
    },
    {
        id: 3,
        title: 'Wedding',
        description:
            'Dokumentasikan pernikahan Anda dengan sentuhan profesional',
        features: [
            { icon: 'Calendar', label: 'Unlimited shoot' },
            { icon: 'Image', label: '80 - 120 lembar foto jumbo' },
            {
                icon: 'GalleryHorizontal',
                label: 'Album eksklusif + frame premium',
            },
        ],
        popular: false,
    },
    {
        id: 4,
        title: 'Spesial Package',
        description:
            'Paket lengkap untuk dokumentasi wedding dan ngunduh mantu',
        features: [
            { icon: 'Camera', label: 'Foto wedding + ngunduh' },
            { icon: 'ImagePlay', label: '16-24 inch 2 pcs + frame' },
            { icon: 'Infinity', label: 'Unlimited shoot & fullpress album' },
        ],
        popular: false,
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
                    {features.map((feature) => (
                        <PricingCard
                            key={feature.id}
                            id={feature.id}
                            title={feature.title}
                            description={feature.description}
                            features={feature.features}
                            popular={feature.popular}
                        />
                    ))}
                </MotionInView>
            </MotionInView>
        </MotionSection>
    )
}

export default ServicesSection
