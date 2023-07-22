import { Link } from "react-router-dom";
import '../Components/Steddi/Compte.css'

function Compte() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <div className="fond">
      <div className="glisseGauche">
        <ul>
          <li><Link to="/">Acceuil</Link></li>
          <li><Link to="/Apropos">A propos</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default Compte;
