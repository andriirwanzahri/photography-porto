import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { Logo } from '../atoms/Logo'

function Footer() {
    return (
        <footer className="border-border bg-card border-t">
            <div className="container py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-muted-foreground text-sm">
                            Capturing timeless moments with natural light and
                            artistry.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Navigasi</h3>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li>Galeri</li>
                            <li>Layanan</li>
                            <li>Tentang</li>
                            <li>Pemesanan</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Kontak</h3>
                        <ul className="text-muted-foreground space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                info@photoart.com
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                +62 812 3456 7890
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 font-semibold">Sosial Media</h3>
                        <div className="flex gap-4">
                            <Instagram className="hover:text-accent h-5 w-5 cursor-pointer transition-colors" />
                            <Facebook className="hover:text-accent h-5 w-5 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="border-border text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
                    © 2025 PhotoArt. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
