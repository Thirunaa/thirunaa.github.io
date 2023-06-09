import React from "react";
import { Typography } from "@material-ui/core";
import { TimelineContent, TimelineItem } from "@material-ui/lab";
import { useStyles } from "../styles/ProfileStyles.js";
import CustomTimelineSeparator from "./CustomTimelineSeparator.js";

function CustomTimelineItem({ title, text, link }) {
  const classes = useStyles();
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className={classes.timeline_content}>
        {link ? (
          <Typography className={classes.timeline_text}>
            <strong className={classes.timeline_title_strong}>{title}:</strong>{" "}
            <a textDecoration="none" className={classes.timeline_text_a} href={link} target="_blank" rel="noreferrer">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className={classes.timeline_text}>
            <strong className={classes.timeline_title_strong}>{title}:</strong>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}

export default CustomTimelineItem;
