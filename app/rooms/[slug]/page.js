import { notFound } from "next/navigation";
import { getRoom, rooms, site, whatsappUrl } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, MapPin } from "@/components/Icons";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  return {
    title: room.name,
    description: `${room.name} at ${site.name}. Check the room details and contact the property for current availability and rates.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | ${site.name}`,
      description: room.description,
      images: [{ url: room.image }],
    },
  };
}

export default async function RoomPage({ params }) {
  const { slug } = await params;
  const room = getRoom(slug);
  console.log("room", room);
  if (!room) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: room.name,
    description: room.description,
    image: room.image,
    url: `${site.url}/rooms/${room.slug}`,
    occupancy: { "@type": "QuantitativeValue", maxValue: room.guests },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-(--ink) px-5 pb-10 pt-32 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[{ label: "Rooms", href: "/rooms" }, { label: room.name }]}
          />
        </div>
      </section>

      <section className="bg-(--ink) px-5 pb-16 text-white sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-white/45">Room</p>
            <h1 className="mt-3 font-display text-6xl leading-[.86] sm:text-8xl">
              {room.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-7 text-white/60">
              {room.description}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.35fr_.65fr]">
          <Reveal>
            <div className="image-frame aspect-4/3">
              <img
                src={room.image}
                alt={`${room.name} at Ri Thor Homestay`}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-fit rounded-[1.75rem] border border-black/10 bg-(--cream) p-7 lg:sticky lg:top-28">
              <p className="eyebrow">Room details</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4">
                  <span className="text-xs text-black/40">Guests</span>
                  <p className="mt-2 font-semibold">Up to {room.guests}</p>
                </div>
                <div className="rounded-2xl bg-white p-4">
                  <span className="text-xs text-black/40">Rate</span>
                  <p className="mt-2 font-semibold">{room.price}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 border-t border-black/10 pt-6">
                {room.amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-black/65"
                  >
                    <span className="size-1.5 rounded-full bg-black/40" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl(
                  `Hi, I'd like to check availability for ${room.name}. My dates are [check-in] to [check-out] for [number] guests.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex items-center justify-between rounded-full bg-(--ink) px-5 py-4 text-sm font-semibold text-white"
              >
                Check availability <ArrowUpRight />
              </a>
              <a
                href={site.maps}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-black/10 px-5 py-3.5 text-sm"
              >
                <MapPin size={16} /> Find us on Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
