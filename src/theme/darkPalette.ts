import { darken, type PaletteOptions } from "@mui/material/styles";

// https://ui.shadcn.com/colors

const COLOR_PRIMARY_LIGHT_DARK = "#ffffff";
const COLOR_PRIMARY_MAIN_DARK = "#f5f5f5";
const COLOR_PRIMARY_DARK_DARK = "#e5e5e5";

const COLOR_SECONDARY_LIGHT_DARK = "#d4d4d4";
const COLOR_SECONDARY_MAIN_DARK = "#a3a3a3";
const COLOR_SECONDARY_DARK_DARK = "#737373";

const COLOR_SUCCESS_LIGHT_DARK = "#15803d";
const COLOR_SUCCESS_MAIN_DARK = "#166534";
const COLOR_SUCCESS_DARK_DARK = "#14532d";

const COLOR_WARNING_LIGHT_DARK = "#f59e0b";
const COLOR_WARNING_MAIN_DARK = "#d97706";
const COLOR_WARNING_DARK_DARK = "#b45309";

const COLOR_ERROR_LIGHT_DARK = "#b91c1c";
const COLOR_ERROR_MAIN_DARK = "#991b1b";
const COLOR_ERROR_DARK_DARK = "#7f1d1d";

const COLOR_INFO_LIGHT_DARK = "#0891b2";
const COLOR_INFO_MAIN_DARK = "#0e7490";
const COLOR_INFO_DARK_DARK = "#155e75";

// Dark backgrounds
const COLOR_BACKGROUND_DARK = "#0a0a0a";
const COLOR_PAPER_DARK = "#171717";

// Light text / accents
const COLOR_TEXT_PRIMARY = "#fafafa";
const COLOR_TEXT_SECONDARY = "#d4d4d4";

const COLOR_DIVIDER = darken("#ffffff", 0.8);

const DARK_PALETTE: PaletteOptions = {
  mode: "dark",
  background: {
    default: COLOR_BACKGROUND_DARK,
    paper: COLOR_PAPER_DARK,
  },
  primary: {
    light: COLOR_PRIMARY_LIGHT_DARK,
    main: COLOR_PRIMARY_MAIN_DARK,
    dark: COLOR_PRIMARY_DARK_DARK,
    contrastText: COLOR_BACKGROUND_DARK,
  },
  secondary: {
    light: COLOR_SECONDARY_LIGHT_DARK,
    main: COLOR_SECONDARY_MAIN_DARK,
    dark: COLOR_SECONDARY_DARK_DARK,
    contrastText: COLOR_BACKGROUND_DARK,
  },
  success: {
    light: COLOR_SUCCESS_LIGHT_DARK,
    main: COLOR_SUCCESS_MAIN_DARK,
    dark: COLOR_SUCCESS_DARK_DARK,
  },
  warning: {
    light: COLOR_WARNING_LIGHT_DARK,
    main: COLOR_WARNING_MAIN_DARK,
    dark: COLOR_WARNING_DARK_DARK,
  },
  error: {
    light: COLOR_ERROR_LIGHT_DARK,
    main: COLOR_ERROR_MAIN_DARK,
    dark: COLOR_ERROR_DARK_DARK,
  },
  info: {
    light: COLOR_INFO_LIGHT_DARK,
    main: COLOR_INFO_MAIN_DARK,
    dark: COLOR_INFO_DARK_DARK,
  },
  text: {
    primary: COLOR_TEXT_PRIMARY,
    secondary: COLOR_TEXT_SECONDARY,
  },
  divider: COLOR_DIVIDER,
};

export default DARK_PALETTE;
