import { createSlice } from "@reduxjs/toolkit";

// Vérification et récupération sécurisée du token
const loadTokenFromStorage = () => {
  try {
    return localStorage.getItem("token") || null;
  } catch (error) {
    console.error("Erreur lors de la récupération du token :", error);
    return null;
  }
};

const initialState = {
  token: loadTokenFromStorage(), // Chargement du token
  isAuthenticated: !!loadTokenFromStorage(), // Détermine si l'utilisateur est connecté
  errorMessage: "", // Stockage des messages d'erreur
};

// Création du slice d'authentification
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      // Maj du token et de l'état connecté
      state.token = action.payload;
      state.isAuthenticated = true;
      try {
        localStorage.setItem("token", action.payload); // Stockage du token
      } catch (error) {
        console.error("Erreur lors de l'enregistrement du token :", error);
      }
    },
    logout: (state) => {
      // Suppression du token et réinitialisation de l'état
      state.token = null;
      state.isAuthenticated = false;
      try {
        localStorage.removeItem("token"); // Suppression du token
      } catch (error) {
        console.error("Erreur lors de la suppression du token :", error);
      }
    },
    authError: (state, action) => {
      // Stocke le message d'erreur dans l'état
      state.errorMessage = action.payload;
    },
  },
});

export const { loginSuccess, logout, authError } = authSlice.actions;
export default authSlice.reducer;
