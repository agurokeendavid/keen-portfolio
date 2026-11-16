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
          {Object.entries(grouped).map(([category, techs]) => (
            <div
              key={category}
              className="space-y-2"
            >
              <p className="font-mono text-[11px] text-slate uppercase tracking-widest">
                {category}
              </p>
              <p className="text-sm text-ink">
                {techs.map((t) => t.name).join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
