import { site } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/privacy-policy", "/terms"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}