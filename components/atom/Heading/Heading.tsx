import { FC, HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3;
}

export const Heading: FC<Props> = ({ level, ...props }) => {
  switch (level) {
    case 1:
      return <h1 {...props}>{props.children}</h1>;
    case 2:
      return <H2 {...props}></H2>;
  }
  return <div></div>;
};

const H2 = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: teal;
  padding-inline: 0.25rem;
`;
