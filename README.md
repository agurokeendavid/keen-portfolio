# Keen David Aguro - Personal Portfolio

A premium, monochrome personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**. This portfolio showcases 6+ years of professional software development experience with a clean, minimal, and modern design approach.

## Live Site

- [https://keendavidaguro-portfolio.vercel.app/](https://keendavidaguro-portfolio.vercel.app/)

![Portfolio Preview](public/portfolio-preview.jpg)

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion
- **Monochrome Design**: Strict black, white, and grayscale color palette
- **Responsive Design**: Mobile-first approach with seamless desktop scaling
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion for elegant page transitions and interactions
- **Project Gallery**: Modal-based project showcase with image carousels
- **Contact Form**: Ready-to-use contact form (UI only, backend integration needed)
- **SEO Optimized**: Built-in Next.js SEO features and semantic HTML
- **Future-Ready**: Prepared for .NET Web API backend integration

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

### Planned Backend Integration
- **.NET 10 Web API** - RESTful API for project data
- **Entity Framework** - ORM for database operations
- **SQL Server** - Database for storing project information

## 📁 Project Structure

```
keen-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page assembling all sections
├── components/
│   ├── AboutSection.tsx    # About me section with tech stack
│   ├── Badge.tsx          # Reusable badge component
│   ├── Button.tsx         # Customizable button component
│   ├── ContactSection.tsx # Contact form and information
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Landing hero section
│   ├── Modal.tsx          # Reusable modal component
│   ├── Navbar.tsx         # Navigation with theme toggle
│   ├── ProjectCard.tsx    # Individual project cards
│   ├── ProjectModal.tsx   # Project detail modal with gallery
│   └── ProjectsSection.tsx # Projects grid layout
├── data/
│   └── projects.ts        # Project data and tech stack definitions
├── lib/
│   └── utils.ts          # Utility functions (cn, etc.)
├── services/
│   └── projectService.ts # API service layer (prepared for .NET integration)
└── public/
    ├── formal_pic.jpg    # Your profile picture (REPLACE THIS)
    └── placeholder/      # Placeholder images for projects
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (recommended: use the latest LTS version)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd keen-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📝 Customization Guide

### 1. Replace Personal Information

**Update your details in:**
- `components/HeroSection.tsx` - Your name, title, and introduction
- `components/AboutSection.tsx` - Your experience description
- `components/ContactSection.tsx` - Your contact information
- `components/Footer.tsx` - Copyright information

### 2. Add Your Profile Picture

Replace the placeholder image:
```
public/formal_pic.jpg
```
- **Recommended size**: 400x400px or higher
- **Format**: JPG, PNG, or WebP
- **Aspect ratio**: 1:1 (square)

### 3. Update Project Data

Edit `data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "your-project-id",
    title: "Your Project Name",
    shortDescription: "Brief project description",
    fullDescription: "Detailed project description",
    thumbnail: "/images/your-project-thumb.jpg",
    screenshots: [
      "/images/your-project-1.jpg",
      "/images/your-project-2.jpg",
      // Add more screenshots
    ],
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://yourproject.com"
  },
  // Add more projects
];
```

### 4. Add Project Images

Create your project images:
```
public/images/
├── project1-thumb.jpg     # Thumbnail (400x300px recommended)
├── project1-1.jpg         # Screenshot 1 (1200x800px recommended)
├── project1-2.jpg         # Screenshot 2
└── ...
```

### 5. Update Technology Stack

Modify your skills in `data/projects.ts`:

```typescript
export const techStack = [
  { name: "Your Technology", category: "Your Category" },
  // Add your technologies
];
```

**Categories**: Frontend, Backend, Database, Mobile, DevOps, etc.

### 6. Customize Contact Information

Update `components/ContactSection.tsx`:
- Email address
- GitHub profile URL
- LinkedIn profile URL
- Any additional social links

## 🎨 Design Customization

### Color Scheme
The portfolio uses a strict **monochrome** design. To modify:
- **Light mode**: White backgrounds, black text
- **Dark mode**: Black backgrounds, white text
- **Accents**: Only grayscale colors allowed

### Animations
Framer Motion animations are configured in each component. To modify:
- **Initial**: Starting state of animations
- **Animate**: Target state of animations
- **Transition**: Animation timing and easing

## 🔧 Backend Integration (.NET Web API)

The portfolio is prepared for .NET Web API integration. See `services/projectService.ts` for:

### API Endpoints (Planned)
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get project by ID
- `GET /api/projects/by-technology/{tech}` - Filter by technology
- `POST /api/contact` - Submit contact form

### Environment Variables
Create `.env.local`:
```bash
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

### Authentication (Optional)
The service layer includes commented examples for JWT authentication integration.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## ⚡ Performance Optimization

- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: System fonts for fast loading
- **Bundle Analysis**: Run `npm run build` to analyze

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Works out of the box
- **Railway**: Full-stack deployment ready
- **AWS**: Use AWS Amplify or custom setup

## 📊 SEO and Analytics

### Built-in SEO
- Semantic HTML structure
- Meta tags in `app/layout.tsx`
- OpenGraph and Twitter Card support

### Add Analytics
Add Google Analytics or your preferred analytics platform in `app/layout.tsx`.

## 🧪 Testing

### Development Testing
```bash
npm run build    # Build for production
npm start        # Test production build locally
```

### Linting
```bash
npm run lint     # Run ESLint
```

## 🔄 Future Updates

### Version 2.0 (Planned)
- [ ] .NET Web API backend
- [ ] Admin panel for project management
- [ ] Blog section
- [ ] Advanced animations
- [ ] Multi-language support

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [GitHub Issues](link-to-your-issues)
2. Review this documentation
3. Contact me at [your-email@example.com](mailto:your-email@example.com)

---

**Built with ❤️ by Keen David Aguro**

*This portfolio demonstrates modern web development practices and serves as a template for other developers.*
