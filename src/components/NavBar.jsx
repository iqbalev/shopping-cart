import PropTypes from "prop-types";
import HamburgerMenuButton from "./HamburgerMenuButton";
import NavLinks from "./NavLinks";

function NavBar({ cartItemCount, isMenuOpen, toggleMenu }) {
  return (
    <nav className="relative">
      <HamburgerMenuButton toggleMenu={toggleMenu} />
      <NavLinks isMenuOpen={isMenuOpen} cartItemCount={cartItemCount} />
    </nav>
  );
}

NavBar.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default NavBar;
