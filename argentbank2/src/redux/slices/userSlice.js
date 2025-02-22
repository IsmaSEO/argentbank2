import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: "",
  firstName: "",
  lastName: "",
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      // Maj complète du profil utilisateur
      return { ...state, ...action.payload, error: false };
    },
    updateUserProfile: (state, action) => {
      // Maj des champs modifiés du profil
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    userError: (state) => {
      state.error = true;
    },
  },
});

export const { setUserProfile, updateUserProfile, userError } =
  userSlice.actions;
export default userSlice.reducer;
