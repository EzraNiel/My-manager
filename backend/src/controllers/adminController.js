const Admin = require("../models/Admins");

// Créer un nouvel administrateur
exports.createAdmin = async (req, res) => {
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
};

// Récupérer tous les administrateurs
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des administrateurs" });
  }
};

// Récupérer un administrateur par son ID
exports.getAdminById = async (req, res) => {
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
};
// Ajoutez ici d'autres méthodes pour mettre à jour et supprimer un administrateur si nécessaire
