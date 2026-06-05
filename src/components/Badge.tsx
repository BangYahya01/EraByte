"use client";

interface BadgeProps {
  children: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
  const variantClasses = variant === "primary"
    ? "bg-primary text-secondary"
    : "bg-secondary text-primary border border-primary";

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
}