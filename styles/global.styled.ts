import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`

  html,
  body {
    padding: 0
    margin: 0;
    background-color: #191724;
    color: #fff;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    font-family: "Poppins", sans-serif;
    box-: border-box;
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
