import MainTemplate from '@/components/templates/MainTemplate'
import HeroImage from '@/assets/01.jpg'
import { visibleVariansFadeIn } from '@/utils/variantsMotion'
import MotionInView from '@/components/motion/MotionInView'
import { Button } from '@/components/atoms/button/Button'

function Gallery() {
    return (
        <MainTemplate>
            <div className="relative h-[30vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={HeroImage}
                        alt="COVER"
                        className="h-full w-full object-cover"
                    />
                    <div className="to-background via-background/80 from-background/60 absolute inset-0 bg-linear-to-b"></div>
                </div>
                <div className="relative flex h-full items-center">
                    <div className="container pb-12">
                        <MotionInView
                            variants={visibleVariansFadeIn}
                            className="text-center"
                        >
                            <h1 className="text-primary mb-4 font-serif text-5xl font-bold md:text-6xl">
                                Gallery Photo
                            </h1>
                            <div className="text-primary/50 flex flex-wrap justify-center gap-4">
                                <p className="text-2xl">
                                    Explore our collection of stunning
                                    photographs
                                </p>
                            </div>
                        </MotionInView>
                    </div>
                </div>
            </div>
            <div className="container mx-auto items-center px-20 pt-[-20px]">
                <div className="flex flex-wrap justify-center gap-4 rounded-2xl bg-gray-100 p-5 shadow-xl inset-shadow-2xs">
                    <Button variant={'default'} className="capitalis">
                        Wedding
                    </Button>
                    <Button variant={'outline'} className="capitalis">
                        Wedding
                    </Button>
                </div>
            </div>
            <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <h1>12</h1>
            </div>
        </MainTemplate>
    )
}

export default Gallery
