import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LiveSection from "./LiveSection";

class HomeSub1 extends Component {
  state = {
    liveDatas: [
      {
        id: 1,
        details: "Indian Premier League 2020 A",
        teamA: "/mi.png",
        teamB: "/bb.png",
      },
      {
        id: 2,
        details: "Indian Premier League 2020 B",
        teamA: "/bb.png",
        teamB: "/mi.png",
      },
    ],
    dynamicComp: "",
  };

  handleList = (name) => {
    // alert("Id : ", name);
    console.log(name);
    console.log(typeof (<LiveSection />));
    // const dynamicComp = `<LiveSection data:${name}/>`;
    const dynamicComp = <LiveSection />;

    console.log(typeof dynamicComp);

    this.setState({ dynamicComp });
  };
  render() {
    let newO = this.state.dynamicComp;
    return (
      <React.Fragment>
        <Grid container style={{ textAlign: "center" }}>
          {this.state.liveDatas.map((liveData) => (
            <React.Fragment key={liveData.id}>
              <Grid
                style={{ cursor: "pointer" }}
                container
                onClick={() => this.handleList(liveData.id)}
              >
                <Grid item xs={4}>
                  <img src={liveData.teamA} />
                </Grid>
                <Grid item xs={4} style={{ padding: 40 }}>
                  <Typography variant="h6">{liveData.details}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={liveData.teamB} />
                </Grid>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        {newO}
      </React.Fragment>
    );
  }
}

export default HomeSub1;
