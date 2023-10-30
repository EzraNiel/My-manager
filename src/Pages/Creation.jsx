import { Link } from "react-router-dom";
import '../Components/Tsanta/style.css';
import GroupImage from '../Components/Tsanta/img/Group.png'
import { useState } from "react";
import axios from 'axios'
function Creation() {
  // state
  const [nom_utili, setNom] = useState('');
  const [prenom_utili, setPrenom] = useState('');
  const [mail_utili, setMail] = useState('');
  const [motDePass_utili, setMotDePasse] = useState('');
  const [confirmMotDePasse, setconfirmMotDePasse] = useState('');
  // comportement

  const handleSubmit = (e) => {
    e.preventDefault();
    if((nom_utili !=='') && prenom_utili !=='' && motDePass_utili !=='' && mail_utili !==''){
      if(motDePass_utili === confirmMotDePasse){
        axios.post('http://127.0.0.1:2023/utilisateurs',{nom_utili, prenom_utili, motDePass_utili ,mail_utili})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        setNom('');
        setPrenom('');
        setMail('');
        setMotDePasse('');
        setconfirmMotDePasse('');
      }else{
        alert("Steddi be")
      }
      
    }else{
      console.log("TSIARO be tay  ehhhhhhhhhh"); 
    }
//     console.log('Nom:', nom);
//     console.log('Prénom:', prenom);
//     console.log('Identification:', mail);
//     console.log('Mot de passe:', motDePasse);
//     console.log('Confirmation de mot de pase:', confirmMotDePasse);

// affichage (render)
   
  };
  return (
    <>
      <div className="container1">
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
                      <input type="text" id="nom" value={nom_utili} onChange={(e) => setNom(e.target.value)} className="nom" placeholder=" " />
                      <label htmlFor="nom">Nom</label>
                    </div>
                    <div className="input-group-prenom">
                      <input type="text" id="prenom" value={prenom_utili} onChange={(e) => setPrenom(e.target.value)} className="prenom" placeholder=" " />
                      <label htmlFor="prenom">Prenom</label>
                    </div>
                  </div>
                  <div className="input-group-mail">
                    <input type="email" id="mail" value={mail_utili} onChange={(e) => setMail(e.target.value)} className="mail" placeholder=" " />
                    <label htmlFor="mail">Email</label>
                  </div>
                  <div className="input-group-mdp">
                    <input type="password" id="mdp" value={motDePass_utili} onChange={(e) => setMotDePasse(e.target.value)} className="mdp" placeholder=" " />
                    <label htmlFor="mdp">Mot de passe</label>
                  </div>
                  <div className="input-group-ConfirmMdp">
                    <input type="password" id="ConfirmMdp" value={confirmMotDePasse} onChange={(e) => setconfirmMotDePasse(e.target.value)} className="ConfirmMdp" placeholder=" " />
                    <label htmlFor="ConfirmMdp">Confirmer le mot de passe</label>
                  </div>
                  {/* <Link to="/"> */}
                    <button className="creer" type="submit">Créer</button>
                  {/* </Link>                   */}
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
  )
}

export default Creation;
