import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
  btn_icon_container: {
    color: "#000 !important",
    background: "#fff !important",
    borderRadius: "50px !important",
    height: "27px !important",
    width: "27px !important",
    lineHeight: "29px !important",
    textAlign: "center !important",
    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    "&> .MuiSvgIcon-root": {
      fontSize: "16px !important",
    },
  },
  btn_txt: {
    fontSize: "14px !important",
    textTransform: "none !important",
    textAlign: "center",
    width: "100%",
    marginRight: "5px",
    marginLeft: "5px",
  },
});

export { useStyles };
