import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import styles from "./SocialLink.module.scss";

type LinkPropType = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const SocialLink = (props: LinkPropType) => {
  return (
    <Link href={props.href} passHref>
      <a
        target="_blank"
        rel="noreferrer"
        href={props.href}
        className={styles.link}
      >
        {props.children}
      </a>
    </Link>
  );
};
