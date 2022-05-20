import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#343434",
    width: "100%",
    padding: "50px 100px 20px 100px",
    "& h3": {
      color: "white",
      textAlign: "center",
      fontSize: "16px",
      marginBottom: "0px",
      "& span": {
        color: "#bacc06",
      },
    },
  },
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "white",

    "& p": {
      fontSize: "12px",
      lineHeigth: "1.4",
      fontWeight: "700",
      textAlign: "justify",
    },

    "& .contact": {
      display: "flex",
      alignItems: "center",
      "& .icon": {
        marginRight: "10px",
        color: "#bacc06",
      },
      "& *": {
        fontSize: "14px",
      },
    },

    // "& .part": {
    //   margin: "0px 20px ",
    // },

    "& .p1": {
      width: "20%",
    },

    "& .logo": {
      padding: "6px 12px",
      width: "70px",
      textAlign: "center",
      border: "solid 4px white",
      fontSize: "25px",
      fontWeight: "800",
      color: "white",
    },
  },
}));
