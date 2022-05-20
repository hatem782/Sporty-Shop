import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "50px 100px",
    display: "flex",
    justifyContent: "space-between",

    "& .list": {
      width: "23%",
      display: "flex",
      flexDirection: "column",
      "& h3": {
        margin: "0px",
      },

      "& .devider": {
        width: "50%",
        height: "3px",
        backgroundColor: "black",
        margin: "20px 0px",
      },
      "& .product": {
        margin: "5px 0px",
      },
    },
  },
}));
