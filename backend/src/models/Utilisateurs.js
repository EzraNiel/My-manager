const mongoose = require("mongoose");
const Admin = require("./Admins");

// Définition du schéma
const utilisateurSchema = new mongoose.Schema({
  nom_utili: String,
  prenom_utili: String,
  motDePass_utili: String,
  mail_utili : String,
  // id_admin: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: Admin,
  // },
});

// Création du modèle
const Utilisateur = mongoose.model("Utilisateur", utilisateurSchema);

// Exportez le modèle pour l'utiliser ailleurs

module.exports = Utilisateur;
