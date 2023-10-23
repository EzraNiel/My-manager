import 'bootstrap/dist/css/bootstrap.min.css'
import '../Transaction.css'
import React from 'react'
import porte from '../iconSte/porte.png'
import image from '../iconSte/logo1.png'
import revenu from '../iconSte/img-revenu.png'
import depense from '../iconSte/img-revenu(2).png'
function ElementInfo(val,libelle){
    let nature='Revenu'
    if(val<0){
        val=(-1)*val
        nature='Depense'
    }
    return(
        <div className='ElementContenu row'>
            <div className='col-md-8'>
                <h5>{libelle}</h5>
            </div>
            <div className='col-md-3'>
                <h5 className={nature}>{val}</h5>
            </div>
            <div className="col-md-1"><button className='supp'>X</button></div>
        </div>
    )
}
function Info(val,libelle,val1,libelle1){
    let valTotal1=0
    let valTotal2=0
    if ((val>0 && val1>0) || (val<0 && val1<0)){
        if(val<0){
            valTotal1=0
            valTotal2= val+val1
        }
        else{
            valTotal1=val+val1
            valTotal2=0
        }
        
    }
    else{
        if((val>0) && (val1<0)){
            valTotal1=val
            valTotal2=val1
        }
        else{
            valTotal1=val1
            valTotal2=val
        }
    }
    return(<div className="Element">
        <div className='ElementBar row'>
            <div className='col-md-4'><h4>Date</h4></div>
            <div className='col-md-4 val'><h4>{valTotal1}.00$</h4></div>
            <div className='col-md-4 val'><h4>{valTotal2}.00$</h4></div>
        </div>
        {ElementInfo(val,libelle)}
        {ElementInfo(val1,libelle1)}
        <button className='ElementDetails'>
            Details
        </button>
    </div>)
}
function Transaction(){
    return(
        <div>
            <div className='firstDiv'>
                <div className='row'>
                    <div className="total col-md-5">
                        <div className='iconTotal'><img src={porte} alt="" /></div>
                        <h5 className='TotalLibelle'>Solde totale portefeuille</h5> 
                        <h4>20.000.000$</h4>

                    </div>
                    <div className="total col-md-5">
                        <div className='iconTotal'><img src={image} alt="" /></div>
                        <h5 className='TotalLibelle'>Solde totale banque</h5>
                        <h4>156.000.000$</h4>
                    </div>
                </div>

                <div className='equilibre'>
                    <div className="row">
                        <div className="total2 col-md-5">
                                <div className='iconRevDep'><img src={revenu} alt="" /></div>
                                <h5>Revenus</h5>  
                                <h4 className='Revenu1'>300.000$</h4>

                            </div>
                            <div className="total2 col-md-5">
                                <div className='iconRevDep'><img src={depense} alt="" /></div>
                                <h5 >Depenses</h5>
                                <h4 className='Depense1'>150.000$</h4>
                            </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="total3 col-md-5">
                                <h5>Point final</h5>  
                                <h4>Date</h4>

                            </div>
                            <div className="total3 col-md-5">
                                <h5>Equilibre</h5>
                                <h4>150.000$</h4>
                            </div>
                    </div>
                </div>
            </div>
            <div className="informations">
                <div className="barNavInfo"><h5>Informations</h5></div>
                <div className='scrolleo'>
                    {Info(-500,'Transport',-20,'Achat')}
                    {Info(2500,'Cadeau',-30,'taxi')}
                    {Info(-26,'Sakafo',-50,'sigara')}
                    {Info(-26,'Sakafo',-50,'sigara')}
                </div>
            </div>
            <div className='AjoutElement '>
                <h4>Effectuer une operation</h4>
                <hr />
                <div>
                    <label htmlFor="cat">Choisir une catégorie :</label>
                    <select name="" id="cat">
                        <option value="">bus</option>
                        <option value="">sakafo</option>
                        <option value="">sigara</option>
                        <option value="">gouter</option>
                    </select>
                </div>
                <hr />
                <div>
                    <label htmlFor="cmpt">Paiement par :</label>
                    <select name="" id="cmpt">
                        <option value="">Portefeuille</option>
                        <option value="">Banque</option>
                        <option value="">autre</option>
                    </select>
                </div>
                <hr />
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="number" placeholder='Entrer le nombre...'/>
                </div>
                <hr />
                <div>
                    <label htmlFor="prix">Prix d'un unité</label>
                    <input type="number" placeholder="Entrer le prix d'un unité..."/>
                </div>
                <div className='row'>
                    <button className="btn btn-perso">Annuler</button>
                    <button className='btn btn-primary'>Confirmer</button>
                </div>
            </div>
        </div>
    )
}
export default Transaction;