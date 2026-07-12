export type Treatment = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageClassName?: string;
};

export const treatments: Treatment[] = [
  {
    title: "Scalp Micropigmentation (SMP)",
    description:
      "Scalp micropigmentation creates the appearance of fuller density using carefully layered pigment placement that restores definition along the hairline and across visibly thinning areas.",
    image: "/images/patient_markings.png",
    imageAlt: "Scalp micropigmentation consultation and hairline planning",
    imageClassName: "object-center scale-110",
  },
  {
    title: "Growth Factor Therapy",
    description:
      "Growth factor therapy supports healthier follicles with targeted regenerative stimulation designed to improve scalp vitality, encourage stronger strands, and complement ongoing restoration plans.",
    image: "/images/hair_treatment.png",
    imageAlt: "Growth factor therapy session for scalp restoration",
  },
  {
    title: "Scalp & Facial Microneedling",
    description:
      "Microneedling treatments for the scalp and facial skin promote renewal, refine texture, and support better absorption of active therapies while maintaining a gentle, controlled treatment experience.",
    image: "/images/solutions_1.png",
    imageAlt: "Scalp microneedling treatment in progress",
  },
  {
    title: "Exosomes",
    description:
      "Exosome-based therapy is used to deliver advanced regenerative support for weakened follicles, helping improve the environment for healthier growth and long-term scalp recovery.",
    image: "/images/solutions_2.png",
    imageAlt: "Exosome treatment consultation for hair restoration",
    imageClassName: "object-center scale-110",
  },
  {
    title: "Low Level Light Therapy (LLLT)",
    description:
      "LLLT uses consistent, low-level light energy to support circulation and follicle activity, making it a practical non-surgical option for patients focused on maintenance and early intervention.",
    image: "/images/diagnosis_3.png",
    imageAlt: "Low level light therapy consultation and scalp assessment",
  },
];
