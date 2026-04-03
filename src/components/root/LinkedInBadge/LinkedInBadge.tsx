import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
import landingSectionData from "data/home/landingSectionData";

const { linkedInUrl } = landingSectionData;

export default function LinkedInBadge() {
  const { mode, systemMode } = useColorScheme();
  const showDarkMode = mode === "dark" || systemMode === "dark";
  return (
    <>
      <Box
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="nitin-r"
        data-version="v1"
        sx={{ display: showDarkMode ? "block" : "none" }}
      >
        <a
          className="badge-base__link LI-simple-link"
          href={`${linkedInUrl}?trk=profile-badge`}
        />
      </Box>

      <Box
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="nitin-r"
        data-version="v1"
        sx={{ display: showDarkMode ? "none" : "block" }}
      >
        <a
          className="badge-base__link LI-simple-link"
          href={`${linkedInUrl}?trk=profile-badge`}
        />
      </Box>
    </>
  );
}
