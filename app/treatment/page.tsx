import Cta from "@/components/Treatment/Cta";
import Hero from "@/components/Treatment/Hero";
import Intro from "@/components/Treatment/Intro";
import Procedures from "@/components/Treatment/Procedures";

export default function TreatmentPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Intro />
      <Procedures />
      <Cta />
    </main>
  );
}
