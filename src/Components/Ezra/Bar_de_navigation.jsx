import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Assets/Image/Logo-MyManager-2.png";
import "../../Style/Bar_de_nav.css";

function Bar_de_navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="row">
        <Navbar.Brand className="col-lg-7">
          {" "}
          <img
            alt=""
            src={img}
            width="200"
            height="90"
            className="d-inline-block align-top"
          />{" "}
          My Manager
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="me-auto col-lg-5" navbarScroll>
            <Nav.Link as={Link} to="/Apropos">
              A propos
            </Nav.Link>
            <Nav.Link as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
          <div className="btn_style">
            <Button variant="outline-secondary" as={Link} to="/Connexion">
              Sign In
            </Button>
          </div>
          <div className="btn_style">
            <Button variant="outline-primary" as={Link} to="/Creation">
              Sign Up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Bar_de_navigation;
