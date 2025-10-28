import { Camera } from 'lucide-react'

export const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <Camera className="text-accent h-6 w-6" />
            <span className="font-serif text-xl font-semibold">
                Photography
            </span>
        </div>
    )
}
