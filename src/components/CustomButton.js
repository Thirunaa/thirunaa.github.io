import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../styles/ButtonStyles";

function CustomButton({ text, icon }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.custom_btn}
      endIcon={icon ? <div className={classes.btn_icon_container}>{icon}</div> : null}
    >
      <span className={classes.btn_txt}>{text}</span>
    </Button>
  );
}

export default CustomButton;
