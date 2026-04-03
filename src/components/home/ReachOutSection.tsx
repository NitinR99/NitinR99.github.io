import ConnectWithoutContact from "@mui/icons-material/ConnectWithoutContact";
import Email from "@mui/icons-material/Email";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import abstractLiquidOne from "assets/images/abstract-liquid-1.jpg";
import landingSectionData from "data/home/landingSectionData";
import getParentBorderSxProps from "utils/getParentBorderSxProps";
const { linkedInUrl, email } = landingSectionData;
export default function ReachOutSection() {
  const parentSxProps = getParentBorderSxProps("50vh");
  return (
    <Box component={"section"} sx={parentSxProps} id="lets-connect">
      <Stack paddingTop={4} gap={4}>
        <Typography variant="h2">Let's Connect</Typography>
        <Grid container alignItems="center" gap={{ xs: 4, md: 0 }}>
          <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
            <Box
              position="relative"
              display="inline-block"
              sx={{ pointerEvents: "none", userSelect: "none" }}
            >
              <Box
                component="img"
                src={abstractLiquidOne}
                alt="Bannner for let's connect"
                height={400}
                width={400}
                marginBlock={5}
                sx={{
                  borderRadius: (theme) => theme.shape.borderRadius,
                  maxWidth: "100%",
                }}
              />

              <ConnectWithoutContact
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
            <Typography>
              If you'd like to know more or discuss challenging engineering
              projects, feel free to reach out. I'm always open to exploring
              impactful opportunities.
            </Typography>
            <Stack direction="row" gap={4}>
              <Button
                variant="contained"
                size="small"
                startIcon={<LinkedIn />}
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                Connect on LinkedIn
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<Email />}
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
              >
                Reach out via Email
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
