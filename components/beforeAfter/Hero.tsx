import Link from "next/link";

export default function Hero() {
  return (
    <section className="page-banner">
      <div className="page-banner-overlay" />

      <div
        className="pointer-events-none absolute animate-float rounded-full border border-white/10"
        style={{ top: "20%", right: "15%", width: 200, height: 200 }}
      />
      <div
        className="pointer-events-none absolute animate-float-slow rounded-full border border-[#2458B3]/30"
        style={{ top: "40%", right: "30%", width: 120, height: 120 }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          bottom: "-40px",
          left: "10%",
          width: 300,
          height: 300,
          background:
            "radial-gradient(circle, rgba(36,88,179,0.2), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 lg:px-12">
        <nav className="mb-6 flex items-center gap-0" aria-label="Breadcrumb">
          <Link
            href="/"
            className="breadcrumb-item transition-colors hover:text-white"
          >
            Home
          </Link>
          <span className="flex items-center">
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item active">Before & After</span>
          </span>
        </nav>

        <h1 className="mb-4 font-heading">Before & After Gallery</h1>

        <p className="max-w-140 text-lg leading-7 text-white/65">
          Explore real patient transformations. Slide to compare the before and
          after results of our advanced hair restoration procedures.
        </p>
      </div>
    </section>
  );
}
