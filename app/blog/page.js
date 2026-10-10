import Link from "next/link";
import { blogPosts } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";

export const metadata = {
  title: "Journal | Meghalaya Travel Guides",
  description: "Practical Meghalaya travel guides, planning ideas and local tips from Ri Thor Homestay.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <section className="bg-[var(--ink)] px-5 pb-16 pt-32 text-white sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Journal" }]} />
          <Reveal>
            <p className="eyebrow mt-12 text-white/45">The journal</p>
            <h1 className="mt-3 max-w-4xl font-display text-6xl leading-[.86] sm:text-8xl">Useful notes for your Meghalaya trip.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/55">
              Practical travel content written to help you plan a better trip—not fill a keyword quota.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * .06}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="image-frame aspect-[16/10]">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.15em] text-black backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs text-black/40">{post.date} · {post.readTime}</p>
                      <h2 className="mt-2 font-display text-3xl leading-tight">{post.title}</h2>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-black/55">{post.excerpt}</p>
                    </div>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-black/10 transition group-hover:bg-black group-hover:text-white">
                      <ArrowUpRight />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}