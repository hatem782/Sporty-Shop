import React, { useState } from "react";
import { GreenButton } from "../../../../../../components/Buttons/WebsiteButtons";
import { useStyles } from "./PopularCategsStyle";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PoolIcon from "@mui/icons-material/Pool";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import ProductSport from "../../../../../../components/Cards/ProductSport";

const links = [
  { txt: "Gym & Training", icon: <FitnessCenterIcon className="icon" /> },
  { txt: "BasketBall", icon: <SportsBasketballIcon className="icon" /> },
  { txt: "FootBall", icon: <SportsSoccerIcon className="icon" /> },
  { txt: "Swimming", icon: <PoolIcon className="icon" /> },
  { txt: "Running", icon: <DirectionsRunIcon className="icon" /> },
];

function Popular() {
  const css = useStyles();
  const [selected, setSelected] = useState("FootBall");

  const handleRouteWebsite = (rt) => {
    setSelected(rt);
  };
  return (
    <div>
      <div className={css.main}>
        <div className="categs">
          <h2>Popular Categories</h2>
          {links.map((rt, key) => {
            return (
              <p
                key={key}
                onClick={() => {
                  handleRouteWebsite(rt.txt);
                }}
                className={`${rt.txt === selected ? "active" : ""}`}
              >
                {rt.icon} {rt.txt}
              </p>
            );
          })}
          <GreenButton>View All Products</GreenButton>
        </div>
        <div className="products">
          <ProductSport />
          <ProductSport />
          <ProductSport />
          <ProductSport />
        </div>
      </div>
    </div>
  );
}

export default Popular;
