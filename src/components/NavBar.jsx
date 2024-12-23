import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ cartItemCount, isMenuOpen, toggleMenu }) {
  return (
    <nav className="relative">
      <button type="button" onClick={toggleMenu} className="sm:hidden">
        <span className="block w-6 h-0.5  bg-neutral-800 mb-1"></span>{" "}
        <span className="block w-6 h-0.5 bg-neutral-800 mb-1"></span>{" "}
        <span className="block w-6 h-0.5  bg-neutral-800"></span>
      </button>
      <ul
        className={
          !isMenuOpen
            ? "hidden gap-6 sm:flex"
            : "absolute p-2 top-8 right-0 w-24 bg-neutral-800 text-white z-20 gap-4 border rounded-sm sm:flex sm:static sm:z-auto sm:text-black sm:bg-transparent sm:border-none sm:transform-none sm:w-auto"
        }
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
    </nav>
  );
}

NavBar.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default NavBar;
