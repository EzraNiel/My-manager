const express = require("express");
const router = express.Router();
const Admin = require("../models/Admins");

// Route pour créer un nouvel administrateur
router.post("/admins", async (req, res) => {
  try {
    const { nom_admin, motDePass_Admin } = req.body;
    const newAdmin = new Admin({ nom_admin, motDePass_Admin });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Erreur lors de la création de l'administrateur" });
  }
});

// Route pour récupérer tous les administrateurs
router.get("/admins", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des administrateurs" });
  }
});

// Route pour récupérer un administrateur par son ID
router.get("/admins/:adminId", async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ error: "Administrateur non trouvé" });
    }
    res.json(admin);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de l'administrateur" });
  }
});

// Route pour mettre à jour un administrateur par son ID
router.put("/admins/:adminId", async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const updates = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, updates, {
      new: true,
    });
    if (!updatedAdmin) {
      return res.status(404).json({ error: "Administrateur non trouvé" });
    }
    res.json(updatedAdmin);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la mise à jour de l'administrateur" });
  }
});

// Route pour supprimer un administrateur par son ID
router.delete("/admins/:adminId", async (req, res) => {
  try {
    const adminId = req.params.adminId;
    const deletedAdmin = await Admin.findByIdAndRemove(adminId);
    if (!deletedAdmin) {
      return res.status(404).json({ error: "Administrateur non trouvé" });
    }
    res.json(deletedAdmin);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression de l'administrateur" });
  }
});

module.exports = router;
