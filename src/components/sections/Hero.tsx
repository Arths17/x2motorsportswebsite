export default function Hero() {
  return (
    <section id="top" className="px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28 border-b border-line">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] max-w-3xl">
          Two people, two race programs, no school behind either one.
        </h1>
        <p className="mt-6 max-w-xl text-muted leading-relaxed text-lg">
          X2 Motorsports races RaceRoom competitively today, and is building
          toward a student-built solar car entry. Both run entirely
          independent — no institutional backing, just a team building
          credibility from scratch.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          <a
            href="#sim-racing"
            className="text-ink underline decoration-green decoration-2 underline-offset-4 hover:text-green transition-colors flex items-center min-h-11"
          >
            Watch the racing
          </a>
          <a
            href="#sponsors"
            className="text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber transition-colors flex items-center min-h-11"
          >
            Sponsor X2
          </a>
        </div>
      </div>
    </section>
  );
}
