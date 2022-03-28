import { HTMLAttributes } from "react";
import styles from "./Section.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  id: string;
}

export const Section = (props: Props) => {
  return (
    <section
      className={`${styles.container} ${styles[props.id]}`}
      {...props}
    ></section>
  );
};
