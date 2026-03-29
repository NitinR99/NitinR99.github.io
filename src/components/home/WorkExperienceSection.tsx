import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import workExperienceData from "data/home/workExperienceData";
import getParentBorderSxProps from "utils/getParentBorderSxProps";
import WorkExperienceCard from "./WorkExperienceCard";

const workData = workExperienceData;
export default function WorkExperienceSection() {
  const parentSxProps = getParentBorderSxProps();

  return (
    <Box component={"section"} sx={parentSxProps} id="work-experience">
      <Stack paddingTop={4} gap={4}>
        <Typography variant="h2">Work experience</Typography>
        <Stack gap={4}>
          {workData.map((data, index) => (
            <WorkExperienceCard
              key={index}
              data={data}
              showDetails={index === 0}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
