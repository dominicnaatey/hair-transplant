import Image from "next/image";
import Link from "next/link";

export default function HairTransplantCta() {
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
      <div className="absolute inset-0 bg-[rgba(7,12,22,0.78)]" />

      <div className="relative mx-auto flex min-h-[16.875rem] max-w-245 flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="max-w-155 font-heading text-3xl leading-[1.2] font-medium !text-white sm:text-[2.125rem]">
          Not Sure Which Treatment Is Right For You? We Are Here To Help
        </h2>
        <p className="mt-4 max-w-160 text-[0.9375rem] leading-7 text-white/75 sm:text-base">
          Speak with our team about your hair goals, current concerns, and the
          best next step for diagnosis, treatment, or long-term restoration
          planning.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="themeht-btn primary-btn">
            Book Now
          </Link>
          <Link
            href="/results"
            className="inline-flex items-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
          >
            View Results
          </Link>
        </div>
      </div>
    </section>
  );
}
