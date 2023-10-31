import { Link } from "react-router-dom";
import '../Components/Edwella/contact.css';
import logo from '../Components/Edwella/cpt.jpg'
import phone from '../Components/Edwella/Phone.png'
import mail from '../Components/Edwella/Mail.png'
import fb from '../Components/Edwella/Fb1.png'
import mess from '../Components/Edwella/Message.png'



function Contact() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (

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
        <ul>
          <li id="phone">
            <img src={phone}></img>
            <h3>Téléphone</h3>
            <p>+03.......</p>
          </li>
          <li id="mail">
            <img src={mail}></img>
            <h3>Mail</h3>
            <p>MyManager@bmail.com</p>
          </li>
          <li id="fb"> <img src=""></img>
            <img src={fb}></img>
            <h3>Facebook</h3>
            <p>My-Manager</p>
          </li>
        </ul>
      </div>
     
    </div>

  );
}

export default Contact;
