import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

import SelectSection from "./../common/SelectSection";
import ButtonSection from "./../common/ButtonSection";
class Football extends Component {
  state = {};
  render() {
    console.log(this.props.match.path);

    return (
      <React.Fragment>
        <SelectSection />
        <ButtonSection linkAc={this.props.match.path} />
        <div style={{ textAlign: "center", padding: 20 }}>
          <Typography variant="h5" style={{ padding: 30 }}>
            {" "}
            Football is coming soon
          </Typography>
          <img src="/football_new.png" style={{ width: 200 }} />
        </div>
      </React.Fragment>
    );
  }
}

export default Football;
