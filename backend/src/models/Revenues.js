const mongoose = require("mongoose");
const Categorie = require("./CategoriesDB");

// Définition du schéma
const revenueSchema = new mongoose.Schema({
  nom_cat_rev: String,
  nature_cat_rev: String,
  id_categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Categorie,
  },
});

// Création du modèle
const Revenue = mongoose.model("Revenue", revenueSchema);

// Exportez le modèle pour l'utiliser ailleurs

module.exports = Revenue;
