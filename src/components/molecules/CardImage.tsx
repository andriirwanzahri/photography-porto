import { cardSlideInUp } from '@/utils/variantsMotion'
import MotionInView from '../motion/MotionInView'
import { Button } from '../atoms/button/Button'
import { Link } from 'react-router'
import type { IGalleryProps } from '@/index'
// import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Image } from '@imagekit/react'

function CardImage({ title, image, category, location, slide }: IGalleryProps) {
    return (
        <MotionInView
            variants={cardSlideInUp(slide as number)}
            className="group relative aspect-4/5 cursor-pointer overflow-hidden rounded-lg"
        >
            {/* <LazyLoadImage
                src={image}
                alt={title}
                loading="lazy"
                effect="black-and-white"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            /> */}
            <Image
                urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
                src={image}
                alt={title}
                width={400}
                height={500}
                loading="lazy"
                effect="black-and-white"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="bg-background/90 text-primary absolute top-4 right-4 rounded-lg px-3 py-0.5 text-sm font-medium uppercase shadow-md">
                <span>{category}</span>
            </div>
            <div className="absolute right-0 bottom-0 left-0 translate-y-full transform p-6 text-white transition-transform group-hover:translate-y-0">
                <h3 className="font-serif text-xl font-semibold">{title}</h3>
                <p className="mb-3 text-sm opacity-90">{location}</p>
                <Button size="sm" variant="secondary" asChild>
                    {title ? (
                        <Link to={`/client/${encodeURIComponent(title)}`}>
                            View Collection
                        </Link>
                    ) : (
                        <Link to="/gallery">View Gallery</Link>
                    )}
                </Button>
            </div>
        </MotionInView>
    )
}

export default CardImage
