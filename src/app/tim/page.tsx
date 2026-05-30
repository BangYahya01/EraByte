"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { GoldText } from "@/components/GoldText";
import Image from "next/image";

const team = [
  {
    name: "BigVorst",
    role: "CEO & Founder",
    bio: "Expert in digital transformation dengan pengalaman 10+ tahun",
    avatar: "/tim/g5.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "fBoi",
    role: "Front-End Web Developer",
    bio: "Seorang pengembang frontend yang spesialis dalam membangun user journey yang mulus",
    avatar: "/tim/fatihx.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Marsa",
    role: "UI/UX Designer",
    bio: "Designer kreatif yang fokus pada user experience yang luar biasa",
    avatar: "/tim/danix.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Kido",
    role: "Backend Developer",
    bio: "Ahli dalam membangun arsitektur backend yang scalable dan aman",
    avatar: "/tim/dodix.png",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Kenso. Eko",
    role: "Analist & business development",
    bio: "Ahli dalam menganalisis data dan mengembangkan strategi bisnis yang efektif",
    avatar: "/tim/fadilx.png",
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
                  <div className="relative w-full h-80 rounded-t-3xl overflow-hidden mb-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover rounded-t-3xl"
                    />
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
                      <image src="/icon/github.png" alt="GitHub" className="w-6 h-6"/>
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
