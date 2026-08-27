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
          motorsports program off the ground.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-8 max-w-3xl">
          <div>
            <p className="font-display text-xl mb-2">Supporter</p>
            <p className="text-sm text-muted leading-relaxed">
              Logo on this site and a shoutout across our socials.
            </p>
          </div>
          <div>
            <p className="font-display text-xl mb-2">Team</p>
            <p className="text-sm text-muted leading-relaxed">
              Everything in Supporter, plus branding on our sim rig and in
              race clips.
            </p>
          </div>
          <div>
            <p className="font-display text-xl mb-2">Title</p>
            <p className="text-sm text-muted leading-relaxed">
              Everything in Team, plus top billing and direct input on the
              solar car program.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted">
          Exact terms negotiated per sponsor — reach out for specifics.
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
      </div>
    </section>
  );
}
