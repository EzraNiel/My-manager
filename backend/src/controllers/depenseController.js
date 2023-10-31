const Depense = require("../models/Depenses");

// Créer une nouvelle dépense
exports.createDepense = async (req, res) => {
  try {
    // Récupérez les données de la requête
    const { nom_cat_dep, nature_cat_dep, id_categorie } = req.body;

    // Créez une nouvelle dépense
    const newDepense = new Depense({
      nom_cat_dep,
      nature_cat_dep,
      id_categorie,
    });

    // Enregistrez la nouvelle dépense dans la base de données
    await newDepense.save();

    // Répondez avec la nouvelle dépense créée
    res.status(201).json(newDepense);
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la création de la dépense" });
  }
};

// Récupérer toutes les dépenses
exports.getAllDepenses = async (req, res) => {
  try {
    const depenses = await Depense.find();
    res.json(depenses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des dépenses" });
  }
};

// Récupérer une dépense par son ID
exports.getDepenseById = async (req, res) => {
  try {
    const depenseId = req.params.depenseId;
    const depense = await Depense.findById(depenseId);
    if (!depense) {
      return res.status(404).json({ error: "Dépense non trouvée" });
    }
    res.json(depense);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la dépense" });
  }
};
