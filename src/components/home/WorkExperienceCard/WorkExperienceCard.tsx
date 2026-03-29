import ExpandLessOutlined from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import workExperienceData from "data/home/workExperienceData";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

/**
 * Properties of {@link WorkExperienceCard} component
 */
export interface WorkExperienceCardProps {
  /**
   * The experience data to be displayed.
   */
  data: (typeof workExperienceData)[number];
  /**
   * Flag to indicate if the details should be shown.
   */
  showDetails?: boolean;
}

export default function WorkExperienceCard({
  data,
  showDetails = false,
}: WorkExperienceCardProps) {
  const [displayDetails, setDisplayDetails] = useState(showDetails);
  return (
    <Box>
      <CardHeader
        title={
          <Stack direction="row" gap={2} alignItems="center">
            <Typography variant="h5">{data.jobTitle}</Typography>
            {data.isInternship == true && (
              <Chip
                size="small"
                variant="outlined"
                label={<Typography variant="body2">Internship</Typography>}
              />
            )}
            {data.isContract == true && (
              <Chip
                size="small"
                variant="outlined"
                label={
                  <Typography variant="body2">Contract Part-Time</Typography>
                }
              />
            )}
          </Stack>
        }
        avatar={
          <Avatar
            src={data.companyLogoUrl}
            alt={`Logo of ${data.company}`}
            variant="rounded"
          />
        }
        subheader={
          <>
            <Typography variant="h6">
              <Typography
                component="a"
                href={data.companyWebsiteUrl}
                target="blank"
              >
                {data.company}
              </Typography>
            </Typography>
            <Typography variant="body2">{`${data.fromDate} - ${data.toDate}`}</Typography>
            <Typography variant="body2">{data.location}</Typography>
          </>
        }
        action={
          <Box height="100%" alignItems="center" display="flex">
            <Tooltip
              placement="right"
              title={displayDetails ? "Show less" : "Show more"}
            >
              <IconButton
                onClick={() => setDisplayDetails(!displayDetails)}
                aria-label={displayDetails ? "Show less" : "Show more"}
              >
                {displayDetails ? (
                  <ExpandLessOutlined />
                ) : (
                  <ExpandMoreOutlined />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        }
      />
      <Collapse in={displayDetails}>
        <CardContent>
          <ReactMarkdown children={data.responsibilities} />
        </CardContent>
      </Collapse>
    </Box>
  );
}
