import RevealOnScroll from "@/components/RevealOnScroll";

const LEDGER = [
  {
    tier: "Supporter",
    site: "Yes",
    social: "Shoutout",
    rig: "—",
    input: "—",
  },
  {
    tier: "Team",
    site: "Yes",
    social: "Featured",
    rig: "Branded",
    input: "—",
  },
  {
    tier: "Title",
    site: "Top billing",
    social: "Featured",
    rig: "Branded",
    input: "Direct",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16">
        <RevealOnScroll>
          <p className="font-tel text-xs tracking-[0.25em] text-livery uppercase mb-4">
            Backing X2
          </p>
          <h2 className="font-display uppercase text-3xl md:text-5xl tracking-tight">
            Sponsor Ledger
          </h2>
          <p className="mt-6 text-telemetry leading-relaxed">
            You&rsquo;d be backing a team early — before the sim racing
            audience is large and before the solar car exists. Lower cost
            now, higher visibility as we grow, and a direct hand in getting
            an independent motorsports program off the ground.
          </p>

          <div className="mt-10">
            <p className="font-tel text-[10px] tracking-[0.2em] uppercase text-telemetry mb-4">
              Current Sponsors
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/2] border border-dashed border-telemetry/30 flex items-center justify-center"
                >
                  <span className="font-tel text-[9px] tracking-[0.1em] uppercase text-telemetry text-center px-2">
                    Your logo here
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="min-w-0">
          <p className="md:hidden font-tel text-[10px] tracking-[0.2em] uppercase text-telemetry mb-2">
            Swipe to see all columns →
          </p>
          <div className="overflow-x-auto">
          <table className="w-full min-w-140 border-collapse font-tel text-sm">
            <thead>
              <tr className="border-b border-livery/40 text-left">
                <th className="py-3 pr-4 font-normal text-[10px] tracking-[0.15em] uppercase text-telemetry">
                  Tier
                </th>
                <th className="py-3 px-4 font-normal text-[10px] tracking-[0.15em] uppercase text-telemetry">
                  Site Placement
                </th>
                <th className="py-3 px-4 font-normal text-[10px] tracking-[0.15em] uppercase text-telemetry">
                  Social
                </th>
                <th className="py-3 px-4 font-normal text-[10px] tracking-[0.15em] uppercase text-telemetry">
                  Rig Branding
                </th>
                <th className="py-3 pl-4 font-normal text-[10px] tracking-[0.15em] uppercase text-telemetry">
                  Program Input
                </th>
              </tr>
            </thead>
            <tbody>
              {LEDGER.map((row) => (
                <tr key={row.tier} className="border-b border-telemetry/15">
                  <td className="py-4 pr-4 text-livery uppercase tracking-[0.1em]">
                    {row.tier}
                  </td>
                  <td className="py-4 px-4 text-paper">{row.site}</td>
                  <td className="py-4 px-4 text-paper">{row.social}</td>
                  <td className="py-4 px-4 text-paper">{row.rig}</td>
                  <td className="py-4 pl-4 text-paper">{row.input}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <p className="mt-4 text-xs text-telemetry">
            Exact terms negotiated per sponsor — reach out for specifics.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
