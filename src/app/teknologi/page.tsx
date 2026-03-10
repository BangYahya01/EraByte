"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { GoldText } from "@/components/GoldText";

const techCategories = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Mobile",
    technologies: ["React Native", "Flutter", "iOS", "Android", "Expo"]
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    category: "AI & ML",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "NLP", "Computer Vision"]
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "Figma", "Postman", "VS Code", "Linux"]
  }
];

export default function Teknologi() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold gradient-text mb-6">
              Teknologi Kami
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stack teknologi modern yang kami gunakan untuk membangun solusi terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {techCategories.map((cat, index) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <GoldText className="text-2xl font-bold mb-6">
                    {cat.category}
                  </GoldText>
                  <div className="flex flex-wrap gap-2">
                    {cat.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* System Architecture Diagram Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <GlassCard className="max-w-4xl mx-auto">
              <GoldText className="text-3xl font-bold mb-6">
                System Architecture
              </GoldText>
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/50 rounded-2xl flex items-center justify-center">
                <p className="text-gray-400">System Architecture Diagram akan ditampilkan di sini</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}