import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./CreateNote.css";

class NewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
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
        <div className="Note-feature">
          <h1> Lambda Notes </h1>
          <button className="Note-buttons">
            <Link to="/"> View Your Notes </Link>
          </button>
          <button className="Note-buttons">
            <Link to="/createnote"> +Create New Note </Link>
          </button>
        </div>

        <div className="Note-content">
          <h1> Create New Note: </h1>
          <div className="Note-create">
            <input
              className="Note-title"
              type="text"
              placeholder="Note Title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <textarea
              className="Note-contented"
              type="text"
              placeholder="Note Content"
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
          </div>
          <button onClick={this.handleSubmit} className="Note-button">
            {" "}
            Save{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default NewNote;
