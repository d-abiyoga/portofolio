import theme from "styled-theming";
import colors from "./colors";

export const backgroundColor = theme("mode", {
  light: colors.light.main,
  dark: colors.dark.main,
});

export const textColor = theme("mode", {
  light: colors.dark.main,
  dark: colors.light.main,
});

export const contactSectionBackgroundColor = theme("mode", {
  light: colors.light.darker,
  dark: colors.dark.lighter,
});

export const inactiveColor = theme("mode", {
  light: colors.grey.darkest,
  dark: colors.grey.darker,
});

export const hoverColor = theme("mode", {
  light: colors.dark.lighter,
  dark: colors.white.main,
});

export const buttonColor = theme("mode", {
  light: colors.dark.lighter,
  dark: colors.white.main,
});

export const cardBgColor = theme("mode", {
  light: colors.dark.lighter,
  dark: colors.white.main,
});

export const cardOverlayBgColor = theme("mode", {
  light: colors.light.ligher,
  dark: colors.dark.main,
});

export const RoleInfoColor = theme("mode", {
  light: colors.primary.main,
  dark: colors.primary.lighter,
});
