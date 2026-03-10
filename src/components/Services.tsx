"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Design", desc: "Menyediakan layanan desain kreatif dan fungsional, termasuk desain antarmuka pengguna (UI/UX), desain grafis, dan branding." },
  { title: "Pembuatan Makalah", desc: "Membantu dalam penyusunan dan penulisan makalah atau dokumen teknis yang berkualitas tinggi, didukung oleh riset mendalam." },
  { title: "Riset", desc: "Melakukan riset pasar, riset teknologi, dan riset strategis untuk mendukung pengembangan produk, pengambilan keputusan, dan inovasi." },
  { title: "Pengembangan Solusi Modern", desc: "Menciptakan dan mengimplementasikan solusi teknologi terkini, termasuk pengembangan web, aplikasi, dan sistem berbasis teknologi daya guna." },
];

export function Services() {
  return (
    <section id="layanan" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-black text-center gradient-text mb-16"
        >
          Produk / Layanan
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 text-center hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{s.title}</h3>
              <p className="text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}