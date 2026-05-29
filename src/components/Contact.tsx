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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xpznqkgj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontak" className="section-padding bg-secondary px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 md:mb-6">
            Hubungi Kami
          </h2>
          <p className="text-base md:text-xl text-foreground/80 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Siap untuk memulai proyek Anda? Mari kita diskusikan bagaimana kami bisa membantu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto px-2 md:px-0">
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
                  <label className="block text-sm font-medium text-foreground/80 dark:text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-foreground dark:text-white"
                    placeholder="Masukkan nama Anda"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-foreground dark:text-white"
                    placeholder="email@contoh.com"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 dark:text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-foreground dark:text-white resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                    suppressHydrationWarning
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-secondary py-3 rounded-lg font-medium hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  suppressHydrationWarning
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-green-400 text-sm mt-2">Pesan berhasil dikirim!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm mt-2">Gagal mengirim pesan. Coba lagi.</p>
                )}
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
                    <p className="text-foreground/80 dark:text-gray-300">hello@erabyte.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-medium">Telepon</p>
                    <p className="text-foreground/80 dark:text-gray-300">+62 812-3456-7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-medium">Alamat</p>
                    <p className="text-foreground/80 dark:text-gray-300">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <GoldText className="text-xl font-bold mb-4">
                Jam Kerja
              </GoldText>
              <div className="space-y-2 text-foreground/80 dark:text-gray-300">
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