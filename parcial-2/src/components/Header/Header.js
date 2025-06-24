import React from "react";
import "./Header.css";

const Header = ({ language }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="header-title">
          {language === "es"
            ? "Adopta un Robot con Robot Lovers!"
            : "Adopt a Robot with Robot Lovers!"}
        </h1>
      </div>
    </header>
  );
};

export default Header;
