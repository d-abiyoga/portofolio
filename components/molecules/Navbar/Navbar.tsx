import Link from "next/link";
import MobileNavigation from "../MobileNavigation";
import DesktopNavigation from "../DesktopNavigation";
import styled from "styled-components";
import colors from "../../../styles/colors";
import breakpoints from "../../../styles/breakpoints";
import pagePadding from "../../../styles/utils/pagePadding.styled";

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
  ${pagePadding};

  z-index: 100;
  position: absolute;
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.dark.main};

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
