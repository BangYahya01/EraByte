"use client";

import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}