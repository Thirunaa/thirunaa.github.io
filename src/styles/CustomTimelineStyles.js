import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  timeline: {
    padding: "6 !important",
    "& .MuiTimelineItem-root": {
      minHeight: "0px",
    },
    "& .MuiTimelineItem-missingOppositeContent:before": {
      display: "none",
    },
    "& .MuiTimelineConnector-root": {
      backgroundColor: "#eee !important",
    },
  },
  timeline_header: {
    paddingTop: "7px",
  },
  timeline_first_item: {
    minHeight: "80px !important",
  },
  timeline_dot_header: {
    color: "black",
    backgroundColor: "var(--main-color) !important",
    fontSize: "small !important",
    padding: "10px !important",

    "&> .MuiSvgIcon-root": {
      fontSize: "20px",
      color: "darkslategray",
    },
  },

  timeline_dot: {
    color: "black !important",
    borderColor: "var(--main-color) !important",
    padding: "2px !important",
  },

  separator_padding: {
    paddingLeft: "18px !important",
  },
});

export { useStyles };
