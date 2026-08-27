import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

const FOUNDERS = [
  {
    number: "01",
    name: "Atharv Ranjan",
    role: "Co-Founder",
    photo: "/team/atharv-ranjan.jpg",
  },
  {
    number: "02",
    name: "Vedakshay Kapa",
    role: "Co-Founder",
    photo: "/team/vedakshay-kapa.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="px-6 md:px-12 pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll direction="right" className="flex items-baseline justify-between gap-4 flex-wrap mb-10">
          <h2 className="font-display text-3xl md:text-5xl tracking-tight">
            Entry list
          </h2>
          <p className="font-tel text-xs tracking-[0.2em] text-livery uppercase">
            Founding Roster
          </p>
        </RevealOnScroll>

        <div>
          <p className="max-w-2xl text-telemetry leading-relaxed mb-10">
            X2 started with two people who wanted to race competitively and
            build something bigger than a hobby project — with no school
            program or existing team behind it. Everything here, from the
            sim rig to the solar car plans, is being built from scratch.
          </p>

          <div className="border-t border-telemetry/25">
            {FOUNDERS.map((person) => (
              <div
                key={person.number}
                className="flex items-center gap-6 md:gap-10 py-6 border-b border-telemetry/25"
              >
                <span className="font-tel text-3xl md:text-4xl text-livery/70 shrink-0 w-14">
                  {person.number}
                </span>
                <div className="h-14 w-14 shrink-0 border border-telemetry/30 relative overflow-hidden">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={person.name}
                      fill
                      sizes="56px"
                      className="object-cover grayscale"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="font-tel text-[8px] tracking-[0.1em] uppercase text-telemetry text-center px-1">
                        Photo
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="font-display text-xl md:text-2xl tracking-wide">
                    {person.name}
                  </span>
                  <span className="font-tel text-xs tracking-[0.2em] uppercase text-telemetry">
                    {person.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
