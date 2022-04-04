import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global.styled";
import { ThemeProvider } from "styled-components";
import useDarkMode from "../hooks/useDarkMode";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useDarkMode();
  return (
    <>
      <ThemeProvider theme={{ ...theme, setTheme }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
