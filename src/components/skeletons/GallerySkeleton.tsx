import HeaderSkeleton from './HeaderSkeleton'

function GallerySkeleton() {
    return (
        <>
            <HeaderSkeleton />
            <div className="relative h-[50vh] overflow-hidden">
                <div className="absolute inset-0">
                    <div className="h-full w-full animate-pulse bg-gray-300" />
                    <div className="to-background absolute inset-0 bg-linear-to-b from-gray-200/60 via-gray-200/40" />
                </div>
                <div className="relative flex h-full items-end">
                    <div className="container pb-12">
                        <div className="space-y-4">
                            <div className="h-10 w-1/3 animate-pulse bg-gray-300" />
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="h-5 w-5 animate-pulse rounded-full bg-gray-300" />
                                    <div className="h-5 w-10 animate-pulse bg-gray-300" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-5 w-5 animate-pulse rounded-full bg-gray-300" />
                                    <div className="h-5 w-16 animate-pulse bg-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={index}
                            className="h-64 w-full animate-pulse rounded-lg bg-gray-300"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default GallerySkeleton
