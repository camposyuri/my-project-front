import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import {
  DirectionsCar as DirectionsCarIcon,
  Home as HomeIcon,
  ListAlt as ListAltIcon,
  People as PeopleIcon,
} from "@material-ui/icons";

import { useHistory } from "react-router";

const Page = () => {
  const history = useHistory();

  return (
    <>
      <ListItem button onClick={(e) => history.push("/")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={(e) => history.push("/order")}>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Pedido" />
      </ListItem>
      <ListItem button onClick={(e) => history.push("/customer")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Cliente" />
      </ListItem>
      <ListItem button onClick={(e) => history.push("/auto")}>
        <ListItemIcon>
          <DirectionsCarIcon />
        </ListItemIcon>
        <ListItemText primary="Veículo" />
      </ListItem>
    </>
  );
};

export default Page;
