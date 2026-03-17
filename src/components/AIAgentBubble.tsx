"use client";

import { useState } from "react";

export function AIAgentBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-3">
      {/* Chat messages when open */}
      {isOpen && (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 mb-2 max-w-xs backdrop-blur-lg border border-primary/20">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Halo! 👋 Bagaimana saya bisa membantu Anda hari ini?
          </p>
        </div>
      )}

      {/* Agent Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-4xl hover:scale-110 active:scale-95 group"
      >
        <span className="animate-bounce">🤖</span>
        {/* Waving hand animation */}
        <span className="absolute top-0 right-0 text-2xl animate-wave origin-bottom-right">
          👋
        </span>
      </button>

      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-8deg); }
          50% { transform: rotate(14deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 0.6s ease-in-out;
          animation-delay: 0.8s;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
