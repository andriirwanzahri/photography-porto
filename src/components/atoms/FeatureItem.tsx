import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type IconKeys = {
    [K in keyof typeof Icons]: (typeof Icons)[K] extends LucideIcon ? K : never
}[keyof typeof Icons]

interface IFeatureItemProps {
    icon: IconKeys
    label: string
}
export const FeatureItem = ({ icon, label }: IFeatureItemProps) => {
    const IconComponent = Icons[icon] || Icons.Circle
    return (
        <div className="text-primary/70 flex items-center gap-3 text-sm">
            <IconComponent className="h-5 w-5" />
            <span>{label}</span>
        </div>
    )
}
