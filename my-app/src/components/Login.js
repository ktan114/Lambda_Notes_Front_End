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
      success: false
    };
  }

  login = () => {
    const { username, password } = this.state;
    const userInfo = { username, password };

    axios
      .post(`${url[url.basePath]}/users/login`, userInfo)
      .then(response => {
        console.log(response); // token, user info
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const stylePage= {
      display: "flex",
      flexFlow: "column ",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "300px"
    };

    return (
      <div style={stylePage}>
        <h1>Login Page</h1>
        <form>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <input
            name="password"
            type="text"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleInput}
          />
        </form>
        <div>
          <button onClick={this.login}>Login</button>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
