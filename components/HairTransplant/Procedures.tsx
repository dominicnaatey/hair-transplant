import Image from "next/image";
import Link from "next/link";
import { procedures } from "@/components/HairTransplant/data";
import ScrollReveal from "@/components/ScrollReveal";

export default function Procedures() {
  return (
    <section className="bg-white px-6 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-24 lg:space-y-36">
        {procedures.map((procedure, index) => {
          const reversed = index % 2 === 1;

          return (
            <ScrollReveal
              key={procedure.title}
              direction="up"
              distance={40}
              className={`grid items-center gap-12 lg:gap-16 ${
                reversed ? "lg:grid-cols-[55%_45%]" : "lg:grid-cols-[45%_55%]"
              } ${
                reversed
                  ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              <div
                className={`${
                  reversed ? "lg:pl-12 lg:text-left" : "lg:pr-12 lg:text-right"
                } text-center`}
              >
                <h3 className="font-heading text-3xl md:text-4xl leading-tight font-medium text-[#222]">
                  {procedure.title}
                </h3>
                <p className="mt-6 mb-10 text-[17px] leading-[27px] text-[#666]">
                  {procedure.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#2458B3] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#2458B3] transition-colors duration-300 hover:bg-[#2458B3] hover:text-white"
                >
                  Learn More
                </Link>
              </div>

              <div className="mx-auto w-full max-w-none">
                <div className="p-2 bg-white rounded-[32px] shadow-[0_20px_50px_-16px_rgba(36,88,179,0.15)]">
                  <div className="relative aspect-[1.2/1] overflow-hidden rounded-[24px] bg-[#EDEDED]">
                    <Image
                      src={procedure.image}
                      alt={procedure.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className={`object-cover ${procedure.imageClassName ?? ""}`}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
