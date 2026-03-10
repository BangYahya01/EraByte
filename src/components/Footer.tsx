"use client";

import { GoldText } from "./GoldText";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <GoldText className="text-2xl font-bold mb-4">
              EraByte
            </GoldText>
            <p className="text-gray-300 mb-4">
              Transformasi digital untuk masa depan bisnis Anda
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">🐦</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">💼</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">💻</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Layanan</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/layanan" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="/layanan" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="/layanan" className="hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="/layanan" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Perusahaan</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="/tim" className="hover:text-primary transition-colors">Tim</a></li>
              <li><a href="/portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="/teknologi" className="hover:text-primary transition-colors">Teknologi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kontak</h3>
            <ul className="space-y-2 text-gray-300">
              <li>hello@erabyte.com</li>
              <li>+62 812-3456-7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EraByte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}