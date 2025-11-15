import { MotionH1 } from '@/components/motion/MotionH1'
import MotionInView from '@/components/motion/MotionInView'
import { MotionP } from '@/components/motion/MotionP'
import MotionSection from '@/components/motion/MotionSection'
import { cardSlideInUp, fadeIn, staggerContainer } from '@/utils/variantsMotion'
import { Button } from '@/components/atoms/button/Button'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getDataGallery } from '@/services/getDataGallery'

interface galleryProps {
    id: number
    title: string
    subtitle: string
    date: string
    couple: string
    category: string
    location: string
    image: string
}

function FeaturedWork() {
    const {
        data: galleryData,
        isPending,
        error,
    } = useQuery({
        queryKey: ['galleryData'],
        queryFn: getDataGallery,
    })

    if (isPending) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error loading gallery data</div>
    }

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
                    {galleryData.map((data: galleryProps) => (
                        <MotionInView
                            variants={cardSlideInUp(data.id)}
                            className="group relative aspect-4/5 cursor-pointer overflow-hidden rounded-lg"
                        >
                            <img
                                src={data.image}
                                alt={data.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            <div className="bg-background/90 text-primary absolute top-4 right-4 rounded-lg px-3 py-0.5 text-sm font-medium uppercase shadow-md">
                                <span>{data.category}</span>
                            </div>
                            <div className="absolute right-0 bottom-0 left-0 translate-y-full transform p-6 text-white transition-transform group-hover:translate-y-0">
                                <h3 className="font-serif text-xl font-semibold">
                                    {data.title}
                                </h3>
                                <p className="mb-3 text-sm opacity-90">
                                    {data.location}
                                </p>
                                <Button size="sm" variant="secondary" asChild>
                                    {data.title ? (
                                        <Link
                                            to={`/client/${encodeURIComponent(data.title)}`}
                                        >
                                            View Collection
                                        </Link>
                                    ) : (
                                        <Link to="/gallery">View Gallery</Link>
                                    )}
                                </Button>
                            </div>
                        </MotionInView>
                    ))}
                </MotionInView>
            </MotionInView>
        </MotionSection>
    )
}

export default FeaturedWork
