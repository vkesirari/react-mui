import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
class TopAppBar extends Component {
  redirectToHome = () => {
    // console.log("clickkked");
    const { history } = this.props;
    if (history) history.push("/home");
  };
  state = {};
  render() {
    // const { match, location, history } = this.props;
    // console.log(history);
    console.log("state", this.props);
    const { updateStatus } = this.props;

    return (
      <AppBar>
        {/* <AppBar position="static"> */}
        <Toolbar>
          <Grid container>
            <Grid item xs={4} style={{ textAlign: "left" }}>
              {/* <div>You are now at {location.pathname}</div> */}
              <Button color="inherit" onClick={this.redirectToHome}>
                <ArrowBackIosIcon />
              </Button>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "center" }}>
              <Typography>{updateStatus ? updateStatus : "Home"}</Typography>
            </Grid>
            <Grid item xs={4} style={{ textAlign: "right" }}>
              <NotificationsIcon />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}
// style={{
//   width: "100%",
//   position: "fixed",
//   bottom: 0,
//   backgroundColor: "#3f51b5",
// }}
export default withRouter(TopAppBar);
