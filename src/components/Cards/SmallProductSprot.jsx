import React from "react";
import img from "../../Assets/images/Dynamic/equipment/Dumbbell.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    alignItems: "center",
    "& .img": {
      width: "80px",
      padding: "5px",
      border: "solid 2px #f9f9f9",
      margin: "0px 10px 0px 0px",
      "& img": {
        width: "100%",
      },
    },
    "& .infos": {
      "& h3": {
        margin: "0px",
        padding: "0px",
        fontSize: "16px",
      },
      "& .prix": {
        margin: "0px",
        padding: "0px",
        fontSize: "14px",
        color: theme.palette.primary.main,
      },
      "& .rates": {
        "& *": {
          fontSize: "12px",
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

const SmallProductSprot = ({ item }) => {
  const css = useStyles();

  return (
    <div data-aos="zoom-in" className={css.card + " product"}>
      <div className="img">
        <img src={img} />
      </div>
      <div className="infos">
        <h3>Sed omnis inventore </h3>
        <p className="prix">40 DT</p>
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
    </div>
  );
};

export default SmallProductSprot;
