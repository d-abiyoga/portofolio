import { HTMLProps } from "react";
import styles from "./Heading.module.scss";

interface Props extends HTMLProps<HTMLHeadingElement> {
  level: 1 | 2 | 3;
}

export const Heading = ({ level, ...props }: Props) => {
  switch (level) {
    case 1:
      return <h1 className={styles.h1} {...props}></h1>;
    case 2:
      return <h2 className={styles.h2} {...props}></h2>;
  }
  return <div></div>;
};
