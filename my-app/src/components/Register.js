import React, { Component } from "react";
import axios from "axios";

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

  // Axios request to login, do a POST to /login
  // Receive token, user info
  register = () => {
    const { username, password } = this.state;
    const userInfo = { username, password };

    axios
      .post(`${url[url.basePath]}/users/register`, userInfo)
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
    return (
      <div>
        <h1>Registration Page</h1>
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
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

export default Register;
