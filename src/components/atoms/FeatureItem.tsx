import * as Icons from 'lucide-react'
interface IFeatureItemProps {
    icon: string
    label: string
}
export const FeatureItem = ({ icon, label }: IFeatureItemProps) => {
    const IconComponent = (Icons as any)[icon] || Icons.Circle
    return (
        <div className="text-secondary flex items-center gap-3 text-sm">
            <IconComponent className="h-5 w-5" />
            <span>{label}</span>
        </div>
    )
}
