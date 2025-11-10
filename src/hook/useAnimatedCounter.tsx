'use client'
import {
    animate,
    useMotionValue,
    useTransform,
    MotionValue,
} from 'motion/react'
import { useEffect } from 'react'

// Types
type FormatType = 'number' | 'currency' | 'percentage' | 'decimal'

// Custom Hook untuk animasi angka
export function useAnimatedCounter(
    target: number,
    duration: number = 3,
    format: FormatType = 'number'
): MotionValue<string> {
    const count = useMotionValue(0)

    const formatted = useTransform(() => {
        const value = Math.round(count.get())

        switch (format) {
            case 'currency':
                return `$${value.toLocaleString()}`
            case 'percentage':
                return `${value}%`
            case 'decimal':
                return value.toLocaleString()
            default:
                return value.toString()
        }
    })

    useEffect(() => {
        const controls = animate(count, target, {
            duration,
            ease: 'easeOut',
        })
        return () => controls.stop()
    }, [count, target, duration])

    return formatted
}
