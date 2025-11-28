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
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-2xl">
        {/* Project Image */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='140' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='18' fill='%236b7280'%3E${project.title}%3C/text%3E%3Ctext x='200' y='170' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='14' fill='%236b7280'%3EProject Image%3C/text%3E%3C/svg%3E`;
            }}
          />
          
          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                if (project.liveUrl) {
                  window.open(project.liveUrl, '_blank');
                }
              }}
              className={`p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors ${!project.liveUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!project.liveUrl}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                if (project.githubUrl) {
                  window.open(project.githubUrl, '_blank');
                }
              }}
              className={`p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors ${!project.githubUrl ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!project.githubUrl}
            >
              <Github className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  +{project.techStack.length - 4} more
                </Badge>
              )}
            </div>
          </div>

          {/* Read More Indicator */}
          <div className="pt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
              Click to view details →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}