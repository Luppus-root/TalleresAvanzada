import React from "react";
import "./ContactFooter.css";

const ContactFooter = ({ language }) => {
  return (
    <footer className="contact-footer">
      <p>
        {language === "es" ? "Contáctanos:" : "Contact us:"} <br />
        +57 3102105253 - info@robot-lovers.com - @robot-lovers
      </p>
    </footer>
  );
};

export default ContactFooter;
