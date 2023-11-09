import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import * as prismic from "@prismicio/client";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const components = {
  heading1: ({ children }: any) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const backgroundImage = slice.primary.background_image;

  return (
    <section className="relative bg-slate-900 text-white">
      {prismic.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="lg" className="relative">
        <div className="grid justify-items-center gap-8">
          <div className="max-w-2xl text-center">{slice.primary.text}</div>
          {prismic.isFilled.link(slice.primary.button_link) && (
            <PrismicNextLink
              field={slice.primary.button_link}
              className="rounded bg-white px-5 py-3 font-medium text-slate-800"
            >
              {slice.primary.button_text || "Learn More"}
            </PrismicNextLink>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
