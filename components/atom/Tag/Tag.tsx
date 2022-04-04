import { FC } from "react";
import styled from "styled-components";

export const Tag: FC = (props) => {
  return <StyledTag {...props}></StyledTag>;
};

const StyledTag = styled.span`
  display: inline-block;
  white-space: nowrap;
  background-color: lightcyan;
  color: teal;
  padding: 0.2rem 0.5rem;
  /* margin: 0.2rem; */
  border-radius: 3rem;
  font-size: 0.8125rem;
  font-weight: 400;
`;
