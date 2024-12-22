import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ cartItemCount }) {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="cart">
            {cartItemCount !== 0 ? `Cart (${cartItemCount})` : "Cart"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};

export default NavBar;
