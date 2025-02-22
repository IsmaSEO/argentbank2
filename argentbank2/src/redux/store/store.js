import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../redux/slices/authSlice";
import userReducer from "../../redux/slices/userSlice";

// Création du store Redux avec DevTools activé uniquement en mode dev
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactivation pour éviter les erreurs avec le stockage du token
    }),
  devTools: import.meta.env.MODE !== "production", // Active Redux DevTools uniquement en mode dev
});

export default store;
