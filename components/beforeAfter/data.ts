export type CaseStudy = {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  age: number;
  technique: string;
  duration: string;
};

export const cases: CaseStudy[] = [
  {
    id: 1,
    title: "FUE Hair Transplant - 3500 Grafts",
    description:
      "A complete restoration of the frontal hairline and mid-scalp density. This patient achieved full growth after 12 months, showcasing a natural, undetectable hairline design.",
    beforeImage: "/images/case_1_before_1783879157598.png",
    afterImage: "/images/case_1_after_matched_1783879179154.png",
    age: 34,
    technique: "FUE",
    duration: "12 Months",
  },
  {
    id: 2,
    title: "Crown Restoration",
    description:
      "Targeted procedure focusing on the vertex/crown area. We implanted 2200 grafts to restore density and coverage to the balding crown region.",
    beforeImage: "/images/case_2_before_1783879191592.png",
    afterImage: "/images/case_2_after_matched_1783879394591.png",
    age: 42,
    technique: "Bio FUE",
    duration: "9 Months",
  },
  {
    id: 3,
    title: "Advanced Hairline Lowering",
    description:
      "Patient presented with a receded hairline. We designed a custom, age-appropriate hairline and implanted 2800 grafts using high-density packing techniques.",
    beforeImage: "/images/case_3_before_1783879346818.png",
    afterImage: "/images/case_3_after_matched_1783879365099.png",
    age: 28,
    technique: "DHI",
    duration: "10 Months",
  },
];
