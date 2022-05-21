import React, { useEffect } from "react";
import img from "../../Assets/images/Dynamic/equipment/Dumbbell.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";

import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "30px 10px",
    borderLeft: "solid 2px #f9f9f9",
    borderRight: "solid 2px #f9f9f9",
    "& img": {
      width: "80%",
      display: "block",
      margin: "auto",
    },

    "& .icon": {
      color: theme.palette.primary.main,
    },

    "& h3": {
      textAlign: "center",
      margin: "20px 0px 20px 0px",
    },
    "& p": {
      textAlign: "center",
      color: "#555",
      fontSize: "14px",
      padding: "0px 10px",
    },
    "& .rates": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .prix": {
      margin: "0px",
      fontSize: "20px",
      textAlign: "center",
      color: theme.palette.primary.main,
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

const ProductSport = ({ item }) => {
  const css = useStyles();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div data-aos="zoom-in" className={css.card + " product"}>
      <img src={img} />
      <h3>Dumbbell</h3>
      <div className="rates">
        {rates(3).map((val) => {
          return val === 0 ? (
            <StarBorderIcon className="icon" />
          ) : (
            <StarIcon className="icon" />
          );
        })}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit, error numquam
        deleniti.
      </p>
      <p className="prix">40 DT</p>
    </div>
  );
};

export default ProductSport;
