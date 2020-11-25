import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  //   paper: {
  //     padding: theme.spacing(2),
  //     margin: "auto",
  //     maxWidth: 500,
  //   },
  //   image: {
  //     width: 128,
  //     height: 128,
  //   },
  //   img: {
  //     margin: "auto",
  //     display: "block",
  //     maxWidth: "100%",
  //     maxHeight: "100%",
  //   },

  barcodeImg: {
    transform: "rotate(270deg)",
    width: "300px",
    marginTop: "124px",
    marginLeft: " -120px",
    height: "62px",
  },
});
class Ticket extends Component {
  state = { ticketQst: "" };
  render() {
    const { classes, ticketQst } = this.props;
    // let qq = this.props.ticketQst;
    // this.setState({ ticketQst: qq });

    // console.log("Qstn----", this.state.ticketQst);
    return (
      <React.Fragment>
        <div
          // className="tt"
          style={{
            width: "100%",
            //  padding: 5
          }}
        >
          {/* <Paper className={classes.paper}> */}
          <Grid container>
            <Grid item xs={2} container style={{ backgroundColor: "#f5f2f2" }}>
              <Grid item className="imgSet">
                <img
                  style={{ transform: "rotate(90deg)" }}
                  src="/barcode.png"
                  alt=""
                  className={classes.barcodeImg}
                />
              </Grid>
            </Grid>
            <Grid item xs={10} container>
              <Grid item xs={12} container direction="row">
                <Grid
                  item
                  xs={12}
                  style={{
                    backgroundColor: "rgb(128 0 128)",
                    height: "50px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="title"
                    className="l4"
                    style={{ color: "white" }}
                    noWrap
                  >
                    {ticketQst}
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  container
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    backgroundColor: "#f5f2f2",
                  }}
                >
                  <Grid container style={{ textAlign: "center" }}>
                    <Grid item xs={4}>
                      <img src="/mi.png" style={{ width: 100, height: 100 }} />
                    </Grid>
                    <Grid item xs={4} style={{ padding: 40, color: "black" }}>
                      <Typography variant="h5">v/s</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <img src="/dd.png" style={{ width: 100, height: 100 }} />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} container>
                    <Grid
                      item
                      xs={12}
                      container
                      style={{
                        backgroundColor: "lightblue",
                        marginBottom: 5,
                        paddingLeft: 5,
                      }}
                    >
                      <Grid item xs={12} container>
                        <Grid
                          item
                          xs={6}
                          style={
                            {
                              // backgroundColor: "rgb(128 0 128)",
                              // height: "40px",
                            }
                          }
                        >
                          <Typography gutterBottom variant="subtitle1">
                            Zone
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={
                            {
                              // backgroundColor: "rgb(128 0 128)",
                              // height: "40px",
                            }
                          }
                        >
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            style={{ wordWrap: "break-word" }}
                          >
                            : East Stand
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      container
                      style={{
                        backgroundColor: "#5dbddd",
                        marginBottom: 5,
                        paddingLeft: 5,
                      }}
                    >
                      <Grid item xs={12} container>
                        <Grid
                          item
                          xs={6}
                          style={
                            {
                              // backgroundColor: "rgb(128 0 128)",
                              // height: "40px",
                            }
                          }
                        >
                          <Typography gutterBottom variant="subtitle1">
                            Seat/Row
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={
                            {
                              // backgroundColor: "rgb(128 0 128)",
                              // height: "40px",
                            }
                          }
                        >
                          <Typography gutterBottom variant="subtitle1">
                            : 4/5
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      container
                      style={{
                        backgroundColor: "lightblue",
                        marginBottom: 5,
                        paddingLeft: 5,
                      }}
                    >
                      <Grid item xs={12} container>
                        <Grid
                          item
                          xs={6}
                          style={
                            {
                              // backgroundColor: "rgb(128 0 128)",
                              // height: "40px",
                            }
                          }
                        >
                          <Typography gutterBottom variant="subtitle1">
                            Price
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={6}
                          style={
                            {
                              // backgroundColor: "rgb(128 0 128)",
                              // height: "40px",
                            }
                          }
                        >
                          <Typography gutterBottom variant="subtitle1">
                            : $100
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{ height: "25px", backgroundColor: "rgb(255 165 0)" }}
                >
                  {/* <Typography gutterBottom variant="subtitle1">
                    Label 2
                  </Typography> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Paper> */}
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Ticket);

// <div style={{display:"flex"}}>
//   <Typography variant="title" color="inherit" noWrap>
//      Project:
//   </Typography>
//   <Typography variant="subheading" color="inherit" noWrap>
//        Example
//   </Typography>
// </div>
