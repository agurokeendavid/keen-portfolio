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

interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubStats {
  publicRepos: number;
  totalStars: number;
  totalForks: number;
  followers: number;
  topRepos: GitHubRepo[];
  contributions: { total: number; weeks: ContributionWeek[] } | null;
}

function getContributionOpacity(count: number): string {
  if (count === 0) return "opacity-10";
  if (count <= 2) return "opacity-30";
  if (count <= 5) return "opacity-50";
  if (count <= 9) return "opacity-70";
  return "opacity-100";
}

function flattenLast26Weeks(weeks: ContributionWeek[]): ContributionDay[] {
  return weeks.slice(-26).flatMap((w) => w.contributionDays);
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
      className="rounded-xl border border-line bg-paper p-5 text-center"
    >
      <Icon className="w-5 h-5 mx-auto mb-2 text-slate" />
      {loading ? (
        <div className="h-8 w-12 mx-auto rounded bg-line animate-pulse mb-1" />
      ) : (
        <p className="font-display text-2xl font-bold text-ink">{value}</p>
      )}
      <p className="font-mono text-xs text-slate mt-1">{label}</p>
    </motion.div>
  );
}

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const color = repo.language ? (LANGUAGE_COLORS[repo.language] ?? "#6b7078") : "#6b7078";
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
      className="block rounded-xl border border-line bg-paper p-4 hover:border-signal transition-colors"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="font-semibold text-ink text-sm truncate">{repo.name}</p>
        <ExternalLink className="w-3.5 h-3.5 text-slate shrink-0 mt-0.5" />
      </div>

      {repo.description && (
        <p className="text-xs text-slate leading-relaxed line-clamp-2 mb-3">
          {repo.description}
        </p>
      )}

      <div className="flex items-center gap-4 font-mono text-xs text-slate">
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
    <section id="open-source" className="py-20 bg-paper-raised">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Public activity</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            GitHub &amp; Open Source
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
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
            <div className="rounded-2xl border border-line bg-paper p-6 flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-ink flex items-center justify-center shrink-0">
                <GitHubIcon className="w-8 h-8 text-paper" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-ink text-lg">@{GITHUB_USERNAME}</p>
                <p className="text-slate text-sm mt-0.5">
                  Full-Stack Developer · Philippines
                </p>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-signal hover:underline"
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
                <p className="text-sm font-semibold text-slate">
                  Top Repositories
                </p>
                {loading && <Loader2 className="w-3.5 h-3.5 animate-spin text-slate" />}
              </div>

              {loading ? (
                <div className="space-y-3">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-line bg-paper p-4 space-y-2 animate-pulse"
                    >
                      <div className="h-4 w-40 rounded bg-line" />
                      <div className="h-3 w-full rounded bg-line" />
                      <div className="h-3 w-24 rounded bg-line" />
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
                <p className="text-sm text-slate">
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
            {/* Contribution graph — only rendered with real data, never fabricated */}
            {!loading && stats?.contributions ? (
              <div className="rounded-2xl border border-line bg-paper p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-base font-semibold text-ink">
                      Contribution Graph
                    </p>
                    <p className="font-mono text-xs text-slate mt-0.5">
                      {stats.contributions.total.toLocaleString()} contributions (public + private) · last year
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-[repeat(26,_1fr)] gap-1">
                  {flattenLast26Weeks(stats.contributions.weeks).map((day, i) => (
                    <div
                      key={i}
                      title={`${day.date}: ${day.contributionCount}`}
                      className={`aspect-square rounded-sm bg-signal ${getContributionOpacity(day.contributionCount)}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-line bg-paper p-6 text-center">
                <p className="text-sm font-semibold text-ink mb-1">Contribution graph</p>
                <p className="text-sm text-slate leading-relaxed">
                  {loading
                    ? "Loading live contribution data…"
                    : "Live contribution data isn't available right now — see the full history on GitHub."}
                </p>
                <a
                  href={`${GITHUB_URL}?tab=overview`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-signal hover:underline"
                >
                  View on GitHub
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* CTA */}
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h3 className="font-bold text-ink mb-2">
                Want to collaborate?
              </h3>
              <p className="text-sm text-slate mb-4 leading-relaxed">
                I&apos;m open to contributing to open source projects, reviewing code, or
                pairing on interesting engineering problems.
              </p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-ink text-paper text-sm font-semibold hover:bg-signal transition-colors"
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
