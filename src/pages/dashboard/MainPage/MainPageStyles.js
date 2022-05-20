import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    overflowX: "hidden",
    "& .chart-title": {
      margin: "0px",
      padding: "0px",
      color: theme.palette.primary.main,
      fontSize: "20px",
      //overflow: "hidden",
      display: "flex",
      alignItems: "center",
    },
  },
}));
