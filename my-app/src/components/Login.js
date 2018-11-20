import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const url = require("../config/config");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
          this.props.history.push({
            pathname: "/",
            state: { user: response.data }
          });
        }
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const stylePage = {
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
