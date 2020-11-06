import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
class ButtonSection extends Component {
  state = {};
  render() {
    const { linkAc } = this.props;
    // let color = "#e57b2f";
    // let color = "#f3f3f3";
    //   linkAc === "/home" || linkAc === "/home/c" ? "#e57b2f" : "#f3f3f3";
    // console.log(linkAc);
    // if (linkAc === "/home" || linkAc === "/home/c") {
    //   color = "#e57b2f";
    // }

    // else if (linkAc === "/home/q") {
    //   color = "#e57b2f";
    // } else if (linkAc === "/home/f") {
    //   color = "#e57b2f";
    // }
    // console.log("tseting", color);
    // let vc = "backgroundColor" + ":" + "#e57b2f";
    // console.log("first", vc);
    // return false;
    return (
      <Grid container style={{ padding: 8 }}>
        <Grid
          item
          xs={4}
          height="50%"
          style={{
            backgroundColor: `${
              linkAc === "/home" || linkAc === "/home/c" ? "#e57b2f" : "#6881a0"
            }`,
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/home/c">
            <Button
              type="submit"
              // style={{ height: 30 }}
              fullWidth
              variant="contained"
              // color="e57b2f"
              //   className=""
            >
              CRICKET
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: `${linkAc === "/home/q" ? "#e57b2f" : "#6881a0"}`,
          }}
        >
          {/* <Grid item xs={4} style={`backgroundColor : ${ this.props.linkAc === "/home/q" ? "#e57b2f" : "transparent" }  }`> */}

          <Link style={{ textDecoration: "none" }} to="/home/q">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // color="primary"
              className=""
            >
              QUIZ
            </Button>
          </Link>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: `${linkAc === "/home/f" ? "#e57b2f" : "#6881a0"}`,
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/home/f">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // color="ed654b"
              className=""
            >
              FOOTBAL
            </Button>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default ButtonSection;
