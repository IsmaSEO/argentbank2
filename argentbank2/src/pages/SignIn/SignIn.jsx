import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { loginUser } from "../../redux/middleware/authMiddleware";
import "./SignIn.css";

export default function SignIn() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isAuthenticated, errorMessage } = useSelector((state) => state.auth);

  // Si l'utilisateur est déjà connecté, redirection vers la page profil
  if (isAuthenticated) return <Navigate to="/profile" replace />;

  // Fonction de soumission du formulaire
  const onSubmit = (data) => {
    dispatch(loginUser(data)); // Dispatch de l'action login
  };

  return (
    <div className="signin-page">
      <Navbar />
      <div className="signin-box">
        <div className="signin-icons">
          <i className="fa-solid fa-user-circle"></i>
        </div>
        <h1 className="signin-title">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signin-input-wrapper">
            <label htmlFor="username" className="signin-label">
              Username
            </label>
            <input
              {...register("email", { required: "Username is required" })}
              type="email"
              id="username"
              className="signin-input"
              autoComplete="username"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="signin-input-wrapper">
            <label htmlFor="password" className="signin-label">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              className="signin-input"
              autoComplete="current-password"
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          <div className="remember-wrapper">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>

      <Footer />
    </div>
  );
}
