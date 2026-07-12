export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-[#2458B3] py-24 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <h2 className="mb-6 font-heading text-4xl font-medium text-white md:text-5xl">
          Ready for your transformation?
        </h2>
        <p className="mb-10 text-lg text-white/80">
          Schedule a free consultation with our specialists to discuss your hair
          restoration goals and create a personalized treatment plan.
        </p>
        <a
          href="/book"
          className="themeht-btn bg-white text-[#2458B3] transition-transform hover:bg-gray-100 hover:text-[#2458B3]"
        >
          Book Consultation
        </a>
      </div>
    </section>
  );
}
