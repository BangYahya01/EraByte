"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { GoldText } from "@/components/GoldText";

const team = [
  {
    name: "Maulana Yahya",
    role: "CEO & Founder",
    bio: "Expert in digital transformation dengan pengalaman 10+ tahun",
    avatar: "/api/placeholder/150/150",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Fikri",
    role: "CTO",
    bio: "Spesialis dalam arsitektur sistem dan cloud computing",
    avatar: "/api/placeholder/150/150",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "L. Anank",
    role: "Lead Developer",
    bio: "Full-stack developer dengan passion di AI dan machine learning",
    avatar: "/api/placeholder/150/150",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Mardani Saputra",
    role: "UI/UX Designer",
    bio: "Designer kreatif yang fokus pada user experience yang luar biasa",
    avatar: "/api/placeholder/150/150",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  }
];

export default function Tim() {
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
              Tim Kami
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground dark:text-gray-300 max-w-2xl mx-auto px-2">
              Bertemu dengan tim profesional yang siap membantu mewujudkan visi digital Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <GlassCard className="text-center h-full group-hover:border-primary/50 transition-all duration-300">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/50 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <GoldText className="text-xl font-bold mb-2">
                    {member.name}
                  </GoldText>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-foreground dark:text-gray-300 text-sm mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                      💼
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                      🐦
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-primary transition-colors">
                      💻
                    </a>
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