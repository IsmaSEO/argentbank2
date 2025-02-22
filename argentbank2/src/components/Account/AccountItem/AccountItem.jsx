import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./AccountItem.css";

const AccountItem = ({
  accountTitle,
  accountAmount,
  accountAmountDescription,
}) => (
  <section className="account-item">
    <div className="account-content">
      <h3 className="account-title">{accountTitle}</h3>
      <p className="account-amount">{accountAmount}</p>
      <p className="account-description">{accountAmountDescription}</p>
    </div>
    <div className="account-actions">
      <Link className="transaction-link" to="">
        <button className="view-transaction-btn">View transactions</button>
      </Link>
    </div>
  </section>
);

AccountItem.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountAmount: PropTypes.string.isRequired,
  accountAmountDescription: PropTypes.string.isRequired,
};

export default AccountItem;
