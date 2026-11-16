"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper-raised text-slate border-t border-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Name and tagline */}
          <div
            className="text-center md:text-left"
          >
            <h3 className="font-display text-xl font-bold text-ink mb-2">Keen David Aguro</h3>
            <p className="text-slate">Full-Stack Software Developer</p>
          </div>

          {/* Center - Copyright */}
          <div
            className="text-center"
          >
            <p className="font-mono text-xs">© {currentYear} Keen David Aguro</p>
          </div>

          {/* Right - Back to top */}
          <div
            className="text-center md:text-right"
          >
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 text-slate hover:text-signal transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-line">
          <p
            className="text-center font-mono text-xs text-slate"
          >
            NEXT.JS · TYPESCRIPT · TAILWIND CSS · FRAMER MOTION
          </p>
        </div>
      </div>
    </footer>
  );
}
