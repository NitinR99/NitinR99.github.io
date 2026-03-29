import type { Palette, TypographyVariantsOptions } from "@mui/material/styles";

const DEFAULT_SIZE = 14;

const TYPOGRAPHY_THEME:
  | TypographyVariantsOptions
  | ((palette: Palette) => TypographyVariantsOptions) = {
  fontFamily: "Geist Variable",
  fontSize: DEFAULT_SIZE,
  h1: { fontSize: DEFAULT_SIZE * 3.75, fontWeight: 600 },
  h2: { fontSize: DEFAULT_SIZE * 2.75, fontWeight: 600 },
  h3: { fontSize: DEFAULT_SIZE * 2, fontWeight: 600 },
  h4: { fontSize: DEFAULT_SIZE * 1.25, fontWeight: 600 },
  h5: { fontSize: DEFAULT_SIZE, fontWeight: 600 },
  h6: { fontSize: DEFAULT_SIZE * 0.75, fontWeight: 600 },

  body1: { fontSize: DEFAULT_SIZE, fontWeight: 400 },
  body2: { fontSize: DEFAULT_SIZE * 0.9, fontWeight: 400 },

  subtitle1: { fontSize: DEFAULT_SIZE * 1.1, fontWeight: 500 },
  subtitle2: { fontSize: DEFAULT_SIZE, fontWeight: 500 },

  button: {
    fontSize: DEFAULT_SIZE,
    textTransform: "none",
    fontWeight: 500,
  },

  overline: {
    fontSize: DEFAULT_SIZE * 0.8,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontWeight: 500,
  },

  caption: {
    fontSize: DEFAULT_SIZE * 0.85,
    fontWeight: 400,
  },
};

export default TYPOGRAPHY_THEME;
