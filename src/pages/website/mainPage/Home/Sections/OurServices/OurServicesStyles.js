import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    width: "100%",
  },
  service: {
    width: "50%",
    height: "450px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .description": {
      width: "80%",
      margin: "auto",
      textAlign: "center",
      color: "white",

      "& h1": {},

      "& p.hint": {
        fontSize: "24px",
        marginBottom: "0px",
      },

      "& p": {
        lineHeight: "1.5",
        fontSize: "20px",
      },
    },
    "& .devider": {
      width: "20%",
      height: "3px",
      backgroundColor: "white",
      margin: "30px auto",
    },
  },
}));
