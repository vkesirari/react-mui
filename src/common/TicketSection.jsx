import Container from "@material-ui/core/Container";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Modal from "@material-ui/core/Modal";
import Ticket from "../common/Ticket";
import Fade from "@material-ui/core/Fade";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
var ReactCSSTransitionGroup = require("react-transition-group");
export default class TicketSection extends Component {
  state = {
    activeStep: -1,
    // setActiveStep: 0,
    steps: [
      "Who Will win the Toss ?",
      "Total Score in first Inning ?",
      "Who will win the Match ?",
      "Total Wicket in first Inning ?",
    ],

    totalTicketPrice: 0,
    totalCountval: 0,
    sCorePrice: 0,
    sCoreCount: 0,
    winPrice: 0,
    winCount: 0,
    tossPrice: 0,
    tossCount: 0,
    wicketPrice: 0,
    wicketCount: 0,

    scoreData: [
      {
        id: 1,
        btn: "sBtn1",
        score: "80-100",
        class: "scoreBtn1",
        sCount: 0,
        bTicket: 0,
      },
      {
        id: 2,
        btn: "sBtn2",
        score: "100-150",
        class: "scoreBtn2",
        sCount: 0,
        bTicket: 0,
      },
      {
        id: 3,
        btn: "sBtn3",
        score: "150-200",
        class: "scoreBtn3",
        sCount: 0,
        bTicket: 0,
      },
      {
        id: 4,
        btn: "sBtn4",
        score: "200+",
        class: "scoreBtn4",
        sCount: 0,
        bTicket: 0,
      },
    ],
    tossData: [
      {
        id: 1,
        btn: "tBtn1",
        score: "Team A",
        class: "tossBtn1",
        sCount: 0,
        bTicket: 0,
      },
      {
        id: 2,
        btn: "tBtn2",
        score: "Team B",
        class: "tossBtn2",
        sCount: 0,
        bTicket: 0,
      },
    ],
    winData: [
      {
        id: 1,
        btn: "wBtn1",
        score: "Team A",
        class: "winBtn1",
        sCount: 0,
        bTicket: 0,
      },
      {
        id: 2,
        btn: "wBtn2",
        score: "Team B",
        class: "winBtn2",
        sCount: 0,
        bTicket: 0,
      },
    ],
    wicketData: [
      {
        id: 1,
        btn: "wktBtn1",
        score: "0-3",
        class: "wktBtn1",
        sCount: 0,
        bTicket: 0,
      },
      {
        id: 2,
        btn: "wktBtn2",
        score: "3-5",
        class: "wktBtn2",
        sCount: 0,
        bTicket: 0,
      },
      {
        id: 3,
        btn: "wktBtn3",
        score: "5-7",
        class: "wktBtn3",
        sCount: 0,
        bTicket: 0,
      },
      {
        id: 4,
        btn: "wktBtn4",
        score: "10",
        class: "wktBtn4",
        sCount: 0,
        bTicket: 0,
      },
    ],
    open: false,
    setOpen: false,
    value: 0,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };

  handleOpen = (index, label) => {
    let currentToggle = this.state.activeStep;
    console.log("clickked", currentToggle, index);
    this.setState({ activeStep: index });
    this.props.onTicket(label);
  };
  handleNext = () => {
    console.log("sss", this.state.activeStep);
    let activeStep = this.state.activeStep + 1;
    this.setState({ activeStep });
  };

  handleBack = () => {
    let activeStep = this.state.activeStep - 1;
    this.setState({ activeStep });
  };

  handleReset = () => {
    this.setState({ activeStep: 0 });
  };
  handleOpenModel = (label) => {
    console.log("label", label);
    // setOpen(true);
    this.setState({ setOpen: true, open: true });
    this.props.onTicket(label);
  };

