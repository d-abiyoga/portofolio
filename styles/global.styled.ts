import * as styled from "styled-components";
import { backgroundColor, textColor } from "./theme";

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${backgroundColor};
    color: ${textColor};
    scroll-behavior: smooth;
    /* overflow: visible; */
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  /* classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap; /* added line */
    border: 0;
  }
`;
