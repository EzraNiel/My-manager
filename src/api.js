// Dans un fichier dédié à la gestion des requêtes API (par exemple, api.js)
import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Assurez-vous que l'URL de base correspond à celle de vos routes backend
});

// Fonction pour définir le jeton JWT dans les en-têtes de la demande
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export default api;
