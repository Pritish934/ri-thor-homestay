import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "About",
  description: `Learn about ${site.name}, the people and philosophy behind the stay.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[var(--cream)] px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "About" }]} />
          <Reveal>
            <p className="eyebrow mt-14">The story</p>
            <h1 className="mt-4 max-w-5xl font-display text-6xl leading-[.86] sm:text-8xl">A stay should feel like part of the journey.</h1>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionHeading eyebrow="About Ri Thor" title="A comfortable base for exploring Meghalaya." />
          </Reveal>
          <Reveal delay={.1}>
            <div className="space-y-5 text-base leading-8 text-black/60">
              <p>
                Ri Thor Homestay is designed around a simple idea: give travellers a comfortable place to return to after a full day outside.
              </p>
              <p>
                This page intentionally keeps the story editable. Replace this copy with the host's real story, local knowledge and details about how the property began.
              </p>
              <p>
                Authentic details are more valuable than generic marketing copy—especially for a local hospitality business.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}