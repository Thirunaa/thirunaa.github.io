import React from "react";
import { useStyles } from "../styles/CustomTimelineStyles";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineDot from "@material-ui/lab/TimelineDot";

function CustomTimelineSeparator() {
  const classes = useStyles();
  return (
    <TimelineSeparator className={classes.separator_padding}>
      <TimelineDot variant="outlined" className={classes.timeline_dot} />
      <TimelineConnector />
    </TimelineSeparator>
  );
}

export default CustomTimelineSeparator;
