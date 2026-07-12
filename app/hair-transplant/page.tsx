import Cta from "@/components/HairTransplant/Cta";
import Hero from "@/components/HairTransplant/Hero";
import Intro from "@/components/HairTransplant/Intro";
import Procedures from "@/components/HairTransplant/Procedures";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Intro />
      <Procedures />
      <Cta />
    </main>
  );
}
