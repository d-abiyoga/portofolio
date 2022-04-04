import Link from "next/link";
import MobileNavigation from "../MobileNavigation";
import DesktopNavigation from "../DesktopNavigation";
import styled from "styled-components";
import colors from "../../../styles/colors";
import breakpoints from "../../../styles/breakpoints";
import pagePadding from "../../../styles/utils/pagePadding.styled";
import DarkModeToggle from "../../atom/DarkModeToggle";
import { backgroundColor } from "../../../styles/theme";

export const Navbar = () => {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <Logo> Dimas.dev</Logo>
      </Link>
      <DarkModeToggle />
      <MobileNavigation />
      <DesktopNavigation />
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  /* ${pagePadding}; */
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  z-index: 100;
  position: absolute;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${backgroundColor}
  box-shadow: ${colors.primary.main} 0px 1px 20px -8px;

  /* & > * {
    max-width: 1200px;
  } */
`;

export const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;
