import { ExternalLink } from "lucide-react";
import { experiences, type Experience } from "@/data/experience";

function ExperienceMeta({ exp }: { exp: Experience }) {
  return (
    <div className="font-mono text-xs text-slate uppercase tracking-wide flex flex-wrap gap-x-4 gap-y-1.5 md:flex-col">
      <span className="text-ink">{exp.period}</span>
      <span>{exp.location}</span>
      {exp.current && (
        <span className="inline-flex items-center gap-1.5 text-live">
          <span className="w-1.5 h-1.5 rounded-full bg-live" />
          Current
        </span>
      )}
    </div>
  );
}

export function ExperienceSection({ yearsOfExperience }: { yearsOfExperience: number }) {
  return (
    <section id="experience" className="py-20 bg-paper">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Timeline</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            Work Experience
          </h2>
          <p className="text-lg text-slate max-w-2xl">
            {yearsOfExperience}+ years, most of it at the Bureau of Immigration, with freelance
            and contract work running alongside.
          </p>
        </div>

        <ol>
          {experiences.map((exp) => (
            <li key={exp.id} className="group grid md:grid-cols-[13rem_1fr] md:gap-x-10">
              {/* Meta column (desktop) */}
              <div className="hidden md:block pt-1">
                <ExperienceMeta exp={exp} />
              </div>

              {/* Content column — carries the continuous timeline rule */}
              <div className="relative border-l border-line pl-8 md:pl-10 pb-12 group-last:pb-0">
                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-signal ring-4 ring-paper" />

                <div className="md:hidden mb-3">
                  <ExperienceMeta exp={exp} />
                </div>

                <h3 className="font-display text-xl font-bold text-ink">{exp.role}</h3>
                <p className="text-slate font-medium mt-0.5">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-signal hover:underline"
                    >
                      {exp.company}
                      <ExternalLink className="inline w-3 h-3 ml-1 opacity-60 align-baseline" />
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.description.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-slate leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-slate shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 font-mono text-[11px] text-slate uppercase tracking-wide">
                  {exp.techStack.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
