import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import { StyledButton } from "../Button/Button";

type ButtonLinkType = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface AnchorProps extends ButtonLinkType {
  variant?: "primary" | "secondary";
  withIcon?: boolean;
}

export const ButtonLink = ({ variant = "primary", ...props }: AnchorProps) => {
  return (
    <Link {...props}>
      <StyledButton as="a" variant={variant} href={props.href} withIcon>
        {props.children}
      </StyledButton>
    </Link>
  );
};
