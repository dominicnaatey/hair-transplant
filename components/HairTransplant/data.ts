export type Procedure = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const procedures: Procedure[] = [
  {
    title: "FUE Hair Transplant",
    description:
      "FUE is a minimally invasive treatment that removes individual follicles and places them carefully for natural-looking density and a softer hairline.",
    image: "/images/solutions_1.png",
    imageAlt: "FUE hair transplant procedure in progress",
  },
  {
    title: "FUT Hair Transplant",
    description:
      "FUT is ideal when larger graft numbers are needed. It allows efficient harvesting while helping restore volume across wider thinning areas.",
    image: "/images/patient_markings.png",
    imageAlt: "FUT hair transplant planning and preparation",
  },
  {
    title: "Eyebrow Transplant",
    description:
      "Eyebrow restoration is designed for sparse or overplucked brows, using precise placement to rebuild shape, softness, and facial balance.",
    image: "/images/case_study_3.png",
    imageAlt: "Close-up hair restoration result",
  },
  {
    title: "Beard Transplant",
    description:
      "We restore patchy beard growth with strategic graft placement that improves density while maintaining a realistic beard pattern and direction.",
    image: "/images/solutions_2.png",
    imageAlt: "Beard transplant consultation patient portrait",
  },
  {
    title: "Female Pattern Baldness Treatment",
    description:
      "Female hair restoration plans focus on careful diagnosis, density preservation, and tailored treatment options that respect existing growth patterns.",
    image: "/images/hair_treatment.png",
    imageAlt: "Female patient receiving hair treatment in clinic",
  },
];
