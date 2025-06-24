import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import Header from "./components/Header/Header";
import RobotTable from "./components/RobotTable/RobotTable";
import RobotDetail from "./components/RobotDetail/RobotDetail";
import ContactFooter from "./components/ContactFooter/ContactFooter";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import mainImage from "./assets/main.png";
import "./App.css";

function App() {
  // Estados para la autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Estados originales de la aplicación
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [language, setLanguage] = useState("es");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const FIXED_CREDENTIALS = {
    username: "robotlover",
    password: "adoptar2025",
  };

  useEffect(() => {
    if (isAuthenticated) {
      const fetchRobots = async () => {
        try {
          const response = await fetch(
            "https://gist.githubusercontent.com/josejbocanegra/aa5fb56863c326ebb3d558f8a225d223/raw/5c55db5012e5fc24862e05847ff1f2927aea11db/robots.json"
          );
          if (!response.ok) throw new Error("Error al cargar los datos");
          const data = await response.json();
          const formattedData = data.map((robot) => ({
            id: robot.id,
            name: robot.nombre,
            model: robot.modelo,
            company: robot.empresaFabricante,
            year: robot.añoFabricacion,
            cpu: robot.capacidadProcesamiento,
            features: robot.humor,
            image: robot.imagen,
          }));
          setRobots(formattedData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchRobots();
    }
  }, [isAuthenticated]);

  const handleLogin = (username, password) => {
    if (
      username === FIXED_CREDENTIALS.username &&
      password === FIXED_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError(
        language === "es"
          ? "Credenciales incorrectas. Usuario: robotlover, Contraseña: adoptar2024"
          : "Wrong credentials. User: robotlover, Password: adoptar2024"
      );
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedRobot(null);
    setLoading(true);
  };

  // Manejadores originales
  const handleRobotSelect = (robot) => {
    setSelectedRobot(robot);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Renderizado del login si no está autenticado
  if (!isAuthenticated) {
    return (
      <div className="app-container">
        <Header language={language} />

        <Container className="main-content">
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

          <div className="login-form-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const username = e.target.elements.username.value;
                const password = e.target.elements.password.value;
                handleLogin(username, password);
              }}
            >
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  {language === "es" ? "Nombre de usuario" : "Username"}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="robotlover"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  {language === "es" ? "Contraseña" : "Password"}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="adoptar2025"
                  required
                />
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                <button type="submit" className="btn btn-primary me-md-2">
                  {language === "es" ? "Ingresar" : "Login"}
                </button>
                <button
                  type="reset"
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    document.getElementById("username").value = "";
                    document.getElementById("password").value = "";
                  }}
                >
                  {language === "es" ? "Cancelar" : "Cancel"}
                </button>
              </div>

              <div className="credentials-hint mt-3 text-center">
                <small className="text-muted">
                  {language === "es"
                    ? "Usa: robotlover / adoptar2024"
                    : "Use: robotlover / adoptar2024"}
                </small>
              </div>
            </form>
          </div>
        </Container>

        <ContactFooter language={language} />
      </div>
    );
  }

  // Renderizado normal si está autenticado
  if (loading) return <div className="text-center my-5">Cargando...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="app-container">
      <Header language={language} />

      <Container className="main-content">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="text-center flex-grow-1">
            <img src={mainImage} alt="Robots" className="main-image" />
          </div>
          <Button
            variant="outline-danger"
            onClick={handleLogout}
            className="logout-button"
          >
            {language === "es" ? "Cerrar sesión" : "Logout"}
          </Button>
        </div>

        <LanguageSelector
          language={language}
          onChangeLanguage={changeLanguage}
        />

        <Row>
          <Col md={selectedRobot ? 7 : 12}>
            <RobotTable
              robots={robots}
              onSelectRobot={handleRobotSelect}
              language={language}
              selectedRobotId={selectedRobot?.id}
            />
          </Col>

          {selectedRobot && (
            <Col md={5}>
              <RobotDetail robot={selectedRobot} language={language} />
            </Col>
          )}
        </Row>
      </Container>

      <ContactFooter language={language} />
    </div>
  );
}

export default App;
