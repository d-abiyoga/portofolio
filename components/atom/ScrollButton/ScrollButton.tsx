import Link from "next/link";
import styled from "styled-components";

export const ScrollButton = () => {
  return (
    <StyledButton>
      <Link href="#">Scroll Down</Link>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  // position: absolute;
  margin-top: 3rem;
  transform: rotateZ(90deg);
  // translate(-6rem, -4.5rem);
  left: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
  color: #fff;
  animation: scroll 3s ease-out infinite;

  @keyframes scroll {
    0% {
      bottom: 0;
    }
    60% {
      bottom: 1rem;
    }
    100% {
      bottom: 0;
    }
  }
`;
