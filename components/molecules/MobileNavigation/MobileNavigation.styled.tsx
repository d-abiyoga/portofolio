import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import colors from "../../../styles/colors";

export const Background = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${colors.dark.lighter};

  @media only screen and (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;

  @media only screen and (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;

export const NavUl = styled.ul`
  margin: 0;
  padding: 0;
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 100%;
  z-index: 201;
`;
