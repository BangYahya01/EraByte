"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { GoldText } from "./GoldText";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Pesan telah dikirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontak" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Siap untuk memulai proyek Anda? Mari kita diskusikan bagaimana kami bisa membantu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <GlassCard>
              <GoldText className="text-2xl font-bold mb-6">
                Kirim Pesan
              </GoldText>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-white"
                    placeholder="Masukkan nama Anda"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-white"
                    placeholder="email@contoh.com"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-white resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                    suppressHydrationWarning
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors"
                  suppressHydrationWarning
                >
                  Kirim Pesan
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <GlassCard>
              <GoldText className="text-2xl font-bold mb-6">
                Informasi Kontak
              </GoldText>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">hello@erabyte.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-medium">Telepon</p>
                    <p className="text-gray-300">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-gray-300">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <GoldText className="text-xl font-bold mb-4">
                Jam Kerja
              </GoldText>
              <div className="space-y-2 text-gray-300">
                <p>Senin - Jumat: 09:00 - 18:00</p>
                <p>Sabtu: 09:00 - 15:00</p>
                <p>Minggu: Tutup</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}