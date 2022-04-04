import { ThemeConsumer } from "styled-components";

export const DarkModeToggle = () => {
  return (
    <ThemeConsumer>
      {(theme) => (
        <button
          onClick={() => {
            theme.setTheme(
              theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
            );
          }}
          style={{ zIndex: 101 }}
        >
          Toggle {theme.mode === "dark" ? "light" : "dark"}
        </button>
      )}
    </ThemeConsumer>
  );
};
