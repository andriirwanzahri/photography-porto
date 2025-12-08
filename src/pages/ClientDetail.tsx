import CardImage from '@/components/molecules/CardImage'
import Hero from '@/components/organisms/Hero'
import MainTemplate from '@/components/templates/MainTemplate'
import { getDataGallery } from '@/services/getDataGallery'
import { useQuery } from '@tanstack/react-query'
import type { IGalleryProps } from '..'
import CardImageSkeleton from '@/components/skeletons/CardImageSkeleton'
function ClientDetail() {
    const { data: galleryData = [], isPending } = useQuery({
        queryKey: ['galleryData'],
        queryFn: getDataGallery,
    })
    return (
        <MainTemplate>
            <Hero />
            <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* LOADING STATE */}
                {isPending &&
                    [...Array(6)].map((_, index) => (
                        <CardImageSkeleton key={index} />
                    ))}
                {galleryData.map((gallery: IGalleryProps) => (
                    <CardImage key={gallery.id} {...gallery} />
                ))}
            </div>
        </MainTemplate>
    )
}

export default ClientDetail
