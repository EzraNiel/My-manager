const express = require("express");
const router = express.Router();
const Utilisateur = require("../models/Utilisateurs");

// Route pour créer un nouvel utilisateur
router.post("/utilisateurs", async (req, res) => {
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
});

// Route pour récupérer tous les utilisateurs
router.get("/utilisateurs", async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find();
    res.json(utilisateurs);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
});

// Route pour récupérer un utilisateur par son ID
router.get("/utilisateurs/:utilisateurId", async (req, res) => {
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
});

// Route pour mettre à jour un utilisateur par son ID
router.put("/utilisateurs/:utilisateurId", async (req, res) => {
  try {
    const utilisateurId = req.params.utilisateurId;
    const updates = req.body;
    const updatedUtilisateur = await Utilisateur.findByIdAndUpdate(
      utilisateurId,
      updates,
      { new: true }
    );
    if (!updatedUtilisateur) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.json(updatedUtilisateur);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de l'utilisateur" });
  }
});

// Route pour supprimer un utilisateur par son ID
router.delete("/utilisateurs/:utilisateurId", async (req, res) => {
  try {
    const utilisateurId = req.params.utilisateurId;
    const deletedUtilisateur = await Utilisateur.findByIdAndRemove(
      utilisateurId
    );
    if (!deletedUtilisateur) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
    res.json(deletedUtilisateur);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de l'utilisateur" });
  }
});

module.exports = router;
