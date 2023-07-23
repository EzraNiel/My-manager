import { Link } from "react-router-dom";
import '../Components/Steddi/Compte.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react'; 
import Transaction from '../Components/Steddi/pagesCompte/Transaction';
import Categories from '../Components/Steddi/pagesCompte/Categories';
import Rapport from '../Components/Steddi/pagesCompte/Rapport';

function Compte() {
  // STATE (état,données)
  const [display, setDisplay]= useState('affichage1')
  // COMPORTEMENT
  const handleButtonClick= function(affichage){
    setDisplay(affichage)
  }
  //   AFFICHAGE (RENDER)
  return (
    <div className="fond">
      
      <div className="container-fluid barnav">zavtra</div>
      <div className="glisseGauche">
        <div className="Parametre">
          <h4>Parametre</h4>
          <div></div>
        </div>
        <ul className="listUl">
          <li><Link to="/"><div className="list">Acceuil</div></Link></li>
          <li><Link to="/Apropos"><div className="list">A propos</div></Link></li>
          <li><Link to="/Connexion"><div className="list">Deconnexion</div></Link></li>
        </ul>
      </div>
      <div className="content">
        <div className="navContent row">
          <button className="fenetre1 col-md-3 " onClick={()=>handleButtonClick('affichage1')} >TRANSACTIONS</button>
          <button className="fenetre2 col-md-3 " onClick={()=>handleButtonClick('affichage2')}>CATEGORIES</button>
          <button className="fenetre3 col-md-3 " onClick={()=>handleButtonClick('affichage3')}>RAPPORTS</button>
        </div>
        <div className="divcontenu">
          {display=== 'affichage1' && <Transaction/>}
          {display==='affichage2' && <Categories/>}
          {display==='affichage3' && <Rapport/>}
        </div>
      </div>
      <div className="Calculatrice"><h1>$</h1></div>
      <div className="footer"></div>
    </div>
  );
}

export default Compte;
