export interface Service {
  id: string;
  name: string;
  /** One-line summary shown under the name. */
  tagline: string;
  description: string;
  /** 3-5 concrete deliverables. */
  includes: string[];
  /** Hourly rate range in PHP. */
  hourly: { min: number; max: number };
  /** Longer engagement — monthly retainer or per-project, in PHP. */
  engagement: { label: string; min: number; max: number };
  /** Short qualifier shown under the price. */
  note?: string;
}

// Rates reflect a .NET / Laravel / Angular full-stack developer with 7+ years of
// production experience, priced for the Philippine market. Ranges are starting
// points — real quotes are scoped per project.
export const services: Service[] = [
  {
    id: "it-consulting",
    name: "IT Consulting",
    tagline: "Architecture reviews, technical due diligence, and senior advisory",
    description:
      "Short engagements when you need a senior pair of eyes: reviewing a system design, planning a migration, scoping a build before you commit budget, or working out why something keeps breaking in production.",
    includes: [
      "System and database architecture review with a written summary",
      "Stack and technology recommendations for a planned build",
      "Production incident investigation and a prevention plan",
      "Vendor proposal and technical requirement review",
    ],
    hourly: { min: 1500, max: 2800 },
    engagement: { label: "Monthly retainer", min: 45000, max: 90000 },
    note: "Retainer covers roughly 20-40 hours of advisory time per month.",
  },
  {
    id: "business-software",
    name: "Business Software Development",
    tagline: "Full web and mobile builds for companies and startups",
    description:
      "End-to-end delivery of a production system — requirements, database design, backend, frontend, deployment, and handover. Suited to internal tools, dashboards, client portals, and customer-facing apps on .NET, Laravel, or Angular.",
    includes: [
      "Requirements gathering and database design",
      "Backend API plus web or mobile frontend",
      "Deployment setup — Docker, CI/CD, hosting",
      "Documentation and a walkthrough for your team",
    ],
    hourly: { min: 1200, max: 2200 },
    engagement: { label: "Per project", min: 150000, max: 600000 },
    note: "Billed in milestones. Full-time monthly engagements also available from PHP 120,000/month.",
  },
  {
    id: "thesis-capstone",
    name: "Thesis & Capstone Software",
    tagline: "Web, mobile, and desktop systems for undergraduate and graduate research",
    description:
      "Development help for thesis, capstone, and dissertation projects — a working system built to your defense requirements, with the diagrams and documentation panels usually ask for. I explain the code so you can present and defend it yourself.",
    includes: [
      "Working web, mobile, or desktop application",
      "Database schema and system diagrams",
      "Setup guide and a code walkthrough so you can defend it",
      "Revisions after adviser and panel feedback",
    ],
    hourly: { min: 600, max: 1000 },
    engagement: { label: "Per project", min: 20000, max: 60000 },
    note: "Student rate. Final price depends on scope and platform — web is lowest, mobile and AR are higher.",
  },
];

/** Formats a whole-peso amount as "PHP 12,000" using the ₱ symbol. */
export function formatPeso(amount: number): string {
  return `₱${amount.toLocaleString("en-PH")}`;
}
