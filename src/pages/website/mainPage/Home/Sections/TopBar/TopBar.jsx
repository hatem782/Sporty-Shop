import React, { useState } from "react";
import { useStyles } from "./TopBarStyles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const css = useStyles();
  const [selected, setSelected] = useState("Home");
  const navig = useNavigate();

  const goto = (page) => {
    navig("/website/" + page);
  };

  const handleRouteWebsite = (rt) => {
    setSelected(rt);
    goto(rt);
  };

  return (
    <div>
      <div className={css.Nav1}>
        <div className="prt1">
          <div className="button bl2 br1">Contact-Us</div>
          <div className="button br2 bl1">Be-With-US</div>
        </div>
        <div className="prt2">
          <div className="button bl2 br1">Login Or Register</div>
          <div className="button bl2 br1">
            <FavoriteIcon className="icon" />
          </div>
          <div className="button bl2 br1">
            My Cart <ShoppingBagIcon className="icon" />
          </div>
        </div>
      </div>
      <div className={css.Nav2}>
        <div className="prt1">
          <div className="logo">S S</div>
        </div>
        <div className="prt2">
          {links.map((rt, key) => {
            return (
              <div
                key={key}
                onClick={() => {
                  handleRouteWebsite(rt);
                }}
                className={`link  ${rt === selected ? "active" : ""}`}
              >
                {rt}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const links = ["Home", "Products", "Services", "Gallery", "Sponsores"];

export default TopBar;
