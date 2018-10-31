import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./NoteView.css";
import Sidebar from "../subcomponents/Sidebar/Sidebar";
import Modal from "../subcomponents/Modal/Modal";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      note: {
        title: "",
        body: ""
      },
      show: false
    };
  }

  componentDidMount() {
    const { id } = this.state;
    this.retrieveNote(id);
  }

  retrieveNote(note_id) {
    axios
      .get(`https://ktan-notes.herokuapp.com/notes/${note_id}`)
      .then(res => {
        this.setState({ note: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

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
            <Link className="NoteView__link" to={`/edit/${this.state.id}`}>
              {" "}
              edit{" "}
            </Link>
            <Modal show={this.state.show} handleClose={this.closeModal} id={this.state.id}/>
            <button className="NoteView__link" onClick={this.openModal}>
              {" "}
              delete{" "}
            </button>
          </div>
          <div className="NoteView__content">
            <h1 className="Note__title Note__title--mod"> {note.title} </h1>
            <p className="NoteView__p"> {note.body} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NoteView;
