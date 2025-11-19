import { motion } from 'motion/react'

interface MotionSectionProps {
    children: React.ReactNode
    className?: string
}

function MotionSection({
    children,
    className = 'relative container overflow-hidden py-20 md:py-28',
}: MotionSectionProps) {
    return <motion.section className={className}>{children}</motion.section>
}

export default MotionSection
