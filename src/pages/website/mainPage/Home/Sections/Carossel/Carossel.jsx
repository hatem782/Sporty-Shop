import React, { useState, useEffect } from "react";
import { useStyles } from "./CarosselStyles";
import img1 from "../../../../../../Assets/images/Static/BG_Carossel1.png";
import img2 from "../../../../../../Assets/images/Static/BG_Carossel2.png";
import img3 from "../../../../../../Assets/images/Static/BG_Carossel3.png";

import equipment1 from "../../../../../../Assets/images/Dynamic/equipment/Dumbbell.png";
import equipment2 from "../../../../../../Assets/images/Dynamic/equipment/bike.png";
import equipment3 from "../../../../../../Assets/images/Dynamic/equipment/barbellsbig.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CheckIcon from "@mui/icons-material/Check";
import {
  BlackButton,
  WhiteButton,
} from "../../../../../../components/Buttons/WebsiteButtons";

function Carossel() {
  const css = useStyles();
  const [item, setItem] = useState(items[0]);
  const [pos, setPos] = useState(0);

  const next = () => {
    if (items.length - 1 > pos) {
      setItem(items[pos + 1]);
      setPos(pos + 1);
    }
  };
  const prev = () => {
    if (0 < pos) {
      setItem(items[pos - 1]);
      setPos(pos - 1);
    }
  };

  useEffect(() => {
    setItem(items[pos]);
  }, []);

  return (
    <div>
      <div
        className={css.main}
        style={{ backgroundImage: `url(${item.bgImg})` }}
      >
        <div className="container">
          <div className="arrow " onClick={prev}>
            <ArrowRightAltIcon style={{ transform: "scale(-1)" }} />
          </div>
          <div className="product">
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
            <img className="prodImg" src={item.img} />
          </div>
          <div className="arrow" onClick={next}>
            <ArrowRightAltIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

//Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo non excepturi dolorem! Dignissimos explicabo consectetur corrupti ipsam incidunt possimus temporibus minus itaque soluta praesentium excepturi, quis enim beatae laboriosam reprehenderit!

const items = [
  {
    title: "Encased Hex Dumbbell",
    img: equipment1,
    bgImg: img1,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Accusamus error maiores at commodi voluptate deleniti molestiae
  dolor beatae consequatur.`,
    op1: "Tempore recusandae",
    op2: "Voluptate deleniti",
    op3: "Consectetur adipisicing",
    prix: "50DT",
  },
  {
    title: "Vortec V1000 Spin Bike",
    img: equipment2,
    bgImg: img2,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Accusamus error maiores at commodi voluptate deleniti molestiae
  dolor beatae consequatur.`,
    op1: "Tempore recusandae",
    op2: "Voluptate deleniti",
    op3: "Consectetur adipisicing",
    prix: "750DT",
  },
  {
    title: "Pack of 3 BareBells",
    img: equipment3,
    bgImg: img3,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Accusamus error maiores at commodi voluptate deleniti molestiae
  dolor beatae consequatur.`,
    op1: "Tempore recusandae",
    op2: "Voluptate deleniti",
    op3: "Consectetur adipisicing",
    prix: "250DT",
  },
];

export default Carossel;
