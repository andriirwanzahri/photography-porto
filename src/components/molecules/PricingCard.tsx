import { FeatureItem } from '@/components/atoms/FeatureItem'

interface PricingCardProps {
    title: string
    description: string
    features: { icon: string; label: string }[]
    popular?: boolean
}

export function PricingCard({
    title,
    description,
    features,
    popular = false,
}: PricingCardProps) {
    return (
        <div className="relative rounded-xl border border-white/5 bg-[#1f1f1f] p-6 shadow-lg">
            {popular && (
                <span className="absolute top-4 right-4 rounded-md bg-gray-200 px-3 py-1 text-xs font-bold text-black shadow">
                    POPULAR
                </span>
            )}

            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-2 text-gray-400">{description}</p>

            <div className="mt-6 space-y-3">
                {features.map((f, i) => (
                    <FeatureItem key={i} icon={f.icon} label={f.label} />
                ))}
            </div>

            <button className="mt-6 w-full rounded-lg border border-gray-500 py-2 text-center text-white transition hover:bg-white hover:text-black">
                Pilih Paket
            </button>
        </div>
    )
}
