import React from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const ParkingMain = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push("/parking-form")
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(ParkingMain);
