import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { mainListItems, secondaryListItems, topBar } from "./listItems";
import Orders from "./Orders";
import ContContainer from "./DashElements/ContContainer";
import NavBar from "./DashElements/NavBar";
import AppBar from "./DashElements/AppBar";

import { Routes, Route, Navigate } from "react-router-dom";
import { routes, subroutes } from "../../routes/Main.routes";

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar open={open} toggleDrawer={toggleDrawer} />
      <NavBar
        open={open}
        toggleDrawer={toggleDrawer}
        main={mainListItems}
        secondary={secondaryListItems}
        topBar={topBar}
      />
      <ContContainer>
        <Routes>
          {[...routes, ...subroutes].map((elem, key) => {
            return <Route key={key} path={elem.url} element={elem.compo} />;
          })}
          <Route path="/" element={<Navigate to="/dashboard/main" />} />
        </Routes>
      </ContContainer>
    </Box>
  );
}

export default DashboardContent;
