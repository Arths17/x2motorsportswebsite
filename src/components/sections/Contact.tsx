export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-5xl mb-5 max-w-xl">
          Sponsor, join, or say hi
        </h2>
        <p className="max-w-md text-muted leading-relaxed mb-8">
          Reach out by email — we&rsquo;re looking for racers, engineers, and
          anyone who wants to help build something from the ground up.
        </p>

        <div className="flex flex-col gap-2 max-w-md">
          <a
            href="mailto:contact@x2motorsports.example"
            className="text-lg text-ink underline decoration-green decoration-2 underline-offset-4 hover:text-green transition-colors min-h-11 flex items-center"
          >
            contact@x2motorsports.example
          </a>
          <p className="text-xs text-muted">
            Placeholder — update once a real inbox is set up.
          </p>
          <a
            href="https://instagram.com/x2motorsports"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 text-lg text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber transition-colors min-h-11 flex items-center"
          >
            @x2motorsports
          </a>
        </div>
      </div>
    </section>
  );
}
