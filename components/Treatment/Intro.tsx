import ScrollReveal from "@/components/ScrollReveal";

export default function Intro() {
  return (
    <section className="bg-[#F9F8F6] px-6 py-20 sm:py-24 md:py-32">
      <ScrollReveal
        className="mx-auto max-w-4xl text-center"
        direction="up"
        distance={30}
      >
        <h2 className="font-heading text-3xl leading-tight font-medium text-[#222] sm:text-4xl md:text-5xl">
          Discover Advanced Treatment Solutions
        </h2>
        <div className="mx-auto mb-10 mt-8 h-px w-20 bg-[#2458B3]" />
        <p className="mx-auto mb-8 max-w-3xl text-[17px] leading-[27px] text-[#666]">
          Our treatment options are designed for patients who want to strengthen
          the scalp, support healthier follicles, and improve the appearance of
          thinning without immediately moving to surgery.
        </p>
        <p className="mx-auto max-w-3xl text-[17px] leading-[27px] text-[#666]">
          From regenerative therapies to precision scalp care, each plan is
          selected around your level of hair loss, recovery goals, and the type
          of support needed for visible, sustainable progress.
        </p>
      </ScrollReveal>
    </section>
  );
}
