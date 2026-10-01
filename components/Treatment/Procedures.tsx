import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { treatments } from "@/components/Treatment/data";

export default function Procedures() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl space-y-24 mx-auto px-6 lg:space-y-36">
        {treatments.map((treatment, index) => {
          const reversed = index % 2 === 1;

          return (
            <ScrollReveal
              key={treatment.title}
              direction="up"
              distance={40}
              // On desktop: two columns, alternating sides. On mobile: single column.
              className={`grid items-center gap-6 lg:gap-16 ${
                reversed
                  ? "lg:grid-cols-[55fr_45fr]"
                  : "lg:grid-cols-[45fr_55fr]"
              }`}
            >
              {/* ── Text column (desktop only) ─────────────────────────────── */}
              <div
                className={`hidden lg:block ${
                  reversed
                    ? "lg:pl-12 lg:text-left lg:order-2"
                    : "lg:pr-12 lg:text-right lg:order-1"
                }`}
              >
                <h3 className="font-heading text-3xl md:text-4xl leading-tight font-medium text-[#222]">
                  {treatment.title}
                </h3>
                <p className="mt-6 mb-10 text-balance text-[17px] leading-6.75 text-[#666]">
                  {treatment.description}
                </p>
                <Link
                  href="/book"
                  className="inline-flex items-center rounded-full border border-[#2458B3] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#2458B3] transition-colors duration-300 hover:bg-[#2458B3] hover:text-white"
                >
                  Book Consultation
                </Link>
              </div>

              {/* ── Image column ──────────────────────────────────────────── */}
              <div className={`w-full ${reversed ? "lg:order-1" : "lg:order-2"}`}>
                {/* Mobile title — above the image */}
                <h3 className="lg:hidden font-heading text-3xl leading-tight font-medium text-[#222] text-center mb-6">
                  {treatment.title}
                </h3>

                <div className="rounded-4xl bg-white p-2 shadow-[0_20px_50px_-16px_rgba(36,88,179,0.15)]">
                  <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-[#EDEDED]">
                    <Image
                      src={treatment.image}
                      alt={treatment.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className={`object-cover ${treatment.imageClassName ?? ""}`}
                    />
                  </div>
                </div>

                {/* Mobile description + button — below the image */}
                <div className="lg:hidden mt-6 text-center">
                  <p className="text-balance text-[17px] leading-6.75 text-[#666] mb-8">
                    {treatment.description}
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center rounded-full border border-[#2458B3] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#2458B3] transition-colors duration-300 hover:bg-[#2458B3] hover:text-white"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
