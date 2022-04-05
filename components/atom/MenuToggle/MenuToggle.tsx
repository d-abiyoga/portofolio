import { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";
import { motion, SVGMotionProps } from "framer-motion";

interface MenuToggleProps {
  isOpen: boolean;
  color?: string;
  toggle: MouseEventHandler;
}

const Path = (props: SVGMotionProps<SVGElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
    whileHover={{ fill: "red" }}
  />
);

export const MenuToggle: FC<MenuToggleProps> = ({
  color = "teal",
  isOpen,
  toggle,
}) => {
  return (
    <Button
      onClick={toggle}
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls="main-navigation"
      aria-label={isOpen ? "Close navigation menu" : "Expand navigation menu"}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          stroke={color}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke={color}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <Path
          stroke={color}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </Button>
  );
};

const Button = styled.button`
  border: none;
  background: transparent;
  display: block;
  cursor: pointer;
  outline: none;
  border: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  position: absolute;

  top: calc(50% - 22px);
  right: calc(clamp(1rem, 7%, 4rem) - 10px);
  width: 50px;
  height: 50px;
  z-index: 201;

  &:focus-visible {
    outline: 1px solid #fff;
  }

  @media only screen and (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;
