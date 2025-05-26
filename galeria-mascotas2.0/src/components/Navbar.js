// src/components/Navbar.js
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Button as={Link} to="/" variant="outline-light">
          Inicio
        </Button>
        <Navbar.Brand as={Link} to="/mascotas">
          Adóptame
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
