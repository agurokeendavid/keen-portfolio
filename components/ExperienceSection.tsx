"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "./Badge";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Timeline</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            Work Experience
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            7+ years building enterprise-grade web applications across government, energy, fintech, and real estate sectors.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-signal border-4 border-paper md:-translate-x-1.5 mt-6 z-10" />

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="bg-paper-raised rounded-2xl border border-line p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-start gap-2 mb-1">
                            <h3 className="text-lg font-bold text-ink">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <span className="shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-live-dim text-live">
                                <span className="w-1.5 h-1.5 rounded-full bg-live" />
                                Current
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-1.5 text-slate font-semibold">
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:text-signal hover:underline"
                              >
                                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                                {exp.company}
                                <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                              </a>
                            ) : (
                              <span className="flex items-center gap-1">
                                <Briefcase className="w-3.5 h-3.5 shrink-0" />
                                {exp.company}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-3 font-mono text-xs text-slate mb-5">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.description.map((point, i) => (
                          <li key={i} className="flex gap-3 text-sm text-slate leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs px-2.5 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
