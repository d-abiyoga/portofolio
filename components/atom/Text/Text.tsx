import { FC } from "react";
import styled from "styled-components";

interface Props {
  size?: "small" | "medium";
}

export const Text: FC<Props> = (props) => {
  if (props.size === "small") return <SmallText {...props} />;
  return <MediumText {...props} />;
};

const MediumText = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6875rem;
`;

const SmallText = styled.p`
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.4375rem;
`;
