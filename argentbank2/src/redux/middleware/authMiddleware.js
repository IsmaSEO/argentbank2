import apiService from "../../services/apiService";
import { authError, loginSuccess, logout } from "../slices/authSlice";

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const token = await apiService.signInUser(credentials);
    dispatch(loginSuccess(token));
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

// Fonction pour gérer la déconnexion
export const handleLogout = (navigate) => (dispatch) => {
  // Réinitialisation de l'état Redux (déconnexion)
  dispatch(logout());
  // Redirection de l'utilisateur vers la page de connexion
  navigate("/signin");
};
