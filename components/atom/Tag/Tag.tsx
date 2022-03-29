import { FC } from "react";
import styled from "styled-components";

export const Tag: FC = (props) => {
  return <StyledTag {...props}></StyledTag>;
};

const StyledTag = styled.span`
  display: inline-block;
  background-color: lightcyan;
  color: teal;
  padding: 0.2rem 0.75rem;
  margin: 0.2rem;
  border-radius: 3rem;
`;
