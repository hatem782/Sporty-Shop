import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import NavLink from "../../components/NavLink/NavLink";

import { routes, subroutes } from "../../routes/Main.routes";

export const topBar = (
  <div style={{ width: "100%" }}>
    <ListItem>
      <ListItemText
        style={{ textAlign: "center", color: "#1976d2" }}
        primary="Palestine Forum"
      />
    </ListItem>
  </div>
);

export const mainListItems = (
  <div>
    <ListSubheader inset>Main Content</ListSubheader>

    {routes.map((element, key) => {
      return (
        <NavLink key={key} to={element.mainUrl + element.url}>
          <ListItem button>
            <ListItemIcon>{element.icon}</ListItemIcon>
            <ListItemText primary={element.title} />
          </ListItem>
        </NavLink>
      );
    })}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Sub Content</ListSubheader>
    {subroutes.map((element, key) => {
      return (
        <NavLink key={key} to={element.mainUrl + element.url}>
          <ListItem button>
            <ListItemIcon>{element.icon}</ListItemIcon>
            <ListItemText primary={element.title} />
          </ListItem>
        </NavLink>
      );
    })}
  </div>
);
