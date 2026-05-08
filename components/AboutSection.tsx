"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "./Badge";
import { techStack } from "@/data/projects";

export function AboutSection() {
  // Group technologies by category
  const groupedTech = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof techStack>);

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-black dark:bg-white rounded-2xl rotate-6 opacity-10" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-800 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                <Image
                  src="/formal_pic.jpg"
                  alt="Keen David Aguro"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='0.3em' font-family='Arial, sans-serif' font-size='24' fill='%236b7280'%3EYour Photo Here%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                Passionate Software Developer
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  With over <strong className="text-black dark:text-white">7 years of professional experience</strong> in software development,
                  I have built and shipped production systems across <strong className="text-black dark:text-white">government, energy, fintech, and real estate sectors</strong> —
                  from a national immigration portal handling visa applications and payment processing to an energy analytics platform deployed in the UK.
                </p>

                <p>
                  My core stack centers on <strong className="text-black dark:text-white">.NET (ASP.NET Core, .NET MAUI)</strong>, <strong className="text-black dark:text-white">Angular</strong>, and <strong className="text-black dark:text-white">Laravel</strong>,
                  with hands-on experience in payment gateway integrations, background job orchestration with Hangfire,
                  and cross-platform mobile development for Android and iOS.
                  I work with Oracle, SQL Server, and MySQL at enterprise scale, and I apply Docker and GitHub Actions for containerized CI/CD pipelines.
                </p>

                <p>
                  I bring a <strong className="text-black dark:text-white">detail-oriented, ownership-driven approach</strong> to every engagement —
                  whether leading a development team, mentoring junior developers, or delivering end-to-end as an independent contractor.
                  I care about clean architecture and systems that hold up in production.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white text-center mb-12">
            Technology Stack
          </h3>
          
          <div className="space-y-8">
            {Object.entries(groupedTech).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-black dark:text-white">
                  {category}
                </h4>
                
                <div className="flex flex-wrap gap-3">
                  {techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.0 + categoryIndex * 0.2 + techIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <Badge 
                        variant="outline" 
                        className="bg-white dark:bg-black border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-default px-4 py-2 text-sm font-medium"
                      >
                        {tech.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}