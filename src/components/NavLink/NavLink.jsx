import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)",
  },
}));

function NavLinkEdited(props) {
  const cs = useStyles();
  return (
    <NavLink to={props.to} className={cs.main}>
      {props.children}
    </NavLink>
  );
}

export default NavLinkEdited;
