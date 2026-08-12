"use client";

import { motion } from "framer-motion";
import { techStack, TechItem } from "@/data/projects";

export function SkillsStrip() {
  const coreTech = techStack.filter((t) => t.tier === "core");

  const grouped = coreTech.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = [];
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, TechItem[]>);

  return (
    <section aria-label="Core stack" className="border-y border-line bg-paper-raised py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-x-10 gap-y-5">
          {Object.entries(grouped).map(([category, techs], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className="font-mono text-[11px] text-slate uppercase tracking-widest">
                {category}
              </p>
              <p className="text-sm text-ink">
                {techs.map((t) => t.name).join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
