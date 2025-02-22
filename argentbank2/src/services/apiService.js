import axios from "axios";

// Définition de l'URL de base de l'API
const API_BASE_URL = "http://localhost:3001/api/v1";

// Création de l'instance Axios préconfigurée avec l'URL de base et les en-têtes
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Fonction pour ajouter le jeton d'authentification dans les en-têtes
const setAuthHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// Fonction pour gérer les erreurs API et affichage du message d'erreur
const handleApiError = (error) => {
  console.error("Erreur API :", error);
  throw new Error(error.response?.data?.message || "Erreur serveur.");
};

// Création des fonctions pour les endpoints API
const apiService = {
  // Fonction pour connecter un utilisateur et récupérer le token d'authentification
  signInUser: async (credentials) => {
    try {
      const response = await apiClient.post("/user/login", credentials);
      return response.data.body.token;
    } catch (error) {
      handleApiError(error);
    }
  },

  // Fonction pour récupérer les informations du profil utilisateur
  getUserProfile: async (token) => {
    try {
      const response = await apiClient.post(
        "/user/profile",
        {},
        setAuthHeader(token)
      );
      return response.data.body;
    } catch (error) {
      handleApiError(error);
    }
  },

  // Fonction pour modifier les informations du profil utilisateur
  editUserProfile: async (token, updatedProfile) => {
    try {
      await apiClient.put(
        "/user/profile",
        updatedProfile,
        setAuthHeader(token)
      );
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default apiService;
