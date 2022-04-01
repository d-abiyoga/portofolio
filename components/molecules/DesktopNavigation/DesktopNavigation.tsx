import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import NavLink from "../../atom/NavLink";

export const DesktopNavigation = () => {
  return (
    <nav>
      <Ul>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Ul>
    </nav>
  );
};
const Ul = styled.ul`
  display: flex;
  align-items: baseline;
  @media screen and (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;
