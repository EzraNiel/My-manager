// import { Link } from "react-router-dom";
import BarDeNavigation from "../Components/Ezra/BarDeNavigation";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import image_acceuil from "../Assets/Image/Sary.jpg";
import "../Style/Acceuil.css";

function Acceuil() {
  return (
    <>
      <BarDeNavigation></BarDeNavigation>
      <div className="grid-container">
        <div className="containt">
          <h1>Bonjour cher visiteur </h1>
          <br />
          <p>
            Ceci est la tout première version de{" "}
            <span className="text_my_manager">My Manager</span>,un apk web conçu
            pour vous aidez dans la gestion de vos budget et de vos
            finances.Elle est pour le moment la version 1.0 mais des mises à
            jour pour la version 2.0 ne vont pas tarder car noter objectif est
            tout de même de satisfaire nos clients . Nous sommes encore des
            étudint de la 3éme année en informatique chez <span>ISPM</span> ({" "}
            <span>I</span>
            nstitu <span>S</span>upérieur <span>P</span>
            olytechniquue de <span>M</span>adagascar)
          </p>
          <br />
          <p>
            <Link role="button" class="btn btn-warning btn-lg" to="/Apropos">
              Détail
            </Link>
          </p>
          <br />
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter your mail ..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-primary" id="button-addon2">
              Sign Up
            </Button>
          </InputGroup>
        </div>
        <img
          alt=""
          src={image_acceuil}
          min-width="100vh"
          className="d-inline-block align-top"
        />
      </div>
      {/* <span className="circle1"></span>
      <span className="circle2"></span> */}
      <span className="circle3"></span>
      <span className="circle4"></span>
    </>
  );
}

export default Acceuil;
