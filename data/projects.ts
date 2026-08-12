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
      "A comprehensive ASP.NET Core MVC web application designed to facilitate collaborative learning through study groups. StudyConnect enables students and learners to create, join, and manage study groups with real-time messaging, resource sharing, and meeting coordination capabilities.",
    fullDescription:
      "Study Connect is a comprehensive ASP.NET Core MVC web application designed to facilitate collaborative learning through study groups. The platform enables students and learners to create, join, and manage study groups with real-time messaging, resource sharing, and meeting coordination capabilities. Built with modern web technologies, it features role-based access control, subscription management, and a robust invitation system for private groups. The application showcases enterprise-level features including audit logging, feedback systems, and comprehensive user profile management.",
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
      "A full-stack federal procurement and business networking platform that helps users discover opportunities, apply advanced filters, export datasets, and collaborate through social and communication features.",
    fullDescription:
      "Federal Forecasting App is a Laravel-based web and API platform built for government-contracting intelligence and community engagement. It combines federal and state opportunity discovery with NAICS, organization, department, state, and year-based filtering, plus export workflows for analysis and reporting. The system includes multi-role administration (admin and sub-admin), article and video content modules, a business directory, support ticketing, and push notifications. It also supports mobile clients through secure API authentication and includes cross-platform subscription handling for web, Android, and iOS billing workflows.",
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
      "A multi-module digital immigration services platform for the Bureau of Immigration Philippines, built with ASP.NET Core MVC and Oracle, enabling end-to-end online applications, payments, compliance processing, and verification workflows.",
    fullDescription:
      "BI eServices is an enterprise-grade web platform that digitizes immigration and accreditation services for the Bureau of Immigration Philippines. The system centralizes multiple public-facing and internal workflows such as visa applications, visa extensions, school and liaison accreditation, compliance submissions, payment processing, and online verification. It uses a layered architecture with Domain and Infrastructure projects, combining Dapper-based repositories and Entity Framework Core/Identity for robust data access and authentication flows. The platform includes a dedicated Payment Web API, background job orchestration via Hangfire with Oracle storage, asynchronous email and official receipt processing, and operational tooling such as Swagger, profiling, and structured deployment pipelines. It is containerized for Docker-based deployment and also supports CI/CD automation via GitHub Actions on self-hosted runners.",
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
      "Energy analytics platform for monitoring consumption, invoice-backed costs, and interval data across companies, sites, meters, and submeters.",
    fullDescription:
      "Enerlytic is an Angular-based energy management frontend built around authenticated dashboards, reporting, and operational data workflows. Its main dashboard combines company and account filters, a site map, and separate consumption and cost views for electricity, gas, and water, with cost calculations tied directly to uploaded invoice data. The application includes dedicated management areas for companies, sites, meter points, meter groups, submeters, tenants, and users. A separate upload module handles invoice PDFs as well as half-hour consumption files, with confirmation steps and processed versus unprocessed document states. Reporting goes beyond summary charts with comparison reports, fixed and flexible budget reports, and variance monitoring, including hourly and half-hourly granularity where supported.",
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
      "A professional marketing website for Spectacon Percival, a Project Management & Quantity Surveying firm operating across Asia.",

    fullDescription:
      "Spectacon Percival is a multi-page company website built for a partnership firm of Project Managers and Quantity Surveyors established in 2023. The site presents the firm's six core services — including Quantity Surveying, Construction Project Management, Cost Planning, and Contract Administration — alongside a curated portfolio of 20+ delivered projects across commercial, hospitality, healthcare, and residential sectors in Asia. The design uses a refined teal and sedona color palette with Montserrat and Inter typography to reflect a professional, trust-focused brand identity.",
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
      "A mobile quiz app for practicing and tracking understanding of foundational discrete mathematics topics through structured, topic-based assessments.",
    fullDescription:
      "OFormAT is a mobile learning application designed to help students strengthen their understanding of core discrete mathematics concepts through interactive quizzes. The app provides a guided quiz experience from login to question answering, instant scoring, and a dedicated result page for feedback. It also includes quiz history so learners can review past attempts and monitor progress over time. Built for real-world use and published on Google Play, OFormAT focuses on simple navigation, reliable performance, and an education-first user experience.",
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
