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

class App extends Component {
  state = {
    linkAct: "",
  };

  handleClickLink = (name) => {
    console.log(name);
    this.setState({ linkAct: name });
  };
  render() {
    console.log("globl", this.state);
    return (
      <React.Fragment>
        <main className="container" className="tt">
          <Grid container>
            <Grid item xs={12} sm={12} xl={4} md={4} lg={4}>
              {/* <Grid item xs={12} sm={12} xl={4} md={4} lg={4}> */}
              <TopAppBar updateStatus={this.state.linkAct} />
              <Switch>
                <Route path="/login" component={SignIn}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route path="/home/c" component={Home}></Route>
                <Route path="/home/q" component={Quiz}></Route>
                <Route path="/home/f" component={Football}></Route>
                <Route
                  exact
                  path="/home/live/:id"
                  component={TicketSection}
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
              <BottomAppBar onUp={this.handleClickLink} />
            </Grid>
            <Grid item xl={8} lg={8} md={8}>
              {/* <Grid item md={8}> */}
              <img
                src="/stadium.jpg"
                style={{
                  backgroundImage: "/stadium.jpg",
                  height: "100% !important",
                }}
              />
            </Grid>
            {/* <Grid item xs={7}>
              <div>
              </div>
            </Grid> */}
          </Grid>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
