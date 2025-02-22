import PropTypes from "prop-types";
import "./FeatureItem.css";

const FeatureItem = ({ icon, title, description }) => (
  <div className="feature-item">
    <img src={icon} alt={title} className="feature-icon" />
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
