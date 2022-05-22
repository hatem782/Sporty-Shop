import React from "react";
import { useStyles } from "./HomeStyles";
import Carossel from "./Sections/Carossel/Carossel";
import PopularCategs from "./Sections/PopularCategs/Popular";
import OurServices from "./Sections/OurServices/OurServices";
import BestProducts from "./Sections/BestProducts/BestProducts";
import ExempleProd from "./Sections/ExempleProduct/ExempleProd";
import SmallProductList from "./Sections/ProductsSmallPrev/SmallProductList";

function Home() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <Carossel />
      <PopularCategs />
      <OurServices />
      <BestProducts />
      <ExempleProd />
      <SmallProductList />
    </div>
  );
}

export default Home;
