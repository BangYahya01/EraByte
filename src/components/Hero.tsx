"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Award } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { GoldText } from "./GoldText";

const stats = [
  { icon: Users, value: "500+", label: "Clients" },
  { icon: Briefcase, value: "200+", label: "Projects" },
  { icon: Award, value: "50+", label: "Awards" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(201, 168, 76, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}>
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
          />
        </div>
      </div>

      <div className="container relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black gradient-text mb-6">
            R'aByte
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-8 text-gray-300 max-w-4xl mx-auto">
            Transformasi Digital untuk Era Baru Teknologi
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
            Kami membantu bisnis Anda bertransformasi dengan solusi teknologi terkini dan inovatif
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Link
            href="/layanan"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-secondary rounded-full font-bold text-lg hover:bg-primary/80 transition-all transform hover:scale-105 shadow-lg"
          >
            Lihat Layanan <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary/50 border border-primary/30 text-primary rounded-full font-bold text-lg hover:bg-primary/10 transition-all transform hover:scale-105"
          >
            Portfolio Kami
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.2 }}
            >
              <GlassCard className="p-6 text-center">
                <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <GoldText className="text-3xl font-bold mb-2">{stat.value}</GoldText>
                <p className="text-gray-300">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}