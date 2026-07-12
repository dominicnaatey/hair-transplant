import Image from "next/image";
import Link from "next/link";
import { procedures } from "@/components/HairTransplant/data";

export default function Procedures() {
  return (
    <section className="bg-white px-6 pb-16 sm:pb-20 md:pb-24">
      <div className="mx-auto max-w-245 space-y-16 sm:space-y-20 md:space-y-36">
        {procedures.map((procedure, index) => {
          const reversed = index % 2 === 1;

          return (
            <section
              key={procedure.title}
              className={`grid items-center gap-8 md:gap-12 ${
                reversed ? "md:grid-cols-[55%_45%]" : "md:grid-cols-[45%_55%]"
              } ${
                reversed
                  ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              <div
                className={`${
                  reversed ? "md:pl-8 md:text-left" : "md:pr-8 md:text-right"
                } text-center `}
              >
                <h3 className="text-2xl leading-[1.2] font-light text-blue-900!">
                  {procedure.title}
                </h3>
                <p className="mt-4 text-balance text-[15px] leading-7 text-black">
                  {procedure.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center rounded-md bg-blue-800 px-5 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#1b4692]"
                >
                  Learn More
                </Link>
              </div>

              <div className="mx-auto w-full max-w-none">
                <div className="relative aspect-[1.2/1] overflow-hidden rounded-[1.125rem] bg-[#EDEDED]">
                  <Image
                    src={procedure.image}
                    alt={procedure.imageAlt}
                    fill
                    sizes="(min-width: 768px) 430px, 100vw"
                    className={`object-cover ${procedure.imageClassName ?? ""}`}
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
