import { Link } from "react-router-dom";

function Connexion() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Se Connecter</h1>
      <div className="Connexion">
        <Link to="/">Acceuil</Link>
        <Link to="/Creation">S'inscrire</Link>
        <Link to="/Compte">Confirmer</Link>
      </div>
    </>
  );
}

export default Connexion;
