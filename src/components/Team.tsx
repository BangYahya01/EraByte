"use client";

import { motion } from "framer-motion";

const teamSkills = [
  "Fokus pada Teknologi: Pemahaman mendalam tentang tren dan aplikasi teknologi terkini.",
  "Manajemen Proyek: Keahlian dalam mengelola proyek dari awal hingga akhir, memastikan efisiensi dan hasil optimal.",
  "Desain: Kemampuan untuk menciptakan solusi yang tidak hanya fungsional tetapi juga estetis dan user-friendly.",
  "Kewirausahaan: Semangat inovasi dan keberanian untuk mengambil risiko dalam mengembangkan ide-ide baru.",
  "Strategi Analitik: Kemampuan untuk menganalisis data dan mengembangkan strategi yang didukung oleh wawasan mendalam.",
];

export function Team() {
  return (
    <section id="tim" className="section-padding relative">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-black text-center gradient-text mb-16"
        >
          Tim Manajemen
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xl text-center max-w-4xl mx-auto mb-12 text-gray-300"
        >
          Tim di balik PT ERA BYTE SOLUTION (R&apos;abyte) adalah kumpulan individu berpengalaman yang memiliki latar belakang kuat sebagai Leader event organizer. Pengalaman ini telah membentuk kemampuan mereka dalam:
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass p-8 hover:border-purple-500/50 transition-all"
            >
              <p className="text-lg text-justify text-gray-300">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}