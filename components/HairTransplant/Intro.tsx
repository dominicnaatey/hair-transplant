import ScrollReveal from "@/components/ScrollReveal";

export default function Intro() {
  return (
    <section className="bg-[#F9F8F6] px-6 py-20 sm:py-24 md:py-32">
      <ScrollReveal className="mx-auto max-w-4xl text-center" direction="up" distance={30}>
        <h2 className="font-heading text-3xl leading-tight font-medium text-[#222] sm:text-4xl md:text-5xl">
          Discover the Latest Hair Transplant Solutions
        </h2>
        <div className="mx-auto mt-8 mb-10 h-px w-20 bg-[#2458B3]" />
        <p className="mx-auto max-w-3xl text-[17px] leading-[27px] text-[#666] mb-8">
          Amidst the myriad of treatments touted for male pattern hair loss
          (MPHL), one stands out as the sole proven, permanent, and natural
          solution – hair transplantation.
        </p>
        <p className="mx-auto max-w-3xl text-[17px] leading-[27px] text-[#666]">
          Consider this: MPHL, also known as androgenetic alopecia, affects a
          staggering 70% of men at some point in their lives. Faced with this
          reality, men explore a plethora of medical and non-medical options.
          While wigs provide a temporary cover-up and medications offer some
          respite from the progression of alopecia, neither can rival the proven
          efficacy of hair transplantation in regaining your natural locks.
        </p>
      </ScrollReveal>
    </section>
  );
}
