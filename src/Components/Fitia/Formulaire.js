import React from 'react';
import './styleConnexion.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { button } from 'react-bootstrap';

export function Formulaire() {
    return( 
    <> 
    {/* main container */}
    <div className="container justify-content-center align-items-center min-vh-100">
        {/* login container */}
        <div className="row border-5 shadow box-area">
    
                {/* left box */}
                <div className="col-md-6 rounded-6 d-flex left-box" id="box-left">
                <form>
                <div className="row">
                        <div className="header mb-4">
                            <h3> Se connecter à un compte</h3>
                        </div>
                        
                        <div for='form-group' className="input-group mb-5">
                            <input type='email' placeholder="Email..." className="email"/>
                        </div>
                        <div for='form-group' className="input-group mb-5">
                            <input type='password' placeholder="Mot de passe..." className="mdp"/>
                        </div>
                       
                        <button type='submit' id="bout1">Se connecter</button>
                     
                        <div className="mt-3" id="ou">
                             <p>_________________ ou _________________</p>
                        </div>
                        
                        <button type='submit' id="bout2">Créer un compte</button>
                     
                  
                </div>
                </form>  
                </div>
                {/* right box */}
                <div className="col-md-6 align-items-center flex-column right-box">
                    <h3 className="mb-4"> My manager</h3>
                    <p>Pour accéder à votre compte, veuillez entrer votre identité ainsi que votre mot de passe ici</p>
                </div>
                
    
        </div>
        {/* <div id="rond1"> </div>
        <div id="rond2"> </div> */}
    </div>
    </>  
    );
}


