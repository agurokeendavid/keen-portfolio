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
    shortDescription: "A comprehensive ASP.NET Core MVC web application designed to facilitate collaborative learning through study groups. StudyConnect enables students and learners to create, join, and manage study groups with real-time messaging, resource sharing, and meeting coordination capabilities.",
    fullDescription: "Study Connect is a comprehensive ASP.NET Core MVC web application designed to facilitate collaborative learning through study groups. The platform enables students and learners to create, join, and manage study groups with real-time messaging, resource sharing, and meeting coordination capabilities. Built with modern web technologies, it features role-based access control, subscription management, and a robust invitation system for private groups. The application showcases enterprise-level features including audit logging, feedback systems, and comprehensive user profile management.",
    thumbnail: "/projects/study_connect/dashboard.png",
    screenshots: [
      "/projects/study_connect/home.png",
      "/projects/study_connect/login.png",
      "/projects/study_connect/dashboard.png",
      "/projects/study_connect/messages.png",
      "/projects/study_connect/calendar.png",
    ],
    techStack: ["Javascript", "Bootstrap", "DevExtreme", ".NET 9 MVC", "SignalR", "MySQL", "Entity Framework", "Docker", "Github Actions"],
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
      "User Profile Management: Comprehensive user profile customization"
    ],
    githubUrl: "https://github.com/agurokeendavid/StudyConnect",
    liveUrl: "https://project-alpha.demo.com"
  },
  {
    id: "suki-web",
    title: "Suki Web",
    shortDescription: "A comprehensive ASP.NET Core MVC web application designed to facilitate collaborative learning through study groups. StudyConnect enables students and learners to create, join, and manage study groups with real-time messaging, resource sharing, and meeting coordination capabilities.",
    fullDescription: "Study Connect is a comprehensive ASP.NET Core MVC web application designed to facilitate collaborative learning through study groups. The platform enables students and learners to create, join, and manage study groups with real-time messaging, resource sharing, and meeting coordination capabilities. Built with modern web technologies, it features role-based access control, subscription management, and a robust invitation system for private groups. The application showcases enterprise-level features including audit logging, feedback systems, and comprehensive user profile management.",
    thumbnail: "/projects/study_connect/dashboard.png",
    screenshots: [
      "/projects/study_connect/home.png",
      "/projects/study_connect/login.png",
      "/projects/study_connect/dashboard.png",
      "/projects/study_connect/messages.png",
      "/projects/study_connect/calendar.png",
    ],
    techStack: ["Javascript", "Bootstrap", "DevExtreme", ".NET 9 MVC", "SignalR", "MySQL", "Entity Framework", "Docker", "Github Actions"],
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
      "User Profile Management: Comprehensive user profile customization"
    ],
    githubUrl: "https://github.com/agurokeendavid/StudyConnect",
    liveUrl: "https://project-alpha.demo.com"
  }
];

// Technology stack for About section
export const techStack = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "jQuery", category: "Frontend" },
  { name: ".NET", category: "Backend" },
  { name: "ASP.NET", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Oracle SQL", category: "Database" },
  { name: "SQL Server", category: "Database" },
  { name: "PHP", category: "Backend" },
  { name: "CodeIgniter", category: "Backend" },
  { name: "Laravel", category: "Backend" },
  { name: "Xamarin", category: "Mobile" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" }
];