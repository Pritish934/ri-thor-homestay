import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Ri Thor Homestay website.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="mt-14 font-display text-5xl">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-black/65">
          <p>
            This starter policy is intentionally concise. Replace it with the
            property's final legal/privacy policy before launch.
          </p>
          <p>
            This website may use basic analytics, contact links and third-party
            services such as Google Maps or WhatsApp. Review the privacy terms
            of those services before publishing.
          </p>
          <p>
            Do not collect personal information through a form unless the
            property has a clear reason to collect it and an appropriate privacy
            notice.
          </p>
        </div>
      </div>
    </main>
  );
}
