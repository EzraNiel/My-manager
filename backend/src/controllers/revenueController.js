const Revenue = require("../models/Revenues");

// Créer un nouveau revenu
exports.createRevenue = async (req, res) => {
  try {
    // Récupérez les données de la requête
    const { nom_cat_rev, nature_cat_rev, id_categorie } = req.body;

    // Créez un nouveau revenu
    const newRevenue = new Revenue({
      nom_cat_rev,
      nature_cat_rev,
      id_categorie,
    });

    // Enregistrez le nouveau revenu dans la base de données
    await newRevenue.save();

    // Répondez avec le nouveau revenu créé
    res.status(201).json(newRevenue);
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la création du revenu" });
  }
};

// Récupérer tous les revenus
exports.getAllRevenues = async (req, res) => {
  try {
    const revenus = await Revenue.find();
    res.json(revenus);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des revenus" });
  }
};

// Récupérer un revenu par son ID
exports.getRevenueById = async (req, res) => {
  try {
    const revenueId = req.params.revenueId;
    const revenue = await Revenue.findById(revenueId);
    if (!revenue) {
      return res.status(404).json({ error: "Revenu non trouvé" });
    }
    res.json(revenue);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération du revenu" });
  }
};
