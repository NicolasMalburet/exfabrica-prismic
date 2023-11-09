import { PrismicNextLink } from "@prismicio/next";

import { Bounded } from "./Bounded";
import { HorizontalDivider } from "./HorizontalDivider";
import { NavigationDocument } from "../../prismicio-types";

const NavItem = ({ children }: any) => {
  return (
    <li className="font-semibold tracking-tight text-slate-800">{children}</li>
  );
};

export const Header = ({
  withDivider = true,
  navigation,
}: {
  withDivider: boolean;
  navigation: NavigationDocument;
}) => {
  return (
    <Bounded as="header">
      <div className="grid grid-cols-1 justify-items-center gap-20">
        <nav>
          <ul className="flex flex-wrap justify-center gap-10">
            {navigation.data?.links.map((item) => (
              <NavItem key={item.label}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </NavItem>
            ))}
          </ul>
        </nav>
        {withDivider && <HorizontalDivider />}
      </div>
    </Bounded>
  );
};
