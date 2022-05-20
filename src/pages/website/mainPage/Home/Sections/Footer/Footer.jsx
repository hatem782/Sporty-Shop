import React from "react";
import { useStyles } from "./FooterStyles";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PoolIcon from "@mui/icons-material/Pool";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

const links = ["Home", "Product", "Services", "Gallery", "Sponsores"];

const tags = [
  { txt: "Gym & Training", icon: <FitnessCenterIcon className="icon" /> },
  { txt: "BasketBall", icon: <SportsBasketballIcon className="icon" /> },
  { txt: "FootBall", icon: <SportsSoccerIcon className="icon" /> },
  { txt: "Swimming", icon: <PoolIcon className="icon" /> },
  { txt: "Running", icon: <DirectionsRunIcon className="icon" /> },
];

const medias = [
  { txt: "Facebook", icon: <FacebookIcon className="icon" /> },
  { txt: "Twitter", icon: <TwitterIcon className="icon" /> },
  { txt: "Reddit", icon: <RedditIcon className="icon" /> },
  { txt: "Instagram", icon: <InstagramIcon className="icon" /> },
  { txt: "Youtube", icon: <YouTubeIcon className="icon" /> },
  { txt: "LinkedIn", icon: <LinkedInIcon className="icon" /> },
];

function Footer() {
  const css = useStyles();
  return (
    <div className={css.footer}>
      <div className={css.main}>
        <div className="part p1">
          <div className="logo">S S</div>
          <p className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem eius repellat deserunt delectus sunt temporibus
            tempora
            <p className="contact">
              <PhoneIphoneIcon className="icon" /> +216 58217529
            </p>
            <p className="contact">
              <LocationOnIcon className="icon" /> Rue Zahra 4580 Tunis
            </p>
            <p className="contact">
              <MailIcon className="icon" /> SportyShop@gmail.com
            </p>
          </p>
        </div>
        <div className="part p2">
          <h3>Quick Links</h3>
          {links.map((item, key) => {
            return <p key={key}>{item}</p>;
          })}
        </div>
        <div className="part p3">
          <h3>Special Tags</h3>
          {tags.map((item, key) => {
            return (
              <p className="contact" key={key}>
                {item.icon} {item.txt}
              </p>
            );
          })}
        </div>
        <div className="part p3">
          <h3>Social Medias</h3>
          {medias.map((item, key) => {
            return (
              <p className="contact" key={key}>
                {item.icon} {item.txt}
              </p>
            );
          })}
        </div>
      </div>
      <hr />
      <h3>
        <span>@CopyRights</span> This Website is Created By{" "}
        <span>Hatem Ben Echikh</span> & <span>Hamza Rezgui</span>
      </h3>
    </div>
  );
}

export default Footer;
