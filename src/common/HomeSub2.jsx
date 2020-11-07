import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
class HomeSub2 extends Component {
  state = {};
  render() {
    return (
      // <div style={{ textAlign: "center", padding: 20 }}>
      <Grid xs={12} container style={{ padding: 20 }}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Typography variant="caption">
            There are no upcoming matches as of now
          </Typography>
          {/* <img
            style={{ textAlign: "center" }}
            src="/Player232.png"
            style={{ height: 175 }}
          /> */}
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      // </div>
    );
  }
}

export default HomeSub2;
