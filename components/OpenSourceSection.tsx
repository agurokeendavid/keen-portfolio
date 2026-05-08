"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Star, GitFork, Users, BookOpen, ExternalLink, Loader2,
} from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 5.803c.93.004 1.867.138 2.998.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const GITHUB_USERNAME = "agurokeendavid";
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

// Deterministic Tailwind opacity classes — avoids SSR/client float mismatch
const OPACITY_CLASSES = [
  "opacity-10", "opacity-20", "opacity-30",
  "opacity-40", "opacity-50", "opacity-60", "opacity-70",
] as const;

const GRAPH_CELLS = Array.from({ length: 182 }, (_, i) => {
  const v = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  const frac = v - Math.floor(v);
  return OPACITY_CLASSES[Math.floor(frac * OPACITY_CLASSES.length)];
});

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

interface GitHubStats {
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  followers: number;
  topRepos: GitHubRepo[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  "C#": "#178600",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  PHP: "#4F5D95",
  Python: "#3572A5",
  Java: "#b07219",
  Swift: "#F05138",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  Angular: "#dd0031",
};

function StatCard({
  label, value, icon: Icon, loading, delay,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
  loading: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-5 text-center"
    >
      <Icon className="w-5 h-5 mx-auto mb-2 text-gray-400 dark:text-gray-600" />
      {loading ? (
        <div className="h-8 w-12 mx-auto rounded bg-gray-200 dark:bg-gray-800 animate-pulse mb-1" />
      ) : (
        <p className="text-2xl font-bold text-black dark:text-white">{value}</p>
      )}
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</p>
    </motion.div>
  );
}

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const color = repo.language ? (LANGUAGE_COLORS[repo.language] ?? "#6b7280") : "#6b7280";
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      className="block rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="font-semibold text-black dark:text-white text-sm truncate">{repo.name}</p>
        <ExternalLink className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
      </div>

      {repo.description && (
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-3">
          {repo.description}
        </p>
      )}

      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star className="w-3 h-3" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="w-3 h-3" />
          {repo.forks_count}
        </span>
      </div>
    </motion.a>
  );
}

export function OpenSourceSection() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("API error");
        const data: GitHubStats = await res.json();
        setStats(data);
      } catch {
        // silently keep "—" placeholders on error
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const statCards = [
    { label: "Public Repos", value: stats?.publicRepos ?? "—", icon: BookOpen },
    { label: "Total Stars",  value: stats?.totalStars  ?? "—", icon: Star },
    { label: "Total Forks",  value: stats?.totalForks  ?? "—", icon: GitFork },
    { label: "Followers",    value: stats?.followers   ?? "—", icon: Users },
  ];

  return (
    <section id="open-source" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            GitHub &amp; Open Source
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My public work, open source contributions, and community activity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: profile card · stats · top repos ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6 flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-black dark:bg-white flex items-center justify-center shrink-0">
                <GitHubIcon className="w-8 h-8 text-white dark:text-black" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-black dark:text-white text-lg">@{GITHUB_USERNAME}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
                  Full-Stack Developer · Philippines
                </p>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-black dark:text-white hover:underline"
                >
                  View GitHub Profile
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {statCards.map(({ label, value, icon }, index) => (
                <StatCard
                  key={label}
                  label={label}
                  value={value}
                  icon={icon}
                  loading={loading}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>

            {/* Top repositories */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Top Repositories
                </p>
                {loading && <Loader2 className="w-3.5 h-3.5 animate-spin text-gray-400" />}
              </div>

              {loading ? (
                <div className="space-y-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-4 space-y-2 animate-pulse"
                    >
                      <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-800" />
                      <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-800" />
                      <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-800" />
                    </div>
                  ))}
                </div>
              ) : stats?.topRepos.length ? (
                <div className="space-y-3">
                  {stats.topRepos.map((repo, i) => (
                    <RepoCard key={repo.id} repo={repo} index={i} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  No public repositories found.
                </p>
              )}
            </div>
          </motion.div>

          {/* ── Right: contribution graph · CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contribution graph */}
            <div className="rounded-2xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-base font-semibold text-black dark:text-white">
                    Contribution Graph
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5">
                    Last 6 months · preview
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
                  Needs PAT
                </span>
              </div>

              <div className="grid grid-cols-[repeat(26,_1fr)] gap-1">
                {GRAPH_CELLS.map((cls, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-sm bg-gray-300 dark:bg-gray-700 ${cls}`}
                  />
                ))}
              </div>

              <p className="text-xs text-center text-gray-400 dark:text-gray-600 mt-4">
                Add <code className="font-mono bg-gray-200 dark:bg-gray-800 px-1 rounded">GITHUB_PAT</code> to{" "}
                <code className="font-mono bg-gray-200 dark:bg-gray-800 px-1 rounded">.env.local</code> to unlock live data
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-6">
              <h3 className="font-bold text-black dark:text-white mb-2">
                Want to collaborate?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                I&apos;m open to contributing to open source projects, reviewing code, or
                pairing on interesting engineering problems.
              </p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                <GitHubIcon className="w-4 h-4" />
                Follow on GitHub
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
