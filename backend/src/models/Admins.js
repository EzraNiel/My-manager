const mongoose = require("mongoose");

// Définition du schéma
const adminSchema = new mongoose.Schema({
  nom_admin: String,
  motDePass_Admin: String,
});

// Création du modèle
const Admin = mongoose.model("Admin", adminSchema);

// Exportez le modèle pour l'utiliser ailleurs
module.exports = Admin;
