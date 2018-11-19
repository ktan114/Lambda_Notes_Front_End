import React, { Component } from "react";
import { Route } from "react-router";
import axios from "axios";

import ListView from "./components/ListView";
import NoteView from "./components/NoteView";
import CreateNote from "./components/CreateNote";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Register from "./components/Register";
const url = require("./config/config");

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
      .get(`${url[url.basePath]}/notes`)
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
        <Route path="/note/:id" component={NoteView} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
