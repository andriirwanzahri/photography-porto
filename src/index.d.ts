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
    id:number
    icon: JSX.Element
    title: string
    description: string
}


