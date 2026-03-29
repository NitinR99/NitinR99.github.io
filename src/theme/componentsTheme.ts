import { avatarClasses } from "@mui/material/Avatar";
import Collapse from "@mui/material/Collapse";
import { formHelperTextClasses } from "@mui/material/FormHelperText";
import { formLabelClasses } from "@mui/material/FormLabel";
import Slide from "@mui/material/Slide";
import type { Components, CssVarsTheme, Theme } from "@mui/material/styles";
import { lighten } from "@mui/material/styles";

const COMPONENT_THEME: Components<
  Omit<Theme, "palette" | "components"> & CssVarsTheme
> = {
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      "*": {
        scrollbarColor: `${theme.palette.secondary.main} transparent`,
        scrollbarWidth: "thin",
      },
      "& :disabled, &.Mui-disabled": {
        pointerEvents: "unset !important",
        cursor: "not-allowed !important",
      },
      "::selection": {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
      },
      a: {
        color: theme.palette.text.primary,
      },
    }),
  },
  MuiChip: {
    defaultProps: {
      size: "small",
    },
  },
  MuiButtonBase: {
    defaultProps: { disableRipple: true, disableTouchRipple: true },
  },
  MuiButtonGroup: {
    styleOverrides: {
      grouped: {
        flexGrow: 1,
        marginInline: 0.5,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: { backgroundImage: "none" },
    },
  },
  MuiInputBase: {
    defaultProps: {
      size: "small",
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      asterisk: { display: "none" },
    },
  },
  MuiTextField: {
    defaultProps: {
      size: "small",
    },
    styleOverrides: {
      root: {
        [`& .${formLabelClasses.root}`]: {
          all: "unset",
          pointerEvents: "none",
          userSelect: "none",
          fontWeight: "bold",
          marginBottom: 2,
        },
        [`& .${formHelperTextClasses.root}`]: {
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
        },
      },
    },
  },
  MuiOutlinedInput: {
    defaultProps: {
      notched: false,
    },
  },
  MuiSwitch: {
    styleOverrides: {
      thumb: ({ theme }) => ({
        boxShadow: theme.shadows[1],
        backgroundColor: theme.palette.background.paper,
        width: theme.spacing(3),
        height: theme.spacing(3),
      }),
      track: ({ theme }) => ({
        boxShadow: theme.shadows[1],
      }),
      switchBase: {
        top: 4,
        left: 4,
        "&.Mui-checked + .MuiSwitch-track": {
          opacity: 1,
        },
      },
    },
  },

  MuiToolbar: {
    styleOverrides: {
      root: {
        "@media (min-width: 600px)": {
          minHeight: "3.5rem",
        },
        "@media (min-width: 0px)": {
          minHeight: "3.0rem",
        },
        "& .MuiList-root": {
          paddingInline: "5%",
        },
      },
    },
  },

  MuiListItemButton: {
    defaultProps: { disableGutters: true },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        paddingBlock: 4,
        margin: 6,
        "&.Mui-selected": {
          backgroundColor: theme.palette.action.selected,
          "&:hover": {
            backgroundColor: theme.palette.action.selected, // keep same on hover
          },
        },
      }),
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        justifyContent: "start !important",
        minWidth: 0,
        paddingInline: theme.spacing(2),
        paddingRight: theme.spacing(2),
      }),
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        borderRadius: 4,
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: { paddingTop: 2, paddingBottom: 2 },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: { marginInline: 4 },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }) => ({
        margin: 4,
        borderRadius: theme.shape.borderRadius,
        alignItems: "start",
        paddingLeft: theme.spacing(),
        paddingRight: 0,
        minHeight: 0,
      }),
    },
  },
  MuiTooltip: {
    defaultProps: {
      arrow: true,
    },
    styleOverrides: {
      tooltip: ({ theme }) => ({
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.background.default,
      }),
      arrow: ({ theme }) => ({
        color: theme.palette.primary.light,
      }),
    },
  },
  MuiAlert: {
    defaultProps: {
      variant: "standard",
    },
    styleOverrides: {
      standard: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
      }),
      outlined: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
      }),
    },
  },
  MuiSnackbar: {
    defaultProps: {
      anchorOrigin: { vertical: "top", horizontal: "center" },
      slots: {
        transition: Slide,
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      valueLabel: ({ theme }) => ({
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.background.default,
      }),
      thumb: ({ theme }) => ({
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "inherit",
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.text.primary
            : theme.palette.background.default,
        width: theme.spacing(4),
        height: theme.spacing(4),
      }),
    },
  },
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        boxShadow: "none",
        backgroundColor: theme.palette.background.default,
        ":before": {
          display: "none",
        },
        ":not(:first-of-type)": {
          borderTopWidth: 1,
          borderTopStyle: "solid",
          borderTopColor: theme.palette.divider,
        },
      }),
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(4),
      }),
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: theme.spacing(4),
        justifyContent: "end",
      }),
    },
  },
  MuiPagination: {
    defaultProps: {
      shape: "rounded",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        "& .Mui-selected": {
          backgroundColor: "transparent !important",
          outline: `1px solid ${theme.palette.primary.main}`,
          boxShadow: theme.shadows[1],
        },
      }),
    },
  },
  MuiSelect: {
    defaultProps: {
      MenuProps: {
        slots: { transition: Collapse },
      },
    },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: 40,
      },
      list: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        padding: 6,
        display: "flex",
        width: "fit-content",
      }),
      scroller: { width: "unset", flex: "unset", WebkitFlex: "unset" },
      indicator: {
        display: "none",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: "unset",
        color: "inherit",
        "&.MuiButtonBase-root": { padding: 7 },
        "&.Mui-selected": {
          backgroundColor: lighten(theme.palette.background.default, 0.25),
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
        },
      }),
    },
  },
  MuiAvatarGroup: {
    defaultProps: {
      spacing: "small",
    },
    styleOverrides: {
      root: ({ ownerState: { max } }) => ({
        justifyContent: "start",
        ...[...Array(max)].reduce(
          (result, _, index) => ({
            ...result,
            [`& > .${avatarClasses.root}:nth-child(${index + 1})`]: {
              zIndex: (max ?? 5) - index,
            },
          }),
          {},
        ),
      }),
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.main,
        width: theme.spacing(8),
        height: theme.spacing(8),
      }),
    },
  },
  MuiBadge: {
    defaultProps: {
      max: 99,
      color: "primary",
    },
    styleOverrides: {
      badge: ({ theme }) => ({
        minWidth: theme.spacing(4),
        height: theme.spacing(4),
        paddingInline: theme.spacing(),
        borderRadius: theme.shape.borderRadius,
      }),
    },
  },
};

export default COMPONENT_THEME;
