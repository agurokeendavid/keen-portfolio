export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-freelance",
    role: "Freelance Web / Software / Mobile Developer",
    company: "Independent Contractor",
    location: "Philippines (Remote)",
    period: "Jan 2019 – Present",
    current: true,
    description: [
      "Enerlytic Energy Monitoring Platform – Built .NET 8 Web API backend integrating European utility APIs with Angular dashboards.",
      "Backride Pinas Booking Platform – Developed Laravel backend APIs and Angular frontend for ride booking services.",
      "Federal Gov App – Implemented Laravel APIs and mobile integrations for Android (Java) and iOS (Swift).",
      "Delivered management systems and dashboards for startups, small businesses, and academic thesis projects.",
    ],
    techStack: [".NET 8", "Angular", "Laravel", "Java (Android)", "Swift", "MySQL", "REST APIs"],
  },
  {
    id: "exp-ninja-tribe",
    role: "IT Consultant / Lead Developer",
    company: "Ninja Tribe Solutions",
    location: "Philippines",
    period: "Nov 2025 – Mar 2026",
    current: false,
    description: [
      "Bantay Pusta – Designed and developed a cross-platform monitoring system using .NET MAUI and .NET Web API.",
    ],
    techStack: [".NET MAUI", ".NET Web API", "C#"],
  },
  {
    id: "exp-bi-senior",
    role: "Senior Software Developer / Lead",
    company: "Bureau of Immigration – Republic of the Philippines",
    companyUrl: "https://immigration.gov.ph",
    location: "Manila, Philippines",
    period: "Dec 2022 – Jan 2026",
    current: false,
    description: [
      "Lead developer for BI eServices Portal, integrating Maya, GCash, and Landbank payment gateways for government applicants.",
      "Developed government data-sharing APIs with PRA, DOLE, PSA, and DICT eGov platforms.",
      "Implemented Hangfire background jobs and Serilog-based monitoring for reliability and observability.",
      "Mentored junior developers and managed production deployments via IIS and reverse proxy infrastructure.",
    ],
    techStack: ["C#", "ASP.NET Core", "Oracle", "Hangfire", "Serilog", "IIS", "REST APIs"],
  },
  {
    id: "exp-pueblo",
    role: "Web Developer",
    company: "Pueblo de Panay Inc.",
    location: "Philippines",
    period: "May 2022 – Dec 2022",
    current: false,
    description: [
      "Real Estate Management ERP – Built core modules for property and transaction management using CodeIgniter and Vue.js.",
      "Deployed the system on AWS with a MySQL backend, supporting multi-branch real estate operations.",
    ],
    techStack: ["CodeIgniter", "Vue.js", "MySQL", "AWS", "PHP"],
  },
  {
    id: "exp-bi-dev",
    role: "Software Developer",
    company: "Bureau of Immigration – Republic of the Philippines",
    companyUrl: "https://immigration.gov.ph",
    location: "Manila, Philippines",
    period: "Oct 2019 – Dec 2022",
    current: false,
    description: [
      "Developed enterprise immigration processing systems handling visa, travel document, and clearance workflows.",
      "Built and maintained applications using ASP.NET WebForms with an Oracle 19c database backend.",
    ],
    techStack: ["ASP.NET WebForms", "C#", "Oracle 19c", "SQL", "VB.NET"],
  },
  {
    id: "exp-servio",
    role: "Software Developer",
    company: "SERVIO Technologies",
    location: "Philippines",
    period: "Jul 2019 – Oct 2019",
    current: false,
    description: [
      "Developed accounting modules and third-party integrations using Microsoft Dynamics NAV and SQL Server.",
    ],
    techStack: ["Microsoft Dynamics NAV", "SQL Server", "C/AL"],
  },
];
