import { MotionH1 } from '@/components/motion/MotionH1'
import MotionInView from '@/components/motion/MotionInView'
import { MotionP } from '@/components/motion/MotionP'
import MotionSection from '@/components/motion/MotionSection'
import { fadeIn, staggerContainer } from '@/utils/variantsMotion'

import { useQuery } from '@tanstack/react-query'
import { getDataGallery } from '@/services/getDataGallery'
import CardImage from '@/components/molecules/CardImage'
import type { IGalleryProps } from '@/index'

import CardImageSkeleton from '@/components/skeletons/CardImageSkeleton'
function FeaturedWork() {
    const {
        data: galleryData,
        isPending,
        error,
    } = useQuery({
        queryKey: ['galleryData'],
        queryFn: getDataGallery,
    })

    return (
        <MotionSection>
            <MotionInView>
                <MotionH1
                    variants={fadeIn}
                    className="mb-6 text-center text-3xl font-bold md:text-5xl"
                >
                    Karya Unggulan
                </MotionH1>
                <MotionP
                    variants={fadeIn}
                    className="text-primary/80 mx-auto max-w-3xl pb-5 text-center text-lg"
                >
                    Beberapa karya terbaik kami dalam mengabadikan momen spesial
                    klien
                </MotionP>
                <MotionInView
                    variants={staggerContainer}
                    className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {error ? (
                        <MotionInView>
                            <div className="flex items-center py-10 text-center text-red-500">
                                {error.message}
                            </div>
                        </MotionInView>
                    ) : isPending ? (
                        [...Array(6)].map((_, index) => (
                            <CardImageSkeleton key={index} />
                        ))
                    ) : (
                        galleryData.map((gallery: IGalleryProps) => (
                            <CardImage key={gallery.id} {...gallery} />
                        ))
                    )}
                </MotionInView>
            </MotionInView>
        </MotionSection>
    )
}

export default FeaturedWork
