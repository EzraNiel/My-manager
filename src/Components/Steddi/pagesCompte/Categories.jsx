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
import i7 from '../iconSte/icon/cancel.png'
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
        <div className='  '>
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
    const [estVisible, setEstVisible]=useState(false)
    const ajouter= ()=>{
        setEstVisible(!estVisible)
    }
    return(
        <div>
             <div className='row mb-3'>
                <div className='col-3 offset-1'><button className='btn btn1'>Revenus</button></div>
                <div className='col-3'><button className='btn btn2'>Dépenses</button></div>
            </div>
            <div className={`divCacher ${estVisible ? 'visible' : 'nonVisible'}`}>
                <label htmlFor="za">Prenom</label>
                <input type="text" id='za'/>
                <label htmlFor="ze">nom</label>
                <input type="text" id='ze'/>
            </div>
            <div className='catDiv mb-6'>
                {/* <img src={cat} alt="" /> */}
                {CatElement()}
                    
            </div>
            <button type="button" className="offset-7 ajouter" onClick={ajouter} >
                 <img className="ajouter" src={cat1} alt="" />
            </button>
             {/* <ModalForm show={showModal} onClose={closeModal} /> */}
           
        </div>
    )
}

export default Categories;
