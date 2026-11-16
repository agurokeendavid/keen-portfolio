"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const getPreferredDarkMode = () => {
  if (typeof window === "undefined") return false;

  // Defaults to light regardless of OS preference — dark mode is opt-in via the toggle.
  return localStorage.getItem("theme") === "dark";
};

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Open Source", href: "/#open-source" },
  { name: "Blog", href: "/blog" },
  { name: "Consulting", href: "/#consulting" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(getPreferredDarkMode);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // On the home page, in-page anchors (/#section) smooth-scroll instead of doing a
  // full navigation. From any other page (e.g. /blog), the Link just navigates to
  // "/" and the browser jumps to the anchor on load.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const element = document.querySelector(href.slice(1));
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-40 bg-paper/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="shrink-0">
              <h1 className="font-display text-xl font-bold text-ink">Keen David Aguro</h1>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-paper/95 backdrop-blur-md shadow-sm border-b border-line"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="shrink-0"
          >
            <Link href="/#home" onClick={(e) => handleNavClick(e, "/#home")} className="font-display text-xl font-bold text-ink">
              Keen David Aguro
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate hover:text-signal px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <a
                href="/resume.pdf"
                download="Keen David Aguro Resume.pdf"
                className="inline-flex items-center gap-1.5 border border-line text-slate hover:text-signal hover:border-signal px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-md text-slate hover:text-ink hover:bg-signal-dim transition-colors"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="p-2 rounded-md text-slate hover:text-ink hover:bg-signal-dim transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden bg-paper border-t border-line"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate hover:text-signal block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Keen David Aguro Resume.pdf"
              className="inline-flex items-center gap-2 text-slate hover:text-signal px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
