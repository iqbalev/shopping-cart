import PropTypes from "prop-types";
import HamburgerButton from "./HamburgerButton";
import NavMenu from "./NavMenu";

function NavBar({
  isMobileNavMenuOpen,
  cartItemCount,
  toggleMobileNavMenu,
  closeMobileNavMenu,
}) {
  return (
    <nav className="flex items-center justify-center">
      <HamburgerButton toggleMobileNavMenu={toggleMobileNavMenu} />
      <NavMenu
        isMobileNavMenuOpen={isMobileNavMenuOpen}
        cartItemCount={cartItemCount}
        closeMobileNavMenu={closeMobileNavMenu}
      />
    </nav>
  );
}

NavBar.propTypes = {
  isMobileNavMenuOpen: PropTypes.bool.isRequired,
  cartItemCount: PropTypes.number.isRequired,
  toggleMobileNavMenu: PropTypes.func.isRequired,
  closeMobileNavMenu: PropTypes.func.isRequired,
};

export default NavBar;
