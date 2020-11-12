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
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Modal from "@material-ui/core/Modal";
import Ticket from "../common/Ticket";
export default class TicketSection extends Component {
  state = {
    activeStep: 0,
    setActiveStep: 0,
    steps: [
      "Who Will win the Toss ?",
      "Total Score in first Inning ?",
      "Who will win the Match ?",
      "Total Wicket in first Inning ?",
    ],
    countval: 0,
    countval2: 0,
    ticketPrice: 0,
    totalTicketPrice: 0,
    totalCountval: 0,
    sCorePrice: 0,
    sCoreCount: 0,

    // inputDatas: ["80 - 100", "110-150", "150-200", " 200  +  "],
    scoreData: [
      {
        id: 1,
        btn: "sBtn1",
        score: "80-100",
        class: "scoreBtn1",
        sCount: 0,
        bTicket: 0,

        // scoreCount: 0,
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

    open: false,
    setOpen: false,
  };
  handleOpen = (index) => {
    let currentToggle = this.state.activeStep;
    console.log("clickked", currentToggle, index);
    this.setState({ activeStep: index });
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
  // handleOpenModel = () => {
  //   // setOpen(true);
  //   this.setState({ setOpen: true });
  // };

  // handleClose = () => {
  //   // setOpen(false);
  //   this.setState({ setOpen: false });
  // };
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

  putCountInc = (val1, val2, btn) => {
    // console.log("-------", val1, val2, btn);
    // return false;
    // console.log("btnnn===", btn);
    if (btn === "btn1") {
      let countval = val1 + 1;
      let countval2 = this.state.countval2;
      const tempVal = countval2;
      let totalTicketPrice = 100 * countval + parseInt(tempVal * 100);
      let totalCountval = countval + tempVal;
      this.setState({ totalTicketPrice, totalCountval, countval, countval2 });
    } else {
      let countval = this.state.countval;
      const tempVal = countval;
      let countval2 = val2 + 1;
      let totalTicketPrice = 100 * countval2 + parseInt(tempVal * 100);
      let totalCountval = countval2 + tempVal;
      this.setState({ totalTicketPrice, totalCountval, countval, countval2 });
    }
    // let ticketPrice = 100 * countval;
    // let totalTicketPrice = 100 * countval;
    // let totalCountval = countval;
    // this.setState({ totalTicketPrice, totalCountval });

    // if (btn === "btn1") {
    //   let countval = val + 1;
    //   let totalTicketPrice = 100 * countval;
    //   let totalCountval = countval;
    //   this.setState({ totalTicketPrice, totalCountval, countval });
    // } else {
    //   let countval = 0;
    //   let totalTicketPrice = this.state.totalTicketPrice;
    //   let totalCountval = this.state.totalCountval;
    //   this.setState({ totalTicketPrice, totalCountval, countval });
    // }
  };
  putCountDes = (val1, val2, btn) => {
    // let countval = val <= 0 ? 0 : val - 1;
    // let ticketPrice = 100 * countval;
    // this.setState({ countval, ticketPrice });

    if (btn === "btn1") {
      let countval = val1 <= 0 ? 0 : val1 - 1;
      let countval2 = this.state.countval2;
      const tempVal = countval2;
      let totalTicketPrice = 100 * countval + parseInt(tempVal * 100);
      let totalCountval = countval + tempVal;
      this.setState({ totalTicketPrice, totalCountval, countval, countval2 });
    } else {
      let countval = this.state.countval;
      const tempVal = countval;
      let countval2 = val2 <= 0 ? 0 : val2 - 1;
      let totalTicketPrice = 100 * countval2 + parseInt(tempVal * 100);
      let totalCountval = countval2 + tempVal;
      this.setState({ totalTicketPrice, totalCountval, countval, countval2 });
    }
  };
  handleChange = (e, val2, btn) => {
    // alert(btn);
    // let countval = parseInt(e.target.value);
    // let ticketPrice = 100 * countval;
    // this.setState({ countval, ticketPrice });
    if (btn === "btn1") {
      let countval = parseInt(e.target.value);
      let countval2 = this.state.countval2;
      const tempVal = countval2;
      let totalTicketPrice = 100 * countval + parseInt(tempVal * 100);
      let totalCountval = countval + tempVal;
      this.setState({ totalTicketPrice, totalCountval, countval, countval2 });
    } else {
      let countval = this.state.countval;
      const tempVal = countval;
      let countval2 = parseInt(e.target.value);
      let totalTicketPrice = 100 * countval2 + parseInt(tempVal * 100);
      let totalCountval = countval2 + tempVal;
      this.setState({ totalTicketPrice, totalCountval, countval, countval2 });
    }
  };
  //2 btn
  // putCountInc2 = (val) => {
  //   let countval2 = val + 1;
  //   let ticketPrice2 = 100 * countval2;
  //   this.setState({ countval2, ticketPrice2 });
  // };
  // putCountDes2 = (val) => {
  //   let countval2 = val <= 0 ? 0 : val - 1;
  //   let ticketPrice2 = 100 * countval2;
  //   this.setState({ countval2, ticketPrice2 });
  // };
  // handleChange2 = (e) => {
  //   let countval2 = parseInt(e.target.value);
  //   let ticketPrice2 = 100 * countval2;
  //   this.setState({ countval2, ticketPrice2 });
  // };

  putMultiCountInc = (id, count) => {
    console.log("lets do it", id, count);
    const oldData = this.state.scoreData;
    const scoreData = oldData.map((oData) =>
      oData.id === id
        ? { ...oData, sCount: ++count, bTicket: count * 100 }
        : oData
    );
    // scoreData.sCount = count + 1;
    let sCorePrice = 0;
    scoreData.map((oData) => (sCorePrice = sCorePrice + oData.bTicket));
    // console.log("temp", temp);
    let sCoreCount = sCorePrice / 100;
    // let tempTc = this.state.totalTicketPrice;
    // let tempCn = this.state.totalCountval;
    // let totalTicketPrice = tempTc + sCorePrice;
    // let totalCountval = tempCn + sCoreCount;
    this.setState({
      scoreData,
      sCorePrice,
      sCoreCount,
      // totalTicketPrice,
      // totalCountval,
    });
    // this.state.totalTicketPrice
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
              <div>
                <label htmlFor="" style={{ paddingRight: 5 }}>
                  Team A
                </label>
                <Button
                  className="desBtn"
                  onClick={() => {
                    this.putCountDes(
                      this.state.countval,
                      this.state.countval2,
                      "btn1"
                    );
                  }}
                >
                  -
                </Button>
                <TextField
                  id="standard-number"
                  type="number"
                  variant="outlined"
                  color="secondary"
                  className="inpText"
                  value={this.state.countval}
                  onChange={(val, val2) =>
                    this.handleChange(val, this.state.countval2, "btn1")
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button
                  className="incBtn"
                  onClick={() => {
                    this.putCountInc(
                      this.state.countval,
                      this.state.countval2,
                      "btn1"
                    );
                  }}
                >
                  +
                </Button>
              </div>

              <div>
                <label htmlFor="" style={{ paddingRight: 5 }}>
                  Team B
                </label>
                <Button
                  className="desBtn"
                  onClick={() => {
                    this.putCountDes(
                      this.state.countval,
                      this.state.countval2,
                      "btn2"
                    );
                  }}
                >
                  -
                </Button>
                <TextField
                  id="standard-number"
                  type="number"
                  variant="outlined"
                  color="secondary"
                  value={this.state.countval2}
                  onChange={(val) => this.handleChange(val)}
                  className="inpText"
                />
                <Button
                  className="incBtn"
                  onClick={() => {
                    this.putCountInc(
                      this.state.countval,
                      this.state.countval2,
                      "btn2"
                    );
                  }}
                  // style={{ margin: "10px 10px 10px 10px" }}
                >
                  +
                </Button>
              </div>
              <Divider />

              <div style={{ paddingTop: 8 }}>
                <label>
                  Price : 100₹ * Qty : {this.state.totalCountval} ={" "}
                  {this.state.totalTicketPrice}₹
                </label>
              </div>
              {/* <div>
                <Modal
                  open={this.state.setOpen}
                  onClose={this.handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <h2 style={{ textAlign: "center", color: "white" }}>
                    Simple React Modal
                  </h2>
                </Modal>
              </div> */}
            </CardContent>
          </Card>
        );
      case 1:
        return (
          <Card className="">
            <CardContent style={{ textAlign: "center" }}>
              {this.state.scoreData.map((score) => (
                <div>
                  <label htmlFor="" style={{ padding: 0 }}>
                    {score.score}
                  </label>
                  <Button className="desBtn">-</Button>
                  <TextField
                    id="standard-number"
                    type="number"
                    variant="outlined"
                    color="secondary"
                    value={score.sCount}
                    className="inpText"
                  />
                  <Button
                    className="incBtn"
                    onClick={() => {
                      this.putMultiCountInc(score.id, score.sCount);
                    }}
                  >
                    +
                  </Button>
                </div>
              ))}
              <div style={{ paddingTop: 8 }}>
                <label>
                  Price : ₹100 Qty : {this.state.sCoreCount} = ₹
                  {this.state.sCorePrice}
                </label>
              </div>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              <div>
                <label htmlFor="" style={{ padding: 0 }}>
                  Team A
                </label>
                <Button className="desBtn">-</Button>
                <TextField
                  id="standard-number"
                  type="number"
                  variant="outlined"
                  color="secondary"
                  className="inpText"
                />
                <Button className="incBtn">+</Button>
              </div>
              <div>
                <label htmlFor="" style={{ padding: 0 }}>
                  Team B
                </label>
                <Button className="desBtn">-</Button>
                <TextField
                  id="standard-number"
                  type="number"
                  variant="outlined"
                  color="secondary"
                  className="inpText"
                />
                <Button
                  className="incBtn"
                  // style={{ margin: "10px 10px 10px 10px" }}
                >
                  +
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card>
            <CardContent style={{ textAlign: "center" }}>
              {/* <Typography>Who Will win the Toss ?</Typography> */}
              <div>
                <label htmlFor="" style={{ padding: 0 }}>
                  0-3
                </label>
                <Button className="desBtn">-</Button>

                <TextField
                  id="standard-number"
                  type="number"
                  variant="outlined"
                  color="secondary"
                  className="inpText"
                />
                <Button className="incBtn">+</Button>
              </div>
              <div>
                <label htmlFor="" style={{ padding: 0 }}>
                  3-5
                </label>
                <Button className="desBtn">-</Button>

                <TextField
                  id="standard-number"
                  type="number"
                  variant="outlined"
                  color="secondary"
                  className="inpText"
                />
                <Button className="incBtn">+</Button>
              </div>
              <div>
                <label htmlFor="" style={{ padding: 0 }}>
                  5-7
                </label>
                <Button className="desBtn">-</Button>

                <TextField
                  id="standard-number"
                  type="number"
                  variant="outlined"
                  color="secondary"
                  className="inpText"
                />
                <Button className="incBtn">+</Button>
              </div>
              <div>
                <label htmlFor="" style={{ padding: 2 }}>
                  10
                </label>
                <Button className="desBtn">-</Button>

                <TextField
                  id="standard-number"
                  type="number"
                  variant="outlined"
                  color="secondary"
                  className="inpText"
                />
                <Button className="incBtn">+</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 5:
        return (
          <Card>
            <CardContent>
              <div>
                <Button>+</Button>
                <label>0-3</label>
                <Button>-</Button>
                <Button>+</Button>
                <label>3-6</label>
                <Button>-</Button>
                <Button>+</Button>
                <label>6-9</label>
                <Button>-</Button>
                <Button>+</Button>
                <label>9+</label>
                <Button>-</Button>
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
    // console.log("--->", inputDatas);

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
          <AppBar position="static" color="default">
            <Tabs
              value=""
              //   onChange={handleChange}
              indicatorColor="primary"
              textColor="white"
              style={{
                backgroundColor: "rgb(2, 119, 87)",
                color: "white",
              }}
              variant="scrollable"
              scrollButtons="on"
              aria-label="scrollable force tabs example"
            >
              <Tab label="WIN" />
              <Tab label="SCORE" />
              <Tab label="RUN" />
              <Tab label="WICKET" />
              {/* <Tab label="ITEM" /> */}
            </Tabs>
          </AppBar>
        </div>

        <div
        // id="content-1"
        // style={{ height: "460px", overflowY: "auto" }}
        // className="pmd-scrollbar mCustomScrollbar"
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleOpen(index)}
                >
                  {label}
                </StepLabel>
                <StepContent>
                  <Typography>{this.getStepContent(index)}</Typography>
                  <div
                  //  className={classes.actionsContainer}
                  >
                    <div style={{ paddingTop: 10 }}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className=""
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className=""
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                      <Button onClick={this.handleOpenModel}>
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
          <div style={{ textAlign: "center", marginTop: 15 }}>
            {/* <Paper square style={{ textAlign: "center" }}> */}
            <Button
              component={Link}
              to="/home/live/payment/1"
              style={{ backgroundColor: "rgb(2, 119, 87)", color: "white" }}
            >
              Click here to Pay {this.state.totalTicketPrice}₹
            </Button>
            {/* </Paper> */}
          </div>
        </div>
      </div>
    );
  }
}
// export default CreateTicket
