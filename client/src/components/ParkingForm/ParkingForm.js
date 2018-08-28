import React, { Component } from "react";
import { connect } from "react-redux";

class ParkingForm extends Component {
  state = {
    name: "",
    rateWeekly: "",
    rateWekend: "",
    discount: "",
    file: "",
    imagePreviewUrl: "",
    errors: {},
    cover: ""
  };

  handleImage = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  handleChange = e => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ [e.target.name]: e.target.value, errors });
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    console.log(e);
    e.preventDefault();
    let errors = {};

    if (this.state.name === "") errors.name = "Can't be empty";
    if (this.state.cover === "") errors.cover = "Can't be empty";
    if (this.state.rateWeekly === "") errors.rateWeekly = "Can't be empty";
    if (this.state.rateWekend === "") errors.rateWekend = "Can't be empty";
    if (this.state.discount === "") errors.discount = "Can't be empty";

    this.setState({ errors });
  };

  onCancle = () => {};

  render() {
    let { imagePreviewUrl } = this.state;
    let { errors } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div>
          <span>{errors.cover}</span>
        </div>
      );
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-3">
              <div className="area-image">
                <div className="area-image__image">{$imagePreview}</div>
                <div className="area-image__button" />
                <input name="cover" onChange={this.handleImage} type="file" />
              </div>
            </div>
            <div className="col-4">
              <div className="input-list">
                <div className="input-list__item">
                  <ul className="list-input">
                    <li>
                      <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                      <span>{this.state.errors.name}</span>
                    </li>
                    <li>
                      <input
                        name="rateWeekly"
                        onChange={this.handleChange}
                        value={this.state.rateWeekly}
                      />
                      <span>{this.state.errors.rateWeekly}</span>
                    </li>
                    <li>
                      <input
                        name="rateWekend"
                        onChange={this.handleChange}
                        value={this.state.rateWekend}
                      />
                      <span>{this.state.errors.rateWekend}</span>
                    </li>
                    <li>
                      <input
                        name="discount"
                        onChange={this.handleChange}
                        value={this.state.discount}
                      />
                      <span>{this.state.errors.discount}</span>
                    </li>
                  </ul>
                </div>
                <div className="input-list__button">
                  <div className="button-list">
                    <div className="button-list__save">
                      <button className="btn btn-warning">save</button>
                    </div>
                    <div className="button-list__cancel">
                      <button className="btn btn-warning">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    area: state.area
  };
}

export default connect(mapStateToProps)(ParkingForm);
