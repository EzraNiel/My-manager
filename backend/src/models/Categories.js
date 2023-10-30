const mongoose = require("mongoose");
const Compte = require("./Comptes");

// Définition du schéma
const categorieSchema = new mongoose.Schema({
  nom_cat: String,
  nature_cat: String,
  id_compte: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Compte,
  },
});

// Création du modèle
const Categorie = mongoose.model("Categorie", categorieSchema);

// Exportez le modèle pour l'utiliser ailleurs

module.exports = Categorie;
