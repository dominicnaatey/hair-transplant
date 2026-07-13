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
          ORevitalize your hair without surgery! Our hair loss treatments offer 
          a non-surgical solution to thinning hair and receding hairlines. Our 
          expert team specializes in personalized treatments tailored to your 
          unique needs, ensuring effective results without the need for surgery. 
          Experience the confidence-boosting transformation of fuller, more vibrant 
          hair with our hair loss treatments today!
        </p>
      </ScrollReveal>
    </section>
  );
}
