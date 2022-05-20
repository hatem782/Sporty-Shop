import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    width: "100%",
    height: "auto",
    "& .categs": {
      width: "20%",
      padding: "50px 20px",

      "& h2": {
        margin: "0px",
        fontSize: "20px",
      },

      "& p": {
        margin: "25px 0px",
        fontWeight: "600",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        "& .icon": {
          marginRight: "10px",
        },
      },

      "& .active": {
        color: theme.palette.primary.main,
      },

      "& button": {
        display: "block",
        margin: "auto",
      },
    },
    "& .products": {
      width: "80%",
      height: "100%",
      display: "flex",
    },
  },
}));
