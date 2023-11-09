import Link from "next/link";

import { Bounded } from "./Bounded";
import { HorizontalDivider } from "./HorizontalDivider";

export function Footer() {
  return (
    <Bounded as="footer">
      <div className="grid grid-cols-1 justify-items-center gap-24">
        <HorizontalDivider />
        <div className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
          Proudly published using{" "}
          <Link href="https://prismic.io" className="text-slate-700">
            Prismic
          </Link>
        </div>
      </div>
    </Bounded>
  );
}
