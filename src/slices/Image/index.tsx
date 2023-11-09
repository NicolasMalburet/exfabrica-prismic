import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice, index }: ImageProps): JSX.Element => {
  const image = slice.primary.image;
  return (
    <Bounded
      as="section"
      className={clsx("bg-white", index === 0 && "pt-0 md:pt-0")}
    >
      {prismic.isFilled.image(image) && (
        <div className="bg-gray-100">
          <PrismicNextImage field={image} sizes="100vw" className="w-full" />
        </div>
      )}
    </Bounded>
  );
};

export default Image;
