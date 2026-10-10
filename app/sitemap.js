import { blogPosts, rooms, site } from "@/lib/site";

export default function sitemap() {
  const staticPages = ["", "/rooms", "/about", "/gallery", "/blog", "/contact"];
  const roomPages = rooms.map((room) => `/rooms/${room.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...staticPages, ...roomPages, ...blogPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/rooms") ? 0.9 : path.startsWith("/blog") ? 0.8 : 0.6,
  }));
}