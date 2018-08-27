import React, { Component } from "react";
import ParkingForm from "./components/ParkingForm/ParkingForm";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>

        <main>
          <Route exact path="/" component={ParkingForm} />
        </main>
      </div>
    );
  }
}

export default App;
