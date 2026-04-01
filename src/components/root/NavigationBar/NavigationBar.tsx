import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { alpha, useColorScheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import logoDark from "assets/favicon-dark.png";
import logoLight from "assets/favicon-light.png";
import ThemeToggle from "../ThemeToggle";

import { useEffect, useState } from "react";

export default function NavigationBar() {
  const { mode, systemMode } = useColorScheme();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const start = window.innerHeight * 0.2; // start fading in (30vh)
      const end = window.innerHeight * 0.5; // fully visible (60vh)
      const scrollY = window.scrollY;

      let value = (scrollY - start) / (end - start);
      value = Math.min(Math.max(value, 0), 1); // clamp 0–1

      setOpacity(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 50,
          backgroundColor: (theme) => theme.palette.background.default,
          zIndex: (theme) => theme.zIndex.appBar - 1, // 👈 behind navbar
        }}
      />
      <Paper
        variant="outlined"
        sx={{
          width: {
            xs: "95%",
            sm: "90%",
            md: "90%",
            lg: "85%",
          },
          height: 50,
          position: "fixed",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: (theme) => theme.zIndex.appBar,
          borderRadius: 100,
          px: 2,
          display: "flex",
          alignItems: "center",
          backgroundColor: (theme) =>
            alpha(theme.palette.background.paper, opacity),
          backdropFilter: opacity > 0 ? "blur(10px)" : "none",
          borderColor: (theme) => alpha(theme.palette.divider, opacity),

          transition:
            "background-color 0.2s linear, border-color 0.2s linear, backdrop-filter 0.2s linear",
        }}
      >
        <Box
          component="img"
          src={mode === "dark" || systemMode === "dark" ? logoDark : logoLight}
          alt="Branding of website"
          width={40}
          sx={{ pointerEvents: "none", userSelect: "none", opacity: opacity }}
        />

        <Typography
          paddingInline={2}
          variant="button"
          sx={{
            opacity: opacity,
            transition: "opacity 0.1s linear", // keeps it smooth
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          Nitin Ramesh
        </Typography>

        <Box sx={{ ml: "auto" }}>
          <ThemeToggle />
        </Box>
      </Paper>
    </>
  );
}
