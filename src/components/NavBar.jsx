import PropTypes from "prop-types";
import HamburgerMenuButton from "./HamburgerMenuButton";
import NavLinks from "./NavLinks";

function NavBar({
  isDropdownOpen,
  dropdownRef,
  cartItemCount,
  toggleDropdown,
  closeDropdown,
}) {
  return (
    <nav className="relative">
      <HamburgerMenuButton toggleDropdown={toggleDropdown} />
      <NavLinks
        isDropdownOpen={isDropdownOpen}
        dropdownRef={dropdownRef}
        cartItemCount={cartItemCount}
        closeDropdown={closeDropdown}
      />
    </nav>
  );
}

NavBar.propTypes = {
  isDropdownOpen: PropTypes.bool.isRequired,
  dropdownRef: PropTypes.object.isRequired,
  cartItemCount: PropTypes.number.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default NavBar;
