const mongoose = require("mongoose");
const Categorie = require("./CategoriesDB");

// Définition du schéma
const depenseSchema = new mongoose.Schema({
  nom_cat_dep: String,
  nature_cat_dep: String,
  id_categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Categorie,
  },
});

// Création du modèle
const Depense = mongoose.model("Depense", depenseSchema);

// Exportez le modèle pour l'utiliser ailleurs

module.exports = Depense;
