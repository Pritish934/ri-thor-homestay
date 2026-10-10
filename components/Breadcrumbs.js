import Link from "next/link";
import { ArrowRight } from "./Icons";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-black/45">
      <Link href="/" className="transition hover:text-black">Home</Link>
      {items.map((item) => (
        <span key={item.href || item.label} className="flex items-center gap-2">
          <ArrowRight size={12} />
          {item.href ? (
            <Link href={item.href} className="transition hover:text-black">{item.label}</Link>
          ) : (
            <span className="text-black/65">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}