  handleClose = () => {
    // setOpen(false);
    this.setState({ setOpen: false });
  };
  useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));

  setTossCountInc = (id, count) => {
    const oldData = this.state.tossData;
    const tossData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: ++count, bTicket: count * 100 }
        : oData
    );
    let tossPrice = 0;
    tossData.map((oData) => (tossPrice = tossPrice + oData.bTicket));
    let tossCount = tossPrice / 100;
    this.setState({
      tossData,
      tossPrice,
      tossCount,
    });
  };
  setTossCountDes = (id, count) => {
    const oldData = this.state.tossData;
    const tossData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: count <= 0 ? 0 : --count, bTicket: count * 100 }
        : oData
    );
    let tossPrice = 0;
    tossData.map((oData) => (tossPrice = tossPrice + oData.bTicket));
    let tossCount = tossPrice / 100;
    this.setState({
      tossData,
      tossPrice,
      tossCount,
    });
  };

  handleTossChange = (e, id) => {
    console.log(e.target.value);
    let changeVal = parseInt(e.target.value);
    const oldData = this.state.tossData;
    const tossData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: changeVal, bTicket: changeVal * 100 }
        : oData
    );
    let tossPrice = 0;
    tossData.map((oData) => (tossPrice = tossPrice + oData.bTicket));
    let tossCount = tossPrice / 100;
    this.setState({
      tossData,
      tossPrice,
      tossCount,
    });
  };

  putMultiCountInc = (id, count) => {
    console.log("lets do it", id, count);
    const oldData = this.state.scoreData;
    const scoreData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: ++count, bTicket: count * 100 }
        : oData
    );
    let sCorePrice = 0;
    scoreData.map((oData) => (sCorePrice = sCorePrice + oData.bTicket));
    let sCoreCount = sCorePrice / 100;

    this.setState({
      scoreData,
      sCorePrice,
      sCoreCount,
    });
  };
  putMultiCountDes = (id, count) => {
    const oldData = this.state.scoreData;
    const scoreData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: count <= 0 ? 0 : --count, bTicket: count * 100 }
        : oData
    );
    let sCorePrice = 0;
    scoreData.map((oData) => (sCorePrice = sCorePrice + oData.bTicket));
    let sCoreCount = sCorePrice / 100;

    this.setState({
      scoreData,
      sCorePrice,
      sCoreCount,
    });
  };

  handleMultiChange = (e, id) => {
    console.log(e.target.value);
    let changeVal = parseInt(e.target.value);
    const oldData = this.state.scoreData;
    const scoreData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: changeVal, bTicket: changeVal * 100 }
        : oData
    );
    let sCorePrice = 0;
    scoreData.map((oData) => (sCorePrice = sCorePrice + oData.bTicket));
    let sCoreCount = sCorePrice / 100;

    this.setState({
      scoreData,
      sCorePrice,
      sCoreCount,
    });
  };
  setWinCountInc = (id, count) => {
    const oldData = this.state.winData;
    const winData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: ++count, bTicket: count * 100 }
        : oData
    );
    let winPrice = 0;
    winData.map((oData) => (winPrice = winPrice + oData.bTicket));
    let winCount = winPrice / 100;
    this.setState({
      winData,
      winPrice,
      winCount,
    });
  };
  setWinCountDes = (id, count) => {
    const oldData = this.state.winData;
    const winData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: count <= 0 ? 0 : --count, bTicket: count * 100 }
        : oData
    );
    let winPrice = 0;
    winData.map((oData) => (winPrice = winPrice + oData.bTicket));
    let winCount = winPrice / 100;

    this.setState({
      winData,
      winPrice,
      winCount,
    });
  };

  handleWinChange = (e, id) => {
    console.log(e.target.value);
    let changeVal = parseInt(e.target.value);
    const oldData = this.state.winData;
    const winData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: changeVal, bTicket: changeVal * 100 }
        : oData
    );
    let winPrice = 0;
    winData.map((oData) => (winPrice = winPrice + oData.bTicket));
    let winCount = winPrice / 100;
    this.setState({
      winData,
      winPrice,
      winCount,
    });
  };
  setWicketCountInc = (id, count) => {
    const oldData = this.state.wicketData;
    const wicketData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: ++count, bTicket: count * 100 }
        : oData
    );
    let wicketPrice = 0;
    wicketData.map((oData) => (wicketPrice = wicketPrice + oData.bTicket));
    let wicketCount = wicketPrice / 100;

    this.setState({
      wicketData,
      wicketPrice,
      wicketCount,
    });
  };
  setWicketCountDes = (id, count) => {
    const oldData = this.state.wicketData;
    const wicketData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: count <= 0 ? 0 : --count, bTicket: count * 100 }
        : oData
    );
    let wicketPrice = 0;
    wicketData.map((oData) => (wicketPrice = wicketPrice + oData.bTicket));
    let wicketCount = wicketPrice / 100;

    this.setState({
      wicketData,
      wicketPrice,
      wicketCount,
    });
  };

  handleWicketChange = (e, id) => {
    console.log(e.target.value);
    let changeVal = parseInt(e.target.value);
    const oldData = this.state.wicketData;
    const wicketData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: changeVal, bTicket: changeVal * 100 }
        : oData
    );
    let wicketPrice = 0;
    wicketData.map((oData) => (wicketPrice = wicketPrice + oData.bTicket));
    let wicketCount = wicketPrice / 100;
    this.setState({
      wicketData,
      wicketPrice,
      wicketCount,
    });
  };
  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Card>
            <CardContent
              borderColor="primary.main"
              style={{ textAlign: "center" }}
            >
              {this.state.tossData.map((data) => (
                <div>
                  <label htmlFor="" style={{ padding: 0 }}>
                    {data.score}
                  </label>
                  <Button
                    className="desBtn"
                    onClick={() => {
                      this.setTossCountDes(data.id, data.sCount);
                    }}
                  >
                    -
                  </Button>
                  <TextField
                    id="standard-number"
                    type="number"
                    variant="outlined"
                    color="secondary"
                    value={data.sCount}
                    onChange={(val, id) => this.handleTossChange(val, data.id)}
                    Inpu
                    className="inpText"
                  />
                  <Button
                    className="incBtn"
                    onClick={() => {
                      this.setTossCountInc(data.id, data.sCount);
                    }}
                  >
                    +
                  </Button>
                </div>
              ))}
              <Divider />
              <div style={{ paddingTop: 8 }}>
                <label>
                  Price : ₹100 Qty : {this.state.tossCount} = ₹
                  {this.state.tossPrice}
                </label>
              </div>

              <div className="modelDiv">
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  // className={classes.modal}
                  open={this.state.setOpen}
                  onClose={this.handleClose}
                  closeAfterTransition
                  // BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.setOpen}>
                    <div>
                      <Ticket />
                    </div>
                  </Fade>
                </Modal>
              </div>
            </CardContent>
          </Card>
        );
      case 1:
        return (
          <Card className="">
            <CardContent style={{ textAlign: "center" }}>
              {this.state.scoreData.map((data) => (
                <div>
                  <label
                    htmlFor=""
                    className={data.class}
                    style={{ padding: 0 }}
                  >
                    {data.score}
                  </label>
                  <Button
                    className="desBtn"
                    onClick={() => {
                      this.putMultiCountDes(data.id, data.sCount);
                    }}
                  >
                    -
                  </Button>
                  <TextField
                    id="standard-number"
                    type="number"
                    variant="outlined"
                    color="secondary"
                    value={data.sCount}
                    onChange={(val, id, count) =>
                      this.handleMultiChange(val, data.id, data.sCount)
                    }
                    Inpu
                    className="inpText"
                  />
                  <Button
                    className="incBtn"
                    onClick={() => {
                      this.putMultiCountInc(data.id, data.sCount);
                    }}
                  >
                    +
                  </Button>
                </div>
              ))}
              <Divider />

              <div style={{ paddingTop: 8 }}>
                <label>
                  Price : ₹100 Qty : {this.state.sCoreCount} = ₹
                  {this.state.sCorePrice}
                </label>
              </div>
              <div className="modelDiv">
                <Modal
                  className="modelDiv"
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  // className={classes.modal}
                  open={this.state.setOpen}
                  onClose={this.handleClose}
                  closeAfterTransition
                  // BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.setOpen}>
                    <div>
                      <Ticket />
                    </div>
                  </Fade>
                </Modal>
              </div>
            </CardContent>
            {/* <Ticket /> */}
          </Card>
        );
      case 2:
        return (
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              {this.state.winData.map((data) => (
                <div>
                  <label htmlFor="" style={{ padding: 0 }}>
                    {data.score}
                  </label>
                  <Button
                    className="desBtn"
                    onClick={() => {
                      this.setWinCountDes(data.id, data.sCount);
                    }}
                  >
                    -
                  </Button>
                  <TextField
                    id="standard-number"
                    type="number"
                    variant="outlined"
                    color="secondary"
                    value={data.sCount}
                    onChange={(val, id) => this.handleWinChange(val, data.id)}
                    Inpu
                    className="inpText"
                  />
                  <Button
                    className="incBtn"
                    onClick={() => {
                      this.setWinCountInc(data.id, data.sCount);
                    }}
                  >
                    +
                  </Button>
                </div>
              ))}
              <Divider />

              <div style={{ paddingTop: 8 }}>
                <label>
                  Price : ₹100 Qty : {this.state.winCount} = ₹
                  {this.state.winPrice}
                </label>
              </div>
              <div className="modelDiv">
                <Modal
                  className="modelDiv"
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  // className={classes.modal}
                  open={this.state.setOpen}
                  onClose={this.handleClose}
                  closeAfterTransition
                  // BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.setOpen}>
                    <div>
                      <Ticket />
                    </div>
                  </Fade>
                </Modal>
              </div>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              {this.state.wicketData.map((score) => (
                <div>
                  <label htmlFor="" className={score.class}>
                    {score.score}
                  </label>
                  <Button
                    className="desBtn"
                    onClick={() => {
                      this.setWicketCountDes(score.id, score.sCount);
                    }}
                  >
                    -
                  </Button>
                  <TextField
                    id="standard-number"
                    type="number"
                    variant="outlined"
                    color="secondary"
                    value={score.sCount}
                    onChange={(val, id, count) =>
                      this.handleWicketChange(val, score.id, score.sCount)
                    }
                    Inpu
                    className="inpText"
                  />
                  <Button
                    className="incBtn"
                    onClick={() => {
                      this.setWicketCountInc(score.id, score.sCount);
                    }}
                  >
                    +
                  </Button>
                </div>
              ))}
              <Divider />

              <div style={{ paddingTop: 8 }}>
                <label>
                  Price : ₹100 Qty : {this.state.wicketCount} = ₹
                  {this.state.wicketPrice}
                </label>
              </div>
              <div className="modelDiv">
                <Modal
                  className="modelDiv"
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  // className={classes.modal}
                  open={this.state.setOpen}
                  onClose={this.handleClose}
                  closeAfterTransition
                  // BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={this.state.setOpen}>
                    <div>
                      <Ticket />
                    </div>
                  </Fade>
                </Modal>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return "Unknown step";
    }
  }

  render() {
    const { steps, activeStep } = this.state;
    // console.log("--->", this.props.ticketQst);

    return (
      <div>
        <Card>
          <Grid
            container
            style={{ textAlign: "center", backgroundColor: "rgb(33, 36, 38)" }}
          >
            <Grid
              style={{ cursor: "pointer", textDecoration: "none" }}
              container
            >
              <Grid item xs={4}>
                <img src="/mi.png" style={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item xs={4} style={{ padding: 40 }}>
                <Typography variant="h6">v/s</Typography>
              </Grid>
              <Grid item xs={4}>
                <img src="/dd.png" style={{ width: 100, height: 100 }} />
              </Grid>
            </Grid>
          </Grid>
          {/* <Typography variant="title">Total Member live : 20</Typography> */}
          {/* <LiveTvIcon /> : 20 */}
        </Card>
        <div>
          {/* <AppBar position="static" color="default"> */}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            // indicatorColor="primary"
            inkBarStyle={{
              background: "#000 !important",
            }}
            textColor="white"
            style={{
              backgroundColor: "rgb(2, 119, 87)",
              color: "white",
            }}
            variant="scrollable"
            scrollButtons="on"
            aria-label="scrollable force tabs example"
          >
            {/* <Tab label="WIN" component={Link} to="/one" />
            <Tab label="SCORE" component={Link} to="/two" /> */}
            <Tab label="WIN" />
            <Tab label="SCORE" />
            <Tab label="RUN" />
            <Tab label="WICKET" />
            {/* <Tab label="ITEM" /> */}
          </Tabs>
          {/* <Switch>
            <Route path="/one" component={PageShell(ItemOne)} />
            <Route path="/two" component={PageShell(ItemTwo)} />
          </Switch> */}
          {/* </AppBar> */}
        </div>

        <div
          // id="content-1"
          // style={{ height: "540px", overflowY: "auto" }}
          className="tContent"
          // style={{ height: "auto", overflowY: "auto" }}
        >
          <Stepper
            activeStep={activeStep}
            orientation="vertical"
            // variant="scrollable"
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleOpen(index, label)}
                >
                  {label}
                </StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index)}</Typography>
                  <div
                  //  className={classes.actionsContainer}
                  >
                    <div
                      style={{ paddingTop: 10 }}
                      style={{ textAlign: "center" }}
                    >
                      {/* <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className=""
                      >
                        Back
                      </Button> */}
                      {/* <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className=""
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button> */}

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleOpenModel(label)}
                        className="viewTicketClass"
                      >
                        View Ticket
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper
              square
              elevation={0}
              style={{ textAlign: "center" }}
              //  className={classes.resetContainer}
            >
              <Typography>All steps completed. </Typography>
              {/* - you&apos;re finished */}
              <Button onClick={this.handleReset} className="">
                Reset
              </Button>
            </Paper>
          )}
          <div style={{ textAlign: "center", marginTop: 15, marginBottom: 15 }}>
            {/* <Paper square style={{ textAlign: "center" }}> */}
            <Button
              component={Link}
              to="/home/live/payment/1"
              style={{ backgroundColor: "rgb(2, 119, 87)", color: "white" }}
              onClick={this.props.priceUp(
                this.state.tossPrice +
                  this.state.sCorePrice +
                  this.state.wicketPrice +
                  this.state.winPrice
              )}
            >
              Click here to Pay ₹
              {this.state.tossPrice +
                this.state.sCorePrice +
                this.state.wicketPrice +
                this.state.winPrice}
            </Button>
            {/* </Paper> */}
          </div>
        </div>
      </div>
    );
  }
}

function ItemOne(theme) {
  return (
    <Paper>
      <div>Item 1</div>
    </Paper>
  );
}

function ItemTwo(theme) {
  return (
    <Paper>
      <div>Item two</div>
    </Paper>
  );
}

const PageShell = (Page, previous) => {
  return (props) => (
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
        transitionName={props.match.path === "/one" ? "SlideIn" : "SlideOut"}
      >
        {console.log("pppp", props)}
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>
  );
};
// export default CreateTicket
