import SessionClock from "@/components/SessionClock";

export default function Hero() {
  return (
    <section id="top" className="border-b border-telemetry/20">
      {/* Pit-wall HUD bar */}
      <div className="border-b border-livery/40 bg-[#0f1211]">
        <div className="mx-auto max-w-6xl px-6 md:px-12 flex flex-wrap items-center gap-x-8 gap-y-2 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-livery animate-pulse motion-reduce:animate-none" />
            <span className="font-tel text-[10px] tracking-[0.2em] text-livery uppercase">
              Live Status
            </span>
          </div>
          <span className="font-tel text-[10px] tracking-[0.2em] text-telemetry uppercase">
            Program: Sim Racing + Solar Car
          </span>
          <span className="font-tel text-[10px] tracking-[0.2em] text-telemetry uppercase">
            Founded: 2026
          </span>
          <span className="font-tel text-[10px] tracking-[0.2em] text-telemetry uppercase ml-auto">
            Session Time <SessionClock />
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
        <div>
          <h1 className="font-display text-[13vw] leading-[0.92] sm:text-6xl md:text-8xl md:leading-[0.9] tracking-[-0.02em]">
            Sim racing
            <br />
            <span className="text-telemetry">now.</span>
            <br />
            Solar car
            <br />
            <span className="text-solar">next.</span>
          </h1>
        </div>

        <div className="max-w-sm md:pb-3">
          <p className="text-telemetry leading-relaxed">
            X2 Motorsports is a two-track independent team: competitive
            RaceRoom sim racing today, funding and building toward a
            student-built solar car entry tomorrow. No school affiliation, no
            outside program behind us.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#sim-racing"
              className="font-tel text-sm tracking-[0.02em] bg-livery text-paper px-6 py-3 hover:bg-livery-dim transition-colors"
            >
              Watch the racing
            </a>
            <a
              href="#sponsors"
              className="font-tel text-sm tracking-[0.02em] border border-paper/30 text-paper px-6 py-3 hover:border-paper transition-colors"
            >
              Sponsor X2
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
