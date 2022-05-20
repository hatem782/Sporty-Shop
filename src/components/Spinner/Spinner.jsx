import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      transform: "scale(2)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export default function CircularIndeterminate() {
  const css = useStyles();
  return (
    <Box className={css.main}>
      <div>
        <CircularProgress />
      </div>
    </Box>
  );
}
