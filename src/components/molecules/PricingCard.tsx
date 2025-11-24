import { FeatureItem } from '@/components/atoms/FeatureItem'

import { Button } from '../atoms/button/Button'
import type { IconKeys } from '@/index'

interface PricingCardProps {
    title: string
    description: string
    features: { icon: IconKeys; label: string }[]
    popular?: boolean
}

export function PricingCard({
    title,
    description,
    features,
    popular = false,
}: PricingCardProps) {
    return (
        <div className="border-border bg-background relative flex flex-col justify-between border p-6 shadow-lg">
            {popular && (
                <span className="bg-secondary-foreground text-secondary absolute top-4 right-4 rounded-md px-3 py-1 text-xs font-bold shadow">
                    POPULAR
                </span>
            )}

            <h2 className="text-primary text-2xl font-semibold">{title}</h2>
            <p className="text-primary/70 mt-2">{description}</p>

            <div className="mt-6 space-y-3">
                {features.map((f, i) => (
                    <FeatureItem key={i} icon={f.icon} label={f.label} />
                ))}
            </div>

            <Button className="border-border hover:bg- mt-6 w-full rounded-lg border py-2 text-center transition">
                Pilih Paket
            </Button>
        </div>
    )
}
