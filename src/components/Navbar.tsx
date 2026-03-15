"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
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
    </nav>
  );
}