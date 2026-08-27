import RevealOnScroll from "@/components/RevealOnScroll";

const STAGES = [
  { name: "Concept", done: true },
  { name: "Team", done: true },
  { name: "Funding", done: false },
  { name: "Design", done: false },
  { name: "Build", done: false },
  { name: "Test", done: false },
  { name: "Race", done: false },
];

export default function SolarCar() {
  return (
    <section id="solar-car" className="pt-20 pb-24 md:pt-28 md:pb-36 bg-[#0f1211] border-y border-solar/20">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <RevealOnScroll className="mb-14">
          <p className="font-tel text-xs tracking-[0.25em] text-solar uppercase mb-4">
            Track Two
          </p>
          <h2 className="font-display uppercase text-3xl md:text-5xl tracking-tight">
            Solar Car Challenge
          </h2>
        </RevealOnScroll>

        {/* Build-stage ladder — shows the honest early stage structurally */}
        <RevealOnScroll className="mb-16">
          <p className="md:hidden font-tel text-[10px] tracking-[0.2em] uppercase text-telemetry mb-3">
            Swipe to see all stages →
          </p>
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex min-w-160 md:min-w-0">
            {STAGES.map((stage, i) => (
              <div key={stage.name} className="flex-1 flex flex-col items-center">
                <div className="w-full flex items-center">
                  <span
                    className={`h-px flex-1 ${
                      i === 0 ? "bg-transparent" : stage.done ? "bg-solar" : "bg-telemetry/20"
                    }`}
                  />
                  <span
                    className={`h-3 w-3 shrink-0 rotate-45 border ${
                      stage.done
                        ? "bg-solar border-solar"
                        : "bg-transparent border-telemetry/40"
                    }`}
                  />
                  <span
                    className={`h-px flex-1 ${
                      i === STAGES.length - 1
                        ? "bg-transparent"
                        : stage.done
                        ? "bg-solar"
                        : "bg-telemetry/20"
                    }`}
                  />
                </div>
                <span
                  className={`mt-3 font-tel text-[10px] tracking-[0.15em] uppercase ${
                    stage.done ? "text-solar" : "text-telemetry/60"
                  }`}
                >
                  {stage.name}
                </span>
              </div>
            ))}
          </div>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start">
          <RevealOnScroll>
            {/* Unfinished chassis outline — a car that isn't built yet */}
            <svg
              viewBox="0 0 400 140"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <path
                d="M20 110 L60 110 L80 70 L160 55 L230 55 L280 70 L340 78 L370 95 L370 110 L20 110"
                fill="none"
                stroke="#3A6B5C"
                strokeWidth="1.5"
                strokeDasharray="6 5"
                opacity="0.7"
              />
              <circle cx="90" cy="112" r="14" fill="none" stroke="#3A6B5C" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
              <circle cx="300" cy="112" r="14" fill="none" stroke="#3A6B5C" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
              <line x1="150" y1="60" x2="220" y2="60" stroke="#3A6B5C" strokeWidth="3" opacity="0.35" />
              <text
                x="200"
                y="135"
                textAnchor="middle"
                fontFamily="var(--font-mono-tel)"
                fontSize="9"
                letterSpacing="2"
                fill="#8A8F8C"
              >
                CHASSIS — NOT YET BUILT
              </text>
            </svg>
          </RevealOnScroll>

          <RevealOnScroll className="flex flex-col gap-8">
            <p className="text-telemetry leading-relaxed">
              X2&rsquo;s second program is a student-built solar car, run
              entirely independent of any school or existing program. The
              goal is a car capable of entering a solar car race in the model
              of the events formerly run through Coppell&rsquo;s program —
              we are not affiliated with that program, it&rsquo;s simply the
              standard we&rsquo;re building toward.
            </p>

            <div>
              <p className="font-tel text-[10px] tracking-[0.2em] uppercase text-solar mb-3">
                What We Need Right Now
              </p>
              <ul className="text-sm text-telemetry space-y-2">
                <li className="border-l-2 border-solar/40 pl-3">
                  Founding sponsors to fund materials and tooling
                </li>
                <li className="border-l-2 border-solar/40 pl-3">
                  Solar cells, chassis materials, electrical components
                </li>
                <li className="border-l-2 border-solar/40 pl-3">
                  Technical mentors with solar/EV build experience
                </li>
                <li className="border-l-2 border-solar/40 pl-3">
                  Students interested in engineering, electrical, fabrication
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
