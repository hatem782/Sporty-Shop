import React, { useState } from "react";
import { useStyles } from "./ProdPageStyles";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";

import LoopIcon from "@mui/icons-material/Loop";
import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PoolIcon from "@mui/icons-material/Pool";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsGolfIcon from "@mui/icons-material/SportsGolf";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";

import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import BoyIcon from "@mui/icons-material/Boy";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import WcIcon from "@mui/icons-material/Wc";
import GridCard from "../../../../../components/Cards/GridCard";

const tags = [
  {
    txt: "Gym & Training",
    icon: <FitnessCenterIcon className="icon" />,
    dispo: 15,
  },
  {
    txt: "BasketBall",
    icon: <SportsBasketballIcon className="icon" />,
    dispo: 9,
  },
  {
    txt: "Golf",
    icon: <SportsGolfIcon className="icon" />,
    dispo: 5,
  },
  {
    txt: "Teniss",
    icon: <SportsTennisIcon className="icon" />,
    dispo: 13,
  },
  { txt: "FootBall", icon: <SportsSoccerIcon className="icon" />, dispo: 12 },
  { txt: "Swimming", icon: <PoolIcon className="icon" />, dispo: 8 },
  { txt: "Running", icon: <DirectionsRunIcon className="icon" />, dispo: 20 },
];

const checks = [
  {
    txt: "For Family",
    icon: <FamilyRestroomIcon className="icon" />,
  },
  {
    txt: "For Adults",
    icon: <WcIcon className="icon" />,
  },
  {
    txt: "Male",
    icon: <ManIcon className="icon" />,
  },
  {
    txt: "Female",
    icon: <WomanIcon className="icon" />,
  },
  {
    txt: "For Kids",
    icon: <BoyIcon className="icon" />,
  },
];

const colors = [
  "white",
  "#e6eae9",
  "#ffbd11",
  "#df631d",
  "#e3301c",
  "#974e9f",
  "#374ac0",
  "#34a8e3",
  "#59ae2c",
  "#82613e",
  "#57565c",
  "black",
];

function ProdPage() {
  const css = useStyles();
  const [prix, setPeix] = useState([20, 3000]);

  const handleChange = (event, newValue) => {
    setPeix(newValue);
  };

  const valuetext = (value) => {
    return `${value} DT`;
  };

  return (
    <div className={css.main}>
      <section className="filter">
        <header className="filter-header">
          <h3>Filter</h3>
          <div className="icon-container">
            <LoopIcon />
          </div>
        </header>
        <div className="filter-body">
          <div className="categories">
            <h4>Categories</h4>
            {tags.map((item, key) => {
              return (
                <p className="Categ-container" key={key}>
                  <span className="Categ">
                    {item.icon} {item.txt}
                  </span>
                  <span>{item.dispo}</span>
                </p>
              );
            })}
          </div>
          <div className="categories">
            <h4>By Clinet type</h4>
            {checks.map((item, key) => {
              return (
                <p className="Categ-container" key={key}>
                  <span className="Categ">
                    {item.icon} {item.txt}
                  </span>
                  <span>
                    <Checkbox />
                  </span>
                </p>
              );
            })}
          </div>
          <div className="Price">
            <h4>Price</h4>
            <div className="inputs">
              <input type="text" value={"Min :" + prix[0]} placeholder="Min" />
              <input type="text" value={"Max :" + prix[1]} placeholder="Max" />
            </div>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={prix}
              min={20}
              max={3000}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </div>
          <div className="Colors">
            <h4>Colors</h4>
            <div className="colors">
              {colors.map((color, key) => {
                return <div key={key} style={{ backgroundColor: color }} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <header className="products-header">
          <div className="cell c1">
            <p>Veniam Cumque XI</p>
          </div>
          <div className="cell c2">
            <p>Veniam Cumque XII</p>
          </div>
          <div className="cell c3">
            <div className="icon-container">
              <AppsIcon />
            </div>
            <div className="icon-container">
              <FormatListBulletedIcon />
            </div>
            <p>
              Matches <span>3</span>
            </p>
          </div>
        </header>
        <div className="all-products">
          <div className="product-container">
            <GridCard />
          </div>
          <div className="product-container">
            <GridCard />
          </div>
          <div className="product-container end-container ">
            <GridCard />
          </div>
          <div className="product-container">
            <GridCard />
          </div>
          <div className="product-container">
            <GridCard />
          </div>
          <div className="product-container end-container ">
            <GridCard />
          </div>
          <div className="product-container">
            <GridCard />
          </div>
          <div className="product-container">
            <GridCard />
          </div>
          <div className="product-container end-container ">
            <GridCard />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProdPage;
