import { MotionH1 } from '@/components/motion/MotionH1'
import MotionInView from '@/components/motion/MotionInView'
import { MotionP } from '@/components/motion/MotionP'
import MotionSection from '@/components/motion/MotionSection'
import { fadeIn } from '@/utils/variantsMotion'

function FeaturedWork() {
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
                <MotionInView className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="h-64 w-full rounded-lg bg-gray-300" />
                    <div className="h-64 w-full rounded-lg bg-gray-300" />
                    <div className="h-64 w-full rounded-lg bg-gray-300" />
                </MotionInView>
            </MotionInView>
        </MotionSection>
    )
}

export default FeaturedWork
