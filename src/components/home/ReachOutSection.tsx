import LinkedIn from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import landingSectionData from "data/home/landingSectionData";
import getParentBorderSxProps from "utils/getParentBorderSxProps";
const { linkedInUrl } = landingSectionData;
export default function ReachOutSection() {
  const parentSxProps = getParentBorderSxProps("50vh");
  return (
    <Box component={"section"} sx={parentSxProps} id="lets-connect">
      <Stack paddingTop={4} gap={4}>
        <Typography variant="h2">Let's Connect</Typography>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography>
              If you'd like to know more or discuss challenging engineering
              projects, feel free to reach out. I'm always open to exploring
              impactful opportunities.
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            justifyContent="center"
            mt={{ xs: 2, md: 0 }}
          >
            <Button
              size="medium"
              variant="contained"
              startIcon={<LinkedIn />}
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
