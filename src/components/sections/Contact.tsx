import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 items-end">
        <RevealOnScroll>
          <p className="font-tel text-xs tracking-[0.25em] text-livery uppercase mb-4">
            Channel Open
          </p>
          <h2 className="font-display uppercase text-4xl md:text-6xl tracking-tight leading-[0.95]">
            Sponsor, Join,
            <br />
            or Say Hi
          </h2>
          <p className="mt-6 max-w-md text-telemetry leading-relaxed">
            Reach out by email — we&rsquo;re looking for racers, engineers,
            and anyone who wants to help build something from the ground up.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="border-l-2 border-livery pl-6 flex flex-col gap-5">
          <div>
            <p className="font-tel text-[10px] tracking-[0.2em] uppercase text-telemetry mb-1">
              Email
            </p>
            <a
              href="mailto:contact@x2motorsports.example"
              className="font-tel text-paper hover:text-livery transition-colors break-all"
            >
              contact@x2motorsports.example
            </a>
            <p className="mt-1 text-[11px] text-telemetry/70">
              Placeholder — update once a real inbox is set up.
            </p>
          </div>
          <div>
            <p className="font-tel text-[10px] tracking-[0.2em] uppercase text-telemetry mb-1">
              Instagram
            </p>
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
