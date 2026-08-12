"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";

export function BlogTeaserSection({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-label="Latest blog posts" className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Field notes</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">
              From the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-signal hover:underline"
          >
            Read all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full p-6 rounded-2xl border border-line bg-paper-raised hover:border-signal transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 font-mono text-xs text-slate uppercase tracking-wide mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-ink group-hover:text-signal transition-colors mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-slate leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
