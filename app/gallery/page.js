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
  ["/images/doublebed.jpeg", "doblebed bedroom"],
  ["/images/fullhomestay.jpeg", "full homestay"],
  ["/images/bathroom1.jpeg", "bathroom"],
  ["/images/bathroom2.jpeg", "indian bathroom"],
  [
    "/images/doublebedroom1.jpeg",
    "double bedroom with double bed and single bed",
  ],
  ["/images/kitchen.jpeg", "kitchen room"],
  ["/images/livingroom.jpeg", "living room"],
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
