import Image from 'next/image';
import Link from 'next/link';

type Procedure = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const procedures: Procedure[] = [
  {
    title: 'FUE Hair Transplant',
    description:
      'FUE is a minimally invasive treatment that removes individual follicles and places them carefully for natural-looking density and a softer hairline.',
    image: '/images/solutions_1.png',
    imageAlt: 'FUE hair transplant procedure in progress',
  },
  {
    title: 'FUT Hair Transplant',
    description:
      'FUT is ideal when larger graft numbers are needed. It allows efficient harvesting while helping restore volume across wider thinning areas.',
    image: '/images/patient_markings.png',
    imageAlt: 'FUT hair transplant planning and preparation',
  },
  {
    title: 'Eyebrow Transplant',
    description:
      'Eyebrow restoration is designed for sparse or overplucked brows, using precise placement to rebuild shape, softness, and facial balance.',
    image: '/images/case_study_3.png',
    imageAlt: 'Close-up hair restoration result',
  },
  {
    title: 'Beard Transplant',
    description:
      'We restore patchy beard growth with strategic graft placement that improves density while maintaining a realistic beard pattern and direction.',
    image: '/images/solutions_2.png',
    imageAlt: 'Beard transplant consultation patient portrait',
  },
  {
    title: 'Female Pattern Baldness Treatment',
    description:
      'Female hair restoration plans focus on careful diagnosis, density preservation, and tailored treatment options that respect existing growth patterns.',
    image: '/images/hair_treatment.png',
    imageAlt: 'Female patient receiving hair treatment in clinic',
  },
];

export default function HairTransplantPage() {
  return (
    <main className="bg-white">
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
            <h1 className="font-heading text-[2.125rem] font-medium tracking-[-0.02em] text-white sm:text-[2.625rem] md:text-[3.25rem]">
              Hair Transplant
            </h1>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-190 text-center">
            <h2 className="font-heading text-3xl leading-[1.2] font-medium tracking-[-0.02em] text-[#121212] sm:text-[2.125rem]">
              Discover The Latest Hair Transplant Solutions
            </h2>
            <div className="mx-auto mt-4 h-px w-28 bg-[#D9D9D9]" />
            <p className="mx-auto mt-6 max-w-170 text-[0.9375rem] leading-7 text-[#555555] sm:text-base">
              Explore the latest advancements in hair transplantation and personalized care. We
              provide modern solutions designed to improve density, restore confidence, and support
              long-term scalp health.
            </p>
            <p className="mx-auto mt-4 max-w-170 text-[0.9375rem] leading-7 text-[#555555] sm:text-base">
              Whether you are considering your first treatment or looking for a refined plan after
              previous procedures, our approach combines careful diagnosis with realistic,
              natural-looking results.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-245 space-y-16 sm:mt-20 sm:space-y-20 md:space-y-24">
            {procedures.map((procedure, index) => {
              const reversed = index % 2 === 1;

              return (
                <section
                  key={procedure.title}
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                    reversed ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''
                  }`}
                >
                  <div className={`${reversed ? 'md:pl-8' : 'md:pr-8'} text-center md:text-left`}>
                    <h3 className="font-heading text-2xl leading-[1.2] font-medium text-[#121212]">
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

                  <div className="mx-auto w-full max-w-[26.875rem]">
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

        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero_bg_2.png"
              alt="Hair transplant consultation"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[rgba(7,12,22,0.78)]" />

          <div className="relative mx-auto flex min-h-[16.875rem] max-w-245 flex-col items-center justify-center px-6 py-16 text-center">
            <h2 className="max-w-155 font-heading text-3xl leading-[1.2] font-medium text-white sm:text-[2.125rem]">
              Not Sure Which Treatment Is Right For You? We Are Here To Help
            </h2>
            <p className="mt-4 max-w-160 text-[0.9375rem] leading-7 text-white/75 sm:text-base">
              Speak with our team about your hair goals, current concerns, and the best next step
              for diagnosis, treatment, or long-term restoration planning.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="themeht-btn primary-btn">
                Book Now
              </Link>
              <Link
                href="/results"
                className="inline-flex items-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                View Results
              </Link>
            </div>
          </div>
        </section>
      </main>
  );
}
