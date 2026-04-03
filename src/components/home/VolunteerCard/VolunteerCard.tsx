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
import volunteerSectionData from "data/home/volunteerSectionData";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

/**
 * Properties of {@link VolunteerCard} component
 */
export interface VolunteerCardProps {
  /**
   * The education data entry.
   */
  data: (typeof volunteerSectionData)[number];
}

export default function VolunteerCard({ data }: VolunteerCardProps) {
  const [displayDetails, setDisplayDetails] = useState(false);
  return (
    <Box>
      <CardHeader
        avatar={
          <Avatar
            src={data.organizationLogoUrl}
            alt={`Logo of ${data.organization}`}
            variant="rounded"
          />
        }
        title={<Typography variant="h5">{data.title}</Typography>}
        subheader={
          <Stack>
            <Typography variant="h6">
              <Typography
                component="a"
                href={data.organizationWebsiteUrl}
                target="blank"
                sx={{ textDecoration: "none" }}
                color="text.secondary"
              >
                {data.organization}
              </Typography>
            </Typography>
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
