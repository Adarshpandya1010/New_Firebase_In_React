//import "./App.css";
import React, { Component } from "react";
import fire from "./config/fire";
import Login from "./Login";
import SnapshotFireBase from "./SnapshotFireBase";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <SnapshotFireBase />
        ) : (
          <>
            {" "}
            <Login />
          </>
        )}
      </div>
    );
  }
}
