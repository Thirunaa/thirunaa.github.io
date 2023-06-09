import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../App.css";
import resumeData from "../utils/resumeData.js";
import { Paper, Typography, Button, Grid, TextField } from "@material-ui/core";
import { useStyles } from "../styles/ResumeStyles";
import { Work, School, LocalCafe } from "@material-ui/icons";
import CustomTimeline from "../components/CustomTimeline";
import Avatar from "@mui/material/Avatar";
// eslint-disable-next-line
import { Alert, AlertTitle, TimelineContent, TimelineItem, TimelineDot } from "@material-ui/lab";
import CustomTimelineSeparator from "../components/CustomTimelineSeparator";
import CustomButton from "../components/CustomButton";

function Resume(props) {
  const classes = useStyles();
  const form = useRef();
  // eslint-disable-next-line
  let sentFlag = false;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_22fd4y9", "template_1sps5j9", e.target, "FudVH24QNJYCS9pWH").then(
      (result) => {
        console.log(result.text + " - Email Sent");
        sentFlag = true;
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();

    // if (sentFlag) {
    //   return (
    //     <Alert severity="success">
    //       <AlertTitle>Message Sent</AlertTitle>
    //       <strong>Email sent to Thirunaavukkarasu. Thank you!</strong>
    //     </Alert>
    //   );
    // } else {
    //   return (
    //     <Alert severity="error">
    //       <AlertTitle>Error</AlertTitle>
    //       There was an error while trying to send the message — <strong>Please retry after sometime.</strong>
    //     </Alert>
    //   );
    // }
  };

  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h2>About Me</h2>
        </Grid>

        <Grid container className="top_30">
          <Grid item>
            <Typography variant="body2" className={classes.aboutme_text}>
              {resumeData.data.aboutme}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Resume */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h2>Resume</h2>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            {/* Work Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<Work />}>
                {resumeData.data.experiences.map((experience) => (
                  <TimelineItem key={experience.title}>
                    <CustomTimelineSeparator />
                    <TimelineContent className={classes.timeline_content}>
                      <Typography className={classes.timeline_title}>{experience.title}</Typography>
                      <Typography variant="caption" className={classes.timeline_date}>
                        {experience.date}
                      </Typography>
                      <Typography variant="body2" className={classes.timeline_description}>
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}

            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<School />}>
                {resumeData.data.educations.map((education) => (
                  <TimelineItem key={education.title}>
                    <CustomTimelineSeparator />
                    <TimelineContent className={classes.timeline_content}>
                      <Typography className={classes.timeline_title}>{education.title}</Typography>
                      <Typography variant="caption" className={classes.timeline_date}>
                        {education.date}
                      </Typography>
                      <Typography variant="body2" className={classes.timeline_description}>
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Recommendations */}
            <Grid container className="section pb_45">
              <Grid item className="section_title mb_45">
                <span></span>
                <h2>What People say about me</h2>
              </Grid>

              <Grid item xs={12}>
                <Grid container>
                  {resumeData.data.recommendations.map((recommendation) => (
                    <Grid item key={recommendation.name} xs={12} sm={6} md={3}>
                      <Paper elevation={0} className={classes.recommendation}>
                        <div
                          className={classes.recommendation_avatar}
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/in/thirunaavukkarasu/details/recommendations/?detailScreenTabIndex=0",
                              "mywindow"
                            )
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <Avatar alt={recommendation.name} src={recommendation.imageUrl} />
                        </div>
                        <Typography variant="h6" className={classes.recommendation_title}>
                          {recommendation.name}
                        </Typography>

                        <Typography variant="caption" className={classes.timeline_date}>
                          {recommendation.role}
                        </Typography>
                        <br />
                        <Typography variant="caption" className={classes.timeline_date}>
                          {recommendation.date}
                        </Typography>
                        <Typography variant="body2" className={classes.recommendation_description}>
                          {recommendation.detail}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            {/* Skillset */}
            <Grid container className="section graybg p_50 pb_50">
              <Grid container spacing={3} justify={"space-between"}>
                {resumeData.data.skills.map((skill) => (
                  <Grid item key={skill.title} xs={12} sm={6} md={3}>
                    <Paper elevation={0} className={classes.skills}>
                      <Typography variant="h6" className={classes.skills_title}>
                        {skill.title}
                      </Typography>
                      {skill.description.map((el) => (
                        <Typography variant="body2" key={el} className={classes.skills_description}>
                          <TimelineDot variant="outlined" className={classes.skills_description_timeline_dot} />
                          {el}
                        </Typography>
                      ))}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {/* Contact */}

            <Grid container className="section p_50 pb_50" spacing="10">
              <Grid item xs={12} lg={7}>
                <Grid container>
                  <Grid item className="section_title top_30">
                    <span></span>
                    <h2>Contact Form</h2>
                  </Grid>

                  <form ref={form} onSubmit={sendEmail}>
                    <Grid item className="top_30">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField required fullWidth name="name" label="Name"></TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField required fullWidth name="email" label="E-mail"></TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="message"
                            label="Message"
                            multiline
                            minRows={4}
                          ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                          {/* <CustomButton type="submit" text={"Submit"}></CustomButton> */}
                          <Button type="submit" className={classes.custom_btn}>
                            <span className={classes.btn_txt}>{"Submit"}</span>
                          </Button>
                        </Grid>
                        <br />

                        <Grid item xs={12}>
                          <div onClick={() => window.open("https://www.buymeacoffee.com/ThiruMv", "mywindow")}>
                            <CustomButton text={"Buy me a coffee"} icon={<LocalCafe />} />
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>

              <Grid item xs={12} lg={5}>
                <Grid container>
                  {/*  */}
                  <Grid item className="section_title top_30">
                    <span></span>
                    <h2>Contact Information</h2>
                  </Grid>

                  {/*  */}
                  <Grid item xs={12} className="top_30">
                    <Grid container>
                      <Grid item>
                        <Typography className={classes.contactInfo_item}>
                          <span>Address:</span> {resumeData.data.place}
                        </Typography>
                        <Typography className={classes.contactInfo_item}>
                          <span>Phone:</span> {resumeData.data.phone}
                        </Typography>
                        <Typography className={classes.contactInfo_item}>
                          <span>Email:</span> {resumeData.data.email}
                        </Typography>
                        <Grid container className={classes.contactInfo_socialsContainer}>
                          {resumeData.data.social.map((key) => (
                            <Grid item className={classes.contactInfo_social}>
                              <a key={key.text} href={key.link} target="_blank" rel="noreferrer">
                                {key.icon}
                              </a>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* End */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
