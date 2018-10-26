import React, { Component } from "react";
import { Route } from "react-router";
import axios from "axios";

import "./App.css";
import ListView from "./components/ListView/ListView";
import NoteView from "./components/NoteView/NoteView";
import CreateNote from "./components/CreateNote/CreateNote";
import Edit from "./components/Edit/Edit";
import Delete from "./components/Delete/Delete";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.retrieveNotes();
  }

  retrieveNotes() {
    axios
      .get(`https://ktan-notes.herokuapp.com/notes`)
      .then(res => {
        this.setState({ notes: res.data.notes });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => <ListView {...props} notes={this.state.notes} />}
        />
        <Route path="/noteview/:id" component={NoteView} /> />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/delete/:id" component={Delete} />
      </div>
    );
  }
}

export default App;
