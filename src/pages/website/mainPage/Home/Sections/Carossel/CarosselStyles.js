import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    padding: "50px 30px",

    "& .container": {
      width: "100%",
      height: "100%",

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "& .product": {
        display: "flex",
        alignItems: "center",
        height: "auto",
        width: "80%",

        "& .description": {
          margin: "0px 10px",
          width: "60%",
          height: "400px",
          "& h1": {
            margin: "0px",
            padding: "0px",
            color: "white",
            fontSize: "40px",
            paddingBottom: "20px",
            margingBottom: "20px",
            borderBottom: "solid 4px white",
            textTransform: "uppercase",
          },
          "& p": {
            color: "white",
            fontSize: "20px",
            display: "flex",
            alignItems: "center",
          },
          "& .buttons": {
            display: "flex",
            alignItems: "center",
            "& p": {
              marginRight: "20px",
            },
          },
        },
        "& .prodImg": {
          margin: "0px 30px",
          width: "40%",
          display: "block",
        },
      },

      "& .arrow": {
        height: "65px",
        width: "65px",
        backgroundColor: "white",
        borderRadius: "500px",
        boxShadow: "2px 2px 5px #555555",
        cursor: "pointer",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#777",
        "& *": {
          fontSize: "40px",
        },
      },
    },
  },
}));
