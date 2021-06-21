import React from "react";
import logo from "./../img/pplogo.png";
import "./../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
    </header>
  );
};

export default Header;
