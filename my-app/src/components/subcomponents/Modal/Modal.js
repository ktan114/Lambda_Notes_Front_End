import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Modal.css";

const Modal = ({ handleClose, show, id }) => {
  const showHideClassName = show ? "Modal display-block" : "Modal display-none";

  const handleDelete = () => {
    axios
      .delete(`https://ktan-notes.herokuapp.com/notes/${id}`)
      .then(() => {})
      .catch(err => console.log(err));
  };

  return (
    <div className={showHideClassName}>
      <section className="Modal__Layer">
        <h1 className="Modal__Text">Are you sure you want to delete this?</h1>
        <section className="Modal__Buttons">
          <Link to="/">
            <button className="Modal__Button" onClick={handleDelete}>
              Delete
            </button>
          </Link>
          <button className="Modal__Button Modal__Button--blue" onClick={handleClose}>
            No
          </button>
        </section>
      </section>
    </div>
  );
};

export default Modal;
