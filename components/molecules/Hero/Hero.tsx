import styles from "./Hero.module.scss";
import Avatar from "../../../public/avatar.svg";
import ButtonLink from "../../atom/ButtonLink/";
import Section from "../../atom/Section";

export const Hero = () => {
  return (
    <Section id="hero">
      <div className={styles.top}>
        <div className={styles.avatarWrapper}>
          <Avatar viewBox="0 50 375 375" />
        </div>
      </div>
      <div className={styles.descriptions}>
        <h1 className={styles.title}>
          Hi. I&apos;m Dimas.
          <br />
          <span className={styles.emphasis}>
            Full stack developer <br />
          </span>
          based in Indonesia.
        </h1>

        <p className={styles.description}>
          Passionate to develop web experience with accessibility in mind.
        </p>
        <div className={styles.buttonGroup}>
          <ButtonLink variant="primary" href="#work">
            See my works
          </ButtonLink>
          <ButtonLink variant="secondary" href="#contact">
            Work with me
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
};
