import 'bootstrap/dist/css/bootstrap.min.css'
import '../Transaction.css'
import React from 'react'
function Info(){
    return(<div className="Element">
        <div className='ElementBar row'>
            <div className='col-md-4'><h4>Date</h4></div>
            <div className='col-md-4 val'><h4>0.00$</h4></div>
            <div className='col-md-4 val'><h4>50.00$</h4></div>
        </div>
        <div className='ElementContenu row'>
            <div className='col-md-8'>
                <h5>transport</h5>
                <h5>sakafo</h5>
            </div>
            <div className='col-md-4 val'>
                <h5>36.00$</h5>
                <h5>14.00$</h5>
            </div>
        </div>
        <button className='ElementDetails'>
            Details
        </button>
    </div>)
}
function Transaction(){
    return(
        <div className='firstDiv'>
            <div className='row'>
                <div className="total col-md-5">
                    <h5>Solde totale portefeuille</h5>  
                    <h4>20.000.000$</h4>

                </div>
                <div className="total col-md-5">
                    <h5>Solde totale banque</h5>
                    <h4>156.000.000$</h4>
                </div>
            </div>

            <div className='equilibre'>
                <div className="row">
                    <div className="total2 col-md-5">
                            <h5>Revenus</h5>  
                            <h4>300.000$</h4>

                        </div>
                        <div className="total2 col-md-5">
                            <h5>Depenses</h5>
                            <h4>150.000$</h4>
                        </div>
                </div>
                <hr />
                <div className="row">
                    <div className="total2 col-md-5">
                            <h5>Point final</h5>  
                            <h4>Date</h4>

                        </div>
                        <div className="total2 col-md-5">
                            <h5>Equilibre</h5>
                            <h4>150.000$</h4>
                        </div>
                </div>
            </div>
            <div className="informations">
                <div className="barNavInfo"><h5>Informations</h5></div>
                <div>
                    {Info()}
                    {Info()}
                    {Info()}
                </div>
            </div>
        </div>
    )
}
export default Transaction;