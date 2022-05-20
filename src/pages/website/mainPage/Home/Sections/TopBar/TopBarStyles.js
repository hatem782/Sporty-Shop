import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  Nav1: {
    height: "60px",
    borderBottom: "solid 2px #f9f9f9",
    width: "100%",
    padding: "0px 60px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& .prt1, .prt2": {
      display: "flex",
      height: "100%",
    },
    "& .button": {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0px 20px",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f9f9f9",
      },

      "& .icon": {
        color: theme.palette.primary.main,
      },
    },

    "& .bl1": {
      borderLeft: "solid 1px #f9f9f9",
    },
    "& .br1": {
      borderRight: "solid 1px #f9f9f9",
    },
    "& .bl2": {
      borderLeft: "solid 2px #f9f9f9",
    },
    "& .br2": {
      borderRight: "solid 2px #f9f9f9",
    },
  },
  Nav2: {
    width: "100%",
    padding: "20px 60px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& .prt1, .prt2": {
      display: "flex",
      height: "100%",
    },

    "& .logo": {
      padding: "6px 12px",
      border: "solid 4px ",
      fontSize: "25px",
      fontWeight: "800",
    },

    "& .link": {
      height: "100%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      margin: "0px 5px",
      padding: "8px 16px",
      cursor: "pointer",
      fontSize: "12px",
      fontWeight: "700",
      borderRadius: "500px",
      color: "black",
      "&:hover": {
        backgroundColor: "#f9f9f9",
      },
    },
    "& .active": {
      color: "white",
      backgroundColor: `${theme.palette.primary.main} !important`,
    },
  },
}));
