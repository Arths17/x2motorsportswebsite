import Image from "next/image";

const FOUNDERS = [
  {
    name: "Atharv Ranjan",
    role: "Co-Founder",
    photo: "/team/atharv-ranjan.jpg",
  },
  {
    name: "Vedakshay Kapa",
    role: "Co-Founder",
    photo: "/team/vedakshay-kapa.jpg",
  },
  {
    name: "Shiven Kulkarni",
    role: "Co-Founder",
    photo: "/team/shiven-kulkarni.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="px-6 md:px-10 py-16 md:py-20 border-b border-line bg-bg-alt">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl mb-5">Team</h2>
        <p className="max-w-2xl text-muted leading-relaxed mb-10">
          X2 started with a small group who wanted to race competitively and
          build something bigger than a hobby project, with no school
          program or existing team behind it. Everything here, from the sim
          rig to the Lemons build, is being built from scratch.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl">
          {FOUNDERS.map((person) => (
            <div key={person.name}>
              <div className="aspect-square w-full max-w-50 relative overflow-hidden border border-line">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <p className="font-display text-xl mt-4">{person.name}</p>
              <p className="text-sm text-muted">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
