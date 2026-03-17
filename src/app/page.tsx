"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Values } from "@/components/Values";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AIAgentBubble } from "@/components/AIAgentBubble";

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Services />
      <Team />
      <Contact />
      <Footer />
      <AIAgentBubble />
    </main>
  );
}