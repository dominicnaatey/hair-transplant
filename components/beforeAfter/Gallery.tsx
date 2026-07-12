import BeforeAfterSlider from "@/components/beforeAfter/BeforeAfterSlider";
import ScrollReveal from "@/components/ScrollReveal";
import { cases } from "@/components/beforeAfter/data";

export default function Gallery() {
  return (
    <section className="bg-[#F9F8F6] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-24 px-6 lg:space-y-32 lg:px-12">
        {cases.map((c, index) => (
          <ScrollReveal
            key={c.id}
            direction="up"
            distance={40}
            className={`grid grid-cols-1 items-center gap-10 lg:gap-16 ${
              index % 2 !== 0
                ? "lg:grid-cols-[45%_55%]"
                : "lg:grid-cols-[55%_45%]"
            }`}
          >
            <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="rounded-4xl bg-white p-2 shadow-[0_20px_50px_-16px_rgba(36,88,179,0.15)]">
                <BeforeAfterSlider
                  beforeImage={c.beforeImage}
                  afterImage={c.afterImage}
                />
              </div>
            </div>

            <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
              <span className="mb-6 inline-block rounded-full bg-[#2458B3]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#2458B3]">
                Case Study {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mb-6 font-heading text-3xl font-medium leading-tight text-[#222] md:text-4xl">
                {c.title}
              </h3>

              <p className="mb-10 text-[17px] leading-6.75 text-[#666] text-balance">
                {c.description}
              </p>

              <div className="grid grid-cols-3 gap-6 border-t border-[#e8e4dc] pt-8">
                <div>
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2458B3]">
                    Age
                  </div>
                  <div className="font-heading text-xl text-[#222]">{c.age}</div>
                </div>
                <div>
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2458B3]">
                    Technique
                  </div>
                  <div className="font-heading text-xl text-[#222]">
                    {c.technique}
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2458B3]">
                    Result
                  </div>
                  <div className="font-heading text-xl text-[#222]">
                    {c.duration}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
