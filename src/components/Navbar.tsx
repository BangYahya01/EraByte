"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Menu, X, Home, Layers, Grid, Users, Phone } from "lucide-react";

// Logo SVG inline - R dengan panah, warna brand EraByte
function EraByteLogoIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="16" fill="#1a3a6b"/>
      {/* Huruf R */}
      <path d="M18 15 L18 85 L34 85 L34 57 L52 85 L70 85 L50 55 C62 52 68 44 68 33 C68 20 58 15 44 15 Z M34 28 L44 28 C50 28 53 31 53 37 C53 43 50 46 44 46 L34 46 Z" fill="#e63c2f"/>
      {/* Panah kuning */}
      <path d="M48 60 L82 26 L82 48 L70 48 L70 62 Z" fill="#f5a623"/>
      <path d="M60 26 L82 26 L82 48 Z" fill="#f5a623" opacity="0.8"/>
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const update = () => setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-primary/10"
          : "bg-background/80 backdrop-blur-md border-b border-primary/5"
      }`}>
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <EraByteLogoIcon size={38} />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-black gradient-text">R&apos;aByte</span>
              <span className="text-[10px] text-muted font-medium tracking-widest uppercase hidden sm:block">EraByte Solution</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6 xl:gap-10 text-sm xl:text-base">
            {["Beranda", "Layanan", "Portfolio", "Tim", "Teknologi", "Kontak"].map((item) => (
              <Link
                key={item}
                href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                className="relative font-medium text-foreground/70 hover:text-primary transition-colors duration-200 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-200 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden fixed top-[64px] left-0 right-0 z-40 bg-background/98 backdrop-blur-xl border-b border-primary/10 shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {["Beranda", "Layanan", "Portfolio", "Tim", "Teknologi", "Kontak"].map((item) => (
              <Link
                key={item}
                href={item === "Beranda" ? "/" : `/${item.toLowerCase()}`}
                className="py-3 px-4 hover:bg-primary/5 rounded-xl transition font-medium text-foreground/80 hover:text-primary border border-transparent hover:border-primary/10"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/98 backdrop-blur-xl border-t border-primary/10 shadow-2xl">
          <div className="container mx-auto px-2 py-2 flex justify-around items-center">
            {[
              { href: "/", label: "Beranda", Icon: Home },
              { href: "/layanan", label: "Layanan", Icon: Layers },
              { href: "/portfolio", label: "Portfolio", Icon: Grid },
              { href: "/tim", label: "Tim", Icon: Users },
              { href: "/kontak", label: "Kontak", Icon: Phone },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex flex-col items-center gap-1 py-1 px-3 text-xs font-medium text-foreground/60 hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
