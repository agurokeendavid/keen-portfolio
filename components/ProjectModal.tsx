"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Modal } from "./Modal";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Project } from "@/data/projects";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.screenshots.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.screenshots.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-6xl">
      <div className="bg-black text-white min-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-8 border-b border-gray-800">
          <div className="flex justify-between items-start gap-6">
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {project.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {project.shortDescription}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-3 shrink-0"
            >
              {project.liveUrl && (
                <Button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="bg-white text-black hover:bg-gray-200 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Button>
              )}
              
              {project.githubUrl && (
                <Button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Code
                </Button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-4">Project Screenshots</h3>
              
              {/* Main Image */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                <Image
                  src={project.screenshots[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23111827'/%3E%3Ctext x='300' y='180' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='24' fill='%239ca3af'%3E${project.title}%3C/text%3E%3Ctext x='300' y='220' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='18' fill='%236b7280'%3EScreenshot ${currentImageIndex + 1}%3C/text%3E%3C/svg%3E`;
                  }}
                />
                
                {/* Navigation Arrows */}
                {project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.screenshots.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {project.screenshots.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative w-20 h-14 rounded border-2 overflow-hidden transition-all shrink-0 ${
                        index === currentImageIndex 
                          ? 'border-white' 
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <Image
                        src={screenshot}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='56' viewBox='0 0 80 56'%3E%3Crect width='80' height='56' fill='%23374151'/%3E%3Ctext x='40' y='32' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='10' fill='%239ca3af'%3E${index + 1}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Project Details</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-colors"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Features/Highlights */}
              <div>
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                    <p>Modern, responsive design with mobile-first approach</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                    <p>Scalable architecture with clean code practices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                    <p>Optimized performance and user experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 shrink-0" />
                    <p>Secure implementation with best practices</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Modal>
  );
}