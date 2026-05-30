"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const values = [
  { title: "Teknologi Daya Guna", desc: "Mengembangkan dan menerapkan teknologi yang memberikan manfaat nyata dan berkelanjutan." },
  { title: "Riset", desc: "Melakukan penelitian mendalam untuk memahami kebutuhan pasar dan mengembangkan solusi inovatif." },
  { title: "Edukasi", desc: "Berkomitmen untuk berbagi pengetahuan dan memberdayakan klien serta masyarakat melalui pemahaman teknologi." },
  { title: "Solusi", desc: "Menyediakan solusi yang tepat guna dan efektif untuk setiap tantangan yang dihadapi klien." },
  { title: "Alternatif", desc: "Menawarkan pendekatan dan pilihan baru yang inovatif dalam memenuhi kebutuhan klien." },
];

export function Values() {
  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-black text-center gradient-text mb-16"
        >
          Nilai-nilai Perusahaan
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={1000}
                className="w-full"
              >
                <div className="glass p-8 hover:border-purple-500/50 transition-all h-full">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">{v.title}</h3>
                  <p className="text-gray-300">{v.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}