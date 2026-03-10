"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-secondary/70 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-black gradient-text">
          R'aByte
        </Link>
        <div className="flex gap-10 text-lg">
          <Link href="/" className="hover:text-primary transition">Beranda</Link>
          <Link href="/layanan" className="hover:text-primary transition">Layanan</Link>
          <Link href="/portfolio" className="hover:text-primary transition">Portfolio</Link>
          <Link href="/tim" className="hover:text-primary transition">Tim</Link>
          <Link href="/teknologi" className="hover:text-primary transition">Teknologi</Link>
          <Link href="/kontak" className="hover:text-primary transition">Kontak</Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}