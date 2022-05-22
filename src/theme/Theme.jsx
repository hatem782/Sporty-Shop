// #1976D2 blue
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#0edcb5",
      contrastText: "#fff",
    },
  },
});

const Theme = (props) => {
  const { /*theme,*/ children } = props;

  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default Theme;
