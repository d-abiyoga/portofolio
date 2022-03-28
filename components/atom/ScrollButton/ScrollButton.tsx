import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import styles from "./ScrollButton.module.scss";

export const ScrollButton = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button className={styles.scroll}>
      <Link href="#">Scroll Down</Link>
    </button>
  );
};
