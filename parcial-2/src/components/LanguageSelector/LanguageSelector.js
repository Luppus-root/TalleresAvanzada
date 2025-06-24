import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const LanguageSelector = ({ language, onChangeLanguage }) => {
  return (
    <div className="language-selector mb-4">
      <ButtonGroup>
        <Button
          variant={language === "es" ? "primary" : "outline-primary"}
          onClick={() => onChangeLanguage("es")}
        >
          Español
        </Button>
        <Button
          variant={language === "en" ? "primary" : "outline-primary"}
          onClick={() => onChangeLanguage("en")}
        >
          English
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default LanguageSelector;
