import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TelemetryStrip from "@/components/TelemetryStrip";
import Hero from "@/components/sections/Hero";
import SimRacing from "@/components/sections/SimRacing";
import SolarCar from "@/components/sections/SolarCar";
import Sponsors from "@/components/sections/Sponsors";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />

        <TelemetryStrip
          variant="orange"
          dense
          stats={[
            { label: "Sector", value: "01 — Sim Racing" },
            { label: "Platform", value: "RaceRoom" },
            { label: "Status", value: "Active" },
          ]}
        />
        <SimRacing />

        <TelemetryStrip
          variant="teal"
          align="right"
          stats={[{ label: "Sector 02 — Solar Car", value: "Founding Stage" }]}
        />
        <SolarCar />

        <TelemetryStrip
          variant="orange"
          stats={[{ label: "Sector 03 — Sponsors", value: "Open" }]}
        />
        <Sponsors />

        <TelemetryStrip
          variant="teal"
          dense
          stats={[
            { label: "Sector", value: "04 — Team" },
            { label: "Roster", value: "2 Active" },
          ]}
        />
        <Team />

        <TelemetryStrip
          variant="orange"
          align="right"
          stats={[{ label: "Sector 05 — Contact", value: "Standby" }]}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
