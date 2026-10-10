import { site, whatsappUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MapPin } from "@/components/Icons";

export const metadata = {
  title: "Contact & Location",
  description: `Contact ${site.name}, check availability and find the property on Google Maps.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[var(--cream)] px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <Reveal>
            <p className="eyebrow mt-14">Contact</p>
            <h1 className="mt-3 max-w-4xl font-display text-6xl leading-[.86] sm:text-8xl">Let's get your dates sorted.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] bg-[var(--ink)] p-8 text-white sm:p-10">
              <p className="eyebrow text-white/40">Direct enquiry</p>
              <h2 className="mt-4 font-display text-4xl">Tell us when you're coming.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                Send your dates and number of guests. The property can confirm current availability and rates.
              </p>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[var(--ink)]">
                WhatsApp the host <ArrowUpRight />
              </a>
              <div className="mt-10 space-y-4 border-t border-white/10 pt-7 text-sm text-white/60">
                <a href={site.maps} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-white/80">
                  <MapPin size={17} /> Open Google Maps
                </a>
                <a href={`mailto:${site.email}`} className="block">{site.email}</a>
                <p>{site.phone}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={.1}>
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#e3e1d8]">
              <div className="relative aspect-[4/3]">
                <iframe
                  title="Ri Thor Homestay location map"
                  src="https://www.google.com/maps?q=25.16729,91.68657&z=15&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex items-center justify-between gap-5 p-5">
                <div>
                  <p className="font-medium">Find us on Google Maps</p>
                  <p className="mt-1 text-xs text-black/50">{site.address}</p>
                </div>
                <a href={site.maps} target="_blank" rel="noreferrer" className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--ink)] text-white">
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}