const express = require("express");
const router = express.Router();
const Depense = require("../models/Depenses");

// Route pour créer une nouvelle dépense
router.post("/depenses", async (req, res) => {
  try {
    const { nom_cat_dep, nature_cat_dep, id_categorie } = req.body;
    const newDepense = new Depense({
      nom_cat_dep,
      nature_cat_dep,
      id_categorie,
    });
    await newDepense.save();
    res.status(201).json(newDepense);
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la création de la dépense" });
  }
});

// Route pour récupérer toutes les dépenses
router.get("/depenses", async (req, res) => {
  try {
    const depenses = await Depense.find();
    res.json(depenses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des dépenses" });
  }
});

// Route pour récupérer une dépense par son ID
router.get("/depenses/:depenseId", async (req, res) => {
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
});

// Route pour mettre à jour une dépense par son ID
router.put("/depenses/:depenseId", async (req, res) => {
  try {
    const depenseId = req.params.depenseId;
    const updates = req.body;
    const updatedDepense = await Depense.findByIdAndUpdate(depenseId, updates, {
      new: true,
    });
    if (!updatedDepense) {
      return res.status(404).json({ error: "Dépense non trouvée" });
    }
    res.json(updatedDepense);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de la dépense" });
  }
});

// Route pour supprimer une dépense par son ID
router.delete("/depenses/:depenseId", async (req, res) => {
  try {
    const depenseId = req.params.depenseId;
    const deletedDepense = await Depense.findByIdAndRemove(depenseId);
    if (!deletedDepense) {
      return res.status(404).json({ error: "Dépense non trouvée" });
    }
    res.json(deletedDepense);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de la dépense" });
  }
});

module.exports = router;
