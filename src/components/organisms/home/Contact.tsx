import { Phone, Instagram } from 'lucide-react'

export default function Contact() {
    return (
        <section className="bg-secondary text-primary w-full py-24">
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Title */}
                <h2 className="mb-4 text-4xl font-bold">Hubungi Kami</h2>
                <p className="text-primary/70 mb-12 max-w-2xl text-lg">
                    Konsultasikan kebutuhan fotografi Anda dan pesan jasa kami
                </p>

                {/* Contact Info */}
                <h3 className="mb-6 text-2xl font-semibold">
                    Informasi Kontak
                </h3>

                <div className="mb-12 flex flex-col items-center gap-12 md:flex-row">
                    {/* Instagram */}
                    <div className="flex flex-col items-center">
                        <div className="border-border bg-background flex h-16 w-16 items-center justify-center rounded-full border">
                            <Instagram size={30} />
                        </div>
                        <p className="mt-4 text-xl font-semibold">Instagram</p>
                        <p className="text-gray-400">@photography</p>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col items-center">
                        <div className="border-border bg-background flex h-16 w-16 items-center justify-center rounded-full border">
                            <Phone size={30} />
                        </div>
                        <p className="mt-4 text-xl font-semibold">WhatsApp</p>
                        <p className="text-primary/70">+62 823-4149-1347</p>
                    </div>
                </div>

                {/* Button */}
                <a
                    href="https://wa.me/6282341491347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-accent flex items-center gap-2 rounded-xl px-6 py-4 text-lg font-medium shadow-lg transition-all"
                >
                    <Phone size={18} />
                    Hubungi Langsung via WhatsApp
                </a>

                <p className="text-primary/70 mt-8 max-w-xl">
                    Atau pilih salah satu paket layanan kami di atas untuk
                    melakukan pemesanan
                </p>
            </div>
        </section>
    )
}
