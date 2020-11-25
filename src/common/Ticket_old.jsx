import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
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
          <Grid
            container

            //  style={{ width: "50%" }}
          >
            {/* col1 for row */}
            <Grid item xs={2} container style={{ backgroundColor: "#f5f2f2" }}>
              {/* <Typography>BarCode</Typography> */}
              {/* <Card> */}
              {/* <CardContent></CardContent> */}
              <Grid item className="imgSet">
                <img
                  style={{ transform: "rotate(90deg)" }}
                  src="/barcode.png"
                  alt=""
                  className={classes.barcodeImg}
                />
              </Grid>

              {/* </Card> */}
            </Grid>
            {/* col2 for other stuff */}
            <Grid
              item
              xs={10}
              container
              // style={{ backgroundColor: "grey" }}
            >
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
                  {/* <Grid
                    item
                    xs={12}
                    container
                    direction="row"
                    style={{ textAlign: "center" }}
                  > */}
                  {/* <Grid
                      item
                      xs={6}
                      style={{
                        backgroundColor: "rgb(255 165 0)",
                        height: "50px",
                      }}
                    ></Grid> */}
                  {/* <Grid
                      item
                      xs={6}
                      // style={{ backgroundColor: "rgb(128 0 128)", height: "40px" }}
                    > */}
                  {/* <Grid item xs={12} container style={{ height: "50px" }}> */}
                  {/* <Grid
                          item
                          xs={4}
                          // style={{ backgroundColor: "rgb(128 0 128)", height: "40px" }}
                        ></Grid> */}
                  {/* <Grid item xs={12}> */}
                  {/* <Typography gutterBottom variant="subtitle1">
                            TEAM STADIUM
                          </Typography> */}
                  {/* <div style={{ display: "flex" }}> */}
                  {/* <Grid
                          item
                          xs={12}
                          container
                          direction="row"
                          alignItems="center"
                          justify="center"
                        >
                          <Typography
                            // variant="title"
                            className="l4"
                            // style={{ color: "white" }}
                            noWrap
                          >
                            TEAM
                          </Typography>
                        </Grid> */}
                  {/* <Grid
                          item
                          xs={12}
                          container
                          direction="row"
                          alignItems="center"
                          justify="center"
                        >
                          <Typography
                            // variant="title"
                            className="l4"
                            // style={{ color: "white" }}
                            noWrap
                          >
                            STADIUM
                          </Typography>
                        </Grid> */}

                  {/* </div> */}
                  {/* </Grid> */}
                  {/* </Grid> */}
                  {/* </Grid> */}
                  {/* </Grid> */}
                  {/* <Typography gutterBottom variant="subtitle1">
                    Label 1
                  </Typography> */}
                </Grid>

                <Grid item xs={12} container>
                  <Grid
                    item
                    xs={6}
                    container
                    style={{ backgroundColor: "#f5f2f2", paddingLeft: "10px" }}
                  >
                    <Grid item xs={12} container>
                      <Grid
                        item
                        xs={2}
                        container
                        alignItems="center"
                        justify="center"
                      >
                        <Typography gutterBottom className="l5">
                          15
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={5}
                        container
                        alignItems="center"
                        justify="center"
                        // style={{ padding: 2 }}
                      >
                        <Grid
                          item
                          xs={12}
                          container
                          direction="row"
                          alignItems="center"
                          justify="center"
                        >
                          <Typography
                            // variant="title"
                            // className="l4"
                            // style={{ color: "white" }}
                            noWrap
                            className="l7"
                          >
                            August
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          container
                          direction="row"
                          alignItems="center"
                          justify="center"
                        >
                          <Typography
                            // variant="title"
                            // className="l4"
                            // style={{ color: "white" }}
                            noWrap
                            className="l7"
                          >
                            2018
                          </Typography>
                        </Grid>

                        {/* <Typography gutterBottom className="l2">
                          2018
                        </Typography> */}
                      </Grid>
                      <Grid item xs={1} alignItems="center" container>
                        <Typography gutterBottom className="l2">
                          |
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        container
                        alignItems="center"
                        // justify="center"
                      >
                        <Typography gutterBottom className="l6">
                          14.00
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      container
                      //  style={{ height: "120px" }}
                    >
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
                    <Grid item xs={12} container>
                      <Typography
                        gutterBottom
                        // variant="subtitle2"
                        className="l1"
                      >
                        League A
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={6}
                    container
                    style={{ backgroundColor: "#f5f2f2" }}
                  >
                    <Grid item xs={12} container>
                      <Grid
                        item
                        xs={6}

                        //  style={{ backgroundColor: "red" }}
                      >
                        <Typography gutterBottom variant="subtitle1">
                          img
                        </Typography>
                      </Grid>

                      <Grid
                        item
                        xs={6}
                        // style={{ backgroundColor: "pink" }}
                      >
                        {/* <Typography gutterBottom variant="subtitle1">
                          det
                        </Typography> */}
                        <Grid
                          item
                          xs={12}
                          alignItems="center"
                          justify="center"
                          container
                          style={{
                            backgroundColor: "rgb(255 165 0) ",
                            marginTop: "8px",
                          }}
                        >
                          <Typography gutterBottom className="l3">
                            League A
                          </Typography>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          container
                          style={{ height: "160px" }}
                        >
                          {/* <Typography gutterBottom variant="subtitle1">
                            demo
                          </Typography> */}
                          <Grid
                            item
                            xs={12}
                            container
                            alignItems="center"
                            justify="center"
                            style={{ paddingTop: 20 }}
                          >
                            <Typography
                              gutterBottom
                              // variant="subtitle1"
                              className="l2"
                            >
                              Adult
                            </Typography>
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            container
                            style={{ padding: 30 }}
                            // style={{ backgroundColor: "rgb(128 0 128) " }}
                          >
                            <Grid
                              item
                              xs={12}
                              alignItems="center"
                              justify="center"
                              container
                              direction="row"
                            >
                              <Typography className="l2">ADMIT</Typography>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              alignItems="center"
                              justify="center"
                              container
                              direction="row"
                            >
                              <Typography className="l2">ONE</Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          container
                          style={{
                            backgroundColor: "rgb(128 0 128) ",
                            marginBottom: "5px",
                            height: "30px",
                          }}
                        >
                          {/* <Typography gutterBottom variant="subtitle1">
                            LeagueB
                          </Typography> */}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} style={{ height: "25px" }}>
                  <Grid item xs={12} container direction="row">
                    <Grid
                      item
                      xs={6}
                      style={{
                        backgroundColor: "rgb(128 0 128)",
                        height: "25px",
                      }}
                    ></Grid>
                    <Grid
                      item
                      xs={6}
                      style={{
                        backgroundColor: "rgb(255 165 0)",
                        height: "25px",
                      }}
                    ></Grid>
                  </Grid>
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
