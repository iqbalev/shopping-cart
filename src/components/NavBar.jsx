import PropTypes from "prop-types";
import HamburgerMenuButton from "./HamburgerMenuButton";
import NavLinks from "./NavLinks";

function NavBar({
  cartItemCount,
  isDropdownMenuOpen,
  toggleDropdownMenu,
  closeDropdownMenu,
}) {
  return (
    <nav className="relative">
      <HamburgerMenuButton toggleDropdownMenu={toggleDropdownMenu} />
      <NavLinks
        isDropdownMenuOpen={isDropdownMenuOpen}
        cartItemCount={cartItemCount}
        closeDropdownMenu={closeDropdownMenu}
      />
    </nav>
  );
}

NavBar.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
  isDropdownMenuOpen: PropTypes.bool.isRequired,
  toggleDropdownMenu: PropTypes.func.isRequired,
  closeDropdownMenu: PropTypes.func.isRequired,
};

export default NavBar;
