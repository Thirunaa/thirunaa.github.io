import React from "react";
import "../App.css";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { Typography } from "@material-ui/core";
import { useStyles } from "../styles/ProfileStyles.js";
import ProfilePic from "../assets/images/ProfilePic.jpg";
import CustomTimeline from "./CustomTimeline.js";
import CustomTimelineItem from "./CustomTimelineItem";
import resumeData from "../utils/resumeData.js";
import CustomButton from "./CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";

function Profile() {
  const classes = useStyles();

  let email = resumeData.data.email;
  let name = resumeData.data.name;
  let jobtitle = resumeData.data.title;
  let social = resumeData.data.social;

  return (
    <div className={classes.profile}>
      <div className={classes.profile_name}>
        <Typography className={classes.name}> Thirunaavukkarasu</Typography>
        <Typography className={classes.title}>Software Development Engineer</Typography>
      </div>

      <figure className={classes.profile_image}>
        <img className={classes.img} src={ProfilePic} alt="" />
      </figure>

      <div className={classes.profile_information}>
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem key="Name" title="Name" text={name} />
          <CustomTimelineItem key="Title" title="Title" text={jobtitle} />
          <CustomTimelineItem key="Email" title="Email" text={email} />
          {social.map((key) => (
            <CustomTimelineItem key={key.text} title={key.text} text={key.text} link={key.link} />
          ))}
        </CustomTimeline>
        <br />
        <div className={classes.button_container}>
          <CustomButton text={"Download cv"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
