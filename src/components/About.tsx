"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="tentang" className="section-padding relative">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-center gradient-text mb-16"
        >
          Tentang Kami
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass p-12 max-w-5xl mx-auto text-lg leading-relaxed text-gray-300"
        >
          <p className="mb-6">
            PT ERA BYTE SOLUTION (R&apos;abyte) didirikan pada tanggal 8 Agustus 2025. Berangkat dari latar belakang tim yang kuat dalam kepemimpinan event organizer yang berfokus pada teknologi, R&apos;abyte hadir sebagai entitas inovatif yang berdedikasi pada pengembangan solusi modern dengan mengedepankan teknologi daya guna.
          </p>
          <p>
            Kami percaya bahwa teknologi harus menjadi alat yang memberdayakan dan memberikan nilai nyata dalam setiap aspek kehidupan dan bisnis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}