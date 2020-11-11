import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import React from "react";
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
const useStyles = makeStyles((theme) => ({
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

function getSteps() {
  return [
    "Who Will win the Toss ?",
    "Total Score in first Inning ?",
    "Who will win the Match ?",
    "Total Wicket in first Inning ?",
    "Total Sixes in first Inning ?",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <Card className="" style={{ marginBottom: 20 }}>
          <CardContent>
            <div>
              <Button>+</Button>
              <label htmlFor="">Team A</label>
              <Button>-</Button>
              <Button>+</Button>
              <label stye={{ border: "2px solid" }}>Team B</label>
              <Button>-</Button>
            </div>
          </CardContent>
        </Card>
      );
    case 1:
      return (
        <Card className="" style={{ marginBottom: 20 }}>
          <CardContent>
            {/* <Typography>Who Will win the Toss ?</Typography> */}
            <div>
              <Button>+</Button>
              <label htmlFor="">90-100</label>
              <Button>-</Button>
              <Button>+</Button>
              <label stye={{ border: "2px solid" }}>100-150</label>
              <Button>-</Button>
              <Button>+</Button>
              <label htmlFor="">150-200</label>
              <Button>-</Button>
              <Button>+</Button>
              <label stye={{ border: "2px solid" }}>200 +</label>
              <Button>-</Button>
            </div>
          </CardContent>
        </Card>
      );
    case 2:
      return (
        <Card className="" style={{ marginBottom: 20 }}>
          <CardContent>
            <div>
              <Button>+</Button>
              <label htmlFor="">Team A</label>
              <Button>-</Button>
              <Button>+</Button>
              <label stye={{ border: "2px solid" }}>Team B</label>
              <Button>-</Button>
            </div>
          </CardContent>
        </Card>
      );
    case 3:
      return (
        <Card className="" style={{ marginBottom: 20 }}>
          <CardContent>
            {/* <Typography>Who Will win the Toss ?</Typography> */}
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
              <label>All Out</label>
              <Button>-</Button>
            </div>
          </CardContent>
        </Card>
      );
    case 4:
      return (
        <Card className="" style={{ marginBottom: 20 }}>
          <CardContent>
            {/* <Typography>Who Will win the Toss ?</Typography> */}
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

export default function CreateTicket() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        maxHeight: 500,
        overflow: "auto",
      }}
    >
      <Card style={{ marginBottom: 20, marginTop: 20 }}>
        <CardContent>
          {/* <Icon>add_circle</Icon> */}
          <Typography
            color="primary"
            gutterBottom
            variant="h5"
            style={{ textAlign: "center" }}
          >
            Team A v/s Team B
          </Typography>
          <Divider variant="middle" />

          <Typography style={{ textAlign: "center" }}>
            Total Member Live
          </Typography>
        </CardContent>
      </Card>
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value=""
            //   onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            variant="fullWidth"
            scrollButtons="off"
            aria-label="full width  tabs example"
          >
            <Tab label="WIN" />
            <Tab label="SCORE" />
            <Tab label="RUN" />
          </Tabs>
        </AppBar>
      </div>

      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
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
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    </Container>
  );
}
