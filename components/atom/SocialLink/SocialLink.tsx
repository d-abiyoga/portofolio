import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import styles from "./SocialLink.module.scss";

interface Props extends LinkProps {
  children: ReactNode;
}

export const SocialLink = (props: Props) => {
  return (
    <Link href={props.href} passHref>
      <a target="_blank" className={styles.link}>
        {props.children}
      </a>
    </Link>
  );
};
