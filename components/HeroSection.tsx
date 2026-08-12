"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { heroTechStack } from "@/data/projects";

const readouts = [
  { value: "7+", label: "Years shipping production code" },
  { value: "4", label: "Enterprise systems in live use" },
  { value: "3", label: "Sectors: gov, energy, fintech" },
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-paper text-ink relative overflow-hidden">
      {/* Faint blueprint grid texture */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-3 py-1.5 font-mono text-xs text-slate"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
                  </span>
                  AVAILABLE — REMOTE / WORLDWIDE
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
                >
                  I build systems worth trusting.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg text-slate max-w-lg leading-relaxed"
                >
                  Keen David Aguro — full-stack engineer, 7+ years. I&apos;ve shipped a national
                  immigration portal for the Philippine government and an energy analytics
                  platform running live in the UK, alongside fintech and real-estate systems in
                  between. .NET, Angular, and Laravel are my core stack.
                </motion.p>
              </div>

              {/* Status readout row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-x-8 gap-y-3"
              >
                {readouts.map((r) => (
                  <div key={r.label} className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-ink">{r.value}</span>
                    <span className="font-mono text-xs text-slate uppercase tracking-wide">
                      {r.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <Button
                  onClick={() => scrollToSection("#projects")}
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  View My Work
                </Button>

                <Button
                  href="/resume.pdf"
                  download="Keen David Aguro Resume.pdf"
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative w-80 h-80 md:w-96 md:h-96"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-signal-dim rounded-full blur-2xl" />

                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full border-4 border-paper-raised shadow-xl overflow-hidden bg-signal-dim">
                    <Image
                      src="/formal_pic.jpg"
                      alt="Keen David Aguro"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                      loading="eager"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='24' fill='%236b7280'%3EYour Photo Here%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Tech Strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pb-8 sm:pb-12"
        >
          <div className="bg-paper-raised rounded-2xl p-6 border border-line">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="font-mono text-slate text-xs uppercase tracking-wide hidden sm:block">
                Stack:
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                {heroTechStack.map((tech: { name: string; category: string }, index: number) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.06 }}
                  >
                    <Badge variant="outline">{tech.name}</Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
