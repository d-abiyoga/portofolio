import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import styles from "./ButtonLink.module.scss";

type ButtonLinkType = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface AnchorProps extends ButtonLinkType {
  color?: string;
  variant: "primary" | "secondary";
}

export const ButtonLink = ({ color, variant, ...props }: AnchorProps) => {
  switch (variant) {
    case "primary":
      return (
        <Link className={styles.primaryButton} {...props}>
          <a className={styles.primaryButton}>{props.children}</a>
        </Link>
      );
    case "secondary":
      return (
        <Link className={styles.secondaryButton} {...props}>
          <a className={styles.secondaryButton}>{props.children}</a>
        </Link>
      );
  }
};
