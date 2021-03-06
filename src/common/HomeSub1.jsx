import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import LiveSection from "./TicketSection";
import { Link } from "react-router-dom";

class HomeSub1 extends Component {
  state = {
    liveDatas: [
      {
        id: 1,
        details: "Indian Premier League 2020",
        teamA: "/bb.png",
        teamB: "/mi.png",
      },
      {
        id: 2,
        details: "Indian Premier League 2020",
        teamA: "/mi.png",
        teamB: "/bb.png",
      },
      // {
      //   id: 3,
      //   details: "Indian Premier League 2020 B",
      //   teamA: "/bb.png",
      //   teamB: "/mi.png",
      // },
      // {
      //   id: 4,
      //   details: "Indian Premier League 2020 B",
      //   teamA: "/bb.png",
      //   teamB: "/mi.png",
      // },
    ],
    dynamicComp: "",
  };

  handleList = (name) => {
    // alert("Id : ", name);
    // console.log(name);
    // console.log(typeof (<LiveSection />));
    // // const dynamicComp = `<LiveSection data:${name}/>`;
    // const dynamicComp = <LiveSection />;
    // console.log(typeof dynamicComp);
    // this.setState({ dynamicComp });
  };
  render() {
    // let newO = this.state.dynamicComp;
    return (
      <React.Fragment>
        <Grid container style={{ textAlign: "center" }}>
          {this.state.liveDatas.map((liveData) => (
            <React.Fragment key={liveData.id}>
              <Grid
                style={{ cursor: "pointer", textDecoration: "none" }}
                className="gridB"
                container
                component={Link}
                to={`/home/live/${liveData.id}`}
                // onClick={() => this.handleList(liveData.id)}
              >
                <Grid item xs={4}>
                  <img src={liveData.teamA} style={{ width: 65, height: 65 }} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  // style={{ marginTop: 30 }}
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "9rem",
                  }}
                >
                  <Typography nowrap style={{ color: "white", marginTop: 15 }}>
                    {liveData.details}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={liveData.teamB} style={{ width: 65, height: 65 }} />
                </Grid>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
        {/* {newO} */}
      </React.Fragment>
    );
  }
}

export default HomeSub1;
