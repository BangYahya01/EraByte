"use client";
import Image from "next/image";

// Logo akan menggunakan file dari public/logo_master_sosmed.png

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-primary/10 py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo_master_sosmed.png" 
                alt="EraByte Logo" 
                width={36} 
                height={36} 
                className="object-contain"
              />
              <span className="text-2xl font-black gradient-text">R&apos;aByte</span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-5">
              Transformasi digital untuk masa depan bisnis Anda. Mitra lokal, solusi global.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm">🐦</a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm">💼</a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm">💻</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground">Layanan</h3>
            <ul className="space-y-2 text-sm">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions"].map((s) => (
                <li key={s}>
                  <a href="/layanan" className="text-muted hover:text-primary transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Tim", href: "/tim" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Teknologi", href: "/teknologi" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-muted hover:text-primary transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4 text-foreground">Kontak</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">📧 hello@erabyte.com</li>
              <li className="flex items-center gap-2">📱 +62 812-3456-7890</li>
              <li className="flex items-center gap-2">📍 Lombok, NTB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted">
          <p>&copy; 2026 PT Era Byte Solution (R&apos;aByte). All rights reserved.</p>
          <p>Made with ❤️ in Lombok</p>
        </div>
      </div>
    </footer>
  );
}
