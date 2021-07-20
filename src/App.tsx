import React from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import AppMenu from "./AppMenu";

const drawerWidth = "335px";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    color: "#373737",
    backgroundColor: "#E4E9EF"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    paddingTop: "4rem"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  navList: {
    width: "100%",
    maxWidth: 360
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: "#E4E9EF"
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,

  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0
  }
}));

const PageHome = () => (
  <Typography variant="h3" component="h1">
    Home page
  </Typography>
);
const PageMembershipInfo = () => (
  <Typography variant="h3" component="h1">
    Membership Information
  </Typography>
);
const PageAppForm = () => (
  <Typography variant="h3" component="h1">
    Application Form
  </Typography>
);
const PageRenew = () => (
  <Typography variant="h3" component="h1">
    Renew Membership
  </Typography>
);

const PageRequestCerts = () => (
  <Typography variant="h3" component="h1">
    Request Certificates
  </Typography>
);

const PageResign = () => (
  <Typography variant="h3" component="h1">
    Resign Membership
  </Typography>
);

const App: React.FC = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <BrowserRouter>
      <div className={clsx("App", classes.root)}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Router Menu
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
              <AppMenu />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
            >
              <div className={classes.toolbar} />
              <AppMenu />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route path="/" exact component={PageHome} />
              <Route path="/members/info" component={PageMembershipInfo} />
              <Route path="/members/application" component={PageAppForm} />
              <Route path="/members/renew" component={PageRenew} />
              <Route
                path="/members/requestcerts"
                component={PageRequestCerts}
              />
              <Route path="/members/resign" component={PageResign} />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
