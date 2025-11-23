import { Phone, Instagram } from 'lucide-react'

export default function Contact() {
    return (
        <section className="w-full bg-[#111] py-24 text-white">
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Title */}
                <h2 className="mb-4 text-4xl font-bold">Hubungi Kami</h2>
                <p className="mb-12 max-w-2xl text-lg text-gray-300">
                    Konsultasikan kebutuhan fotografi Anda dan pesan jasa kami
                </p>

                {/* Contact Info */}
                <h3 className="mb-6 text-2xl font-semibold">
                    Informasi Kontak
                </h3>

                <div className="mb-12 flex flex-col items-center gap-12 md:flex-row">
                    {/* Instagram */}
                    <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-700 bg-gray-900">
                            <Instagram size={30} />
                        </div>
                        <p className="mt-4 text-xl font-semibold">Instagram</p>
                        <p className="text-gray-400">@photography</p>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-700 bg-gray-900">
                            <Phone size={30} />
                        </div>
                        <p className="mt-4 text-xl font-semibold">WhatsApp</p>
                        <p className="text-gray-400">+62 823-4149-1347</p>
                    </div>
                </div>

                {/* Button */}
                <a
                    href="https://wa.me/6282341491347"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 text-lg font-medium shadow-lg transition-all hover:bg-green-700"
                >
                    <Phone size={18} />
                    Hubungi Langsung via WhatsApp
                </a>

                <p className="mt-8 max-w-xl text-gray-400">
                    Atau pilih salah satu paket layanan kami di atas untuk
                    melakukan pemesanan
                </p>
            </div>
        </section>
    )
}
