import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { Bounded } from "@/components/Bounded";
import clsx from "clsx";

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote = ({ slice }: QuoteProps): JSX.Element => {
  return (
    <Bounded as="section" className="bg-white">
      {slice.primary.quote && (
        <figure className="grid gap-6">
          <blockquote>
            <p
              className={clsx(
                "text-4xl font-medium leading-tight md:text-5xl md:leading-tight",
                !prismic.isFilled.keyText(slice.primary.source) && "text-center"
              )}
            >
              <span className="-ml-3.5 select-none text-slate-400 md:-ml-5">
                &ldquo;
              </span>
              {slice.primary.quote}
              <span className="select-none text-slate-400">&rdquo;</span>
            </p>
          </blockquote>
          {prismic.isFilled.keyText(slice.primary.source) && (
            <figcaption className="text-right">
              &mdash; {slice.primary.source}
            </figcaption>
          )}
        </figure>
      )}
    </Bounded>
  );
};

export default Quote;
