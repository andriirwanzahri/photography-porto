import CardImage from '@/components/molecules/CardImage'
import Hero from '@/components/organisms/Hero'
import { getDataGallery } from '@/services/getDataGallery'
import { useQuery } from '@tanstack/react-query'
import type { IGalleryProps } from '..'
import CardImageSkeleton from '@/components/skeletons/CardImageSkeleton'
import { useParams } from 'react-router'
import ClientDetailTemplate from '@/components/templates/ClientDetailTemplate'
function ClientDetail() {
    const { clientName } = useParams()
    const { data: galleryData = [], isPending } = useQuery({
        queryKey: ['galleryData'],
        queryFn: getDataGallery,
    })

    return (
        <ClientDetailTemplate>
            <Hero clientName={clientName} />
            <div className="container grid grid-cols-1 gap-6 pb-20 md:grid-cols-2 lg:grid-cols-3">
                {/* LOADING STATE */}
                {isPending &&
                    [...Array(6)].map((_, index) => (
                        <CardImageSkeleton key={index} />
                    ))}
                {galleryData.map((gallery: IGalleryProps) => (
                    <CardImage key={gallery.id} {...gallery} />
                ))}
            </div>
        </ClientDetailTemplate>
    )
}

export default ClientDetail
