export default function SolarCar() {
  return (
    <section id="solar-car" className="px-6 md:px-10 py-16 md:py-20 border-b border-line bg-bg-alt">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-5">
            Solar car challenge
          </h2>
          <p className="text-muted leading-relaxed">
            X2&rsquo;s second program is a student-built solar car, run
            entirely independent of any school or existing program. The goal
            is a car capable of entering a solar car race in the model of the
            events formerly run through Coppell&rsquo;s program — we are not
            affiliated with that program, it&rsquo;s simply the standard
            we&rsquo;re building toward.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We&rsquo;re honest about where this stands: no chassis has been
            built yet. Right now we&rsquo;re assembling the team and lining
            up funding and materials before any fabrication starts.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-muted mb-4">
            What we need right now
          </p>
          <ul className="space-y-2 text-ink">
            <li>Founding sponsors to fund materials and tooling</li>
            <li>Solar cells, chassis materials, electrical components</li>
            <li>Technical mentors with solar/EV build experience</li>
            <li>Students interested in engineering, electrical, fabrication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
