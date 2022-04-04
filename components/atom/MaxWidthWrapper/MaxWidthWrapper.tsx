import { FC } from "react";
import styled from "styled-components";

export const MaxWidthWrapper: FC = (props) => {
  return <Wrapper {...props}></Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;
