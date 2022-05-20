import React, { useState } from "react";
import { useStyles } from "./ExempleProdStyles";
import img1 from "../../../../../../Assets/images/Static/golf.png";
import equipment1 from "../../../../../../Assets/images/Dynamic/equipment/golf/1.png";
import equipment2 from "../../../../../../Assets/images/Dynamic/equipment/golf/2.png";
import equipment3 from "../../../../../../Assets/images/Dynamic/equipment/golf/3.png";
import equipment4 from "../../../../../../Assets/images/Dynamic/equipment/golf/4.png";
import equipment5 from "../../../../../../Assets/images/Dynamic/equipment/golf/5.png";
import CheckIcon from "@mui/icons-material/Check";
import {
  BlackButton,
  WhiteButton,
} from "../../../../../../components/Buttons/WebsiteButtons";

function ExempleProd() {
  const css = useStyles();
  const [prev, setPrev] = useState(0);

  return (
    <div className={css.main} style={{ backgroundImage: `url(${item.bgImg})` }}>
      <div className="product">
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
        <img className="prodImg" src={item.img[prev]} />
        <div className="description">
          <h1 className="title">{item.title}</h1>
          <p>{item.description}</p>
          <p>
            <CheckIcon /> {item.op1}
          </p>
          <p>
            <CheckIcon /> {item.op2}
          </p>
          <p>
            <CheckIcon /> {item.op3}
          </p>
          <div className="buttons">
            <p>At commodi {item.prix}</p> <br />
            <BlackButton>Veiw More</BlackButton>
            <WhiteButton>Add To Cart</WhiteButton>
          </div>
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
  op1: "Tempore recusandae",
  op2: "Voluptate deleniti",
  op3: "Consectetur adipisicing",
  prix: "300DT",
};

export default ExempleProd;
