import React from "react";
import { makeStyles } from "@mui/styles";

import EventNoteIcon from "@mui/icons-material/EventNote";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  getDay,
  getMonthEn,
  FullDateEn,
  FullDateAr,
} from "../../functions/DateTimeFn";

export const useStyles = makeStyles((theme) => ({
  main: {
    height: "auto",
    width: "550px",
    "& .img": {
      width: "100%",
      height: "270px",
      backgroundSize: "100%",
      backgroundPosition: "center center",
      transition: "all 0.3s",
    },
    "& .content": {
      display: "flex",
      height: "auto",
      marginTop: "3px",
      transition: "all 0.3s",
      backgroundColor: "#EEE",
    },
    "& .date_part": {
      width: "18%",
      borderRight: "3px dashed #111",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      "& h2,h3": {
        margin: "0px",
        padding: "0px",
        textAlign: "center",
      },
      "& h2": {
        color: "#111",
        fontSize: "55px",
        fontWeight: "900",
        fontFamily: "HSDreamLight",
        transform: "scaleY(1.1)",
      },
      "& h3": {
        color: "#121212",
        transform: "translateY(-15px)",
      },
    },

    "& .info_part": {
      width: "82%",
      padding: "10px",
      textAlign: "left",
      transition: "all 0.3s",

      "& h2,p": {
        margin: "0px",
        padding: "0px",
      },
      "& h2": {
        fontFamily: "robox",
        fontWeight: "700",
        fontSize: "24px",
        marginBottom: "8px",
      },
      "& p": {
        fontSize: "16px",
        fontFamily: "Aileron",
        fontWeight: "900",
        margin: "8px 0px",
      },
      "& p.date,p.place": {
        color: "#333",
        display: "flex",
        alignItems: "center",
        "& svg": {
          marginRight: "8px",
        },
      },
    },

    "&:hover": {
      cursor: "pointer",
      "& .img": {
        backgroundSize: "120%",
      },
      "& .content": {
        height: "auto",
      },
    },
    "& .ar": {
      flexDirection: "row-reverse",
      "& *": {
        textAlign: "right",
      },
      "& h2": {
        fontFamily: "Hudhud !important",
      },
      "& p": {
        fontFamily: "HSDreamLight !important",
      },
      "& .date_part": {
        borderLeft: "3px dashed #111",
        borderRight: "0px",
      },
      "& p.date,p.place": {
        flexDirection: "row-reverse",
        "& svg": {
          marginLeft: "8px",
          marginRight: "0px !important",
        },
      },
    },
  },
}));

function EventCard({ card, lang }) {
  const cs = useStyles();

  return (
    <div className={cs.main}>
      <div className="img" style={{ backgroundImage: `url(${card.img})` }} />
      <div className={"content " + (lang ? "en" : "ar")}>
        <div className="date_part">
          <h2>{getDay(card.date)}</h2>
          <h3>{getMonthEn(card.date)}</h3>
        </div>
        <div className="info_part">
          <h2>{lang ? card.title_en : card.title_ar}</h2>
          <p>{lang ? card.description_en : card.description_ar}</p>
          <p className="date">
            {" "}
            <EventNoteIcon />{" "}
            {lang
              ? FullDateEn(card.date, card.time)
              : FullDateAr(card.date, card.time)}
          </p>
          <p className="place">
            <LocationOnIcon /> {lang ? card.location_en : card.location_ar}
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
