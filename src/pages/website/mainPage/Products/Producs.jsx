import React from "react";
import { useStyles } from "./ProductsStyles";
import Footer from "../Home/Sections/Footer/Footer";
import ProdPage from "./Sections/ProdPage";

function Products() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <ProdPage />
      <Footer />
    </div>
  );
}

export default Products;
