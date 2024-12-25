import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLinks({ isDropdownOpen, cartItemCount, closeDropdown }) {
  return (
    <ul
      className={`sm:flex ${
        !isDropdownOpen
          ? "hidden gap-6"
          : "absolute sm:static top-8 right-0 px-4 py-2 sm:gap-4 z-10 sm:z-auto border sm:border-none rounded-sm bg-white sm:bg-transparent"
      }`}
    >
      <li>
        <Link to="shop" onClick={closeDropdown}>
          Shop
        </Link>
      </li>
      <li>
        <Link to="cart" onClick={closeDropdown}>
          {cartItemCount !== 0 ? `Cart (${cartItemCount})` : "Cart"}
        </Link>
      </li>
    </ul>
  );
}

NavLinks.propTypes = {
  isDropdownOpen: PropTypes.bool.isRequired,
  cartItemCount: PropTypes.number.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default NavLinks;
