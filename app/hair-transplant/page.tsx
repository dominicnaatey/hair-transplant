import HairTransplantCta from "@/components/HairTransplant/HairTransplantCta";
import HairTransplantHero from "@/components/HairTransplant/HairTransplantHero";
import HairTransplantIntro from "@/components/HairTransplant/HairTransplantIntro";
import HairTransplantProcedures from "@/components/HairTransplant/HairTransplantProcedures";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <HairTransplantHero />
      <HairTransplantIntro />
      <HairTransplantProcedures />
      <HairTransplantCta />
    </main>
  );
}
