import { Box, Button, Stack, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

export type Section = {
  id: string;
  label: string;
};

type Props = {
  sections: Section[];
};

export default function SectionNavigator({ sections }: Props) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let closestSection: string | null = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });

      setActive(closestSection);
    };

    // Run once initially
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <Box
      position="fixed"
      left={8}
      top="50%"
      sx={{
        transform: "translateY(-50%)",
        borderRadius: (theme) => theme.shape.borderRadius,
        backgroundColor: (theme) => theme.palette.divider,
        padding: 2,
        display: { xs: "none", md: "block" },
      }}
    >
      <Stack spacing={2}>
        {sections.map((section) => {
          const isActive = active === section.id;

          return (
            <Tooltip key={section.id} title={section.label} placement="right">
              <Button
                component="a"
                href={`#${section.id}`}
                sx={{
                  minWidth: 1,
                  padding: 1,
                  height: 36,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: isActive ? "primary.main" : "grey.400",
                  transform: isActive ? "scale(1)" : "scale(0.6)",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              />
            </Tooltip>
          );
        })}
      </Stack>
    </Box>
  );
}
