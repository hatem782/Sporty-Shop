import React from "react";
import { useStyles } from "./CarosselStyles";

function Carossel() {
  const css = useStyles();

  return (
    <div>
      <div className={css.main}></div>
    </div>
  );
}

export default Carossel;
