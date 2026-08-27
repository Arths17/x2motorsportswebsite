import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 items-end">
        <RevealOnScroll>
          <p className="font-tel text-xs tracking-[0.25em] text-livery uppercase mb-4">
            Channel Open
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[0.95]">
            Sponsor, join,
            <br />
            or say hi
          </h2>
          <p className="mt-6 max-w-md text-telemetry leading-relaxed">
            Reach out by email — we&rsquo;re looking for racers, engineers,
            and anyone who wants to help build something from the ground up.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="right" className="flex flex-col">
          <div className="flex items-baseline justify-between gap-4 border-t border-telemetry/25 py-4 min-h-11">
            <span className="font-tel text-[10px] tracking-[0.2em] uppercase text-telemetry">
              Email
            </span>
            <a
              href="mailto:contact@x2motorsports.example"
              className="font-tel text-paper hover:text-livery transition-colors text-right"
            >
              contact@x2motorsports.example
            </a>
          </div>
          <p className="text-[11px] text-telemetry/70 -mt-2 mb-2">
            Placeholder — update once a real inbox is set up.
          </p>
          <div className="flex items-baseline justify-between gap-4 border-t border-b border-telemetry/25 py-4 min-h-11">
            <span className="font-tel text-[10px] tracking-[0.2em] uppercase text-telemetry">
              Instagram
            </span>
            <a
              href="https://instagram.com/x2motorsports"
              target="_blank"
              rel="noreferrer noopener"
              className="font-tel text-paper hover:text-livery transition-colors"
            >
              @x2motorsports
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
