import { Link } from "react-router-dom";

function Creation() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>S'inscrire</h1>
      <div className="Creation">
        <Link to="/">Acceuil</Link>
        <Link to="/Connexion">Connecter</Link>
      </div>
    </>
  );
}

export default Creation;
