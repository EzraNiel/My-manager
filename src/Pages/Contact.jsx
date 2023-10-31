import { Link } from "react-router-dom";
import '../Components/Edwella/contact.css';
import logo from '../Components/Edwella/Capture d’écran 2023-10-23 115608.jpg';
import Cont from '../Components/Edwella/Contact.png';



function Contact() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
    <div className="Contact">
      <div className="head">
      <img  className="PictLogo"  src={logo} alt="logo"></img>
      <h1 className="Page">Contact</h1>
        <ul className="HeadList">
        <li><Link to="/">Acceuil</Link></li>
        <li><Link to="/Apropos">A propos</Link></li>
        </ul>
      </div>
      <h2>Veuillez nous contacter!</h2>
      <div className="Section">
        <img src={Cont}></img>
      </div>
     
    </div>
    </>
  );
}

export default Contact;
