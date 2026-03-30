import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import landingSectionData from "data/home/landingSectionData";

const { firstName, lastName, jobTitle, topFour, workingIn, openToRole } =
  landingSectionData;

export default function Footer() {
  const fullName = `${firstName} ${lastName}`;
  const topFourJoined = topFour.join(" • ");
  return (
    <Box component="footer" sx={{ pb: 4 }}>
      <Container maxWidth="lg">
        <Stack gap={8}>
          <Divider />
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                {fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`${jobTitle} • ${topFourJoined}`}
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} {fullName}. All rights reserved.
            </Typography>

            <Typography variant="caption" color="text.secondary">
              Based in {workingIn} • Open to {openToRole} opportunities
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
