import { Link } from "react-router-dom";
import '../Components/Steddi/Compte.css'

function Compte() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <div className="fond">
    <h1>Welcom "My manager"</h1>
      <div >
        <Link to="/">Acceuil</Link>
      </div>
    </div>
  );
}

export default Compte;
