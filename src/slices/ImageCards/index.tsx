import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ImageCards`.
 */
export type ImageCardsProps = SliceComponentProps<Content.ImageCardsSlice>;

/**
 * Component for "ImageCards" Slices.
 */
const ImageCards = ({ slice, index }: ImageCardsProps): JSX.Element => {
  const image = slice.items[0].image;

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

export default ImageCards;
