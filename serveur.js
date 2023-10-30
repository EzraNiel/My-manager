const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Importation des modèles Mongoose
const Admin = require("./backend/src/models/Admins");
const Categorie = require("./backend/src/models/Categories");
const Compte = require("./backend/src/models/Comptes");
const Depense = require("./backend/src/models/Depenses");
const Revenue = require("./backend/src/models/Revenues");
const Utilisateur = require("./backend/src/models/Utilisateurs");
const { async } = require("q");

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

// Lancement du serveur
const port = 2023; // Port sur lequel le serveur écoutera les requêtes
app.listen(port, () => {
  console.log("Server is running on port " + port); // Message de confirmation
});