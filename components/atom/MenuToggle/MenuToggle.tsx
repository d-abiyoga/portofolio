import { MouseEventHandler, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./MenuToggle.module.scss";

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
    <button
      id="mobile-nav-toggle"
      className={styles.button}
      aria-controls={ariaControls}
      aria-haspopup="true"
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
    </button>
  );
};
