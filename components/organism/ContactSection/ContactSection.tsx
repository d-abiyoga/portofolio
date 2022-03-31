import styled from "styled-components";
import ButtonLink from "../../atom/ButtonLink";
import SocialLink from "../../atom/SocialLink";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import colors from "../../../styles/colors";
import pagePadding from "../../../styles/utils/pagePadding.styled";

export const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <h2 className={"sr-only"}>Contact Me</h2>
      <p style={{ fontSize: "4rem" }}>Let&apos;s work together</p>
      <ButtonLink href="mailto:dimas.abiyoga169@gmail.com">
        mail to: dimas.abiyoga169@gmail.com
      </ButtonLink>
      <SocialLinkGroup>
        <SocialLink href="https://github.com/d-abiyoga">
          <FaGithub size={32} />
        </SocialLink>
        <SocialLink href="https://www.frontendmentor.io/profile/d-abiyoga">
          <SiFrontendmentor size={32} />
        </SocialLink>
      </SocialLinkGroup>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  ${pagePadding};
  position: relative;
  min-height: calc(100vh - 4rem);
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
    height: calc(100% - 15rem);
    z-index: -1;
    top: 8rem;
    left: 0;
    background-color: ${colors.dark.lighter};
    transform: skewY(-5deg);
  }
`;

const SocialLinkGroup = styled.div`
  display: flex;
  gap: 1rem;
`;