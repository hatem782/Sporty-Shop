import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    outline: "none",
    border: "none",
    padding: "12px 26px",
    borderRadius: "500px",
    fontWeight: "700",
    margin: "10px",
    cursor: "pointer",
  },
  white: {
    backgroundColor: "white",
    color: "black",
  },
  black: {
    backgroundColor: "black",
    color: "white",
  },
  green: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

export const WhiteButton = ({ children }) => {
  const css = useStyles();

  return <button className={` ${css.button} ${css.white} `}>{children}</button>;
};

export const BlackButton = ({ children }) => {
  const css = useStyles();

  return <button className={` ${css.button} ${css.black} `}>{children}</button>;
};

export const GreenButton = ({ children }) => {
  const css = useStyles();

  return <button className={` ${css.button} ${css.green} `}>{children}</button>;
};
