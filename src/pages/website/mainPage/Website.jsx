import React from "react";
import { useStyles } from "./WebsiteStyles";
import Theme from "../../../theme/Theme";
import Home from "./Home/Home";
import Producs from "./Products/Producs";
import Footer from "./Home/Sections/Footer/Footer";

import { Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./Home/Sections/TopBar/TopBar";
import Product from "./Product/Product";

function Website() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <Theme>
        <TopBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Producs />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
        <Footer />
      </Theme>
    </div>
  );
}

export default Website;
