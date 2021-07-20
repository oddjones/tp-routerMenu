import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

function TPAppBar({ menuToggle }) {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={props.menuToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default TPAppBar;
