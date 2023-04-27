import React from "react";
import { useStyles } from "../styles/FooterStyles";
import { Typography } from "@material-ui/core";
import resumeData from "../utils/resumeData";

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.footer_left}>
        <Typography className={classes.footer_name}>{resumeData.data.name}</Typography>
      </div>

      <div className={classes.footer_right}>
        <Typography className={classes.footer_copyright}>
          Designed and Developed by{" "}
          <a href="https://www.linkedin.com/in/thirunaavukkarasu/" target="_blank" rel="noreferrer">
            Thirunaavukkarasu Murugesan
          </a>
          <br />
          Clone idea from{" "}
          <a href="https://www.youtube.com/@SalmanFazal01" target="_blank" rel="noreferrer">
            Salman Fazal
          </a>
          .
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
