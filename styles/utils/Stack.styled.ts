import * as styled from "styled-components";

const stack = styled.css`
  &>*: where(: not(: first-child)) {
    margin-top: var(--stack-gap, 1rem);
  }
`;

export default stack;
