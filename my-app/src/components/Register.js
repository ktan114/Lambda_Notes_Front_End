import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = require("../config/config");

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      success: false
    };
  }

  register = () => {
    const { username, password } = this.state;
    const userInfo = { username, password };

    axios
      .post(`${url[url.basePath]}/users/register`, userInfo)
      .then(() => {
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="LandingPage">
        <div className="Landing__Page">
          <h1 className="LandingPage__h1">Registration Page</h1>
          <form className="LandingPage__Form">
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              className="LandingPage__Input"
              value={this.state.username}
              onChange={this.handleInput}
            />
            <input
              name="password"
              type="text"
              placeholder="Enter your password"
              className="LandingPage__Input"
              value={this.state.password}
              onChange={this.handleInput}
            />
          </form>
          <div className="LandingPage__Buttons">
            <button className="LandingPage__Button" onClick={this.register}>Register</button>
            <Link className="LandingPage__Link" to="/login">
              <button className="LandingPage__Return">
              Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
