import { Link } from "react-router-dom";
import '../Components/Tsanta/style.css';
import GroupImage from '../Components/Tsanta/img/Group.png'
import { useState } from "react";
function Creation() {
  // state
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [mail, setMail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmMotDePasse, setconfirmMotDePasse] = useState('');
  // comportement

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Identification:', mail);
    console.log('Mot de passe:', motDePasse);
    console.log('Confirmation de mot de pase:', confirmMotDePasse);
// affichage (render)
    setNom('');
    setPrenom('');
    setMail('');
    setMotDePasse('');
    setconfirmMotDePasse('');
  };
  
  return (
    <>
      <div className="container">
        <div className="content-left">
          <h1>My manager</h1>
          <p>Pour continuer, créer votre compte ici</p>
          <div className="img"> 
            <img src={GroupImage} alt="Groupe" />
          </div>          
        </div>
        <div className="content-right">
          <div className="cercle1"></div>
          <div className="cercle2"></div>
          <div className="container-right">            
              <h1>Creer un compte</h1>
              <form action="submit" onSubmit={handleSubmit}>
                <div className="form-container">
                  <div className="input-row">
                    <div className="input-group-nom">
                      <input type="text" id="nom"value={nom} onChange={(e) => setNom(e.target.value)} className="nom" placeholder=" " />
                      <label htmlFor="nom">Nom</label>
                    </div>
                    <div className="input-group-prenom">
                      <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="prenom" placeholder=" " />
                      <label htmlFor="prenom">Prenom</label>
                    </div>
                  </div>
                  <div className="input-group-mail">
                    <input type="email" id="mail" value={mail} onChange={(e) => setMail(e.target.value)} className="mail" placeholder=" " />
                    <label htmlFor="mail">Email</label>
                  </div>
                  <div className="input-group-mdp">
                    <input type="password" id="mdp" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} className="mdp" placeholder=" " />
                    <label htmlFor="mdp">Mot de passe</label>
                  </div>
                  <div className="input-group-ConfirmMdp">
                    <input type="password" id="ConfirmMdp" value={confirmMotDePasse} onChange={(e) => setconfirmMotDePasse(e.target.value)} className="ConfirmMdp" placeholder=" " />
                    <label htmlFor="ConfirmMdp">Confirmer le mot de passe</label>
                  </div>
                  <Link to="/">
                    <button className="creer">Créer</button>
                  </Link>                  
                  <p>Le mot de passe doit contenir au moins 8 caractères</p>
                  <div className="line-container">
                    <hr className="line short" />
                    <span>ou</span>
                    <hr className="line short" />
                  </div>
                  
                  <Link to="/Connexion">
                    <button className="connexion">Connecter</button>
                  </Link>
                 
                </div>
              </form>
              </div>
          </div>
      </div>
    </>
  );
}

export default Creation;
