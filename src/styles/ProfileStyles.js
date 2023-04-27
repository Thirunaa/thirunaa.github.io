import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  profile: {
    backgroundColor: "white",
    borderRadius: "6px",
    width: "100%",
    display: "inline-block",
  },
  profile_name: {
    lineHeight: "18px",
    padding: "20px",
  },
  name: {
    textTransform: "uppercase",
    fontSize: "17px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "13px",
    color: "#777",
  },
  profile_image: {
    marginTop: "-10px",
    WebkitClipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
    clipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
  },
  img: {
    width: "100%",
  },
  timeline_dot: {
    color: "black !important",
    borderColor: "var(--main-color) !important",
    padding: "2px !important",
  },

  separator_padding: {
    paddingLeft: "18px !important",
  },
  profile_information: {
    top: "0",
    left: "0",
    margin: "-40px 10px 30px",
  },
  timeline_content: {
    marginTop: "2px",
    marginBottom: "12px",
  },
  timeline_text: {
    fontSize: "13.5px !important",
    color: "#787878 !important",
    fontWeight: "400 !important",
  },

  timeline_text_a: {
    color: "#787878 !important",
    textDecoration: "none",
  },
  container_shadow: {
    boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.13)",
    WebkitBoxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.13)",
    MozBoxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.13)",
  },
  button_container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
});

export { useStyles };
