import School from "@mui/icons-material/School";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import abstractLiquidTwo from "assets/images/abstract-liquid-2.jpg";
import educationSectionData from "data/home/educationSectionData";
import getParentBorderSxProps from "utils/getParentBorderSxProps";
import EducationCard from "./EducationCard";
const data = educationSectionData;

export default function EducationSection() {
  const parentSxProps = getParentBorderSxProps("50vh");
  return (
    <Box component={"section"} sx={parentSxProps} id="academics">
      <Stack paddingTop={4} gap={4}>
        <Typography variant="h2">Academics</Typography>
        <Grid container alignItems="center" gap={{ xs: 4, md: 0 }}>
          <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
            <Box
              position="relative"
              display="inline-block"
              sx={{ pointerEvents: "none", userSelect: "none" }}
            >
              <Box
                component="img"
                src={abstractLiquidTwo}
                alt="Banner for academics"
                height={400}
                width={400}
                marginBlock={5}
                sx={{
                  borderRadius: (theme) => theme.shape.borderRadius,
                  maxWidth: "100%",
                }}
              />

              <School
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: 80,
                  color: (theme) => theme.palette.common.white,
                  opacity: 0.9,
                }}
              />
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            display="flex"
            justifyContent="center"
            flexDirection="column"
            gap={4}
            mt={{ xs: 2, md: 0 }}
          >
            {data.map((entry, index) => (
              <EducationCard key={index} data={entry} />
            ))}
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
