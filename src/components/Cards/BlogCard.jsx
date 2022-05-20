import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  S_card: {
    padding: "0px 0px 40px 0px",
    margin: "50px 16px",
    borderBottom: "solid 2px white",
    color: "white",
    transition: "all 0.2s",

    "&:hover": {
      transform: "scale(1.05)",
      cursor: "pointer",
      "& .img": {
        //transform:"translateY(-5px)",
      },
      "& .txt": {
        // transform:"scale(1.05)",
      },
    },

    [theme.breakpoints.down("sm")]: {
      margin: "20px 40px",
    },

    "& .img": {
      height: "240px",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      transition: "all 0.2s",
    },

    "& .txt": {
      transition: "all 0.2s",
      "& h3": {
        fontFamily: "roxbor",
        fontSize: "32px",
        fontWeight: "300",
        margin: "20px 0px 0px 0px",
      },

      "& .ar_h3": {
        fontFamily: "Jazera",
        textAlign: "right",
        fontWeight: "700",
      },
      "& p": {
        fontFamily: "Aileron",
        fontSize: "21px",
      },

      "& .ar_p": {
        fontFamily: "Jazera",
        textAlign: "right",
        fontWeight: "500",
      },
    },
  },
}));
const BlogCard = (props) => {
  const { title_en, img, description_en, description_ar, title_ar } =
    props.card;
  const lang = props.lang;
  const { solo = false } = props;
  const css = useStyles();

  return (
    <div className={css.S_card}>
      <div
        className="img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="txt">
        <h3 className={!lang ? "ar_h3" : ""}>{lang ? title_en : title_ar}</h3>
        <p className={!lang ? "ar_p" : ""}>
          {lang ? description_en : description_ar}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
