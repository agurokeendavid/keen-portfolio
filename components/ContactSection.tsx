"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, Facebook } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.4 0C5.5 0 .8 4.5.8 10c0 3 1.4 5.7 3.6 7.5v3.8l3.5-1.9c1 .3 2 .4 3.1.4 5.9 0 10.6-4.5 10.6-10S17.3 0 11.4 0zm1.1 13.5l-2.7-2.9-5.2 2.9 5.7-6.1 2.8 2.9 5.1-2.9-5.7 6.1z" />
    </svg>
  );
}

export function ContactSection() {
  const contactLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:agurokeendavid@gmail.com',
      label: 'agurokeendavid@gmail.com',
      description: 'Send me an email'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/agurokeendavid',
      label: '@agurokeendavid',
      description: 'Check out my repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/agurokeendavid',
      label: 'Keen David Aguro',
      description: 'Connect with me professionally'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/agurokeendavid',
      label: 'Keen David Aguro',
      description: 'Follow me on Facebook'
    },
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      href: 'https://wa.me/639614844561',
      label: '+63 961 484 4561',
      description: 'Message me on WhatsApp'
    },
    {
      name: 'Viber',
      icon: ViberIcon,
      href: 'viber://chat?number=%2B639614844561',
      label: '+63 961 484 4561',
      description: 'Call or message me on Viber'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I&apos;m currently available for freelance work and full-time opportunities. 
                Let&apos;s discuss how we can bring your ideas to life.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{contact.name}</h4>
                    <p className="text-gray-300 text-sm">{contact.label}</p>
                    <p className="text-gray-400 text-xs">{contact.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span>Available for remote work worldwide</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}