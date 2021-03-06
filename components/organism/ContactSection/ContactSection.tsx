import styled from "styled-components";
import ButtonLink from "../../atom/ButtonLink";
import SocialLink from "../../atom/SocialLink";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor, SiLinkedin } from "react-icons/si";
import colors from "../../../styles/colors";
import pagePadding from "../../../styles/utils/pagePadding.styled";
import { AiOutlineMail } from "react-icons/ai";
import SrOnly from "../../atom/SrOnly";
import theme from "styled-theming";

export const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <h2 className={"sr-only"}>Contact Me</h2>
      <p>I&apos;m open to freelance work</p>
      <p style={{ fontSize: "4rem" }}>Let&apos;s work together</p>
      <ButtonLink href="mailto:dimas.abiyoga169@gmail.com" withIcon>
        <AiOutlineMail />
        <span>dimas.abiyoga169@gmail.com</span>
      </ButtonLink>
      <SocialLinkGroup>
        <SocialLink
          href="https://github.com/d-abiyoga"
          aria-label="Go to Dimas's github"
        >
          <FaGithub size={32} aria-hidden="true" />
          <SrOnly>Link to Github</SrOnly>
        </SocialLink>
        <SocialLink
          href="https://www.frontendmentor.io/profile/d-abiyoga"
          aria-label="Go to Dimas's frontendmentor.io profile"
        >
          <SiFrontendmentor size={32} aria-hidden="true" />
          <SrOnly>Link to Frontendmentor.io profile</SrOnly>
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/dimas-abiyoga-48555796/"
          aria-label="Go to Dimas's LinkedIn"
        >
          <SiLinkedin size={32} aria-hidden="true" />
          <SrOnly>Link to LinkedIn</SrOnly>
        </SocialLink>
      </SocialLinkGroup>
    </SectionWrapper>
  );
};

const contactSectionBackground = theme("mode", {
  light: colors.light.darker,
  dark: colors.dark.lighter,
});

const SectionWrapper = styled.section`
  ${pagePadding};
  position: relative;
  min-height: fit-content;
  height: calc(100vh - 4rem);
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 0;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 75%;
    z-index: -1;
    top: 8rem;
    left: -50%;
    background-color: ${contactSectionBackground};
    /* transform: skewY(-5deg); */
    overflow: show;
  }

  animation: fadeIn 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SocialLinkGroup = styled.div`
  display: flex;
  gap: 1rem;
`;
