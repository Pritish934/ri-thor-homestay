import Link from "next/link";
import { site, navigation, whatsappUrl } from "@/lib/site";
import { ArrowUpRight, Instagram, MapPin } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <p className="eyebrow text-white/45">Stay slower. See more.</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-[.95] sm:text-5xl">
              Your Meghalaya stay starts here.
            </h2>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--cream)] px-6 py-3.5 font-semibold text-[var(--ink)]"
            >
              WhatsApp the host <ArrowUpRight size={17} />
            </a>
          </div>

          <div>
            <p className="eyebrow text-white/40">Explore</p>
            <div className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-white/70 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/40">Contact</p>
            <div className="mt-5 space-y-4 text-white/70">
              <a href={site.maps} target="_blank" rel="noreferrer" className="flex gap-2 hover:text-white">
                <MapPin size={18} /> Find us on Google Maps
              </a>
              <a href={`mailto:${site.email}`} className="block hover:text-white">{site.email}</a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="block hover:text-white">
                WhatsApp
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex items-center gap-2 hover:text-white">
                <Instagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}