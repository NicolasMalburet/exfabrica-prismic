import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white leading-relaxed">
      <div
        className={clsx(
          slice.variation === "twoColumns" && "md:columns-2 md:gap-6"
        )}
      >
        <PrismicRichText field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default Text;
