import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import NotFound from "./components/notFound";
import SignIn from "./components/SignIn";
import BottomAppBar from "./common/BottomAppBar";
import TopAppBar from "./common/TopAppBar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import "./App.css";
import Quiz from "./components/Quiz";
import Football from "./components/Football";
import FAQ from "./common/FAQ";
import Privacy from "./common/Privacy";
import Grid from "@material-ui/core/Grid";
import HomeSub1 from "./common/HomeSub1";
import HomeSub2 from "./common/HomeSub2";
import TicketSection from "./common/TicketSection";
// import TicketSection from "./common/TicketSection";
import Payment from "./components/Payment";
import Container from "@material-ui/core/Container";
import Ticket from "./common/Ticket";
class App extends Component {
  state = {
    linkAct: "",
    isTicket: false,
    ticketQst: "",
  };

  handleClickLink = (name) => {
    console.log(name);
    this.setState({ linkAct: name });
  };
  handleTicket = (ticketQst) => {
    let isTicket = true;
    // isTicket = !this.state.isTicket;
    this.setState({ ticketQst, isTicket });
  };
  render() {
    console.log("globl", this.state.linkAct);
    return (
      <React.Fragment>
        <main className="container" className="tt">
          {/* <Container maxWidth="lg"> */}
          <Grid container>
            <Grid item xs={12} sm={12} xl={5} md={5} lg={5}>
              {/* <Grid item xs={12} sm={12} xl={4} md={4} lg={4}> */}
              <TopAppBar updateStatus={this.state.linkAct} />
              <div className="allContent">
                <Switch>
                  <Route path="/login" component={SignIn}></Route>
                  <Route exact path="/home" component={Home}></Route>
                  <Route path="/home/c" component={Home}></Route>
                  <Route path="/home/q" component={Quiz}></Route>
                  <Route path="/home/f" component={Football}></Route>
                  <Route
                    exact
                    path="/home/live/:id"
                    // component={TicketSection}
                    // onTicket={this.handleTicket}
                    render={() => (
                      <TicketSection onTicket={this.handleTicket} />
                    )}
                  ></Route>
                  <Route
                    path="/home/live/payment/:id"
                    component={Payment}
                  ></Route>
                  {/* render={props => <LiveSection {...props} user={user} />}  */}
                  {/* <Route path="/home/live" component={HomeSub1}></Route>
                  <Route path="/home/play" component={HomeSub2}></Route> */}

                  <Route exact path="/menu" component={Menu}></Route>
                  <Route path="/menu/faq" component={FAQ}></Route>
                  <Route path="/menu/privacy" component={Privacy}></Route>

                  <Route path="/register" component={SignUp}></Route>
                  <Route path="/not-found" component={NotFound}></Route>
                  <Redirect exact from="/" to="/home" />
                  <Redirect to="/not-found" />
                </Switch>
              </div>
              <BottomAppBar onUp={this.handleClickLink} />
            </Grid>
            <Grid item xl={7} lg={7} md={7} className="fDown">
              {/* <Grid item md={8}> */}

              {this.state.isTicket === false ? (
                <img
                  src="/stadium.jpg"
                  style={{
                    backgroundImage: "/stadium.jpg",
                    height: "100% !important",
                    width: "auto",
                  }}
                />
              ) : (
                <Ticket ticketQst={this.state.ticketQst} />
              )}

              {/* <Ticket /> */}
            </Grid>
            {/* <Grid item xs={7}>
              <div>
              </div>
            </Grid> */}
          </Grid>
          {/* </Container> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
