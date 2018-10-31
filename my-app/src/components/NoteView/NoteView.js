import React from "react";
import { Link } from "react-router-dom";

import "./NoteView.css";
import Sidebar from "../subcomponents/Sidebar/Sidebar";

const NoteView = props => {
  console.log("NoteView props", props)
  return (
    <div className="Note">
      <Sidebar />
      <div className="Note__Page">
        <div className="NoteView__links">
          <Link
            className="NoteView__link"
            to={{
              pathname: `/edit/${props.location.state.note._id}`,
              state: { _id: props.location.state.note._id }
            }}
          >
            {" "}
            edit{" "}
          </Link>
          <Link
            className="NoteView__link"
            to={{
              pathname: `/delete/${props.location.state.note._id}`
            }}
          >
            {" "}
            delete{" "}
          </Link>
        </div>
        <div className="NoteView__content">
          <h1 className="Note__title Note__title--mod">
            {" "}
            {props.location.state.note.title}{" "}
          </h1>
          <p className="NoteView__p"> {props.location.state.note.body} </p>
        </div>
      </div>
    </div>
  );
};

export default NoteView;
