import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./NoteView.css";
import Sidebar from "../subcomponents/Sidebar/Sidebar";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      note: ""
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
        this.setState({ note: res.data.note });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { note } = this.state;
    return (
      <div className="Note">
        <Sidebar />
        <div className="Note__Page">
          <div className="NoteView__links">
            <Link className="NoteView__link" to={`/edit/${this.state.id}`}> edit </Link>
            <Link className="NoteView__link" to={`/delete/${this.state.id}`}> delete </Link>
          </div>
          <h1 className="Note__title"> Note Name </h1>
  
            <div className="Note-text">
              <h3> {note.title} </h3>
              <p> {note.body} </p>
          </div>
        </div>
      </div>
    );
  }
}

//   return (
//     <div className="Note">
//       <Sidebar />
//       <div className="Note-holder">
//         <div className="Note-links">
//           <Link to={`/edit/${id}`}> edit </Link>
//           <Link to={`/delete/${id}`}> delete </Link>
//         </div>
//         <div className="Note-body">
//           <h1> Note Name </h1>
//           <div className="Note-text">
//             {/* <h3> {note.title} </h3>
//             <p> {note.body} </p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default NoteView;
