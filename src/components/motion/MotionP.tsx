import { motion } from 'motion/react'
import type { Variants } from 'motion/react'

interface MotionPProps {
    children: React.ReactNode
    className?: string
    variants?: Variants
}

export const MotionP = ({ children, className, variants }: MotionPProps) => (
    <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={className}
        variants={variants}
    >
        {children}
    </motion.p>
)
