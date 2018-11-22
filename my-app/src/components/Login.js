import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const url = require("../config/config");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      invalid: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token")) this.props.history.push("/");
  }

  login = () => {
    const { username, password } = this.state;
    const loginInfo = { username, password };

    axios
      .post(`${url[url.basePath]}/users/login`, loginInfo)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.user._id);
          this.props.history.push("/");
        }
      })
      .catch(err => this.setState({ invalid: true }));
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="LandingPage">
        <div className="Landing__Page">
          <h1 className="LandingPage__Title">Lambda Notes</h1>
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
          {this.state.invalid ? <h1>Incorrect username or password</h1> : null}
          <div className="LandingPage__Buttons">
            <button className="LandingPage__Button" onClick={this.login}>
              Login
            </button>
            <Link className="LandingPage__Link" to="/register">
              <button className="LandingPage__Return">Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
