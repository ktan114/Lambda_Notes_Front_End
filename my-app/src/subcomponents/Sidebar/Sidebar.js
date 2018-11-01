import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h1 className="Sidebar__h1"> Lambda Notes </h1>
      <button className="Note__button">
        <Link className="Sidebar__links" to="/">
          {" "}
          View Your Notes{" "}
        </Link>
      </button>
      <button className="Note__button">
        <Link className="Sidebar__links" to="/createnote">
          {" "}
          + Create New Note{" "}
        </Link>
      </button>
    </div>
  );
};

export default Sidebar;
