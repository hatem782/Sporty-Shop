import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    padding: "50px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& .product": {
      display: "flex",
      alignItems: "center",
      height: "auto",
      width: "90%",

      "& .previews": {
        display: "flex",
        flexDirection: "column",
        "& .img": {
          width: "70px",
          border: "solid 1px white",
          borderRadius: "500px",
          margin: "10px 0px",
          padding: "5px",
          cursor: "pointer",
          transition: "all 0.2s",
          "& img": {
            width: "100%",
          },
        },
        "& .selected": {
          backgroundColor: "white",
        },
      },

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
        transition: "all 0.2s",
      },
    },
  },
}));
