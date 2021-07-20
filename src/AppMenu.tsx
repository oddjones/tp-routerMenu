import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import AppMenuItem from "./AppMenuItem";

const appMenuItems = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Membership",
    items: [
      { name: "Membership information", link: "/members/info" },
      {
        name: "Application Form",
        link: "/members/application"
      },
      { name: "Renew", link: "/members/renew" },
      { name: "Request Cetificates", link: "/members/requestcerts" },
      { name: "Resignation", link: "/members/resign" }
    ]
  },
  {
    name: "Invoices & Payments",
    items: [
      {
        name: "Invoice / Refund",
        link: "invoices/invoice"
      },
      {
        name: "Receipt",
        link: "invices/receipt"
      }
    ]
  },
  {
    name: "Events",
    link: "/events"
  },
  {
    name: "CPD",
    link: "/CPD"
  }
];

const drawerWidth = "auto";

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: "100%",
      paddingLeft: "0px"
    },
    navList: {
      width: drawerWidth
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
        height: "100vh"
      }
    },
    menuItem: {
      width: drawerWidth
    },
    menuItemIcon: {
      color: "#97c05c"
    }
  })
);

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu}>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

export default AppMenu;
