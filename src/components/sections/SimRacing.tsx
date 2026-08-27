import RevealOnScroll from "@/components/RevealOnScroll";

export default function SimRacing() {
  return (
    <section id="sim-racing" className="px-6 md:px-12 pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll className="flex items-baseline justify-between gap-4 flex-wrap mb-10">
          <h2 className="font-display uppercase text-3xl md:text-5xl tracking-tight">
            Sim Racing
          </h2>
          <p className="font-tel text-xs tracking-[0.2em] text-livery uppercase">
            RaceRoom Racing Experience
          </p>
        </RevealOnScroll>

        {/* HUD-framed overlay, styled like an in-sim telemetry screen */}
        <RevealOnScroll>
          <div className="relative border border-livery/50">
            {/* corner brackets */}
            <span className="absolute -top-px -left-px h-4 w-4 border-t-2 border-l-2 border-livery" />
            <span className="absolute -top-px -right-px h-4 w-4 border-t-2 border-r-2 border-livery" />
            <span className="absolute -bottom-px -left-px h-4 w-4 border-b-2 border-l-2 border-livery" />
            <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-livery" />

            {/* top readout bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 border-b border-livery/30 px-5 py-2 bg-[#140c09]">
              <span className="font-tel text-[10px] tracking-[0.2em] text-livery uppercase">
                Overlay Preview
              </span>
              <span className="font-tel text-[10px] tracking-[0.2em] text-telemetry uppercase">
                Speed —
              </span>
              <span className="font-tel text-[10px] tracking-[0.2em] text-telemetry uppercase">
                Gear —
              </span>
              <span className="font-tel text-[10px] tracking-[0.2em] text-telemetry uppercase">
                Lap —/—
              </span>
              <span className="font-tel text-[10px] tracking-[0.2em] text-telemetry/60 uppercase ml-auto">
                No live session
              </span>
            </div>

            <div className="grid md:grid-cols-[1.3fr_1fr]">
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-livery/20">
                <p className="text-telemetry leading-relaxed">
                  We compete in RaceRoom Racing Experience, running a full sim
                  rig with real telemetry, race craft, and setup work — the
                  same discipline as full-scale racing, without the fuel
                  bill. It&rsquo;s how we build an audience, sharpen race
                  craft, and prove out the team before the solar car hits the
                  track.
                </p>

                <div className="mt-8 aspect-video w-full border border-dashed border-livery/30 flex items-center justify-center">
                  <span className="font-tel text-[10px] tracking-[0.15em] uppercase text-telemetry text-center px-4">
                    [ Race clip placeholder — embed on request ]
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-4">
                <p className="font-tel text-[10px] tracking-[0.2em] uppercase text-telemetry">
                  Channel Status
                </p>
                <div className="flex items-center justify-between border-b border-telemetry/15 min-h-11">
                  <span className="text-paper text-sm">Instagram</span>
                  <a
                    href="https://instagram.com/x2motorsports"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-tel text-sm text-livery hover:underline min-h-11 flex items-center"
                  >
                    @x2motorsports · live
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-telemetry/15 min-h-11">
                  <span className="text-paper/40 text-sm">YouTube</span>
                  <span className="font-tel text-sm text-telemetry">
                    standby
                  </span>
                </div>
                <div className="flex items-center justify-between min-h-11">
                  <span className="text-paper/40 text-sm">Twitch</span>
                  <span className="font-tel text-sm text-telemetry">
                    standby
                  </span>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
