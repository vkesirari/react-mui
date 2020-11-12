import React, { Component } from "react";
import ButtonSection from "./../common/ButtonSection";
import Typography from "@material-ui/core/Typography";

class Quiz extends Component {
  state = {};
  render() {
    // console.log(this.props.match.path);

    return (
      <React.Fragment>
        <ButtonSection linkAc={this.props.match.path} />
        <div style={{ textAlign: "center", padding: 20 }}>
          <Typography variant="h5" style={{ padding: 20 }}>
            Please login first for playing Quiz.
          </Typography>
          <img src="/noquiz.png" style={{ width: 300, height: 300 }} />
        </div>
      </React.Fragment>
    );
  }
}

export default Quiz;
