import React, { Component } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../subcomponents/Sidebar";

class ListView extends Component {
  // componentDidMount() {
  //   this.props.history.push("/login");
  // }
  render() {
    return (
      <div className="Note">
        <Sidebar />
        <div className="Note__Page">
          <h1 className="Note__title"> Your Notes: </h1>
          <div className="List__notes">
            {this.props.notes.map(note => {
              return (
                <Link
                  key={note._id}
                  className="List__note__link"
                  to={{
                    pathname: `/noteView/${note._id}`,
                    state: { note: note }
                  }}
                >
                  <div className="List__note">
                    <h3 className="List__note__h3"> {note.title} </h3>
                    <p className="List__note__p"> {note.body} </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListView;
