"use client";

import Image from "next/image";
import { Badge } from "./Badge";
import { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  variant?: "featured" | "compact";
}

function StatusEyebrow({ project }: { project: Project }) {
  if (project.liveUrl) {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-live">
        <span className="w-1.5 h-1.5 rounded-full bg-live" />
        Live in production
      </span>
    );
  }
  if (project.githubUrl) {
    return (
      <span className="font-mono text-[11px] uppercase tracking-widest text-slate">
        Open source
      </span>
    );
  }
  return (
    <span className="font-mono text-[11px] uppercase tracking-widest text-slate">Shipped</span>
  );
}

export function ProjectCard({ project, onClick, variant = "featured" }: ProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={`group cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal ${isCompact ? "" : "h-full"}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View case study: ${project.title}`}
    >
      <div
        className={`bg-paper-raised rounded-xl overflow-hidden border border-line hover:border-signal transition-all duration-300 shadow-sm hover:shadow-lg ${
          isCompact ? "flex flex-col sm:flex-row sm:items-center gap-4 p-3" : "h-full flex flex-col"
        }`}
      >
        {/* Project Image */}
        <div
          className={
            isCompact
              ? "relative w-full h-36 sm:w-28 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-signal-dim"
              : "relative h-48 md:h-56 overflow-hidden bg-signal-dim"
          }
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes={isCompact ? "(max-width: 639px) 100vw, 112px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23eef1fc'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='16' fill='%236b7078'%3E${project.title}%3C/text%3E%3C/svg%3E`;
            }}
          />

          {!isCompact && (project.liveUrl || project.githubUrl) && (
            <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live site`}
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className={isCompact ? "min-w-0 flex-1 space-y-1 px-1 pb-1 sm:px-0 sm:pb-0" : "p-6 space-y-4 flex-1 flex flex-col"}>
          <div className={isCompact ? "space-y-0.5" : "space-y-2"}>
            <StatusEyebrow project={project} />
            <h3
              className={
                isCompact
                  ? "font-display font-bold text-ink line-clamp-1"
                  : "font-display text-xl md:text-2xl font-bold text-ink group-hover:text-signal transition-colors"
              }
            >
              {project.title}
            </h3>

            <p
              className={
                isCompact
                  ? "text-sm text-slate line-clamp-2"
                  : "text-slate line-clamp-3 leading-relaxed"
              }
            >
              {project.shortDescription}
            </p>
          </div>

          {!isCompact && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.techStack.length - 4} more
                </Badge>
              )}
            </div>
          )}

          {!isCompact && (
            <div className="pt-2 mt-auto">
              <span className="text-sm font-medium text-slate group-hover:text-signal transition-colors">
                View case study →
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
