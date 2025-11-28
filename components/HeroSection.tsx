"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { techStack } from "@/data/projects";

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Tech icons for the floating strip
  const heroTechStack = techStack.slice(0, 8); // Show first 8 technologies

  return (
    <section id="home" className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-300 text-lg font-medium"
                >
                  Hello, I&apos;m
                </motion.h2>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Keen David
                  </span>
                  <br />
                  <span className="text-white">Aguro</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-xl md:text-2xl text-gray-300 font-medium"
                >
                  Software Developer — 6+ Years of Experience
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-lg text-gray-400 max-w-lg leading-relaxed"
                >
                  I build modern, scalable web applications and enterprise solutions
                  using cutting-edge technologies and best practices.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => scrollToSection("#projects")}
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-3 text-lg"
                >
                  View My Work
                </Button>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="relative w-80 h-80 md:w-96 md:h-96"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-full rounded-full border-4 border-white/30 overflow-hidden bg-linear-to-br from-gray-200 to-gray-400">
                    <Image
                      src="/formal_pic.jpg"
                      alt="Keen David Aguro"
                      fill
                      className="object-cover"
                      priority
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='24' fill='%236b7280'%3EYour Photo Here%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Tech Strip */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-20 left-0 right-0 z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="text-gray-300 text-sm font-medium hidden sm:block">
                Technologies I work with:
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                {heroTechStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
                  >
                    <Badge variant="outline" className="border-white/30 text-white hover:bg-white/20">
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}