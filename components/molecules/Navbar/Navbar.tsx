import Link from "next/link";
import MobileNavigation from "../MobileNavigation";
import DesktopNavigation from "../DesktopNavigation";
import styled from "styled-components";
import colors from "../../../styles/colors";
import breakpoints from "../../../styles/breakpoints";

export const Navbar = () => {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <Logo> Dimas.dev</Logo>
      </Link>
      <MobileNavigation />
      <DesktopNavigation />
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.dark.main};
  padding: 0 clamp(1rem, 12%, 20rem);

  position: fixed;
  box-shadow: ${colors.primary.main} 0px 1px 20px -8px;

  & > * {
    max-width: 1200px;
  }
`;

export const Logo = styled.div`
  font-size: 1.75rem;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;
