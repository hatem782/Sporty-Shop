import React, { useEffect } from "react";
import img from "../../Assets/images/Dynamic/equipment/Dumbbell.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";
import { WhiteButton } from "../Buttons/WebsiteButtons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    padding: "40px",
    position: "relative",

    "&:hover": {
      "& .hidden-info": {
        transform: "scale(1.01)",
        opacity: "1",
      },
    },

    "& .hidden-info": {
      position: "absolute",
      height: "100%",
      width: "100%",
      backgroundColor: "#0EDCB5f0",
      top: "0px",
      left: "0px",
      right: "0px",
      bottom: "0px",
      //transform: "scale(0)",
      transition: "all  0.3s",
      opacity: "0",

      padding: "30px",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",

      "& p": {
        color: "white",
        margin: "0px",
        fontWeight: "600",
      },

      "& h4": {
        margin: "0px",
        color: "white",
        fontSize: "20px",
      },

      "& .description": {
        fontSize: "14px",
        fontWeight: "500",
      },

      "& .top": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& .remise": {
          backgroundColor: "black",
          padding: "5px",
          fontSize: "10px",
        },
      },
      "& .mid": {
        width: "100%",

        "& .buttons": {
          display: "flex",
          alignItems: "center",
          width: "100%",

          justifyContent: "space-between",
          "& button": {
            padding: "10px 20px !important",
          },
        },

        "& .rates": {
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        },

        "& .center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .icon": {
            margiRight: "10px",
          },
        },
      },
    },

    "& img": {
      width: "100%",
      maxHeight: "290px",
    },

    "& .info": {
      position: "absolute",
      bottom: "20px",
      left: "30px",
      "& h4": {
        margin: "0px",
        fontWeight: "700",
        fontSize: "20px",
      },
      "& p": {
        margin: "10px 0px 0px 0px",
        "& span": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
}));

const rates = (num) => {
  let tab = [];
  for (var i = 0; i < 5; i++) {
    if (i < num) {
      tab.push(1);
    } else {
      tab.push(0);
    }
  }
  return tab;
};

const GridCard = ({ item }) => {
  const css = useStyles();
  const navig = useNavigate();

  const goto = (id) => {
    navig("/website/product/1");
  };

  return (
    <div className={css.card + " product"}>
      <img src={img} />
      <div className="info">
        <h4>Dumbbell</h4>
        <p>
          Price : <span> 40DT</span>
        </p>
      </div>
      <div className="hidden-info">
        <div className="top">
          <p>Limited</p>
          <p className="remise">-30%</p>
        </div>
        <div className="mid">
          <div className="buttons">
            <WhiteButton onClick={goto}>
              <span className="center">
                <ShoppingCartIcon className="icon" /> Buy
              </span>
            </WhiteButton>
            <WhiteButton>
              <span className="center">
                <FavoriteBorderIcon className="icon" />
              </span>
            </WhiteButton>
            <WhiteButton>
              <span className="center">
                <ContentCopyIcon className="icon" />
              </span>
            </WhiteButton>
          </div>
          <div className="rates">
            {rates(3).map((val) => {
              return val === 0 ? (
                <StarBorderIcon className="icon" />
              ) : (
                <StarIcon className="icon" />
              );
            })}
          </div>
        </div>
        <div className="bot">
          <h4>Dumbbell</h4>
          <p>
            Price : <span> 40DT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
