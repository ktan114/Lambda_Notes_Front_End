import React, { Component } from 'react';
import { Route } from 'react-router';
import axios from 'axios'

import './App.css';
import { NotesDisplay } from './components/NotesDisplay/NotesDisplay';
import NewNote from './components/NewNote/NewNote';
import { Notes } from './components/Notes/Notes';
import Edit from './components/Edit/Edit';  

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],

    }
  }
  
  componentDidMount() {
    axios
    .get(`https://glacial-bayou-87205.herokuapp.com/api/notes`)
    .then(res => {
      this.setState({ note: res.data.notes })

    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Route exact path = '/' render={(props) => (<NotesDisplay {...props} note={this.state.note} /> )}/>

        <Route path = '/newNote' component={ NewNote } />
          
        <Route path = '/noteView/:id' render={(props) => (<Notes {...props} note={this.state.note} /> )}/>

        <Route path = '/edit/:id' component= { Edit } />
      </div>
    );
  }
}

export default App;
