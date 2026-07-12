import Image from "next/image";
import Link from "next/link";
import { procedures } from "@/components/HairTransplant/hairTransplantData";

export default function HairTransplantProcedures() {
  return (
    <section className="bg-white px-6 pb-16 sm:pb-20 md:pb-24">
      <div className="mx-auto max-w-245 space-y-16 sm:space-y-20 md:space-y-24">
        {procedures.map((procedure, index) => {
          const reversed = index % 2 === 1;

          return (
            <section
              key={procedure.title}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                reversed
                  ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              <div
                className={`${
                  reversed ? "md:pl-8" : "md:pr-8"
                } text-center md:text-left`}
              >
                <h3 className="font-heading text-2xl leading-[1.2] font-medium !text-[#121212]">
                  {procedure.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-7 text-[#5B5B5B]">
                  {procedure.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center rounded-md bg-[#2458B3] px-5 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#1b4692]"
                >
                  Learn More
                </Link>
              </div>

              <div className="mx-auto w-full max-w-107.5">
                <div className="relative aspect-[1.08/1] overflow-hidden rounded-[1.125rem] bg-[#EDEDED]">
                  <Image
                    src={procedure.image}
                    alt={procedure.imageAlt}
                    fill
                    sizes="(min-width: 768px) 430px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
