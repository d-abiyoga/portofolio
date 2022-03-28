import styles from "./Nav.module.scss";
import Link from "next/link";
import MenuToggle from "../../atom/MenuToggle";
import NavLink from "../../atom/NavLink/";

export const Nav = () => {
  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <div className={styles.logo}>Dimas.dev </div>
      </Link>
      <nav>
        <ul>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </ul>
      </nav>
      <MenuToggle ariaControls="main-navigation" />
    </header>
  );
};
