import { FC, HTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleClick?: MouseEventHandler;
  variant: "primary" | "secondary";
  withIcon?: boolean;
}

export const Button: FC<ButtonProps> = ({ handleClick, variant, ...props }) => {
  return (
    <StyledButton onClick={handleClick} variant={variant}>
      {props.children}
    </StyledButton>
  );
};

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  padding-inline: 1rem;
  box-sizing: border-box;
  width: fit-content;

  padding: 0.5rem 1rem;

  border: ${(props) =>
    props.variant == "primary" ? "none" : "1px solid teal"};
  background-color: ${(props) =>
    props.variant == "primary" ? "teal" : "transparent"};
  color: ${(props) => (props.variant == "primary" ? "white" : "teal")};

  &:hover,
  &:focus {
    transform: translateY(-8%);
    background-color: ${(props) =>
      props.variant == "primary" ? colors.primary.main : "transparent"};
    color: ${(props) => props.variant == "secondary" && colors.primary.main};
  }
  transition: 250ms ease-in-out;

  /* withIcon == true */
  display: ${({ withIcon }) => withIcon && "flex"};
  align-items: ${({ withIcon }) => withIcon && "center"};
  gap: ${({ withIcon }) => withIcon && "0.5rem"};
`;
