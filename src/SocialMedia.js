import React, { Component } from "react";
import fire, { googleAuthProvider } from "./config/fire";
import { Button, Grid } from "@material-ui/core";
export default class SocialMedia extends Component {
  googleHandler = () => {
    // var provider = new fire.auth.GoogleAuthProvider();
    // const provider = new GoogleAuthProvider();
    fire
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then((user) => {
        console.log("user===>", user);
      })
      .catch((e) => {
        console.log("error===>", e);
      });
  };
  render() {
    return (
      <div>
        <Grid>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.googleHandler}
            style={{ padding: 10, margin: 50 }}
          >
            Sign In With Google Email
          </Button>
        </Grid>
      </div>
    );
  }
}
