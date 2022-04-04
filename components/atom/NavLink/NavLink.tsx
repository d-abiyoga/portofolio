import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { hoverColor, inactiveColor } from "../../../styles/theme";

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = (props: Props) => {
  return (
    <List>
      <Link {...props}>
        <a href={props.href} role="menuitem">
          {props.children}
        </a>
      </Link>
    </List>
  );
};

const List = styled.li`
  margin-left: 3rem;
  a {
    text-decoration: none;
    font-size: 1.25rem;
    color: ${inactiveColor};
    position: relative;

    &:hover,
    &:active {
      color: ${hoverColor};
    }
    /* Animation */
    &::after {
      content: "";
      width: 0;
      height: 3px;
      background-color: ${colors.primary.main};
      position: absolute;
      bottom: -0.2em;
      left: 0;
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }

`;
