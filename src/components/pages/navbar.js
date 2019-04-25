import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {

  return (
    <nav className="navbar">
      <ul>
      <li className="brand">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li>
        Click an image to begin!
      </li>
      <li>
        Score: {} | Top Score: {}
      </li>
    </ul>
    </nav>
  );
}

export default NavBar;
