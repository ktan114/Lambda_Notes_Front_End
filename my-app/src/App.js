import React, { Component } from "react";
import { Route } from "react-router";

import ListView from "./components/ListView";
import NoteView from "./components/NoteView";
import CreateNote from "./components/CreateNote";
import Edit from "./components/Edit";
import Login from "./components/Login";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ListView} />
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
