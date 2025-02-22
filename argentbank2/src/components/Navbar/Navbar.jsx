import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogout } from '../../redux/middleware/authMiddleware';

const Navbar = ({ firstName }) => {
  const currentPath = window.location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Appel au middleware pour gérer la déconnexion
  const onLogout = () => {
    dispatch(handleLogout(navigate));
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {currentPath === "/profile" ? (
          <div>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <button className="main-nav-item logout-btn" onClick={onLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </div>
        ) : (
          <Link className="main-nav-item" to="/signin">
            <i className="fa-solid fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string,
};

export default Navbar;
