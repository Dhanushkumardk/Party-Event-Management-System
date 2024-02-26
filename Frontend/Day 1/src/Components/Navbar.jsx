import React, { useState } from "react";
import "../assets/css/AdminNavbar.css";
import { CgProfile } from "react-icons/cg";


import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="" className="title">
        Party Planner
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
         <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact">Contact</NavLink>
        </li> */}
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/feedback">Feedback</NavLink>
        </li>
    
        <div className="icon">
        <Link to="/">
        <CgProfile size={30} />
        </Link>
        </div>

      </ul>
    </nav>
  );
};