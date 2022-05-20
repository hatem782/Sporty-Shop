import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    transition: "all 0.2s",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "& .gal": {
      padding: "0px 50px",
      marginBottom: "80px",
      textAlign: "left",
    },

    "& .text_ar": {
      fontFamily: "Hudhud",
    },

    "& .img": {
      backgroundPosition: "center center",
      backgroundSize: "cover",
      height: "440px",
      width: "260px",
      position: "relative",

      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.2,
        background: "#000",
      },
    },
    "& .title": {
      position: "relative",
      zIndex: "1",
      fontSize: "30px",
      fontWeight: "200",
      margin: "-80px 0px 0px -50px",
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& *": {
        margin: "0px 20px",
      },
    },
  },
}));

const GalleryItem = (props) => {
  const cs = useStyles();
  const { title, img, title_ar } = props.gal;
  const { lang } = props;

  return (
    <div className={cs.main}>
      <div className="gal">
        <div className="img" style={{ backgroundImage: `url(${img})` }} />
        <h3 className={"title " + (!lang ? " text_ar" : "")}>
          {lang ? title : title_ar}
        </h3>
      </div>
    </div>
  );
};

export default GalleryItem;
