import 'bootstrap/dist/css/bootstrap.min.css'
import '../Transaction.css'
import React,{useState} from 'react'
import revRap3 from '../imgRapport/Rev_Mensuel.png'
import revRap1 from '../imgRapport/Rev_catégorie.png'
import revRap2 from '../imgRapport/Rev_compte.png'
import DepRap1 from '../imgRapport/dep1.png'
import DepRap2 from '../imgRapport/dep2.png'
import DepRap3 from '../imgRapport/dep3.png'
function Aff1(){
    return(
        <div>
           <div className='imgRapportRevenu1 row'><img src={revRap1} alt="" /></div>
           <div className='imgRapportRevenu2 row'><img src={revRap2} alt="" /></div>
           <div className='imgRapportRevenu3 row'><img src={revRap3} alt="" /></div>
        </div>
    )
}
function Aff2(){
    return(
        <div>
            <div className='imgRapportRevenu1 row'><img src={DepRap1} alt="" /></div>
            <div className='imgRapportRevenu2 dep2 row'><img src={DepRap2} alt="" /></div>
            <div className='imgRapportRevenu3 dep3 row'><img src={DepRap3} alt="" /></div>
        </div>
    )
}
function Rapport(){
    const [display, setDisplay]= useState('affichage1')
    // COMPORTEMENT
    const handleButtonClick= function(affichage){
      setDisplay(affichage)
    }
    return(
        <div className='Rapport'>
            <div>
                <button className="btnRevenu" onClick={()=>handleButtonClick('affichage1')}> Revenus</button>
                <button className="btnDepense" onClick={()=>handleButtonClick('affichage2')}> Depenses</button>
            </div>
            <div>
                {display==='affichage1' && Aff1()}
                {display==='affichage2' && Aff2()}
            </div>
        </div>
    )
}
export default Rapport;