import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const HeroSkeleton = () => {
    return (
        <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
            <header className="sticky top-0 z-50 w-full border-b border-gray-200/10">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Skeleton height={32} width={120} />
                    </div>

                    <nav className="hidden items-center gap-6 md:flex">
                        <Skeleton height={20} width={70} />
                        <Skeleton height={20} width={70} />
                        <Skeleton height={20} width={70} />
                        <Skeleton height={20} width={70} />
                    </nav>

                    <div className="flex items-center gap-3">
                        <Skeleton circle height={30} width={30} />
                        <div className="md:hidden">
                            <Skeleton circle height={30} width={30} />
                        </div>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
                <div className="relative z-10 container flex h-screen items-center">
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
                </div>
            </section>
        </SkeletonTheme>
        // <SkeletonTheme
        //     baseColor={'#ebebeb dark:#2c2c2c'}
        //     highlightColor={'#f5f5f5 dark:#3c3c3c'}
        // >
        //     <p>
        //         <Skeleton count={3} />
        //     </p>
        // </SkeletonTheme>
    )
}

export default HeroSkeleton
