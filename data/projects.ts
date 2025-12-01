export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  screenshots: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Dummy project data - replace with real data later
export const projects: Project[] = [
  {
    id: "study-connect",
    title: "Study Connect",
    shortDescription: "A comprehensive ASP.NET Core MVC web application designed to facilitate collaborative learning through study groups. StudyConnect enables students and learners to create, join, and manage study groups with real-time messaging, resource sharing, and meeting coordination capabilities.",
    fullDescription: "Project Alpha is a comprehensive web application that demonstrates modern full-stack development practices. Built with React on the frontend and Node.js on the backend, it features real-time data processing, responsive design, and secure authentication. The application showcases advanced state management, API integration, and performance optimization techniques.",
    thumbnail: "/projects/study_connect/dashboard.png",
    screenshots: [
      "/projects/study_connect/home.png",
      "/projects/study_connect/login.png",
      "/projects/study_connect/dashboard.png",
      "/projects/study_connect/messages.png",
      "/projects/study_connect/calendar.png",
    ],
    techStack: ["Javascript", "Bootstrap", "DevExtreme", ".NET 9 MVC", "SignalR", "MySQL", "Entity Framework", "Docker", "Github Actions"],
    githubUrl: "https://github.com/agurokeendavid/StudyConnect",
    liveUrl: "https://project-alpha.demo.com"
  },
  {
    id: "project-beta",
    title: "Project Beta",
    shortDescription: "Enterprise-grade .NET Web API with Angular frontend for business process automation.",
    fullDescription: "Project Beta represents a sophisticated enterprise solution designed for business process automation. The application features a robust .NET Web API backend with comprehensive business logic and data validation, paired with a dynamic Angular frontend. It includes advanced features like role-based access control, automated reporting, and seamless integration with existing enterprise systems.",
    thumbnail: "/placeholder/project-beta-thumb.jpg",
    screenshots: [
      "/placeholder/project-beta-1.jpg",
      "/placeholder/project-beta-2.jpg",
      "/placeholder/project-beta-3.jpg"
    ],
    techStack: [".NET", "Angular", "SQL Server", "Entity Framework", "Azure", "Docker"],
    githubUrl: "https://github.com/keendavid/project-beta",
    liveUrl: "https://project-beta.demo.com"
  },
  {
    id: "project-gamma",
    title: "Project Gamma",
    shortDescription: "Mobile-first Progressive Web App with offline capabilities and push notifications.",
    fullDescription: "Project Gamma showcases modern PWA development with a mobile-first approach. The application provides seamless offline functionality, push notifications, and native-like performance across all devices. Built with the latest web technologies, it demonstrates advanced service worker implementation, local data synchronization, and responsive design principles.",
    thumbnail: "/placeholder/project-gamma-thumb.jpg",
    screenshots: [
      "/placeholder/project-gamma-1.jpg",
      "/placeholder/project-gamma-2.jpg",
      "/placeholder/project-gamma-3.jpg",
      "/placeholder/project-gamma-4.jpg",
      "/placeholder/project-gamma-5.jpg"
    ],
    techStack: ["Next.js", "PWA", "Service Workers", "IndexedDB", "Push API", "Workbox"],
    githubUrl: "https://github.com/keendavid/project-gamma",
    liveUrl: "https://project-gamma.demo.com"
  },
  {
    id: "project-delta",
    title: "Project Delta",
    shortDescription: "Cross-platform mobile application built with Xamarin for iOS and Android.",
    fullDescription: "Project Delta demonstrates expertise in cross-platform mobile development using Xamarin. The application provides native performance and user experience across iOS and Android platforms while maintaining a single codebase. Features include offline data storage, camera integration, GPS functionality, and seamless cloud synchronization.",
    thumbnail: "/placeholder/project-delta-thumb.jpg",
    screenshots: [
      "/placeholder/project-delta-1.jpg",
      "/placeholder/project-delta-2.jpg",
      "/placeholder/project-delta-3.jpg"
    ],
    techStack: ["Xamarin", "C#", ".NET", "SQLite", "Azure Mobile Services", "MVVM"],
    githubUrl: "https://github.com/keendavid/project-delta"
  },
  {
    id: "project-epsilon",
    title: "Project Epsilon",
    shortDescription: "DevOps automation platform with CI/CD pipelines and containerized deployments.",
    fullDescription: "Project Epsilon showcases modern DevOps practices and automation tools. The platform provides comprehensive CI/CD pipeline management, automated testing, and containerized deployment strategies. Built with scalability and reliability in mind, it demonstrates expertise in cloud infrastructure, monitoring, and deployment automation.",
    thumbnail: "/placeholder/project-epsilon-thumb.jpg",
    screenshots: [
      "/placeholder/project-epsilon-1.jpg",
      "/placeholder/project-epsilon-2.jpg",
      "/placeholder/project-epsilon-3.jpg"
    ],
    techStack: ["Docker", "GitHub Actions", "Kubernetes", "Node.js", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/keendavid/project-epsilon",
    liveUrl: "https://project-epsilon.demo.com"
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
  { name: "Xamarin", category: "Mobile" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" }
];