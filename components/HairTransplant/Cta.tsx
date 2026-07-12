import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero_bg_2.png"
          alt="Hair transplant consultation"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex min-h-[16.875rem] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:py-28">
        <ScrollReveal direction="up" distance={30} className="flex flex-col items-center justify-center">
          <h2 className="max-w-4xl font-heading text-3xl leading-[1.2] font-medium !text-white sm:text-4xl md:text-5xl">
            Not Sure Which Treatment Is Right For You? We Are Here To Help
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[27px] text-white/80">
            Speak with our team about your hair goals, current concerns, and the
            best next step for diagnosis, treatment, or long-term restoration
            planning.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Link href="/book" className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#2458B3] transition-transform hover:scale-105">
              Book Now
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center rounded-full border border-white/25 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              View Results
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
