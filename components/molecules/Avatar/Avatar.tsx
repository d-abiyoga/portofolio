import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import AvatarSvg from "../../../public/avatar.svg";

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <AvatarSvg viewBox="0 50 375 375" />
    </AvatarWrapper>
  );
};

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6c17a;
  height: 10rem;
  width: 10rem;
  padding: 1rem;
  border-radius: 50%;

  svg {
    height: 100%;
    width: auto;
  }

  @media only screen and (min-width: ${breakpoints.sm}) {
    height: 20rem;
    width: 20rem;
  }

  @media only screen and (min-width: ${breakpoints.md}) {
    height: clamp(20rem, 28vw, 38rem);
    width: clamp(20rem, 28vw, 38rem);
  }
`;
