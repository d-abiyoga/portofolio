import { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4;
}

export const Heading: FC<Props> = ({ level, ...props }) => {
  switch (level) {
    case 1:
      return <H1 {...props}></H1>;
    case 2:
      return <H2 {...props}></H2>;
    case 3:
      return <H3 {...props}></H3>;
    case 4:
      return <H4 {...props}></H4>;
  }
};
const H1 = styled.h1`
  font-size: 2.65rem;
  line-height: 4.315rem;
  font-weight: 700;

  @media only screen and (max-width: ${breakpoints.sm}) {
    font-size: 2.45rem;
  }
`;

const H2 = styled.h2`
  font-size: 2.065rem;
  line-height: 3.315rem;
  font-weight: 700;
`;

const H3 = styled.h3`
  font-size: 1.625rem;
  line-height: 2.625rem;
  font-weight: 700;
`;

const H4 = styled.h4`
  font-size: 1.25rem;
  line-height: 2.0625rem;
  font-weight: 700;
  color: teal;
`;
