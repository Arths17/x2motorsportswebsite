export default function SimRacing() {
  return (
    <section id="sim-racing" className="px-6 md:px-10 py-16 md:py-20 border-b border-line">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-5">Sim racing</h2>
          <p className="text-muted leading-relaxed">
            We compete in RaceRoom Racing Experience, running a full sim rig
            with real telemetry, race craft, and setup work — the same
            discipline as full-scale racing, without the fuel bill. It&rsquo;s
            how we build an audience and sharpen the team before the solar
            car hits the track.
          </p>

          <div className="mt-8 aspect-video w-full max-w-md bg-bg-alt border border-line flex items-center justify-center">
            <span className="text-sm text-muted text-center px-4">
              Race clip placeholder — embed on request
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-muted mb-4">
            Where to watch
          </p>
          <ul className="space-y-4">
            <li className="flex items-center justify-between min-h-11">
              <span>Instagram</span>
              <a
                href="https://instagram.com/x2motorsports"
                target="_blank"
                rel="noreferrer noopener"
                className="text-green underline underline-offset-4 min-h-11 flex items-center"
              >
                @x2motorsports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
