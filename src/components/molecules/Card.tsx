import { cardSlideInUp } from '@/utils/variantsMotion'
import MotionInView from '../motion/MotionInView'
import type { IFeatureProps } from '@/index'

function Card({ id, icon, title, description }: IFeatureProps) {
    return (
        <MotionInView
            variants={cardSlideInUp(id)}
            className="group hover:shadow-primary/10 border/10 from-card to-card rounded-SM relative flex flex-col items-center border bg-linear-to-b p-8 text-center shadow-md backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
        >
            <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300">
                {icon}
            </div>
            <h3 className="group-hover:text-secondary-foreground text-primary mb-2 text-lg font-semibold transition-colors duration-300">
                {title}
            </h3>
            <p className="text-secondary-foreground/80 text-sm">
                {description}
            </p>
        </MotionInView>
    )
}

export default Card
