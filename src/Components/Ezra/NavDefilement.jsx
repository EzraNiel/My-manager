import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import logoMyManager from "../../Assets/Image/Logo-MyManager-2.png";

function NavDefilement() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* Partie gauche : Logo */}
        <Navbar.Brand href="#">
          <img
            src={logoMyManager}
            alt="Logo"
            width="50"
            height="50"
            // className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Partie droite :Icon utiltisateur et menu*/}
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary" className="me-2">
            Utilisateur
          </Button>
          <Button variant="outline-primary">Menu</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavDefilement;
