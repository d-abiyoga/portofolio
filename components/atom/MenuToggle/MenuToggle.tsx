import { MouseEventHandler, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import breakpoints from "../../../styles/breakpoints";

interface MenuToggleProps {
  ariaControls: string;
  size?: string;
  color?: string;
}

export const MenuToggle = ({
  ariaControls,
  size = "2rem",
  color = "white",
}: MenuToggleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick: MouseEventHandler = (e: React.MouseEvent) => {
    console.log(e);
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <Button
      id="mobile-nav-toggle"
      aria-controls={ariaControls}
      aria-haspopup="true"
      aria-expanded={isExpanded}
      onClick={(e) => handleClick(e)}
    >
      <span className="sr-only">Menu</span>
      {isExpanded ? (
        <AiOutlineClose
          size={size}
          color={color}
          aria-label="Expand navigation menu"
        />
      ) : (
        <GiHamburgerMenu
          size={size}
          color={color}
          aria-label="Close navigation menu"
        />
      )}
    </Button>
  );
};

const Button = styled.button`
  border: none;
  background-color: transparent;
  display: block;
  cursor: pointer;

  @media only screen and (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;
