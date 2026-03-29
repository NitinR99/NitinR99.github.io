import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import volunteerSectionData from "data/home/volunteerSectionData";
import getParentBorderSxProps from "utils/getParentBorderSxProps";
import VolunteerCard from "./VolunteerCard";

const data = volunteerSectionData;

export default function VolunteeringSection() {
  const parentSxProps = getParentBorderSxProps("50vh");
  return (
    <Box component={"section"} sx={parentSxProps} id="volunteering">
      <Stack paddingTop={4} gap={4}>
        <Typography variant="h2">Volunteering</Typography>
        {data.map((entry, index) => (
          <VolunteerCard key={index} data={entry} />
        ))}
      </Stack>
    </Box>
  );
}
