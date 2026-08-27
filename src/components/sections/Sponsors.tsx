const TIERS = [
  {
    name: "Friend",
    amount: "$100+",
    benefits: ["Listed on this site as a sponsor"],
  },
  {
    name: "Team Sponsor",
    amount: "$500+",
    benefits: [
      "Everything in Friend",
      "Logo on this site and a shoutout across our socials",
      "Branding on our sim rig and in race clips",
    ],
  },
  {
    name: "Title Sponsor",
    amount: "$1,500+",
    benefits: [
      "Everything in Team Sponsor",
      "Top billing on this site",
      "Direct input on how sponsorship funds are used",
      "First look at solar car program updates",
    ],
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="px-6 md:px-10 py-16 md:py-20 border-b border-line">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl mb-5">
          Why sponsor X2
        </h2>
        <p className="max-w-2xl text-muted leading-relaxed">
          You&rsquo;d be backing a team early — before the sim racing audience
          is large and before the solar car exists. Lower cost now, higher
          visibility as we grow, and a direct hand in getting an independent
          motorsports program off the ground. X2 isn&rsquo;t a registered
          nonprofit, so sponsorships aren&rsquo;t tax-deductible — this is
          direct support for the team.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-8 max-w-4xl">
          {TIERS.map((tier) => (
            <div key={tier.name}>
              <p className="font-display text-xl">{tier.name}</p>
              <p className="text-sm text-green mb-3">{tier.amount}</p>
              <ul className="text-sm text-muted leading-relaxed space-y-1.5">
                {tier.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Tiers are a starting point — exact terms negotiated per sponsor,
          reach out for specifics.
        </p>

        <div className="mt-12">
          <p className="text-sm uppercase tracking-wide text-muted mb-4">
            Current sponsors
          </p>
          <div className="flex flex-wrap gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-20 w-32 border border-dashed border-line flex items-center justify-center"
              >
                <span className="text-xs text-muted text-center px-2">
                  Your logo here
                </span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex items-center min-h-11 text-lg text-ink underline decoration-green decoration-2 underline-offset-4 hover:text-green transition-colors"
        >
          Get in touch about sponsoring
        </a>
      </div>
    </section>
  );
}
