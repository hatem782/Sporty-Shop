import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff",
    margin: "0px",
    padding: "0px",

    display: "flex",
    "& .filter": {
      width: "25%",
      heigth: "500px",
      borderRight: `solid 2px #e9e9e9`,

      "& .filter-header": {
        width: "100%",
        height: "60px",
        padding: "0px 0px 0px 50px",
        borderBottom: `solid 2px #e9e9e9`,
        borderTop: `solid 2px #e9e9e9`,

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& .icon-container": {
          width: "60px",
          height: "60px",
          borderLeft: `solid 2px #e9e9e9`,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.primary.main,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#e9e9e9",
          },
        },
      },
      "& .filter-body": {
        width: "100%",

        "& .categories": {
          padding: "0px 50px 0px 50px",
          borderBottom: `solid 2px #e9e9e9`,

          "& .Categ-container": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "25px 0px",
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.primary.main,
            },
          },

          "& .Categ": {
            display: "flex",
            alignItems: "center",
            "& .icon": {
              marginRight: "10px",
              color: theme.palette.primary.main,
            },
            "& *": {
              fontSize: "18px",
            },
          },
        },

        "& .Price": {
          padding: "20px 50px 20px 50px",
          borderBottom: `solid 2px #e9e9e9`,
          backgroundColor: "#fcfcfc",

          "& h4": {
            margin: "0px",
            marginBottom: "20px",
          },

          "& .inputs": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            "& input": {
              border: "none",
              outline: "none",
              width: "48%",
              padding: "7px 15px",
              borderRadius: "500px",
              backgroundColor: "white",
              border: `solid 1px #e9e9e9`,
              fontSize: "14px",
            },
          },
        },
        "& .Colors": {
          padding: "20px 50px 20px 50px",
          borderBottom: `solid 2px #e9e9e9`,

          "& .colors": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            "& div": {
              width: "27px",
              height: "27px",
              margin: "4px",
              borderRadius: "500px",
              border: `solid 1px #e9e9e9`,
              transition: "all 0.2s",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.15)",
              },
            },
          },

          "& h4": {
            margin: "0px",
            marginBottom: "20px",
          },
        },
      },
    },
    "& .products": {
      width: "75%",
      heigth: "500px",
      "& .products-header": {
        width: "100%",
        height: "60px",
        borderBottom: `solid 2px #e9e9e9`,
        borderTop: `solid 2px #e9e9e9`,

        display: "flex",
        alignItems: "center",
        "& .cell": {
          width: "33.33333%",
          height: "100%",
          "& p": {
            textAlign: "center",
            fontSize: "18px",
          },
        },
        "& .c1 , .c2": {
          borderRight: `solid 2px #e9e9e9`,
        },
        "& .c3": {
          width: "33.33333%",
          display: "flex",
          alignItems: "center",

          "& .icon-container": {
            width: "60px",
            height: "60px",
            borderRight: `solid 2px #e9e9e9`,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.primary.main,

            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e9e9e9",
            },
          },
          "& p": {
            flexGrow: "1",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            "& span": {
              backgroundColor: theme.palette.primary.main,
              color: "white",
              borderRadius: "500px",
              display: "blcok",
              height: "40px",
              width: "40px",
              margin: "0px 10px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          },
        },
      },
      "& .all-products": {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        "& .product-container": {
          width: "33.33333%",
          borderRight: "solid 2px #e9e9e9",
          borderBottom: "solid 2px #e9e9e9",
        },
      },
    },
  },
}));
