import type{ Variants } from "motion/react"

export const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 , transition:{duration:0.6, ease: [0.43, 0.13, 0.23, 0.96]} },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4,0,0.2,1] } },
}

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 , transition:{duration:0.6, ease: [0.43, 0.13, 0.23, 0.96]} },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4,0,0.2,1] } },
}

export const visibleVariansFadeIn =(position:number,duration?:number,delay?:number) => ({
    hidden: { opacity: 0 , y:position },
    visible: { opacity: 1, y:0, transition: {  duration: duration, delay: delay} },
})

export const visibleVariansFadeInX =(position:number,duration?:number,delay?:number) => ({
    hidden: { opacity: 0 , x:position },
    visible: { opacity: 1, x:0, transition: {  duration: duration, delay: delay} },
})

// initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.8, delay: 0.2 }}

export const scaleIn: Variants = {  
    hidden: {
        opacity: 0,
        scale: 0.8,
        transition:{duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition:{
            duration: 0.8, ease: [0.4,0,0.55,1],
        },
    },
}


export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
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

export const cardSlideInUp= (i: number):Variants => ({
    hidden: {
        opacity: 0,
        y:40,    },
    visible: {
        opacity: 1,
        y:0,
        transition:{
            duration: 0.6, delay: i * 0.2,
        },
    },
})


