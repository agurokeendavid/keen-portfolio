export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  screenshots: string[];
  techStack: string[];
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
  /** Featured projects get full case-study treatment; others get a compact listing. */
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "study-connect",
    title: "Study Connect",
    shortDescription:
      "A .NET 9 MVC app for running student study groups — real-time chat, shared resources, and scheduling, with private groups gated behind invite links that expire.",
    fullDescription:
      "I built Study Connect for the parts of a study group that normally sprawl across group chats and shared drives. A member spins up a group and runs it: real-time group and direct messaging over SignalR, posted resources, and meeting times in one place. Private groups use invite links that expire, and every join, role change, and removal lands in an audit trail. Access runs across three roles — admin, moderator, and member — and premium features sit behind tiered subscription plans. There's also a feedback system and full user-profile management. MySQL and Entity Framework underneath, DevExtreme on the front end, and Docker plus GitHub Actions to ship it.",
    thumbnail: "/projects/study_connect/dashboard.png",
    screenshots: [
      "/projects/study_connect/home.png",
      "/projects/study_connect/login.png",
      "/projects/study_connect/dashboard.png",
      "/projects/study_connect/messages.png",
      "/projects/study_connect/calendar.png",
    ],
    techStack: [
      "Javascript",
      "Bootstrap",
      "DevExtreme",
      ".NET 9 MVC",
      "SignalR",
      "MySQL",
      "Entity Framework",
      "Docker",
      "Github Actions",
    ],
    features: [
      "Real-time group chat and direct messaging built on SignalR",
      "Role-based access control across admin, moderator, and member tiers",
      "Time-limited invite links for private groups, with full audit logging",
      "Multi-tier subscription plans gating premium features",
    ],
    githubUrl: "https://github.com/agurokeendavid/StudyConnect",
    featured: true,
  },
  {
    id: "federalforecastingapp",
    title: "Federal Forecasting App",
    shortDescription:
      "A Laravel platform for federal and state contracting intelligence — opportunity search with NAICS and agency filters, dataset exports, and a business-networking layer, with web and native mobile clients.",
    fullDescription:
      "Federal Forecasting App helps people working government contracts find and track opportunities. Users search federal and state listings, filter by NAICS code, organization, department, state, and year, and export the results as CSV or XLSX for their own analysis. Around that sits a community layer: a business directory, article and video modules, groups, in-app messaging, and support ticketing, with admins and sub-admins managing content and users. The Laravel app also exposes a Passport-secured API that powers the Android and iOS clients, and subscriptions are handled across all three billing systems — Stripe for web, Google Play Billing, and Apple receipt validation. Push notifications run through Firebase Cloud Messaging.",
    thumbnail: "/projects/federalforecastingapp/homepage.png",
    screenshots: [
      "/projects/federalforecastingapp/homepage.png",
      "/projects/federalforecastingapp/login.png",
      "/projects/federalforecastingapp/dashboard.png",
      "/projects/federalforecastingapp/user-homepage.png",
      "/projects/federalforecastingapp/training-videos.png",
      "/projects/federalforecastingapp/build-page.png",
      "/projects/federalforecastingapp/support-ticket.png",
      "/projects/federalforecastingapp/ios-login.png",
      "/projects/federalforecastingapp/ios-opportunities-list.png",
    ],
    techStack: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Vue.js",
      "Bootstrap",
      "jQuery",
      "Laravel Passport",
      "Livewire",
      "Firebase Cloud Messaging",
      "Stripe",
      "Google Play Billing",
      "Apple App Store Receipt Validation",
      "Laravel Excel",
      "Yajra DataTables",
      "Laravel Mix",
      "Webpack",
    ],
    features: [
      "Federal and state opportunity discovery with NAICS/org/department filtering and CSV/XLSX export",
      "Cross-platform subscription billing spanning web, Android, and iOS",
      "Secure API layer via Laravel Passport powering native mobile clients",
      "Community layer: business directory, articles, groups, and in-app messaging",
    ],
    featured: true,
  },
  {
    id: "bi-eservices",
    title: "BI eServices",
    shortDescription:
      "The Philippine Bureau of Immigration's public portal — visa applications, extensions, accreditation, compliance, payments, and online verification. Built on ASP.NET Core and Oracle.",
    fullDescription:
      "BI eServices takes immigration and accreditation transactions that used to be counter-only and puts them online: visa applications and extensions, school and liaison accreditation, compliance submissions, fee payment, and verification. The code splits into Domain and Infrastructure layers — Dapper and Dapper.Oracle for the read-heavy queries, EF Core and ASP.NET Core Identity for authentication. A separate Payment Web API handles transaction processing and official receipts. Hangfire, on Oracle storage, runs the async work: payment confirmation, email, receipt generation, and cleanup. Sessions are re-validated on every request across cookie and JWT auth for both public and internal roles. Swagger, MiniProfiler, and WebOptimizer sit in the toolchain. It's containerized with Docker Compose and deploys through GitHub Actions on self-hosted runners, with an IIS fallback path kept ready for releases that have to go out fast.",
    thumbnail: "/projects/eservices/homepage.png",
    screenshots: [
      "/projects/eservices/homepage.png",
      "/projects/eservices/login.png",
      "/projects/eservices/transactions-page.png",
      "/projects/eservices/faq-page.png",
      "/projects/eservices/annual-report.png",
      "/projects/eservices/payment-fees.png",
    ],
    techStack: [
      "C#",
      "ASP.NET Core MVC (.NET 10)",
      "ASP.NET Core Web API",
      "Razor Views",
      "DevExtreme ASP.NET Core",
      "Dapper",
      "Dapper.Oracle",
      "Entity Framework Core",
      "ASP.NET Core Identity",
      "Oracle Database",
      "Hangfire",
      "Hangfire Oracle Storage",
      "JWT Authentication",
      "Cookie Authentication",
      "Swagger/OpenAPI",
      "MiniProfiler",
      "WebOptimizer",
      "RestSharp",
      "SendGrid",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
    ],
    features: [
      "Consolidates visa, permit, and accreditation workflows into one national online portal",
      "Dedicated Payment Web API handling transaction processing and official receipt issuance",
      "Hangfire background jobs on Oracle storage for async payment, email, and cleanup tasks",
      "Cookie + JWT auth with session validation for public and internal user roles",
      "Dockerized, GitHub Actions CI/CD with a backup IIS deployment path for operational continuity",
    ],
    liveUrl: "https://e-services.immigration.gov.ph/",
    featured: true,
  },
  {
    id: "enerlytic",
    title: "Enerlytic",
    shortDescription:
      "Energy analytics for multi-site organizations — consumption and cost dashboards for electricity, gas, and water, with costs derived from uploaded invoice data down to half-hourly intervals.",
    fullDescription:
      "Enerlytic is an Angular front end over a .NET 6 Web API for organizations tracking energy use across a portfolio of sites. The main dashboard filters by company and account, plots sites on a map, and splits consumption from cost for electricity, gas, and water — with cost figures calculated from the actual invoice data users upload rather than estimated. Separate management areas cover companies, sites, meter points, meter groups, submeters, tenants, and users. An upload module ingests invoice PDFs and half-hour consumption files, with a confirmation step and processed/unprocessed states so nothing is double-counted. Reporting goes past summary charts into comparison reports, fixed and flexible budget reports, and variance monitoring, down to half-hourly granularity where the data supports it. The API validates access with claims, so a company only ever sees its own sites.",
    thumbnail: "/projects/enerlytic/homepage.png",
    screenshots: [
      "/projects/enerlytic/homepage.png",
      "/projects/enerlytic/login.png",
      "/projects/enerlytic/dashboard-consumption.png",
      "/projects/enerlytic/dashboard-cost.png",
      "/projects/enerlytic/company-management.png",
      "/projects/enerlytic/site-meter-management.png",
      "/projects/enerlytic/invoices-hourly-data.png",
    ],
    techStack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "SCSS",
      "Bootstrap",
      "Plotly.js",
      "Highcharts",
      "ApexCharts",
      "Angular Google Maps",
      "Auth0 Angular JWT",
      "ngx-datatable",
      "ng-select",
      "C#",
      "ASP.NET Web API",
      ".NET 6",
      "JWT / Claims-based Authentication",
      "REST API Design",
      "Swagger / OpenAPI",
      "SQL Server",
      "Entity Framework / EF Core",
      "Middleware Pipeline",
    ],
    features: [
      "Map-based consumption and cost dashboards across companies, sites, meters, and submeters",
      "Invoice-backed cost calculation, flagging meter points missing coverage",
      "Half-hourly interval data ingestion from XLSX with a processed/unprocessed import pipeline",
      "Comparison, budget, and variance reporting down to half-hourly granularity",
      "Claims-validated REST API with tenant-safe, multi-company access scoping",
    ],
    liveUrl: "https://enerlytic.co.uk/",
    featured: true,
  },
  {
    id: "spectacon",
    title: "Spectacon",
    shortDescription:
      "A three-page marketing site for a Project Management and Quantity Surveying firm — services, project portfolio, and capability, hand-built with Tailwind.",

    fullDescription:
      "Spectacon Percival is a QS and project-management partnership founded in 2023, working across Asia. I built their site as three pages — Home, Experience, and Capability — covering the firm's six services (Quantity Surveying, Construction Project Management, Cost Planning, and Contract Administration among them) and a portfolio of 20-plus completed projects, filterable by service and by sector: commercial, hospitality, healthcare, residential. It's a static Tailwind build with scroll-triggered reveals via IntersectionObserver, on a teal-and-sedona palette with Montserrat and Inter.",
    thumbnail: "/projects/spectacon/homepage.png",
    screenshots: [
      "/projects/spectacon/homepage.png",
      "/projects/spectacon/home-about-us.png",
      "/projects/spectacon/home-selected-projects.png",
      "/projects/spectacon/experience.png",
      "/projects/spectacon/experience-service.png",
      "/projects/spectacon/capability.png",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Google Fonts"],
    features: [
      "Multi-page marketing site: Home, Experience, and Capability",
      "Scroll-triggered reveal animations via IntersectionObserver",
      "Project portfolio grid categorized by service and sector",
      "Fully responsive, utility-first Tailwind build",
    ],
    featured: false,
  },
  {
    id: "oformat",
    title: "OFormAT",
    shortDescription:
      "A Xamarin.Forms quiz app for drilling discrete-math topics — topic-based tests, instant scoring, and a local history of past attempts. On Google Play.",
    fullDescription:
      "OFormAT is a small Android app for students revising discrete mathematics. You pick a topic, take the quiz, and get scored immediately, with a result page breaking down the attempt. Past attempts are kept in local SQLite so learners can see whether they're improving over time. It's built with Xamarin.Forms and XAML and is published on Google Play.",
    thumbnail: "/projects/oformat/login.png",
    screenshots: [
      "/projects/oformat/splashscreen.png",
      "/projects/oformat/login.png",
      "/projects/oformat/main-menu.png",
      "/projects/oformat/quiz-history.png",
      "/projects/oformat/take-quiz.png",
      "/projects/oformat/answer-question.png",
      "/projects/oformat/result-page.png",
      "/projects/oformat/published-app.png",
    ],
    techStack: [
      "C#",
      "Xamarin.Forms",
      ".NET (Xamarin)",
      "SQLite (local persistence)",
      "Android (Google Play deployment)",
      "XAML (UI layout)",
    ],
    features: [
      "Topic-based quiz selection with instant scoring and result summaries",
      "Local persistence via SQLite for offline quiz history",
      "Built with Xamarin.Forms and shipped to production on Google Play",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.kda.oformat",
    featured: false,
  },
];

// Curated list for hero section — complex/enterprise technologies a recruiter should notice
export const heroTechStack = [
  { name: "C#", category: "Backend" },
  { name: "ASP.NET Core", category: "Backend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "SignalR", category: "Backend" },
  { name: "Entity Framework", category: "Backend" },
  { name: "Oracle", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Laravel", category: "Backend" },
];

export interface TechItem {
  name: string;
  category: string;
  tier: "core" | "have-used";
  proficiency: "Expert" | "Proficient" | "Familiar";
  yearsExp?: number;
}

// Technology stack for About section
export const techStack: TechItem[] = [
  // Frontend — Core
  {
    name: "HTML",
    category: "Frontend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 7,
  },
  {
    name: "CSS",
    category: "Frontend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 7,
  },
  {
    name: "JavaScript",
    category: "Frontend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 7,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    tier: "core",
    proficiency: "Proficient",
    yearsExp: 3,
  },
  {
    name: "Angular",
    category: "Frontend",
    tier: "core",
    proficiency: "Familiar",
    yearsExp: 3,
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 7,
  },
  {
    name: "SCSS",
    category: "Frontend",
    tier: "core",
    proficiency: "Familiar",
    yearsExp: 3,
  },

  // Frontend — Have Used
  {
    name: "Vue.js",
    category: "Frontend",
    tier: "have-used",
    proficiency: "Familiar",
  },

  // Backend — Core
  {
    name: "C#",
    category: "Backend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 7,
  },
  {
    name: "ASP.NET Core",
    category: "Backend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 7,
  },
  {
    name: "Entity Framework",
    category: "Backend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 6,
  },
  {
    name: "Laravel",
    category: "Backend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 5,
  },
  {
    name: "PHP",
    category: "Backend",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 7,
  },
  {
    name: "SignalR",
    category: "Backend",
    tier: "core",
    proficiency: "Proficient",
    yearsExp: 3,
  },

  // Database — Core
  {
    name: "MySQL",
    category: "Database",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 7,
  },
  {
    name: "SQL Server",
    category: "Database",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 3,
  },
  {
    name: "Oracle",
    category: "Database",
    tier: "core",
    proficiency: "Expert",
    yearsExp: 4,
  },

  // Mobile — Core
  {
    name: ".NET MAUI",
    category: "Mobile",
    tier: "core",
    proficiency: "Proficient",
    yearsExp: 2,
  },

  // Mobile — Have Used
  {
    name: "Java",
    category: "Mobile",
    tier: "have-used",
    proficiency: "Familiar",
  },
  {
    name: "Swift",
    category: "Mobile",
    tier: "have-used",
    proficiency: "Familiar",
  },

  // DevOps — Core
  {
    name: "Docker",
    category: "DevOps",
    tier: "core",
    proficiency: "Proficient",
    yearsExp: 3,
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    tier: "core",
    proficiency: "Proficient",
    yearsExp: 3,
  },
];
