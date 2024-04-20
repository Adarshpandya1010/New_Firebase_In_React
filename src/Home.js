import React, { Component } from "react";
import fire from "./config/fire";
import { Button, Grid } from "@material-ui/core";

export default class Home extends Component {
  logOutHandler = () => {
    fire.auth().signOut();
  };
  render() {
    return (
      <>
        <h1
          style={{ textAlign: "center", background: "#e6f7ff", marginTop: 10 }}
        >
          You logged in !!!!!
        </h1>
        <Grid style={{ padding: 10, marginTop: 0, marginLeft: 1000 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={this.logOutHandler}
          >
            Logout
          </Button>
        </Grid>
      </>
    );
  }
}
