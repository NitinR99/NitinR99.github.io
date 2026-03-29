import { SxProps, Theme } from "@mui/material/styles";
import { Property } from "csstype";

export default function getParentBorderSxProps(
  minHeight?: Property.MinHeight,
): SxProps<Theme> {
  return {
    minHeight: minHeight ?? "100vh",
    paddingInline: 4,
    borderInline: (theme) => `1px dashed ${theme.palette.divider}`,
    paddingBlock: 4,
  };
}
