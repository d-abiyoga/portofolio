import { FC, HTMLAttributes, MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  handleClick?: MouseEventHandler;
  variant: "primary" | "secondary";
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

  padding: 0.5rem 1rem;

  border: ${(props) =>
    props.variant == "primary" ? "none" : "1px solid teal"};
  background-color: ${(props) =>
    props.variant == "primary" ? "teal" : "transparent"};
  color: ${(props) => (props.variant == "primary" ? "white" : "teal")};
`;
