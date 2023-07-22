import { Link } from "react-router-dom";

function Apropos() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>A propos</h1>
      <div className="Apropos">
        <Link to="/">Acceuil</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </>
  );
}

export default Apropos;
