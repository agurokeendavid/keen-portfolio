"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "@/data/projects";

// Projects are loaded server-side in app/page.tsx (via projectService) and passed in,
// so they're in the initial HTML for crawlers and there's no loading flash.
export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const liveCount = featuredProjects.filter((p) => p.liveUrl).length;

  return (
    <>
      <section id="projects" className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className="text-center mb-16"
          >
            <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Case studies</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
              Selected Work
            </h2>
            <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
              {featuredProjects.length} systems I&apos;ve worked on in depth, with screenshots and
              the stack behind each. {liveCount} are live in production today.
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openProjectModal(project)}
                variant="featured"
              />
            ))}
          </div>

          {/* Other builds */}
          {otherProjects.length > 0 && (
            <div className="mt-16">
              <p className="font-mono text-xs text-slate uppercase tracking-widest mb-6">
                Other builds
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                        onClick={() => openProjectModal(project)}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Pointer to the resume for the rest of the client work */}
          <p className="mt-16 text-center font-mono text-xs text-slate uppercase tracking-widest">
            More client work is listed in my{" "}
            <a
              href="/resume.pdf"
              download="Keen David Aguro Resume.pdf"
              className="text-signal hover:underline"
            >
              resume
            </a>
          </p>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  );
}