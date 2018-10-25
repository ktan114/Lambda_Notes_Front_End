import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h1 className="Sidebar__h1"> Lambda Notes </h1>
      <button className="Sidebar__buttons">
        <Link className="Sidebar__links" to="/"> View Your Notes </Link>
      </button>
      <button className="Sidebar__buttons">
        <Link className="Sidebar__links" to="/createnote"> + Create New Note </Link>
      </button>
    </div>
  );
};

export default Sidebar;
