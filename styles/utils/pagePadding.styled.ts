import * as styled from "styled-components";
import breakpoints from "../breakpoints";

const pagePadding = styled.css`
  @media only screen and (max-width: ${breakpoints.md}) {
    padding: 0 clamp(1rem, 10%, 2rem);
  }
`;

export default pagePadding;
