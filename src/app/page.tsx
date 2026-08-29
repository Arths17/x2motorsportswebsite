import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SimRacing from "@/components/sections/SimRacing";
import LemonsRacing from "@/components/sections/LemonsRacing";
import Sponsors from "@/components/sections/Sponsors";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <SimRacing />
        <LemonsRacing />
        <Sponsors />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
