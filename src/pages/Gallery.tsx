import MainTemplate from '@/components/templates/MainTemplate'
import HeroImage from '@/assets/01.jpg'
import { fadeIn, fadeUp, staggerContainer } from '@/utils/variantsMotion'
import MotionInView from '@/components/motion/MotionInView'
import { useQuery } from '@tanstack/react-query'
import { MotionH1 } from '@/components/motion/MotionH1'
import { MotionP } from '@/components/motion/MotionP'
import { getDataGallery } from '@/services/getDataGallery'
import CardImageSkeleton from '@/components/skeletons/CardImageSkeleton'
import type { IGalleryProps } from '@/index'
import CardImage from '@/components/molecules/CardImage'
import { useState, useMemo } from 'react'
import { Button } from '@/components/atoms/button/Button'

function Gallery() {
    const [getCategoryPhoto, setGetCategoryPhoto] = useState('all')

    // Normalized categories (lowercase)

    const {
        data: galleryData = [],
        isPending,
        error,
    } = useQuery({
        queryKey: ['galleryData'],
        queryFn: getDataGallery,
    })

    const categories = [
        'all',
        'wedding',
        'engagement',
        'prewedding',
        'product',
        'event',
    ]

    // Efficient filtering
    const filterGallery = useMemo(() => {
        if (getCategoryPhoto === 'all') return galleryData

        return galleryData.filter(
            (gallery: IGalleryProps) =>
                gallery.category?.toLowerCase() === getCategoryPhoto
        )
    }, [galleryData, getCategoryPhoto])

    return (
        <MainTemplate>
            {/* HERO SECTION */}
            <div className="relative h-[30vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={HeroImage}
                        alt="COVER"
                        className="h-full w-full object-cover"
                    />
                    <div className="from-background/60 via-background/80 to-background absolute inset-0 bg-linear-to-b"></div>
                </div>

                <div className="relative flex h-full items-center">
                    <div className="container pb-12">
                        <MotionInView
                            variants={staggerContainer}
                            className="text-center"
                        >
                            <MotionH1
                                variants={fadeUp}
                                className="text-primary mb-4 font-serif text-5xl font-bold md:text-6xl"
                            >
                                Gallery Photo
                            </MotionH1>
                            <div className="text-primary/50 flex flex-wrap justify-center gap-4">
                                <MotionP variants={fadeIn} className="text-2xl">
                                    Explore our collection of stunning
                                    photographs
                                </MotionP>
                            </div>
                        </MotionInView>
                    </div>
                </div>
            </div>

            {/* CATEGORY BUTTONS */}
            <div className="container mx-auto px-4 pb-20">
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={
                                getCategoryPhoto === category
                                    ? 'default'
                                    : 'outline'
                            }
                            onClick={() => setGetCategoryPhoto(category)}
                            className="capitalize"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            {/* CONTENT GRID */}
            <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* ERROR STATE */}
                {error && (
                    <div className="col-span-full py-10 text-center text-red-500">
                        {error.message}
                    </div>
                )}

                {/* LOADING STATE */}
                {isPending &&
                    [...Array(6)].map((_, index) => (
                        <CardImageSkeleton key={index} />
                    ))}

                {/* EMPTY STATE */}
                {!isPending && !error && filterGallery.length === 0 && (
                    <div className="text-primary col-span-full py-10 text-center">
                        No data to show at the moment
                    </div>
                )}

                {/* DATA RENDER */}
                {!isPending &&
                    !error &&
                    filterGallery.length > 0 &&
                    filterGallery.map((gallery: IGalleryProps) => (
                        <CardImage key={gallery.id} {...gallery} />
                    ))}
            </div>
        </MainTemplate>
    )
}

export default Gallery
