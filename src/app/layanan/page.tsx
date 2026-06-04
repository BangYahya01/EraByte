"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { GoldText } from "@/components/GoldText";

const services = [
  {
    title: "Web Development",
    description: "Membangun website modern dengan teknologi terkini",
    icon: "🌐",
    features: ["React", "Next.js", "TypeScript"]
  },
  {
    title: "Mobile Apps",
    description: "Aplikasi mobile cross-platform yang powerful",
    icon: "📱",
    features: ["React Native", "Flutter", "iOS/Android"]
  },
  {
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik dan user-friendly",
    icon: "🎨",
    features: ["Figma", "Adobe XD", "Prototyping"]
  },
  {
    title: "Cloud Solutions",
    description: "Solusi cloud computing untuk skalabilitas",
    icon: "☁️",
    features: ["AWS", "Azure", "Google Cloud"]
  },
  {
    title: "AI & Machine Learning",
    description: "Implementasi kecerdasan buatan untuk bisnis",
    icon: "🤖",
    features: ["Python", "TensorFlow", "NLP"]
  },
  {
    title: "Consulting",
    description: "Konsultasi teknologi untuk transformasi digital",
    icon: "💡",
    features: ["Strategy", "Architecture", "Optimization"]
  }
];

export default function Layanan() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <section className="section-padding pt-28">
        <div className="container mx-auto px-2 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4 md:mb-6">
              Layanan Kami
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground dark:text-gray-300 max-w-2xl mx-auto px-2">
              Solusi teknologi lengkap untuk membawa bisnis Anda ke era digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <GlassCard className="h-full p-8 text-center group-hover:border-primary/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <GoldText className="text-2xl font-bold mb-4">
                      {service.title}
                    </GoldText>
                    <p className="text-foreground dark:text-gray-300 mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}