import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  aboutme_text: {
    color: "darkslategray !important",
    fontSize: "smaller !important",
    lineHeight: "22px !important",
    whiteSpace: "pre-line !important",
  },
  timeline_content: {
    paddingTop: "0px !important",
    marginBottom: "20px",
  },
  timeline_title: {
    fontSize: "16px !important",
    fontWeight: "500 !important",
  },
  timeline_date: {
    color: "darkslategray",
  },
  timeline_description: {
    color: "gray",
    fontSize: "small",
    marginTop: "6px",
    whiteSpace: "pre-line !important",
  },

  recommendation: {
    height: "100%",
    textAlign: "center",
  },

  recommendation_title: {
    fontSize: "16px !important",
    fontWeight: "500 !important",
    lineHeight: "35px !important",
    textAlign: "center",
  },

  recommendation_avatar: {
    justifyContent: "center",
    display: "flex",
  },

  recommendation_description: {
    color: "#989898 !important",
    borderColor: "var(--main-color) !important",
    marginRight: "5px !important",
    textAlign: "center",
  },

  skills: {
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 0px 48px 0px rgba(4, 6, 4, 0.08) !important",
    minHeight: "186px",
    height: "100%",
  },

  skills_title: {
    fontSize: "14px !important",
    fontWeight: "500 !important",
    lineHeight: "35px !important",
  },

  skills_description: {
    display: "flex",
    alignItems: "center",
    color: "#989898 !important",
    fontWeight: "400 !important",
    lineHeight: "18px !important",
  },

  skills_description_timeline_dot: {
    color: "black !important",
    borderColor: "var(--main-color) !important",
    padding: "2px !important",
    marginRight: "5px !important",
  },

  contactInfo_item: {
    lineHeight: "34px !important",
    fontSize: "14px !important",
    color: "#787878",
    "&> span": {
      color: "black",
      fontWeight: "500",
    },
  },
  custom_btn: {
    backgroundColor: "var(--main-color) !important",
    fontSize: "14px !important",
    fontWeight: "500 !important",
    border: "0 !important",
    borderRadius: "50px !important",
    padding: "1px 12px !important",
    lineHeight: "35px !important",
    minWidth: "100px !important",
    outline: "none !important",
  },

  btn_txt: {
    fontSize: "14px !important",
    textTransform: "none !important",
    textAlign: "center",
    width: "100%",
    marginRight: "5px",
    marginLeft: "5px",
  },

  contactInfo_socialsContainer: {
    marginTop: "15px",
  },

  contactInfo_social: {
    "&> a > .MuiSvgIcon-root": {
      fontSize: "16px !important",
      marginRight: "10px",
      color: "black",
    },
  },
});

export { useStyles };
