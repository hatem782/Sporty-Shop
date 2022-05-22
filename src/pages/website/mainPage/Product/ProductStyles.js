import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
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
          border: "solid 1px #e5e5e5",
          borderRadius: "500px",
          margin: "5px 0px",
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
        height: "100%",

        "& .part1": {
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",

          "& p": {
            margin: "0px",
          },

          "& .rates": {
            marginTop: "10px",
            display: "flex",
            justifyContent: "center",
            color: "black",
          },
        },
        "& table": {
          "& .colors": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            "& div": {
              width: "27px",
              height: "27px",
              margin: "0px 10px 0px 0px",
              borderRadius: "500px",
              border: `solid 1px #e9e9e9`,
              transition: "all 0.2s",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.15)",
              },
            },
          },

          "& .sizes": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            "& p": {
              width: "27px",
              height: "27px",
              margin: "0px 10px 0px 0px",
              transition: "all 0.2s",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.15)",
              },
            },
          },
        },

        "& h1": {
          margin: "0px",
          padding: "0px",
          color: "black",
          fontSize: "30px",
          paddingBottom: "10px",
          margingBottom: "10px",
          borderBottom: "solid 4px black",
          textTransform: "uppercase",
        },
        "& p": {
          color: "black",
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

          "& .how-many": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            height: "42px",
            width: "100px",
            padding: "0px 20px",
            border: "solid 1px #aaa",
            borderRadius: "500px",

            "& span": {
              color: "black",
            },
            "& .op": {
              color: "#aaa",
              fontSize: "22px",
              transform: "translateY(-2px)",
            },
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
