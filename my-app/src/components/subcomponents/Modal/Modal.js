import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Modal.css";

const Modal = ({ handleClose, show, id }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleDelete = () => {
    axios
      .delete(`https://ktan-notes.herokuapp.com/notes/${id}`)
      .then(() => {})
      .catch(err => console.log(err));
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1 className="Text">Are you sure you want to delete this?</h1>
        <Link to="/">
          <button onClick={handleDelete}>Delete</button>
        </Link>
        <button onClick={handleClose}>No</button>
      </section>
    </div>
  );
};

export default Modal;
