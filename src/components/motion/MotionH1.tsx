import { motion } from 'motion/react'
import type { Variants } from 'motion/react'

interface MotionH1Props {
    children: React.ReactNode
    className?: string
    variants?: Variants
}

export const MotionH1 = ({
    children,
    className = 'text-3xl',
    variants,
}: MotionH1Props) => (
    <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={className}
        variants={variants}
    >
        {children}
    </motion.h1>
)
