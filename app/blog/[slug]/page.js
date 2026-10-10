import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPost, site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/Icons";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="bg-(--cream) px-5 pb-12 pt-32 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            items={[{ label: "Journal", href: "/blog" }, { label: post.title }]}
          />
          <Reveal>
            <p className="eyebrow mt-12">
              {post.category} · {post.readTime}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[.9] tracking-[-.035em] sm:text-7xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/55">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="image-frame aspect-video">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>
          <article className="article-body mx-auto mt-12 max-w-2xl">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="mt-12 rounded-3xl bg-(--ink) p-7 text-white sm:p-9">
              <p className="eyebrow text-white/40">Planning a stay?</p>
              <h2 className="mt-3 font-display text-3xl">
                Use Ri Thor as your base.
              </h2>
              <Link
                href="/rooms"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-(--ink)"
              >
                Explore rooms <ArrowUpRight />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
