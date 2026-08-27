import RevealOnScroll from "@/components/RevealOnScroll";

const STAGES = ["Concept", "Team", "Funding", "Design", "Build", "Test", "Race"];
const DONE_COUNT = 2;

export default function SolarCar() {
  return (
    <section id="solar-car" className="pt-20 pb-24 md:pt-28 md:pb-36 bg-[#0f1211] border-y border-solar/20">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <RevealOnScroll direction="none" className="mb-10">
          <p className="font-tel text-xs tracking-[0.25em] text-solar uppercase mb-4">
            Track Two
          </p>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight">
            Solar car challenge
          </h2>
        </RevealOnScroll>

        {/* Build stage, stated plainly rather than as a generic progress stepper */}
        <RevealOnScroll direction="none" className="mb-16 font-tel text-sm">
          <span className="text-telemetry">Currently at: </span>
          {STAGES.map((stage, i) => (
            <span key={stage}>
              <span className={i < DONE_COUNT ? "text-solar" : "text-telemetry/40"}>
                {stage}
              </span>
              {i < STAGES.length - 1 && <span className="text-telemetry/30"> → </span>}
            </span>
          ))}
        </RevealOnScroll>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start">
          <RevealOnScroll direction="right">
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
                What we need right now
              </p>
              <ul className="text-sm text-telemetry space-y-1.5">
                <li>Founding sponsors to fund materials and tooling</li>
                <li>Solar cells, chassis materials, electrical components</li>
                <li>Technical mentors with solar/EV build experience</li>
                <li>Students interested in engineering, electrical, fabrication</li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
