import { FC } from "react";
import styles from "./Text.module.scss"

export const Text: FC = (props) => {
  return <p className={styles.text} {...props} />;
};
