import React from "react";
import { useStyles } from "./ProductsStyles";
import ProdPage from "./Sections/ProdPage";

function Products() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <ProdPage />
    </div>
  );
}

export default Products;
