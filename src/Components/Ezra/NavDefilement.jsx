import React from "react";
import { Navbar, Nav, Container, Dropdown, ButtonGroup } from "react-bootstrap";
import logoMyManager from "../../Assets/Image/Logo-MyManager-2.png";
import logoIspm from "../../Assets/Image/ISPM.png";
import "../../Style/NavDefilement.css";

function NavDefilement() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        {/* Partie gauche : Deux logos et icône initial */}
        <Navbar.Brand>
          <img
            src={logoMyManager}
            alt="Logo 1"
            className="logo1"
            // className="d-inline-block align-top me-2"
          />

          <img
            src={logoIspm}
            alt="Logo 2"
            className="logo2"
            // className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>

        {/* Partie droite : Menu déroulant */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div className="initial-icon">A</div>{" "}
          {/* Remplacez "A" par l'initial de l'utilisateur */}
          <Nav>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle
                split
                variant="primary"
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#profile">Profil</Dropdown.Item>
                <Dropdown.Item href="#settings">Paramètres</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#logout">Se déconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavDefilement;
