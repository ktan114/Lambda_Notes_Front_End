import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./CreateNote.css";
import Sidebar from "../subcomponents/Sidebar/Sidebar";

class NewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
      // createdBy: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const updatedObj = this.state;
    axios
      .post(`https://ktan-notes.herokuapp.com/notes`, updatedObj)
      .then(res => {
        console.log(res);
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
              placeholder="Type your notes"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            {/* <input
              className="Note-title"
              type="text"
              placeholder="Note Created By"
              name="createdBy"
              value={this.state.createdBy}
              onChange={this.handleChange}
            /> */}
          <button onClick={this.handleSubmit} className="Note-button">
            {" "}
            Save{" "}
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNote;
