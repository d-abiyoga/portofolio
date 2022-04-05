import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import { hoverColor } from "../../../styles/theme";

type LinkPropType = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const SocialLink = (props: LinkPropType) => {
  return (
    <Link href={props.href} passHref>
      <StyledA
        target="_blank"
        rel="noreferrer"
        href={props.href}
        aria-label={props["aria-label"]}
      >
        {props.children}
      </StyledA>
    </Link>
  );
};

export const StyledA = styled.a`
  cursor: pointer;
  color: gray;
  height: 2.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.25rem;
  aspect-ratio: 1;

  &:hover {
    color: #ffffff;
    color: ${hoverColor};
  }

  &:focus {
    color: white;
  }
`;
