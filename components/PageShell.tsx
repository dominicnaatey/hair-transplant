import Header from './Header';
import Footer from './Footer';

type PageShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function PageShell({ title, description, children }: PageShellProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_52%)]" />
      <Header />
      <section className="relative px-6 pb-24 pt-36 sm:pt-40 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600 shadow-sm backdrop-blur">
            Hairise / {title}
          </div>
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl font-bold font-serif text-slate-900 sm:text-5xl lg:text-6xl">{title}</h1>
            {description ? <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">{description}</p> : null}
          </div>
          <div className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white/80 p-6 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.35)] backdrop-blur sm:p-8 lg:p-10">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
