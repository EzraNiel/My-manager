import { Link } from "react-router-dom";
import logo from '../Components/Edwella/Capture d’écran 2023-10-23 115608.jpg'
import '../Components/Edwella/apropos.css';

function Apropos() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
    <div className="Apropos">
      <div className="head">
        <img className="PictLogo" src={logo} alt="" />
        <h1 className="Page">A propos</h1>
        <ul className="HeadList">
        <li><Link to="/">Acceuil</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
      <div className="Para">
        <p>
        L’application web “My manager” trace de façon prévisionnelle l’activité de votre entreprise <br></br>
          ou l’activité économique de vos quotidiens. Une vue d’ensemble de l’organisation des budgets,<br></br>
          les fonctionnalités espérées seront établies dans cette application web.<br></br>
Elle permet d’établir : <br></br>
Une prévision budgétaire en prenant en compte les données historiques afin de mettre en oeuvre un plan <br></br>
globale du budget pour les mois ou années a venir.<br></br>
Vous élaborez ainsi une planification stratégique pour votre entreprise sur le moyen et le long terme.<br></br>
Une budgétisaion vous permet d’établir un rapport entre vos objectifs espérés et les ressources mises à <br></br>
dispositions pour les accomplir.<br></br>
Un contrôle budgétaire vous permet de fixer des critères afin de determiner si vos objectifs ont été <br></br>
atteints ou non, mais également de comparer vos dépenses et recettes budgétaires aux dépenses et recettes <br></br>
réelles reçues.
       </p>
      </div>
    </div>
    </>
  );
}

export default Apropos;
