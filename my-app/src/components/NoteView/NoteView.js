import React from "react";
import { Link } from "react-router-dom";

import "./NoteView.css";
import Sidebar from "../subcomponents/Sidebar/Sidebar";

export const NoteView = props => {
  const id = props.match.params.id;
  const note = props.note.filter(el => el._id === id)[0];

  return (
    <div className="Note">
      <Sidebar />
      <div className="Note-holder">
        <div className="Note-links">
          <Link to={`/edit/${id}`}> edit </Link>
          <Link to={`/delete/${id}`}> delete </Link>
        </div>
        <div className="Note-body">
          <h1> Note Name </h1>
          <div className="Note-text">
            <h3> {note.title} </h3>
            <p> {note.body} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
