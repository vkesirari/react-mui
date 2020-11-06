import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InfoIcon from "@material-ui/icons/Info";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
class Menu extends Component {
  state = {
    menus: [
      {
        id: 1,
        name: "About",
        icon: <InfoIcon />,
        slug: "menu/about",
      },
      {
        id: 2,
        name: "Tutorial",
        icon: <InfoIcon />,
        slug: "menu/tutorial",
      },
      {
        id: 3,
        name: "FAQ",
        icon: <LiveHelpIcon />,
        slug: "menu/faq",
      },
      {
        id: 5,
        name: "Terms of Service",
        icon: <LiveHelpIcon />,
        slug: "menu/terms",
      },
      {
        id: 6,
        name: "Privacy Policy",
        icon: <InfoIcon />,
        slug: "menu/privacy",
      },
    ],
  };
  render() {
    // const { menus } = this.state;
    // console.log("menus", menus);
    return (
      <div>
        <List component="nav" aria-label="contacts">
          {this.state.menus.map((menu) => (
            <ListItem
              button
              key={menu.id}
              component={Link}
              to={menu.slug}
              style={{ padding: 20, backgroundColor: "white" }}
            >
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.name} />
              <ArrowForwardIosIcon />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Menu;
