import React, { Component } from "react";
import { Route } from "react-router";
import axios from "axios";

import ListView from "./components/ListView/ListView";
import NoteView from "./components/NoteView/NoteView";
import CreateNote from "./components/CreateNote/CreateNote";
import Edit from "./components/Edit/Edit";

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
        this.setState({ notes: res.data });
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
        <Route path="/noteview/:id" component={NoteView} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/edit/:id" component={Edit} />
      </div>
    );
  }
}

export default App;
