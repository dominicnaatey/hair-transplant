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
      "With FUE, individual hair follicles are transferred one at a time, from the back of the scalp, where hair is thickest, to the area where hair has thinned. This procedure starts at approximately GH¢15,500.00.",
    image: "/transplant/fue.jpg",
    imageAlt: "FUE hair transplant procedure in progress",
  },
  {
    title: "FUT Hair Transplant",
    description:
      "Much like FUE, donor hairs are taken from the back of the head and inserted into thinning areas. However, in FUT a “donor strip” is taken rather than individual hairs. This procedure starts at approximately GH¢15,500.00.",
    image: "/transplant/fut.jpg",
    imageAlt: "FUT hair transplant planning and preparation",
    imageClassName: "scale-125 object-center",
  },
  {
    title: "Eyebrow Transplant",
    description:
      "Restore fullness and definition to your brows, bidding farewell to sparse patches and uneven shapes. Our skilled team specializes in crafting natural-looking results tailored to suit your unique features. The procedure starts from GH¢14,995-GH¢15,995.",
    image: "/transplant/eyebrow.jpg",
    imageAlt: "Close-up hair restoration result",
  },
  {
    title: "Beard Transplant",
    description:
      "Say goodbye to patchy or thin facial hair and hello to a full, masculine beard that exudes confidence. Our expert team specializes in creating natural-looking results that enhance your facial features. The procedure starts from GH¢16,500.00.",
    image: "/transplant/beard.jpg",
    imageAlt: "Beard transplant consultation patient portrait",
    imageClassName: "scale-115 object-center",
  },
  {
    title: "Female Pattern Baldness Treatment",
    description:
      "Discover renewed confidence with our hair transplant solutions tailored specifically for female pattern baldness. Bid farewell to thinning hair and embrace a fuller, more voluminous mane that enhances your natural beauty.",
    image: "/transplant/female.jpg",
    imageAlt: "Female patient receiving hair treatment in clinic",
  },
];
