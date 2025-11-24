import type { LucideIcon } from 'lucide-react'

export interface IGalleryProps {
    id: number
    title: string
    subtitle: string
    date: string
    couple: string
    category: string
    location: string
    image: string
}

export interface IFaqProps {
    id: number
    question: string
    answer: string
}

export interface IFeatureProps {
    id: number
    icon?: JSX.Element
    title: string
    description?: string
    className?: string
    feature?: { icon: string; label: string }[]
}

// TYPE
export type IconKeys = {
    [K in keyof typeof Icons]: (typeof Icons)[K] extends LucideIcon ? K : never
}[keyof typeof Icons]
