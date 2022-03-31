import Avatar from "../../../public/avatar.svg";
import ButtonLink from "../../atom/ButtonLink/";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import colors from "../../../styles/colors";
import pagePadding from "../../../styles/utils/pagePadding.styled";

export const HeroSection = () => {
  return (
    <SectionWrapper id="hero">
      <TopDiv>
        <Avatar />
      </TopDiv>

      <Description>
        <H1>
          Hi. I&apos;m Dimas.
          <br />
          <EmphasizedText>
            Full stack developer <br />
          </EmphasizedText>
          based in Indonesia.
        </H1>

        <p>Passionate to develop web experience with accessibility in mind.</p>
        <ButtonGroup>
          <ButtonLink variant="primary" href="#work">
            See my works
          </ButtonLink>
          <ButtonLink variant="secondary" href="#contact">
            Work with me
          </ButtonLink>
        </ButtonGroup>
      </Description>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  ${pagePadding}
  min-height: 100vh;
  padding-top: 5rem;

  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media only screen and (min-width: ${breakpoints.sm}) {
    flex-direction: column;
    justify-content: space-between;
    gap: 0;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 2rem;
  }

  animation: fadeIn 5s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  @media only screen and (min-width: ${breakpoints.sm}) {
    font-size: 2.75rem;
  }
  @media only screen and (min-width: ${breakpoints.md}) {
    font-size: 3rem;
  }
`;

const EmphasizedText = styled.span`
  color: ${colors.accent.main};
`;

const Description = styled.div`
  & > * {
    padding-bottom: 0.35rem;
    text-align: center;
  }
  @media only screen and (min-width: ${breakpoints.md}) {
    & > * {
      text-align: left;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  justify-content: center;

  @media only screen and (min-width: ${breakpoints.md}) {
    justify-content: start;
  }
`;

const TopDiv = styled.div`
  @media only screen and (min-width: ${breakpoints.sm}) {
    margin-block: auto;
  }
  @media only screen and (min-width: ${breakpoints.md}) {
    margin-block: none;
  }
`;
