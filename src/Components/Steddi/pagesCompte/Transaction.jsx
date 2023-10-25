import 'bootstrap/dist/css/bootstrap.min.css'
import '../Transaction.css'
import React, {useState} from 'react'
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
        </div>
    )
}
function ancien(val,libelle,val1,libelle1){
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

    // Les valeurs qui changent aucours du temps
    const [ValPortefeuille, setVP]=useState("10.000.000$")
    const [ValBanque, setVB]= useState("30.000.000$")
    const [ValRevenus, setVR]= useState("300.000$")
    const [ValDepenses, setVD]= useState("150.000$")
    const [ValEquilibre, setVE]= useState("150.000$")
    const [cat, setCatValue]=useState("sakafo")
    const [cmpt, setCmpt]= useState("portefeuille")
    const [Nombre, setNombre]= useState('')
    const [PU, setPU]= useState('')

    const [test, setTest]= useState([
        {id: 1, nom:"sakafo", val: 1500},
        {id: 2, nom:"Gouter", val: 3400},
        {id: 3, nom:"Frais", val: 500}
    ])
    const calculVal= (a,b)=>{
        return a*b
    }
    const handleDelete= (id)=>{
        const testCopy= [... test]
        const testCopyUpdate= testCopy.filter((cat)=> cat.id !== id)
        setTest(testCopyUpdate)
        // console.log("mandeh eh")
    }
    let valTotal1=0
    let valTotal2=0
    const ajouterElement = () => {
        // Créez le nouvel élément que vous souhaitez ajouter
       if(Nombre || PU !== ''){
        const nouvelElement = { id: test.length + 1, nom: cat, val: calculVal(Nombre,PU) };

        // Utilisez setTest pour mettre à jour le state en ajoutant le nouvel élément
        setTest([...test, nouvelElement]);
        setNombre('')
        setPU('')
       }
       else {
            
       }

    }
    return(
        <div>
            <div className='firstDiv'>
                <div className='row'>
                    <div className="total col-md-5">
                        <div className='iconTotal'><img src={porte} alt="" /></div>
                        <h5 className='TotalLibelle'>Solde total portefeuille</h5> 
                        <h4>{ValPortefeuille}</h4>

                    </div>
                    <div className="total col-md-5">
                        <div className='iconTotal'><img src={image} alt="" /></div>
                        <h5 className='TotalLibelle'>Solde total banque</h5>
                        <h4>{ValBanque}</h4>
                    </div>
                </div>

                <div className='equilibre'>
                    <div className="row">
                        <div className="total2 col-md-5">
                                <div className='iconRevDep'><img src={revenu} alt="" /></div>
                                <h5>Revenus</h5>  
                                <h4 className='Revenu1'>{ValRevenus}</h4>

                            </div>
                            <div className="total2 col-md-5">
                                <div className='iconRevDep'><img src={depense} alt="" /></div>
                                <h5 >Depenses</h5>
                                <h4 className='Depense1'>{ValDepenses}</h4>
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
                                <h4>{ValEquilibre}</h4>
                            </div>
                    </div>
                </div>
            </div>
            <div className="informations">
                <div className="barNavInfo"><h5>Informations</h5></div>
                <div className='scrolleo'>

                    {/*Affichage*/}
                    <div className="Element">
                            <div className='ElementBar row'>
                                <div className='col-md-4'><h4>Date</h4></div>
                                <div className='col-md-4 val'><h4>{valTotal1}.00$</h4></div>
                                <div className='col-md-4 val'><h4>{valTotal2}.00$</h4></div>
                            </div>
                            <ul>
                                {test.map((cat)=>(
                                    <li key={cat.id} className='row'>
                                        <div className='col-8'>{cat.nom}</div>
                                        <div className='col-2'>{cat.val}</div>
                                    <button className='supp' onClick={()=>handleDelete(cat.id)}>X</button> 
                                    </li>
                                ))}
                            </ul>
                            <button className='ElementDetails'>
                                Details
                            </button>
                    </div>
                    {ancien(2500,'Cadeau',-30,'taxi')}
                    {ancien(-26,'Sakafo',-50,'sigara')}
                    {ancien(-256,'Frais',-50,'sigara')}
                    
                </div>
            </div>
            <div className='AjoutElement '>
                    <h4>Effectuer une operation</h4>
                    <hr />
                    <div>
                        <label htmlFor="cat">Choisir une catégorie :</label>
                        <select name="" id="cat" value={cat} onChange={(e) => setCatValue(e.target.value)}>
                            <option value="bus">bus</option>
                            <option value="sakafo">sakafo</option>
                            <option value="sigara">sigara</option>
                            <option value="gouter">gouter</option>
                        </select>
                    </div>
                    <hr />
                    <div>
                        <label htmlFor="cmpt">Paiement par :</label>
                        <select name="" id="cmpt" value={cmpt} onChange={(e) => setCmpt(e.target.value)}>
                            <option value="portefeuille">Portefeuille</option>
                            <option value="banque">Banque</option>
                            <option value="autre">autre</option>
                        </select>
                    </div>
                    <hr />
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input type="number" value={Nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Entrer le nombre...'/>
                    </div>
                    <hr />
                    <div>
                        <label htmlFor="prix">Prix d'un unité</label>
                        <input type="number" value={PU} onChange={(e) => setPU(e.target.value)} placeholder="Entrer le prix d'un unité..."/>
                    </div>
                    <div className='row'>
                        <button className="btn btn-perso">Annuler</button>
                        <button className='btn btn-primary' onClick={ajouterElement} >Confirmer</button>
                    </div>
                
            </div>
        </div>
    )
}
export default Transaction;