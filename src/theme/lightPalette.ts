import type { PaletteOptions } from "@mui/material/styles";

// https://ui.shadcn.com/colors

const COLOR_PRIMARY_LIGHT_LIGHT = "#262626";
const COLOR_PRIMARY_MAIN_LIGHT = "#171717";
const COLOR_PRIMARY_DARK = "#0a0a0a";

const COLOR_SECONDARY_LIGHT_LIGHT = "#a3a3a3";
const COLOR_SECONDARY_MAIN_LIGHT = "#737373";
const COLOR_SECONDARY_DARK_LIGHT = "#525252";

const COLOR_SUCCESS_LIGHT_LIGHT = "#4ade80";
const COLOR_SUCCESS_MAIN_LIGHT = "#22c55e";
const COLOR_SUCCESS_DARK_LIGHT = "#16a34a";

const COLOR_WARNING_LIGHT_LIGHT = "#fbbf24";
const COLOR_WARNING_MAIN_LIGHT = "#f59e0b";
const COLOR_WARNING_DARK_LIGHT = "#d97706";

const COLOR_ERROR_LIGHT_LIGHT = "#ef4444";
const COLOR_ERROR_MAIN_LIGHT = "#ef4444";
const COLOR_ERROR_DARK_LIGHT = "#dc2626";

const COLOR_INFO_LIGHT_LIGHT = "#22d3ee";
const COLOR_INFO_MAIN_LIGHT = "#06b6d4";
const COLOR_INFO_DARK_LIGHT = "#0891b2";

const COLOR_BACKGROUND = "#fafafa";
const COLOR_PAPER = "#f5f5f5";

const COLOR_DIVIDER = "#e4e4e4";

const LIGHT_PALLETE: PaletteOptions = {
  mode: "light",
  primary: {
    light: COLOR_PRIMARY_LIGHT_LIGHT,
    main: COLOR_PRIMARY_MAIN_LIGHT,
    dark: COLOR_PRIMARY_DARK,
  },
  secondary: {
    light: COLOR_SECONDARY_LIGHT_LIGHT,
    main: COLOR_SECONDARY_MAIN_LIGHT,
    dark: COLOR_SECONDARY_DARK_LIGHT,
  },
  success: {
    light: COLOR_SUCCESS_LIGHT_LIGHT,
    main: COLOR_SUCCESS_MAIN_LIGHT,
    dark: COLOR_SUCCESS_DARK_LIGHT,
  },
  warning: {
    light: COLOR_WARNING_LIGHT_LIGHT,
    main: COLOR_WARNING_MAIN_LIGHT,
    dark: COLOR_WARNING_DARK_LIGHT,
  },
  error: {
    light: COLOR_ERROR_LIGHT_LIGHT,
    main: COLOR_ERROR_MAIN_LIGHT,
    dark: COLOR_ERROR_DARK_LIGHT,
  },
  info: {
    light: COLOR_INFO_LIGHT_LIGHT,
    main: COLOR_INFO_MAIN_LIGHT,
    dark: COLOR_INFO_DARK_LIGHT,
  },
  background: {
    default: COLOR_BACKGROUND,
    paper: COLOR_PAPER,
  },
  divider: COLOR_DIVIDER,
};

export default LIGHT_PALLETE;
