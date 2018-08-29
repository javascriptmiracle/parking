import React, { Component } from "react";
import ParkingForm from "./components/ParkingForm/ParkingForm";
import ParkingMain from "./components/main/ParkingMain";
import { Route, Link } from "react-router-dom";
import { fetchGames } from "./actions";
import "./App.css";

class App extends Component {
  state = {
    response: ""
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch("/api/parking");
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/parking">ParkingForm</Link>
        </header>

        <main>
          <Route exact path="/" component={ParkingMain} />
          <Route exact path="/parking" component={ParkingForm} />
        </main>
      </div>
    );
  }
}

export default App;
