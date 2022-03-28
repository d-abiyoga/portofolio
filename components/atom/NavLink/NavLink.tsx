import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = (props: Props) => {
  return (
    <li>
      <Link {...props}></Link>
    </li>
  );
};
