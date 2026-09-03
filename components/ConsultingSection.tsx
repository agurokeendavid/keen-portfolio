"use client";

import { motion } from "framer-motion";
import { services, formatPeso } from "@/data/services";

function scrollToContact() {
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
}

export function ConsultingSection() {
  return (
    <section id="consulting" className="py-20 bg-paper-raised">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">How I can help</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            Consulting &amp; Services
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto leading-relaxed">
            Freelance engagements for companies, startups, and students — from a one-off
            architecture review to a full production build. Rates are listed up front so you
            can budget before we talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl border border-line bg-paper p-6"
            >
              <h3 className="font-display text-xl font-bold text-ink">{service.name}</h3>
              <p className="text-sm text-slate mt-1">{service.tagline}</p>

              <p className="text-sm text-slate leading-relaxed mt-4">{service.description}</p>

              <p className="font-mono text-[11px] text-slate uppercase tracking-widest mt-6 mb-3">
                Includes
              </p>
              <ul className="space-y-2.5">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="border-t border-line pt-5 space-y-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] text-slate uppercase tracking-widest">
                      Hourly
                    </span>
                    <span className="font-display text-base font-bold text-ink">
                      {formatPeso(service.hourly.min)} – {formatPeso(service.hourly.max)}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[11px] text-slate uppercase tracking-widest">
                      {service.engagement.label}
                    </span>
                    <span className="font-display text-base font-bold text-ink">
                      {formatPeso(service.engagement.min)} – {formatPeso(service.engagement.max)}
                    </span>
                  </div>
                  {service.note && (
                    <p className="text-xs text-slate leading-relaxed pt-1">{service.note}</p>
                  )}
                </div>

                <button
                  onClick={scrollToContact}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:underline"
                >
                  Get a quote →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center font-mono text-xs text-slate mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          Rates in Philippine peso. Ranges are a starting point — the final quote depends on
          scope, timeline, and platform. International clients billed at the equivalent USD rate.
        </motion.p>
      </div>
    </section>
  );
}
