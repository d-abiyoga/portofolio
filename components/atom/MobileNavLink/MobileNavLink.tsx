import { AnchorHTMLAttributes, FC, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link, { LinkProps } from "next/link";
import colors from "../../../styles/colors";

type LinkPropType = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

interface Props extends LinkPropType {
  label?: string;
  toggle?: MouseEventHandler;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    display: "flex",
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 10 },
    },
    display: "none",
  },
};

export const MobileNavLink: FC<Props> = (props) => {
  return (
    <Li
      as={motion.li}
      variants={variants}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={props.toggle}
    >
      <Link href={props.href} passHref>
        <A
          as={motion.a}
          href={props.href}
          whileFocus={{
            scale: 1.2,
            backgroundColor: colors.dark.main,
          }}
          role="menuitem"
        >
          {props.label}
        </A>
      </Link>
    </Li>
  );
};

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  color: ${colors.white.main};
  font-size: 2rem;
`;

const A = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  outline: none;
  padding-block: 0.75rem;
`;
