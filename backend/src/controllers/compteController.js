const Compte = require("../models/Comptes");

// Créer un nouveau compte
exports.createCompte = async (req, res) => {
  try {
    // Récupérez les données de la requête
    const { banque, portefeuille, solde, id_utilisateur } = req.body;

    // Créez un nouveau compte
    const newCompte = new Compte({
      banque,
      portefeuille,
      solde,
      id_utilisateur,
    });

    // Enregistrez le nouveau compte dans la base de données
    await newCompte.save();

    // Répondez avec le nouveau compte créé
    res.status(201).json(newCompte);
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la création du compte" });
  }
};

// Récupérer tous les comptes
exports.getAllComptes = async (req, res) => {
  try {
    const comptes = await Compte.find();
    res.json(comptes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des comptes" });
  }
};

// Récupérer un compte par son ID
exports.getCompteById = async (req, res) => {
  try {
    const compteId = req.params.compteId;
    const compte = await Compte.findById(compteId);
    if (!compte) {
      return res.status(404).json({ error: "Compte non trouvé" });
    }
    res.json(compte);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération du compte" });
  }
};
