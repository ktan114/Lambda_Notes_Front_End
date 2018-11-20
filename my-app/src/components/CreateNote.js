import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../subcomponents/Sidebar";
const url = require("../config/config");

class NewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      createdBy: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const updatedObj = this.state;
    axios
      .post(`${url[url.basePath]}/notes`, updatedObj)
      .then(res => {
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Note">
        <Sidebar />
        <div className="Note__Page">
          <h1 className="Note__title"> Create New Note: </h1>
          <div className="Create">
            <input
              className="Create__title"
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <textarea
              className="Create-content"
              type="text"
              placeholder="Type your note"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <Link to="/">
              <button onClick={this.handleSubmit} className="Note__button Note__button--mod">
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNote;
