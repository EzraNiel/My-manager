const Utilisateur = require("../models/Utilisateurs");

// Créer un nouvel utilisateur
exports.createUtilisateur = async (req, res) => {
  try {
    const { nom_utili, prenom_utili, motDePass_utili, id_admin } = req.body;
    const newUtilisateur = new Utilisateur({
      nom_utili,
      prenom_utili,
      motDePass_utili,
      id_admin,
    });
    await newUtilisateur.save();
    res.status(201).json(newUtilisateur);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erreur lors de la création de l'utilisateur" });
  }
};

// Récupérer tous les utilisateurs
exports.getAllUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find();
    res.json(utilisateurs);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
};

// Récupérer un utilisateur par son ID
exports.getUtilisateurById = async (req, res) => {
  try {
    const utilisateurId = req.params.utilisateurId;
    const utilisateur = await Utilisateur.findById(utilisateurId);
    if (!utilisateur) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.json(utilisateur);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de l'utilisateur" });
  }
};
// Ajoutez ici d'autres méthodes pour mettre à jour et supprimer un utilisateur si nécessaire
