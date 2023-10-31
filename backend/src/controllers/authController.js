// controllers/authController.js
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Utilisateur = require("../models/Utilisateurs");

// Fonction pour gérer l'authentification
exports.login = async (req, res) => {
  const { email, motDePass_utili } = req.body;

  try {
    // Recherchez l'utilisateur dans la base de données MongoDB
    const utilisateur = await Utilisateur.findOne({ email });

    if (!utilisateur) {
      return res.status(401).json({ error: "Utilisateur non trouvé" });
    }

    // Vérifiez le mot de passe
    const motDePasseCorrect = await bcrypt.compare(
      motDePass_utili,
      utilisateur.motDePass_utili
    );

    if (!motDePasseCorrect) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    // Générez un jeton JWT avec l'ID de l'utilisateur
    const token = jwt.sign({ userId: utilisateur._id }, "votre_clé_secrète");

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'authentification" });
  }
};
