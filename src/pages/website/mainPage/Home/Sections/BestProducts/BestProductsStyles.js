import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    padding: "50px 50px",
    "& h1": {
      textAlign: "center",
    },
    "& .devider": {
      width: "20%",
      height: "3px",
      backgroundColor: "black",
      margin: "30px auto",
    },
    "& .products": {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      "& .product": {
        width: "25%",
        marginBottom: "20px",
      },
    },
    "& button": {
      display: "block",
      margin: "20px auto",
    },
  },
}));
