import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building enterprise software as a government senior developer, and lessons from running freelance work alongside it.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-paper">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs text-slate uppercase tracking-widest mb-3">Field notes</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 tracking-tight">
            Blog
          </h1>
          <p className="text-lg text-slate max-w-2xl leading-relaxed mb-16">
            Notes from building government and enterprise systems, and from running
            freelance work on the side.
          </p>

          {posts.length === 0 ? (
            <p className="text-slate">No posts published yet — check back soon.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-2xl border border-line bg-paper-raised hover:border-signal transition-colors duration-300 group"
                >
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate uppercase tracking-wide mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-ink group-hover:text-signal transition-colors mb-2">
                    {post.title}
                  </h2>

                  <p className="text-slate leading-relaxed mb-4">{post.description}</p>

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md border border-line font-mono text-[11px] text-slate"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
