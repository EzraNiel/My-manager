import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React,{useState} from 'react'
import '../Categorie.css'
import cat from '../iconSte/supprimer.png'
import cat1 from '../iconSte/plus (4).png'
import i1 from '../iconSte/icon/restaurant.png'
import i2 from '../iconSte/Rectangle 30.png'
import i3 from '../iconSte/icon/restaurant-vegetarien.png'
import i4 from '../iconSte/icon/crayon.png'
import i5 from '../iconSte/icon/bagages-de-voyage.png'
import i6 from '../iconSte/icon/project-management.png'
// import i7 from '../iconSte/icon/cancel.png'
// import ModalForm from './Modal';
function CatElement(){

    const [listIcons, setListIcon] = useState([
        {id:1, icon:<img className="i1" src={i1} alt=""/>, nom:"Sakafo"},
        {id:2, icon:<img className="i2" src={i2} alt=""/>, nom:"Transport"},
        {id:3, icon:<img className="i3" src={i3} alt=""/>, nom:"Gouter"},
        {id:4, icon:<img className="i4" src={i4} alt=""/>, nom:"Sigara"},
        {id:5, icon:<img className="i5" src={i5} alt=""/>, nom:"Voyage"},
        {id:6, icon:<img className="i6" src={i6} alt=""/>, nom:"Besoins"},
        
    ])
    const handleDelete= (id)=>{
        const IconsCopy= [... listIcons]
        const IconsCopyUptade= IconsCopy.filter((val)=> val.id !== id)
        setListIcon(IconsCopyUptade)
    }
    return(
        <div className='contenu'>
            {listIcons.map((val) => (
                 <div className='row catElement mb-4 offset-1' key={val.id}> 
                    <div className='col-md-2 ' >{val.icon}</div>
                    <div className='col-md-6' ><h5>{val.nom}</h5></div>
                    <div className='col-md-4'> <button className="boutSUP" onClick={()=>handleDelete(val.id)} ><img className="supprimer" src={cat} alt="" /></button> </div>
                 </div>
            ))}
            
        </div>
    )
}


function Categories(){
//     const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };
    const [listIcons, setListIcon] = useState([
        {id:1, icon:<img className="i1" src={i1} alt=""/>, nom:"Sakafo"},
        {id:2, icon:<img className="i2" src={i2} alt=""/>, nom:"Transport"},
        {id:3, icon:<img className="i3" src={i3} alt=""/>, nom:"Gouter"},
        {id:4, icon:<img className="i4" src={i4} alt=""/>, nom:"Sigara"},
        {id:5, icon:<img className="i5" src={i5} alt=""/>, nom:"Voyage"},
        {id:6, icon:<img className="i6" src={i6} alt=""/>, nom:"Besoins"},
        
    ])
    const [listIconsdep, setListIcondep] = useState([
        {id:1, icon:<img className="i1" src={i1} alt=""/>, nom:"Sakafo"},
        {id:2, icon:<img className="i2" src={i2} alt=""/>, nom:"Transport"},
        {id:3, icon:<img className="i3" src={i3} alt=""/>, nom:"Gouter"},
        {id:4, icon:<img className="i4" src={i4} alt=""/>, nom:"Sigara"},
        {id:5, icon:<img className="i5" src={i5} alt=""/>, nom:"Voyage"},
        {id:6, icon:<img className="i6" src={i6} alt=""/>, nom:"Besoins"},
        
    ])
    const [displayeo,setDisplayeo]= useState('affichage1')
    const handleDelete= (id)=>{
        const IconsCopy= [... listIcons]
        const IconsCopyUptade= IconsCopy.filter((val)=> val.id !== id)
        setListIcon(IconsCopyUptade)
    }
    const handleDeletedep= (id)=>{
        const IconsCopy= [... listIconsdep]
        const IconsCopyUptadedep= IconsCopy.filter((val)=> val.id !== id)
        setListIcondep(IconsCopyUptadedep)
    }
    const [estVisible, setEstVisible]=useState(false)
    const ajouter= ()=>{
        setEstVisible(!estVisible)
    }
    const revenuAff= <div className='contenu'>
            {listIconsdep.map((val) => (
                <div className='row catElement mb-4 offset-1' key={val.id}> 
                    <div className='col-md-2 ' >{val.icon}</div>
                    <div className='col-md-6' ><h5>{val.nom}</h5></div>
                <div className='col-md-4'> <button className="boutSUP" onClick={()=>handleDeletedep(val.id)} ><img className="supprimer" src={cat} alt="" /></button> </div>
                </div>
            ))}
        </div>
    const depenseAff= <div className='contenu'>
        {listIcons.map((val) => (
            <div className='row catElement mb-4 offset-1' key={val.id}> 
                <div className='col-md-2 ' >{val.icon}</div>
                <div className='col-md-6' ><h5>{val.nom}</h5></div>
                <div className='col-md-4'> <button className="boutSUP" onClick={()=>handleDelete(val.id)} ><img className="supprimer" src={cat} alt="" /></button> </div>
            </div>
        ))}
</div>
    return(
        <div className='mt-4'>
             <div className='row mb-2 divcont'>
                <div className='col-3 offset-1'><button className='btn btn1' onClick={()=> setDisplayeo('affichage1')}>Revenus</button></div>
                <div className='col-3'><button className='btn btn2' onClick={()=> setDisplayeo('affichage2')}>Dépenses</button></div>
            </div>
            <div className={`divCacher ${estVisible ? 'visible' : 'nonVisible'}`}>
                <form>
                <div className="mb-1 formulaire">
                  <div className="header">
                     <h5 className="modal-title titre">Effectuer une opération</h5>
                     <hr /> <br />
                  
                  </div>
                  <div className='mb-5'>
                        <label htmlFor="category-name" className="form-label">Nom de la catégorie:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category-name"
                        /> 
                        <br />
                        <label htmlFor="category-name" className="form-label">Choisir l'icone:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category-name"
                        /> 
                        </div>
                  </div>
                 
                {/* Autres champs du formulaire */}
                <div className="modal-footer">
                  <button type="button" className="modalAnnuler">Annuler</button>
                  <button type="submit" className="modalConfirmer" >Confirmer</button>
                </div>
              </form>
            </div>
            <div className='catDiv mb-6'>
                {/* <img src={cat} alt="" /> */}
                {/* {CatElement()} */}
                {displayeo==="affichage1" && revenuAff}
                {displayeo==="affichage2" && depenseAff}
                        
            </div>
            <button type="button" className="offset-7 ajouter" onClick={ajouter} >
                 <img className="ajouter" src={cat1} alt="" />
            </button>
             {/* <ModalForm show={showModal} onClose={closeModal} /> */}
           
        </div>
    )
}




export default Categories;
