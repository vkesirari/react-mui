import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class SelectSection extends Component {
  state = {};
  render() {
    const { linkAc } = this.props;

    return (
      <Grid
        container
        style={{ textAlign: "center", paddingTop: 10 }}
        className="gridA"
      >
        <Grid item xs={4}>
          <Typography
            variant="caption"
            className="oneTwo"
            style={{
              color: `${linkAc === "/home/c" ? "salmon" : "white"}`,
            }}
          >
            <li className="one">1</li>
            SELECT MATCH
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption" className="oneTwo">
            <li className="one">2</li>CREATE TICKET
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption" className="oneTwo">
            <li className="one">3</li>JOIN CONTEST
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default SelectSection;
