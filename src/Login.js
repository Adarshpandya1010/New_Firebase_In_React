import { Button, TextField, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React, { Component } from "react";
import fire from "./config/fire";
import SocialMedia from "./SocialMedia";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  loginHandler = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log("user===>", user);
      })
      .catch((e) => {
        console.log("error===>", e);
      });
  };
  signupHandler = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log("user===>", user);
      })
      .catch((e) => {
        console.log("error===>", e);
      });
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Paper
            style={{ height: 400, width: 400, padding: 40, marginTop: 50 }}
          >
            <Grid>
              <h1 style={{ background: "#e6f7ff", marginTop: 0 }}>FireBase</h1>
            </Grid>
            <form>
              <Grid>
                <TextField
                  style={{ padding: 10, width: 300 }}
                  type="email"
                  id="email"
                  name="email"
                  label="Enter the email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </Grid>
              <Grid>
                <TextField
                  style={{ padding: 10, width: 300 }}
                  name="password"
                  type="password"
                  id="password"
                  label="Enter the password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </Grid>
              <Grid>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.loginHandler}
                  style={{ padding: 10, margin: 30 }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.signupHandler}
                  style={{ padding: 10, margin: 30 }}
                >
                  Signup
                </Button>
              </Grid>
              <SocialMedia />
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}
