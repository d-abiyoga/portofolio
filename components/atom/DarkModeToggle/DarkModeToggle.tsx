import { ButtonHTMLAttributes, FC } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import styled, { ThemeConsumer } from "styled-components";
import colors from "../../../styles/colors";

export const DarkModeToggle: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          aria-label={
            theme.mode === "dark" ? "Activate Light Mode" : "Activate Dark Mode"
          }
          onClick={() => {
            theme.setTheme(
              theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
            );
          }}
          style={{ zIndex: 101 }}
          {...props}
        >
          {theme.mode === "dark" ? (
            <BsFillSunFill size={23} color={colors.light.main} />
          ) : (
            <BsFillMoonStarsFill size={23} />
          )}
        </Button>
      )}
    </ThemeConsumer>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0.5rem 0;
`;
