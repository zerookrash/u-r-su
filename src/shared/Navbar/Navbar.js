import React from "react";
import {Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <Link className="navbar-brand" to="/">
          U-R-US
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Registro
            </NavLink>

            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/calendario"
            >
              Calendario
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
