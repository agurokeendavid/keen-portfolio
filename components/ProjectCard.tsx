"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./Badge";
import { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
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

export function ProjectCard({ project, index, onClick, variant = "featured" }: ProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`bg-paper-raised rounded-xl overflow-hidden border border-line hover:border-signal transition-all duration-300 shadow-sm hover:shadow-lg ${
          isCompact ? "flex items-center gap-4 p-3" : ""
        }`}
      >
        {/* Project Image */}
        <div
          className={
            isCompact
              ? "relative w-24 h-20 sm:w-28 sm:h-24 shrink-0 overflow-hidden rounded-lg bg-signal-dim"
              : "relative h-48 md:h-56 overflow-hidden bg-signal-dim"
          }
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes={isCompact ? "112px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23eef1fc'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='16' fill='%236b7078'%3E${project.title}%3C/text%3E%3C/svg%3E`;
            }}
          />

          {!isCompact && (
            <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.liveUrl) window.open(project.liveUrl, "_blank");
                }}
                className={`p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors ${
                  !project.liveUrl ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!project.liveUrl}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.githubUrl) window.open(project.githubUrl, "_blank");
                }}
                className={`p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors ${
                  !project.githubUrl ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!project.githubUrl}
              >
                <Github className="w-5 h-5" />
              </motion.button>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className={isCompact ? "min-w-0 flex-1 space-y-1" : "p-6 space-y-4"}>
          <div className={isCompact ? "space-y-0.5" : "space-y-2"}>
            <StatusEyebrow project={project} />
            <h3
              className={
                isCompact
                  ? "font-display font-bold text-ink truncate"
                  : "font-display text-xl md:text-2xl font-bold text-ink group-hover:text-signal transition-colors"
              }
            >
              {project.title}
            </h3>

            <p
              className={
                isCompact
                  ? "text-sm text-slate truncate"
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
            <div className="pt-2">
              <span className="text-sm font-medium text-slate group-hover:text-signal transition-colors">
                View case study →
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
