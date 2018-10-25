import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Note-feature">
      <h1> Lambda Notes </h1>
      <button className="Note-buttons">
        <Link to="/"> View Your Notes </Link>
      </button>
      <button className="Note-buttons">
        <Link to="/createnote"> +Create New Note </Link>
      </button>
    </div>
  );
};

export default Sidebar;
