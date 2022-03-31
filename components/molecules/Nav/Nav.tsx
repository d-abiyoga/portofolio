import Link from "next/link";
import MenuToggle from "../../atom/MenuToggle";
import NavLink from "../../atom/NavLink/";
import styled from "styled-components";
import colors from "../../../styles/colors";
import breakpoints from "../../../styles/breakpoints";

export const Nav = () => {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <Logo> Dimas.dev</Logo>
      </Link>
      <nav>
        <ul>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </ul>
      </nav>
      <MenuToggle ariaControls="main-navigation" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.dark.main};
  padding: 0 clamp(1rem, 12%, 10rem);

  position: fixed;
  box-shadow: ${colors.primary.main} 0px 1px 20px -8px;
  z-index: 100;

  & > * {
    max-width: 1200px;
  }

  ul {
    display: flex;
    align-items: baseline;
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    ul {
      display: none;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.75rem;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;
