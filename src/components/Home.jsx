import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Cricket from "./Cricket";
import SelectSection from "./../common/SelectSection";
import ButtonSection from "./../common/ButtonSection";

class Home extends Component {
  render() {
    // console.log(this.props.match.path);

    return (
      <div>
        <Grid container>
          <SelectSection linkAc={this.props.match.path} />
          <ButtonSection linkAc={this.props.match.path} />
          <Cricket linkAc={this.props.match.path} />
        </Grid>
      </div>
    );
  }
}
export default Home;
