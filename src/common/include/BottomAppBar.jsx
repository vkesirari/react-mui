import React, { Component } from "react";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
class BottomAppBar extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {/* <AppBar
          position="fixed"
          color="primary"
          style={{ top: "auto", bottom: 0 }}
        >
          <Toolbar> */}
        {/* <Grid container>
            <Grid item xs={12} ></Grid>
            /</Grid> */}
        <BottomNavigation
        // color="primary"
        // syle={{ width: 500, color: "rgb(238, 47, 76)" }}
        >
          <BottomNavigationAction
            component={Link}
            to="/home"
            // onClick={this.handleClickLink}
            label="Home"
            onClick={() => this.props.onUp("Home")}
            value="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/login"
            value="My ticket"
            onClick={() => this.props.onUp("Login")}
            label="My ticket"
            icon={<ConfirmationNumberIcon />}
          />
          <BottomNavigationAction
            label="Me"
            component={Link}
            value="Me"
            onClick={() => this.props.onUp("Login")}
            to="/login"
            icon={<PermIdentityIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/menu"
            value="Menu"
            onClick={() => this.props.onUp("Info")}
            label="Menu"
            icon={<MenuIcon />}
          />
        </BottomNavigation>
        {/* </Toolbar>
        </AppBar> */}
      </React.Fragment>
    );
  }
}

export default BottomAppBar;
