import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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
        {data.map((entry, index) => (
          <EducationCard key={index} data={entry} />
        ))}
      </Stack>
    </Box>
  );
}
