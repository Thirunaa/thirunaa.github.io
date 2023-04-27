import React from "react";
import { useStyles } from "../styles/CustomTimelineStyles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Typography } from "@material-ui/core";

function CustomTimeline({ title, icon, children }) {
  const classes = useStyles();

  return (
    <Timeline className={classes.timeline}>
      {/* First item */}
      <TimelineItem className={classes.timeline_first_item}>
        <TimelineSeparator>
          <TimelineDot className={classes.timeline_dot_header}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={classes.timeline_header}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
}

export default CustomTimeline;
