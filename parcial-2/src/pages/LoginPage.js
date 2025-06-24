import React from "react";
import { Container, Alert } from "react-bootstrap";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm/LoginForm";
import ContactFooter from "../components/ContactFooter/ContactFooter";
import mainImage from "../assets/main.png";
import "./LoginPage.css";

const LoginPage = ({ onLogin, language, loginError }) => {
  return (
    <div className="app-container">
      <Header language={language} />

      <Container className="login-page-content">
        <div className="text-center mb-4">
          <img src={mainImage} alt="Robots" className="main-image" />
        </div>

        <h2 className="text-center mb-4">
          {language === "es" ? "Inicio de sesión" : "Login"}
        </h2>

        {loginError && (
          <Alert variant="danger" className="mb-4">
            {loginError}
          </Alert>
        )}

        <LoginForm onLogin={onLogin} language={language} />
      </Container>

      <ContactFooter language={language} />
    </div>
  );
};

export default LoginPage;
