import React, { useState } from "react";
import { useStyles } from "./ProductStyles";
import img1 from "../../../../Assets/images/Static/golf.png";
import equipment1 from "../../../../Assets/images/Dynamic/equipment/golf/1.png";
import equipment2 from "../../../../Assets/images/Dynamic/equipment/golf/2.png";
import equipment3 from "../../../../Assets/images/Dynamic/equipment/golf/3.png";
import equipment4 from "../../../../Assets/images/Dynamic/equipment/golf/4.png";
import equipment5 from "../../../../Assets/images/Dynamic/equipment/golf/5.png";

import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import {
  BlackButton,
  WhiteButton,
} from "../../../../components/Buttons/WebsiteButtons";

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

const colors = ["#EF2E32", "#3A393B", "#696867", "#F1F1F1"];
const sizes = ["3 ", "4", "5", "6", "8"];

function Product() {
  const css = useStyles();
  const [prev, setPrev] = useState(0);

  return (
    <div className={css.main}>
      <div className="product">
        <div className="description">
          <h1 className="title">{item.title}</h1>
          <div className="part1">
            <div className="rates">
              {rates(3).map((val) => {
                return val === 0 ? (
                  <StarBorderIcon className="icon" />
                ) : (
                  <StarIcon className="icon" />
                );
              })}
            </div>
            <p>15 Items Left</p>
          </div>

          <table>
            <tbody>
              <tr>
                <td>
                  <p> Colorls :</p>
                  <div className="colors">
                    {colors.map((color, key) => {
                      return (
                        <div key={key} style={{ backgroundColor: color }} />
                      );
                    })}
                  </div>
                </td>
                <td style={{ padding: "0px 0px 0px 30px" }}>
                  <p> Sizes :</p>
                  <div className="sizes">
                    {sizes.map((size, key) => {
                      return <p key={key}>{size} </p>;
                    })}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="colors"></div>
                </td>
                <td>
                  <div className="sizes"></div>
                </td>
              </tr>
            </tbody>
          </table>

          <p>{item.description}</p>

          <div className="buttons">
            <p>Price : {item.prix}</p> <br />
            <div className="how-many">
              <span className="op">-</span>
              <span>2</span>
              <span className="op">+</span>
            </div>
            <BlackButton>BUY THIS PRODUCT</BlackButton>
          </div>
        </div>

        <img className="prodImg" src={item.img[prev]} />

        <div className="previews">
          {item.img.map((img, key) => {
            return (
              <div
                onClick={() => {
                  setPrev(key);
                }}
                className={` img ${prev === key ? "selected" : ""}`}
              >
                <img src={img} key={key} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const item = {
  title: "SLAZENGER V300 Golf Set",

  img: [equipment1, equipment2, equipment3, equipment4, equipment5],
  bgImg: img1,
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Accusamus error maiores at commodi voluptate deleniti molestiae
  dolor beatae consequatur.`,
  prix: "300DT",
};

export default Product;
