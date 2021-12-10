import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'
import classes from './MenuToggle.module.css';

interface MenuToggleProps {
  ariaControls: string;
  size?: string,
  color?: string
}

const MenuToggle = ({ ariaControls, size = "2rem", color = 'white' }: MenuToggleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = (e: Event) => {
    console.log(e);
    setIsExpanded((prevState) => !prevState)
  }
  return (
    <button
      id="mobile-nav-toggle"
      className={classes.button}
      aria-controls={ariaControls}
      aria-haspopup="true"
      onClick={(e) => handleClick(e)}
    >
      <span className="sr-only">Menu</span>
      {isExpanded ?
        <AiOutlineClose size={size} color={color} aria-label="Expand navigation menu" /> :
        <GiHamburgerMenu size={size} color={color} aria-label="Close navigation menu" />
      }
    </button >
  )
}

export default MenuToggle;
