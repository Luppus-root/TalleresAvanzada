import React, { useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import "./LoginForm.css";

const LoginForm = ({ onLogin, language }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>
            {language === "es" ? "Nombre de usuario" : "Username"}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="robotlover"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>
            {language === "es" ? "Contraseña" : "Password"}
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="adoptar2024"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <ButtonGroup className="w-100">
          <Button variant="primary" type="submit" className="login-button">
            {language === "es" ? "Ingresar" : "Login"}
          </Button>
          <Button
            variant="outline-secondary"
            type="reset"
            className="cancel-button"
            onClick={() => {
              setUsername("");
              setPassword("");
            }}
          >
            {language === "es" ? "Cancelar" : "Cancel"}
          </Button>
        </ButtonGroup>
      </Form>

      <div className="credentials-hint mt-3">
        <small className="text-muted">
          {language === "es"
            ? "Usa: robotlover / adoptar2024"
            : "Use: robotlover / adoptar2024"}
        </small>
      </div>
    </div>
  );
};

export default LoginForm;
