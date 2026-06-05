"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-8 bg-secondary/50 rounded-full border border-primary/20" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 flex items-center bg-secondary/80 dark:bg-primary/20 rounded-full p-1 border border-primary/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-inner"
      aria-label="Toggle dark mode"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="z-10 w-6 h-6 bg-white dark:bg-accent rounded-full shadow-lg flex items-center justify-center overflow-hidden"
        style={{
          marginLeft: isDark ? "1.5rem" : "0",
        }}
      >
        {isDark ? (
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-4 w-4 text-white" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-4 w-4 text-accent" />
          </motion.div>
        )}
      </motion.div>

      <div className="absolute inset-0 flex justify-between items-center px-2 opacity-30">
        <Sun className="h-3 w-3 text-accent" />
        <Moon className="h-3 w-3 text-primary" />
      </div>
    </button>
  );
}
