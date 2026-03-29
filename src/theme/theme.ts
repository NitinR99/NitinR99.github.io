import { createTheme } from "@mui/material/styles";
import COMPONENT_THEME from "./componentsTheme";
import DARK_PALETTE from "./darkPalette";
import faviconHelper from "./faviconHelper";
import generateBoxShadows from "./generateBoxShadows";
import LIGHT_PALLETE from "./lightPalette";
import TYPOGRAPHY_THEME from "./typographyTheme";

const BORDER_RADIUS = "calc(0.625rem - 2px);";
const COLOR_PAPER_SHADOW =
  "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)";

// set favicons
faviconHelper();

const theme = createTheme({
  colorSchemes: {
    light: { palette: LIGHT_PALLETE },
    dark: { palette: DARK_PALETTE },
  },
  typography: TYPOGRAPHY_THEME,
  shadows: generateBoxShadows(COLOR_PAPER_SHADOW),
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  spacing: 4,
  components: COMPONENT_THEME,
});

export default theme;
