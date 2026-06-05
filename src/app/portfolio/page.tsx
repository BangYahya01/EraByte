"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { GlassCard } from "@/components/GlassCard";
import { Badge } from "@/components/Badge";
import { GoldText } from "@/components/GoldText";

const categories = ["All", "Web", "Mobile", "AI", "Cloud"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Platform e-commerce modern dengan payment gateway terintegrasi",
    image: "/api/placeholder/400/300",
    tech: ["Next.js", "Stripe", "MongoDB"],
    link: "#"
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile",
    description: "Aplikasi tracking kebugaran dengan AI-powered insights",
    image: "/api/placeholder/400/300",
    tech: ["React Native", "TensorFlow", "Firebase"],
    link: "#"
  },
  {
    title: "AI Chatbot",
    category: "AI",
    description: "Chatbot cerdas untuk customer service otomatis",
    image: "/api/placeholder/400/300",
    tech: ["Python", "OpenAI", "FastAPI"],
    link: "#"
  },
  {
    title: "Cloud Migration",
    category: "Cloud",
    description: "Migrasi infrastruktur ke cloud dengan zero downtime",
    image: "/api/placeholder/400/300",
    tech: ["AWS", "Docker", "Kubernetes"],
    link: "#"
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
              Portfolio Kami
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 dark:text-gray-300 max-w-2xl mx-auto px-2">
              Kumpulan proyek terbaik yang telah kami kerjakan
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-secondary"
                    : "bg-secondary text-primary border border-primary hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <GlassCard className="h-full group-hover:border-primary/50 transition-all duration-300">
                  <div className="mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/50 rounded-2xl mb-4"></div>
                    <Badge className="mb-2">{project.category}</Badge>
                    <GoldText className="text-xl font-bold mb-2">
                      {project.title}
                    </GoldText>
                    <p className="text-foreground/80 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-primary text-secondary py-3 rounded-full font-medium hover:bg-primary/80 transition-colors">
                    Lihat Detail
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}