import * as prismic from "@prismicio/client";

type slices = { slice_type: string; primary: { image: any } }[];

export function findFirstImage(slices: slices) {
  const imageSlice = slices.find((slice) => slice.slice_type === "image");

  if (imageSlice && prismic.isFilled.image(imageSlice.primary.image)) {
    return imageSlice.primary.image;
  }
}
