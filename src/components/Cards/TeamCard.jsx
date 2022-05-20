import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "270px",
    margin: "0px auto",
    color: "white",

    "& .img": {
      height: "270px",
      width: "270px",
      margin: "0px auto 30px auto",
      borderRadius: "100px 100px  100px 20px",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      boxShadow: "2px 2px 10px 1px #13613A",
      transition: "all 0.3s",
    },

    "&:hover": {
      "& .img": {
        transform: "scale(1.05)",
      },
    },
    "& h1,h2": {
      margin: "0px",
      padding: "0px",
      //textAlign: "left !important",
      textAlign: "center !important",
    },
    "& h1": {
      fontSize: "30px !important",
      fontWeight: "700",
    },
    "& h2": {
      fontSize: "25px !important",
      fontWeight: "500",
    },
    "& .h1_ar": {
      fontSize: "32px !important",
      fontFamily: "Hudhud",
      fontWeight: "500",
    },
    "& .h2_ar": {
      fontSize: "27px !important",
      fontFamily: "HSDreamLight",
      lineHeight: "1.8",
    },
  },
}));

function PersonCard(props) {
  const css = useStyles();
  const { img, name_en, description_en, name_ar, description_ar } = props.Item;
  const { lang } = props;
  const { isVisible } = props;
  return (
    <div className={css.main}>
      <div className="img" style={{ backgroundImage: `url(${img})` }} />
      <h1 className={lang ? "h1_en" : "h1_ar"}>
        {lang ? name_en : name_ar}
        <hr className={false ? "extend" : "no"} />
      </h1>
      <h2 className={lang ? "h2_en" : "h2_ar"}>
        {lang ? description_en : description_ar}
      </h2>
    </div>
  );
}

export default PersonCard;
