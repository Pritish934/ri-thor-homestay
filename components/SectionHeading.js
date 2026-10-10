export default function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-4xl leading-[.98] tracking-[-.03em] sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 max-w-xl text-base leading-7 text-black/60">{text}</p>}
    </div>
  );
}