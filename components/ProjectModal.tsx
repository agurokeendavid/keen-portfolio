"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Modal } from "./Modal";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Project } from "@/data/projects";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Maximize, X } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
      <div className="bg-black text-white flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 md:p-8 border-b border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
            <div className="flex-1 w-full">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4"
              >
                {project.title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                {project.shortDescription}
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-row sm:flex-col lg:flex-row gap-2 sm:gap-3 w-full sm:w-auto"
            >
              {project.liveUrl && (
                <Button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className="bg-white text-black hover:bg-gray-200 flex items-center justify-center gap-2 text-sm sm:text-base flex-1 sm:flex-initial px-3 py-2"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Live Demo</span>
                  <span className="xs:hidden">Demo</span>
                </Button>
              )}
              
              {project.githubUrl && (
                <Button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black flex items-center justify-center gap-2 text-sm sm:text-base flex-1 sm:flex-initial px-3 py-2"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  Code
                </Button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column - Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Project Screenshots</h3>
              
              {/* Main Image */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800 group cursor-pointer" onClick={() => setIsFullscreen(true)}>
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
                
                {/* Fullscreen Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFullscreen(true);
                  }}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-all opacity-0 group-hover:opacity-100"
                  title="View fullscreen"
                >
                  <Maximize className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
                
                {/* Navigation Arrows */}
                {project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors z-10"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 px-2 py-0.5 sm:px-3 sm:py-1 bg-black/70 rounded-full text-xs sm:text-sm">
                  {currentImageIndex + 1} / {project.screenshots.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              {project.screenshots.length > 1 && (
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2">
                  {project.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded border-2 overflow-hidden transition-all shrink-0 ${
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
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Project Details</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Technology Stack</h4>
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
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">Key Features</h4>
                  <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-100 bg-black flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
            title="Close fullscreen"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Arrows */}
          {project.screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
                title="Previous image"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-20"
                title="Next image"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/70 rounded-full text-sm text-white">
            {currentImageIndex + 1} / {project.screenshots.length}
          </div>

          {/* Main Fullscreen Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full">
              <Image
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23111827'/%3E%3Ctext x='960' y='520' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='48' fill='%239ca3af'%3E${project.title}%3C/text%3E%3Ctext x='960' y='600' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='32' fill='%236b7280'%3EScreenshot ${currentImageIndex + 1}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}