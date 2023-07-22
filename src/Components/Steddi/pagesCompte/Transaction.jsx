import 'bootstrap/dist/css/bootstrap.min.css'
import '../Transaction.css'
import React from 'react'
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
                            <h4>20.000.000$</h4>

                        </div>
                        <div className="total2 col-md-5">
                            <h5>Depenses</h5>
                            <h4>156.000.000$</h4>
                        </div>
                </div>
                <hr />
                <div className="row">
                    <div className="total2 col-md-5">
                            <h5>Point final</h5>  
                            <h4>20.000.000$</h4>

                        </div>
                        <div className="total2 col-md-5">
                            <h5>Equilibre</h5>
                            <h4>156.000.000$</h4>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Transaction;