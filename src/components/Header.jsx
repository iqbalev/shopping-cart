import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "./NavBar";

function Header({ quantities }) {
  const [isMobileNavMenuOpen, setIsMobileNavMenuOpen] = useState(false);

  const cartItemCount = Object.values(quantities).reduce(
    (sum, itemQuantity) => sum + itemQuantity,
    0
  );

  function toggleMobileNavMenu() {
    setIsMobileNavMenuOpen(!isMobileNavMenuOpen);
  }

  function closeMobileNavMenu() {
    setIsMobileNavMenuOpen(false);
  }

  return (
    <header className="flex p-4 sm:p-1 justify-between gap-4 items-center sm:justify-around">
      <h1 className="text-2xl font-bold uppercase tracking-widest">
        <Link to="/">Shopping App</Link>
      </h1>
      <NavBar
        isMobileNavMenuOpen={isMobileNavMenuOpen}
        cartItemCount={cartItemCount}
        toggleMobileNavMenu={toggleMobileNavMenu}
        closeMobileNavMenu={closeMobileNavMenu}
      />
    </header>
  );
}

Header.propTypes = {
  quantities: PropTypes.object.isRequired,
};

export default Header;
