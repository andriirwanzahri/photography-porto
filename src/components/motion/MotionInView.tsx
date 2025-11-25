// src/components/motion/MotionInView.tsx
import type { MotionStyle, Variants } from 'motion/react'
import { motion } from 'motion/react'

interface MotionInViewProps {
    children: React.ReactNode
    variants?: Variants
    className?: string
    viewport?: { once: boolean; amount: number }
    whileInView?: string
    initial?: string
    style?: React.CSSProperties | MotionStyle
}

export default function MotionInView({
    children,
    variants,
    className,
    initial = 'hidden',
    whileInView = 'visible',
    viewport = { once: true, amount: 0.2 },
    style,
}: MotionInViewProps) {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            variants={variants}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    )
}
