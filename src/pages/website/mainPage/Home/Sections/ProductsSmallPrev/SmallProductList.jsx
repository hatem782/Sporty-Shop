import React from "react";
import SmallProductSprot from "../../../../../../components/Cards/SmallProductSprot";
import { useStyles } from "./Styles";

function SmallProductList() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <div className="list">
        <h3>HOT SALE</h3>
        <div className="devider"></div>
        <SmallProductSprot />
        <SmallProductSprot />
        <SmallProductSprot />
      </div>

      <div className="list">
        <h3>TOP RATED</h3>
        <div className="devider"></div>
        <SmallProductSprot />
        <SmallProductSprot />
        <SmallProductSprot />
      </div>

      <div className="list">
        <h3>POPULAR</h3>
        <div className="devider"></div>
        <SmallProductSprot />
        <SmallProductSprot />
        <SmallProductSprot />
      </div>

      <div className="list">
        <h3>BEST CHOICE</h3>
        <div className="devider"></div>
        <SmallProductSprot />
        <SmallProductSprot />
        <SmallProductSprot />
      </div>
    </div>
  );
}

export default SmallProductList;
