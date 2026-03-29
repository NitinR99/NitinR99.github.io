import ExpandLessOutlined from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import educationSectionData from "data/home/educationSectionData";
import { useState } from "react"; // Import markdown files
import ReactMarkdown from "react-markdown";

/**
 * Properties of {@link EducationCard} component
 */
export interface EducationCardProps {
  /**
   * The education data entry.
   */
  data: (typeof educationSectionData)[number];
}

export default function EducationCard({ data }: EducationCardProps) {
  const [displayDetails, setDisplayDetails] = useState(false);
  return (
    <Box>
      <CardHeader
        avatar={
          <Avatar
            src={data.institutionLogoUrl}
            alt={`Logo of ${data.institution}`}
            variant="rounded"
          />
        }
        title={<Typography variant="h5">{data.degreeTitle}</Typography>}
        subheader={
          <Stack>
            <Typography variant="h6">
              <Typography
                component="a"
                href={data.institutionUrl}
                target="blank"
              >
                {data.institution}
              </Typography>
            </Typography>
            <Typography variant="caption">{data.institutionCountry}</Typography>
          </Stack>
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
          <ReactMarkdown children={data.details} />
        </CardContent>
      </Collapse>
    </Box>
  );
}
