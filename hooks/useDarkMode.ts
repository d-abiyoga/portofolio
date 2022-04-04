import { useState, useEffect } from "react";

interface theme {
  mode: "light" | "dark";
}

const useDarkMode = (defaultMode: theme = { mode: "light" }) => {
  const [mode, _setMode] = useState();

  useEffect(() => {
    function getInitialMode() {
      const persistedModePreference = window.localStorage.getItem("mode");
      if (persistedModePreference) return JSON.parse(persistedModePreference);

      const userPreferDark: boolean = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (userPreferDark) return { mode: "dark" };

      return defaultMode;
    }
    _setMode(getInitialMode());
  }, []);

  useEffect(() => {
    window.localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  return [mode, _setMode];
};

export default useDarkMode;
