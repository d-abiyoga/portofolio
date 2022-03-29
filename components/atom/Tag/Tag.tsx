import styles from "./Tag.module.scss";

export const Tag = (props: any) => {
  return <span className={styles.tag} {...props}></span>;
};
