import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const logOut = () => {
    localStorage.clear();
  };

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
      <button onClick={logOut} className="Note__button Note__button--red">
        <Link className="Sidebar__links" to="/login">
          Logout
        </Link>
      </button>
    </div>
  );
};

export default Sidebar;
