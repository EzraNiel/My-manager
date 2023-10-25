import React,{useState} from 'react'

// export default function Modal(props) {
//     function close() {
//         console.log("close");
//     }

// return (
//     <div>
//         <h1>Adding a new Person</h1>
//         <form id='personForm' onSubmit={e => props.addPerson(e)}>
//             <p>name<br/><input placeholder="Enter name" name="name" required="required"/></p>
//             <p>password
//                 <br/><input type="password" name="password" required="required"/></p>
//             <div id="buttons">
//                 <button type="submit">OK</button>
//                 <button type="button" onClick={close}>Cancel</button>
//             </div>
//         </form>
//     </div>
// );
// }


function ModalForm(props) {
    const [categoryName, setCategoryName] = useState('');
  
    const handleCategoryNameChange = (e) => {
      setCategoryName(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Effectuez ici les actions nécessaires lorsque le formulaire est soumis
      console.log('Nom de la catégorie:', categoryName);
      // Fermez la modal
      props.onClose();
    };
  
    return (
      <div className="modal" id="personModal" style={{ display: props.show ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Effectuer une opération</h5>
              <button type="button" className="btn-close" onClick={props.onClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="category-name" className="form-label">Nom de la catégorie:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category-name"
                    value={categoryName}
                    onChange={handleCategoryNameChange}
                  /> 
                  <br />
                <label htmlFor="category-name" className="form-label">Choisir l'icone:</label>
                <input
                    type="text"
                    className="form-control"
                    id="category-name"
                    value={categoryName}
                    onChange={handleCategoryNameChange}
                  /> 
                </div>
                {/* Autres champs du formulaire */}
                <div className="modal-footer">
                  <button type="button" className="modalAnnuler" onClick={props.onClose}>Annuler</button>
                  <button type="submit" className="modalConfirmer">Confirmer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModalForm;
  