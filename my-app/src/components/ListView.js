import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Sidebar from "../subcomponents/Sidebar";
const url = require("../config/config");

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token") === null)
      this.props.history.push("/login");
    this.retrieveNotes();
  }

  retrieveNotes = () => {
    const requestOptions = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };
    axios
      .get(`${url[url.basePath]}/notes`, requestOptions)
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  copyNotes = copiedNote => {
    const notes = this.state.notes;
    notes.push(copiedNote);
    const requestOptions = {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    };
    axios
      .post(`${url[url.basePath]}/notes`, copiedNote, requestOptions)
      .then(success => {
        this.setState({ notes: notes });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="Note">
        <Sidebar />
        <div className="Note__Page">
          <h1 className="Note__title"> Your Notes: </h1>
          <div className="List__notes">
            {this.state.notes.map(note => {
              return (
                <div key={note._id} className="List__note__link">
                  <Link
                    className="List__note__link"
                    to={{
                      pathname: `/note/${note._id}`,
                      state: { note: note }
                    }}
                  >
                    <div className="List__note">
                      <h3 className="List__note__h3"> {note.title} </h3>
                      <p className="List__note__p"> {note.body} </p>
                    </div>
                  </Link>
                  <button
                    onClick={() =>
                      this.copyNotes({
                        title: note.title,
                        body: note.body,
                        createdBy: localStorage.getItem("id")
                      })
                    }
                  >
                    Copy
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListView;
