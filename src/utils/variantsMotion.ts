import type{ Variants } from "motion/react"

export const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 , transition:{duration:0.6, ease: [0.43, 0.13, 0.23, 0.96]} },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4,0,0.2,1] } },
}

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 , transition:{duration:0.6, ease: [0.43, 0.13, 0.23, 0.96]} },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4,0,0.2,1] } },
}

export const visibleVariansFadeIn = {
    hidden: { opacity: 0 , y:20 },
    visible: { opacity: 1, y:0, transition: {  duration: 0.6, delay: 0.5} },
}

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 1.2,
            delayChildren: 2.3,
        }
    }
}

export const slideInLeft: Variants = {
    hidden: {
        opacity: 0,
        x:-50,
        transition:{duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}
    },
    visible: {
        opacity: 1,
        x:0,
        transition:{
            duration: 0.8, ease: [0.4,0,0.55,1],
        },
    },
}

export const slideInRight: Variants = {
    hidden: {
        opacity: 0,
        x:50,
        transition:{duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}
    },
    visible: {
        opacity: 1,
        x:0,
        transition:{
            duration: 0.8, ease: [0.4,0,0.55,1],
        },
    },
}