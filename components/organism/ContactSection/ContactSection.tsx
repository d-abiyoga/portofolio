import styled from "styled-components";
import ButtonLink from "../../atom/ButtonLink";
import SocialLink from "../../atom/SocialLink";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor, SiLinkedin } from "react-icons/si";
import colors from "../../../styles/colors";
import pagePadding from "../../../styles/utils/pagePadding.styled";
import { AiOutlineMail } from "react-icons/ai";
import SrOnly from "../../atom/SrOnly";

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
        <SocialLink href="https://github.com/d-abiyoga">
          <FaGithub size={32} />
          <SrOnly>Link to Github</SrOnly>
        </SocialLink>
        <SocialLink href="https://www.frontendmentor.io/profile/d-abiyoga">
          <SiFrontendmentor size={32} />
          <SrOnly>Link to Frontendmentor.io profile</SrOnly>
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/dimas-abiyoga-48555796/">
          <SiLinkedin size={32} />
          <SrOnly>Link to LinkedIn</SrOnly>
        </SocialLink>
      </SocialLinkGroup>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  ${pagePadding};
  position: relative;
  min-height: fit-content;
  height: calc(100vh - 4rem);
  padding-top: 5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 75%;
    z-index: -1;
    top: 8rem;
    left: 0;
    background-color: ${colors.dark.lighter};
    transform: skewY(-5deg);
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
