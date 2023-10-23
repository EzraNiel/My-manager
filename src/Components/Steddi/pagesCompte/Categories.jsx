import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import '../Categorie.css'
import cat from '../imgCat/cat1.png'
function CatElement(Nom){
    return(
        <div className='row catElement'>
            <div className='col-md-2'></div>
            <div className='col-md-7'><h5>{Nom}</h5></div>
            <div className='col-md-1'><button className='supp'>X</button></div>
        </div>
    )
}
function Categories(){
    return(
        <div>
            <div className='catDiv'>
                {/* <img src={cat} alt="" /> */}
                {CatElement("Sakafo")}
                {CatElement("Transport")}
                {CatElement("Gouter")}
                {CatElement("Sigara")}
                {CatElement("Voyage")}
                {CatElement("Besoins")}
                {CatElement("Aliments")}
                {CatElement("Factures")}
                    
            </div>
            <div className='row'>
                <div className='col-3 offset-1'><button className='btn btn1'>Revenu</button></div>
                <div className='col-3'><button className='btn btn2'>Depense</button></div>
            </div>
            <div className='row'>
                <div className="col-4 offset-7"><button className='plusCat'><span>+</span></button></div>
                
            </div>

        </div>
    )
}
export default Categories;