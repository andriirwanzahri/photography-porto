import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import HeaderSkeleton from './HeaderSkeleton'

const HeroSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
            <HeaderSkeleton />
            {/* HERO SECTION */}
            <section className="container py-20 md:py-28">
                <div className="items-between grid gap-10 md:gap-16 lg:grid-cols-2">
                    <div className="order-2 flex flex-col items-center space-y-6 lg:order-1 lg:items-start lg:text-left">
                        <div className="w-full max-w-lg space-y-3">
                            <Skeleton height={50} width={'90%'} />
                            <Skeleton height={40} width={'60%'} />
                        </div>

                        <Skeleton height={24} width={'90%'} />
                        <Skeleton height={24} width={'85%'} />
                        <Skeleton height={24} width={'70%'} />

                        <div className="flex w-full flex-col justify-center gap-4 pt-6 sm:flex-row lg:justify-start">
                            <Skeleton height={48} width={180} />
                            <Skeleton height={48} width={160} />
                        </div>
                    </div>

                    <div className="order-1 flex items-center justify-center">
                        <div className="shadow-elegant-lg h-72 w-52 overflow-hidden rounded-2xl sm:h-80 sm:w-64 md:h-96 md:w-80 lg:h-112 lg:w-88">
                            <Skeleton className="h-full w-full" />
                        </div>
                    </div>
                </div>
            </section>
        </SkeletonTheme>
    )
}

export default HeroSkeleton
