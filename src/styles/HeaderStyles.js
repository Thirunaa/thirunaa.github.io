import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    marginBottom: "30px !important",
    backgroundColor: "white !important",
    padding: "0 22px 0 0 !important",
    borderRadius: "6px !important",
    boxShadow: "0px 2px 92px 0px rgba(0,0,0,0.07) !important",
  },

  header_navlink: {
    padding: "0",
  },

  header_link: {
    fontWeight: "500",
    color: "darkslategray !important",
    "&:hover": {
      color: "var(--main-color) !important",
    },
  },

  header_link_active: {
    fontWeight: "500",
    color: "var(--main-color) !important",
  },

  header_home: {
    backgroundColor: "var(--main-color) !important",
    padding: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "6px",
    borderBottomLeftRadius: "6px",
  },

  header_right: {
    display: "flex !important",
    alignItems: "center !important",
    "&> a > .MuiSvgIcon-root": {
      fontSize: "16px !important",
      marginRight: "12px",
      color: "black",
    },
  },

  header_left: {
    marginRight: "auto",
  },
});

export { useStyles };
