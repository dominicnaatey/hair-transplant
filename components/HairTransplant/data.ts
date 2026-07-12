export type Procedure = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
};

export const procedures: Procedure[] = [
  {
    title: "FUE Hair Transplant",
    description:
      "FUE is a minimally invasive treatment that removes individual follicles and places them carefully for natural-looking density and a softer hairline.",
    image: "/transplant/fue.jpg",
    imageAlt: "FUE hair transplant procedure in progress",
  },
  {
    title: "FUT Hair Transplant",
    description:
      "FUT is ideal when larger graft numbers are needed. It allows efficient harvesting while helping restore volume across wider thinning areas.",
    image: "/transplant/fut.jpg",
    imageAlt: "FUT hair transplant planning and preparation",
    imageClassName: "scale-125 object-center",
  },
  {
    title: "Eyebrow Transplant",
    description:
      "Eyebrow restoration is designed for sparse or overplucked brows, using precise placement to rebuild shape, softness, and facial balance.",
    image: "/transplant/eyebrow.jpg",
    imageAlt: "Close-up hair restoration result",
  },
  {
    title: "Beard Transplant",
    description:
      "We restore patchy beard growth with strategic graft placement that improves density while maintaining a realistic beard pattern and direction.",
    image: "/transplant/beard.jpg",
    imageAlt: "Beard transplant consultation patient portrait",
    imageClassName: "scale-115 object-center",
  },
  {
    title: "Female Pattern Baldness Treatment",
    description:
      "Female hair restoration plans focus on careful diagnosis, density preservation, and tailored treatment options that respect existing growth patterns.",
    image: "/transplant/female.jpg",
    imageAlt: "Female patient receiving hair treatment in clinic",
  },
];
