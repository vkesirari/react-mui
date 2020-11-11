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
import LiveTvIcon from "@material-ui/icons/LiveTv";

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

  // getSteps() {
  //   return [
  //     "Who Will win the Toss ?",
  //     "Total Score in first Inning ?",
  //     "Who will win the Match ?",
  //     "Total Wicket in first Inning ?",
  //     // "Total Sixes in first Inning ?",
  //   ];
  // }
  getCount = (val) => {
    const val1 = val;
    // console.log(val1);
    return val1;
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
                    this.getCount();
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
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button className="incBtn">+</Button>
              </div>
              <div>
                <label htmlFor="" style={{ paddingRight: 5 }}>
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
      case 1:
        return (
          <Card className="">
            <CardContent style={{ textAlign: "center" }}>
              {/* <Typography>Who Will win the Toss ?</Typography> */}
              <div>
                <label htmlFor="" style={{ padding: 5 }}>
                  90-100
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
                  100-150
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
                  150-200
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
                <label htmlFor="" style={{ padding: 10 }}>
                  200 +
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
    // console.log("--->", this.state.activeStep);

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
              style={{ backgroundColor: "#66bb6a", color: "white" }}
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
        // style={{ height: "100%", overflowY: "auto" }}
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
                    <div>
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
              //  className={classes.resetContainer}
            >
              <Typography>All steps completed. </Typography>
              {/* - you&apos;re finished */}
              <Button onClick={this.handleReset} className="">
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </div>
    );
  }
}
// export default CreateTicket
