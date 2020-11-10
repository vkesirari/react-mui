import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import HomeSub1 from "./../common/HomeSub1";
import HomeSub2 from "./../common/HomeSub2";

class Cricket extends Component {
  state = {
    modelCall: <HomeSub1 />,
    colorSet1: "#e57b2f",
    colorSet2: "#f3f3f3",
  };
  handleClick = (name) => {
    console.log("click", name);
    if (name === "live") {
      const modelCall = <HomeSub1 />;
      const colorSet1 = "#e57b2f";
      const colorSet2 = "#f3f3f3";
      this.setState({ modelCall, colorSet1, colorSet2 });
    } else {
      const modelCall = <HomeSub2 />;
      const colorSet2 = "#e57b2f";
      const colorSet1 = "#f3f3f3";
      this.setState({ modelCall, colorSet2, colorSet1 });
    }
  };
  render() {
    const { colorSet1, colorSet2, modelCall } = this.state;
    return (
      <React.Fragment>
        <Grid container style={{ padding: 8 }}>
          <Grid
            item
            xs={6}
            style={{
              backgroundColor: `${colorSet1}`,
            }}
          >
            <Button
              style={{ height: 55 }}
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => this.handleClick("live")}
            >
              LIVE
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              backgroundColor: `${colorSet2}`,
            }}
          >
            <Button
              type="submit"
              style={{ height: 55 }}
              fullWidth
              variant="contained"
              onClick={() => this.handleClick("play")}
            >
              PLAY
            </Button>
          </Grid>
          {modelCall}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Cricket;
