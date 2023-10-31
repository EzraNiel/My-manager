import { Link } from "react-router-dom";
import {Icone} from '../Edwella/Page3.png';

function PremierPage(){
    return(
        <>
        <div className="Page-1">   
            <div className="div-1">
                <img className="Icone" src={Icone}></img>
            </div>
            <div className="div-2">
                <Link to={/SecondPage}>Faire mon premier pas</Link>
                <Link to={/Acceuil}>Pas maintenant</Link>
            </div>
        </div>
        </>

    );
}