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

// Rates are anchored to a real full-time senior salary (~PHP 100k/month, about
// PHP 570/hour as an employee) with the usual freelance multiple on top. Ranges
// are starting points — real quotes are scoped per project. Keep the student tier
// close to the employee rate.
export const services: Service[] = [
  {
    id: "it-consulting",
    name: "IT Consulting",
    tagline: "A second opinion on your architecture, your build plan, or a production problem",
    description:
      "Sometimes you just need an experienced developer to check what you have before you commit to it. I review system and database designs, help plan a migration, scope a build so you know the cost early, or dig into a production issue that keeps coming back. These are short engagements, usually a few days to a few weeks.",
    includes: [
      "System and database architecture review with a written summary",
      "Stack and technology recommendations for a planned build",
      "Production incident investigation and a prevention plan",
      "Vendor proposal and technical requirement review",
    ],
    hourly: { min: 1600, max: 2200 },
    engagement: { label: "Monthly retainer", min: 40000, max: 70000 },
    note: "Covers about 20 to 30 hours of advisory time each month.",
  },
  {
    id: "business-software",
    name: "Business Software Development",
    tagline: "Full web and mobile builds for companies and startups",
    description:
      "I build the whole system. That runs from talking through the requirements and designing the database to writing the backend and frontend, setting up deployment, and handing it over with documentation. It works for internal tools, dashboards, client portals, and customer-facing apps. My main stacks are .NET, Laravel, and Angular.",
    includes: [
      "Requirements gathering and database design",
      "Backend API plus web or mobile frontend",
      "Deployment setup with Docker, CI/CD, and hosting",
      "Documentation and a walkthrough for your team",
    ],
    hourly: { min: 1100, max: 1800 },
    engagement: { label: "Per project", min: 120000, max: 450000 },
    note: "Billed in milestones. Full-time monthly engagements start at PHP 130,000.",
  },
  {
    id: "thesis-capstone",
    name: "Thesis & Capstone Software",
    tagline: "Web, mobile, and desktop systems for undergraduate and graduate research",
    description:
      "I help students build the software part of a thesis, capstone, or dissertation. You get a working system that meets your defense requirements, along with the database and system diagrams your panel will ask for. I also walk you through the code so you can present it and answer questions on your own.",
    includes: [
      "Working web, mobile, or desktop application",
      "Database schema and system diagrams",
      "Setup guide and a code walkthrough so you can defend it",
      "Revisions after adviser and panel feedback",
    ],
    hourly: { min: 550, max: 900 },
    engagement: { label: "Per project", min: 18000, max: 50000 },
    note: "Student rate. The price depends on the scope and platform. Web projects are the lowest, mobile and AR are higher.",
  },
];

// Focused capabilities that usually sit inside a project above, but can be scoped
// on their own. Billed at the relevant tier's hourly rate.
export const alsoAvailable: string[] = [
  "Payment gateway and third-party API integration",
  "Legacy system maintenance and safe modernization",
  "CI/CD and deployment setup (Docker, GitHub Actions, IIS)",
  "Monitoring and analytics dashboards",
];

/** Formats a whole-peso amount as "PHP 12,000" using the ₱ symbol. */
export function formatPeso(amount: number): string {
  return `₱${amount.toLocaleString("en-PH")}`;
}
