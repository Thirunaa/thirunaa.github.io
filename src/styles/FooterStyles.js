import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#1e1e1e",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "70px",
    borderRadius: "8px",
    padding: "20px 25px",
  },

  footer_copyright: {
    fontSize: "small",
    textAlign: "end",
    color: "#9c9c9c",
    "& > a": {
      textDecoration: "none !important",
      color: "var(--main-color)",
    },
  },
});

export { useStyles };
