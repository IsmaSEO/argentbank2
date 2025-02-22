import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import AccountItem from "../../components/Account/AccountItem/AccountItem";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  editUserProfile,
  fetchUserProfile,
} from "../../redux/middleware/userMiddleware";
import "./UserProfil.css";

const UserProfil = () => {
  const dispatch = useDispatch();

  // Récupération des informations utilisateur depuis le store Redux
  const { firstName, lastName } = useSelector((state) => state.user);
  const { token, isAuthenticated } = useSelector((state) => state.auth);

  // État pour gérer le mode édition
  const [editMode, setEditMode] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");

  // Effet pour récupérer le profil utilisateur quand le token est disponible
  useEffect(() => {
    if (token) {
      dispatch(fetchUserProfile(token));
    }
  }, [dispatch, token]);

  // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  // Fonction pour activer le mode édition et préremplir les champs avec les données actuelles
  const handleEdit = () => {
    setEditMode(true);
    setUpdatedFirstName(firstName);
    setUpdatedLastName(lastName);
  };

  // Fonction pour sauvegarder les nouvelles informations de l'utilisateur
  const handleSave = () => {
    dispatch(
      editUserProfile(token, {
        firstName: updatedFirstName,
        lastName: updatedLastName,
      })
    );
    setEditMode(false);
  };

  return (
    <div>
      <Navbar firstName={firstName} />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          {editMode ? (
            <div className="edit-fields">
              <input
                type="text"
                value={updatedFirstName}
                onChange={(e) => setUpdatedFirstName(e.target.value)}
                placeholder="First Name"
              />
              <input
                type="text"
                value={updatedLastName}
                onChange={(e) => setUpdatedLastName(e.target.value)}
                placeholder="Last Name"
              />
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          ) : (
            <button className="edit-btn" onClick={handleEdit}>
              Edit Name
            </button>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>

        <section className="account">
          <AccountItem
            accountTitle="Argent Bank Checking (x8349)"
            accountAmount="$2,082.79"
            accountAmountDescription="Available Balance"
          />
        </section>

        <section className="account">
          <AccountItem
            accountTitle="Argent Bank Savings (x6712)"
            accountAmount="$10,928.42"
            accountAmountDescription="Available Balance"
          />
        </section>

        <section className="account">
          <AccountItem
            accountTitle="Argent Bank Credit Card (x8349)"
            accountAmount="$184.30"
            accountAmountDescription="Current Balance"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfil;
