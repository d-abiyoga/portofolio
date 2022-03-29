import styles from "./Footer.module.scss";
import SocialLink from "../../atom/SocialLink";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.divider} />
      <div className={styles.socialLinkGroup}>
        <SocialLink href="https://github.com/d-abiyoga">
          <FaGithub size={32} />
        </SocialLink>
        <SocialLink href="https://www.frontendmentor.io/profile/d-abiyoga">
          <SiFrontendmentor size={32} />
        </SocialLink>
      </div>
      © 2022 Dimas Abiyoga. All Rights Reserved.
    </footer>
  );
};

export default Footer;
