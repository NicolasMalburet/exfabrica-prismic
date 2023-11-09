import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" className="bg-white">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <PrismicRichText field={slice.primary.text} />
        </div>
        <div>
          {prismic.isFilled.image(image) && (
            <div className="bg-gray-100">
              <PrismicNextImage
                field={image}
                sizes="100vw"
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
