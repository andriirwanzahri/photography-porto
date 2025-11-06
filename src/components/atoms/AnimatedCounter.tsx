'use client'

import { useEffect } from 'react'
import {
    animate,
    motion,
    useMotionValue,
    useTransform,
    useInView,
} from 'motion/react'
import { useRef } from 'react'

interface AnimatedCounterProps {
    from?: number
    to: number
    label?: string
    duration?: number
    classLabel?: string
    classNumber?: string
}

export default function AnimatedCounter({
    from = 0,
    to,
    duration = 3,
    classNumber = 'text-primary font-serif text-3xl font-bold',
    classLabel = 'text-muted-foreground text-sm',
    label,
}: AnimatedCounterProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 }) // animasi jalan 1x saat 50% elemen muncul
    const count = useMotionValue(from)
    const rounded = useTransform(count, (latest) => Math.round(latest))

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration, ease: 'easeOut' })
            return () => controls.stop()
        }
    }, [isInView, count, to, duration])

    return (
        <>
            <motion.div ref={ref} className={classNumber}>
                {rounded}
            </motion.div>
            {label && <div className={classLabel}>{label}</div>}
        </>
    )
}
