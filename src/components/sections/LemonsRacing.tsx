export default function LemonsRacing() {
  return (
    <section id="lemons" className="px-6 md:px-10 py-16 md:py-20 border-b border-line bg-bg-alt">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-5">
            24 Hours of Lemons
          </h2>
          <p className="text-muted leading-relaxed">
            X2&rsquo;s third program is an entry into 24 Hours of Lemons,
            budget endurance racing where the car itself has to cost less
            than $500. It&rsquo;s the closest thing to full-scale wheel-to-wheel
            racing on our roadmap, and like everything else we run, it&rsquo;s
            being built independent of any school or existing program.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We&rsquo;re honest about where this stands: no car has been
            bought or built yet. Right now we&rsquo;re lining up funding and
            a build team before we source a chassis.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wide text-muted mb-4">
            What we need right now
          </p>
          <ul className="space-y-2 text-ink">
            <li>Founding sponsors to fund the car and entry fees</li>
            <li>A cheap, race-legal donor car</li>
            <li>Wrenches, safety gear, and prep experience</li>
            <li>Drivers and crew interested in endurance racing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
