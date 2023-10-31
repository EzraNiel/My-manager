import React, { useState } from "react";
import { Link } from "react-router-dom"; // Pour la redirection
import "./styleConnexion.css";
import "bootstrap/dist/css/bootstrap.css";
import img from "./illustration.png";
import axios from "axios";
import { setAuthToken } from "../../api";
// import { button } from 'react-bootstrap';

export function Formulaire() {
  const [mail, setMail] = useState("");
  const [mdp, setMdp] = useState("");
  // const history = history();

  // Comportement logique
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        email: mail,
        motDePass_utili: mdp,
      });

      // Stockez le jeton JWT dans le stockage local
      const token = response.data.token;
      localStorage.setItem("jwtToken", token);

      // Configurez le jeton JWT dans les en-têtes de toutes les futures requêtes
      setAuthToken(token);
      alert("Authentification reussi");
      // Redirigez l'utilisateur vers  une autre page
      // history.push("/Compte");
    } catch (error) {
      alert("Erreur d'authentification");
    }
  };
  return (
    <>
      {/* main container */}
      <div className="container1 ">
        <div className="row border-5 shadow box-area">
          {/* left box */}
          <div className=" d-flex left-box" id="box-left">
            <form>
              <div className="row">
                <div className="header mb-4">
                  <h3> Se connecter à un compte</h3>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    name=""
                    id=""
                    className="effect-3"
                    placeholder="Entrer votre email...."
                  />
                  <span class="border"></span>
                </div>
                <div className="input-group mb-5">
                  <input
                    type="password"
                    value={mdp}
                    onChange={(e) => setMdp(e.target.value)}
                    name=""
                    id=""
                    className="effect-3"
                    placeholder="Saisir votre mot de passe...."
                  />
                  <span class="border"></span>
                </div>

                <Link to="/Compte" className="mb-3">
                  <button type="submit" id="bout1" onClick={handleLogin}>
                    Se connecter
                  </button>
                </Link>

                <div className="line-container mb-3">
                  <hr className="line short" />
                  <span> ou </span>
                  <hr className="line short" />
                </div>

                <Link to="/Creation">
                  <button type="submit" id="bout1" className="mb-5">
                    Créer un compte ☻
                  </button>
                </Link>
              </div>
            </form>
            <div className="ROND">
              <div className="rond1"></div>
              <div className="rond2"> </div>
            </div>
          </div>
          {/* right box */}
          <div className="align-items-center flex-column mb-4 right-box">
            <h3 className="mb-4"> My manager</h3>
            <p className="">
              Pour accéder à votre compte, veuillez entrer votre identité ainsi
              que votre mot de passe ici
            </p>
            <div id="illustration">
              <img src={img} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
