import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import "../assets/css/AdminNavbar.css";
import { Link, NavLink } from "react-router-dom";

export const AdminNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Admin Panel
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
         <li>
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/admin/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/admin/feedback">View Feedback</NavLink>
        </li>
    
        <div className="icon">
        <Link to="/adminLogin">
        <CgProfile size={30} />
        </Link>
        </div>

      </ul>
    </nav>
  );
};