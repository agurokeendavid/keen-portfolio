"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Project } from "@/data/projects";
import { projectService } from "@/services/projectService";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectData = await projectService.getAllProjects();
        setProjects(projectData);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mx-auto" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I&apos;ve worked on. Each project represents a unique 
              challenge and showcases different aspects of modern software development.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => openProjectModal(project)}
              />
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in seeing more of my work?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>
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