import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavLink = (props: Props) => {
  return (
    <List>
      <Link {...props}></Link>
    </List>
  );
};

const List = styled.li`
  margin-left: 3rem;
  a {
    text-decoration: none;
    font-size: 1.25rem;
    color: ${colors.grey.darker};
    position: relative;

    &:hover,
    &:active {
      color: ${colors.white.main};
    }
    /* Animation */
    &::after {
      content: "";
      width: 0;
      height: 2px;
      background-color: ${colors.white.main};
      position: absolute;
      bottom: -0.2em;
      left: 0;
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }

`;
