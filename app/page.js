import Link from "next/link";
import { site, rooms, faqs, whatsappUrl } from "@/lib/site";
import { ArrowRight, ArrowUpRight, MapPin, Sparkle } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import RoomCard from "@/components/RoomCard";
import FAQ from "@/components/FAQ";

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Meghalaya",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.16729",
    longitude: "91.68657",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      <main>
        <section className="relative min-h-[92svh] overflow-hidden bg-[#263025] text-white">
          <img
            src="images/fullhomestay.jpeg"
            alt="Mountain landscape representing a peaceful Meghalaya stay"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/15 to-black/70" />
          <div className="absolute inset-0 bg-[#182017]/15" />

          <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
            <div className="max-w-4xl">
              <Reveal>
                <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[.2em] text-white/65">
                  <MapPin size={15} /> Meghalaya · India
                </div>
                <h1 className="font-display text-[clamp(3.6rem,9vw,8rem)] leading-[.84] tracking-[-.055em]">
                  Stay closer
                  <br />
                  to the quiet.
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                  {site.tagline} A comfortable base for discovering landscapes,
                  local life and slower days.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="mt-10">
              <div className="grid max-w-3xl gap-3 sm:grid-cols-[1fr_1fr_auto]">
                <Link
                  href="/rooms"
                  className="flex min-h-14 items-center justify-between rounded-2xl bg-white px-5 text-sm font-semibold text-(--ink)"
                >
                  Explore rooms <ArrowRight />
                </Link>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-between rounded-2xl border border-white/25 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-md"
                >
                  Check availability <ArrowUpRight />
                </a>
                <a
                  href={site.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/25 px-5 text-sm text-white backdrop-blur-md"
                >
                  <MapPin size={16} /> Maps
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-black/10 bg-(--cream)">
          <div className="mx-auto grid max-w-7xl gap-0 px-5 sm:grid-cols-3 sm:px-8">
            {[
              ["01", "Comfort", "Thoughtful spaces made for restful stays."],
              ["02", "Local", "A base for discovering Meghalaya at your pace."],
              ["03", "Simple", "Easy direct communication with your host."],
            ].map(([num, title, text]) => (
              <Reveal
                key={num}
                className="border-b border-black/10 py-7 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"
              >
                <div className="flex gap-5">
                  <span className="text-xs text-black/35">{num}</span>
                  <div>
                    <h2 className="font-display text-2xl">{title}</h2>
                    <p className="mt-2 text-sm leading-6 text-black/55">
                      {text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="The stay"
                title="A place to come back to after a day outside."
                text="Choose a room, slow down and use the property as your comfortable starting point for Meghalaya."
              />
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {rooms.map((room, index) => (
                <Reveal key={room.slug} delay={index * 0.08}>
                  <RoomCard room={room} featured={index === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-(--ink) text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
            <Reveal>
              <p className="eyebrow text-white/45">Why direct?</p>
              <h2 className="mt-4 font-display text-5xl leading-[.92] sm:text-6xl">
                Ask the person who actually runs the stay.
              </h2>
              <p className="mt-6 max-w-lg leading-7 text-white/55">
                For the latest room availability, rates and arrival details,
                direct communication keeps things simple.
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-(--ink)"
              >
                WhatsApp for availability <ArrowUpRight size={17} />
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=82"
                  alt="Relaxing accommodation interior"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-black/25 p-4 backdrop-blur-xl">
                  <Sparkle />
                  <p className="mt-3 max-w-45 text-sm leading-5 text-white/80">
                    A calmer way to plan your stay.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-pad soft-grid">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <SectionHeading
                eyebrow="Explore Meghalaya"
                title="Plan the trip around the experience, not the checklist."
              />
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [
                  "Waterfalls & landscapes",
                  "Give yourself time for viewpoints, trails and changing weather.",
                ],
                [
                  "Local food & culture",
                  "Ask locally for the places and dishes worth making time for.",
                ],
                [
                  "Slow mornings",
                  "The best travel days don't have to begin at 6am every morning.",
                ],
              ].map(([title, text], i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <div className="rounded-3xl border border-black/10 bg-[rgba(248,246,240,.78)] p-7">
                    <span className="text-xs text-black/35">0{i + 1}</span>
                    <h3 className="mt-14 font-display text-3xl">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/55">
                      {text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        <section className="bg-(--cream)">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal className="rounded-4xl bg-(--sage) p-8 sm:p-12 lg:p-16">
              <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="eyebrow text-black/45">Ready when you are</p>
                  <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[.9] tracking-[-.04em] sm:text-7xl">
                    Let's plan your stay.
                  </h2>
                </div>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-(--ink) px-6 py-4 text-sm font-semibold text-white"
                >
                  Check availability <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

export const metadata = {
  title: "Ri Thor Homestay | Peaceful Stay in Meghalaya",
  description:
    "Discover Ri Thor Homestay in Meghalaya. Explore comfortable rooms, local travel guides and direct availability enquiries.",
  alternates: { canonical: "/" },
};
