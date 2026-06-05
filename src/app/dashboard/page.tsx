"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GoldText } from "@/components/GoldText";
import { Badge } from "@/components/Badge";

const stats = [
  { title: "Total Proyek", value: "12", change: "+2", icon: "📁" },
  { title: "Proyek Aktif", value: "5", change: "+1", icon: "⚡" },
  { title: "Invoice Tertunda", value: "3", change: "-1", icon: "💰" },
  { title: "Dokumen", value: "28", change: "+5", icon: "📄" },
];

const recentProjects = [
  { name: "E-Commerce Platform", status: "In Progress", progress: 75 },
  { name: "Mobile App Development", status: "Review", progress: 90 },
  { name: "Website Redesign", status: "Completed", progress: 100 },
  { name: "API Integration", status: "Planning", progress: 25 },
];

export default function Dashboard() {
  return (
    <div className="space-y-4 md:space-y-6 px-2 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-sm md:text-base text-foreground/60">Pantau progress proyek dan aktivitas Anda</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/60 text-sm">{stat.title}</p>
                  <GoldText className="text-2xl font-bold">{stat.value}</GoldText>
                  <p className="text-green-400 text-sm">{stat.change} dari bulan lalu</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard className="p-6">
          <GoldText className="text-xl font-bold mb-6">Proyek Terbaru</GoldText>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.name} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{project.name}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant={project.status === "Completed" ? "primary" : "secondary"}>
                      {project.status}
                    </Badge>
                    <div className="flex-1 bg-secondary/30 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-foreground/60">{project.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <GlassCard className="p-6">
          <GoldText className="text-xl font-bold mb-6">Quick Actions</GoldText>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-center">
              <div className="text-2xl mb-2">➕</div>
              <p className="text-sm font-medium">Proyek Baru</p>
            </button>
            <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-center">
              <div className="text-2xl mb-2">📄</div>
              <p className="text-sm font-medium">Upload Dokumen</p>
            </button>
            <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-center">
              <div className="text-2xl mb-2">💰</div>
              <p className="text-sm font-medium">Buat Invoice</p>
            </button>
            <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-center">
              <div className="text-2xl mb-2">📞</div>
              <p className="text-sm font-medium">Hubungi Support</p>
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}