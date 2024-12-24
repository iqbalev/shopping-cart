import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavLinks({ isDropdownMenuOpen, cartItemCount, closeDropdownMenu }) {
  return (
    <ul
      className={`sm:flex ${
        !isDropdownMenuOpen
          ? "hidden gap-6"
          : "absolute sm:static top-8 right-0 px-4 py-2 sm:gap-4 z-10 sm:z-auto border sm:border-none rounded-sm bg-white sm:bg-transparent"
      }`}
    >
      <li>
        <Link to="shop" onClick={closeDropdownMenu}>
          Shop
        </Link>
      </li>
      <li>
        <Link to="cart" onClick={closeDropdownMenu}>
          {cartItemCount !== 0 ? `Cart (${cartItemCount})` : "Cart"}
        </Link>
      </li>
    </ul>
  );
}

NavLinks.propTypes = {
  isDropdownMenuOpen: PropTypes.bool.isRequired,
  cartItemCount: PropTypes.number.isRequired,
  closeDropdownMenu: PropTypes.func.isRequired,
};

export default NavLinks;
