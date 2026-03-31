import { SxProps, Theme } from "@mui/material/styles";
import { Property } from "csstype";

export default function getParentBorderSxProps(
  minHeight?: Property.MinHeight,
  noBorder?: boolean,
): SxProps<Theme> {
  return {
    minHeight: minHeight ?? "100vh",
    paddingInline: 4,
    borderInline:
      noBorder == true
        ? undefined
        : (theme) => `1px dashed ${theme.palette.divider}`,
    paddingBlock: 4,
  };
}
