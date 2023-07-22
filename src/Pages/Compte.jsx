import { Link } from "react-router-dom";

function Compte() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Welcom "My manager"</h1>
      <div className="Compte">
        <Link to="/">Acceuil</Link>
      </div>
    </>
  );
}

export default Compte;
