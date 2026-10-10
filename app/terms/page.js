import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Terms",
  description: "Terms of use for Ri Thor Homestay website.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="px-5 pb-20 pt-32 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={[{ label: "Terms" }]} />
        <h1 className="mt-14 font-display text-5xl">Terms of Use</h1>
        <div className="mt-8 space-y-5 text-sm leading-7 text-black/65">
          <p>
            This starter terms page should be replaced with the property's final
            booking and website terms before launch.
          </p>
          <p>
            Rates, availability, check-in details and property rules should
            always be confirmed directly with the property.
          </p>
        </div>
      </div>
    </main>
  );
}
