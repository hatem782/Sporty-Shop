import React from "react";
import { makeStyles } from "@mui/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export const useStyles = makeStyles((theme) => ({
  numbDisplay: {
    //width:"100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      boxShadow: `
      rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px`,
    },

    "& *": {
      color: "white",
    },

    "& .data-container": {
      width: "80%",
      "& h1,h2": {
        margin: "0px",
      },
      "& h1": {
        fontSize: "20px",
      },
      "& h2": {
        fontSize: "16px",
      },
    },

    "& .icon-container": {
      width: "20%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& *": {
        fontSize: "50px",
      },
    },
  },
}));

function NumbDisplay({ color = "#1976D2", icon, title, value }) {
  const css = useStyles();
  return (
    <Grid item lg={3} md={6} sm={6} xs={12}>
      <Paper
        style={{ backgroundColor: color }}
        className={css.numbDisplay}
        sx={{ p: 2 }}
      >
        <div className="data-container">
          <h2>{title}</h2>
          <h1>{value}</h1>
        </div>
        <div className="icon-container">{icon}</div>
      </Paper>
    </Grid>
  );
}

export default NumbDisplay;
