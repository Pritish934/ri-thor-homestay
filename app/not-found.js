import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="grid min-h-[75svh] place-items-center bg-(--ink) px-5 text-white">
      <div className="max-w-2xl text-center">
        <p className="eyebrow text-white/40">404</p>
        <h1 className="mt-4 font-display text-6xl leading-none sm:text-8xl">
          This path wandered off.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/55">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-(--ink)"
        >
          Back home <ArrowRight />
        </Link>
      </div>
    </main>
  );
}
