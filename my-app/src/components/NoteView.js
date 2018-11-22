import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../subcomponents/Sidebar";
import Modal from "../subcomponents/Modal";
const url = require("../config/config");

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      note: {
        title: "",
        body: ""
      },
      show: false,
      isLoaded: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (localStorage.getItem("token") === null)
      this.props.history.push("/login");
    const { id } = this.state;
    this.retrieveNote(id);
    if (!this.state.note.title) {
      this.retrieveNote(id);
    }
  }

  retrieveNote = note_id => {
    const requestOptions = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };
    axios
      .get(`${url[url.basePath]}/notes/${note_id}`, requestOptions)
      .then(res => {
        this.setState(() => ({ note: res.data, isLoaded: true }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  openModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { note } = this.state;
    return (
      <div className="Note">
        <Sidebar />
        <div className="Note__Page">
          <div className="NoteView__links">
            <Link
              className="NoteView__link NoteView__link--marginTop"
              to={`/edit/${this.state.id}`}
            >
              {" "}
              edit{" "}
            </Link>
            <Modal
              show={this.state.show}
              handleClose={this.closeModal}
              id={this.state.id}
            />
            <button className="NoteView__link" onClick={this.openModal}>
              {" "}
              delete{" "}
            </button>
          </div>
          {this.state.isLoaded ? (
            <div className="NoteView__content">
              <h1 className="Note__title Note__title--mod"> {note.title} </h1>
              <p className="NoteView__p"> {note.body} </p>
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

export default NoteView;
