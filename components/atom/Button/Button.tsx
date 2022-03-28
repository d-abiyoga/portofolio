import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  color?: string;
  handleClick?: MouseEventHandler;
  children: ReactNode;
  variant: "primary" | "secondary";
}

export const Button = ({
  color,
  handleClick,
  children,
  variant,
}: ButtonProps) => {
  switch (variant) {
    case "primary":
      return (
        <button onClick={handleClick} className={styles.primaryButton}>
          {children}
        </button>
      );
    case "secondary":
      return (
        <button onClick={handleClick} className={styles.secondaryButton}>
          {children}
        </button>
      );
    default:
      return;
  }
  return <button onClick={handleClick}>{children}</button>;
};
