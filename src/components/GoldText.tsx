"use client";

import { ReactNode } from "react";

interface GoldTextProps {
  children: ReactNode;
  className?: string;
}

export function GoldText({ children, className = "" }: GoldTextProps) {
  return (
    <span className={`text-primary font-serif ${className}`}>
      {children}
    </span>
  );
}