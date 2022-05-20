import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  article: {
    backgroundColor: "white",
    color: "#111",
    margin: "20px",
    padding: "20px 40px",
  },

  head: {
    "& .date_and_category": {
      width: "100%",
      borderBottom: "solid 3px black",
      padding: "0px 10px",
      marginBottom: "50px",

      fontFamily: "roxbor",

      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",

      "& h3": {
        margin: "10px 0px",
        padding: "0px",
      },
    },
  },

  body: {
    "& h1,h2,h2,h4": {
      fontFamily: "roxbor",
      display: "block",
      clear: "both",
      direction: "ltr",
    },

    "& h1": {
      marginBottom: "30px",
      fontSize: "40px",
    },

    "& h2": {
      fontSize: "30px",
    },

    "& p": {
      fontFamily: "Aileron",
      fontSize: "20px",
      fontWeight: "900",
      lineHeight: "33px",
    },

    "& img": {
      display: "block",
      width: "100%",
    },

    "& .img": {
      display: "inline",
      height: "300px",
      width: "400px",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      marginBottom: "1em",

      [theme.breakpoints.down("md")]: {
        display: "block",
        width: "100%",
      },
    },

    "& .left": {
      float: "left",
      marginRight: "2em",
    },

    "& .right": {
      float: "right",
      marginLeft: "2em",
    },
  },

  article_ar: {
    "& .date_and_category": {
      flexDirection: "row-reverse",
      fontFamily: "Jazera",
      fontWeight: "800",
    },
    "& h1,h2,h3,h4": {
      direction: "rtl",
      fontFamily: "Jazera",
      fontWeight: "800",
      textAlign: "right",
    },
    "& h1": {},
    "& h2": {},
    "& p": {
      fontFamily: "Jazera",
      lineHeight: "2",
      textAlign: "right",
      fontWeight: "500",
    },
  },
}));
