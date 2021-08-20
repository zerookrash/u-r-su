import React from 'react';
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <div className="container-fluid nav-wraper">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            
            <NavLink 
              exact 
              className="nav-link" 
              activeClassName="active" 
              to="/"
            >

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
  )
}
