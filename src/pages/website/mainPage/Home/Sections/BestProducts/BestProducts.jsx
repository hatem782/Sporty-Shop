import React from "react";
import { useStyles } from "./BestProductsStyles";
import ProductSport from "../../../../../../components/Cards/ProductSport";
import { GreenButton } from "../../../../../../components/Buttons/WebsiteButtons";

function BestProducts() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <h1>ONLY BEST PRODUCTS</h1>
      <div className="devider" />
      <div className="products">
        <ProductSport />
        <ProductSport />
        <ProductSport />
        <ProductSport />
        <ProductSport />
        <ProductSport />
        <ProductSport />
        <ProductSport />
      </div>
      <GreenButton>View All Products</GreenButton>
    </div>
  );
}

export default BestProducts;
