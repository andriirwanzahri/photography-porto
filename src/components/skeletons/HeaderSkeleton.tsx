import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function HeaderSkeleton() {
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
        </SkeletonTheme>
    )
}

export default HeaderSkeleton
