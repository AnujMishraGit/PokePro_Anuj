import React from "react";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="logo" className=" z-50 bg-black w-10 h-12" />
    </header>
  );
};

export default Header;
