import { FC } from "react";
import styled from "styled-components";

export const Text: FC = (props) => {
  return <StyledP {...props} />;
};

const StyledP = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: calc(1em + 0.725rem);
`;
