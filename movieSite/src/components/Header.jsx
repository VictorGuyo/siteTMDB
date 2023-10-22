import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Coup de cœur
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
