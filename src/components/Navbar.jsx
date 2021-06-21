import React from "react";
import { NavLink } from "react-router-dom";
import "./../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
};

export default Navbar;
