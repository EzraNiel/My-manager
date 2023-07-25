import React from 'react';
import { Link } from "react-router-dom";
import './styleConnexion.css';
import 'bootstrap/dist/css/bootstrap.css';
import img from './illustration.png';
// import { button } from 'react-bootstrap';

export function Formulaire() {
    return( 
  <>  

      {/* main container */}
    <div className="container1 ">
        <div className="row border-5 shadow box-area">
    
                {/* left box */}
                <div className=" d-flex left-box" id="box-left">
                <form>
                        <div className="row">
                                <div className="header mb-2">
                                    <h3> Se connecter à un compte</h3>
                                </div>
                                <div className="input-group mb-2">
                                        <input
                                            type="email"
                                            name=""
                                            id=""
                                            className="effect-3"
                                            placeholder="Entrer votre email...."
                                        />
                                        <span class="border"></span>
                                </div>
                                <div className="input-group mb-5">
                                    <input
                                            type="password"
                                            name=""
                                            id=""
                                            className="effect-3"
                                            placeholder="Saisir votre mot de passe...."
                                    />
                                <span class="border"></span>
                                </div>
                            
                                <Link to="/Compte" ><button type='submit' id="bout1" >Se connecter</button></Link>
                                
                                <div className="line-container mb-4">
                                    <hr className="line short" />
                                    <span>  ou </span>
                                    <hr className="line short" />
                                </div>

                                <Link to="/Creation">
                                <button type='submit' id="bout1" className="mb-5">Créer un compte  ☻</button>
                                </Link>
                            
                        
                        </div>
                </form>  
                <div className="ROND">
                     <div className="rond1"></div>
                     <div className="rond2"> </div>
                </div>
                </div>
                {/* right box */}
                <div className="align-items-center flex-column mb-4 right-box">
                    <h3 className="mb-4"> My manager</h3>
                    <p className="mb-6">Pour accéder à votre compte, veuillez entrer votre identité ainsi que votre mot de passe ici</p>
                    <div id="illustration"><img src={img} alt=""  className=""/></div>
                </div>
               
    
        </div>
      
    </div>
   
    </>  





    );
}


