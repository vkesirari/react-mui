import React, { Component } from "react";
import Joi from "joi-browser";
import Divider from "@material-ui/core/Divider";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
class SignUp extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    firstName: Joi.string().required().label("FirstName"),
    lastName: Joi.string().required().label("LastName"),
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    // console.log("clicked", errors);
    return errors;
  };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    //we directly dont update the state first we need to clone it
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    console.log("errors", errors);
    if (errors) return;
    this.doSubmit();
  };
  doSubmit = () => {
    //call the server
    const { data } = this.state;
    console.log(data);
  };

  render() {
    return (
      <Container component="main" maxWidth="sm">
        {/* <CssBaseline /> */}
        {/* <div style={{ paddingTop: 50 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className=""
            // disabled={this.validate()}
          >
            Facebook
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            // disabled={this.validate()}
          >
            Google
          </Button>
        </div>
        <Divider
          style={{
            // paddingTop: 30,
            backgroundColor: "black",
          }}
        /> */}
        <div
          className=""
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            paddingLeft: 8,
            paddingRight: 8,
            paddingBottom: 30,
          }}
        >
          <form
            style={{ marginTop: 50 }}
            className=""
            noValidate
            onSubmit={this.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.handleChange}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.handleChange}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.handleChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  onChange={this.handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              {/* <Grid item xs={12}></Grid> */}
            </Grid>

            <Grid container justify="center" style={{ marginTop: 10 }}>
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                {" "}
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        // onChange={this.handleChange}
                      />
                    }
                    label="I Agree"
                  />
                </Grid>
                <Grid item xs={12} style={{ color: "#109e38 !important" }}>
                  <Button
                    type="submit"
                    // fullWidth
                    className="submit1"
                    variant="contained"
                    color="secondary"
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Link to="/login" variant="body2">
                    Register Now
                  </Link>
                </Grid>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignUp;
