const express = require("express");
const router = express.Router();
const Revenue = require("../models/Revenues");

// Route pour créer un nouveau revenu
router.post("/revenues", async (req, res) => {
  try {
    const { nom_cat_rev, nature_cat_rev, id_categorie } = req.body;
    const newRevenue = new Revenue({
      nom_cat_rev,
      nature_cat_rev,
      id_categorie,
    });
    await newRevenue.save();
    res.status(201).json(newRevenue);
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la création du revenu" });
  }
});

// Route pour récupérer tous les revenus
router.get("/revenues", async (req, res) => {
  try {
    const revenues = await Revenue.find();
    res.json(revenues);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des revenus" });
  }
});

// Route pour récupérer un revenu par son ID
router.get("/revenues/:revenueId", async (req, res) => {
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
});

// Route pour mettre à jour un revenu par son ID
router.put("/revenues/:revenueId", async (req, res) => {
  try {
    const revenueId = req.params.revenueId;
    const updates = req.body;
    const updatedRevenue = await Revenue.findByIdAndUpdate(revenueId, updates, {
      new: true,
    });
    if (!updatedRevenue) {
      return res.status(404).json({ error: "Revenu non trouvé" });
    }
    res.json(updatedRevenue);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du revenu" });
  }
});

// Route pour supprimer un revenu par son ID
router.delete("/revenues/:revenueId", async (req, res) => {
  try {
    const revenueId = req.params.revenueId;
    const deletedRevenue = await Revenue.findByIdAndRemove(revenueId);
    if (!deletedRevenue) {
      return res.status(404).json({ error: "Revenu non trouvé" });
    }
    res.json(deletedRevenue);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du revenu" });
  }
});

module.exports = router;
