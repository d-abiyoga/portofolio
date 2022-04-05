import { useWindowSize } from "@react-hook/window-size";
import FocusTrap from "focus-trap-react";
import { motion, useCycle } from "framer-motion";
import { FC, RefObject, useEffect, useRef } from "react";
import DarkModeToggle from "../../atom/DarkModeToggle";
import MenuToggle from "../../atom/MenuToggle";
import MobileNavLink from "../../atom/MobileNavLink";
import { Background, Nav, NavUl } from "./MobileNavigation.styled";

const sidebar = {
  open: (width: number) => ({
    clipPath: `circle(${1000 * 2 + 200}px at ${0.88 * width - 5}px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: (width: number) => ({
    clipPath: `circle(0px at ${0.88 * width - 5}px 28px)`,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
};

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const MobileNavigation: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef() as RefObject<HTMLElement>;
  const [width] = useWindowSize();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!isOpen) {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <FocusTrap active={isOpen}>
      <Nav
        as={motion.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={width}
        ref={containerRef}
      >
        <DarkModeToggle
          style={{
            position: "absolute",
            right: "7.5rem",
            top: "calc(50% - 22px)",
          }}
        />
        <Background as={motion.div} variants={sidebar} custom={width} />
        <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
        <NavUl as={motion.ul} variants={ulVariants}>
          <MobileNavLink
            href="#work"
            label="Work"
            toggle={() => toggleOpen()}
          />
          <MobileNavLink
            href="#about"
            label="About"
            toggle={() => toggleOpen()}
          />
          <MobileNavLink
            href="#contact"
            label="Contact"
            toggle={() => toggleOpen()}
          />
        </NavUl>
      </Nav>
    </FocusTrap>
  );
};
