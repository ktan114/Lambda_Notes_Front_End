import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../subcomponents/Sidebar";
const url = require("../config/config");

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      createdBy: localStorage.getItem("id")
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreate = () => {
    const createdNote = this.state;
    const requestOptions = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };
    axios
      .post(`${url[url.basePath]}/notes`, createdNote, requestOptions)
      .then(res => {})
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
            <Link to={{ pathname: "/", state: { note: "" } }}>
              <button
                onClick={this.handleCreate}
                className="Note__button Note__button--mod"
              >
                Save
              </button>
            </Link>
            <Link to={{ pathname: "/", state: { note: "" } }}>
              <button className="Note__button Note__button--mod">Cancel</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNote;
