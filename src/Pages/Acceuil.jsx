import { Link } from "react-router-dom";

function Acceuil() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Acceuil</h1>
      <div className="Acceuil">
        <Link to="/">Acceuil</Link>
        <Link to="/Apropos">Apropos</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Creation">S'inscrire</Link>
        <Link to="/Connexion">Connecter</Link>
      </div>
    </>
  );
}

export default Acceuil;
