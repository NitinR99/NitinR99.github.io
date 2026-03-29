import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

/**
 * Component which toggles the UI theme.
 */
export default function ThemeToggle() {
  const { mode, setMode, systemMode } = useColorScheme();
  return (
    <Tooltip
      placement="bottom-start"
      title={
        mode === "dark" || systemMode === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      <IconButton
        onClick={() =>
          setMode(mode === "dark" || systemMode === "dark" ? "light" : "dark")
        }
      >
        {mode === "dark" || systemMode === "dark" ? (
          <LightModeOutlined />
        ) : (
          <DarkModeOutlined />
        )}
      </IconButton>
    </Tooltip>
  );
}
