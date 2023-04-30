import React from "react";
import pokeball from "../../assets/assets/pokeball-icon.png";
import "./header.css";
const Header: React.FC = () => {
  return (
    <header >
      <div className="header__container">
        <div>
          {/* <img src={pokeball} alt="Pokepro Logo" className="header__logo" /> */}
        </div>
        <div className="header__title">
          Pokepro  
        </div>
        <div>
          {/* <img src={pokeball} alt="Pokeball Logo" className="header__logo" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
