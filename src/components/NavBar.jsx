import PropTypes from "prop-types";
import HamburgerMenuButton from "./HamburgerMenuButton";
import NavLinks from "./NavLinks";

function NavBar({
  isDropdownOpen,
  cartItemCount,
  toggleDropdown,
  closeDropdown,
}) {
  return (
    <nav>
      <HamburgerMenuButton toggleDropdown={toggleDropdown} />
      <NavLinks
        isDropdownOpen={isDropdownOpen}
        cartItemCount={cartItemCount}
        closeDropdown={closeDropdown}
      />
    </nav>
  );
}

NavBar.propTypes = {
  isDropdownOpen: PropTypes.bool.isRequired,
  cartItemCount: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default NavBar;
