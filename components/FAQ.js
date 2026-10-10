import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="eyebrow">Questions</p>
          <h2 className="mt-3 font-display text-4xl leading-none sm:text-5xl">Before you arrive.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-black/55">
            Keep the important details easy to find. For current rates and availability, WhatsApp the property directly.
          </p>
        </div>
        <div className="divide-y divide-black/10 border-y border-black/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium">
                {faq.question}
                <span className="text-2xl font-light transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-4 pr-8 text-sm leading-7 text-black/55">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}