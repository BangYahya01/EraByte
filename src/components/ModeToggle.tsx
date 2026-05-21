"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  // 1. Ambil state 'theme' juga untuk mengecek tema yang aktif saat ini
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 border border-primary/30 hover:bg-primary/10 h-10 w-10 md:px-4 md:py-2 bg-secondary/50 text-primary" suppressHydrationWarning>
        <Sun className="h-5 w-5 md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all" />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button 
      // 2. Tambahkan onClick di sini untuk mendeteksi toggle langsung
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 border border-primary/30 hover:bg-primary/10 h-10 w-10 md:px-4 md:py-2 bg-secondary/50 text-primary" 
      suppressHydrationWarning
    >
      {/* Efek transisi ikon bawaan shadcn tetap berfungsi dengan baik */}
      <Sun className="h-5 w-5 md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 md:h-[1.2rem] md:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
