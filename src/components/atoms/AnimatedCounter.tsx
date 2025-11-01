import { motion } from 'motion/react'
import { useAnimatedCounter } from '@/hook/useAnimatedCounter'

// Types
type FormatType = 'number' | 'currency' | 'percentage' | 'decimal'

interface AnimatedCounterProps {
    target: number
    duration?: number
    format?: FormatType
    label?: string
    color?: string
    fontSize?: number
}

// Reusable Counter Component
export default function AnimatedCounter({
    target,
    duration = 3,
    format = 'number',
    label,
}: AnimatedCounterProps) {
    const value = useAnimatedCounter(target, duration, format)

    return (
        <div>
            <motion.div className="text-primary font-serif text-3xl font-bold">
                {value}
            </motion.div>
            {label && (
                <div className="text-muted-foreground text-sm">{label}</div>
            )}
        </div>
    )
}
