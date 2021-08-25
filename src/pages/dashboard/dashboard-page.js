import React, { useState } from "react";
import clsx from "clsx";
import useStyles from "./dashboard-page.pstl";
import {
  AppBar,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

const Page = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuItem />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={4} color="secondary">
                <NotificationsIcon></NotificationsIcon>
              </Badge> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Page;
