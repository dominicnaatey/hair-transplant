import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-70 overflow-hidden sm:h-85 md:h-100">
      <Image
        src="/images/patient_markings.png"
        alt="Hair transplant procedure"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2)_0%,rgba(15,23,42,0.56)_100%)]" />
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <h1 className="font-heading text-3xl font-medium tracking-[1.2] !text-white md:text-5xl">
          Hair Transplant
        </h1>
      </div>
    </section>
  );
}
