import { rooms, site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RoomCard from "@/components/RoomCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Rooms",
  description:
    "Explore rooms at Ri Thor Homestay and enquire directly for current availability and rates.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <main>
      <section className="bg-(--ink) px-5 pb-16 pt-32 text-white sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Rooms" }]} />
          <Reveal>
            <p className="eyebrow mt-12 text-white/45">Stay your way</p>
            <h1 className="mt-3 max-w-4xl font-display text-6xl leading-[.88] sm:text-8xl">
              Rooms made for resting.
            </h1>
          </Reveal>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 0.08}>
                <RoomCard room={room} featured={false} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
