import apiService from "../../services/apiService";
import { authError, loginSuccess, logout } from "../slices/authSlice";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const token = await apiService.signInUser(credentials);
    dispatch(loginSuccess(token));
    // Vérification si Remember Me est activé pour stocker le token
    if (credentials.rememberMe) {
      localStorage.setItem("token", token); // Stockage du token pour une connexion persistante
      localStorage.setItem("rememberMe", "true"); // Enregistrement de l'état Remember Me
    } else {
      localStorage.removeItem("rememberMe"); // Suppression de l'option Remember Me si décochée
      localStorage.removeItem("token"); // Suppression immédiate du token
    }
  } catch (error) {
    handleAuthError(error, dispatch);
  }
};

// Fonction pour gérer les erreurs d'authentification
const handleAuthError = (error, dispatch) => {
  const errorMessage =
    error.response?.data?.message ||
    "Une erreur est survenue lors de la connexion.";
  dispatch(authError(errorMessage));
  console.error("Erreur d'authentification :", errorMessage);
};

// Fonction pour gérer la déconnexion après navigation
export const checkAuthOnNavigation = () => (dispatch) => {
  const rememberMe = localStorage.getItem("rememberMe") === "true";

  if (!rememberMe) {
    dispatch(logout()); // Déconnexion de l'utilisateur après navigation
  }
};

// Fonction pour gérer la déconnexion
export const handleLogout = (navigate) => (dispatch) => {
  // Réinitialisation de l'état Redux (déconnexion)
  dispatch(logout());
  // Redirection de l'utilisateur vers la page de connexion
  navigate("/login");
};
