import { Link } from "react-router-dom";

function Contact() {
  // STATE (état,données)

  // COMPORTEMENT

  //   AFFICHAGE (RENDER)
  return (
    <>
      <h1>Contact</h1>
      <div className="Contact">
        <Link to="/">Acceuil</Link>
        <Link to="/Apropos">A propos</Link>
      </div>
    </>
  );
}

export default Contact;
