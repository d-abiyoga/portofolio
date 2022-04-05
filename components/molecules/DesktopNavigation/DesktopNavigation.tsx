import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import DarkModeToggle from "../../atom/DarkModeToggle";
import NavLink from "../../atom/NavLink";

export const DesktopNavigation = () => {
  return (
    <Nav>
      <DarkModeToggle />
      <Ul>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
const Ul = styled.ul`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;
