import { fadeIn, fadeUp, staggerContainer } from '@/utils/variantsMotion'

// import HeroImage from '@/assets/01.jpg'
import MotionInView from '@/components/motion/MotionInView'
import { MotionH1 } from '@/components/motion/MotionH1'
import { MotionP } from '@/components/motion/MotionP'
import MotionSection from '@/components/motion/MotionSection'
// import Card from '@/components/molecules/Card'
import { PricingCard } from '@/components/molecules/PricingCard'

const features = [
    {
        id: 1,
        title: 'Engagement',
        description:
            'Abadikan momen spesial lamaran Anda dengan paket yang lengkap',
        features: [
            { icon: 'calendar', label: 'Unlimited shoot' },
            { icon: 'image', label: 'Mini Album (40 lembar foto jumbo)' },
            { icon: 'folder', label: 'Semua file dalam flashdisk' },
        ],
        popular: false,
    },
    {
        id: 2,
        title: 'Prewedding',
        description:
            'Foto prewedding dengan konsep yang sesuai dengan karakter Anda',
        features: [
            { icon: 'calendar', label: 'Unlimited shoot' },
            { icon: 'image', label: 'Album eksklusif & cetak jumbo' },
            { icon: 'map-pin', label: '1-2 lokasi foto' },
        ],
        popular: true,
    },
    {
        id: 3,
        title: 'Wedding',
        description:
            'Dokumentasikan pernikahan Anda dengan sentuhan profesional',
        features: [
            { icon: 'calendar', label: 'Unlimited shoot' },
            { icon: 'image', label: '80 - 120 lembar foto jumbo' },
            {
                icon: 'gallery-horizontal',
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
            { icon: 'camera', label: 'Foto wedding + ngunduh' },
            { icon: 'image-play', label: '16-24 inch 2 pcs + frame' },
            { icon: 'infinity', label: 'Unlimited shoot & fullpress album' },
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
                            title={feature.title}
                            description={feature.description}
                            features={feature.features}
                            popular={feature.popular}
                        />
                        // <Card key={i} {...feature} />
                    ))}
                </MotionInView>
            </MotionInView>
        </MotionSection>
    )
}

export default ServicesSection
