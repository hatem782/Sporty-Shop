import React from "react";
import { useStyles } from "./WebsiteStyles";
import Theme from "../../../theme/Theme";
import Home from "./Home/Home";

function Website() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <Theme>
        <Home />
      </Theme>
    </div>
  );
}

export default Website;
