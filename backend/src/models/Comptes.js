const mongoose = require("mongoose");
const Utilisateur = require("./Utilisateurs");

// Définition du schéma
const compteSchema = new mongoose.Schema({
  banque: Number,
  portefeuille: Number,
  solde: Number,
  id_utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Utilisateur,
  },
});

// Création du modèle
const Compte = mongoose.model("Compte", compteSchema);

// Exportez le modèle pour l'utiliser ailleurs

module.exports = Compte;
