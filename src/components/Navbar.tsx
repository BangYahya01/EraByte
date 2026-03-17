"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Menu, X, Home, Layers, Grid, Users, Phone } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const update = () => setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-secondary/70 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-black gradient-text flex-shrink-0">
            R&apos;aByte
          </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 xl:gap-10 text-sm md:text-base xl:text-lg">
          <Link href="/" className="hover:text-primary transition whitespace-nowrap">Beranda</Link>
          <Link href="/layanan" className="hover:text-primary transition whitespace-nowrap">Layanan</Link>
          <Link href="/portfolio" className="hover:text-primary transition whitespace-nowrap">Portfolio</Link>
          <Link href="/tim" className="hover:text-primary transition whitespace-nowrap">Tim</Link>
          <Link href="/teknologi" className="hover:text-primary transition whitespace-nowrap">Teknologi</Link>
          <Link href="/kontak" className="hover:text-primary transition whitespace-nowrap">Kontak</Link>
        </div>

        <div>
          <Link href="/" className="text-2xl md:text-3xl font-black gradient-text flex-shrink-0">
            AI Solutions
          </Link>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-secondary/95 backdrop-blur-xl border-b border-primary/20">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link href="/" className="py-2 px-4 hover:bg-primary/10 rounded transition" onClick={() => setIsOpen(false)}>Beranda</Link>
            <Link href="/layanan" className="py-2 px-4 hover:bg-primary/10 rounded transition" onClick={() => setIsOpen(false)}>Layanan</Link>
            <Link href="/portfolio" className="py-2 px-4 hover:bg-primary/10 rounded transition" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link href="/tim" className="py-2 px-4 hover:bg-primary/10 rounded transition" onClick={() => setIsOpen(false)}>Tim</Link>
            <Link href="/teknologi" className="py-2 px-4 hover:bg-primary/10 rounded transition" onClick={() => setIsOpen(false)}>Teknologi</Link>
            <Link href="/kontak" className="py-2 px-4 hover:bg-primary/10 rounded transition" onClick={() => setIsOpen(false)}>Kontak</Link>
          </div>
        </div>
      )}

      {/* Mobile Bottom Nav (for Chrome mobile & small screens) */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-secondary/95 backdrop-blur-xl border-t border-primary/20">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link href="/" className="flex flex-col items-center text-sm text-foreground hover:text-primary">
              <Home className="w-5 h-5" />
              <span>Beranda</span>
            </Link>
            <Link href="/layanan" className="flex flex-col items-center text-sm text-foreground hover:text-primary">
              <Layers className="w-5 h-5" />
              <span>Layanan</span>
            </Link>
            <Link href="/portfolio" className="flex flex-col items-center text-sm text-foreground hover:text-primary">
              <Grid className="w-5 h-5" />
              <span>Portfolio</span>
            </Link>
            <Link href="/tim" className="flex flex-col items-center text-sm text-foreground hover:text-primary">
              <Users className="w-5 h-5" />
              <span>Tim</span>
            </Link>
            <Link href="/kontak" className="flex flex-col items-center text-sm text-foreground hover:text-primary">
              <Phone className="w-5 h-5" />
              <span>Kontak</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}