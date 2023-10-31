const Categorie = require("../models/CategoriesDB");

// Créer une nouvelle catégorie
exports.createCategorie = async (req, res) => {
  try {
    // Récupérez les données de la requête
    const { nom_cat, nature_cat, id_compte } = req.body;

    // Créez une nouvelle catégorie
    const newCategorie = new Categorie({ nom_cat, nature_cat, id_compte });

    // Enregistrez la nouvelle catégorie dans la base de données
    await newCategorie.save();

    // Répondez avec la nouvelle catégorie créée
    res.status(201).json(newCategorie);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erreur lors de la création de la catégorie" });
  }
};

// Récupérer toutes les catégories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.find();
    res.json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des catégories" });
  }
};

// Récupérer une catégorie par son ID
exports.getCategorieById = async (req, res) => {
  try {
    const categorieId = req.params.categorieId;
    const categorie = await Categorie.findById(categorieId);
    if (!categorie) {
      return res.status(404).json({ error: "Catégorie non trouvée" });
    }
    res.json(categorie);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la catégorie" });
  }
};
