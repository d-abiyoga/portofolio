import { AnchorHTMLAttributes, FC, HTMLAttributeAnchorTarget } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

export const TextLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props
) => {
  return <StyledA {...props}></StyledA>;
};

const StyledA = styled.a`
  color: ${colors.primary.main};
  font-decoration: underline;
`;
