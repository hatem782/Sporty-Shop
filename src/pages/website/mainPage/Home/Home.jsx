import React from "react";
import TopBar from "./Sections/TopBar/TopBar";
import { useStyles } from "./HomeStyles";
import Carossel from "./Sections/Carossel/Carossel";
import PopularCategs from "./Sections/PopularCategs/Popular";
import OurServices from "./Sections/OurServices/OurServices";
import BestProducts from "./Sections/BestProducts/BestProducts";
import ExempleProd from "./Sections/ExempleProduct/ExempleProd";
import SmallProductList from "./Sections/ProductsSmallPrev/SmallProductList";
import Footer from "./Sections/Footer/Footer";

function Home() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <TopBar />
      <Carossel />
      <PopularCategs />
      <OurServices />
      <BestProducts />
      <ExempleProd />
      <SmallProductList />
      <Footer />
    </div>
  );
}

export default Home;
