import React from "react";
import { Link } from "react-router-dom";

import "./ListView.css";
import Sidebar from "../subcomponents/Sidebar/Sidebar";

export const ListView = props => {
  return (
    <div className="Note">
      <Sidebar />
      <div className="Note-content">
        <h1> Your Notes: </h1>
        <div className="Note-notesDisplay">
          {props.note.map((note, index) => {
            return (
              <div key={index} className="Note-notes">
                <Link to={`/noteView/${note._id}`}>
                  <h3> {note.title} </h3>
                  <p> {note.body} </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
