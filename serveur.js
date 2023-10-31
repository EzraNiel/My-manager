const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// Importation des modèles Mongoose
const Admin = require("./backend/src/models/Admins");
const Categorie = require("./backend/src/models/Categories");
const Compte = require("./backend/src/models/Comptes");
const Depense = require("./backend/src/models/Depenses");
const Revenue = require("./backend/src/models/Revenues");
const Utilisateur = require("./backend/src/models/Utilisateurs");


const { async } = require("q");

// Importation des contrôleurs
const adminController = require("./backend/src/controllers/adminController");
const categorieController = require("./backend/src/controllers/categorieController");
const compteController = require("./backend/src/controllers/compteController");
const depenseController = require("./backend/src/controllers/depenseController");
const revenueController = require("./backend/src/controllers/revenueController");
const utilisateurController = require("./backend/src/controllers/utilisateurController");
const authController = require("./backend/src/controllers/authController");


// Connexion à la base de données
const mongoURI = "mongodb://127.0.0.1:27017/myManagerDB"; // URL de connexion
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(`Database connection error: ${err}`);
});
db.once("open", () => {
  console.log("Connected to the database");
});

// Route pour gérer l'authentification
app.post("/api/login", authController.login);

//Formulaire d'enregistrement (inscription)
app.post("/utilisateurs", (req, res) => {
  const { nom_utili, prenom_utili, motDePass_utili, mail_utili } = req.body;
  Utilisateur.findOne({ nom_utili })
    .then((user) => {
      if (user) {
        res.json("Already have an account");
      } else {
        Utilisateur.create({
          nom_utili: nom_utili,
          prenom_utili: prenom_utili,
          motDePass_utili: motDePass_utili,
          mail_utili: mail_utili,
        })
          .then((result) => res.json(result))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});

//ajout new categorie dans BD
app.post("/categories", (req, res) => {
  const { nom_cat, nature_cat, icon_cat } = req.body;
  Categorie.findOne({ nom_cat })
    .then((user) => {
      if (user) {
        res.json("Categorie deja existant!");
      } else {
        Categorie.create({
          nom_cat: nom_cat,
          nature_cat: nature_cat,
          icon_cat: icon_cat,
        })
          .then((result) => res.json(result))
          .catch((err) => res.json(err));
      }
    })
    .catch((err) => res.json(err));
});

// Lancement du serveur
const port = 2023; // Port sur lequel le serveur écoutera les requêtes
app.listen(port, () => {
  console.log("Server is running on port " + port); // Message de confirmation
});