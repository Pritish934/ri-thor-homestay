import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Gallery",
  description:
    "Explore a visual look at Ri Thor Homestay and its surroundings.",
  alternates: { canonical: "/gallery" },
};

const images = [
  ["/images/bedroom.jpeg", "single bedrooms"],
  [
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=82",
    "Bright bedroom interior",
  ],
  [
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=82",
    "Cozy room prepared for guests",
  ],
  [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=82",
    "Warm living space",
  ],
  [
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1400&q=82",
    "Peaceful mountain landscape",
  ],
  [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=82",
    "Green landscape in the hills",
  ],
];

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-(--ink) px-5 pb-16 pt-32 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Gallery" }]} />
          <Reveal>
            <p className="eyebrow mt-12 text-white/45">A glimpse</p>
            <h1 className="mt-3 font-display text-6xl leading-[.88] sm:text-8xl">
              See the stay.
            </h1>
          </Reveal>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {images.map(([src, alt], i) => (
            <Reveal
              key={src}
              delay={(i % 3) * 0.05}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <div
                className={`image-frame ${i === 0 ? "aspect-video" : "aspect-4/5"}`}
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
