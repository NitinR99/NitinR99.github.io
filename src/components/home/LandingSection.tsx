import ArticleOutlined from "@mui/icons-material/ArticleOutlined";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import landingSectionData from "data/home/landingSectionData";
import { CSSProperties } from "react";
import getParentBorderSxProps from "utils/getParentBorderSxProps";

const boldStyling: CSSProperties = { fontWeight: "bold" };
const {
  firstName,
  lastName,
  jobTitle,
  subtitle,
  topFour,
  howIThink,
  whatIDo,
  workingIn,
  myFocus,
  linkedInUrl,
} = landingSectionData;

export default function LandingSection() {
  const currentYear = new Date().getFullYear();
  const parentSxProps = getParentBorderSxProps(undefined, true);
  return (
    <Box
      id="who-am-i"
      component={"section"}
      sx={parentSxProps}
      display="flex"
      alignItems="center"
    >
      <Grid container height="100%" gap={{ xs: 16, md: 0 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={4}>
            <Typography>
              {jobTitle} / {currentYear}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Typography variant="h1">
                {firstName}{" "}
                <Box
                  component="span"
                  sx={{ color: (theme) => theme.palette.secondary.main }}
                >
                  {lastName}
                </Box>
              </Typography>
            </Stack>
            <Typography variant="body1">
              {subtitle}
              <br />
              {topFour.map((lang, index) => (
                <span key={index} style={boldStyling}>
                  {lang}
                  {index < topFour.length - 1 && ", "}
                </span>
              ))}
              .
            </Typography>
            <Typography variant="body2">
              🟢 Working full-time in {workingIn}.
            </Typography>
            <Stack direction="row" gap={2}>
              <Button
                variant="contained"
                size="small"
                startIcon={<ArticleOutlined />}
                href="/NitinRamesh_resume.pdf"
                target="blank"
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<LinkedIn />}
                href={linkedInUrl}
                target="blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} display="flex" alignItems="end">
          <Stack spacing={3}>
            <Stack gap={4}>
              <Typography variant="h2" color="secondary">
                What I do
              </Typography>
              <Typography variant="body1">
                {whatIDo.threeThings.join(" - ")}
                <br />
                {whatIDo.subtitle}
              </Typography>
            </Stack>
            <Stack gap={4}>
              <Typography variant="h2" color="secondary">
                My focus
              </Typography>
              <Box>
                {myFocus.map((focus, index) => (
                  <Chip
                    key={index}
                    label={<Typography variant="body2">{focus}</Typography>}
                    sx={{ marginBlock: 1, marginRight: 1 }}
                  />
                ))}
              </Box>
            </Stack>
            <Stack gap={4}>
              <Typography variant="h2" color="secondary">
                How I think
              </Typography>
              <List sx={{ listStyleType: "circle" }}>
                {howIThink.map((focus, index) => (
                  <ListItem
                    key={index}
                    sx={{ display: "list-item", ml: 5, pl: 0 }}
                  >
                    <Typography variant="body2">{focus}</Typography>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
