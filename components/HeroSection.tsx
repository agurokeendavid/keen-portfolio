"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { Button } from "./Button";

const manilaTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Manila",
  hour: "2-digit",
  minute: "2-digit",
});

function subscribeToMinute(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

/**
 * Current time in Manila, so remote clients can see the time-zone overlap at a glance.
 * Renders "--:--" on the server and swaps to the real time after hydration.
 */
function ManilaClock() {
  const time = useSyncExternalStore(
    subscribeToMinute,
    () => manilaTime.format(new Date()),
    () => null
  );
  return <time suppressHydrationWarning>{time ?? "--:--"}</time>;
}

// Years are computed server-side in app/page.tsx from data/experience.ts and passed in,
// so the server HTML and the hydrated client always agree.
export function HeroSection({ yearsOfExperience }: { yearsOfExperience: number }) {
  const readouts = [
    { value: `${yearsOfExperience}+`, label: "Years shipping production code" },
    { value: "2", label: "Systems live in production" },
    { value: "3", label: "Sectors: government, energy, real estate" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center w-full"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-5">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl">
                I build the software behind government portals and energy dashboards.
              </h1>

              <p className="text-lg text-slate max-w-xl leading-relaxed">
                Keen David Aguro, full-stack developer, {yearsOfExperience}+ years. I lead
                development of the Philippine Bureau of Immigration&apos;s eServices portal, and
                I built Enerlytic, an energy analytics platform running live in the UK. Around
                those: a real-estate ERP, a federal contracting platform, and mobile apps.
                .NET, Angular, and Laravel are my core stack.
              </p>
            </div>

            {/* Status readout row */}
            <dl className="flex flex-wrap gap-x-8 gap-y-3">
              {readouts.map((r) => (
                <div key={r.label} className="flex items-baseline gap-2">
                  <dt className="sr-only">{r.label}</dt>
                  <dd className="font-display text-2xl font-bold text-ink">{r.value}</dd>
                  <dd aria-hidden="true" className="font-mono text-xs text-slate uppercase tracking-wide">
                    {r.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
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
            </div>
          </div>

          {/* Right Content - Profile photo with a status caption */}
          <figure className="mx-auto lg:mx-0 w-64 sm:w-72 md:w-80">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-paper-raised">
              <Image
                src="/formal_pic.jpg"
                alt="Keen David Aguro"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-3 font-mono text-[11px] uppercase tracking-widest text-slate">
              <span className="inline-flex items-center gap-1.5 text-ink">
                <MapPin className="w-3 h-3 text-signal" aria-hidden="true" />
                Manila, Philippines
              </span>
              <span>
                <ManilaClock /> <span className="text-line" aria-hidden="true">/</span> UTC+8
              </span>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
