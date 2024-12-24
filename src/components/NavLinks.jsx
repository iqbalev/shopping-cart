import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLinks({ isMenuOpen, cartItemCount }) {
  return (
    <ul
      className={`sm:flex ${
        !isMenuOpen
          ? "hidden gap-6"
          : "absolute sm:static top-8 right-0 px-4 py-2 sm:gap-4 z-10 sm:z-auto border sm:border-none rounded-sm bg-white sm:bg-transparent"
      }`}
    >
      <li>
        <Link to="shop">Shop</Link>
      </li>
      <li>
        <Link to="cart">
          {cartItemCount !== 0 ? `Cart (${cartItemCount})` : "Cart"}
        </Link>
      </li>
    </ul>
  );
}

NavLinks.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  cartItemCount: PropTypes.number.isRequired,
};

export default NavLinks;
