"use client";

function EraByteLogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="16" fill="#1a3a6b"/>
      <path d="M18 15 L18 85 L34 85 L34 57 L52 85 L70 85 L50 55 C62 52 68 44 68 33 C68 20 58 15 44 15 Z M34 28 L44 28 C50 28 53 31 53 37 C53 43 50 46 44 46 L34 46 Z" fill="#e63c2f"/>
      <path d="M48 60 L82 26 L82 48 L70 48 L70 62 Z" fill="#f5a623"/>
      <path d="M60 26 L82 26 L82 48 Z" fill="#f5a623" opacity="0.8"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-primary/10 py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <EraByteLogoIcon size={36} />
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
