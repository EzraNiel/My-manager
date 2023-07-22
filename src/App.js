import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Pages/Acceuil";
import Apropos from "./Pages/Apropos";
import Contact from "./Pages/Contact";
import Creation from "./Pages/Creation";
import Connexion from "./Pages/Connexion";
import Compte from "./Pages/Compte";

function App() {
  // State

  // Comportement

  // Affichage
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil></Acceuil>} />
          <Route path="/Apropos" element={<Apropos></Apropos>} />
          <Route path="/Contact" element={<Contact></Contact>} />
          <Route path="/Creation" element={<Creation></Creation>} />
          <Route path="/Connexion" element={<Connexion></Connexion>} />
          <Route path="/Compte" element={<Compte></Compte>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
