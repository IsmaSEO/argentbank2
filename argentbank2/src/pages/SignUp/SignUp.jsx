import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { loginUser } from "../../redux/middleware/authMiddleware";
import "./SignUp.css";

export default function SignUp() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isAuthenticated, errorMessage } = useSelector((state) => state.auth);

  if (isAuthenticated) return <Navigate to="/profile" replace />;

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="signup-page">
      <Navbar />

      <div className="signup-form-container">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <div className="signup-input-wrapper">
            <label htmlFor="firstName" className="signup-label">
              First Name
            </label>
            <input
              {...register("firstName", { required: "First name is required" })}
              type="text"
              id="firstName"
              placeholder="First Name"
              className="signup-input"
              autoComplete="given-name"
              aria-label="First Name"
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName.message}</p>
            )}
          </div>

          <div className="signup-input-wrapper">
            <label htmlFor="lastName" className="signup-label">
              Last Name
            </label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="signup-input"
              autoComplete="family-name"
              aria-label="Last Name"
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName.message}</p>
            )}
          </div>

          <div className="signup-input-wrapper">
            <label htmlFor="email" className="signup-label">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              placeholder="Email"
              className="signup-input"
              autoComplete="email"
              aria-label="Email"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="signup-input-wrapper">
            <label htmlFor="password" className="signup-label">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              type="password"
              id="password"
              placeholder="Password"
              className="signup-input"
              autoComplete="current-password"
              aria-label="Password"
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        {errorMessage && (
          <p className="error-message global-error">{errorMessage}</p>
        )}
      </div>

      <Footer />
    </div>
  );
}
