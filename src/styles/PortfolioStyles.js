import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  custom_tabs: {},
  customTabs_item_active: {
    color: "var(--main-color) !important",
  },
  customTabs_item: {
    padding: "0px !important",
    minWidth: "0px !important",
    marginRight: "20px !important",
    textTransform: "inherit !important",
    fontSize: "14px !important",
    fontWeight: "400 !important",
    outlineWidth: "0px !important",
  },
  custom_card: {
    height: "100%",
    maxWidth: "350px",
    boxShadow: "0px 0px 48px 0px rgba(4,6,4,0.08) !important",
    borderRadius: "5px",
    overflow: "hidden",
    outlineWidth: "0px !important",
  },
  custom_card_image: {
    height: "140px",
  },
  custom_card_title: {
    fontWeight: "500",
  },
  custom_card_description: {},
  custom_card_caption: {
    color: "gray !important",
    fontWeight: "400",
  },

  dialogbox_image: {
    maxHeight: "300px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center center",
  },
  dialogbox_description: {
    marginTop: "10px !important",
  },
  dialogbox_actions: {
    justifyContent: "center !important",
    marginBottom: "10px",
  },
  dialogbox_icon: {
    color: "darkslategray",
    margin: "0px 12px",
    cursor: "pointer",
    "& :hover": {
      color: "var(--main-color)",
    },
    "&> .MuiSvgIcon-root": {
      fontSize: "30px !important",
    },
  },
});

export { useStyles };
