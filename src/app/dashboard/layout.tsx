"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoldText } from "@/components/GoldText";
import { GlassCard } from "@/components/GlassCard";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "Proyek", href: "/dashboard/proyek", icon: "📁" },
  { name: "Invoice", href: "/dashboard/invoice", icon: "💰" },
  { name: "Dokumen", href: "/dashboard/dokumen", icon: "📄" },
  { name: "Profil", href: "/dashboard/profil", icon: "👤" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-secondary flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-secondary/95 backdrop-blur-xl border-r border-primary/20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 px-4 border-b border-primary/20">
          <GoldText className="text-xl font-bold">R&apos;aByte</GoldText>
        </div>
        <nav className="mt-8 px-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? 'bg-primary text-secondary'
                    : 'text-foreground/70 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <GlassCard className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span>👤</span>
              </div>
              <div>
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-foreground/60">User</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        <header className="bg-secondary/50 border-b border-primary/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-foreground/60 hover:text-primary"
            >
              ☰
            </button>
            <h1 className="text-xl font-semibold text-foreground lg:ml-0 ml-4">
              Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-foreground/60">Welcome back!</span>
            </div>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}