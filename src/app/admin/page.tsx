"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GoldText } from "@/components/GoldText";
import { Badge } from "@/components/Badge";

const kpiCards = [
  { title: "Total Users", value: "1,234", change: "+12%", icon: "👥", trend: "up" },
  { title: "Active Projects", value: "56", change: "+8%", icon: "📁", trend: "up" },
  { title: "Revenue", value: "Rp 45M", change: "+15%", icon: "💰", trend: "up" },
  { title: "Messages", value: "89", change: "-3%", icon: "💬", trend: "down" },
];

const trafficData = [
  { month: "Jan", visitors: 1200 },
  { month: "Feb", visitors: 1350 },
  { month: "Mar", visitors: 1180 },
  { month: "Apr", visitors: 1420 },
  { month: "May", visitors: 1680 },
  { month: "Jun", visitors: 1950 },
];

const recentUsers = [
  { name: "John Doe", email: "john@example.com", status: "Active", joinDate: "2024-01-15" },
  { name: "Jane Smith", email: "jane@example.com", status: "Active", joinDate: "2024-01-14" },
  { name: "Bob Johnson", email: "bob@example.com", status: "Inactive", joinDate: "2024-01-13" },
  { name: "Alice Brown", email: "alice@example.com", status: "Active", joinDate: "2024-01-12" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-foreground/60">Monitor sistem dan kelola platform R&apos;aByte</p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/60 text-sm">{kpi.title}</p>
                  <GoldText className="text-2xl font-bold">{kpi.value}</GoldText>
                  <p className={`text-sm ${kpi.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {kpi.change} dari bulan lalu
                  </p>
                </div>
                <div className="text-3xl">{kpi.icon}</div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-6">
            <GoldText className="text-xl font-bold mb-6">Traffic Overview</GoldText>
            <div className="space-y-4">
              {trafficData.map((data) => (
                <div key={data.month} className="flex items-center justify-between">
                  <span className="text-foreground/75 w-12">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-secondary/30 rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(data.visitors / 2000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-foreground/75 text-sm">{data.visitors.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <GlassCard className="p-6">
            <GoldText className="text-xl font-bold mb-6">Quick Actions</GoldText>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-center">
                <div className="text-2xl mb-2">👤</div>
                <p className="text-sm font-medium">Add User</p>
              </button>
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-center">
                <div className="text-2xl mb-2">📝</div>
                <p className="text-sm font-medium">New Content</p>
              </button>
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-center">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm font-medium">View Reports</p>
              </button>
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <p className="text-sm font-medium">Settings</p>
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <GlassCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <GoldText className="text-xl font-bold">Recent Users</GoldText>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Search users..."
                className="px-4 py-2 bg-secondary/50 border border-primary/30 rounded-lg focus:border-primary focus:outline-none text-foreground text-sm"
              />
              <button className="px-4 py-2 bg-primary text-secondary rounded-lg text-sm font-medium hover:bg-primary/80 transition-colors">
                Filter
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">Name</th>
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">Email</th>
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">Join Date</th>
                  <th className="text-left py-3 px-4 text-foreground/60 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.email} className="border-b border-primary/10">
                    <td className="py-3 px-4 text-foreground">{user.name}</td>
                    <td className="py-3 px-4 text-foreground/80">{user.email}</td>
                    <td className="py-3 px-4">
                      <Badge variant={user.status === "Active" ? "primary" : "secondary"}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-foreground/80">{user.joinDate}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-primary hover:text-primary/80 text-sm">Edit</button>
                        <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}