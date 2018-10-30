import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../subcomponents/Sidebar/Sidebar";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      title: "",
      body: ""
    };
  }

  componentDidMount() {
    this.retrieveNote(this.state.id);
  }

  retrieveNote(note_id) {
    axios
      .get(`https://ktan-notes.herokuapp.com/notes/${note_id}`)
      .then(res => {
        this.setState({ title: res.data.title, body: res.data.body });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const updatedObj = { title: this.state.title, body: this.state.body };
    axios
      .put(
        `https://ktan-notes.herokuapp.com/notes/${this.props.match.params.id}`,
        updatedObj
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
            {/* <input
            className="Note-title"
            type="text"
            placeholder="Note Created By"
            name="createdBy"
            value={this.state.createdBy}
            onChange={this.handleChange}
          /> */}
            <Link to={`/noteview/${this.state.id}`}>
              <button
                onClick={this.handleSubmit}
                className="Note__button Note__button--mod"
              >
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
