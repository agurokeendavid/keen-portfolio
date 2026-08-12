"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-display text-xl font-bold text-ink mb-2">Keen David Aguro</h3>
            <p className="text-slate">Software Developer</p>
          </motion.div>

          {/* Center - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="flex items-center justify-center gap-2">
              © {currentYear} Made with
              <Heart className="w-4 h-4 text-live fill-current" />
              by Keen David Aguro
            </p>
          </motion.div>

          {/* Right - Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 text-slate hover:text-signal transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-8 border-t border-line">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center font-mono text-xs text-slate"
          >
            NEXT.JS · TYPESCRIPT · TAILWIND CSS · FRAMER MOTION
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
