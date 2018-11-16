import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      success: false
    };
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
      </div>
    );
  }
}

export default Login;
