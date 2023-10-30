const express = require("express");
const router = express.Router();
const Compte = require("../models/Comptes");

// Route pour créer un nouveau compte
router.post("/comptes", async (req, res) => {
  try {
    const { banque, portefeuille, solde, id_utilisateur } = req.body;
    const newCompte = new Compte({
      banque,
      portefeuille,
      solde,
      id_utilisateur,
    });
    await newCompte.save();
    res.status(201).json(newCompte);
  } catch (error) {
    res.status(400).json({ error: "Erreur lors de la création du compte" });
  }
});

// Route pour récupérer tous les comptes
router.get("/comptes", async (req, res) => {
  try {
    const comptes = await Compte.find();
    res.json(comptes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des comptes" });
  }
});

// Route pour récupérer un compte par son ID
router.get("/comptes/:compteId", async (req, res) => {
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
});

// Route pour mettre à jour un compte par son ID
router.put("/comptes/:compteId", async (req, res) => {
  try {
    const compteId = req.params.compteId;
    const updates = req.body;
    const updatedCompte = await Compte.findByIdAndUpdate(compteId, updates, {
      new: true,
    });
    if (!updatedCompte) {
      return res.status(404).json({ error: "Compte non trouvé" });
    }
    res.json(updatedCompte);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la mise à jour du compte" });
  }
});

// Route pour supprimer un compte par son ID
router.delete("/comptes/:compteId", async (req, res) => {
  try {
    const compteId = req.params.compteId;
    const deletedCompte = await Compte.findByIdAndRemove(compteId);
    if (!deletedCompte) {
      return res.status(404).json({ error: "Compte non trouvé" });
    }
    res.json(deletedCompte);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la suppression du compte" });
  }
});

module.exports = router;
