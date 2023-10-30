const express = require("express");
const router = express.Router();
const Categorie = require("../models/Categories");

// Route pour créer une nouvelle catégorie
router.post("/categories", async (req, res) => {
  try {
    const { nom_cat, nature_cat, id_compte } = req.body;
    const newCategorie = new Categorie({ nom_cat, nature_cat, id_compte });
    await newCategorie.save();
    res.status(201).json(newCategorie);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erreur lors de la création de la catégorie" });
  }
});

// Route pour récupérer toutes les catégories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Categorie.find();
    res.json(categories);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des catégories" });
  }
});

// Route pour récupérer une catégorie par son ID
router.get("/categories/:categorieId", async (req, res) => {
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
});

// Route pour mettre à jour une catégorie par son ID
router.put("/categories/:categorieId", async (req, res) => {
  try {
    const categorieId = req.params.categorieId;
    const updates = req.body;
    const updatedCategorie = await Categorie.findByIdAndUpdate(
      categorieId,
      updates,
      { new: true }
    );
    if (!updatedCategorie) {
      return res.status(404).json({ error: "Catégorie non trouvée" });
    }
    res.json(updatedCategorie);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de la catégorie" });
  }
});

// Route pour supprimer une catégorie par son ID
router.delete("/categories/:categorieId", async (req, res) => {
  try {
    const categorieId = req.params.categorieId;
    const deletedCategorie = await Categorie.findByIdAndRemove(categorieId);
    if (!deletedCategorie) {
      return res.status(404).json({ error: "Catégorie non trouvée" });
    }
    res.json(deletedCategorie);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de la catégorie" });
  }
});

module.exports = router;
