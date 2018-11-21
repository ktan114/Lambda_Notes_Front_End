import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../subcomponents/Sidebar";
const url = require("../config/config");

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      title: "",
      body: "",
      isLoaded: false
    };
  }

  componentDidMount() {
    this.retrieveNote(this.state.id);
  }

  retrieveNote = note_id => {
    const requestOptions = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };
    axios
      .get(`${url[url.basePath]}/notes/${note_id}`, requestOptions)
      .then(res => {
        this.setState({
          title: res.data.title,
          body: res.data.body,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const updatedObj = { title: this.state.title, body: this.state.body };
    const requestOptions = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };
    axios
      .put(
        `${url[url.basePath]}/notes/${this.state.id}`,
        updatedObj,
        requestOptions
      )
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Note">
        <Sidebar />
        <div className="Note__Page">
          <h1 className="Note__title"> Edit Note: </h1>
          {this.state.isLoaded ? (
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
              <Link
                to={{
                  pathname: `/note/${this.state.id}`,
                  state: { id: this.state.id }
                }}
              >
                <button
                  onClick={this.handleSubmit}
                  className="Note__button Note__button--mod"
                >
                  Update
                </button>
              </Link>
              <Link
                to={{
                  pathname: `/note/${this.state.id}`,
                  state: { id: this.state.id }
                }}
              >
                <button className="Note__button Note__button--mod">
                  Cancel
                </button>
              </Link>
            </div>
          ) : (
            <div className="NoteView__content">
              <h1>Loading...</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Edit;
