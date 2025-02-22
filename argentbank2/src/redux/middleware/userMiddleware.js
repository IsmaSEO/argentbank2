import apiService from "../../services/apiService";
import {
  setUserProfile,
  updateUserProfile,
  userError,
} from "../slices/userSlice";

//Fonction pour récupèrer les informations du profil
export const fetchUserProfile = (token) => async (dispatch) => {
  try {
    const profile = await apiService.getUserProfile(token);
    dispatch(setUserProfile(profile));
  } catch (error) {
    console.error("Erreur lors de la récupération du profil :", error);
    dispatch(userError());
  }
};

//Fonction pour maj des informations utilisateur
export const editUserProfile = (token, updatedProfile) => async (dispatch) => {
  try {
    await apiService.editUserProfile(token, updatedProfile);
    dispatch(updateUserProfile(updatedProfile));
  } catch (error) {
    console.error("Erreur lors de la modification du profil :", error);
    dispatch(userError());
  }
};
