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
}

// Dummy project data - replace with real data later
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
      "Study Group Management: Create, browse, and join study groups based on categories",
      "Role-Based Access Control: Admin, moderator, and member roles with different permissions",
      "Real-Time Messaging: Group chat and direct messaging using SignalR",
      "Resource Sharing: Upload and share study materials within groups",
      "Meeting Coordination: Schedule and manage study group meetings",
      "Invitation System: Generate time-limited invite links for private groups",
      "Subscription Management: Multi-tier subscription plans for premium features",
      "Announcements: System-wide announcements for important updates",
      "Audit Logging: Track user activities and system events",
      "Feedback System: Collect and manage user feedback",
      "Advertisement Management: Display and manage ads",
      "User Profile Management: Comprehensive user profile customization",
    ],
    githubUrl: "https://github.com/agurokeendavid/StudyConnect",
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
      "Opportunity Intelligence: Browse federal and state opportunities with robust filters",
      "Data Export: Export opportunity records to CSV/XLSX for reporting",
      "Business Directory: Manage categorized listings by state and subcategory",
      "Role-Based Administration: Separate admin and sub-admin operational flows",
      "Article Module: Category-based article publishing, saving, likes, and comments",
      "Community Feed: User posts with media, likes, comments, and reporting",
      "Groups and Membership: Create groups, add members, and manage participation",
      "In-App Messaging: Conversation and message APIs for direct communication",
      "Meeting Planning: Create meetings, invite users, and manage attendance decisions",
      "Subscription Management: Multi-plan subscriptions across web and mobile channels",
      "Push Notifications: Firebase-based notification delivery to user devices",
      "Support and Profile Tools: Support tickets, profile editing, business interests, and capability statements",
    ],
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
      "Multi-Service Immigration Portal: Consolidates diverse BI services into one online platform with dedicated modules and forms.",
      "Visa and Permit Workflows: Supports application and management flows for services such as student visa, tourist visa extension, special work permit, and other immigration transactions.",
      "Accreditation Management: Handles school, liaison, and related accreditation processes with compliance and document submission capabilities.",
      "Payment Processing Integration: Includes payment workflows and a dedicated payment API for transaction handling and official receipt operations.",
      "Asynchronous Background Processing: Uses Hangfire with Oracle persistence for recurring and queued jobs such as payment, email, and cleanup tasks.",
      "Official Receipt and Email Automation: Processes receipt generation and notification delivery through background jobs for better reliability and throughput.",
      "Role-Based Security and Session Controls: Implements cookie and JWT auth flows, session validation, and secure identity management.",
      "Large File Upload Support: Configured for high-size uploads to support document-heavy application requirements.",
      "Verification and Tracking Features: Provides online verification, transaction monitoring, and status-driven workflows for users and administrators.",
      "Operational and Developer Tooling: Swagger/OpenAPI documentation, API versioning, request logging middleware, and profiling support in development.",
      "Containerized Deployment: Dockerized application runtime with compose-based environment configuration and persistent log mounting.",
      "CI/CD Automation: GitHub Actions pipelines for container build/deploy and backup IIS deployment strategy for operational flexibility.",
    ],
    liveUrl: "https://e-services.immigration.gov.ph/",
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
      "Energy Dashboard: Provides separate consumption and cost views with company filters, meter-type toggles, and chart-based comparisons.",
      "Map-Based Site View: Uses Google Maps to plot sites directly inside the dashboard for geographic context.",
      "Cost Tracking From Invoices: Calculates cost views from uploaded invoice data and flags meter points that are missing invoice coverage.",
      "Company and User Administration: Includes authenticated areas for company management, user-company links, and user administration.",
      "Site and Meter Management: Supports site management, meter management, meter group management, and submeter management as dedicated modules.",
      "Invoice Upload Workflow: Accepts invoice PDFs by company and supplier, shows processed and unprocessed documents, and includes an import confirmation step.",
      "Half-Hour Data Upload: Handles half-hour consumption uploads from XLSX files for meters, submeters, and water meters, with a manual submeter entry path.",
      "Comparison Reporting: Compares datasets such as actual vs forecast and electricity vs gas, with selectable granularity including hourly and half-hourly modes.",
      "Budget and Variance Reports: Includes fixed and flexible budget reports plus variance monitoring for consumption and cost-per-unit analysis.",
      "Authentication and Access Control: Uses JWT-based login, route guards, invitation-aware login, password reset flows, and one-time-password two-factor authentication.",

      "Backend API Layer: Exposes authenticated REST endpoints for dashboards, reports, company hierarchy, users, sites, meters, submeters, and uploads.",
      "Claims Validation Middleware: Validates token claims and request context to enforce secure access before business logic execution.",
      "Multi-Company Access Scoping: Restricts data visibility and operations by company/account associations for tenant-safe access control.",
      "Role-Based Authorization: Enforces permission-based access for admin and operational workflows across management modules.",
      "Data Processing Pipeline: Ingests invoice and interval data, validates payloads, and persists normalized records for downstream analytics.",
      "Reporting APIs: Serves comparison, budget, and variance datasets with filtering and time-granularity support.",
      "Auditability and Traceability: Tracks upload/processing states and operational actions for investigation and compliance needs.",
      "Scalable Data Retrieval: Supports filtered and paginated data access patterns for high-volume meter and interval datasets.",
    ],
    liveUrl: "https://enerlytic.co.uk/",
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
      "Sticky navbar with transparent-to-solid scroll transition on the homepage",
      "Responsive mobile menu with smooth open/close toggle",
      "Scroll-triggered reveal animations using IntersectionObserver",
      "Hero section with staggered CSS fade-in entrance animations",
      "Multi-page layout: Home, Experience, and Capability pages",
      "Service cards showcasing 6 core construction advisory offerings",
      "Project experience grid categorized by service type and sector",
      "Stats bar highlighting key firm metrics (20+ projects, 5+ markets)",
      "Contact form with submission feedback state",
      "Fully responsive layout built with utility-first Tailwind CSS",
    ],
  },
  {
    id: "oformat",
    title: "OFormAT",
    shortDescription:
      "A mobile quiz app for practicing and tracking understanding of foundational discrete mathematics topics through structured, topic-based assessments.",
    fullDescription:
      "OFormAT is a mobile learning application designed to help students strengthen their understanding of core discrete mathematics concepts through interactive quizzes. The app provides a guided quiz experience from login to question answering, instant scoring, and a dedicated result page for feedback. It also includes quiz history so learners can review past attempts and monitor progress over time. Built for real-world use and published on Google Play, OFormAT focuses on simple navigation, reliable performance, and an education-first user experience.",
    thumbnail: "/projects/oformat/splashscreen.png",
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
      "Splash screen and clean onboarding flow",
      "User login and personalized quiz session access",
      "Topic-based quiz selection from a main menu",
      "Interactive question-by-question answering interface",
      "Automatic scoring and instant result summary",
      "Quiz history tracking for past attempts",
      "Progress-focused learning flow for revision and practice",
      "Published production build on Google Play Store",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.kda.oformat",
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

  // AI Tools — Core
  {
    name: "Claude",
    category: "AI Tools",
    tier: "core",
    proficiency: "Proficient",
  },
  {
    name: "ChatGPT",
    category: "AI Tools",
    tier: "core",
    proficiency: "Proficient",
  },
  {
    name: "GitHub Copilot",
    category: "AI Tools",
    tier: "core",
    proficiency: "Proficient",
  },
  {
    name: "Codex",
    category: "AI Tools",
    tier: "core",
    proficiency: "Familiar",
  },
  {
    name: "Amazon Q",
    category: "AI Tools",
    tier: "core",
    proficiency: "Familiar",
  },
  {
    name: "Junie",
    category: "AI Tools",
    tier: "core",
    proficiency: "Familiar",
  },
];
