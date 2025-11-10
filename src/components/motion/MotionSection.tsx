import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface MotionSectionProps {
    children: React.ReactNode
    className?: string
}

function MotionSection({
    children,
    className = 'relative container overflow-hidden py-20 md:py-28',
}: MotionSectionProps) {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, {
        once: true,
        margin: '-100px',
        amount: 0.5,
    })
    return (
        <motion.section
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </motion.section>
    )
}

export default MotionSection
